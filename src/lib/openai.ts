import OpenAI from 'openai';
import { Language, DiagramType } from '../types';
import mermaid from 'mermaid';
import { toast } from '@/components/ui/toast';

const DEFAULT_ERROR_MESSAGE = 'Failed to generate diagram. Please check your API key and try again.';

// Initialize mermaid configuration with elegant styling
mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
  securityLevel: 'loose',
  logLevel: 'fatal', // Reduce console noise
  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
  fontSize: 16,
  flowchart: {
    htmlLabels: true,
    curve: 'basis',
    padding: 15,
    nodeSpacing: 50,
    rankSpacing: 50,
  },
  er: {
    useMaxWidth: false,
    entityPadding: 15,
    fontSize: 16,
    wrap: true
  },
  sequence: {
    useMaxWidth: false,
    boxMargin: 10,
    noteMargin: 10,
    messageMargin: 35,
    mirrorActors: false
  }
});

function getDiagramExample(type: DiagramType): string {
  switch (type) {
    case 'flowchart':
      return `flowchart TD
    A[Start] --> B{Is it valid?}
    B -->|Yes| C[OK]
    B -->|No| D[Error]`;

    case 'classDiagram':
      return `classDiagram
    class User {
      +String id
      +String name
      +login()
      +logout()
    }`;

    case 'erDiagram':
      return `erDiagram
    USER ||--o{ ORDER : places
    USER {
      string id
      string name
    }`;

    case 'stateDiagram':
      return `stateDiagram-v2
    [*] --> Still
    Still --> Moving
    Moving --> Still`;

    case 'sequenceDiagram':
      return `sequenceDiagram
    Alice->>John: Hello John
    John-->>Alice: Hi Alice`;

    default:
      return '';
  }
}

async function validateMermaidSyntax(code: string, type: DiagramType): Promise<boolean> {
  try {
    if (!code || typeof code !== 'string') {
      return false;
    }

    // Clean up the code
    const cleanCode = code
      .trim()
      .replace(/\r\n/g, '\n')
      .replace(/^\s+/gm, '')
      .replace(/\n+/g, '\n');

    if (!cleanCode) return false;

    // Remove any markdown code block markers
    const diagramCode = cleanCode.replace(/^```mermaid\n|\n```$/g, '');

    // Validate diagram type prefix
    const expectedPrefix = type === 'stateDiagram' ? 'stateDiagram-v2' : type;
    if (!diagramCode.toLowerCase().startsWith(expectedPrefix.toLowerCase())) {
      return false;
    }

    // Parse and validate the diagram
    await mermaid.parse(diagramCode);
    return true;
  } catch (error) {
    return false;
  }
}

export async function generateMermaidDiagram(
  code: string,
  language: Language,
  diagramType: DiagramType,
  apiKey: string
): Promise<string> {
  try {
    // Input validation
    if (!code?.trim()) {
      throw new Error('Please enter some code to generate a diagram.');
    }

    if (language === 'mermaid') {
      const isValid = await validateMermaidSyntax(code, diagramType);
      if (!isValid) {
        throw new Error('Invalid Mermaid syntax. Please check your diagram code.');
      }
      return code;
    }

    if (!apiKey?.trim()) {
      throw new Error('Please provide an OpenAI API key to generate diagrams from code.');
    }

    const openai = new OpenAI({ 
      apiKey,
      dangerouslyAllowBrowser: true
    });

    const example = getDiagramExample(diagramType);
    const diagramPrefix = diagramType === 'stateDiagram' ? 'stateDiagram-v2' : diagramType;

    const prompt = `Create a valid Mermaid.js diagram for this ${language} code. Follow these rules exactly:

1. Start with "${diagramPrefix}"
2. Use this exact format (but expanded for the input code):

${example}

3. Rules for ${diagramType}:
${diagramType === 'flowchart' ? `
- Use TD direction
- Use proper shapes: [] for process, {} for decision, () for start/end
- Connect nodes with -->
- Label connections with |text|` : diagramType === 'classDiagram' ? `
- Show classes with proper syntax
- Use + for public, - for private
- Show methods with ()
- Use proper relationship arrows` : diagramType === 'erDiagram' ? `
- Show entities and relationships
- Use proper cardinality ||--o{
- List key attributes in entities
- Use proper data types` : diagramType === 'stateDiagram' ? `
- Start with stateDiagram-v2
- Show states in []
- Use --> for transitions
- Label transitions after --` : `
- Show participants with proper names
- Use ->> for sync calls
- Use -->> for responses
- Put notes between calls`}

4. Input code to visualize:
${code}

Output only valid Mermaid.js syntax, nothing else.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a diagram generator that outputs only valid Mermaid.js syntax. No explanations or extra text."
        },
        { 
          role: "user", 
          content: prompt 
        }
      ],
      temperature: 0.1,
      max_tokens: 1000,
      top_p: 0.1,
      frequency_penalty: 0,
      presence_penalty: 0
    });

    let mermaidCode = completion.choices[0].message.content?.trim();
    
    if (!mermaidCode) {
      throw new Error('Failed to generate diagram. Please try again.');
    }

    // Clean up the generated code
    mermaidCode = mermaidCode
      .replace(/\r\n/g, '\n')
      .replace(/^\s+/gm, '')
      .replace(/\n+/g, '\n')
      .replace(/^```mermaid\n|\n```$/g, '')
      .trim();

    // Ensure the code starts with the correct diagram type
    if (!mermaidCode.toLowerCase().startsWith(diagramPrefix.toLowerCase())) {
      mermaidCode = `${diagramPrefix}\n${mermaidCode}`;
    }

    // Add default styling for flowcharts
    if (diagramType === 'flowchart' && !mermaidCode.includes('classDef')) {
      mermaidCode += `\nclassDef default fill:#f8fafc,stroke:#64748b,stroke-width:2px`;
    }

    // Validate the generated code
    const isValid = await validateMermaidSyntax(mermaidCode, diagramType);
    if (!isValid) {
      // If validation fails, try with a simpler diagram
      const simpleCode = `${diagramPrefix}\n    A[Code] --> B[Diagram]`;
      const isSimpleValid = await validateMermaidSyntax(simpleCode, diagramType);
      if (isSimpleValid) {
        return simpleCode;
      }
      throw new Error('Failed to generate a valid diagram. Please try again with simpler code.');
    }

    return mermaidCode;
  } catch (error: any) {
    // Handle specific error cases
    if (error?.status === 401) {
      throw new Error('Invalid API key. Please check your OpenAI API key and try again.');
    }
    
    if (error?.status === 429) {
      throw new Error('Rate limit exceeded. Please try again later.');
    }
    
    if (error?.status === 500) {
      throw new Error('OpenAI service error. Please try again later.');
    }

    throw new Error(error?.message || DEFAULT_ERROR_MESSAGE);
  }
}
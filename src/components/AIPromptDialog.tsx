import React from 'react';
import { Copy, Sparkles, ChevronDown } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { toast } from './ui/toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

interface AIPromptDialogProps {
  open: boolean;
  onClose: () => void;
}

const PROMPTS = {
  flowchart: {
    title: 'Flowchart Diagram',
    description: 'Convert code into a visual flowchart with process steps and decision points.',
    prompt: `Convert this code into a Mermaid.js flowchart diagram. Use TD direction, proper shapes ([] for process, {} for decision, () for start/end), and label connections with -->. Only output valid Mermaid syntax, nothing else.

Example format:
flowchart TD
    A[Start] --> B{Is it valid?}
    B -->|Yes| C[OK]
    B -->|No| D[Error]`
  },
  class: {
    title: 'Class Diagram',
    description: 'Visualize class structures, methods, and relationships.',
    prompt: `Convert this code into a Mermaid.js class diagram. Show classes with proper syntax, use + for public and - for private members, show methods with (), and use proper relationship arrows. Only output valid Mermaid syntax, nothing else.

Example format:
classDiagram
    class User {
        +String id
        +String name
        +login()
        +logout()
    }`
  },
  er: {
    title: 'ER Diagram',
    description: 'Create entity-relationship diagrams for database schemas.',
    prompt: `Convert this code into a Mermaid.js ER diagram. Show entities and relationships, use proper cardinality (||--o{), list key attributes in entities, and use proper data types. Only output valid Mermaid syntax, nothing else.

Example format:
erDiagram
    USER ||--o{ ORDER : places
    USER {
        string id
        string name
    }`
  },
  state: {
    title: 'State Diagram',
    description: 'Illustrate state transitions and system behavior.',
    prompt: `Convert this code into a Mermaid.js state diagram. Start with stateDiagram-v2, show states in [], use --> for transitions, and label transitions after --. Only output valid Mermaid syntax, nothing else.

Example format:
stateDiagram-v2
    [*] --> Still
    Still --> Moving
    Moving --> Still`
  },
  sequence: {
    title: 'Sequence Diagram',
    description: 'Show interactions between components over time.',
    prompt: `Convert this code into a Mermaid.js sequence diagram. Show participants with proper names, use ->> for sync calls, -->> for responses, and put notes between calls. Only output valid Mermaid syntax, nothing else.

Example format:
sequenceDiagram
    Alice->>John: Hello John
    John-->>Alice: Hi Alice`
  }
};

export function AIPromptDialog({ open, onClose }: AIPromptDialogProps) {
  const copyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    toast.success('Prompt copied to clipboard');
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-[600px] max-h-[85vh] overflow-hidden flex flex-col">
        <DialogHeader className="pb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#0070f3]" />
            <DialogTitle>Using AI Tools with Code Visualizer</DialogTitle>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Use AI tools like ChatGPT to convert your code into Mermaid diagram syntax. 
            Select a diagram type below to get started.
          </p>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto pr-2 -mr-2">
          <Accordion type="single" collapsible className="space-y-2">
            {Object.entries(PROMPTS).map(([key, { title, description, prompt }]) => (
              <AccordionItem key={key} value={key} className="border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline py-3">
                  <div className="flex flex-col items-start text-left">
                    <div className="font-medium">{title}</div>
                    <div className="text-xs text-muted-foreground">{description}</div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4">
                  <div className="space-y-3">
                    <div className="relative">
                      <pre className="p-3 rounded-lg bg-muted text-xs max-h-[200px] overflow-y-auto whitespace-pre-wrap break-words">
                        {prompt}
                      </pre>
                      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-muted to-transparent pointer-events-none" />
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full gap-2"
                      onClick={() => copyPrompt(prompt)}
                    >
                      <Copy className="w-4 h-4" />
                      Copy Prompt
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-6 p-4 rounded-lg bg-[#0070f3]/5 border border-[#0070f3]/10">
            <h3 className="font-medium text-sm mb-2">Quick Tips</h3>
            <ul className="text-xs space-y-1.5 text-muted-foreground">
              <li className="flex items-center gap-2">
                <ChevronDown className="w-3 h-3 text-[#0070f3]" />
                Click on a diagram type to view its prompt
              </li>
              <li className="flex items-center gap-2">
                <ChevronDown className="w-3 h-3 text-[#0070f3]" />
                Copy the prompt and paste it into ChatGPT
              </li>
              <li className="flex items-center gap-2">
                <ChevronDown className="w-3 h-3 text-[#0070f3]" />
                Add your code after the prompt
              </li>
              <li className="flex items-center gap-2">
                <ChevronDown className="w-3 h-3 text-[#0070f3]" />
                Use the generated Mermaid syntax in the editor
              </li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
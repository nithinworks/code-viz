export type Language = 
  | 'c' 
  | 'cpp' 
  | 'java' 
  | 'python' 
  | 'sql' 
  | 'mermaid' 
  | 'javascript' 
  | 'csharp' 
  | 'custom';

export type DiagramType = 
  | 'flowchart' 
  | 'classDiagram' 
  | 'erDiagram' 
  | 'stateDiagram' 
  | 'sequenceDiagram';

export interface UserProfile {
  id: string;
  email: string;
  openai_key?: string;
  diagram_count: number;
  created_at: string;
  updated_at: string;
}
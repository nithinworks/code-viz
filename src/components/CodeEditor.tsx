import React from 'react';
import { Language } from '../types';

interface CodeEditorProps {
  code: string;
  language: Language;
  onChange: (value: string) => void;
}

export function CodeEditor({ code, language, onChange }: CodeEditorProps) {
  return (
    <div className="h-full relative">
      {/* Move gradient behind the textarea */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/[0.03] dark:to-purple-500/[0.03]" />
      <textarea
        value={code}
        onChange={(e) => onChange(e.target.value)}
        className="relative w-full h-full resize-none p-4 font-mono text-sm leading-normal focus:outline-none bg-transparent text-gray-900 dark:text-white/90 placeholder:text-gray-400 dark:placeholder:text-gray-500"
        spellCheck="false"
        placeholder={`Enter your ${language === 'mermaid' ? 'Mermaid' : language} code here...`}
      />
    </div>
  );
}
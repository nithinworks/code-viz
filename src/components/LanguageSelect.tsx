import React from 'react';
import { Language } from '@/types';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

interface LanguageSelectProps {
  value: Language;
  onChange: (value: Language) => void;
  className?: string;
}

interface LanguageOption {
  value: Language;
  label: string;
  badge?: {
    text: string;
    variant: 'default' | 'premium' | 'secondary';
  };
  disabled?: boolean;
}

const languages: LanguageOption[] = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'cpp', label: 'C++' },
  { value: 'c', label: 'C' },
  { value: 'csharp', label: 'C#' },
  { value: 'sql', label: 'SQL' },
  { 
    value: 'mermaid', 
    label: 'Mermaid', 
    badge: { 
      text: 'Free unlimited',
      variant: 'premium'
    }
  },
  { 
    value: 'custom', 
    label: 'Custom Prompt', 
    badge: { 
      text: 'Coming soon',
      variant: 'secondary'
    },
    disabled: true
  },
];

export function LanguageSelect({ value, onChange, className }: LanguageSelectProps) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as Language)}
        className={cn(
          "flex-1 h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors hover:bg-accent focus:outline-none focus:ring-1 focus:ring-[#0070f3] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
      >
        {languages.map((lang) => (
          <option 
            key={lang.value} 
            value={lang.value}
            disabled={lang.disabled}
          >
            {lang.label} {lang.badge?.text ? `(${lang.badge.text})` : ''}
          </option>
        ))}
      </select>
    </div>
  );
}
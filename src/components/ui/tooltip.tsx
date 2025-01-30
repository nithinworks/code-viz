import React from 'react';
import { Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

const codingTips = [
  "Use meaningful variable names to improve code readability",
  "Comment your code, but make the comments meaningful",
  "Keep your functions small and focused on a single task",
  "Learn keyboard shortcuts for your IDE to boost productivity",
  "Write tests before implementing features (TDD)",
  "Use version control even for small projects",
  "Regularly refactor your code to maintain quality",
  "Handle errors gracefully with try-catch blocks",
  "Keep your dependencies up to date",
  "Document your code and APIs",
  "Use consistent code formatting",
  "Cache expensive operations when possible",
  "Optimize your database queries",
  "Follow the DRY (Don't Repeat Yourself) principle",
  "Use meaningful commit messages"
];

export function DailyTip() {
  // Get a random tip based on the current date
  const today = new Date();
  const tipIndex = (today.getFullYear() * 100 + today.getMonth() * 31 + today.getDate()) % codingTips.length;
  const tip = codingTips[tipIndex];

  return (
    <div className="relative group">
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0070f3]/10 text-[#0070f3] text-sm font-medium cursor-help">
        <Lightbulb className="w-4 h-4" />
        Daily Tip
      </div>
      
      {/* Tooltip */}
      <div className={cn(
        "absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 p-3 rounded-lg",
        "bg-white/80 backdrop-blur-md border shadow-lg",
        "text-sm text-foreground",
        "opacity-0 invisible group-hover:opacity-100 group-hover:visible",
        "transition-all duration-200 z-50"
      )}>
        <div className="relative">
          {/* Tooltip arrow */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 border-8 border-transparent border-b-white/80" />
          
          {/* Tip content */}
          <p>{tip}</p>
        </div>
      </div>
    </div>
  );
}
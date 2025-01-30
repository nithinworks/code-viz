import React from 'react';
import { AlertCircle, AlertTriangle, Info } from 'lucide-react';
import { AnalysisResult } from '@/lib/code-analysis';

interface AnalysisPanelProps {
  results: AnalysisResult[];
  isLoading: boolean;
}

export function AnalysisPanel({ results, isLoading }: AnalysisPanelProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#0070f3] border-t-transparent"></div>
      </div>
    );
  }

  if (!results.length) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
        <div className="w-16 h-16 mb-4">
          <Info className="w-full h-full" />
        </div>
        <p className="text-lg">Enter some code to see the analysis</p>
      </div>
    );
  }

  return (
    <div className="h-full overflow-auto p-4 space-y-3">
      {results.map((result, index) => (
        <div
          key={index}
          className={`
            p-4 rounded-lg border flex items-start gap-3
            ${result.type === 'error' ? 'bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/20' : ''}
            ${result.type === 'warning' ? 'bg-yellow-50 dark:bg-yellow-900/10 border-yellow-100 dark:border-yellow-900/20' : ''}
            ${result.type === 'info' ? 'bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-900/20' : ''}
          `}
        >
          {result.type === 'error' && (
            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
          )}
          {result.type === 'warning' && (
            <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 shrink-0 mt-0.5" />
          )}
          {result.type === 'info' && (
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          )}
          <div className="flex-1 text-sm">
            <p className={`
              font-medium
              ${result.type === 'error' ? 'text-red-600 dark:text-red-400' : ''}
              ${result.type === 'warning' ? 'text-yellow-600 dark:text-yellow-400' : ''}
              ${result.type === 'info' ? 'text-blue-600 dark:text-blue-400' : ''}
            `}>
              {result.message}
            </p>
            {result.line && (
              <p className="text-muted-foreground mt-1">
                Line {result.line}{result.column ? `, Column ${result.column}` : ''}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
import React, { useState } from 'react';
import { SearchCode, Loader2 } from 'lucide-react';
import { CodeEditor } from '@/components/CodeEditor';
import { AnalysisPanel } from '@/components/code-analysis/AnalysisPanel';
import { analyzeCode } from '@/lib/code-analysis';
import { Language } from '@/types';
import { toast } from '@/components/ui/toast';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { AnalysisResult } from '@/lib/code-analysis';

const analysisLanguages = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'sql', label: 'SQL' }
] as const;

export function CodeAnalysis() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState<Language>('javascript');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<AnalysisResult[]>([]);

  const handleAnalyze = async () => {
    if (!code.trim()) {
      toast.error('Please enter some code to analyze');
      return;
    }

    setIsAnalyzing(true);
    try {
      const analysisResults = await analyzeCode(code, language);
      setResults(analysisResults);
    } catch (error: any) {
      console.error('Analysis error:', error);
      toast.error(error.message || 'Failed to analyze code');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <SearchCode className="w-6 h-6 text-[#0070f3]" />
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#0070f3] to-[#00a2ff]">
            Code Analysis
          </h1>
          <Badge variant="success">Free</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Panel - Code Input */}
        <div className="flex flex-col h-[600px]">
          <div className="flex gap-4 mb-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="flex-1 h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors hover:bg-accent focus:outline-none focus:ring-1 focus:ring-[#0070f3]"
            >
              {analysisLanguages.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>
            <Button
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="bg-[#0070f3] hover:bg-[#0070f3]/90 text-white shadow-sm"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <SearchCode className="w-4 h-4 mr-2" />
                  Analyze Code
                </>
              )}
            </Button>
          </div>

          <div className="flex-1">
            <CodeEditor
              code={code}
              language={language}
              onChange={setCode}
            />
          </div>
        </div>

        {/* Right Panel - Analysis Results */}
        <div className="h-[600px] bg-card rounded-xl shadow-lg border border-border overflow-hidden">
          <AnalysisPanel
            results={results}
            isLoading={isAnalyzing}
          />
        </div>
      </div>
    </div>
  );
}
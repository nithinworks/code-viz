import React, { useState, lazy, Suspense } from 'react';
import { Moon, Sun, BrainCircuit, Sparkles, Info } from 'lucide-react';
import { useTheme } from './hooks/useTheme';
import { Button } from './components/ui/button';
import { toast } from './components/ui/toast';
import { Sidebar } from './components/Sidebar';
import { Badge } from './components/ui/badge';

// Lazy load components
const Dashboard = lazy(() => import('./pages/Dashboard').then(m => ({ default: m.Dashboard })));
const CodeEditor = lazy(() => import('./components/CodeEditor').then(m => ({ default: m.CodeEditor })));
const DiagramPreview = lazy(() => import('./components/DiagramPreview').then(m => ({ default: m.DiagramPreview })));
const CodeAnalysis = lazy(() => import('./pages/CodeAnalysis').then(m => ({ default: m.CodeAnalysis })));
const FlowCreator = lazy(() => import('./pages/FlowCreator').then(m => ({ default: m.FlowCreator })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const JSVisualizer = lazy(() => import('./pages/JSVisualizer').then(m => ({ default: m.JSVisualizer })));
const TaskBoard = lazy(() => import('./pages/TaskBoard').then(m => ({ default: m.TaskBoard })));
const AIPromptDialog = lazy(() => import('./components/AIPromptDialog').then(m => ({ default: m.AIPromptDialog })));

// Loading component
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
      <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#0070f3] border-t-transparent"></div>
    </div>
  );
}

function App() {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const [code, setCode] = useState('');
  const [mermaidCode, setMermaidCode] = useState('');
  const [showPromptDialog, setShowPromptDialog] = useState(false);

  // Get current route
  const route = window.location.pathname;

  const handlePreview = () => {
    if (!code.trim()) {
      toast.error('Please enter some Mermaid code first');
      return;
    }
    setMermaidCode(code);
  };

  const renderContent = () => {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        {route === '/' && <Dashboard />}
        {route === '/visualizer' && (
          <div className="max-w-[1200px] mx-auto">
            {/* AI Code Visualizer Content */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <BrainCircuit className="w-6 h-6 text-[#0070f3]" />
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#0070f3] to-[#00a2ff]">
                    Code Visualizer
                  </h1>
                  <Badge variant="default">Beta</Badge>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={() => setShowPromptDialog(true)}
              >
                <Info className="w-4 h-4" />
                How to use AI tools
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Panel - Code Input */}
              <div className="flex flex-col h-[600px]">
                <div className="mb-4 p-4 rounded-lg bg-[#0070f3]/5 border border-[#0070f3]/10">
                  <h2 className="font-medium text-[#0070f3] mb-2">Mermaid Diagram Code</h2>
                  <p className="text-sm text-muted-foreground">
                    Paste your Mermaid syntax here. You can use AI tools like ChatGPT to convert your code into Mermaid format.
                    Click the "How to use AI tools" button above for prompts and examples.
                  </p>
                </div>

                <div className="relative flex-1 min-h-0 mb-4 rounded-lg overflow-hidden shadow-sm bg-white/5 backdrop-blur-md backdrop-saturate-150 border border-white/10 dark:border-white/5">
                  <CodeEditor
                    code={code}
                    language="mermaid"
                    onChange={setCode}
                  />
                </div>

                <Button
                  onClick={handlePreview}
                  className="relative w-full bg-[#0070f3] hover:bg-[#0070f3]/90 text-white shadow-sm h-11 text-base z-10"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Preview Diagram
                </Button>
              </div>

              {/* Right Panel - Diagram Preview */}
              <div className="relative h-[600px]">
                <DiagramPreview
                  mermaidCode={mermaidCode}
                  onDownload={() => {}}
                  onShare={() => {}}
                  onClear={() => setMermaidCode('')}
                />
              </div>
            </div>
          </div>
        )}
        {route === '/js-visualizer' && <JSVisualizer />}
        {route === '/analysis' && <CodeAnalysis />}
        {route === '/flow' && <FlowCreator />}
        {route === '/tasks' && <TaskBoard />}
        {route === '/contact' && <Contact />}
        {!['/', '/visualizer', '/js-visualizer', '/analysis', '/flow', '/tasks', '/contact'].includes(route) && (
          <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)]">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">404</h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Page not found</p>
            <Button
              variant="link"
              className="mt-4 text-[#0070f3]"
              onClick={() => window.location.href = '/'}
            >
              Go back home
            </Button>
          </div>
        )}
      </Suspense>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />
      <div className="relative pl-16 lg:pl-64">
        {/* Header */}
        <div className="relative h-16 border-b flex items-center justify-end px-6 bg-background z-20">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="relative rounded-lg hover:bg-secondary z-10"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative p-6">
          {renderContent()}
        </div>
      </div>

      <Suspense fallback={null}>
        {showPromptDialog && (
          <AIPromptDialog
            open={showPromptDialog}
            onClose={() => setShowPromptDialog(false)}
          />
        )}
      </Suspense>
    </div>
  );
}

export default App;
import React, { useState, useEffect, useRef } from 'react';
import { Code2, Download, ZoomIn, ZoomOut, Maximize2, Move } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeEditor } from '@/components/CodeEditor';
import { toast } from '@/components/ui/toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import * as js2flowchart from 'js2flowchart';

const DEFAULT_CODE = `function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}`;

export function JSVisualizer() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [isGenerating, setIsGenerating] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [svgContent, setSvgContent] = useState('');
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [isPanning, setIsPanning] = useState(false);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Handle mouse events for panning
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isPanning && e.button === 0) { // Left click only
      setIsDragging(true);
      setDragStart({
        x: e.clientX - pan.x,
        y: e.clientY - pan.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Auto-generate flowchart with debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      generateFlowchart();
    }, 500); // Debounce for 500ms

    return () => clearTimeout(timer);
  }, [code]);

  const generateFlowchart = async () => {
    setIsGenerating(true);
    setError(null);

    try {
      // First validate the JavaScript code
      try {
        new Function(code);
      } catch (error: any) {
        throw new Error(`Invalid JavaScript: ${error.message}`);
      }

      // Generate flowchart with error handling
      let flowchart;
      try {
        flowchart = js2flowchart.convertCodeToSvg(code);
      } catch (error: any) {
        console.error('Flowchart generation error:', error);
        throw new Error('Failed to generate flowchart. Please check your code syntax.');
      }

      if (!flowchart) {
        throw new Error('Failed to generate flowchart');
      }
      
      // Add some styling to the SVG
      const styledSvg = flowchart.replace('<svg ', `<svg style="max-width: 100%; height: auto; font-family: 'Inter', system-ui, -apple-system, sans-serif;" `);
      
      setSvgContent(styledSvg);
      setError(null);
      // Reset pan position when new flowchart is generated
      setPan({ x: 0, y: 0 });
    } catch (error: any) {
      console.error('Error generating flowchart:', error);
      setError(error.message || 'Failed to generate flowchart');
      setSvgContent('');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = (format: 'svg' | 'png') => {
    try {
      if (!svgContent) {
        toast.error('Generate a flowchart first');
        return;
      }

      if (format === 'svg') {
        // Download SVG
        const blob = new Blob([svgContent], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'flowchart.svg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      } else {
        // Convert SVG to PNG
        const svgBlob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);
        const img = new Image();
        
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const scale = 2; // For better quality
          canvas.width = img.width * scale;
          canvas.height = img.height * scale;
          
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            toast.error('Failed to create canvas context');
            return;
          }
          
          // Set white background
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          // Draw the image
          ctx.scale(scale, scale);
          ctx.drawImage(img, 0, 0);
          
          // Convert to PNG and download
          const pngUrl = canvas.toDataURL('image/png');
          const link = document.createElement('a');
          link.href = pngUrl;
          link.download = 'flowchart.png';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };
        
        img.src = url;
      }

      toast.success(`Downloaded as ${format.toUpperCase()}`);
    } catch (err) {
      console.error('Download error:', err);
      toast.error('Failed to download diagram');
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Apply zoom and pan to SVG
  useEffect(() => {
    if (previewRef.current && svgContent) {
      const svg = previewRef.current.querySelector('svg');
      if (svg) {
        svg.style.transform = `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`;
        svg.style.transformOrigin = 'center';
        svg.style.transition = isDragging ? 'none' : 'transform 0.2s ease';
      }
    }
  }, [zoom, pan, isDragging, svgContent]);

  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <Code2 className="w-6 h-6 text-[#0070f3]" />
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#0070f3] to-[#00a2ff]">
            JavaScript Visualizer
          </h1>
          <Badge variant="success">Free</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Panel - Code Input */}
        <div className="flex flex-col h-[600px]">
          <div className="flex-1">
            <CodeEditor
              code={code}
              language="javascript"
              onChange={setCode}
            />
          </div>
        </div>

        {/* Right Panel - Flowchart Preview */}
        <div ref={containerRef} className="relative h-[600px] bg-card rounded-xl border shadow-lg overflow-hidden">
          {/* Controls */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full shadow-lg border border-white/20 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsPanning(!isPanning)}
              className={`hover:bg-white/10 ${isPanning ? 'bg-white/20' : ''}`}
              title={isPanning ? "Disable Pan" : "Enable Pan"}
            >
              <Move className="w-4 h-4" />
            </Button>
            <div className="w-px h-4 bg-white/20" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setZoom(z => Math.min(z + 0.1, 2))}
              className="hover:bg-white/10"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </Button>
            <div className="w-px h-4 bg-white/20" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setZoom(z => Math.max(z - 0.1, 0.5))}
              className="hover:bg-white/10"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </Button>
            <div className="w-px h-4 bg-white/20" />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFullscreen}
              className="hover:bg-white/10"
              title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            >
              <Maximize2 className="w-4 h-4" />
            </Button>
            <div className="w-px h-4 bg-white/20" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-white/10"
                  title="Download"
                >
                  <Download className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuItem onClick={() => handleDownload('svg')}>
                  Download as SVG
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleDownload('png')}>
                  Download as PNG
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Preview Container */}
          <div 
            ref={previewRef}
            className="w-full h-full overflow-hidden p-4 flex items-center justify-center"
            style={{
              cursor: isPanning ? (isDragging ? 'grabbing' : 'grab') : 'default',
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {isGenerating ? (
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border shadow-lg">
                <div className="w-4 h-4 border-2 border-[#0070f3] border-t-transparent rounded-full animate-spin" />
                <span className="text-sm font-medium">Generating...</span>
              </div>
            ) : error ? (
              <div className="text-red-500 text-center max-w-md">
                <p className="font-medium mb-2">Error</p>
                <p className="text-sm">{error}</p>
              </div>
            ) : svgContent ? (
              <div dangerouslySetInnerHTML={{ __html: svgContent }} />
            ) : (
              <div className="flex flex-col items-center justify-center text-muted-foreground">
                <svg className="w-16 h-16 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
                <p className="text-lg">Enter JavaScript code to see the flowchart</p>
              </div>
            )}
          </div>

          {/* Pan Mode Indicator */}
          {isPanning && (
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 px-3 py-1.5 rounded-full bg-[#0070f3] text-white text-sm font-medium animate-fade-in">
              Pan Mode
            </div>
          )}

          {/* Zoom Level Indicator */}
          {svgContent && (
            <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm font-medium">
              {Math.round(zoom * 100)}%
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
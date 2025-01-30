import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import { Download, ZoomIn, ZoomOut, Maximize2, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface DiagramPreviewProps {
  mermaidCode: string;
  onDownload: (format: 'png' | 'jpg' | 'svg') => void;
  onShare: () => void;
  onClear: () => void;
}

export function DiagramPreview({ mermaidCode, onDownload, onShare, onClear }: DiagramPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const originalSvgRef = useRef<SVGElement | null>(null);
  const [scale, setScale] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button === 0) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
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

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  // Handle fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const createPlaceholder = () => {
    if (!previewRef.current) return;
    
    previewRef.current.innerHTML = `
      <div class="flex flex-col items-center justify-center h-full text-gray-400 dark:text-gray-600">
        <div class="w-16 h-16 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 18 22 12 16 6"></path><path d="M8 6 2 12 8 18"></path>
          </svg>
        </div>
        <p class="text-lg">Generate a diagram to see the preview here</p>
      </div>
    `;
  };

  const handleDownload = async (format: 'svg' | 'png' | 'jpg') => {
    try {
      if (!originalSvgRef.current) {
        throw new Error('No diagram to download');
      }

      // Clone the original SVG to avoid modifying the displayed one
      const svgElement = originalSvgRef.current.cloneNode(true) as SVGElement;

      // Set fixed dimensions for the output
      const outputWidth = 1920;
      const outputHeight = 1080;
      svgElement.setAttribute('width', outputWidth.toString());
      svgElement.setAttribute('height', outputHeight.toString());

      // Add white background
      const background = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      background.setAttribute('width', '100%');
      background.setAttribute('height', '100%');
      background.setAttribute('fill', 'white');
      svgElement.insertBefore(background, svgElement.firstChild);

      // Get original dimensions
      const bbox = originalSvgRef.current.getBBox();
      const scale = Math.min(
        (outputWidth * 0.8) / bbox.width,
        (outputHeight * 0.8) / bbox.height
      );

      // Center the diagram
      const diagramX = (outputWidth - bbox.width * scale) / 2 - bbox.x * scale;
      const diagramY = (outputHeight - bbox.height * scale) / 2 - bbox.y * scale;

      // Create a group for the diagram content
      const contentGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      while (svgElement.childNodes.length > 1) { // Skip the background rect
        contentGroup.appendChild(svgElement.childNodes[1]);
      }
      contentGroup.setAttribute('transform', `translate(${diagramX},${diagramY}) scale(${scale})`);
      svgElement.appendChild(contentGroup);

      if (format === 'svg') {
        // Add watermark for SVG
        const watermark = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        watermark.textContent = 'Made with Code Visualizer';
        watermark.setAttribute('x', (outputWidth - 40).toString());
        watermark.setAttribute('y', (outputHeight - 40).toString());
        watermark.setAttribute('text-anchor', 'end');
        watermark.setAttribute('font-family', 'Inter, system-ui, -apple-system, sans-serif');
        watermark.setAttribute('font-size', '28');
        watermark.setAttribute('font-weight', '600');
        watermark.setAttribute('fill', 'rgba(0, 112, 243, 0.8)');
        
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
        filter.setAttribute('id', 'shadow');
        filter.innerHTML = `
          <feDropShadow dx="2" dy="2" stdDeviation="2" flood-opacity="0.1"/>
        `;
        defs.appendChild(filter);
        svgElement.appendChild(defs);
        watermark.setAttribute('filter', 'url(#shadow)');
        svgElement.appendChild(watermark);

        // Download SVG
        const svgData = new XMLSerializer().serializeToString(svgElement);
        const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `diagram.svg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      } else {
        // For PNG/JPG, convert SVG to canvas
        const svgData = new XMLSerializer().serializeToString(svgElement);
        const svgDataUrl = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgData)))}`;
        
        const canvas = document.createElement('canvas');
        canvas.width = outputWidth;
        canvas.height = outputHeight;
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('Failed to get canvas context');

        // Create image from SVG
        const img = new Image();
        img.src = svgDataUrl;
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });

        // Draw white background
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw the image
        ctx.drawImage(img, 0, 0);

        // Add watermark
        ctx.save();
        ctx.font = '600 28px Inter, system-ui, -apple-system, sans-serif';
        ctx.fillStyle = 'rgba(0, 112, 243, 0.8)';
        const text = 'Made with Code Visualizer';
        const metrics = ctx.measureText(text);
        const x = outputWidth - 40;
        const y = outputHeight - 40;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
        ctx.shadowBlur = 4;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.fillText(text, x - metrics.width, y);
        ctx.restore();

        // Convert to data URL and download
        const dataUrl = canvas.toDataURL(`image/${format}`, 1.0);
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `diagram.${format}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      onDownload(format);
    } catch (error: any) {
      console.error('Error downloading diagram:', error);
      setError('Failed to download diagram');
    }
  };

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'default',
      securityLevel: 'loose',
      logLevel: 'fatal',
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      fontSize: 16,
      flowchart: {
        htmlLabels: true,
        curve: 'basis',
        padding: 15,
        nodeSpacing: 50,
        rankSpacing: 50,
      }
    });

    const renderDiagram = async () => {
      if (!previewRef.current) return;

      if (!mermaidCode) {
        createPlaceholder();
        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        const { svg } = await mermaid.render('diagram-' + Date.now(), mermaidCode);
        
        // Create a temporary container to parse the SVG
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = svg;
        const svgElement = tempContainer.querySelector('svg');
        
        if (svgElement) {
          // Store the original SVG for downloads
          originalSvgRef.current = svgElement.cloneNode(true) as SVGElement;
          
          // Style the preview SVG
          svgElement.style.cssText = `
            background-color: white;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
            max-width: 90%;
            max-height: 90%;
            transform-origin: center;
            transition: transform 0.1s ease;
          `;

          // Style diagram elements
          svgElement.querySelectorAll('rect, circle, path, polygon').forEach(el => {
            if (!el.getAttribute('stroke')) {
              el.setAttribute('stroke', '#4b5563');
            }
            if (el.tagName === 'rect' && !el.getAttribute('fill')) {
              el.setAttribute('fill', '#ffffff');
            }
          });

          svgElement.querySelectorAll('text').forEach(text => {
            text.style.fontSize = '16px';
            text.style.fontFamily = 'system-ui, -apple-system, sans-serif';
          });
        }
        
        // Update the preview
        previewRef.current.innerHTML = tempContainer.innerHTML;

      } catch (err: any) {
        console.error('Error rendering diagram:', err);
        setError('Failed to render diagram. Please check your syntax.');
        createPlaceholder();
      } finally {
        setIsLoading(false);
      }
    };

    renderDiagram();
  }, [mermaidCode]);

  useEffect(() => {
    if (previewRef.current) {
      const svgElement = previewRef.current.querySelector('svg');
      if (svgElement) {
        svgElement.style.transform = `scale(${scale}) translate(${pan.x}px, ${pan.y}px)`;
      }
    }
  }, [scale, pan]);

  return (
    <div className="relative h-full rounded-xl overflow-hidden shadow-lg border border-white/10 dark:border-white/5 bg-white/5 backdrop-blur-md backdrop-saturate-150">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/[0.03] dark:to-purple-500/[0.03]" />
      
      {/* Controls Panel */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-4 flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg backdrop-saturate-150 rounded-full shadow-lg border border-white/20 dark:border-white/10 transition-all duration-200 z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setScale(s => Math.min(s + 0.1, 2))}
          className="hover:bg-white/10 dark:hover:bg-white/5"
          title="Zoom In"
        >
          <ZoomIn className="h-4 w-4 text-gray-600 dark:text-gray-300" />
        </Button>
        <div className="w-px h-4 bg-white/20 dark:bg-white/10" />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setScale(s => Math.max(s - 0.1, 0.3))}
          className="hover:bg-white/10 dark:hover:bg-white/5"
          title="Zoom Out"
        >
          <ZoomOut className="h-4 w-4 text-gray-600 dark:text-gray-300" />
        </Button>
        <div className="w-px h-4 bg-white/20 dark:bg-white/10" />
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleFullscreen}
          className="hover:bg-white/10 dark:hover:bg-white/5"
          title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        >
          <Maximize2 className="h-4 w-4 text-gray-600 dark:text-gray-300" />
        </Button>
        <div className="w-px h-4 bg-white/20 dark:bg-white/10" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-white/10 dark:hover:bg-white/5"
              title="Download"
            >
              <Download className="h-4 w-4 text-gray-600 dark:text-gray-300" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md backdrop-saturate-150 border-white/20 dark:border-white/10">
            <DropdownMenuItem onClick={() => handleDownload('svg')}>
              Download as SVG
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleDownload('png')}>
              Download as PNG
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleDownload('jpg')}>
              Download as JPG
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="w-px h-4 bg-white/20 dark:bg-white/10" />
        <Button
          variant="ghost"
          size="icon"
          onClick={onClear}
          className="hover:bg-white/10 dark:hover:bg-white/5"
          title="Clear Preview"
        >
          <Trash2 className="h-4 w-4 text-gray-600 dark:text-gray-300" />
        </Button>
      </div>

      {/* Preview Container */}
      <div
        ref={containerRef}
        className="relative w-full h-full bg-white/50 dark:bg-gray-900/50 overflow-hidden"
      >
        {/* Diagram Preview */}
        <div
          ref={previewRef}
          className="absolute inset-0 flex items-center justify-center p-8"
          style={{
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />
      </div>

      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 z-[150] flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600"></div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="absolute bottom-4 left-4 right-4 z-[150] bg-red-50/90 dark:bg-red-900/50 backdrop-blur-sm border border-red-100 dark:border-red-800 rounded-lg p-3">
          <p className="text-red-600 dark:text-red-200 text-sm font-medium">{error}</p>
        </div>
      )}
    </div>
  );
}
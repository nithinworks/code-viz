import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import {
  Square,
  Circle,
  Triangle,
  Type,
  Image as ImageIcon,
  Download,
  Undo,
  Redo,
  Database,
  Cloud,
  Server,
  Hexagon,
  Laptop,
  FileCode,
  Folder,
  User,
  Trash2,
  ArrowRight,
  Diamond,
  Move,
  ZoomIn,
  ZoomOut,
  Maximize2
} from 'lucide-react';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { toast } from '../ui/toast';

interface WhiteboardProps {
  className?: string;
}

export function Whiteboard({ className }: WhiteboardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isPanning, setIsPanning] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Save canvas state to history
  const saveState = () => {
    if (!fabricRef.current) return;
    
    const json = JSON.stringify(fabricRef.current.toJSON());
    setHistory(prev => [...prev.slice(0, historyIndex + 1), json]);
    setHistoryIndex(prev => prev + 1);
  };

  // Load state from history
  const loadState = (state: string) => {
    if (!fabricRef.current) return;
    
    fabricRef.current.loadFromJSON(JSON.parse(state), () => {
      fabricRef.current?.renderAll();
    });
  };

  // Handle undo
  const handleUndo = () => {
    if (historyIndex <= 0 || !fabricRef.current) return;
    
    const newIndex = historyIndex - 1;
    loadState(history[newIndex]);
    setHistoryIndex(newIndex);
  };

  // Handle redo
  const handleRedo = () => {
    if (historyIndex >= history.length - 1 || !fabricRef.current) return;
    
    const newIndex = historyIndex + 1;
    loadState(history[newIndex]);
    setHistoryIndex(newIndex);
  };

  // Add text
  const addText = () => {
    if (!fabricRef.current) return;

    const text = new fabric.IText('Double click to edit', {
      left: 50,
      top: 50,
      fontSize: 20,
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
    });

    fabricRef.current.add(text);
    fabricRef.current.setActiveObject(text);
    fabricRef.current.renderAll();
    saveState();
  };

  // Handle image upload with size limit
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!fabricRef.current || !e.target.files || !e.target.files[0]) return;

    const file = e.target.files[0];
    const reader = new FileReader();

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error('Please select a valid image file');
      return;
    }

    // Validate file size (max 1MB)
    const MAX_SIZE = 1 * 1024 * 1024; // 1MB in bytes
    if (file.size > MAX_SIZE) {
      toast.error('Image size should be less than 1MB');
      return;
    }

    reader.onload = (event) => {
      if (!event.target?.result) return;

      const img = new Image();
      img.onload = () => {
        // Create fabric image with loaded data
        const fabricImage = new fabric.Image(img, {
          // Scale image to reasonable size if too large
          scaleX: Math.min(1, 300 / img.width),
          scaleY: Math.min(1, 300 / img.height)
        });

        fabricRef.current?.add(fabricImage);
        fabricRef.current?.centerObject(fabricImage);
        fabricRef.current?.setActiveObject(fabricImage);
        fabricRef.current?.renderAll();
        saveState();
        toast.success('Image added successfully');
      };

      img.src = event.target.result.toString();
    };

    reader.onerror = () => {
      toast.error('Failed to load image');
    };

    reader.readAsDataURL(file);
  };

  // Handle export
  const handleExport = (format: 'svg' | 'png' | 'jpg') => {
    if (!fabricRef.current) return;

    try {
      let dataUrl: string;
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const filename = `whiteboard-${timestamp}`;

      // Add watermark
      const watermark = new fabric.Text('Made with Code Visualizer', {
        fontSize: 16,
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        fill: 'rgba(0, 0, 0, 0.3)',
        selectable: false,
        evented: false
      });

      // Position watermark at bottom right
      watermark.set({
        left: fabricRef.current.width! - watermark.width! - 20,
        top: fabricRef.current.height! - watermark.height! - 20
      });

      // Temporarily add watermark
      fabricRef.current.add(watermark);
      fabricRef.current.renderAll();

      if (format === 'svg') {
        dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(fabricRef.current.toSVG())}`;
      } else {
        dataUrl = fabricRef.current.toDataURL({
          format: format,
          quality: 1,
          multiplier: 2
        });
      }

      // Remove watermark after export
      fabricRef.current.remove(watermark);
      fabricRef.current.renderAll();

      // Create download link
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `${filename}.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success(`Exported as ${format.toUpperCase()}`);
    } catch (error) {
      console.error('Export error:', error);
      toast.error('Failed to export diagram');
    }
  };

  // Clear canvas
  const clearCanvas = () => {
    if (!fabricRef.current) return;
    
    if (confirm('Are you sure you want to clear the canvas? This action cannot be undone.')) {
      fabricRef.current.clear();
      fabricRef.current.setBackgroundColor('#ffffff', () => {
        fabricRef.current?.renderAll();
      });
      saveState();
      toast.success('Canvas cleared');
    }
  };

  // Initialize canvas
  useEffect(() => {
    const initCanvas = () => {
      if (!containerRef.current || fabricRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();

      // Create canvas element with larger dimensions
      const canvas = document.createElement('canvas');
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      container.appendChild(canvas);

      // Initialize Fabric canvas with larger dimensions
      const fabricCanvas = new fabric.Canvas(canvas, {
        width: rect.width,
        height: rect.height,
        backgroundColor: '#ffffff',
        selection: true,
        preserveObjectStacking: true,
        stopContextMenu: true,
        renderOnAddRemove: true,
        fireRightClick: true,
        enableRetinaScaling: true
      });

      // Enable smooth panning
      fabricCanvas.on('mouse:down', (opt) => {
        const evt = opt.e;
        if (evt.altKey || isPanning) {
          fabricCanvas.isDragging = true;
          fabricCanvas.selection = false;
          fabricCanvas.lastPosX = evt.clientX;
          fabricCanvas.lastPosY = evt.clientY;
          fabricCanvas.defaultCursor = 'grabbing';
          fabricCanvas.renderAll();
        }
      });

      fabricCanvas.on('mouse:move', (opt) => {
        if (fabricCanvas.isDragging) {
          const evt = opt.e;
          const vpt = fabricCanvas.viewportTransform!;
          
          // Calculate new position with smooth movement
          const dx = evt.clientX - fabricCanvas.lastPosX;
          const dy = evt.clientY - fabricCanvas.lastPosY;
          
          vpt[4] += dx;
          vpt[5] += dy;
          
          fabricCanvas.lastPosX = evt.clientX;
          fabricCanvas.lastPosY = evt.clientY;
          
          // Request render frame for smooth animation
          requestAnimationFrame(() => {
            fabricCanvas.renderAll();
          });
        }
      });

      fabricCanvas.on('mouse:up', () => {
        fabricCanvas.isDragging = false;
        fabricCanvas.selection = true;
        fabricCanvas.defaultCursor = 'default';
        fabricCanvas.renderAll();
      });

      // Improved mouse wheel zooming
      fabricCanvas.on('mouse:wheel', (opt) => {
        const delta = opt.e.deltaY;
        let newZoom = fabricCanvas.getZoom() - delta / 1000;
        
        // Limit zoom range
        newZoom = Math.min(Math.max(0.1, newZoom), 5);
        
        // Calculate zoom point
        const point = {
          x: opt.e.offsetX,
          y: opt.e.offsetY,
        };
        
        // Smooth zoom animation
        fabricCanvas.zoomToPoint(point, newZoom);
        setZoom(newZoom);
        
        opt.e.preventDefault();
        opt.e.stopPropagation();
      });

      // Save state on object modifications
      fabricCanvas.on('object:modified', saveState);
      fabricCanvas.on('object:added', saveState);
      fabricCanvas.on('object:removed', saveState);

      fabricRef.current = fabricCanvas;
      setIsInitialized(true);
      saveState();
    };

    // Initialize after a short delay to ensure container is ready
    const timer = setTimeout(initCanvas, 100);

    return () => {
      clearTimeout(timer);
      if (fabricRef.current) {
        fabricRef.current.dispose();
      }
    };
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current || !fabricRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();

      fabricRef.current.setDimensions({
        width: rect.width,
        height: rect.height
      });
      fabricRef.current.renderAll();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Add shape to canvas with enhanced shapes
  const addShape = (shapeType: string) => {
    if (!fabricRef.current) return;

    let shape: fabric.Object;

    switch (shapeType) {
      case 'arrow':
        // Create an arrow
        const arrow = [
          'M 0 0 L 100 0 L 95 -5 M 100 0 L 95 5'
        ];
        shape = new fabric.Path(arrow.join(' '), {
          stroke: '#000000',
          strokeWidth: 2,
          fill: 'transparent'
        });
        break;

      case 'diamond':
        // Diamond shape for decision nodes
        shape = new fabric.Path('M 50 0 L 100 50 L 50 100 L 0 50 Z', {
          fill: 'transparent',
          stroke: '#000000',
          strokeWidth: 2
        });
        break;

      case 'process':
        // Rectangle with rounded corners for process nodes
        shape = new fabric.Rect({
          width: 120,
          height: 60,
          fill: 'transparent',
          stroke: '#000000',
          strokeWidth: 2,
          rx: 8,
          ry: 8
        });
        break;

      case 'io':
        // Parallelogram for input/output
        shape = new fabric.Path('M 20 0 L 120 0 L 100 60 L 0 60 Z', {
          fill: 'transparent',
          stroke: '#000000',
          strokeWidth: 2
        });
        break;

      case 'database':
        // Enhanced database symbol
        const dbPath = [
          'M 0 20',
          'Q 50 0 100 20',
          'L 100 80',
          'Q 50 100 0 80 Z',
          'M 0 20',
          'Q 50 40 100 20'
        ];
        shape = new fabric.Path(dbPath.join(' '), {
          fill: 'transparent',
          stroke: '#000000',
          strokeWidth: 2
        });
        break;

      case 'cloud':
        // Enhanced cloud shape
        const cloudPath = [
          'M 25,60',
          'a20,20 0 0,1 0,-40',
          'a20,20 1 0,1 25,-10',
          'a30,30 1 0,1 35,10',
          'a20,20 1 0,1 0,40',
          'z'
        ];
        shape = new fabric.Path(cloudPath.join(' '), {
          fill: 'transparent',
          stroke: '#000000',
          strokeWidth: 2,
          scaleX: 1.5,
          scaleY: 1.5
        });
        break;

      case 'actor':
        // Stick figure for UML actor
        const actorPath = [
          'M 25 25 L 25 75', // body
          'M 0 50 L 50 50',  // arms
          'M 25 75 L 10 100', // left leg
          'M 25 75 L 40 100', // right leg
          'M 15 15 A 10 10 0 1 0 35 15 A 10 10 0 1 0 15 15' // head
        ];
        shape = new fabric.Path(actorPath.join(' '), {
          stroke: '#000000',
          strokeWidth: 2,
          fill: 'transparent'
        });
        break;

      case 'note':
        // Note shape with folded corner
        const notePath = [
          'M 0 0',
          'L 70 0',
          'L 100 30',
          'L 100 100',
          'L 0 100 Z',
          'M 70 0',
          'L 70 30',
          'L 100 30'
        ];
        shape = new fabric.Path(notePath.join(' '), {
          fill: 'transparent',
          stroke: '#000000',
          strokeWidth: 2
        });
        break;

      default:
        return;
    }

    fabricRef.current.add(shape);
    shape.center();
    fabricRef.current.setActiveObject(shape);
    fabricRef.current.renderAll();
    saveState();
  };

  // Add line with arrow
  const addLine = () => {
    if (!fabricRef.current) return;

    const line = new fabric.Line([50, 50, 200, 50], {
      stroke: '#000000',
      strokeWidth: 2,
      selectable: true,
      hasControls: true,
      hasBorders: true,
      originX: 'center',
      originY: 'center'
    });

    const arrow = new fabric.Triangle({
      width: 20,
      height: 20,
      fill: '#000000',
      left: 200,
      top: 50,
      angle: 90
    });

    const group = new fabric.Group([line, arrow], {
      hasControls: true,
      hasBorders: true,
      selectable: true
    });

    fabricRef.current.add(group);
    fabricRef.current.renderAll();
    saveState();
  };

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Handle zoom
  const handleZoom = (delta: number) => {
    if (!fabricRef.current) return;

    let newZoom = fabricRef.current.getZoom() + delta;
    newZoom = Math.min(Math.max(0.1, newZoom), 5);
    
    fabricRef.current.setZoom(newZoom);
    setZoom(newZoom);
  };

  return (
    <div className={`flex flex-col ${className}`}>
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 mb-4 p-4 bg-white/10 backdrop-blur-md backdrop-saturate-150 border border-white/20 rounded-lg">
        {/* Basic Shapes */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => addShape('process')}
            className="hover:bg-white/10"
            title="Process"
          >
            <Square className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => addShape('diamond')}
            className="hover:bg-white/10"
            title="Decision"
          >
            <Diamond className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => addShape('io')}
            className="hover:bg-white/10"
            title="Input/Output"
          >
            <Triangle className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={addLine}
            className="hover:bg-white/10"
            title="Arrow"
          >
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        <div className="w-px h-6 bg-white/20" />

        {/* UML/Technical Shapes */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => addShape('actor')}
            className="hover:bg-white/10"
            title="Actor"
          >
            <User className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => addShape('database')}
            className="hover:bg-white/10"
            title="Database"
          >
            <Database className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => addShape('cloud')}
            className="hover:bg-white/10"
            title="Cloud"
          >
            <Cloud className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => addShape('note')}
            className="hover:bg-white/10"
            title="Note"
          >
            <FileCode className="w-5 h-5" />
          </Button>
        </div>

        <div className="w-px h-6 bg-white/20" />

        {/* Canvas Controls */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsPanning(!isPanning)}
            className={`hover:bg-white/10 ${isPanning ? 'bg-white/20' : ''}`}
            title={isPanning ? "Disable Pan" : "Enable Pan"}
          >
            <Move className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleZoom(0.1)}
            className="hover:bg-white/10"
            title="Zoom In"
          >
            <ZoomIn className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleZoom(-0.1)}
            className="hover:bg-white/10"
            title="Zoom Out"
          >
            <ZoomOut className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleFullscreen}
            className="hover:bg-white/10"
            title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          >
            <Maximize2 className="w-5 h-5" />
          </Button>
        </div>

        <div className="w-px h-6 bg-white/20" />

        {/* Utilities */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => addText()}
            className="hover:bg-white/10"
            title="Add Text"
          >
            <Type className="w-5 h-5" />
          </Button>
          {/* Fixed Image Upload Button */}
          <div className="relative">
            <input
              type="file"
              id="image-upload"
              hidden
              accept="image/*"
              onChange={handleImageUpload}
              onClick={(e) => {
                (e.target as HTMLInputElement).value = '';
              }}
            />
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-white/10"
              title="Upload Image (max 1MB)"
              onClick={() => document.getElementById('image-upload')?.click()}
            >
              <ImageIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="w-px h-6 bg-white/20" />

        {/* History Controls */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleUndo}
            disabled={historyIndex <= 0}
            className="hover:bg-white/10"
            title="Undo"
          >
            <Undo className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleRedo}
            disabled={historyIndex >= history.length - 1}
            className="hover:bg-white/10"
            title="Redo"
          >
            <Redo className="w-5 h-5" />
          </Button>
        </div>

        <div className="w-px h-6 bg-white/20" />

        {/* Export & Clear */}
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-white/10"
                title="Export"
              >
                <Download className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <DropdownMenuItem onClick={() => handleExport('svg')}>
                Export as SVG
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExport('png')}>
                Export as PNG
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExport('jpg')}>
                Export as JPG
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="ghost"
            size="icon"
            onClick={clearCanvas}
            className="hover:bg-white/10"
            title="Clear Canvas"
          >
            <Trash2 className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Canvas Container */}
      <div 
        ref={containerRef}
        className="relative flex-1 bg-white rounded-lg shadow-lg overflow-hidden"
        style={{ 
          cursor: isPanning ? 'grab' : 'default',
          touchAction: 'none' // Prevent touch scrolling while using canvas
        }}
      >
        {/* Zoom Level Indicator */}
        <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm font-medium">
          {Math.round(zoom * 100)}%
        </div>

        {/* Pan Mode Indicator */}
        {isPanning && (
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[#0070f3] text-white text-sm font-medium animate-fade-in">
            Pan Mode
          </div>
        )}
      </div>
    </div>
  );
}
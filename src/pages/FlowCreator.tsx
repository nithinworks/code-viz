import React, { useCallback, useState, useEffect, useRef } from 'react';
import { Excalidraw } from '@excalidraw/excalidraw';
import type { ExcalidrawElement } from '@excalidraw/excalidraw/types/element/types';
import type { AppState, BinaryFiles } from '@excalidraw/excalidraw/types/types';
import { Flower as Flow, Maximize2, Minimize2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/toast';

//const FABRIC_LIBRARY_URL = 'https://libraries.excalidraw.com/libraries/mwc360/microsoft-fabric-architecture-icons.excalidrawlib';

export function FlowCreator() {
  const [excalidrawAPI, setExcalidrawAPI] = useState<any>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoadingLibrary, setIsLoadingLibrary] = useState(false);
  const editorContainerRef = useRef<HTMLDivElement>(null);

  // Load Microsoft Fabric Architecture Icons library
  // useEffect(() => {
  //   const loadLibrary = async () => {
  //     if (!excalidrawAPI || isLoadingLibrary) return;

  //     try {
  //       setIsLoadingLibrary(true);

  //       // Fetch the library from the URL
  //       // const response = await fetch(FABRIC_LIBRARY_URL);
  //       // if (!response.ok) {
  //       //   throw new Error('Failed to fetch library');
  //       // }

  //       //const libraryData = await response.json();

  //       // Load the library into Excalidraw
  //       // await excalidrawAPI.updateLibrary({
  //       //   libraryItems: libraryData.libraryItems,
  //       //   openLibraryMenu: true // Open library menu to show the loaded icons
  //       // });
        
  //       toast.success('Microsoft Fabric Architecture Icons loaded');
  //     } catch (error) {
  //       console.error('Error loading library:', error);
  //       toast.error('Failed to load icon library. The editor will still work without the icons.');
  //     } finally {
  //       setIsLoadingLibrary(false);
  //     }
  //   };

  //   loadLibrary();
  // }, [excalidrawAPI]);

  const onChange = useCallback(
    (elements: readonly ExcalidrawElement[], appState: AppState, files: BinaryFiles) => {
      // Auto-save on change
      if (excalidrawAPI) {
        try {
          const serializedData = JSON.stringify({ elements, appState, files });
          localStorage.setItem('excalidraw-data', serializedData);
        } catch (error) {
          console.error('Error saving diagram:', error);
        }
      }
    },
    [excalidrawAPI]
  );

  // Load saved data on mount
  useEffect(() => {
    if (excalidrawAPI) {
      try {
        const savedData = localStorage.getItem('excalidraw-data');
        if (savedData) {
          const { elements, appState, files } = JSON.parse(savedData);
          excalidrawAPI.updateScene({
            elements,
            appState: {
              ...appState,
              theme: 'light', // Always use light theme for consistency
            },
            files,
          });
          toast.success('Previous diagram loaded');
        }
      } catch (error) {
        console.error('Error loading diagram:', error);
      }
    }
  }, [excalidrawAPI]);

  // Handle fullscreen
  const toggleFullscreen = useCallback(() => {
    if (!editorContainerRef.current) return;

    if (!document.fullscreenElement) {
      editorContainerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((err) => {
        console.error('Error attempting to enable fullscreen:', err);
        toast.error('Failed to enter fullscreen mode');
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch((err) => {
        console.error('Error attempting to exit fullscreen:', err);
        toast.error('Failed to exit fullscreen mode');
      });
    }
  }, []);

  // Update fullscreen state on change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Flow className="w-6 h-6 text-[#0070f3]" />
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#0070f3] to-[#00a2ff]">
              Diagram Creator
            </h1>
            <Badge variant="destructive">Hot</Badge>
          </div>
        </div>

        {/* Fullscreen Button */}
        <Button
          variant="outline"
          className="gap-2"
          onClick={toggleFullscreen}
          title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isFullscreen ? (
            <Minimize2 className="w-4 h-4" />
          ) : (
            <Maximize2 className="w-4 h-4" />
          )}
          {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        </Button>
      </div>

      {/* Loading Indicator */}
      {isLoadingLibrary && (
        <div className="absolute top-4 right-4 z-50 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-[#0070f3] border-t-transparent rounded-full animate-spin" />
            <span className="text-sm">Loading icons...</span>
          </div>
        </div>
      )}

      {/* Excalidraw Container */}
      <div 
        ref={editorContainerRef}
        className={`
          h-[calc(100vh-140px)] rounded-xl overflow-hidden glass bg-white
          ${isFullscreen ? 'fixed inset-0 z-50 h-screen rounded-none' : ''}
        `}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
        
        <Excalidraw
          excalidrawAPI={setExcalidrawAPI}
          onChange={onChange}
          theme="light" // Always use light theme
          initialData={{
            appState: {
              viewBackgroundColor: '#ffffff',
              currentItemFontFamily: 'Inter',
              defaultFontFamily: 'Inter',
              gridSize: 20,
              showGrid: true,
              theme: 'light', // Set initial theme to light
            },
          }}
          UIOptions={{
            canvasActions: {
              changeViewBackgroundColor: true,
              clearCanvas: true,
              export: {
                saveFileToDisk: true,
                saveToActiveFile: true,
                exportToBackend: false,
              },
              loadScene: true,
              saveToActiveFile: true,
              theme: false, // Disable theme switching
            },
          }}
        />
      </div>
    </div>
  );
}

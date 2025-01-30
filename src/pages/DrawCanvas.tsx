import React from 'react';
import { PenTool } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Whiteboard } from '@/components/whiteboard/Whiteboard';

export function DrawCanvas() {
  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <PenTool className="w-6 h-6 text-[#0070f3]" />
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#0070f3] to-[#00a2ff]">
            Draw Canvas
          </h1>
          <Badge>Beta</Badge>
        </div>
      </div>

      {/* Whiteboard - Increased height */}
      <Whiteboard className="h-[calc(100vh-140px)]" />
    </div>
  );
}
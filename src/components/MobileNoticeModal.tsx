import React, { useState, useEffect } from 'react';
import { Monitor, Tablet, Smartphone, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

export function MobileNoticeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile (screen width < 640px)
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 640;
      setIsMobile(isMobileDevice);
      
      // Only show modal on mobile if it hasn't been dismissed before
      if (isMobileDevice && !localStorage.getItem('mobile-notice-dismissed')) {
        setIsOpen(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    localStorage.setItem('mobile-notice-dismissed', 'true');
  };

  if (!isMobile) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <div className="flex justify-end">
            <button
              onClick={handleDismiss}
              className="p-2 rounded-full hover:bg-accent transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-4 p-3 rounded-full bg-[#0070f3]/5">
              <Smartphone className="w-5 h-5 text-[#0070f3]" />
              <Tablet className="w-6 h-6 text-[#0070f3]" />
              <Monitor className="w-7 h-7 text-[#0070f3]" />
            </div>
          </div>
          <DialogTitle className="text-center text-xl">
            Best Experience on Larger Screens
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 text-center px-2">
          <p className="text-sm text-muted-foreground">
            Code Visualizer is optimized for desktop and tablet screens to provide the best possible experience for code visualization and diagram creation.
          </p>
          
          <div className="p-4 rounded-lg bg-[#0070f3]/5 border border-[#0070f3]/10">
            <p className="text-sm font-medium text-[#0070f3]">
              For the optimal experience, we recommend using:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>• Desktop computer</li>
              <li>• Laptop</li>
              <li>• Tablet in landscape mode</li>
            </ul>
          </div>

          <button
            onClick={handleDismiss}
            className="w-full px-4 py-2 rounded-lg bg-[#0070f3] text-white font-medium hover:bg-[#0070f3]/90 transition-colors"
          >
            Continue Anyway
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
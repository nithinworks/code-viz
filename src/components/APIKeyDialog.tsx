import React, { useState } from 'react';
import { Key } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from './ui/dialog';
import { Button } from './ui/button';

interface APIKeyDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (apiKey: string) => void;
  apiKey: string;
}

export function APIKeyDialog({ open, onClose, onSubmit, apiKey }: APIKeyDialogProps) {
  const [key, setKey] = useState(apiKey);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!key.trim()) return;
    onSubmit(key.trim());
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-[#0070f3]/10 flex items-center justify-center">
            <Key className="h-6 w-6 text-[#0070f3]" />
          </div>
          <DialogTitle className="text-xl text-center">OpenAI API Key Required</DialogTitle>
          <DialogDescription className="text-center">
            Please add your OpenAI API key to use the AI Code Visualizer
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <input
              type="password"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="Enter your OpenAI API key"
              className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors hover:bg-accent focus:outline-none focus:ring-1 focus:ring-[#0070f3]"
              required
            />
            <p className="text-xs text-muted-foreground">
              Your API key is stored locally and never sent to our servers.
            </p>
          </div>
          <DialogFooter className="sm:justify-center">
            <Button
              type="submit"
              className="bg-[#0070f3] hover:bg-[#0070f3]/90 text-white shadow-sm"
            >
              Save API Key
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
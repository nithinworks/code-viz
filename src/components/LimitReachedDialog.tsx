import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from './ui/dialog';
import { Button } from './ui/button';
import { Lock } from 'lucide-react';

interface LimitReachedDialogProps {
  open: boolean;
  onClose: () => void;
  onAddKey: () => void;
  remainingGenerations: number;
}

export function LimitReachedDialog({
  open,
  onClose,
  onAddKey,
  remainingGenerations,
}: LimitReachedDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-[#0070f3]/10 flex items-center justify-center">
            <Lock className="h-6 w-6 text-[#0070f3]" />
          </div>
          <DialogTitle className="text-xl text-center">Generation Limit Reached</DialogTitle>
          <DialogDescription className="text-center">
            {remainingGenerations === 0 ? (
              "You've used all your free generations"
            ) : (
              `You have ${remainingGenerations} free ${remainingGenerations === 1 ? 'generation' : 'generations'} remaining`
            )}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground text-center">
            Add your OpenAI API key to unlock unlimited diagram generations and access to all features.
          </p>
        </div>
        <DialogFooter className="sm:justify-center">
          <Button
            type="button"
            onClick={onAddKey}
            className="bg-[#0070f3] hover:bg-[#0070f3]/90 text-white shadow-sm"
          >
            Add API Key
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
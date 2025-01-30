import React from 'react';
import { X } from 'lucide-react';
import { AuthForm } from './AuthForm';
import { Button } from '../ui/button';

interface SignUpPageProps {
  onClose: () => void;
  onSignIn: () => void;
}

export function SignUpPage({ onClose, onSignIn }: SignUpPageProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="w-full max-w-[400px] mx-4">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute -right-2 -top-2 p-2 rounded-full bg-background border text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#0070f3] to-[#00a2ff]">
              Create Account
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Join Code Visualizer to start creating diagrams
            </p>
          </div>
        </div>
        
        <div className="bg-card rounded-lg border shadow-sm p-6">
          <AuthForm mode="signup" onSuccess={onClose} />
          
          <div className="mt-6 text-center">
            <Button
              variant="link"
              onClick={onSignIn}
              className="text-sm text-[#0070f3] hover:text-[#0070f3]/90"
            >
              Already have an account? Sign in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
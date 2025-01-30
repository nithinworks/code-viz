import React, { useState } from 'react';
import { AuthForm } from './AuthForm';
import { X } from 'lucide-react';

interface AuthPageProps {
  onClose: () => void;
  error?: string | null;
  onSuccess?: () => void;
}

export function AuthPage({ onClose, error, onSuccess }: AuthPageProps) {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');

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
              {mode === 'signin' ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {mode === 'signin' 
                ? 'Sign in to continue to Code Visualizer'
                : 'Join Code Visualizer to start creating diagrams'
              }
            </p>
          </div>
        </div>
        
        <div className="bg-card rounded-lg border shadow-sm p-6">
          {error && (
            <div className="mb-4 p-3 text-sm text-red-500 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-md">
              {error}
            </div>
          )}
          
          <AuthForm 
            mode={mode} 
            onSuccess={onSuccess}
          />
          
          <div className="mt-6 text-center">
            <button
              onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
              className="text-sm text-[#0070f3] hover:text-[#0070f3]/90 transition-colors"
            >
              {mode === 'signin' 
                ? "Don't have an account? Sign up"
                : 'Already have an account? Sign in'
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
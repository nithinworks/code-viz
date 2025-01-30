import React, { useState } from 'react';
import { toast } from '@/components/ui/toast';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

interface AuthFormProps {
  mode: 'signin' | 'signup';
  onSuccess?: () => void;
}

export function AuthForm({ mode, onSuccess }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { signIn, signUp } = useAuth();

  const validateForm = () => {
    setError('');
    
    if (!email || !password) {
      setError('Email and password are required');
      return false;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      return false;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      if (mode === 'signup') {
        await signUp(email, password);
        toast.success('Account created successfully! You can now sign in.');
        onSuccess?.();
      } else {
        await signIn(email, password);
        toast.success('Successfully signed in');
        onSuccess?.();
      }
    } catch (error: any) {
      console.error('Auth error:', error);
      
      if (error.message?.toLowerCase().includes('invalid login credentials')) {
        setError('Invalid email or password');
      } else if (error.message?.toLowerCase().includes('email already exists')) {
        setError('An account with this email already exists');
      } else {
        setError(error.message || 'Authentication failed');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 text-sm text-red-500 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-md">
          {error}
        </div>
      )}
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError('');
          }}
          className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors hover:bg-accent focus:outline-none focus:ring-1 focus:ring-[#0070f3]"
          required
          disabled={loading}
          autoComplete="email"
        />
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1.5">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError('');
          }}
          className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors hover:bg-accent focus:outline-none focus:ring-1 focus:ring-[#0070f3]"
          required
          disabled={loading}
          autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
        />
      </div>
      
      <Button
        type="submit"
        className="w-full bg-[#0070f3] hover:bg-[#0070f3]/90 text-white shadow-sm"
        disabled={loading}
      >
        {loading ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Please wait...</span>
          </div>
        ) : (
          mode === 'signin' ? 'Sign In' : 'Sign Up'
        )}
      </Button>
    </form>
  );
}
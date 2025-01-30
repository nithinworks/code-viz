import { ClerkProvider } from '@clerk/clerk-react';
import { useTheme } from '@/hooks/useTheme';

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error('Missing Clerk publishable key');
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useTheme();

  return (
    <ClerkProvider
      publishableKey={publishableKey}
      appearance={{
        variables: {
          colorPrimary: '#4f46e5',
          colorTextOnPrimaryBackground: 'white',
        },
        baseTheme: isDarkMode ? {
          colors: {
            background: '#111827',
            backgroundCard: '#1f2937',
            text: '#f3f4f6',
            primary: '#4f46e5',
          }
        } : undefined,
        elements: {
          formButtonPrimary: 'bg-indigo-600 hover:bg-indigo-700',
          footerActionLink: 'text-indigo-600 hover:text-indigo-700',
          card: isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }
      }}
      navigate={(to) => window.location.href = to}
    >
      {children}
    </ClerkProvider>
  );
}
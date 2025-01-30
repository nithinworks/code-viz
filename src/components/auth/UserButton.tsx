import { UserButton as ClerkUserButton } from '@clerk/clerk-react';
import { useTheme } from '@/hooks/useTheme';

export function UserButton() {
  const { isDarkMode } = useTheme();

  return (
    <ClerkUserButton
      appearance={{
        elements: {
          avatarBox: 'w-8 h-8',
          userButtonPopoverCard: `
            bg-white dark:bg-gray-800 
            border border-gray-200 dark:border-gray-700
            shadow-lg rounded-lg
          `,
          userButtonPopoverFooter: 'hidden'
        }
      }}
      afterSignOutUrl="/"
    />
  );
}
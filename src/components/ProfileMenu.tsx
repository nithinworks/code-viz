import React from 'react';
import { LogOut, User } from 'lucide-react';
import { Avatar, AvatarFallback } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { UserProfile } from '@/lib/supabase';
import { ProfileModal } from './ProfileModal';

interface ProfileMenuProps {
  profile: UserProfile;
  onSignOut: () => void;
  onApiKeyChange: (key: string) => Promise<void>;
}

export function ProfileMenu({ profile, onSignOut, onApiKeyChange }: ProfileMenuProps) {
  const [showProfileModal, setShowProfileModal] = React.useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="outline-none">
            <Avatar className="h-8 w-8 cursor-pointer transition-opacity hover:opacity-80">
              <AvatarFallback className="bg-gradient-to-br from-[#0070f3] to-[#00a2ff] text-white text-xs font-semibold">
                {profile.email.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">My Account</p>
              <p className="text-xs leading-none text-muted-foreground">
                {profile.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem 
            className="cursor-pointer"
            onClick={() => setShowProfileModal(true)}
          >
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="cursor-pointer text-red-600 dark:text-red-400 focus:text-red-600 dark:focus:text-red-400"
            onClick={onSignOut}
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sign out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <ProfileModal
        profile={profile}
        open={showProfileModal}
        onClose={() => setShowProfileModal(false)}
        onApiKeyChange={onApiKeyChange}
      />
    </>
  );
}
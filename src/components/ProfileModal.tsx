import React from 'react';
import { Key, Mail, User as UserIcon, Shield, Settings as SettingsIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { UserProfile } from '@/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { updatePassword } from '@/lib/auth';
import { toast } from './ui/toast';

interface ProfileModalProps {
  profile: UserProfile;
  open: boolean;
  onClose: () => void;
  onApiKeyChange: (key: string) => Promise<void>;
}

export function ProfileModal({ profile, open, onClose, onApiKeyChange }: ProfileModalProps) {
  const [apiKey, setApiKey] = React.useState(profile.openai_key || '');
  const [isUpdating, setIsUpdating] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [isUpdatingPassword, setIsUpdatingPassword] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState('');

  const handleApiKeyUpdate = async () => {
    try {
      setIsUpdating(true);
      await onApiKeyChange(apiKey);
      toast.success('API key updated successfully');
    } catch (error) {
      console.error('Error updating API key:', error);
      toast.error('Failed to update API key');
    } finally {
      setIsUpdating(false);
    }
  };

  const validatePassword = (pass: string): boolean => {
    if (pass.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return false;
    }
    return true;
  };

  const handlePasswordUpdate = async () => {
    try {
      setPasswordError('');
      
      if (!validatePassword(password)) {
        return;
      }

      if (password !== confirmPassword) {
        setPasswordError('Passwords do not match');
        return;
      }

      setIsUpdatingPassword(true);
      await updatePassword(password);
      
      toast.success('Password updated successfully');
      setPassword('');
      setConfirmPassword('');
    } catch (error: any) {
      console.error('Error updating password:', error);
      setPasswordError(error.message || 'Failed to update password');
    } finally {
      setIsUpdatingPassword(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] outline-none">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <UserIcon className="w-5 h-5 text-[#0070f3]" />
            Account Settings
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="profile" className="mt-2">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <UserIcon className="w-4 h-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <SettingsIcon className="w-4 h-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6 mt-4">
            {/* Email Section */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-muted">
                <span className="text-sm">{profile.email}</span>
              </div>
            </div>

            {/* API Key Section */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2 text-muted-foreground">
                <Key className="w-4 h-4" />
                OpenAI API Key
              </label>
              <div className="flex gap-2">
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Enter your OpenAI API key"
                  className="flex-1 h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors hover:bg-accent focus:outline-none focus:ring-1 focus:ring-[#0070f3]"
                />
                <Button
                  onClick={handleApiKeyUpdate}
                  disabled={isUpdating}
                  className="bg-[#0070f3] hover:bg-[#0070f3]/90 text-white shadow-sm"
                >
                  {isUpdating ? "Saving..." : "Save"}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Your API key is securely stored and encrypted.
              </p>
            </div>

            {/* Usage Stats */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2 text-muted-foreground">
                <Shield className="w-4 h-4" />
                Usage Statistics
              </label>
              <div className="rounded-md border p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Generations</span>
                  <span className="text-sm font-medium">{profile.diagram_count}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Account Status</span>
                  <span className="text-sm font-medium">
                    {profile.openai_key ? (
                      <span className="text-green-600 dark:text-green-400">Premium</span>
                    ) : (
                      <span className="text-orange-600 dark:text-orange-400">Free</span>
                    )}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Member Since</span>
                  <span className="text-sm font-medium">
                    {new Date(profile.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6 mt-4">
            {/* Password Update Section */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">New Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError('');
                  }}
                  placeholder="Enter new password"
                  className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors hover:bg-accent focus:outline-none focus:ring-1 focus:ring-[#0070f3]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setPasswordError('');
                  }}
                  placeholder="Confirm new password"
                  className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors hover:bg-accent focus:outline-none focus:ring-1 focus:ring-[#0070f3]"
                />
              </div>
              {passwordError && (
                <p className="text-sm text-red-500">{passwordError}</p>
              )}
              <Button
                onClick={handlePasswordUpdate}
                disabled={isUpdatingPassword}
                className="w-full bg-[#0070f3] hover:bg-[#0070f3]/90 text-white shadow-sm"
              >
                {isUpdatingPassword ? "Updating..." : "Update Password"}
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
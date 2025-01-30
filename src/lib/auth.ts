// Simplified auth.ts - only keeping essential functions
import { supabase } from './supabase-client';

export async function updatePassword(newPassword: string) {
  try {
    const { error } = await supabase.auth.updateUser({
      password: newPassword
    });

    if (error) throw error;
  } catch (error) {
    console.error('Password update error:', error);
    throw error;
  }
}
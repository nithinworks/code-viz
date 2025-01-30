import { UserProfile } from '@/types';
import { supabase } from './supabase-client';

export async function getOrCreateProfile(userId: string, email: string): Promise<UserProfile | null> {
  try {
    // First check if we have a valid session
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw new Error('No authenticated session');
    }

    // Try to get existing profile
    const { data: profiles, error: fetchError } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', userId)
      .maybeSingle();

    if (fetchError) {
      console.error('Error fetching profile:', fetchError);
      throw fetchError;
    }

    // If profile exists, return it
    if (profiles) {
      return profiles;
    }

    // Profile doesn't exist, create it
    const { data: newProfile, error: insertError } = await supabase
      .from('user_profiles')
      .insert([
        {
          id: userId,
          email,
          diagram_count: 0,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
      ])
      .select()
      .single();

    if (insertError) {
      console.error('Error creating profile:', insertError);
      throw insertError;
    }

    return newProfile;
  } catch (error: any) {
    console.error('Error in getOrCreateProfile:', error);
    throw new Error(error.message || 'Failed to get or create profile');
  }
}

export async function updateOpenAIKey(userId: string, apiKey: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('user_profiles')
      .update({ 
        openai_key: apiKey,
        updated_at: new Date().toISOString()
      })
      .eq('id', userId);

    if (error) {
      throw error;
    }

    return true;
  } catch (error: any) {
    console.error('Error in updateOpenAIKey:', error);
    throw new Error(error.message || 'Failed to update API key');
  }
}

export async function incrementDiagramCount(userId: string): Promise<boolean> {
  try {
    // First check if we have a valid session
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw new Error('No authenticated session');
    }

    // Get current profile
    const { data: profile, error: fetchError } = await supabase
      .from('user_profiles')
      .select('diagram_count, openai_key')
      .eq('id', userId)
      .single();

    if (fetchError) {
      throw fetchError;
    }

    if (!profile) {
      throw new Error('Profile not found');
    }

    // Check if user has reached the limit and doesn't have an API key
    if (!profile.openai_key && profile.diagram_count >= 5) {
      throw new Error('limit_reached');
    }

    // Use a transaction-like approach with optimistic locking
    const { data: updated, error: updateError } = await supabase
      .from('user_profiles')
      .update({ 
        diagram_count: profile.diagram_count + 1,
        updated_at: new Date().toISOString()
      })
      .eq('id', userId)
      .eq('diagram_count', profile.diagram_count) // Optimistic locking
      .select()
      .single();

    if (updateError) {
      throw updateError;
    }

    if (!updated) {
      throw new Error('Failed to update diagram count - please try again');
    }

    return true;
  } catch (error: any) {
    // Handle specific error cases
    if (error.message === 'limit_reached') {
      throw new Error('You have reached your free generation limit. Please add your OpenAI API key to continue.');
    }
    
    if (error.message === 'No authenticated session') {
      throw new Error('Please sign in to generate diagrams.');
    }
    
    if (error.code === 'PGRST116') {
      throw new Error('Profile not found. Please try signing out and back in.');
    }

    if (error.code === '23514') { // Check constraint violation
      throw new Error('You have reached the maximum number of generations.');
    }
    
    // Log the error for debugging but throw a user-friendly message
    console.error('Error in incrementDiagramCount:', error);
    throw new Error('Failed to update diagram count. Please try again.');
  }
}
/*
  # Add INSERT policy for user profiles

  1. Changes
    - Add INSERT policy to allow users to create their own profiles
  
  2. Security
    - New policy ensures users can only create profiles with their own ID
*/

-- Add INSERT policy if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM pg_policies 
        WHERE tablename = 'user_profiles' 
        AND policyname = 'Users can insert own profile'
    ) THEN
        CREATE POLICY "Users can insert own profile"
            ON user_profiles
            FOR INSERT
            WITH CHECK (auth.uid()::text = id);
    END IF;
END
$$;
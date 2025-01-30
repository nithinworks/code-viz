/*
  # Fix email constraint issue

  1. Changes
    - Remove unique constraint from email column
    - Add index on email for better query performance
    - Update RLS policies for better security
*/

-- First, disable RLS to make changes
ALTER TABLE user_profiles DISABLE ROW LEVEL SECURITY;

-- Drop unique constraint on email
ALTER TABLE user_profiles DROP CONSTRAINT IF EXISTS user_profiles_email_key;

-- Create index on email (without unique constraint)
DROP INDEX IF EXISTS idx_user_profiles_email;
CREATE INDEX idx_user_profiles_email ON user_profiles(email);

-- Drop all existing policies
DROP POLICY IF EXISTS "users_read_own_profile" ON user_profiles;
DROP POLICY IF EXISTS "users_insert_own_profile" ON user_profiles;
DROP POLICY IF EXISTS "users_update_own_profile" ON user_profiles;

-- Create simplified policies
CREATE POLICY "users_read_own_profile"
  ON user_profiles FOR SELECT
  USING (auth.uid()::text = id);

CREATE POLICY "users_insert_own_profile"
  ON user_profiles FOR INSERT
  WITH CHECK (auth.uid()::text = id);

CREATE POLICY "users_update_own_profile"
  ON user_profiles FOR UPDATE
  USING (auth.uid()::text = id);

-- Re-enable RLS
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Grant necessary permissions
GRANT SELECT, INSERT, UPDATE ON user_profiles TO authenticated;
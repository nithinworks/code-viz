-- First, disable RLS to make changes
ALTER TABLE user_profiles DISABLE ROW LEVEL SECURITY;

-- Drop all existing policies to start fresh
DROP POLICY IF EXISTS "Enable read for users" ON user_profiles;
DROP POLICY IF EXISTS "Enable insert for users" ON user_profiles;
DROP POLICY IF EXISTS "Enable update for users" ON user_profiles;

-- Create new policies with proper authentication checks
CREATE POLICY "Enable read access for own profile"
  ON user_profiles FOR SELECT
  USING (
    -- Allow users to read their own profile
    auth.uid()::text = id
  );

CREATE POLICY "Enable insert access for own profile"
  ON user_profiles FOR INSERT
  WITH CHECK (
    -- Allow users to create their own profile
    auth.uid()::text = id
  );

CREATE POLICY "Enable update access for own profile"
  ON user_profiles FOR UPDATE
  USING (
    -- Allow users to update their own profile
    auth.uid()::text = id
  );

-- Re-enable RLS
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Grant necessary permissions to authenticated users
GRANT SELECT, INSERT, UPDATE ON user_profiles TO authenticated;
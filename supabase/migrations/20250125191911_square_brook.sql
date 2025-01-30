/*
  # Final fix for RLS policies

  1. Changes
    - Temporarily disable RLS to allow initial setup
    - Drop all existing policies
    - Create new policies with proper auth checks
    - Re-enable RLS
  
  2. Security
    - Ensures proper access control
    - Allows authenticated users to manage their profiles
    - Allows service role operations
*/

-- Temporarily disable RLS
ALTER TABLE user_profiles DISABLE ROW LEVEL SECURITY;

-- Drop all existing policies
DROP POLICY IF EXISTS "Users can view own profile" ON user_profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON user_profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON user_profiles;
DROP POLICY IF EXISTS "Enable read access for users" ON user_profiles;
DROP POLICY IF EXISTS "Enable insert access for users" ON user_profiles;
DROP POLICY IF EXISTS "Enable update access for users" ON user_profiles;

-- Create new policies
CREATE POLICY "Enable full access for service role"
    ON user_profiles
    USING (auth.jwt()->>'role' = 'service_role');

CREATE POLICY "Enable user read own profile"
    ON user_profiles
    FOR SELECT
    USING (auth.uid()::text = id);

CREATE POLICY "Enable user create own profile"
    ON user_profiles
    FOR INSERT
    WITH CHECK (auth.uid()::text = id);

CREATE POLICY "Enable user update own profile"
    ON user_profiles
    FOR UPDATE
    USING (auth.uid()::text = id);

-- Re-enable RLS
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
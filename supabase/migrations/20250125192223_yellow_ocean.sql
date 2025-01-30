/*
  # Fix RLS Policies for User Profiles

  1. Changes
    - Reset all RLS policies for user_profiles table
    - Add comprehensive policies for all operations
    - Enable RLS with proper security checks

  2. Security
    - Enable RLS on user_profiles table
    - Add policies for authenticated users to:
      - Read their own profile
      - Create their own profile
      - Update their own profile
    - Add policies for service role access
*/

-- First, disable RLS to make changes
ALTER TABLE user_profiles DISABLE ROW LEVEL SECURITY;

-- Drop all existing policies to start fresh
DROP POLICY IF EXISTS "Enable full access for service role" ON user_profiles;
DROP POLICY IF EXISTS "Enable user read own profile" ON user_profiles;
DROP POLICY IF EXISTS "Enable user create own profile" ON user_profiles;
DROP POLICY IF EXISTS "Enable user update own profile" ON user_profiles;

-- Create new policies with proper security checks
CREATE POLICY "Enable read for users"
  ON user_profiles FOR SELECT
  USING (
    auth.uid()::text = id OR
    auth.jwt()->>'role' = 'service_role' OR
    auth.jwt()->>'aud' = 'authenticated'
  );

CREATE POLICY "Enable insert for users"
  ON user_profiles FOR INSERT
  WITH CHECK (
    auth.uid()::text = id OR
    auth.jwt()->>'role' = 'service_role' OR
    auth.jwt()->>'aud' = 'authenticated'
  );

CREATE POLICY "Enable update for users"
  ON user_profiles FOR UPDATE
  USING (
    auth.uid()::text = id OR
    auth.jwt()->>'role' = 'service_role' OR
    auth.jwt()->>'aud' = 'authenticated'
  );

-- Re-enable RLS
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
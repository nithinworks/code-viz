/*
  # Fix RLS policies for user profiles

  1. Changes
    - Drop existing policies to start fresh
    - Create new policies with proper service role bypass
    - Enable RLS but allow service role to bypass
  
  2. Security
    - Allows service role to manage profiles
    - Allows users to manage their own profiles
    - Prevents unauthorized access
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Users can view own profile" ON user_profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON user_profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON user_profiles;

-- Create new policies with service role bypass
CREATE POLICY "Enable read access for users"
    ON user_profiles
    FOR SELECT
    USING (
        auth.uid()::text = id
        OR auth.jwt()->>'role' = 'service_role'
    );

CREATE POLICY "Enable insert access for users"
    ON user_profiles
    FOR INSERT
    WITH CHECK (
        auth.uid()::text = id
        OR auth.jwt()->>'role' = 'service_role'
    );

CREATE POLICY "Enable update access for users"
    ON user_profiles
    FOR UPDATE
    USING (
        auth.uid()::text = id
        OR auth.jwt()->>'role' = 'service_role'
    );
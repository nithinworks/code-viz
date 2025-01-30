/*
  # Create user profiles table

  1. New Tables
    - `user_profiles`
      - `id` (text, primary key) - matches Clerk user ID
      - `email` (text, unique)
      - `openai_key` (text, nullable) - encrypted OpenAI API key
      - `diagram_count` (integer) - number of diagrams generated
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Functions
    - `increment_diagram_count` - Safely increments the diagram count for a user

  3. Security
    - Enable RLS on user_profiles table
    - Add policies for authenticated users to manage their own profiles
*/

-- Create user_profiles table
CREATE TABLE IF NOT EXISTS user_profiles (
  id text PRIMARY KEY,
  email text UNIQUE NOT NULL,
  openai_key text,
  diagram_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own profile"
  ON user_profiles
  FOR SELECT
  USING (auth.uid()::text = id);

CREATE POLICY "Users can update own profile"
  ON user_profiles
  FOR UPDATE
  USING (auth.uid()::text = id);

-- Create function to increment diagram count
CREATE OR REPLACE FUNCTION increment_diagram_count(user_id text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE user_profiles
  SET 
    diagram_count = diagram_count + 1,
    updated_at = now()
  WHERE id = user_id;
END;
$$;

-- Create trigger to update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_user_profiles_updated_at
  BEFORE UPDATE ON user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();
/*
  # API Keys Storage Schema

  1. New Tables
    - `api_keys`
      - `id` (uuid, primary key)
      - `key` (text, encrypted)
      - `created_at` (timestamp)
      - `expires_at` (timestamp)

  2. Security
    - Enable RLS on `api_keys` table
    - Add policy for authenticated users to read their own API keys
*/

CREATE TABLE IF NOT EXISTS api_keys (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text NOT NULL,
  created_at timestamptz DEFAULT now(),
  expires_at timestamptz DEFAULT (now() + interval '24 hours')
);

ALTER TABLE api_keys ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read their own API keys"
  ON api_keys
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);
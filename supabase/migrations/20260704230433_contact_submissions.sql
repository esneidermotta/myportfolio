/*
# Create contact_submissions table

1. New Tables
- `contact_submissions`
- `id` (uuid, primary key)
- `name` (text, not null) - Contact's full name
- `email` (text, not null) - Contact's email address
- `subject` (text, not null) - Message subject/purpose
- `message` (text, not null) - Full message content
- `created_at` (timestamptz) - Submission timestamp

2. Security
- Enable RLS on `contact_submissions`
- Allow anon INSERT for public contact form submissions
- No SELECT/UPDATE/DELETE for anon (submissions are private to site owner)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit contact forms (anon + authenticated)
DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact" ON contact_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- Create index for querying by creation date
CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx ON contact_submissions (created_at DESC);
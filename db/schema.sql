-- Condax careers applications — run once on Neon (SQL Editor) or via psql.
-- Requires pgcrypto for gen_random_uuid() (enabled by default on Neon).

CREATE TABLE IF NOT EXISTS applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  role_title TEXT NOT NULL,
  role_slug TEXT,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  linkedin TEXT NOT NULL,
  portfolio TEXT,
  country TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT,
  address TEXT,
  date_of_birth TEXT NOT NULL,
  start_date TEXT NOT NULL,
  note TEXT NOT NULL,
  answers JSONB NOT NULL DEFAULT '{}'::jsonb,
  cv_url TEXT NOT NULL,
  cv_filename TEXT,
  status TEXT NOT NULL DEFAULT 'new'
    CHECK (status IN ('new', 'screening', 'interview', 'offer', 'hired', 'rejected', 'archived')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS applications_created_at_idx ON applications (created_at DESC);
CREATE INDEX IF NOT EXISTS applications_role_slug_idx ON applications (role_slug);
CREATE INDEX IF NOT EXISTS applications_status_idx ON applications (status);
CREATE INDEX IF NOT EXISTS applications_email_idx ON applications (email);

-- Run on existing Neon DBs that already have applications without nationality.
ALTER TABLE applications
  ADD COLUMN IF NOT EXISTS nationality TEXT;

UPDATE applications
SET nationality = country
WHERE nationality IS NULL OR trim(nationality) = '';

ALTER TABLE applications
  ALTER COLUMN nationality SET NOT NULL;

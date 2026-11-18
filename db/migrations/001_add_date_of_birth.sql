-- Run on existing Neon DBs that already have applications without DOB.
ALTER TABLE applications
  ADD COLUMN IF NOT EXISTS date_of_birth TEXT;

UPDATE applications
SET date_of_birth = '1900-01-01'
WHERE date_of_birth IS NULL;

ALTER TABLE applications
  ALTER COLUMN date_of_birth SET NOT NULL;

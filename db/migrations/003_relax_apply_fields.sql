-- Phase 6: DOB and street address optional on careers applications.
-- Run on Neon after deploying Apply form changes (DOB / address removed from required apply fields).

ALTER TABLE applications
  ALTER COLUMN date_of_birth DROP NOT NULL;

-- address was already nullable; ensure it stays optional for new installs that mirrored older schema.
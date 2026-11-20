import { neon } from "@neondatabase/serverless";

const url = process.env.DATABASE_URL?.trim();
if (!url) {
  console.error("NO_DATABASE_URL");
  process.exit(1);
}

const sql = neon(url);

try {
  await sql`ALTER TABLE applications ADD COLUMN IF NOT EXISTS nationality TEXT`;
  await sql`UPDATE applications SET nationality = country WHERE nationality IS NULL OR trim(nationality) = ''`;
  await sql`ALTER TABLE applications ALTER COLUMN nationality SET NOT NULL`;
  const rows = await sql`SELECT COUNT(*)::int AS n FROM applications`;
  console.log("MIGRATION_OK apps=", rows[0]?.n ?? 0);
} catch (err) {
  console.error("MIGRATION_FAIL", err instanceof Error ? err.message : err);
  process.exit(1);
}

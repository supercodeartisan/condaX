import { neon } from "@neondatabase/serverless";
import { requireEnv } from "@/lib/env";
import type { RequestGeo } from "@/lib/request-geo";

export type ApplicationRow = {
  id: string;
  role_title: string;
  role_slug: string | null;
  full_name: string;
  email: string;
  phone: string;
  linkedin: string;
  portfolio: string | null;
  nationality: string | null;
  country: string;
  city: string;
  state: string | null;
  address: string | null;
  date_of_birth: string | null;
  start_date: string;
  note: string;
  answers: Record<string, string>;
  cv_url: string;
  cv_filename: string | null;
  status: string;
  submitter_ip: string | null;
  geo_country: string | null;
  geo_region: string | null;
  geo_city: string | null;
  created_at: string;
};

export type NewApplication = {
  roleTitle: string;
  roleSlug: string | null;
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  portfolio: string | null;
  nationality: string;
  country: string;
  city: string;
  state: string | null;
  address: string | null;
  dateOfBirth: string;
  startDate: string;
  note: string;
  answers: Record<string, string>;
  cvUrl: string;
  cvFilename: string | null;
  geo?: RequestGeo | null;
};

function sql() {
  return neon(requireEnv("DATABASE_URL"));
}

function mapApplicationRow(row: Record<string, unknown>): ApplicationRow {
  return {
    id: String(row.id),
    role_title: String(row.role_title),
    role_slug: (row.role_slug as string | null) ?? null,
    full_name: String(row.full_name),
    email: String(row.email),
    phone: String(row.phone),
    linkedin: String(row.linkedin),
    portfolio: (row.portfolio as string | null) ?? null,
    nationality: (row.nationality as string | null) ?? null,
    country: String(row.country),
    city: String(row.city),
    state: (row.state as string | null) ?? null,
    address: (row.address as string | null) ?? null,
    date_of_birth: (row.date_of_birth as string | null) ?? null,
    start_date: String(row.start_date),
    note: String(row.note),
    answers:
      typeof row.answers === "string"
        ? (JSON.parse(row.answers) as Record<string, string>)
        : ((row.answers ?? {}) as Record<string, string>),
    cv_url: String(row.cv_url),
    cv_filename: (row.cv_filename as string | null) ?? null,
    status: String(row.status),
    submitter_ip: (row.submitter_ip as string | null) ?? null,
    geo_country: (row.geo_country as string | null) ?? null,
    geo_region: (row.geo_region as string | null) ?? null,
    geo_city: (row.geo_city as string | null) ?? null,
    created_at: String(row.created_at),
  };
}

export async function insertApplication(input: NewApplication): Promise<{ id: string }> {
  const db = sql();
  const geo = input.geo;
  const rows = await db`
    INSERT INTO applications (
      role_title, role_slug, full_name, email, phone, linkedin, portfolio, nationality,
      country, city, state, address, date_of_birth, start_date, note, answers, cv_url, cv_filename,
      submitter_ip, geo_country, geo_region, geo_city
    ) VALUES (
      ${input.roleTitle},
      ${input.roleSlug},
      ${input.fullName},
      ${input.email},
      ${input.phone},
      ${input.linkedin},
      ${input.portfolio},
      ${input.nationality},
      ${input.country},
      ${input.city},
      ${input.state},
      ${input.address},
      ${input.dateOfBirth},
      ${input.startDate},
      ${input.note},
      ${JSON.stringify(input.answers)},
      ${input.cvUrl},
      ${input.cvFilename},
      ${geo?.ip ?? null},
      ${geo?.country ?? null},
      ${geo?.region ?? null},
      ${geo?.city ?? null}
    )
    RETURNING id
  `;
  return { id: String(rows[0].id) };
}

function isMissingNationalityColumn(err: unknown): boolean {
  const message = err instanceof Error ? err.message : String(err);
  return /nationality/i.test(message) && /does not exist|undefined column|column .* not found/i.test(message);
}

export async function listApplications(limit = 100): Promise<ApplicationRow[]> {
  const db = sql();
  try {
    const rows = await db`
      SELECT
        id::text,
        role_title,
        role_slug,
        full_name,
        email,
        phone,
        linkedin,
        portfolio,
        nationality,
        country,
        city,
        state,
        address,
        date_of_birth,
        start_date,
        note,
        answers,
        cv_url,
        cv_filename,
        status,
        submitter_ip,
        geo_country,
        geo_region,
        geo_city,
        created_at::text
      FROM applications
      ORDER BY created_at DESC
      LIMIT ${limit}
    `;
    return rows.map((row) => mapApplicationRow(row as Record<string, unknown>));
  } catch (err) {
    if (!isMissingNationalityColumn(err)) throw err;
    // Pre-migration Neon DBs: nationality column not applied yet.
    const rows = await db`
      SELECT
        id::text,
        role_title,
        role_slug,
        full_name,
        email,
        phone,
        linkedin,
        portfolio,
        country,
        city,
        state,
        address,
        date_of_birth,
        start_date,
        note,
        answers,
        cv_url,
        cv_filename,
        status,
        submitter_ip,
        geo_country,
        geo_region,
        geo_city,
        created_at::text
      FROM applications
      ORDER BY created_at DESC
      LIMIT ${limit}
    `;
    return rows.map((row) =>
      mapApplicationRow({ ...(row as Record<string, unknown>), nationality: null }),
    );
  }
}

export async function getApplicationById(id: string): Promise<ApplicationRow | null> {
  const db = sql();
  try {
    const rows = await db`
      SELECT
        id::text,
        role_title,
        role_slug,
        full_name,
        email,
        phone,
        linkedin,
        portfolio,
        nationality,
        country,
        city,
        state,
        address,
        date_of_birth,
        start_date,
        note,
        answers,
        cv_url,
        cv_filename,
        status,
        submitter_ip,
        geo_country,
        geo_region,
        geo_city,
        created_at::text
      FROM applications
      WHERE id = ${id}::uuid
      LIMIT 1
    `;
    if (!rows[0]) return null;
    return mapApplicationRow(rows[0] as Record<string, unknown>);
  } catch (err) {
    if (!isMissingNationalityColumn(err)) throw err;
    const rows = await db`
      SELECT
        id::text,
        role_title,
        role_slug,
        full_name,
        email,
        phone,
        linkedin,
        portfolio,
        country,
        city,
        state,
        address,
        date_of_birth,
        start_date,
        note,
        answers,
        cv_url,
        cv_filename,
        status,
        submitter_ip,
        geo_country,
        geo_region,
        geo_city,
        created_at::text
      FROM applications
      WHERE id = ${id}::uuid
      LIMIT 1
    `;
    if (!rows[0]) return null;
    return mapApplicationRow({ ...(rows[0] as Record<string, unknown>), nationality: null });
  }
}

export async function updateApplicationStatus(id: string, status: string): Promise<void> {
  const db = sql();
  await db`
    UPDATE applications
    SET status = ${status}
    WHERE id = ${id}::uuid
  `;
}

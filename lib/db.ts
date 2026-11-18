import { neon } from "@neondatabase/serverless";
import { requireEnv } from "@/lib/env";

export type ApplicationRow = {
  id: string;
  role_title: string;
  role_slug: string | null;
  full_name: string;
  email: string;
  phone: string;
  linkedin: string;
  portfolio: string | null;
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
};

function sql() {
  return neon(requireEnv("DATABASE_URL"));
}

export async function insertApplication(input: NewApplication): Promise<{ id: string }> {
  const db = sql();
  const rows = await db`
    INSERT INTO applications (
      role_title, role_slug, full_name, email, phone, linkedin, portfolio,
      country, city, state, address, date_of_birth, start_date, note, answers, cv_url, cv_filename
    ) VALUES (
      ${input.roleTitle},
      ${input.roleSlug},
      ${input.fullName},
      ${input.email},
      ${input.phone},
      ${input.linkedin},
      ${input.portfolio},
      ${input.country},
      ${input.city},
      ${input.state},
      ${input.address},
      ${input.dateOfBirth},
      ${input.startDate},
      ${input.note},
      ${JSON.stringify(input.answers)},
      ${input.cvUrl},
      ${input.cvFilename}
    )
    RETURNING id
  `;
  return { id: String(rows[0].id) };
}

export async function listApplications(limit = 100): Promise<ApplicationRow[]> {
  const db = sql();
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
      created_at::text
    FROM applications
    ORDER BY created_at DESC
    LIMIT ${limit}
  `;
  return rows.map((row) => ({
    ...row,
    answers:
      typeof row.answers === "string"
        ? (JSON.parse(row.answers) as Record<string, string>)
        : ((row.answers ?? {}) as Record<string, string>),
  })) as ApplicationRow[];
}

export async function updateApplicationStatus(id: string, status: string): Promise<void> {
  const db = sql();
  await db`
    UPDATE applications
    SET status = ${status}
    WHERE id = ${id}::uuid
  `;
}

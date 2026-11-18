import { randomUUID } from "crypto";
import { neon } from "@neondatabase/serverless";
import { requireEnv } from "@/lib/env";
import type { InquiryRow, ReferralRow } from "@/lib/inquiries";

function sql() {
  return neon(requireEnv("DATABASE_URL"));
}

function parsePayload(raw: unknown): Record<string, string | null> {
  if (typeof raw === "string") {
    try {
      return JSON.parse(raw) as Record<string, string | null>;
    } catch {
      return {};
    }
  }
  return (raw ?? {}) as Record<string, string | null>;
}

export async function insertInquiry(input: {
  kind: "contact" | "referral";
  name: string;
  email: string;
  payload: Record<string, string | null>;
  referralCode?: string | null;
}): Promise<{ id: string }> {
  const db = sql();
  const rows = await db`
    INSERT INTO inquiries (kind, name, email, payload, referral_code)
    VALUES (
      ${input.kind},
      ${input.name},
      ${input.email.toLowerCase()},
      ${JSON.stringify(input.payload)},
      ${input.referralCode ?? null}
    )
    RETURNING id::text
  `;
  return { id: String(rows[0].id) };
}

export async function listInquiries(limit = 100): Promise<InquiryRow[]> {
  const db = sql();
  const rows = await db`
    SELECT
      id::text,
      kind,
      name,
      email,
      payload,
      referral_code,
      status,
      created_at::text
    FROM inquiries
    ORDER BY created_at DESC
    LIMIT ${limit}
  `;
  return rows.map((row) => ({
    id: String(row.id),
    kind: row.kind as InquiryRow["kind"],
    name: String(row.name),
    email: String(row.email),
    payload: parsePayload(row.payload),
    referral_code: (row.referral_code as string | null) ?? null,
    status: String(row.status),
    created_at: String(row.created_at),
  }));
}

function makeReferralCode() {
  return `CX-${randomUUID().slice(0, 8).toUpperCase()}`;
}

export async function insertReferral(input: {
  referrerName: string;
  referrerEmail: string;
  organization: string;
  contactName: string;
  contactEmail: string;
  notes?: string | null;
}): Promise<{ id: string; code: string }> {
  const db = sql();
  const code = makeReferralCode();
  const rows = await db`
    INSERT INTO referrals (
      code, referrer_name, referrer_email, organization, contact_name, contact_email, notes
    ) VALUES (
      ${code},
      ${input.referrerName},
      ${input.referrerEmail.toLowerCase()},
      ${input.organization},
      ${input.contactName},
      ${input.contactEmail.toLowerCase()},
      ${input.notes ?? null}
    )
    RETURNING id::text, code
  `;
  return { id: String(rows[0].id), code: String(rows[0].code) };
}

export async function getReferralByCode(code: string): Promise<ReferralRow | null> {
  const db = sql();
  const rows = await db`
    SELECT
      id::text,
      code,
      referrer_name,
      referrer_email,
      organization,
      contact_name,
      contact_email,
      notes,
      created_at::text
    FROM referrals
    WHERE lower(code) = lower(${code})
    LIMIT 1
  `;
  if (!rows[0]) return null;
  const row = rows[0];
  return {
    id: String(row.id),
    code: String(row.code),
    referrer_name: String(row.referrer_name),
    referrer_email: String(row.referrer_email),
    organization: String(row.organization),
    contact_name: String(row.contact_name),
    contact_email: String(row.contact_email),
    notes: (row.notes as string | null) ?? null,
    created_at: String(row.created_at),
  };
}

export async function listReferrals(limit = 100): Promise<ReferralRow[]> {
  const db = sql();
  const rows = await db`
    SELECT
      id::text,
      code,
      referrer_name,
      referrer_email,
      organization,
      contact_name,
      contact_email,
      notes,
      created_at::text
    FROM referrals
    ORDER BY created_at DESC
    LIMIT ${limit}
  `;
  return rows.map((row) => ({
    id: String(row.id),
    code: String(row.code),
    referrer_name: String(row.referrer_name),
    referrer_email: String(row.referrer_email),
    organization: String(row.organization),
    contact_name: String(row.contact_name),
    contact_email: String(row.contact_email),
    notes: (row.notes as string | null) ?? null,
    created_at: String(row.created_at),
  }));
}

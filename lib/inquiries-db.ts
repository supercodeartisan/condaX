import { randomUUID } from "crypto";
import { neon } from "@neondatabase/serverless";
import { requireEnv } from "@/lib/env";
import type { InquiryRow, ReferralRow } from "@/lib/inquiries";
import type { RequestGeo } from "@/lib/request-geo";

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

function mapInquiry(row: Record<string, unknown>): InquiryRow {
  return {
    id: String(row.id),
    kind: row.kind as InquiryRow["kind"],
    name: String(row.name),
    email: String(row.email),
    payload: parsePayload(row.payload),
    referral_code: (row.referral_code as string | null) ?? null,
    status: String(row.status),
    submitter_ip: (row.submitter_ip as string | null) ?? null,
    geo_country: (row.geo_country as string | null) ?? null,
    geo_region: (row.geo_region as string | null) ?? null,
    geo_city: (row.geo_city as string | null) ?? null,
    created_at: String(row.created_at),
  };
}

function mapReferral(row: Record<string, unknown>): ReferralRow {
  return {
    id: String(row.id),
    code: String(row.code),
    referrer_name: String(row.referrer_name),
    referrer_email: String(row.referrer_email),
    organization: String(row.organization),
    contact_name: String(row.contact_name),
    contact_email: String(row.contact_email),
    notes: (row.notes as string | null) ?? null,
    submitter_ip: (row.submitter_ip as string | null) ?? null,
    geo_country: (row.geo_country as string | null) ?? null,
    geo_region: (row.geo_region as string | null) ?? null,
    geo_city: (row.geo_city as string | null) ?? null,
    created_at: String(row.created_at),
  };
}

export async function insertInquiry(input: {
  kind: "contact" | "referral";
  name: string;
  email: string;
  payload: Record<string, string | null>;
  referralCode?: string | null;
  geo?: RequestGeo | null;
}): Promise<{ id: string }> {
  const db = sql();
  const geo = input.geo;
  const rows = await db`
    INSERT INTO inquiries (
      kind, name, email, payload, referral_code,
      submitter_ip, geo_country, geo_region, geo_city
    )
    VALUES (
      ${input.kind},
      ${input.name},
      ${input.email.toLowerCase()},
      ${JSON.stringify(input.payload)},
      ${input.referralCode ?? null},
      ${geo?.ip ?? null},
      ${geo?.country ?? null},
      ${geo?.region ?? null},
      ${geo?.city ?? null}
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
      submitter_ip,
      geo_country,
      geo_region,
      geo_city,
      created_at::text
    FROM inquiries
    ORDER BY created_at DESC
    LIMIT ${limit}
  `;
  return rows.map((row) => mapInquiry(row as Record<string, unknown>));
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
  geo?: RequestGeo | null;
}): Promise<{ id: string; code: string }> {
  const db = sql();
  const code = makeReferralCode();
  const geo = input.geo;
  const rows = await db`
    INSERT INTO referrals (
      code, referrer_name, referrer_email, organization, contact_name, contact_email, notes,
      submitter_ip, geo_country, geo_region, geo_city
    ) VALUES (
      ${code},
      ${input.referrerName},
      ${input.referrerEmail.toLowerCase()},
      ${input.organization},
      ${input.contactName},
      ${input.contactEmail.toLowerCase()},
      ${input.notes ?? null},
      ${geo?.ip ?? null},
      ${geo?.country ?? null},
      ${geo?.region ?? null},
      ${geo?.city ?? null}
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
      submitter_ip,
      geo_country,
      geo_region,
      geo_city,
      created_at::text
    FROM referrals
    WHERE lower(code) = lower(${code})
    LIMIT 1
  `;
  if (!rows[0]) return null;
  return mapReferral(rows[0] as Record<string, unknown>);
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
      submitter_ip,
      geo_country,
      geo_region,
      geo_city,
      created_at::text
    FROM referrals
    ORDER BY created_at DESC
    LIMIT ${limit}
  `;
  return rows.map((row) => mapReferral(row as Record<string, unknown>));
}

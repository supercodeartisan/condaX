import { randomUUID } from "crypto";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import type { ApplicationRow, NewApplication } from "@/lib/db";
import type { InquiryRow, ReferralRow } from "@/lib/inquiries";

const DATA_DIR = path.join(process.cwd(), ".data");
const CV_DIR = path.join(DATA_DIR, "cvs");
const APPS_FILE = path.join(DATA_DIR, "applications.json");
const INQUIRIES_FILE = path.join(DATA_DIR, "inquiries.json");
const REFERRALS_FILE = path.join(DATA_DIR, "referrals.json");

async function ensureDirs() {
  await mkdir(CV_DIR, { recursive: true });
}

async function readApps(): Promise<ApplicationRow[]> {
  try {
    const raw = await readFile(APPS_FILE, "utf8");
    return JSON.parse(raw) as ApplicationRow[];
  } catch {
    return [];
  }
}

async function writeApps(apps: ApplicationRow[]) {
  await ensureDirs();
  await writeFile(APPS_FILE, JSON.stringify(apps, null, 2), "utf8");
}

/** Dev-only: save CV under .data/cvs and return a site-relative URL (works on localhost + LAN). */
export async function saveCvLocally(
  file: File,
  _requestOrigin?: string,
): Promise<{ url: string; filename: string }> {
  await ensureDirs();
  const safe = file.name.replace(/[^\w.\-()+ ]+/g, "_").slice(0, 120);
  const stored = `${Date.now()}-${randomUUID().slice(0, 8)}-${safe}`;
  const buf = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(CV_DIR, stored), buf);
  // Relative URL — avoids http://0.0.0.0:3000 when using `dev:lan`
  return {
    url: `/api/local-cv/${encodeURIComponent(stored)}`,
    filename: file.name,
  };
}

export async function insertApplicationLocal(input: NewApplication): Promise<{ id: string }> {
  const apps = await readApps();
  const id = randomUUID();
  const row: ApplicationRow = {
    id,
    role_title: input.roleTitle,
    role_slug: input.roleSlug,
    full_name: input.fullName,
    email: input.email,
    phone: input.phone,
    linkedin: input.linkedin,
    portfolio: input.portfolio,
    country: input.country,
    city: input.city,
    state: input.state,
    address: input.address,
    date_of_birth: input.dateOfBirth,
    start_date: input.startDate,
    note: input.note,
    answers: input.answers,
    cv_url: input.cvUrl,
    cv_filename: input.cvFilename,
    status: "new",
    submitter_ip: input.geo?.ip ?? null,
    geo_country: input.geo?.country ?? null,
    geo_region: input.geo?.region ?? null,
    geo_city: input.geo?.city ?? null,
    created_at: new Date().toISOString(),
  };
  apps.unshift(row);
  await writeApps(apps);
  return { id };
}

export async function listApplicationsLocal(limit = 100): Promise<ApplicationRow[]> {
  const apps = await readApps();
  return apps.slice(0, limit).map((row) => ({
    ...row,
    submitter_ip: row.submitter_ip ?? null,
    geo_country: row.geo_country ?? null,
    geo_region: row.geo_region ?? null,
    geo_city: row.geo_city ?? null,
  }));
}

export async function getApplicationByIdLocal(id: string): Promise<ApplicationRow | null> {
  const apps = await readApps();
  return apps.find((a) => a.id === id) ?? null;
}

export async function updateApplicationStatusLocal(id: string, status: string): Promise<void> {
  const apps = await readApps();
  const next = apps.map((a) => (a.id === id ? { ...a, status } : a));
  await writeApps(next);
}

export function localCvPath(filename: string): string | null {
  const base = path.basename(filename);
  if (base !== filename || base.includes("..")) return null;
  return path.join(CV_DIR, base);
}

export function isLocalDevStoreEnabled(): boolean {
  return process.env.NODE_ENV !== "production" || process.env.CAREERS_LOCAL_STORE === "1";
}

async function readJsonFile<T>(file: string): Promise<T[]> {
  try {
    const raw = await readFile(file, "utf8");
    return JSON.parse(raw) as T[];
  } catch {
    return [];
  }
}

async function writeJsonFile<T>(file: string, rows: T[]) {
  await ensureDirs();
  await writeFile(file, JSON.stringify(rows, null, 2), "utf8");
}

export async function insertInquiryLocal(input: {
  kind: "contact" | "referral";
  name: string;
  email: string;
  payload: Record<string, string | null>;
  referralCode?: string | null;
  geo?: {
    ip: string;
    country: string | null;
    region: string | null;
    city: string | null;
  } | null;
}): Promise<{ id: string }> {
  const rows = await readJsonFile<InquiryRow>(INQUIRIES_FILE);
  const id = randomUUID();
  rows.unshift({
    id,
    kind: input.kind,
    name: input.name,
    email: input.email,
    payload: input.payload,
    referral_code: input.referralCode ?? null,
    status: "new",
    submitter_ip: input.geo?.ip ?? null,
    geo_country: input.geo?.country ?? null,
    geo_region: input.geo?.region ?? null,
    geo_city: input.geo?.city ?? null,
    created_at: new Date().toISOString(),
  });
  await writeJsonFile(INQUIRIES_FILE, rows);
  return { id };
}

export async function listInquiriesLocal(limit = 100): Promise<InquiryRow[]> {
  const rows = await readJsonFile<InquiryRow>(INQUIRIES_FILE);
  return rows.slice(0, limit).map((row) => ({
    ...row,
    submitter_ip: row.submitter_ip ?? null,
    geo_country: row.geo_country ?? null,
    geo_region: row.geo_region ?? null,
    geo_city: row.geo_city ?? null,
  }));
}

function makeReferralCode() {
  return `CX-${randomUUID().slice(0, 8).toUpperCase()}`;
}

export async function insertReferralLocal(input: {
  referrerName: string;
  referrerEmail: string;
  organization: string;
  contactName: string;
  contactEmail: string;
  notes?: string | null;
  geo?: {
    ip: string;
    country: string | null;
    region: string | null;
    city: string | null;
  } | null;
}): Promise<{ id: string; code: string }> {
  const rows = await readJsonFile<ReferralRow>(REFERRALS_FILE);
  const id = randomUUID();
  const code = makeReferralCode();
  rows.unshift({
    id,
    code,
    referrer_name: input.referrerName,
    referrer_email: input.referrerEmail,
    organization: input.organization,
    contact_name: input.contactName,
    contact_email: input.contactEmail,
    notes: input.notes ?? null,
    submitter_ip: input.geo?.ip ?? null,
    geo_country: input.geo?.country ?? null,
    geo_region: input.geo?.region ?? null,
    geo_city: input.geo?.city ?? null,
    created_at: new Date().toISOString(),
  });
  await writeJsonFile(REFERRALS_FILE, rows);
  return { id, code };
}

export async function getReferralByCodeLocal(code: string): Promise<ReferralRow | null> {
  const rows = await readJsonFile<ReferralRow>(REFERRALS_FILE);
  return rows.find((r) => r.code.toLowerCase() === code.toLowerCase()) ?? null;
}

export async function listReferralsLocal(limit = 100): Promise<ReferralRow[]> {
  const rows = await readJsonFile<ReferralRow>(REFERRALS_FILE);
  return rows.slice(0, limit).map((row) => ({
    ...row,
    submitter_ip: row.submitter_ip ?? null,
    geo_country: row.geo_country ?? null,
    geo_region: row.geo_region ?? null,
    geo_city: row.geo_city ?? null,
  }));
}

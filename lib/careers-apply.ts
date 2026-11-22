import { z } from "zod";
import { isKnownCountryName } from "@/lib/countries";

const MAX_CV_BYTES = 8 * 1024 * 1024;

export const START_AVAILABILITY_OPTIONS = [
  { value: "Immediate", label: "Immediate" },
  { value: "~2 weeks", label: "About 2 weeks" },
  { value: "~1 month", label: "About 1 month" },
  { value: "2+ months", label: "2+ months" },
] as const;

export type StartAvailability = (typeof START_AVAILABILITY_OPTIONS)[number]["value"];

const START_AVAILABILITY_VALUES = START_AVAILABILITY_OPTIONS.map((o) => o.value) as [
  StartAvailability,
  ...StartAvailability[],
];

export function toIsoDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** DOB: age 18-80. */
export const DOB_MIN_AGE = 18;
export const DOB_MAX_AGE = 80;

export function getDobBounds(now = new Date()) {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const max = new Date(today);
  max.setFullYear(max.getFullYear() - DOB_MIN_AGE);
  const min = new Date(today);
  min.setFullYear(min.getFullYear() - DOB_MAX_AGE);
  return { min: toIsoDate(min), max: toIsoDate(max) };
}

function refineIsoDateInRange(
  value: string,
  bounds: { min: string; max: string },
  labels: { invalid: string; before: string; after: string },
  ctx: z.RefinementCtx,
) {
  const [y, m, d] = value.split("-").map(Number);
  const parsed = new Date(y, m - 1, d);
  if (
    Number.isNaN(parsed.getTime()) ||
    parsed.getFullYear() !== y ||
    parsed.getMonth() !== m - 1 ||
    parsed.getDate() !== d
  ) {
    ctx.addIssue({ code: "custom", message: labels.invalid });
    return;
  }
  if (value < bounds.min) ctx.addIssue({ code: "custom", message: labels.before });
  if (value > bounds.max) ctx.addIssue({ code: "custom", message: labels.after });
}

const countryName = z
  .string()
  .trim()
  .min(2)
  .max(100)
  .refine((v) => isKnownCountryName(v), "Please select a country from the list.");

const ALLOWED_CV_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const optionalUrl = z.preprocess(
  (v) => (typeof v === "string" && v.trim() === "" ? undefined : v),
  z.string().trim().url().optional(),
);

const optionalText = z.preprocess(
  (v) => (typeof v === "string" && v.trim() === "" ? undefined : v),
  z.string().trim().max(300).optional(),
);

export const applicationFieldsSchema = z.object({
  roleTitle: z.string().trim().min(2).max(160),
  roleSlug: z.preprocess(
    (v) => (typeof v === "string" && v.trim() === "" ? undefined : v),
    z.string().trim().max(120).optional(),
  ),
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().min(5).max(40),
  linkedin: z
    .string()
    .trim()
    .url()
    .refine((v) => /linkedin\.com/i.test(v), "LinkedIn URL must point to linkedin.com"),
  portfolio: optionalUrl,
  nationality: countryName,
  country: countryName,
  city: z.string().trim().min(1).max(100),
  state: optionalText,
  start: z.enum(START_AVAILABILITY_VALUES, {
    message: "Please select when you can start.",
  }),
  note: z.preprocess(
    (v) => (typeof v === "string" ? v.trim() : ""),
    z.string().max(8000).default(""),
  ),
});

export function emptyToNull(value: string | undefined | null): string | null {
  if (!value) return null;
  const t = value.trim();
  return t ? t : null;
}

export function collectAnswers(formData: FormData): Record<string, string> {
  const answers: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (!key.startsWith("q_") || typeof value !== "string") continue;
    const cleaned = value.trim();
    if (!cleaned) continue;
    answers[key.slice(2)] = cleaned.slice(0, 8000);
  }
  return answers;
}

export function validateCvFile(
  file: File | null,
): { ok: true; file: File } | { ok: false; error: string } {
  if (!file || !(file instanceof File) || file.size === 0) {
    return { ok: false, error: "Please upload a CV (PDF or Word)." };
  }
  if (file.size > MAX_CV_BYTES) {
    return { ok: false, error: "CV must be 8MB or smaller." };
  }
  const typeOk = ALLOWED_CV_TYPES.has(file.type) || /\.(pdf|doc|docx)$/i.test(file.name);
  if (!typeOk) {
    return { ok: false, error: "CV must be a PDF or Word document." };
  }
  return { ok: true, file };
}

/** Confirm file bytes match PDF / DOC / DOCX signatures (not just client MIME). */
export async function validateCvMagicBytes(
  file: File,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const header = new Uint8Array(await file.slice(0, 8).arrayBuffer());
  if (header.length < 4) {
    return { ok: false, error: "CV file appears to be empty or corrupt." };
  }

  const lower = file.name.toLowerCase();
  const isPdf =
    header[0] === 0x25 &&
    header[1] === 0x50 &&
    header[2] === 0x44 &&
    header[3] === 0x46; // %PDF
  const isOle =
    header[0] === 0xd0 &&
    header[1] === 0xcf &&
    header[2] === 0x11 &&
    header[3] === 0xe0; // legacy .doc
  const isZip =
    header[0] === 0x50 && header[1] === 0x4b; // DOCX is a ZIP container (PK)

  if (lower.endsWith(".pdf") || file.type === "application/pdf") {
    if (!isPdf) return { ok: false, error: "CV must be a valid PDF file." };
    return { ok: true };
  }
  if (lower.endsWith(".docx") || file.type.includes("openxmlformats")) {
    if (!isZip) return { ok: false, error: "CV must be a valid Word (.docx) file." };
    return { ok: true };
  }
  if (lower.endsWith(".doc") || file.type === "application/msword") {
    if (!isOle && !isZip) {
      return { ok: false, error: "CV must be a valid Word (.doc) file." };
    }
    return { ok: true };
  }

  // Extension missing / odd MIME but allowed by name check — accept known signatures.
  if (isPdf || isOle || isZip) return { ok: true };
  return { ok: false, error: "CV must be a PDF or Word document." };
}

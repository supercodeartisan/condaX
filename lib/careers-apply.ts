import { z } from "zod";

const MAX_CV_BYTES = 8 * 1024 * 1024;
/** Earliest start: today … 18 months ahead (YYYY-MM-DD). */
export const START_DATE_MAX_MONTHS = 18;

export function toIsoDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function getStartDateBounds(now = new Date()) {
  const min = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const max = new Date(min);
  max.setMonth(max.getMonth() + START_DATE_MAX_MONTHS);
  return { min: toIsoDate(min), max: toIsoDate(max) };
}

/** DOB: age 18–80. */
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
  country: z.string().trim().min(2).max(100),
  city: z.string().trim().min(1).max(100),
  state: optionalText,
  address: optionalText,
  start: z
    .string()
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Start date must be a valid day, month, and year.")
    .superRefine((value, ctx) => {
      const bounds = getStartDateBounds();
      refineIsoDateInRange(value, bounds, {
        invalid: "Start date must be a real calendar day (day / month / year).",
        before: `Earliest start cannot be before today (${bounds.min}).`,
        after: `Earliest start cannot be more than ${START_DATE_MAX_MONTHS} months ahead (${bounds.max}).`,
      }, ctx);
    }),
  dob: z
    .string()
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date of birth must be a valid day, month, and year.")
    .superRefine((value, ctx) => {
      const bounds = getDobBounds();
      refineIsoDateInRange(value, bounds, {
        invalid: "Date of birth must be a real calendar day (day / month / year).",
        before: `Date of birth is outside the accepted range (min age ${DOB_MIN_AGE}, max age ${DOB_MAX_AGE}).`,
        after: `Candidates must be at least ${DOB_MIN_AGE} years old.`,
      }, ctx);
    }),
  note: z.string().trim().min(20).max(8000),
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

import { put } from "@vercel/blob";
import {
  applicationFieldsSchema,
  collectAnswers,
  emptyToNull,
  validateCvFile,
} from "@/lib/careers-apply";
import { notifyNewApplication } from "@/lib/careers-notify";
import { insertApplication } from "@/lib/db";
import {
  insertApplicationLocal,
  isLocalDevStoreEnabled,
  saveCvLocally,
} from "@/lib/local-store";

export type SubmitResult =
  | { ok: true; id: string; storage: "neon" | "local-dev" }
  | { ok: false; error: string; status: number };

export async function submitCareerApplication(
  formData: FormData,
  requestOrigin: string,
): Promise<SubmitResult> {
  const hasDb = Boolean(process.env.DATABASE_URL?.trim());
  const hasBlob = Boolean(process.env.BLOB_READ_WRITE_TOKEN?.trim());
  const localOk = isLocalDevStoreEnabled();

  if (!hasDb && !localOk) {
    return {
      ok: false,
      status: 503,
      error:
        "Applications are not configured yet (missing DATABASE_URL). Email careers@condax.solutions meanwhile.",
    };
  }

  const raw = {
    roleTitle: String(formData.get("role") ?? ""),
    roleSlug: String(formData.get("roleSlug") ?? "") || null,
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    linkedin: String(formData.get("linkedin") ?? ""),
    portfolio: String(formData.get("portfolio") ?? ""),
    country: String(formData.get("country") ?? ""),
    city: String(formData.get("city") ?? ""),
    state: String(formData.get("state") ?? ""),
    address: String(formData.get("address") ?? ""),
    start: String(formData.get("start") ?? ""),
    dob: String(formData.get("dob") ?? ""),
    note: String(formData.get("note") ?? ""),
  };

  const parsed = applicationFieldsSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      ok: false,
      status: 400,
      error: parsed.error.issues[0]?.message ?? "Invalid application fields.",
    };
  }

  const cvCheck = validateCvFile(formData.get("cv") as File | null);
  if (!cvCheck.ok) {
    return { ok: false, status: 400, error: cvCheck.error };
  }

  const answers = collectAnswers(formData);

  let cvUrl: string;
  let cvFilename: string;

  if (hasBlob) {
    const safeName = cvCheck.file.name.replace(/[^\w.\-()+ ]+/g, "_").slice(0, 120);
    const blob = await put(`careers-cvs/${Date.now()}-${safeName}`, cvCheck.file, {
      access: "public",
      addRandomSuffix: true,
      contentType: cvCheck.file.type || undefined,
    });
    cvUrl = blob.url;
    cvFilename = cvCheck.file.name;
  } else if (localOk) {
    const local = await saveCvLocally(cvCheck.file, requestOrigin);
    cvUrl = local.url;
    cvFilename = local.filename;
  } else {
    return {
      ok: false,
      status: 503,
      error:
        "File storage is not configured yet (missing BLOB_READ_WRITE_TOKEN). Email careers@condax.solutions meanwhile.",
    };
  }

  const payload = {
    roleTitle: parsed.data.roleTitle,
    roleSlug: emptyToNull(parsed.data.roleSlug ?? null),
    fullName: parsed.data.name,
    email: parsed.data.email.toLowerCase(),
    phone: parsed.data.phone,
    linkedin: parsed.data.linkedin,
    portfolio: emptyToNull(parsed.data.portfolio),
    country: parsed.data.country,
    city: parsed.data.city,
    state: emptyToNull(parsed.data.state),
    address: emptyToNull(parsed.data.address),
    startDate: parsed.data.start,
    dateOfBirth: parsed.data.dob,
    note: parsed.data.note,
    answers,
    cvUrl,
    cvFilename,
  };

  const { id } = hasDb
    ? await insertApplication(payload)
    : await insertApplicationLocal(payload);

  if (process.env.RESEND_API_KEY?.trim()) {
    try {
      await notifyNewApplication(id, payload);
    } catch (err) {
      console.error("[careers] notify failed", err);
    }
  }

  return { ok: true, id, storage: hasDb ? "neon" : "local-dev" };
}

/** Cloudflare Turnstile — optional; skipped when keys are not configured. */

export function turnstileConfigured(): boolean {
  return Boolean(
    process.env.TURNSTILE_SECRET_KEY?.trim() &&
      process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim(),
  );
}

export function getTurnstileSiteKey(): string | null {
  return process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() || null;
}

export async function verifyTurnstile(
  token: string | null | undefined,
  ip?: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  if (!turnstileConfigured()) return { ok: true };

  const secret = process.env.TURNSTILE_SECRET_KEY!.trim();
  if (!token || !token.trim()) {
    return { ok: false, error: "Please complete the security check." };
  }

  try {
    const body = new URLSearchParams();
    body.set("secret", secret);
    body.set("response", token.trim());
    if (ip && ip !== "unknown") body.set("remoteip", ip);

    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    const data = (await res.json()) as { success?: boolean };
    if (!data.success) {
      return { ok: false, error: "Security check failed. Please try again." };
    }
    return { ok: true };
  } catch (err) {
    console.error("[turnstile] verify failed", err);
    return { ok: false, error: "Security check unavailable. Please try again." };
  }
}

/** Honeypot: bots fill hidden fields; humans leave them empty. */
export function honeypotTripped(value: FormDataEntryValue | string | null | undefined): boolean {
  if (value == null) return false;
  const text = typeof value === "string" ? value : String(value);
  return text.trim().length > 0;
}

/** Prefer first non-empty cf-turnstile-response when duplicates exist. */
export function turnstileTokenFromFormData(formData: FormData): string {
  const all = formData.getAll("cf-turnstile-response");
  for (const value of all) {
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return "";
}

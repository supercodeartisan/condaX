import { clientIp, rateLimit } from "@/lib/rate-limit";
import { honeypotTripped, verifyTurnstile } from "@/lib/turnstile";

export type FormGuardResult =
  | { ok: true; ip: string }
  | { ok: false; kind: "rate_limit"; retryAfterSec: number }
  | { ok: false; kind: "honeypot" }
  | { ok: false; kind: "turnstile"; error: string };

/**
 * Shared spam / abuse checks for public POST endpoints.
 */
export async function guardPublicForm(
  request: Request,
  opts: {
    bucket: string;
    limit: number;
    windowMs: number;
    turnstileToken?: string | null;
    honeypot?: FormDataEntryValue | string | null;
  },
): Promise<FormGuardResult> {
  const ip = clientIp(request);
  const limited = rateLimit(`${opts.bucket}:${ip}`, {
    limit: opts.limit,
    windowMs: opts.windowMs,
  });
  if (!limited.ok) {
    return { ok: false, kind: "rate_limit", retryAfterSec: limited.retryAfterSec };
  }

  if (honeypotTripped(opts.honeypot)) {
    return { ok: false, kind: "honeypot" };
  }

  const turnstile = await verifyTurnstile(opts.turnstileToken, ip);
  if (!turnstile.ok) {
    return { ok: false, kind: "turnstile", error: turnstile.error };
  }

  return { ok: true, ip };
}

export { rateLimitResponse } from "@/lib/rate-limit";

/**
 * Lightweight sliding-window rate limit (per serverless isolate).
 * Best paired with Turnstile; for global limits add Upstash later.
 */

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

const MAX_KEYS = 5_000;

function prune(now: number) {
  if (buckets.size < MAX_KEYS) return;
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
  if (buckets.size >= MAX_KEYS) {
    const first = buckets.keys().next().value;
    if (first) buckets.delete(first);
  }
}

/**
 * Prefer platform-provided client IP (harder to spoof) over raw X-Forwarded-For.
 * Vercel sets x-vercel-forwarded-for / x-real-ip from the edge connection.
 */
export function clientIp(request: Request): string {
  const vercel = request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim();
  if (vercel) return vercel;

  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) return realIp;

  // Last resort: right-most XFF hop is typically the proxy closest to the app.
  // Prefer it over the left-most (often client-controlled) when not on Vercel.
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const parts = forwarded.split(",").map((p) => p.trim()).filter(Boolean);
    const last = parts[parts.length - 1];
    if (last) return last;
  }

  return "unknown";
}

export function rateLimit(
  key: string,
  opts: { limit: number; windowMs: number },
): { ok: true } | { ok: false; retryAfterSec: number } {
  const now = Date.now();
  prune(now);
  const existing = buckets.get(key);
  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + opts.windowMs });
    return { ok: true };
  }
  if (existing.count >= opts.limit) {
    return {
      ok: false,
      retryAfterSec: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }
  existing.count += 1;
  return { ok: true };
}

export function rateLimitResponse(retryAfterSec: number) {
  return Response.json(
    { error: `Too many requests. Try again in ${retryAfterSec}s.` },
    {
      status: 429,
      headers: { "Retry-After": String(retryAfterSec) },
    },
  );
}

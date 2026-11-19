import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  adminSessionCookieOptions,
  createAdminSessionToken,
  getAdminPassword,
} from "@/lib/admin-auth";
import { clientIp, rateLimit, rateLimitResponse } from "@/lib/rate-limit";
import { timingSafeEqual } from "crypto";

function passwordsMatch(provided: string, expected: string): boolean {
  const a = Buffer.from(provided);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function POST(request: Request) {
  const ip = clientIp(request);
  const limited = rateLimit(`admin-login:${ip}`, { limit: 8, windowMs: 15 * 60 * 1000 });
  if (!limited.ok) return rateLimitResponse(limited.retryAfterSec);

  const password = getAdminPassword();
  if (!password) {
    return NextResponse.json(
      { error: "Admin sign-in is not available right now." },
      { status: 503 },
    );
  }

  const body = (await request.json().catch(() => null)) as { password?: string } | null;
  if (!body?.password || !passwordsMatch(body.password, password)) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  const token = createAdminSessionToken();
  if (!token) {
    return NextResponse.json({ error: "Could not create session." }, { status: 500 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, token, adminSessionCookieOptions());
  return response;
}

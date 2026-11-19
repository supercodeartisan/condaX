import { NextResponse } from "next/server";
import { ADMIN_COOKIE, adminSessionCookieOptions } from "@/lib/admin-auth";

/** Clears the admin session cookie. Idempotent for signed-out callers. */
export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, "", {
    ...adminSessionCookieOptions(0),
    maxAge: 0,
  });
  return response;
}

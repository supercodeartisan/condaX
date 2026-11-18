import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "condax_admin";

/** 7 days — shorter session reduces stolen-cookie window. */
const SESSION_MAX_AGE_SEC = 60 * 60 * 24 * 7;

export function getAdminPassword(): string | null {
  return process.env.ADMIN_PASSWORD?.trim() || null;
}

function sessionSecret(): string | null {
  const password = getAdminPassword();
  if (!password) return null;
  // Prefer dedicated secret; fall back to password-derived material.
  return process.env.ADMIN_SESSION_SECRET?.trim() || `condax-admin:${password}`;
}

function sign(payload: string, secret: string): string {
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

/** Signed session token — never stores the raw admin password in the cookie. */
export function createAdminSessionToken(): string | null {
  const secret = sessionSecret();
  if (!secret) return null;
  const exp = Date.now() + SESSION_MAX_AGE_SEC * 1000;
  const payload = `admin.${exp}`;
  return `${payload}.${sign(payload, secret)}`;
}

export function verifyAdminSessionToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const secret = sessionSecret();
  if (!secret) return false;

  // Legacy: cookie previously stored the raw password — accept once, then re-login upgrades.
  const password = getAdminPassword();
  if (password && safeEqual(token, password)) return true;

  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const [role, expStr, sig] = parts;
  if (role !== "admin") return false;
  const exp = Number(expStr);
  if (!Number.isFinite(exp) || Date.now() > exp) return false;
  const payload = `${role}.${expStr}`;
  const expected = sign(payload, secret);
  return safeEqual(sig, expected);
}

export async function isAdminAuthenticated(): Promise<boolean> {
  if (!getAdminPassword()) return false;
  const jar = await cookies();
  return verifyAdminSessionToken(jar.get(ADMIN_COOKIE)?.value);
}

export function adminSessionCookieOptions(maxAge = SESSION_MAX_AGE_SEC) {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge,
  };
}

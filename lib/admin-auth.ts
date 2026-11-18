import { cookies } from "next/headers";

export const ADMIN_COOKIE = "condax_admin";

export function getAdminPassword(): string | null {
  return process.env.ADMIN_PASSWORD?.trim() || null;
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const password = getAdminPassword();
  if (!password) return false;
  const jar = await cookies();
  return jar.get(ADMIN_COOKIE)?.value === password;
}

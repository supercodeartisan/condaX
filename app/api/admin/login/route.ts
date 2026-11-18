import { NextResponse } from "next/server";
import { ADMIN_COOKIE, getAdminPassword } from "@/lib/admin-auth";

export async function POST(request: Request) {
  const password = getAdminPassword();
  if (!password) {
    return NextResponse.json(
      { error: "ADMIN_PASSWORD is not configured on the server." },
      { status: 503 },
    );
  }

  const body = (await request.json().catch(() => null)) as { password?: string } | null;
  if (!body?.password || body.password !== password) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, password, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 14,
  });
  return response;
}

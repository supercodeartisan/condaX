import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { updateApplicationStatus } from "@/lib/db";
import { isLocalDevStoreEnabled, updateApplicationStatusLocal } from "@/lib/local-store";

const ALLOWED = new Set(["new", "screening", "interview", "offer", "hired", "rejected", "archived"]);

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;
  const body = (await request.json().catch(() => null)) as { status?: string } | null;
  if (!body?.status || !ALLOWED.has(body.status)) {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }

  try {
    if (process.env.DATABASE_URL?.trim()) {
      await updateApplicationStatus(id, body.status);
    } else if (isLocalDevStoreEnabled()) {
      await updateApplicationStatusLocal(id, body.status);
    } else {
      return NextResponse.json({ error: "No store configured" }, { status: 503 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[admin] status update failed", err);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

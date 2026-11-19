import { readFile } from "fs/promises";
import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { isLocalDevStoreEnabled, localCvPath } from "@/lib/local-store";

export const runtime = "nodejs";

/**
 * Dev/local CV files. Always requires an admin session — never public,
 * even when CAREERS_LOCAL_STORE was historically used. Prefer the admin
 * proxy `/api/admin/applications/[id]/cv` for review UI and emails.
 */
export async function GET(
  request: Request,
  context: { params: Promise<{ name: string }> },
) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isLocalDevStoreEnabled()) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const { name } = await context.params;
  const filePath = localCvPath(decodeURIComponent(name));
  if (!filePath) {
    return NextResponse.json({ error: "Invalid file" }, { status: 400 });
  }

  const download = new URL(request.url).searchParams.get("download") === "1";

  try {
    const data = await readFile(filePath);
    const lower = filePath.toLowerCase();
    const type = lower.endsWith(".pdf")
      ? "application/pdf"
      : lower.endsWith(".docx")
        ? "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        : lower.endsWith(".doc")
          ? "application/msword"
          : "application/octet-stream";
    const displayName = pathBasename(filePath).replace(/^[\d]+-[a-f0-9]+-/, "");
    const disposition = `${download ? "attachment" : "inline"}; filename="${sanitizeFilename(displayName)}"`;
    return new NextResponse(new Uint8Array(data), {
      headers: {
        "Content-Type": type,
        "Content-Length": String(data.byteLength),
        "Content-Disposition": disposition,
        "X-Content-Type-Options": "nosniff",
        "Cache-Control": "private, no-store",
      },
    });
  } catch {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}

function pathBasename(p: string) {
  return p.split(/[/\\]/).pop() ?? "cv";
}

function sanitizeFilename(name: string) {
  return name.replace(/[^\w.\-()+ ]+/g, "_").slice(0, 120) || "cv";
}

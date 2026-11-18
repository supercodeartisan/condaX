import { get } from "@vercel/blob";
import { readFile } from "fs/promises";
import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { normalizeCvUrl } from "@/lib/cv-url";
import { getApplicationById } from "@/lib/db";
import {
  getApplicationByIdLocal,
  isLocalDevStoreEnabled,
  localCvPath,
} from "@/lib/local-store";

export const runtime = "nodejs";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;
  const download = new URL(request.url).searchParams.get("download") === "1";

  let app =
    process.env.DATABASE_URL?.trim()
      ? await getApplicationById(id).catch(() => null)
      : null;
  if (!app && isLocalDevStoreEnabled()) {
    app = await getApplicationByIdLocal(id);
  }
  if (!app?.cv_url) {
    return NextResponse.json({ error: "Application or CV not found" }, { status: 404 });
  }

  const filename = sanitizeFilename(app.cv_filename || "cv.pdf");
  const disposition = `${download ? "attachment" : "inline"}; filename="${filename}"`;

  const cvUrl = normalizeCvUrl(app.cv_url);

  // Local-dev stored files
  if (cvUrl.startsWith("/api/local-cv/")) {
    if (!isLocalDevStoreEnabled()) {
      return NextResponse.json({ error: "Local CV store unavailable" }, { status: 404 });
    }
    const name = decodeURIComponent(cvUrl.replace("/api/local-cv/", ""));
    const filePath = localCvPath(name);
    if (!filePath) {
      return NextResponse.json({ error: "Invalid CV path" }, { status: 400 });
    }
    try {
      const data = await readFile(filePath);
      return new NextResponse(new Uint8Array(data), {
        headers: {
          "Content-Type": contentTypeFor(filename),
          "Content-Length": String(data.byteLength),
          "Content-Disposition": disposition,
          "Cache-Control": "private, no-store",
        },
      });
    } catch {
      return NextResponse.json({ error: "CV file missing" }, { status: 404 });
    }
  }

  // Private (or public) Vercel Blob URL
  try {
    const result = await get(cvUrl, { access: "private" });
    if (!result || result.statusCode !== 200 || !result.stream) {
      return NextResponse.json({ error: "CV not found in storage" }, { status: 404 });
    }
    return new NextResponse(result.stream, {
      headers: {
        "Content-Type": result.blob.contentType || contentTypeFor(filename),
        "Content-Disposition": disposition,
        "X-Content-Type-Options": "nosniff",
        "Cache-Control": "private, no-store",
      },
    });
  } catch (err) {
    console.error("[admin] cv fetch failed", err);
    return NextResponse.json(
      { error: "Could not load CV from Blob storage" },
      { status: 502 },
    );
  }
}

function sanitizeFilename(name: string) {
  return name.replace(/[^\w.\-()+ ]+/g, "_").slice(0, 120) || "cv.pdf";
}

function contentTypeFor(filename: string) {
  const lower = filename.toLowerCase();
  if (lower.endsWith(".pdf")) return "application/pdf";
  if (lower.endsWith(".docx")) {
    return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  }
  if (lower.endsWith(".doc")) return "application/msword";
  return "application/octet-stream";
}

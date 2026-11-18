import { readFile } from "fs/promises";
import { NextResponse } from "next/server";
import { isLocalDevStoreEnabled, localCvPath } from "@/lib/local-store";

export const runtime = "nodejs";

export async function GET(
  _request: Request,
  context: { params: Promise<{ name: string }> },
) {
  if (!isLocalDevStoreEnabled()) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const { name } = await context.params;
  const filePath = localCvPath(decodeURIComponent(name));
  if (!filePath) {
    return NextResponse.json({ error: "Invalid file" }, { status: 400 });
  }

  try {
    const data = await readFile(filePath);
    const lower = filePath.toLowerCase();
    const type = lower.endsWith(".pdf")
      ? "application/pdf"
      : lower.endsWith(".docx")
        ? "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        : "application/octet-stream";
    const displayName = pathBasename(filePath).replace(/^[\d]+-[a-f0-9]+-/, "");
    return new NextResponse(new Uint8Array(data), {
      headers: {
        "Content-Type": type,
        "Content-Length": String(data.byteLength),
        "Content-Disposition": `inline; filename="${displayName}"`,
        "Cache-Control": "private, max-age=60",
      },
    });
  } catch {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}

function pathBasename(p: string) {
  return p.split(/[/\\]/).pop() ?? "cv";
}

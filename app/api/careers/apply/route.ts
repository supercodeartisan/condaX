import { NextResponse } from "next/server";
import { submitCareerApplication } from "@/lib/careers-submit";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const origin = new URL(request.url).origin;
    const wantsJson =
      request.headers.get("accept")?.includes("application/json") ||
      formData.get("response") === "json";

    const result = await submitCareerApplication(formData, origin);

    if (!result.ok) {
      if (wantsJson) {
        return NextResponse.json({ error: result.error }, { status: result.status });
      }
      const params = new URLSearchParams({ error: result.error });
      return NextResponse.redirect(new URL(`/careers/submitted?${params}`, origin), 303);
    }

    if (wantsJson) {
      return NextResponse.json({
        ok: true,
        id: result.id,
        storage: result.storage,
      });
    }

    const params = new URLSearchParams({
      ok: "1",
      id: result.id,
      role: String(formData.get("role") ?? ""),
    });
    return NextResponse.redirect(new URL(`/careers/submitted?${params}`, origin), 303);
  } catch (err) {
    console.error("[careers] apply failed", err);
    const detail = err instanceof Error ? err.message : "Unknown error";
    const message = `Something went wrong submitting your application (${detail}). Please try again or email admin@condaxits.com.`;
    const wantsJson = request.headers.get("accept")?.includes("application/json");
    if (wantsJson) {
      return NextResponse.json({ error: message }, { status: 500 });
    }
    const origin = new URL(request.url).origin;
    return NextResponse.redirect(
      new URL(`/careers/submitted?error=${encodeURIComponent(message)}`, origin),
      303,
    );
  }
}

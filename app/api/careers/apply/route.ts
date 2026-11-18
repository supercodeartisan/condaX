import { NextResponse } from "next/server";
import { submitCareerApplication } from "@/lib/careers-submit";
import { guardPublicForm, rateLimitResponse } from "@/lib/form-guard";
import { getRequestGeo } from "@/lib/request-geo";
import { turnstileTokenFromFormData } from "@/lib/turnstile";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const origin = new URL(request.url).origin;
    const geo = getRequestGeo(request);
    const wantsJson =
      request.headers.get("accept")?.includes("application/json") ||
      formData.get("response") === "json";

    const guarded = await guardPublicForm(request, {
      bucket: "careers-apply",
      limit: 5,
      windowMs: 60 * 60 * 1000,
      turnstileToken: turnstileTokenFromFormData(formData),
      honeypot: formData.get("website"),
    });
    if (!guarded.ok) {
      if (guarded.kind === "honeypot") {
        if (wantsJson) return NextResponse.json({ ok: true, id: "ok" });
        return NextResponse.redirect(new URL("/careers/submitted?ok=1", origin), 303);
      }
      if (guarded.kind === "rate_limit") {
        if (wantsJson) return rateLimitResponse(guarded.retryAfterSec);
        return NextResponse.redirect(
          new URL(
            `/careers/submitted?error=${encodeURIComponent("Too many requests. Please try again later.")}`,
            origin,
          ),
          303,
        );
      }
      if (wantsJson) {
        return NextResponse.json({ error: guarded.error }, { status: 400 });
      }
      return NextResponse.redirect(
        new URL(`/careers/submitted?error=${encodeURIComponent(guarded.error)}`, origin),
        303,
      );
    }

    const result = await submitCareerApplication(formData, origin, geo);

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

import { NextResponse } from "next/server";
import { guardPublicForm, rateLimitResponse } from "@/lib/form-guard";
import { referralSchema } from "@/lib/inquiries";
import { insertInquiry, insertReferral } from "@/lib/inquiries-db";
import { notifyReferralCreated } from "@/lib/inquiry-notify";
import {
  insertInquiryLocal,
  insertReferralLocal,
  isLocalDevStoreEnabled,
} from "@/lib/local-store";

export async function POST(request: Request) {
  const hasDb = Boolean(process.env.DATABASE_URL?.trim());
  const hasResend = Boolean(process.env.RESEND_API_KEY?.trim());
  const localOk = isLocalDevStoreEnabled();

  if (!hasDb && !localOk && !hasResend) {
    return NextResponse.json(
      {
        error:
          "Referrals are not configured yet. Email support@condaxits.com with “Referral” in the subject.",
      },
      { status: 503 },
    );
  }

  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  const guarded = await guardPublicForm(request, {
    bucket: "referral",
    limit: 6,
    windowMs: 60 * 60 * 1000,
    turnstileToken: String(body?.["cf-turnstile-response"] ?? body?.turnstileToken ?? ""),
    honeypot: typeof body?.website === "string" ? body.website : null,
  });
  if (!guarded.ok) {
    if (guarded.kind === "honeypot") {
      const siteUrl =
        process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
        new URL(request.url).origin;
      return NextResponse.json({
        ok: true,
        id: "ok",
        code: "CX-HOLD",
        link: `${siteUrl}/get-in-touch`,
      });
    }
    if (guarded.kind === "rate_limit") {
      return rateLimitResponse(guarded.retryAfterSec);
    }
    return NextResponse.json({ error: guarded.error }, { status: 400 });
  }

  const parsed = referralSchema.safeParse({
    referrerName: String(body?.referrerName ?? ""),
    referrerEmail: String(body?.referrerEmail ?? ""),
    organization: String(body?.organization ?? ""),
    contactName: String(body?.contactName ?? ""),
    contactEmail: String(body?.contactEmail ?? ""),
    notes: String(body?.notes ?? "") || null,
  });

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid referral fields." },
      { status: 400 },
    );
  }

  const data = parsed.data;

  let id: string;
  let code: string;
  try {
    if (hasDb) {
      ({ id, code } = await insertReferral(data));
      await insertInquiry({
        kind: "referral",
        name: data.referrerName,
        email: data.referrerEmail,
        referralCode: code,
        payload: {
          organization: data.organization,
          contactName: data.contactName,
          contactEmail: data.contactEmail,
          notes: data.notes ?? null,
          code,
        },
      });
    } else if (localOk) {
      ({ id, code } = await insertReferralLocal(data));
      await insertInquiryLocal({
        kind: "referral",
        name: data.referrerName,
        email: data.referrerEmail,
        referralCode: code,
        payload: {
          organization: data.organization,
          contactName: data.contactName,
          contactEmail: data.contactEmail,
          notes: data.notes ?? null,
          code,
        },
      });
    } else {
      return NextResponse.json(
        {
          error:
            "Could not save referral. Set DATABASE_URL and run the inquiries/referrals tables from db/schema.sql on Neon.",
        },
        { status: 503 },
      );
    }
  } catch (err) {
    console.error("[referral] save failed", err);
    return NextResponse.json(
      {
        error:
          "Could not create referral link. Confirm DATABASE_URL and that the referrals table from db/schema.sql exists on Neon.",
      },
      { status: 502 },
    );
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    new URL(request.url).origin;
  const link = `${siteUrl}/get-in-touch?ref=${encodeURIComponent(code)}`;

  try {
    if (hasResend) {
      await notifyReferralCreated({ id, code, link, ...data });
    }
  } catch (error) {
    console.error("[referral] notify failed", error);
  }

  return NextResponse.json({ ok: true, id, code, link });
}

import { NextResponse } from "next/server";
import { guardPublicForm, rateLimitResponse } from "@/lib/form-guard";
import { contactInquirySchema } from "@/lib/inquiries";
import { insertInquiry, getReferralByCode } from "@/lib/inquiries-db";
import { notifyContactInquiry } from "@/lib/inquiry-notify";
import {
  getReferralByCodeLocal,
  insertInquiryLocal,
  isLocalDevStoreEnabled,
} from "@/lib/local-store";
import { getRequestGeo } from "@/lib/request-geo";
import { turnstileTokenFromFormData } from "@/lib/turnstile";

export async function POST(request: Request) {
  const hasDb = Boolean(process.env.DATABASE_URL?.trim());
  const hasResend = Boolean(process.env.RESEND_API_KEY?.trim());
  const localOk = isLocalDevStoreEnabled();
  const geo = getRequestGeo(request);

  if (!hasDb && !localOk && !hasResend) {
    return NextResponse.json(
      {
        error:
          "Contact form is not configured yet. Email support@condaxits.com meanwhile.",
      },
      { status: 503 },
    );
  }

  const formData = await request.formData();
  const guarded = await guardPublicForm(request, {
    bucket: "contact",
    limit: 8,
    windowMs: 60 * 60 * 1000,
    turnstileToken: turnstileTokenFromFormData(formData),
    honeypot: formData.get("website"),
  });
  if (!guarded.ok) {
    if (guarded.kind === "honeypot") {
      return NextResponse.json({ ok: true, id: "ok" });
    }
    if (guarded.kind === "rate_limit") {
      return rateLimitResponse(guarded.retryAfterSec);
    }
    return NextResponse.json({ error: guarded.error }, { status: 400 });
  }

  const parsed = contactInquirySchema.safeParse({
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    source: String(formData.get("source") ?? ""),
    region: String(formData.get("region") ?? ""),
    description: String(formData.get("description") ?? ""),
    scope: String(formData.get("scope") ?? ""),
    date: String(formData.get("date") ?? ""),
    investment: String(formData.get("investment") ?? ""),
    referralCode: String(formData.get("referralCode") ?? "") || null,
  });

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid contact fields." },
      { status: 400 },
    );
  }

  const data = parsed.data;
  let referralMeta: { organization: string; referrer: string } | null = null;

  if (data.referralCode) {
    let referral = hasDb
      ? await getReferralByCode(data.referralCode).catch(() => null)
      : null;
    if (!referral && localOk) {
      referral = await getReferralByCodeLocal(data.referralCode);
    }
    if (!referral) {
      return NextResponse.json(
        {
          error:
            "That referral link is invalid or expired. Remove ?ref= from the URL or request a new link.",
        },
        { status: 400 },
      );
    }
    referralMeta = {
      organization: referral.organization,
      referrer: `${referral.referrer_name} <${referral.referrer_email}>`,
    };
  }

  const payload = {
    source: data.source,
    region: data.region,
    description: data.description,
    scope: data.scope,
    date: data.date,
    investment: data.investment,
    referralCode: data.referralCode ?? null,
    referredOrganization: referralMeta?.organization ?? null,
    referrer: referralMeta?.referrer ?? null,
  };

  let id: string | null = null;
  try {
    if (hasDb) {
      ({ id } = await insertInquiry({
        kind: "contact",
        name: data.name,
        email: data.email,
        referralCode: data.referralCode,
        payload,
        geo,
      }));
    } else if (localOk) {
      ({ id } = await insertInquiryLocal({
        kind: "contact",
        name: data.name,
        email: data.email,
        referralCode: data.referralCode,
        payload,
        geo,
      }));
    }
  } catch (err) {
    console.error("[contact] save failed - will try email-only fallback", err);
  }

  if (!id) {
    if (!hasResend) {
      return NextResponse.json(
        {
          error:
            "Could not save your message. In Neon SQL Editor, run the inquiries/referrals section from db/schema.sql, then try again.",
        },
        { status: 502 },
      );
    }
    id = `email-${Date.now()}`;
  }

  try {
    if (hasResend) {
      await notifyContactInquiry({ id, ...data, geo });
    }
  } catch (error) {
    console.error("[contact] notify failed", error);
    // DB saved but email failed - still OK for the visitor
    if (!id.startsWith("email-")) {
      return NextResponse.json({ ok: true, id });
    }
    return NextResponse.json(
      { error: "Could not deliver your message. Please email support@condaxits.com." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, id });
}

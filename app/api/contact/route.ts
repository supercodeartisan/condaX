import { NextResponse } from "next/server";
import { contactInquirySchema } from "@/lib/inquiries";
import { insertInquiry, getReferralByCode } from "@/lib/inquiries-db";
import { notifyContactInquiry } from "@/lib/inquiry-notify";
import {
  getReferralByCodeLocal,
  insertInquiryLocal,
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
          "Contact form is not configured yet. Email support@condaxits.com meanwhile.",
      },
      { status: 503 },
    );
  }

  const formData = await request.formData();
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

  let id: string;
  try {
    if (hasDb) {
      ({ id } = await insertInquiry({
        kind: "contact",
        name: data.name,
        email: data.email,
        referralCode: data.referralCode,
        payload,
      }));
    } else if (localOk) {
      ({ id } = await insertInquiryLocal({
        kind: "contact",
        name: data.name,
        email: data.email,
        referralCode: data.referralCode,
        payload,
      }));
    } else {
      // Email-only fallback when DB tables are not ready yet
      id = `email-${Date.now()}`;
    }
  } catch (err) {
    console.error("[contact] save failed", err);
    return NextResponse.json(
      {
        error:
          "Could not save your message. Confirm DATABASE_URL and that inquiries/referrals tables from db/schema.sql exist on Neon.",
      },
      { status: 502 },
    );
  }

  try {
    if (hasResend) {
      await notifyContactInquiry({ id, ...data });
    }
  } catch (error) {
    console.error("[contact] notify failed", error);
  }

  return NextResponse.json({ ok: true, id });
}

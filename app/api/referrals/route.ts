import { NextResponse } from "next/server";
import { referralSchema } from "@/lib/inquiries";
import { notifyReferralCreated } from "@/lib/inquiry-notify";
import {
  insertInquiryLocal,
  insertReferralLocal,
  isLocalDevStoreEnabled,
} from "@/lib/local-store";

export async function POST(request: Request) {
  if (!isLocalDevStoreEnabled() && !process.env.RESEND_API_KEY?.trim()) {
    return NextResponse.json(
      {
        error:
          "Referrals are not configured yet. Email hello@condax.solutions with “Referral” in the subject.",
      },
      { status: 503 },
    );
  }

  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
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
  const { id, code } = await insertReferralLocal(data);
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

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    new URL(request.url).origin;
  const link = `${siteUrl}/get-in-touch?ref=${encodeURIComponent(code)}`;

  try {
    await notifyReferralCreated({ id, code, link, ...data });
  } catch (error) {
    console.error("[referral] notify failed", error);
  }

  return NextResponse.json({ ok: true, id, code, link });
}

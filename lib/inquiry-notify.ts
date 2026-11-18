import { Resend } from "resend";
import { getContactNotifyTo, getResendFrom } from "@/lib/env";
import { formatRequestGeo, type RequestGeo } from "@/lib/request-geo";

function notifyTo() {
  return getContactNotifyTo();
}

export async function notifyContactInquiry(input: {
  id: string;
  name: string;
  email: string;
  source: string;
  region: string;
  description: string;
  scope: string;
  date: string;
  investment: string;
  referralCode?: string | null;
  geo?: RequestGeo | null;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY missing - skipped email notify");
    return;
  }

  const resend = new Resend(apiKey);
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.condaxits.com";

  const text = [
    `New Condax contact inquiry`,
    ``,
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Source: ${input.source}`,
    `Region: ${input.region}`,
    `Scope: ${input.scope}`,
    `Timeline: ${input.date}`,
    `Investment: ${input.investment}`,
    input.referralCode ? `Referral code: ${input.referralCode}` : null,
    input.geo
      ? `Submitter network: ${formatRequestGeo({
          ip: input.geo.ip,
          geo_country: input.geo.country,
          geo_region: input.geo.region,
          geo_city: input.geo.city,
        })}`
      : null,
    ``,
    `Request:`,
    input.description,
    ``,
    `Review: ${siteUrl}/admin/inquiries`,
    `Inquiry ID: ${input.id}`,
  ]
    .filter((line) => line !== null)
    .join("\n");

  await resend.emails.send({
    from: getResendFrom(),
    to: [notifyTo()],
    subject: `[Contact] ${input.scope} - ${input.name}`,
    text,
  });
}

export async function notifyReferralCreated(input: {
  id: string;
  code: string;
  referrerName: string;
  referrerEmail: string;
  organization: string;
  contactName: string;
  contactEmail: string;
  notes?: string | null;
  link: string;
  geo?: RequestGeo | null;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.warn("[referral] RESEND_API_KEY missing - skipped email notify");
    return;
  }

  const resend = new Resend(apiKey);
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.condaxits.com";

  const text = [
    `New Condax referral`,
    ``,
    `Referrer: ${input.referrerName} <${input.referrerEmail}>`,
    `Organization: ${input.organization}`,
    `Contact: ${input.contactName} <${input.contactEmail}>`,
    `Referral code: ${input.code}`,
    `Referral link: ${input.link}`,
    input.notes ? `\nNotes:\n${input.notes}` : null,
    input.geo
      ? `Submitter network: ${formatRequestGeo({
          ip: input.geo.ip,
          geo_country: input.geo.country,
          geo_region: input.geo.region,
          geo_city: input.geo.city,
        })}`
      : null,
    ``,
    `Review: ${siteUrl}/admin/inquiries`,
    `Referral ID: ${input.id}`,
  ]
    .filter((line) => line !== null)
    .join("\n");

  await resend.emails.send({
    from: getResendFrom(),
    to: [notifyTo()],
    subject: `[Referral] ${input.organization} - ${input.code}`,
    text,
  });
}

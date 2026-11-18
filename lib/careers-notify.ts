import { Resend } from "resend";
import { getCareersNotifyTo, getResendFrom } from "@/lib/env";
import type { NewApplication } from "@/lib/db";

export async function notifyNewApplication(
  applicationId: string,
  input: NewApplication,
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.warn("[careers] RESEND_API_KEY missing — skipped email notify");
    return;
  }

  const resend = new Resend(apiKey);
  const to = getCareersNotifyTo();
  const from = getResendFrom();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://condax.solutions";

  const answerLines = Object.entries(input.answers)
    .map(([key, value]) => `• ${key}:\n${value}`)
    .join("\n\n");

  const text = [
    `New Condax application`,
    ``,
    `Role: ${input.roleTitle}`,
    `Name: ${input.fullName}`,
    `Email: ${input.email}`,
    `Phone: ${input.phone}`,
    `LinkedIn: ${input.linkedin}`,
    input.portfolio ? `Portfolio: ${input.portfolio}` : null,
    `Location: ${[input.city, input.state, input.country].filter(Boolean).join(", ")}`,
    input.address ? `Address: ${input.address}` : null,
    `Date of birth: ${input.dateOfBirth}`,
    `Earliest start: ${input.startDate}`,
    `CV: ${input.cvUrl}`,
    ``,
    `Introduction:`,
    input.note,
    answerLines ? `\nRole answers:\n${answerLines}` : null,
    ``,
    `Review: ${siteUrl}/admin/applications`,
    `Application ID: ${applicationId}`,
  ]
    .filter((line) => line !== null)
    .join("\n");

  await resend.emails.send({
    from,
    to: [to],
    subject: `[Careers] ${input.roleTitle} — ${input.fullName}`,
    text,
  });
}

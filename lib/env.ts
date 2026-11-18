/** Server-only env helpers. Missing values throw only when a feature is used. */

import { site } from "@/lib/site";

export function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export function getCareersNotifyTo(): string {
  return (
    process.env.CAREERS_TO?.trim() ||
    process.env.CONTACT_TO?.trim() ||
    site.emails.careers
  );
}

export function getContactNotifyTo(): string {
  return process.env.CONTACT_TO?.trim() || site.emails.contact;
}

export function getResendFrom(): string {
  return process.env.RESEND_FROM?.trim() || `Condax <${site.emails.contact}>`;
}

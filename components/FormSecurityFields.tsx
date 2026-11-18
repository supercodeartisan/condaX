"use client";

import { HoneypotField, TurnstileField } from "@/components/TurnstileField";

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() || "";

/** Honeypot always; Turnstile only when site key is configured. */
export function FormSecurityFields() {
  return (
    <div className="relative">
      <HoneypotField />
      {siteKey ? <TurnstileField siteKey={siteKey} /> : null}
    </div>
  );
}

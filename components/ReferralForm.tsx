"use client";

import { useState } from "react";

export function ReferralForm() {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ code: string; link: string } | null>(null);

  return (
    <form
      className="mt-10 flex flex-col gap-4"
      onSubmit={async (e) => {
        e.preventDefault();
        setBusy(true);
        setError(null);
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries());
        try {
          const res = await fetch("/api/referrals", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              referrerName: data.referrerName,
              referrerEmail: data.referrerEmail,
              organization: data.organization,
              contactName: data.contactName,
              contactEmail: data.contactEmail,
              notes: data.notes || null,
            }),
          });
          const json = (await res.json().catch(() => null)) as
            | { error?: string; code?: string; link?: string }
            | null;
          if (!res.ok || !json?.code || !json.link) {
            setError(json?.error ?? "Could not create referral link.");
            setBusy(false);
            return;
          }
          setResult({ code: json.code, link: json.link });
          form.reset();
        } catch {
          setError("Network error. Please try again or email hello@condax.solutions.");
        }
        setBusy(false);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name *" name="referrerName" />
        <Field label="Your email *" name="referrerEmail" type="email" />
      </div>
      <Field label="Organization to introduce *" name="organization" />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Their contact name *" name="contactName" />
        <Field label="Their contact email *" name="contactEmail" type="email" />
      </div>
      <label className="block">
        <span className="sr-only">Context for the introduction</span>
        <textarea
          name="notes"
          rows={4}
          placeholder="What they need (optional)"
          className="w-full resize-none rounded-2xl border border-hairline bg-surface px-4 py-4 text-[15px] text-charcoal outline-none placeholder:text-muted focus:border-cobalt"
        />
      </label>
      <button
        type="submit"
        disabled={busy}
        className="inline-flex w-fit items-center rounded-full bg-cobalt px-6 py-3 text-[16px] font-medium text-white hover:bg-cobalt-hover disabled:opacity-60"
      >
        {busy ? "Creating link…" : "Create referral link"}
      </button>
      {error ? <p className="text-[14px] text-red-700">{error}</p> : null}
      {result ? (
        <div className="rounded-2xl border border-cobalt/20 bg-cobalt/5 p-5 text-[14px] text-neutral">
          <p className="font-medium text-ink">Referral ready</p>
          <p className="mt-2">
            Code: <span className="font-medium text-cobalt">{result.code}</span>
          </p>
          <p className="mt-2 break-all">
            Link:{" "}
            <a href={result.link} className="text-cobalt underline underline-offset-4">
              {result.link}
            </a>
          </p>
          <p className="mt-3 text-[13px]">
            Share this link with the contact. When they submit the contact form, the referral code is
            attached for Condax admin review.
          </p>
        </div>
      ) : null}
    </form>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <input
        name={name}
        type={type}
        required
        placeholder={label}
        className="w-full rounded-2xl border border-hairline bg-surface px-4 py-4 text-[15px] text-charcoal outline-none placeholder:text-muted focus:border-cobalt"
      />
    </label>
  );
}

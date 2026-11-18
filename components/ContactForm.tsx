"use client";

import { useState } from "react";
import { EmailLink } from "@/components/EmailLink";
import { investmentOptions, regionOptions, scopeOptions, sourceOptions } from "@/lib/site";

export function ContactForm({ referralCode }: { referralCode?: string }) {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={async (e) => {
        e.preventDefault();
        setBusy(true);
        setError(null);
        const form = e.currentTarget;
        const body = new FormData(form);
        try {
          const res = await fetch("/api/contact", { method: "POST", body });
          const data = (await res.json().catch(() => null)) as { error?: string } | null;
          if (!res.ok) {
            setError(data?.error ?? "Could not submit. Please try again.");
            setBusy(false);
            return;
          }
          setSent(true);
          form.reset();
        } catch {
          setError("Network error. Please try again or email support@condaxits.com.");
        }
        setBusy(false);
      }}
    >
      {referralCode ? <input type="hidden" name="referralCode" value={referralCode} /> : null}
      {referralCode ? (
        <p className="rounded-2xl border border-cobalt/20 bg-cobalt/5 px-4 py-3 text-[13px] text-cobalt">
          Referral code applied: <span className="font-medium">{referralCode}</span>
        </p>
      ) : null}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name *" name="name" />
        <Field label="Email *" name="email" type="email" />
      </div>
      <Select label="How did you hear about Condax? *" name="source" options={sourceOptions} />
      <Select label="Where is your organization based? *" name="region" options={regionOptions} />
      <label className="relative block">
        <span className="sr-only">Describe your request</span>
        <textarea
          name="description"
          required
          rows={5}
          placeholder="Describe your request. *"
          className="w-full resize-none rounded-2xl border border-hairline bg-surface px-4 py-4 text-[15px] text-charcoal outline-none placeholder:text-muted focus:border-cobalt"
        />
      </label>
      <Select label="What do you need? *" name="scope" options={scopeOptions} />
      <Field label="Any key milestones or ideal start date? *" name="date" />
      <Select label="Expected investment (USD) *" name="investment" options={investmentOptions} />
      <button
        type="submit"
        disabled={busy || sent}
        className="mt-2 inline-flex w-fit items-center rounded-full bg-cobalt px-6 py-3 text-[16px] font-medium text-white hover:bg-cobalt-hover disabled:opacity-60"
      >
        {busy ? "Submitting…" : sent ? "Submitted" : "Submit"}
      </button>
      {error ? <p className="text-[14px] text-red-700">{error}</p> : null}
      {sent ? (
        <p className="text-[14px] text-neutral">
          Thank you. We received your submission and typically reply within one business day. If you
          need to add anything, email{" "}
          <EmailLink
            to="support@condaxits.com"
            subject="Follow-up to Condax contact form"
            className="text-cobalt underline underline-offset-4"
          >
            support@condaxits.com
          </EmailLink>
          .
        </p>
      ) : (
        <p className="text-[14px] text-neutral">
          You may also email{" "}
          <EmailLink
            to="support@condaxits.com"
            subject="Contact Condax"
            className="text-cobalt underline underline-offset-4"
          >
            support@condaxits.com
          </EmailLink>
          .
        </p>
      )}
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

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <select
        name={name}
        required
        defaultValue=""
        className="w-full appearance-none rounded-2xl border border-hairline bg-surface px-4 py-4 text-[15px] text-charcoal outline-none focus:border-cobalt"
      >
        <option value="" disabled>
          {label}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

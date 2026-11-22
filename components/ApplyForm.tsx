"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { EmailLink } from "@/components/EmailLink";
import { FormSecurityFields } from "@/components/FormSecurityFields";
import { readTurnstileToken } from "@/components/TurnstileField";
import { COUNTRIES } from "@/lib/countries";
import { START_AVAILABILITY_OPTIONS } from "@/lib/careers-apply";

type Question = { id: string; label: string; hint?: string };

export function ApplyForm({
  roleTitle,
  roleSlug,
  questions = [],
  locationDefaults,
}: {
  roleTitle: string;
  roleSlug?: string;
  questions?: Question[];
  locationDefaults?: { country?: string; city?: string };
}) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cvLabel, setCvLabel] = useState("Upload CV (PDF or Word) *");
  const defaultCountry = locationDefaults?.country ?? "";
  const defaultCity = locationDefaults?.city ?? "";

  return (
    <form
      method="post"
      action="/api/careers/apply"
      encType="multipart/form-data"
      className="flex flex-col gap-8"
      onSubmit={async (e) => {
        e.preventDefault();
        setBusy(true);
        setError(null);
        const form = e.currentTarget;
        const body = new FormData(form);
        if (!String(body.get("nationality") ?? "").trim()) {
          setError("Please select your nationality.");
          setBusy(false);
          return;
        }
        if (!String(body.get("country") ?? "").trim()) {
          setError("Please select your country of residence.");
          setBusy(false);
          return;
        }
        if (!String(body.get("start") ?? "").trim()) {
          setError("Please select when you can start.");
          setBusy(false);
          return;
        }
        const turnstileToken = readTurnstileToken(form);
        if (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() && !turnstileToken) {
          setError("Please wait for the security check to finish (Success!), then submit again.");
          setBusy(false);
          return;
        }
        if (turnstileToken) body.set("cf-turnstile-response", turnstileToken);
        body.set("response", "json");
        try {
          const res = await fetch("/api/careers/apply", {
            method: "POST",
            headers: { Accept: "application/json" },
            body,
          });
          const data = (await res.json().catch(() => null)) as
            | { error?: string; id?: string; ok?: boolean }
            | null;
          if (!res.ok) {
            setError(data?.error ?? "Could not submit application. Please try again.");
            setBusy(false);
            try {
              window.turnstile?.reset?.();
            } catch {
              /* ignore */
            }
            return;
          }
          const params = new URLSearchParams({
            ok: "1",
            id: data?.id ?? "",
            role: roleTitle,
          });
          router.push(`/careers/submitted?${params.toString()}`);
        } catch {
          setError("Network error. Please try again or email admin@condaxits.com.");
          setBusy(false);
        }
      }}
    >
      <input type="hidden" name="role" value={roleTitle} />
      {roleSlug ? <input type="hidden" name="roleSlug" value={roleSlug} /> : null}

      <fieldset className="space-y-4">
        <legend className="text-[13px] font-medium tracking-[0.12em] text-muted uppercase">
          Contact
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full name *" name="name" autoComplete="name" />
          <Field label="Email *" name="email" type="email" autoComplete="email" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Phone number *" name="phone" type="tel" autoComplete="tel" />
          <Field
            label="LinkedIn URL *"
            name="linkedin"
            type="url"
            placeholder="https://www.linkedin.com/in/…"
            pattern="https?://(www\.)?linkedin\.com/.*"
            title="Enter a full LinkedIn profile URL"
          />
        </div>
        <Field
          label="Portfolio, GitHub, or website"
          name="portfolio"
          type="url"
          required={false}
          placeholder="Portfolio, GitHub, or website (optional)"
        />
        <CountrySelect
          label="Nationality (country) *"
          name="nationality"
          hint="Country associated with your citizenship or contracting paperwork — not a work-authorization gate."
          defaultValue=""
        />
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-[13px] font-medium tracking-[0.12em] text-muted uppercase">
          Location
        </legend>
        <p className="text-[13px] leading-relaxed text-neutral">
          Roles are remote and open internationally. Country and city may be prefilled from your
          network location - edit if wrong. We use this for scheduling and compliance, not to
          exclude qualified applicants.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 sm:items-start">
          <CountrySelect
            label="Country of residence *"
            name="country"
            defaultValue={defaultCountry}
            autoComplete="country-name"
          />
          <Field
            label="City *"
            name="city"
            autoComplete="address-level2"
            defaultValue={defaultCity}
            showLabel
          />
        </div>
        <Field
          label="State / province"
          name="state"
          required={false}
          autoComplete="address-level1"
          placeholder="State / province (optional)"
        />
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-[13px] font-medium tracking-[0.12em] text-muted uppercase">
          Availability
        </legend>
        <label className="block">
          <span className="mb-1.5 block text-[12px] font-medium tracking-wide text-muted uppercase">
            When can you start? *
          </span>
          <select
            name="start"
            required
            defaultValue=""
            className="w-full rounded-2xl border border-hairline bg-surface px-4 py-4 text-[15px] text-charcoal outline-none focus:border-cobalt"
          >
            <option value="" disabled>
              Select availability
            </option>
            {START_AVAILABILITY_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
      </fieldset>

      {questions.length > 0 ? (
        <fieldset className="space-y-5">
          <legend className="text-[13px] font-medium tracking-[0.12em] text-muted uppercase">
            Role questions
          </legend>
          {questions.map((q) => (
            <label key={q.id} className="block">
              <span className="text-[14px] font-medium text-ink">
                {q.label} *
              </span>
              {q.hint ? <span className="mt-1 block text-[13px] text-neutral">{q.hint}</span> : null}
              <textarea
                name={`q_${q.id}`}
                required
                minLength={10}
                rows={4}
                className="mt-3 w-full resize-y rounded-2xl border border-hairline bg-surface px-4 py-4 text-[15px] text-charcoal outline-none placeholder:text-muted focus:border-cobalt"
              />
            </label>
          ))}
        </fieldset>
      ) : null}

      <fieldset className="space-y-3">
        <legend className="text-[13px] font-medium tracking-[0.12em] text-muted uppercase">
          CV
        </legend>
        <label className="inline-flex w-fit cursor-pointer items-center rounded-full border border-cobalt/30 px-4 py-2 text-[13px] text-neutral transition-colors hover:border-cobalt hover:text-cobalt">
          <input
            type="file"
            name="cv"
            accept=".pdf,.doc,.docx,application/pdf"
            required
            className="sr-only"
            onChange={(e) => {
              const file = e.target.files?.[0];
              setCvLabel(file ? file.name : "Upload CV (PDF or Word) *");
            }}
          />
          {cvLabel}
        </label>
      </fieldset>

      <p className="text-[12px] leading-relaxed text-muted">
        Applications are reviewed by Condax hiring leads. We typically reply within a few business
        days. Please do not include sensitive personal data beyond what is needed for hiring.
        LinkedIn is required so we can verify professional background.
      </p>

      {error ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-800">
          {error}
        </div>
      ) : null}

      <FormSecurityFields />

      <button
        type="submit"
        disabled={busy}
        className="inline-flex w-fit items-center rounded-full bg-cobalt px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-cobalt-hover disabled:opacity-60"
      >
        {busy ? "Submitting…" : "Submit application"}
      </button>

      <p className="text-[14px] text-neutral">
        Prefer email? Send your CV to{" "}
        <EmailLink
          to="admin@condaxits.com"
          subject="Careers application"
          className="text-cobalt underline underline-offset-4"
        >
          admin@condaxits.com
        </EmailLink>{" "}
        with the role in the subject line.
      </p>
    </form>
  );
}

function CountrySelect({
  label,
  name,
  defaultValue = "",
  hint,
  autoComplete,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  hint?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[12px] font-medium tracking-wide text-muted uppercase">
        {label}
      </span>
      {hint ? <span className="mb-2 block text-[13px] text-neutral">{hint}</span> : null}
      <select
        name={name}
        required
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        className="w-full rounded-2xl border border-hairline bg-surface px-4 py-4 text-[15px] text-charcoal outline-none focus:border-cobalt"
      >
        <option value="" disabled>
          Select country
        </option>
        {COUNTRIES.map((c) => (
          <option key={c.code} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = true,
  placeholder,
  pattern,
  title,
  autoComplete,
  defaultValue,
  showLabel = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  pattern?: string;
  title?: string;
  autoComplete?: string;
  defaultValue?: string;
  showLabel?: boolean;
}) {
  return (
    <label className="block">
      {showLabel ? (
        <span className="mb-1.5 block text-[12px] font-medium tracking-wide text-muted uppercase">
          {label}
        </span>
      ) : (
        <span className="sr-only">{label}</span>
      )}
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder ?? (showLabel ? undefined : label)}
        pattern={pattern}
        title={title}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        className="w-full rounded-2xl border border-hairline bg-surface px-4 py-4 text-[15px] text-charcoal outline-none placeholder:text-muted focus:border-cobalt"
      />
    </label>
  );
}

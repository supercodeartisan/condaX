"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { EmailLink } from "@/components/EmailLink";
import { CalendarDatePicker } from "@/components/ui/CalendarDatePicker";
import { getDobBounds, getStartDateBounds } from "@/lib/careers-apply";

type Question = { id: string; label: string; hint?: string };

export function ApplyForm({
  roleTitle,
  roleSlug,
  questions = [],
}: {
  roleTitle: string;
  roleSlug?: string;
  questions?: Question[];
}) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cvLabel, setCvLabel] = useState("Upload CV (PDF or Word) *");
  const startBounds = useMemo(() => getStartDateBounds(), []);
  const dobBounds = useMemo(() => getDobBounds(), []);

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
        if (!String(body.get("dob") ?? "").trim()) {
          setError("Please select your date of birth on the calendar.");
          setBusy(false);
          return;
        }
        if (!String(body.get("start") ?? "").trim()) {
          setError("Please select your earliest start date on the calendar.");
          setBusy(false);
          return;
        }
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
          <Field label="Full name *" name="name" />
          <Field label="Email *" name="email" type="email" />
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
        <CalendarDatePicker
          name="dob"
          label="Date of birth *"
          hint="Pick day, month, and year on the calendar. Applicants must be 18–80."
          min={dobBounds.min}
          max={dobBounds.max}
          initialViewDate={`${new Date().getFullYear() - 25}-01-01`}
        />
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-[13px] font-medium tracking-[0.12em] text-muted uppercase">
          Location
        </legend>
        <p className="text-[13px] leading-relaxed text-neutral">
          Roles are remote and open internationally. We use location for scheduling and compliance —
          not for exclusion of qualified applicants.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Country *" name="country" autoComplete="country-name" />
          <Field label="City *" name="city" autoComplete="address-level2" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="State / province"
            name="state"
            required={false}
            autoComplete="address-level1"
            placeholder="State / province (optional)"
          />
          <Field
            label="Street address"
            name="address"
            required={false}
            autoComplete="street-address"
            placeholder="Street address (optional)"
          />
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-[13px] font-medium tracking-[0.12em] text-muted uppercase">
          Availability
        </legend>
        <CalendarDatePicker
          name="start"
          label="Earliest start date *"
          hint="Pick day, month, and year on the calendar. From today through the next 18 months."
          min={startBounds.min}
          max={startBounds.max}
        />
      </fieldset>

      {questions.length > 0 ? (
        <fieldset className="space-y-5">
          <legend className="text-[13px] font-medium tracking-[0.12em] text-muted uppercase">
            Role questions
          </legend>
          {questions.map((q) => (
            <label key={q.id} className="block">
              <span className="text-[14px] font-medium text-ink">{q.label} *</span>
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

      <fieldset className="space-y-4">
        <legend className="text-[13px] font-medium tracking-[0.12em] text-muted uppercase">
          Introduction
        </legend>
        <label className="block">
          <span className="text-[14px] font-medium text-ink">
            Why are you interested in Condax, and what relevant work should we review? *
          </span>
          <textarea
            name="note"
            required
            minLength={20}
            rows={5}
            className="mt-3 w-full resize-y rounded-2xl border border-hairline bg-surface px-4 py-4 text-[15px] text-charcoal outline-none placeholder:text-muted focus:border-cobalt"
          />
        </label>
      </fieldset>

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

function Field({
  label,
  name,
  type = "text",
  required = true,
  placeholder,
  pattern,
  title,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  pattern?: string;
  title?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder ?? label}
        pattern={pattern}
        title={title}
        autoComplete={autoComplete}
        className="w-full rounded-2xl border border-hairline bg-surface px-4 py-4 text-[15px] text-charcoal outline-none placeholder:text-muted focus:border-cobalt"
      />
    </label>
  );
}

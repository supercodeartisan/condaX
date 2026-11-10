"use client";

import { useState } from "react";

const regions = [
  "Americas",
  "Europe / UK",
  "Middle East / Africa",
  "Asia Pacific",
  "Other / worldwide",
];

export function ApplyForm({ roleTitle }: { roleTitle: string }) {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <input type="hidden" name="role" value={roleTitle} />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name *" name="name" />
        <Field label="Email *" name="email" type="email" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="LinkedIn URL" name="linkedin" required={false} />
        <Field label="GitHub or portfolio URL" name="portfolio" required={false} />
      </div>
      <Select label="Where are you based? *" name="region" options={regions} />
      <Field label="Earliest start date *" name="start" />
      <label className="block">
        <span className="sr-only">Why Condax?</span>
        <textarea
          name="note"
          required
          rows={5}
          placeholder="Why Condax, and what should we know about your recent work? *"
          className="w-full resize-none rounded-2xl border border-px-white-12 bg-[#141410] px-4 py-4 text-[15px] outline-none placeholder:text-px-white-48 focus:border-px-lime"
        />
      </label>
      <label className="inline-flex w-fit cursor-pointer items-center rounded-full border border-px-lime/30 px-4 py-2 text-[13px] text-px-white-64 hover:border-px-lime hover:text-px-lime">
        <input type="file" name="cv" accept=".pdf,.doc,.docx" className="sr-only" />
        Upload CV (PDF)
      </label>
      <p className="text-[12px] text-px-white-32">
        Applications are reviewed by Condax. We reply within a few business days. Do not include
        sensitive personal data beyond what is needed for hiring.
      </p>
      <button
        type="submit"
        className="mt-2 inline-flex w-fit items-center rounded-[32px] bg-px-lime px-6 py-3 text-[16px] font-medium text-px-ink hover:bg-px-lime-dim"
      >
        Submit application
      </button>
      {sent ? (
        <p className="text-[14px] text-px-white-64">
          Thanks — this demo form does not send anywhere yet. Wire it to careers@condax.solutions when you are ready.
        </p>
      ) : (
        <p className="text-[14px] text-px-white-48">
          Prefer email? Send your CV to{" "}
          <a href="mailto:careers@condax.solutions" className="text-px-lime underline underline-offset-4">
            careers@condax.solutions
          </a>{" "}
          with the role in the subject line.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={label}
        className="w-full rounded-2xl border border-px-white-12 bg-[#141410] px-4 py-4 text-[15px] outline-none placeholder:text-px-white-48 focus:border-px-lime"
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
        className="w-full appearance-none rounded-2xl border border-px-white-12 bg-[#141410] px-4 py-4 text-[15px] outline-none focus:border-px-lime"
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

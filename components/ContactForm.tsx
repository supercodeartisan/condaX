"use client";

import { useState } from "react";
import { investmentOptions, regionOptions, scopeOptions, sourceOptions } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name *" name="name" />
        <Field label="Email *" name="email" type="email" />
      </div>
      <Select label="How did you get to know us? *" name="source" options={sourceOptions} />
      <Select label="Where is your team based? *" name="region" options={regionOptions} />
      <label className="relative block">
        <span className="sr-only">How can we help?</span>
        <textarea
          name="description"
          required
          rows={5}
          placeholder="How can we help? *"
          className="w-full resize-none rounded-2xl border border-px-white-12 bg-[#141410] px-4 py-4 text-[15px] outline-none placeholder:text-px-white-48 focus:border-px-lime"
        />
        <span className="pointer-events-none absolute right-4 bottom-3 text-[11px] text-px-white-32">
          Upload is optional. Must be PDF, PNG or JPG.
        </span>
      </label>
      <label className="inline-flex w-fit cursor-pointer items-center rounded-full border border-px-lime/30 px-4 py-2 text-[13px] text-px-white-64 hover:border-px-lime hover:text-px-lime">
        <input type="file" name="file" accept=".pdf,.png,.jpg,.jpeg" className="sr-only" />
        Upload file
      </label>
      <Select label="What do you need? *" name="scope" options={scopeOptions} />
      <Field label="Any key milestones or ideal start date? *" name="date" />
      <Select label="Expected investment (USD) *" name="investment" options={investmentOptions} />
      <button
        type="submit"
        className="mt-2 inline-flex w-fit items-center rounded-[32px] bg-px-lime px-6 py-3 text-[16px] font-medium text-px-ink hover:bg-px-lime-dim"
      >
        Submit
      </button>
      {sent ? (
        <p className="text-[14px] text-px-white-64">
          Thanks — this demo form does not send anywhere yet. Wire it to your inbox when you are ready.
        </p>
      ) : (
        <p className="text-[14px] text-px-white-48">
          Just want to drop a message? Email us at{" "}
          <a href="mailto:hello@condax.solutions" className="text-px-lime underline underline-offset-4">
            hello@condax.solutions
          </a>
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

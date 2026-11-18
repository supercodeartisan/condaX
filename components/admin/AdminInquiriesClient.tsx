"use client";

import { useMemo, useState } from "react";
import type { InquiryRow, ReferralRow } from "@/lib/inquiries";
import { cn } from "@/lib/cn";
import { formatAdminDate } from "@/components/admin/statusStyles";

type Tab = "inquiries" | "referrals";

const FIELD_LABELS: Record<string, string> = {
  name: "Name",
  email: "Email",
  source: "Source",
  region: "Region",
  description: "Description",
  scope: "Scope",
  date: "Timeline",
  investment: "Investment",
  referralCode: "Referral code",
  referrerName: "Referrer name",
  referrerEmail: "Referrer email",
  organization: "Organization",
  contactName: "Contact name",
  contactEmail: "Contact email",
  notes: "Notes",
};

export function AdminInquiriesClient({
  inquiries,
  referrals,
}: {
  inquiries: InquiryRow[];
  referrals: ReferralRow[];
}) {
  const [tab, setTab] = useState<Tab>("inquiries");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(
    inquiries[0]?.id ?? referrals[0]?.id ?? null,
  );

  const filteredInquiries = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return inquiries;
    return inquiries.filter((item) => {
      const hay = [
        item.name,
        item.email,
        item.kind,
        item.referral_code ?? "",
        JSON.stringify(item.payload),
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [inquiries, query]);

  const filteredReferrals = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return referrals;
    return referrals.filter((r) => {
      const hay = [
        r.code,
        r.organization,
        r.contact_name,
        r.contact_email,
        r.referrer_name,
        r.referrer_email,
        r.notes ?? "",
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [referrals, query]);

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-[30px] font-medium tracking-tight text-ink sm:text-[36px]">
            Inquiries & referrals
          </h1>
          <p className="mt-1 text-[14px] text-neutral">
            Contact form submissions and referral links for review.
          </p>
        </div>
        <label className="relative block w-full sm:max-w-xs">
          <span className="sr-only">Search inbox</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search inbox…"
            className="w-full rounded-2xl border border-hairline bg-surface px-4 py-3 text-[14px] outline-none focus:border-cobalt"
          />
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <TabButton
          active={tab === "inquiries"}
          label={`Inquiries ${filteredInquiries.length}`}
          onClick={() => setTab("inquiries")}
        />
        <TabButton
          active={tab === "referrals"}
          label={`Referrals ${filteredReferrals.length}`}
          onClick={() => setTab("referrals")}
        />
      </div>

      {tab === "inquiries" ? (
        filteredInquiries.length === 0 ? (
          <EmptyState message="No inquiries match this view." />
        ) : (
          <ul className="space-y-3">
            {filteredInquiries.map((item) => {
              const open = openId === item.id;
              const entries = Object.entries(item.payload || {}).filter(
                ([, value]) => value != null && String(value).trim() !== "",
              );
              return (
                <li
                  key={item.id}
                  className={cn(
                    "overflow-hidden rounded-3xl border bg-surface shadow-[0_10px_40px_rgba(17,17,16,0.04)]",
                    open ? "border-cobalt/30" : "border-hairline",
                  )}
                >
                  <button
                    type="button"
                    className="flex w-full items-start gap-3 px-4 py-4 text-left sm:items-center sm:px-5"
                    onClick={() => setOpenId(open ? null : item.id)}
                    aria-expanded={open}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="truncate text-[16px] font-semibold text-ink">
                          {item.name}
                        </h2>
                        <span className="rounded-full bg-warm px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-neutral uppercase ring-1 ring-hairline">
                          {item.kind}
                        </span>
                        {item.referral_code ? (
                          <span className="rounded-full bg-cobalt/10 px-2.5 py-0.5 text-[11px] font-semibold text-cobalt ring-1 ring-cobalt/20">
                            {item.referral_code}
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-1 truncate text-[14px] text-neutral">{item.email}</p>
                      <p className="mt-0.5 text-[12px] text-muted">
                        {formatAdminDate(item.created_at)}
                      </p>
                    </div>
                    <span
                      className={cn(
                        "mt-1 shrink-0 text-muted transition-transform",
                        open && "rotate-180",
                      )}
                      aria-hidden
                    >
                      ▾
                    </span>
                  </button>

                  {open ? (
                    <div className="border-t border-hairline bg-paper/60 px-4 py-5 sm:px-5">
                      <div className="mb-4 flex flex-wrap gap-2">
                        <a
                          href={`mailto:${item.email}`}
                          className="inline-flex rounded-full bg-cobalt/10 px-3 py-1.5 text-[13px] font-medium text-cobalt ring-1 ring-cobalt/20"
                        >
                          Reply by email
                        </a>
                      </div>
                      <dl className="grid gap-3 sm:grid-cols-2">
                        {entries.map(([key, value]) => (
                          <div
                            key={key}
                            className={cn(
                              "rounded-xl bg-surface px-3 py-2.5 ring-1 ring-hairline",
                              key === "description" || key === "notes"
                                ? "sm:col-span-2"
                                : "",
                            )}
                          >
                            <dt className="text-[11px] font-semibold tracking-wide text-muted uppercase">
                              {FIELD_LABELS[key] ?? key}
                            </dt>
                            <dd className="mt-1 whitespace-pre-wrap break-words text-[14px] leading-relaxed text-ink">
                              {String(value)}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        )
      ) : filteredReferrals.length === 0 ? (
        <EmptyState message="No referrals match this view." />
      ) : (
        <ul className="space-y-3">
          {filteredReferrals.map((r) => {
            const open = openId === r.id;
            return (
              <li
                key={r.id}
                className={cn(
                  "overflow-hidden rounded-3xl border bg-surface shadow-[0_10px_40px_rgba(17,17,16,0.04)]",
                  open ? "border-cobalt/30" : "border-hairline",
                )}
              >
                <button
                  type="button"
                  className="flex w-full items-start gap-3 px-4 py-4 text-left sm:items-center sm:px-5"
                  onClick={() => setOpenId(open ? null : r.id)}
                  aria-expanded={open}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="truncate text-[16px] font-semibold text-ink">
                        {r.organization}
                      </h2>
                      <span className="rounded-full bg-cobalt/10 px-2.5 py-0.5 text-[11px] font-semibold text-cobalt ring-1 ring-cobalt/20">
                        {r.code}
                      </span>
                    </div>
                    <p className="mt-1 truncate text-[14px] text-neutral">
                      {r.contact_name} · {r.contact_email}
                    </p>
                    <p className="mt-0.5 text-[12px] text-muted">
                      {formatAdminDate(r.created_at)}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "mt-1 shrink-0 text-muted transition-transform",
                      open && "rotate-180",
                    )}
                    aria-hidden
                  >
                    ▾
                  </span>
                </button>

                {open ? (
                  <div className="border-t border-hairline bg-paper/60 px-4 py-5 sm:px-5">
                    <dl className="grid gap-3 sm:grid-cols-2">
                      <Field label="Referral code" value={r.code} />
                      <Field label="Organization" value={r.organization} />
                      <Field label="Contact" value={`${r.contact_name} · ${r.contact_email}`} />
                      <Field label="Referrer" value={`${r.referrer_name} · ${r.referrer_email}`} />
                      {r.notes ? (
                        <div className="rounded-xl bg-surface px-3 py-2.5 ring-1 ring-hairline sm:col-span-2">
                          <dt className="text-[11px] font-semibold tracking-wide text-muted uppercase">
                            Notes
                          </dt>
                          <dd className="mt-1 whitespace-pre-wrap text-[14px] leading-relaxed text-ink">
                            {r.notes}
                          </dd>
                        </div>
                      ) : null}
                    </dl>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <a
                        href={`mailto:${r.contact_email}`}
                        className="inline-flex rounded-full bg-cobalt/10 px-3 py-1.5 text-[13px] font-medium text-cobalt ring-1 ring-cobalt/20"
                      >
                        Email contact
                      </a>
                      <a
                        href={`mailto:${r.referrer_email}`}
                        className="inline-flex rounded-full bg-surface px-3 py-1.5 text-[13px] font-medium text-charcoal ring-1 ring-hairline"
                      >
                        Email referrer
                      </a>
                    </div>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function TabButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-2 text-[13px] font-medium ring-1 transition-colors sm:text-[14px]",
        active
          ? "bg-ink text-paper ring-ink"
          : "bg-surface text-neutral ring-hairline hover:text-ink",
      )}
    >
      {label}
    </button>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="rounded-3xl border border-dashed border-hairline bg-surface/70 px-5 py-14 text-center">
      <p className="text-[15px] text-neutral">{message}</p>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-surface px-3 py-2.5 ring-1 ring-hairline">
      <dt className="text-[11px] font-semibold tracking-wide text-muted uppercase">{label}</dt>
      <dd className="mt-1 break-words text-[14px] text-ink">{value}</dd>
    </div>
  );
}

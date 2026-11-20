"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { ApplicationRow } from "@/lib/db";
import { cn } from "@/lib/cn";
import {
  APPLICATION_STATUSES,
  formatAdminDate,
  formatStatusLabel,
  statusBadgeClass,
} from "@/components/admin/statusStyles";
import { formatRequestGeo } from "@/lib/request-geo";

function cvViewHref(id: string) {
  return `/api/admin/applications/${id}/cv`;
}

function cvDownloadHref(id: string) {
  return `/api/admin/applications/${id}/cv?download=1`;
}

export function AdminApplicationsClient({
  mode,
  applications = [],
}: {
  mode: "login" | "list";
  applications?: ApplicationRow[];
}) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [openId, setOpenId] = useState<string | null>(applications[0]?.id ?? null);
  const [savingId, setSavingId] = useState<string | null>(null);

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: applications.length };
    for (const s of APPLICATION_STATUSES) map[s] = 0;
    for (const app of applications) {
      map[app.status] = (map[app.status] ?? 0) + 1;
    }
    return map;
  }, [applications]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return applications.filter((app) => {
      if (statusFilter !== "all" && app.status !== statusFilter) return false;
      if (!q) return true;
      return (
        app.full_name.toLowerCase().includes(q) ||
        app.email.toLowerCase().includes(q) ||
        app.role_title.toLowerCase().includes(q) ||
        app.phone.toLowerCase().includes(q)
      );
    });
  }, [applications, query, statusFilter]);

  if (mode === "login") {
    return (
      <div className="mx-auto max-w-md">
        <div className="rounded-3xl border border-hairline bg-surface p-6 shadow-[0_16px_50px_rgba(17,17,16,0.06)] sm:p-8">
          <p className="text-[12px] font-medium tracking-[0.14em] text-cobalt uppercase">
            Secure access
          </p>
          <h1 className="mt-2 font-display text-[28px] font-medium tracking-tight text-ink sm:text-[32px]">
            Sign in to admin
          </h1>
          <p className="mt-2 text-[14px] leading-relaxed text-neutral">
            Review career applications, contact inquiries, and referrals.
          </p>
          <form
            className="mt-6 space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              setBusy(true);
              setError(null);
              const res = await fetch("/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
              });
              setBusy(false);
              if (!res.ok) {
                const data = (await res.json().catch(() => null)) as { error?: string } | null;
                setError(data?.error ?? "Login failed");
                return;
              }
              router.refresh();
            }}
          >
            <label className="block">
              <span className="mb-1.5 block text-[12px] font-medium tracking-wide text-muted uppercase">
                Password
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Admin password"
                required
                autoFocus
                className="w-full rounded-2xl border border-hairline bg-paper px-4 py-3.5 text-[15px] text-ink outline-none focus:border-cobalt"
              />
            </label>
            <button
              type="submit"
              disabled={busy}
              className="w-full rounded-2xl bg-cobalt px-5 py-3.5 text-[15px] font-medium text-white hover:bg-cobalt-hover disabled:opacity-60"
            >
              {busy ? "Signing in…" : "Sign in"}
            </button>
            {error ? <p className="text-[14px] text-red-700">{error}</p> : null}
          </form>
        </div>
      </div>
    );
  }

  async function updateStatus(id: string, status: string) {
    setSavingId(id);
    try {
      await fetch(`/api/admin/applications/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      router.refresh();
    } finally {
      setSavingId(null);
    }
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-[30px] font-medium tracking-tight text-ink sm:text-[36px]">
            Applications
          </h1>
          <p className="mt-1 text-[14px] text-neutral">
            {filtered.length} shown
            {statusFilter !== "all" || query ? ` · filtered from ${applications.length}` : ""} · newest
            first
          </p>
        </div>
        <label className="relative block w-full sm:max-w-xs">
          <span className="sr-only">Search applications</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search name, email, role…"
            className="w-full rounded-2xl border border-hairline bg-surface px-4 py-3 text-[14px] outline-none focus:border-cobalt"
          />
        </label>
      </div>

      <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <FilterChip
          active={statusFilter === "all"}
          label={`All ${counts.all}`}
          onClick={() => setStatusFilter("all")}
        />
        {APPLICATION_STATUSES.map((status) =>
          counts[status] ? (
            <FilterChip
              key={status}
              active={statusFilter === status}
              label={`${formatStatusLabel(status)} ${counts[status]}`}
              onClick={() => setStatusFilter(status)}
            />
          ) : null,
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-hairline bg-surface/70 px-5 py-14 text-center">
          <p className="text-[15px] text-neutral">No applications match this view.</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {filtered.map((app) => {
            const open = openId === app.id;
            const location = [app.city, app.state, app.country].filter(Boolean).join(", ");
            return (
              <li
                key={app.id}
                className={cn(
                  "overflow-hidden rounded-3xl border bg-surface shadow-[0_10px_40px_rgba(17,17,16,0.04)] transition-colors",
                  open ? "border-cobalt/30" : "border-hairline",
                )}
              >
                <button
                  type="button"
                  className="flex w-full items-start gap-3 px-4 py-4 text-left sm:items-center sm:gap-4 sm:px-5 sm:py-4"
                  onClick={() => setOpenId(open ? null : app.id)}
                  aria-expanded={open}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="truncate text-[16px] font-semibold text-ink sm:text-[17px]">
                        {app.full_name}
                      </h2>
                      <span
                        className={cn(
                          "inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide uppercase ring-1",
                          statusBadgeClass(app.status),
                        )}
                      >
                        {formatStatusLabel(app.status)}
                      </span>
                    </div>
                    <p className="mt-1 truncate text-[14px] text-cobalt">{app.role_title}</p>
                    <p className="mt-1 truncate text-[13px] text-neutral">
                      {app.email}
                      <span className="hidden sm:inline"> · {formatAdminDate(app.created_at)}</span>
                    </p>
                    <p className="mt-0.5 truncate text-[12px] text-muted">
                      {formatRequestGeo(app)}
                      <span className="sm:hidden"> · {formatAdminDate(app.created_at)}</span>
                    </p>
                  </div>
                  <span
                    className={cn(
                      "mt-1 shrink-0 text-muted transition-transform sm:mt-0",
                      open && "rotate-180",
                    )}
                    aria-hidden
                  >
                    ▾
                  </span>
                </button>

                {open ? (
                  <div className="border-t border-hairline bg-paper/60 px-4 py-5 sm:px-5">
                    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(260px,0.75fr)]">
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          <ActionLink href={`mailto:${app.email}`} label="Email" />
                          <ActionLink href={`tel:${app.phone}`} label="Call" />
                          <ActionLink href={app.linkedin} label="LinkedIn" external />
                          {app.portfolio ? (
                            <ActionLink href={app.portfolio} label="Portfolio" external />
                          ) : null}
                          <ActionLink
                            href={cvViewHref(app.id)}
                            label={app.cv_filename ? `View CV · ${app.cv_filename}` : "View CV"}
                            external
                            emphasis
                          />
                          <ActionLink href={cvDownloadHref(app.id)} label="Download CV" external />
                        </div>

                        <dl className="grid gap-3 text-[14px] sm:grid-cols-2">
                          <Detail label="Phone" value={app.phone} />
                          <Detail label="Location" value={location || "-"} />
                          <Detail label="Nationality" value={app.nationality || "-"} />
                          <Detail label="Address" value={app.address || "-"} />
                          <Detail label="Date of birth" value={app.date_of_birth || "-"} />
                          <Detail label="Availability" value={app.start_date || "-"} />
                          <Detail label="Submitted" value={formatAdminDate(app.created_at)} />
                          <Detail
                            label="Network / region"
                            value={formatRequestGeo(app)}
                          />
                        </dl>

                        {app.note ? (
                          <div className="rounded-2xl border border-hairline bg-surface p-4">
                            <p className="text-[11px] font-semibold tracking-wide text-muted uppercase">
                              Note
                            </p>
                            <p className="mt-2 whitespace-pre-wrap text-[14px] leading-relaxed text-charcoal">
                              {app.note}
                            </p>
                          </div>
                        ) : null}

                        {Object.keys(app.answers || {}).length > 0 ? (
                          <div className="space-y-3">
                            {Object.entries(app.answers).map(([key, value]) => (
                              <div
                                key={key}
                                className="rounded-2xl border border-hairline bg-surface p-4"
                              >
                                <p className="text-[11px] font-semibold tracking-wide text-muted uppercase">
                                  {key}
                                </p>
                                <p className="mt-2 whitespace-pre-wrap text-[14px] leading-relaxed text-charcoal">
                                  {value}
                                </p>
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>

                      <div className="rounded-2xl border border-hairline bg-surface p-4 sm:sticky sm:top-24 sm:self-start">
                        <label className="block">
                          <span className="text-[11px] font-semibold tracking-wide text-muted uppercase">
                            Pipeline status
                          </span>
                          <select
                            className="mt-2 w-full rounded-xl border border-hairline bg-paper px-3 py-3 text-[14px] font-medium outline-none focus:border-cobalt"
                            value={app.status}
                            disabled={savingId === app.id}
                            onChange={(e) => updateStatus(app.id, e.target.value)}
                          >
                            {APPLICATION_STATUSES.map((s) => (
                              <option key={s} value={s}>
                                {formatStatusLabel(s)}
                              </option>
                            ))}
                          </select>
                        </label>
                        <p className="mt-3 text-[12px] leading-relaxed text-muted">
                          {savingId === app.id
                            ? "Saving…"
                            : "Changes save immediately and refresh the list."}
                        </p>
                        <div className="mt-4 grid gap-2">
                          <a
                            href={cvViewHref(app.id)}
                            target="_blank"
                            rel="noreferrer"
                            className="flex w-full items-center justify-center rounded-xl bg-cobalt px-4 py-3 text-[14px] font-medium text-white hover:bg-cobalt-hover"
                          >
                            View CV
                          </a>
                          <a
                            href={cvDownloadHref(app.id)}
                            className="flex w-full items-center justify-center rounded-xl border border-hairline bg-paper px-4 py-3 text-[14px] font-medium text-ink hover:border-cobalt hover:text-cobalt"
                          >
                            Download CV
                          </a>
                        </div>
                      </div>
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

function FilterChip({
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
        "shrink-0 rounded-full px-3.5 py-2 text-[13px] font-medium whitespace-nowrap ring-1 transition-colors",
        active
          ? "bg-ink text-paper ring-ink"
          : "bg-surface text-neutral ring-hairline hover:text-ink",
      )}
    >
      {label}
    </button>
  );
}

function ActionLink({
  href,
  label,
  external,
  emphasis,
}: {
  href: string;
  label: string;
  external?: boolean;
  emphasis?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1.5 text-[13px] font-medium ring-1",
        emphasis
          ? "bg-cobalt/10 text-cobalt ring-cobalt/20"
          : "bg-surface text-charcoal ring-hairline hover:text-cobalt",
      )}
    >
      {label}
    </a>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-surface/80 px-3 py-2.5 ring-1 ring-hairline">
      <dt className="text-[11px] font-semibold tracking-wide text-muted uppercase">{label}</dt>
      <dd className="mt-1 break-words text-[14px] text-ink">{value}</dd>
    </div>
  );
}

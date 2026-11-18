"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { ApplicationRow } from "@/lib/db";
import { normalizeCvUrl } from "@/lib/cv-url";

const STATUSES = ["new", "screening", "interview", "offer", "hired", "rejected", "archived"] as const;

export function AdminApplicationsClient({
  mode,
  applications = [],
}: {
  mode: "login" | "logout" | "list";
  applications?: ApplicationRow[];
}) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  if (mode === "login") {
    return (
      <form
        className="mt-8 space-y-4"
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
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Admin password"
          required
          className="w-full rounded-2xl border border-hairline bg-surface px-4 py-4 text-[15px] outline-none focus:border-cobalt"
        />
        <button
          type="submit"
          disabled={busy}
          className="rounded-full bg-cobalt px-5 py-2.5 text-[14px] font-medium text-white hover:bg-cobalt-hover disabled:opacity-60"
        >
          {busy ? "Signing in…" : "Sign in"}
        </button>
        {error ? <p className="text-[14px] text-red-700">{error}</p> : null}
      </form>
    );
  }

  if (mode === "logout") {
    return (
      <button
        type="button"
        className="rounded-full border border-hairline px-4 py-2 text-[13px] text-neutral hover:border-cobalt hover:text-cobalt"
        onClick={async () => {
          await fetch("/api/admin/logout", { method: "POST" });
          router.refresh();
        }}
      >
        Sign out
      </button>
    );
  }

  return (
    <div className="mt-10 divide-y divide-hairline border-y border-hairline">
      {applications.length === 0 ? (
        <p className="py-10 text-[15px] text-neutral">No applications yet.</p>
      ) : (
        applications.map((app) => (
          <article key={app.id} className="grid gap-4 py-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="flex flex-wrap items-baseline gap-3">
                <h2 className="text-[20px] font-medium text-ink">{app.full_name}</h2>
                <span className="text-[13px] text-muted">
                  {new Date(app.created_at).toLocaleString()}
                </span>
              </div>
              <p className="mt-1 text-[15px] text-cobalt">{app.role_title}</p>
              <div className="mt-3 space-y-1 text-[14px] text-neutral">
                <p>
                  <a href={`mailto:${app.email}`} className="underline underline-offset-2">
                    {app.email}
                  </a>
                  {" · "}
                  <a href={`tel:${app.phone}`} className="underline underline-offset-2">
                    {app.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={app.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cobalt underline underline-offset-2"
                  >
                    LinkedIn
                  </a>
                  {app.portfolio ? (
                    <>
                      {" · "}
                      <a
                        href={app.portfolio}
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-2"
                      >
                        Portfolio
                      </a>
                    </>
                  ) : null}
                  {" · "}
                  <a
                    href={normalizeCvUrl(app.cv_url)}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-cobalt underline underline-offset-2"
                  >
                    Open CV{app.cv_filename ? ` (${app.cv_filename})` : ""}
                  </a>
                </p>
                <p>
                  {[app.city, app.state, app.country].filter(Boolean).join(", ")}
                  {app.address ? ` · ${app.address}` : ""}
                </p>
                <p>
                  DOB · {app.date_of_birth || "—"}
                  {" · "}
                  Earliest start · {app.start_date}
                </p>
              </div>
              <p className="mt-4 whitespace-pre-wrap text-[14px] leading-relaxed text-charcoal">
                {app.note}
              </p>
              {Object.keys(app.answers || {}).length > 0 ? (
                <div className="mt-4 space-y-3">
                  {Object.entries(app.answers).map(([key, value]) => (
                    <div key={key} className="rounded-2xl border border-hairline bg-warm p-4">
                      <p className="text-[12px] tracking-wide text-muted uppercase">{key}</p>
                      <p className="mt-2 whitespace-pre-wrap text-[14px] text-charcoal">{value}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            <div>
              <label className="block text-[12px] tracking-wide text-muted uppercase">Status</label>
              <select
                className="mt-2 w-full rounded-2xl border border-hairline bg-surface px-4 py-3 text-[14px] outline-none focus:border-cobalt"
                defaultValue={app.status}
                onChange={async (e) => {
                  const status = e.target.value;
                  await fetch(`/api/admin/applications/${app.id}/status`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ status }),
                  });
                  router.refresh();
                }}
              >
                {STATUSES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </article>
        ))
      )}
    </div>
  );
}

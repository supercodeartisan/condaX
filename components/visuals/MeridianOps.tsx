/** Illustrative concept — internal operations platform. */
export function MeridianOps({ className = "" }: { className?: string }) {
  const rows = [
    { id: "OP-204", work: "Vendor onboarding", owner: "A. Reyes", status: "In review", tone: "cobalt" },
    { id: "OP-211", work: "Invoice exception", owner: "M. Chen", status: "Blocked", tone: "warn" },
    { id: "OP-218", work: "SLA follow-up", owner: "J. Ortiz", status: "Queued", tone: "muted" },
    { id: "OP-223", work: "Access request", owner: "S. Patel", status: "Done", tone: "ok" },
    { id: "OP-229", work: "Contract renewal", owner: "L. Kim", status: "In review", tone: "cobalt" },
  ];

  return (
    <div
      className={`overflow-hidden rounded-[20px] border border-hairline bg-surface shadow-[0_28px_80px_rgba(17,17,16,0.09)] ${className}`}
      aria-hidden
    >
      <div className="flex items-center gap-2 border-b border-hairline bg-paper px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#E8C4B8]" />
        <span className="size-2.5 rounded-full bg-[#E6D9A8]" />
        <span className="size-2.5 rounded-full bg-[#B8D4C8]" />
        <div className="ml-3 flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-hairline bg-warm/70 px-3 py-1.5">
          <span className="truncate text-[11px] tracking-wide text-muted">meridian.ops / work / today</span>
        </div>
      </div>

      <div className="grid min-h-[340px] grid-cols-[72px_1fr] sm:grid-cols-[132px_1fr]">
        <aside className="border-r border-hairline bg-[#F3F1EC] p-3 sm:p-4">
          <div className="mb-5 font-display text-[13px] font-semibold tracking-tight text-ink">Meridian</div>
          {["Board", "Work", "People", "Reports"].map((item, i) => (
            <div
              key={item}
              className={`mb-1 rounded-md px-2 py-2 text-[11px] sm:text-[12px] ${
                i === 1 ? "bg-charcoal text-paper" : "text-neutral"
              }`}
            >
              {item}
            </div>
          ))}
          <div className="mt-8 hidden rounded-lg border border-hairline bg-surface p-2.5 sm:block">
            <div className="text-[10px] text-muted">SLA at risk</div>
            <div className="mt-1 text-[16px] font-semibold text-ink">3</div>
          </div>
        </aside>

        <div className="p-3 sm:p-5">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <div className="text-[10px] tracking-[0.12em] text-muted uppercase">Operations board</div>
              <div className="mt-1 font-display text-[22px] leading-normal font-medium tracking-tight text-ink sm:text-[26px]">
                Today&apos;s queue
              </div>
            </div>
            <div className="flex gap-2">
              {[
                ["12", "Open"],
                ["3", "Blocked"],
                ["7", "Done"],
              ].map(([n, l]) => (
                <div
                  key={l}
                  className="min-w-[54px] rounded-lg border border-hairline bg-paper px-2.5 py-2 text-center"
                >
                  <div className="font-display text-[16px] font-medium text-ink">{n}</div>
                  <div className="text-[10px] text-muted">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 overflow-hidden rounded-xl border border-hairline">
            <div className="grid grid-cols-[64px_1fr_80px] gap-2 border-b border-hairline bg-paper px-3 py-2 text-[10px] tracking-wide text-muted uppercase sm:grid-cols-[80px_1.5fr_96px_96px]">
              <span>ID</span>
              <span>Work</span>
              <span className="hidden sm:inline">Owner</span>
              <span>Status</span>
            </div>
            {rows.map((row) => (
              <div
                key={row.id}
                className="grid grid-cols-[64px_1fr_80px] items-center gap-2 border-b border-hairline px-3 py-2.5 last:border-b-0 sm:grid-cols-[80px_1.5fr_96px_96px]"
              >
                <span className="text-[11px] text-muted">{row.id}</span>
                <span className="truncate text-[12px] font-medium text-ink">{row.work}</span>
                <span className="hidden text-[11px] text-neutral sm:inline">{row.owner}</span>
                <span
                  className={`justify-self-start rounded-full px-2 py-0.5 text-[10px] font-medium ${
                    row.tone === "cobalt"
                      ? "bg-cobalt/10 text-cobalt"
                      : row.tone === "warn"
                        ? "bg-[#F3E6D8] text-[#8A5A2B]"
                        : row.tone === "ok"
                          ? "bg-[#E4EFE8] text-[#2F6B4F]"
                          : "bg-warm text-neutral"
                  }`}
                >
                  {row.status}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              ["Intake", 70],
              ["Triage", 85],
              ["Resolve", 55],
            ].map(([stage, pct]) => (
              <div key={String(stage)} className="rounded-lg border border-hairline bg-paper px-3 py-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] text-muted">{stage}</span>
                  <span className="text-[10px] font-medium text-ink">{pct}%</span>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-hairline">
                  <div className="h-full rounded-full bg-cobalt" style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

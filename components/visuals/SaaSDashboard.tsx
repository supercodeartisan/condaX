/** Polished delivery console composition for the homepage hero. */
export function SaaSDashboard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-[22px] border border-hairline bg-surface shadow-[0_40px_110px_rgba(17,17,16,0.12)] ${className}`}
      aria-hidden
    >
      <div className="flex items-center gap-2 border-b border-hairline bg-paper/95 px-4 py-3 backdrop-blur">
        <span className="size-2.5 rounded-full bg-[#E8C4B8]" />
        <span className="size-2.5 rounded-full bg-[#E6D9A8]" />
        <span className="size-2.5 rounded-full bg-[#B8D4C8]" />
        <div className="ml-3 flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-hairline bg-warm/80 px-3 py-1.5">
          <span className="size-1.5 shrink-0 rounded-full bg-cobalt" />
          <span className="truncate text-[11px] tracking-wide text-muted">
            app.condax.solutions / delivery / release-4.2
          </span>
        </div>
      </div>

      <div className="grid min-h-[320px] grid-cols-[76px_1fr] sm:min-h-[380px] sm:grid-cols-[152px_1fr]">
        <aside className="border-r border-hairline bg-[#F3F1EC] p-3 sm:p-4">
          <div className="mb-5 flex items-center gap-2">
            <span className="grid size-6 place-items-center rounded-md bg-cobalt text-[9px] font-semibold text-white">
              CX
            </span>
            <span className="hidden text-[12px] font-medium text-ink sm:inline">Delivery</span>
          </div>
          {[
            ["Overview", false],
            ["Releases", true],
            ["Agents", false],
            ["Quality", false],
          ].map(([item, active]) => (
            <div
              key={String(item)}
              className={`mb-1 rounded-lg px-2.5 py-2 text-[11px] sm:text-[12px] ${
                active ? "bg-surface font-medium text-ink shadow-sm ring-1 ring-black/[0.03]" : "text-neutral"
              }`}
            >
              {item}
            </div>
          ))}
          <div className="mt-8 hidden rounded-xl border border-hairline bg-surface p-3 sm:block">
            <div className="text-[10px] tracking-[0.08em] text-muted uppercase">Sprint health</div>
            <div className="mt-1.5 flex items-baseline gap-2">
              <span className="font-display text-[18px] font-semibold text-ink">Good</span>
              <span className="text-[10px] text-cobalt">+2.1%</span>
            </div>
            <div className="mt-2 h-1 overflow-hidden rounded-full bg-hairline">
              <div className="h-full w-[78%] rounded-full bg-cobalt" />
            </div>
          </div>
        </aside>

        <div className="bg-[linear-gradient(180deg,#FBFAF7_0%,#F7F5F0_100%)] p-3.5 sm:p-5">
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <div className="text-[10px] tracking-[0.12em] text-muted uppercase">Release readiness</div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-display text-[28px] leading-none font-medium tracking-tight text-ink sm:text-[34px]">
                  94.2%
                </span>
                <span className="text-[11px] text-neutral">of gate criteria</span>
              </div>
            </div>
            <div className="rounded-full border border-cobalt/20 bg-cobalt/8 px-3 py-1 text-[11px] font-medium text-cobalt">
              On track
            </div>
          </div>

          <div className="mb-4 grid grid-cols-3 gap-2">
            {[
              { label: "Build", value: "12/12", pct: 100 },
              { label: "QA", value: "9/10", pct: 90 },
              { label: "Risk", value: "Low", pct: 28 },
            ].map((card) => (
              <div key={card.label} className="rounded-xl border border-hairline bg-paper p-2.5 shadow-[0_1px_0_rgba(17,17,16,0.03)]">
                <div className="text-[10px] text-muted">{card.label}</div>
                <div className="mt-1 text-[13px] font-medium text-ink">{card.value}</div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-warm">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cobalt to-cobalt/70"
                    style={{ width: `${card.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mb-3 flex items-center justify-between">
            <div className="text-[11px] font-medium text-ink">Launch checklist</div>
            <div className="text-[10px] text-muted">Updated 14m ago</div>
          </div>
          <div className="space-y-2">
            {[
              ["Model evals", "Passing", true],
              ["Retrieval index", "Synced", true],
              ["Human review", "2 pending", false],
              ["Rollback plan", "Documented", true],
            ].map(([label, state, ok]) => (
              <div
                key={String(label)}
                className="flex items-center justify-between rounded-lg border border-hairline bg-paper/80 px-3 py-2.5"
              >
                <span className="text-[12px] text-charcoal">{label}</span>
                <span className="flex items-center gap-2 text-[11px] text-neutral">
                  {state}
                  <span className={`size-1.5 rounded-full ${ok ? "bg-cobalt" : "bg-[#C4A574]"}`} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

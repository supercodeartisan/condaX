/** Condax-style operations console for the homepage hero. */
export function SaaSDashboard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-[20px] border border-hairline bg-surface shadow-[0_40px_110px_rgba(17,17,16,0.14)] ring-1 ring-black/[0.04] ${className}`}
      aria-hidden
    >
      <div className="flex items-center gap-2 border-b border-hairline bg-[#111827] px-3 py-2.5 sm:px-4">
        <span className="size-2 rounded-full bg-white/25" />
        <span className="size-2 rounded-full bg-white/25" />
        <span className="size-2 rounded-full bg-white/25" />
        <div className="ml-2 flex min-w-0 flex-1 items-center gap-2 rounded-md bg-white/8 px-2.5 py-1.5 sm:ml-3">
          <span className="size-1.5 shrink-0 animate-pulse rounded-full bg-cobalt" />
          <span className="truncate text-[10px] tracking-wide text-white/55 sm:text-[11px]">
            ops.condaxits.com / automation / intake-queue
          </span>
        </div>
        <span className="hidden rounded-md bg-cobalt/25 px-2 py-1 text-[10px] font-medium text-[#9db4ff] sm:inline">
          Live
        </span>
      </div>

      <div className="grid min-h-[300px] grid-cols-[56px_1fr] sm:min-h-[380px] sm:grid-cols-[152px_1fr]">
        <aside className="border-r border-hairline bg-[#0f172a] p-2 text-white sm:p-3.5">
          <div className="mb-4 flex items-center gap-2 sm:mb-5">
            <span className="grid size-7 place-items-center rounded-md bg-cobalt text-[9px] font-semibold">
              CX
            </span>
            <div className="hidden sm:block">
              <div className="text-[11px] font-medium">Operations</div>
              <div className="text-[9px] text-white/40">Condax console</div>
            </div>
          </div>
          {[
            ["Queues", true],
            ["Agents", false],
            ["Evals", false],
            ["Handover", false],
            ["Runbooks", false],
          ].map(([item, active]) => (
            <div
              key={String(item)}
              className={`mb-1 rounded-lg px-2 py-1.5 text-[10px] sm:px-2.5 sm:py-2 sm:text-[12px] ${
                active ? "bg-white/12 font-medium text-white" : "text-white/45"
              }`}
            >
              <span className="sm:hidden">{String(item).slice(0, 1)}</span>
              <span className="hidden sm:inline">{item}</span>
            </div>
          ))}
          <div className="mt-5 hidden rounded-xl border border-white/10 bg-white/5 p-3 sm:block">
            <div className="text-[9px] tracking-[0.1em] text-white/40 uppercase">Automation health</div>
            <div className="mt-1.5 flex items-baseline gap-2">
              <span className="font-display text-[17px] font-semibold">99.2%</span>
              <span className="text-[10px] text-[#9db4ff]">stable</span>
            </div>
            <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[92%] rounded-full bg-cobalt" />
            </div>
          </div>
        </aside>

        <div className="bg-[linear-gradient(180deg,#FBFAF7_0%,#F3F1EC_100%)] p-3 sm:p-4">
          <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
            <div>
              <div className="text-[10px] tracking-[0.12em] text-muted uppercase">Intake queue</div>
              <div className="mt-1 font-display text-[22px] leading-none font-medium tracking-tight text-ink sm:text-[28px]">
                47 open · 16 gated
              </div>
            </div>
            <div className="flex gap-1.5 text-[10px]">
              <span className="rounded-full border border-hairline bg-paper px-2.5 py-1 text-neutral">All</span>
              <span className="rounded-full bg-cobalt px-2.5 py-1 font-medium text-white">Needs review</span>
              <span className="rounded-full border border-hairline bg-paper px-2.5 py-1 text-neutral">SLA</span>
            </div>
          </div>

          <div className="mb-3 grid grid-cols-3 gap-1.5 sm:gap-2">
            {[
              { label: "Auto-routed", value: "184", delta: "+12%" },
              { label: "Human gate", value: "16", delta: "3 risk" },
              { label: "p95 latency", value: "410ms", delta: "stable" },
            ].map((card) => (
              <div
                key={card.label}
                className="rounded-xl border border-hairline bg-paper px-2.5 py-2 shadow-[0_1px_0_rgba(17,17,16,0.03)] sm:px-3 sm:py-2.5"
              >
                <div className="text-[9px] text-muted sm:text-[10px]">{card.label}</div>
                <div className="mt-1 text-[13px] font-semibold text-ink sm:text-[15px]">{card.value}</div>
                <div className="mt-0.5 text-[9px] text-cobalt sm:text-[10px]">{card.delta}</div>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-xl border border-hairline bg-paper">
            <div className="grid grid-cols-[1fr_auto_auto] gap-2 border-b border-hairline bg-warm/50 px-2.5 py-2 text-[9px] tracking-wide text-muted uppercase sm:px-3">
              <span>Item</span>
              <span>Owner</span>
              <span>State</span>
            </div>
            {[
              ["#4821 Billing dispute", "MK", "Human gate", true],
              ["#4818 Access review", "RD", "Policy conflict", true],
              ["#4812 Refund partial ship", "AF", "Auto-resolved", false],
              ["#4809 Vendor onboarding", "JS", "Queued", false],
              ["#4804 Seat transfer", "—", "Waiting", false],
            ].map(([id, owner, state, risk]) => (
              <div
                key={String(id)}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-2 border-b border-hairline px-2.5 py-2 last:border-0 sm:px-3 sm:py-2.5"
              >
                <span className="truncate text-[11px] font-medium text-ink sm:text-[12px]">{id}</span>
                <span className="grid size-5 place-items-center rounded-full bg-warm text-[9px] font-semibold text-neutral">
                  {owner}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[9px] font-medium sm:text-[10px] ${
                    risk ? "bg-[#F3E6D8] text-[#8A5A2B]" : "bg-cobalt/10 text-cobalt"
                  }`}
                >
                  {state}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

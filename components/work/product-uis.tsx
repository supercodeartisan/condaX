import { cn } from "@/lib/cn";

type ShellProps = { className?: string };

/** Kite - full knowledge workspace */
export function KiteUi({ className = "" }: ShellProps) {
  return (
    <div className={cn("min-h-[460px] bg-[#0f1419] text-white", className)} aria-hidden>
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="grid size-7 place-items-center rounded-full bg-cobalt text-[10px] font-bold">K</span>
          <div>
            <div className="text-[13px] font-medium">Kite</div>
            <div className="text-[10px] text-white/40">Customer knowledge · live</div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-[10px]">
          <span className="rounded-full bg-white/8 px-2.5 py-1 text-white/60">Policies</span>
          <span className="rounded-full bg-white/8 px-2.5 py-1 text-white/60">Tickets</span>
          <span className="rounded-full bg-cobalt/25 px-2.5 py-1 text-[#9db4ff]">Ask</span>
          <span className="rounded-full border border-[#c4a574]/40 bg-[#c4a574]/15 px-2.5 py-1 text-[#e8d4b0]">
            Human · ML
          </span>
        </div>
      </div>
      <div className="grid lg:grid-cols-[0.95fr_1.15fr_0.85fr]">
        <div className="border-b border-white/10 p-4 lg:border-r lg:border-b-0">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-[10px] tracking-[0.12em] text-white/40 uppercase">Corpus map</div>
            <span className="text-[9px] text-white/35">4 collections hit</span>
          </div>
          <svg viewBox="0 0 240 168" className="mx-auto h-[160px] w-full max-w-[240px]">
            <circle cx="120" cy="88" r="24" fill="#2f5bff" />
            <text x="120" y="92" textAnchor="middle" fill="white" fontSize="9" fontWeight="600">
              Query
            </text>
            {[
              [50, 32, "Policies"],
              [190, 36, "Tickets"],
              [42, 148, "Runbooks"],
              [198, 146, "Product"],
              [120, 24, "FAQ"],
            ].map(([x, y, label]) => (
              <g key={String(label)}>
                <line
                  x1="120"
                  y1="88"
                  x2={Number(x)}
                  y2={Number(y)}
                  stroke="#2f5bff"
                  strokeOpacity={0.35}
                  strokeWidth="1.5"
                />
                <circle cx={Number(x)} cy={Number(y)} r="15" fill="#1c2430" stroke="#3d4a5c" />
                <text x={Number(x)} y={Number(y) + 3} textAnchor="middle" fill="#c8d0dc" fontSize="7">
                  {label}
                </text>
              </g>
            ))}
          </svg>
          <div className="mt-2 space-y-1 text-[10px] text-white/45">
            <div className="flex justify-between"><span>Indexed chunks</span><span className="text-white/70">14,208</span></div>
            <div className="flex justify-between"><span>Retrieved this turn</span><span className="text-white/70">6 / top-k 8</span></div>
            <div className="flex justify-between"><span>p50 / p95 latency</span><span className="text-white/70">180 / 410 ms</span></div>
            <div className="flex justify-between"><span>Refuse rate (7d)</span><span className="text-white/70">4.2%</span></div>
          </div>
        </div>
        <div className="flex flex-col border-b border-white/10 bg-[#151b22] p-4 lg:border-r lg:border-b-0">
          <div className="mb-3 flex flex-wrap gap-1.5 text-[9px]">
            <span className="rounded-md bg-white/8 px-2 py-0.5 text-white/55">session · 3 turns</span>
            <span className="rounded-md bg-white/8 px-2 py-0.5 text-white/55">grounding · on</span>
            <span className="rounded-md border border-[#c07070]/50 bg-[#c07070]/15 px-2 py-0.5 text-[#f0b4b4]">
              refused · out of corpus
            </span>
          </div>
          <div className="flex-1 space-y-2.5">
            <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-white/8 px-3.5 py-2.5 text-[12px] text-white/75">
              What does our refund policy say about partial shipments?
            </div>
            <div className="rounded-2xl rounded-tr-sm border border-white/10 bg-[#1c2430] px-3.5 py-3 text-[12px] leading-relaxed text-white/85">
              Partial shipments can be refunded for undelivered line items only. Shipping is
              non-refundable once the first parcel has left the warehouse.
              <div className="mt-2.5 flex flex-wrap gap-1.5 text-[9px] text-white/40">
                <span>412 ms</span>
                <span>·</span>
                <span>3 citations</span>
                <span>·</span>
                <span>6 chunks scored</span>
              </div>
              <div className="mt-2.5 space-y-1.5 border-t border-white/10 pt-2.5">
                {[
                  ["Policy · Refunds §4.2", "92%"],
                  ["Runbook · Tier-1 refund script", "88%"],
                  ["Ticket #4412 resolution note", "81%"],
                ].map(([s, score]) => (
                  <div key={s} className="flex justify-between rounded-lg bg-white/5 px-2.5 py-1.5 text-[10px]">
                    <span className="text-white/70">{s}</span>
                    <span className="text-[#9db4ff]">{score}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-white/8 px-3.5 py-2.5 text-[12px] text-white/75">
              Can you price a competitor&apos;s warranty plan for us?
            </div>
            <div className="rounded-2xl rounded-tr-sm border border-[#c07070]/35 bg-[#2a1818] px-3.5 py-3 text-[12px] leading-relaxed text-white/80">
              <div className="mb-1.5 flex items-center gap-2 text-[10px] font-medium text-[#f0b4b4]">
                <span className="rounded bg-[#c07070]/25 px-1.5 py-0.5">Won&apos;t answer</span>
                <span className="text-white/40">0 in-corpus hits</span>
              </div>
              No approved sources cover competitor pricing. I won&apos;t invent an answer from outside the
              corpus. Hand off to a human if this is needed for the ticket.
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                <span className="rounded-full border border-white/15 px-2.5 py-1 text-[10px] text-white/70">
                  Escalate to human
                </span>
                <span className="rounded-full bg-white/8 px-2.5 py-1 text-[10px] text-white/45">
                  Suggest corpus gap
                </span>
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2 rounded-full border border-white/10 bg-[#0f1419] px-3 py-2">
            <span className="flex-1 text-[11px] text-white/35">Ask across policies, tickets, docs…</span>
            <span className="grid size-7 place-items-center rounded-full bg-cobalt text-white">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path
                  d="M6 9.5v-7M3 5l3-3 3 3"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="bg-[#121820] p-4">
          <div className="text-[10px] tracking-[0.12em] text-white/40 uppercase">Answer checklist</div>
          <ul className="mt-3 space-y-2 text-[11px] text-white/70">
            {[
              ["Cite source before advising", true],
              ["Flag policy conflicts", true],
              ["Escalate billing edge cases", false],
              ["Refuse out-of-corpus claims", true],
            ].map(([label, done]) => (
              <li key={String(label)} className="flex gap-2">
                <span
                  className={cn(
                    "mt-0.5 grid size-3.5 place-items-center rounded-[3px] text-[8px]",
                    done ? "bg-cobalt text-white" : "border border-white/20",
                  )}
                >
                  {done ? "✓" : ""}
                </span>
                {label}
              </li>
            ))}
          </ul>
          <div className="mt-5 rounded-xl border border-[#c4a574]/35 bg-[#c4a574]/10 p-3">
            <div className="flex items-center justify-between gap-2">
              <div className="text-[10px] text-[#e8d4b0]">Human handover</div>
              <span className="rounded-full bg-[#c4a574]/20 px-2 py-0.5 text-[9px] text-[#e8d4b0]">Ready</span>
            </div>
            <div className="mt-1 text-[12px] font-medium">Support · Guest checkout</div>
            <div className="mt-1 text-[10px] text-white/45">Queue · Morgan L. · SLA 12m</div>
            <div className="mt-2.5 flex gap-1.5 text-[9px]">
              <span className="rounded-md bg-white/8 px-2 py-1 text-white/60">Context attached</span>
              <span className="rounded-md bg-white/8 px-2 py-1 text-white/60">Refuse logged</span>
            </div>
          </div>
          <div className="mt-3 rounded-xl border border-white/10 p-3 text-[10px] text-white/45">
            <div className="flex justify-between"><span>Grounded answers</span><span className="text-white/70">91%</span></div>
            <div className="mt-1 flex justify-between"><span>Avg chunks / answer</span><span className="text-white/70">4.1</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Beacon - full onboarding console */
export function BeaconUi({ className = "" }: ShellProps) {
  const steps = [
    { label: "Welcome", done: true },
    { label: "Connect docs", done: true },
    { label: "Test answers", done: false, current: true },
    { label: "Invite users", done: false },
    { label: "Go live", done: false },
  ];
  return (
    <div
      className={cn(
        "min-h-[420px] bg-[linear-gradient(145deg,#eef3fb_0%,#fbfaf7_50%,#e8eef8_100%)]",
        className,
      )}
      aria-hidden
    >
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-hairline/80 px-5 py-4">
        <div>
          <div className="text-[11px] tracking-[0.14em] text-muted uppercase">Beacon · Customer onboarding</div>
          <div className="mt-1 font-display text-[24px] font-medium tracking-tight text-ink">
            Guided setup for product Q&amp;A
          </div>
        </div>
        <div className="text-right text-[11px] text-neutral">
          <div className="font-medium text-ink">Verdant Retail · Pilot</div>
          <div>Owner: Morgan · Day 4 of 10</div>
        </div>
      </div>
      <div className="px-5 py-8">
        <div className="relative mx-auto max-w-[640px]">
          <div className="absolute top-5 right-4 left-4 h-0.5 bg-hairline" />
          <div className="absolute top-5 left-4 h-0.5 w-[42%] bg-cobalt" />
          <div className="relative flex justify-between">
            {steps.map((s, i) => (
              <div key={s.label} className="flex w-[18%] flex-col items-center text-center">
                <span
                  className={cn(
                    "relative z-[1] grid size-10 place-items-center rounded-full border-2 text-[12px] font-semibold",
                    s.done
                      ? "border-cobalt bg-cobalt text-white"
                      : s.current
                        ? "border-cobalt bg-white text-cobalt shadow-[0_0_0_4px_rgba(47,91,255,0.15)]"
                        : "border-hairline bg-white text-muted",
                  )}
                >
                  {s.done ? "✓" : s.current ? String(i + 1) : String(i + 1)}
                </span>
                <span className="mt-3 text-[10px] font-medium text-charcoal sm:text-[11px]">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-8 grid max-w-[720px] gap-4 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-hairline bg-white p-4 shadow-[0_12px_40px_rgba(17,17,16,0.06)]">
            <div className="text-[12px] font-medium text-ink">Test answers against approved docs</div>
            <p className="mt-1.5 text-[11px] leading-relaxed text-neutral">
              Run sample questions from your help center before inviting customers.
            </p>
            <div className="mt-4 space-y-2">
              {[
                ["Where is the API rate limit documented?", "Pass"],
                ["How do we reset SSO?", "Pass"],
                ["Can invoices be exported as CSV?", "Fail"],
                ["What is the uptime SLA?", "Pass"],
              ].map(([q, state]) => (
                <div key={q} className="flex items-center justify-between gap-3 rounded-lg border border-hairline px-3 py-2 text-[11px]">
                  <span className="truncate text-charcoal">{q}</span>
                  <span className={cn("shrink-0 font-medium", state === "Pass" ? "text-[#2F6B4F]" : "text-[#8A5A2B]")}>
                    {state}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-warm">
              <div className="h-full w-[75%] rounded-full bg-cobalt" />
            </div>
            <div className="mt-2 flex justify-between text-[10px] text-muted">
              <span>6 / 8 passing</span>
              <span>75%</span>
            </div>
          </div>
          <div className="rounded-2xl border border-hairline bg-white/90 p-4">
            <div className="text-[10px] tracking-[0.12em] text-muted uppercase">Approved sources</div>
            <div className="mt-3 space-y-2">
              {[
                ["Help center", "184 articles", "Synced"],
                ["Product handbook.pdf", "62 pages", "Synced"],
                ["Release notes Q3", "14 pages", "Review"],
              ].map(([name, meta, state]) => (
                <div key={name} className="rounded-xl border border-hairline px-3 py-2.5">
                  <div className="flex justify-between text-[11px] font-medium">
                    <span>{name}</span>
                    <span className="text-cobalt">{state}</span>
                  </div>
                  <div className="mt-0.5 text-[10px] text-muted">{meta}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <span className="rounded-full bg-cobalt px-3 py-1.5 text-[11px] font-medium text-white">
                Continue
              </span>
              <span className="rounded-full border border-hairline px-3 py-1.5 text-[11px]">Skip</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Canvas - full mail + CRM workspace */
export function CanvasUi({ className = "" }: ShellProps) {
  return (
    <div className={cn("min-h-[420px] bg-[#f3f1ec]", className)} aria-hidden>
      <div className="grid min-h-[420px] grid-cols-[52px_1fr] sm:grid-cols-[112px_1fr_200px]">
        <aside className="border-r border-hairline bg-[#1c1c1a] p-2.5 text-white sm:p-3">
          <div className="mb-4 hidden text-[11px] font-semibold sm:block">Canvas</div>
          {["Inbox", "Drafts", "Sent", "Snoozed"].map((item, i) => (
            <div
              key={item}
              className={cn(
                "mb-1 rounded-md px-2 py-2 text-[10px] sm:text-[11px]",
                i === 0 ? "bg-white/12" : "text-white/45",
              )}
            >
              <span className="sm:hidden">{item[0]}</span>
              <span className="hidden sm:inline">{item}</span>
            </div>
          ))}
        </aside>
        <div className="flex flex-col bg-white">
          <div className="border-b border-hairline px-4 py-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <div className="text-[13px] font-medium">Re: Renewal - Northline Freight</div>
                <div className="text-[10px] text-muted">To: jordan@northlinefreight.com · Thread · 4 messages</div>
              </div>
              <span className="rounded-full bg-cobalt/10 px-2.5 py-1 text-[10px] font-medium text-cobalt">
                AI draft ready
              </span>
            </div>
          </div>
          <div className="flex-1 space-y-3 p-4 text-[12px] leading-relaxed">
            <div className="rounded-xl bg-warm/80 px-3.5 py-2.5 text-neutral">
              <div className="text-[10px] font-medium text-muted">Jordan · Yesterday</div>
              Can you send security docs before we renew? Also checking if mid-term discount is possible.
            </div>
            <div className="rounded-xl border border-cobalt/20 bg-cobalt/5 px-3.5 py-3 text-charcoal">
              <div className="mb-2 flex items-center gap-2 text-[10px] font-medium text-cobalt">
                Canvas draft · grounded in CRM + policy
              </div>
              <p>Hi Jordan -</p>
              <p className="mt-2">
                We can share the SOC2 packet and DPA today. Renewal pricing stays at the contracted
                rate unless VP approves an exception. Happy to join a 20-minute security walkthrough.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["CRM note", "Policy · Discounting", "SOC2 index"].map((s) => (
                  <span key={s} className="rounded-full bg-white px-2 py-0.5 text-[9px] text-neutral">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-2 border-t border-hairline px-4 py-3">
            <span className="rounded-md bg-cobalt px-3 py-1.5 text-[11px] font-medium text-white">Insert draft</span>
            <span className="rounded-md border border-hairline px-3 py-1.5 text-[11px]">Shorter</span>
            <span className="rounded-md border border-hairline px-3 py-1.5 text-[11px]">More formal</span>
          </div>
        </div>
        <aside className="hidden border-l border-hairline bg-paper p-3 sm:block">
          <div className="text-[9px] tracking-[0.12em] text-muted uppercase">CRM context</div>
          <div className="mt-2 text-[13px] font-medium">Northline Freight</div>
          <div className="mt-1 text-[10px] text-neutral">ARR $48k · Renewal in 18 days</div>
          <div className="mt-4 space-y-2">
            {[
              ["Stage", "Negotiation"],
              ["Owner", "Jordan Lee"],
              ["Risk", "Security review"],
              ["Discount policy", "VP only"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-lg border border-hairline bg-white px-2.5 py-2 text-[10px]">
                <div className="text-muted">{k}</div>
                <div className="mt-0.5 font-medium">{v}</div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

/** Pulse - full triage board */
export function PulseUi({ className = "" }: ShellProps) {
  const cols = [
    {
      title: "Incoming",
      count: 8,
      color: "bg-[#e8e6e1]",
      cards: [
        { id: "#4821", label: "Billing dispute · invoice mismatch", tag: "High", meta: "2m ago" },
        { id: "#4820", label: "Login failure after SSO change", tag: "Med", meta: "6m ago" },
        { id: "#4816", label: "CSV export timeout", tag: "Med", meta: "14m ago" },
      ],
    },
    {
      title: "Classified",
      count: 5,
      color: "bg-cobalt/10",
      cards: [
        { id: "#4819", label: "How-to · API keys rotation", tag: "Low", meta: "Self-serve" },
        { id: "#4817", label: "Feature ask · dark mode", tag: "Low", meta: "Product" },
      ],
    },
    {
      title: "Routed",
      count: 4,
      color: "bg-[#e4efe8]",
      cards: [
        { id: "#4818", label: "Escalation · production outage", tag: "Human", meta: "L2 · Pager" },
        { id: "#4815", label: "Contract amendment request", tag: "Human", meta: "Legal" },
      ],
    },
  ];
  return (
    <div className={cn("min-h-[420px] bg-[#f0eeea]", className)} aria-hidden>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-hairline bg-white px-4 py-3">
        <div>
          <div className="text-[13px] font-medium">Pulse · Support triage</div>
          <div className="text-[10px] text-muted">Classify intent, urgency, and ownership before a human steps in</div>
        </div>
        <div className="flex gap-2 text-[10px]">
          <span className="rounded-full border border-hairline px-2.5 py-1">34 open</span>
          <span className="rounded-full bg-cobalt px-2.5 py-1 font-medium text-white">AI classifying</span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-3">
        {cols.map((col) => (
          <div key={col.title} className={cn("rounded-xl p-2.5", col.color)}>
            <div className="mb-2 flex items-center justify-between px-1">
              <span className="text-[10px] font-semibold tracking-wide text-charcoal uppercase">{col.title}</span>
              <span className="text-[10px] text-muted">{col.count}</span>
            </div>
            <div className="space-y-2">
              {col.cards.map((c) => (
                <div
                  key={c.id}
                  className="rounded-lg border border-black/5 bg-white p-2.5 shadow-[0_4px_12px_rgba(17,17,16,0.04)]"
                >
                  <div className="flex justify-between text-[9px] text-muted">
                    <span>{c.id}</span>
                    <span>{c.meta}</span>
                  </div>
                  <div className="mt-1 text-[11px] font-medium leading-snug">{c.label}</div>
                  <div className="mt-2 text-[9px] font-medium text-cobalt">{c.tag}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Harbor - full topology console */
export function HarborUi({ className = "" }: ShellProps) {
  return (
    <div className={cn("min-h-[460px] bg-[#0c0f14] text-white", className)} aria-hidden>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <div>
          <div className="text-[13px] font-medium">Harbor · Automation topology</div>
          <div className="text-[10px] text-white/40">Classify → retrieve → execute → gate</div>
        </div>
        <div className="flex gap-2 text-[10px]">
          <span className="rounded-full border border-white/15 px-2.5 py-1 text-white/55">128 runs today</span>
          <span className="rounded-full border border-[#c4a574]/40 bg-[#c4a574]/15 px-2.5 py-1 text-[#e8d4b0]">
            DLQ 3
          </span>
          <span className="rounded-full border border-cobalt/40 bg-cobalt/20 px-2.5 py-1 text-[#9db4ff]">Live</span>
        </div>
      </div>
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        <div className="border-b border-white/10 px-4 py-5 sm:px-5 lg:border-r lg:border-b-0">
          <div className="mb-3 flex flex-wrap gap-1.5 text-[9px]">
            {[
              ["1", "Classify"],
              ["2", "Retrieve"],
              ["3", "Execute"],
              ["4", "Gate"],
            ].map(([n, label]) => (
              <span key={label} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-white/55">
                <span className="mr-1 text-[#9db4ff]">{n}</span>
                {label}
              </span>
            ))}
          </div>
          <svg viewBox="0 0 560 200" className="mx-auto h-auto w-full max-w-[560px]">
            <defs>
              <marker id="harrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#5a6a80" />
              </marker>
            </defs>
            {[
              [50, 100, 110, 100],
              [150, 100, 210, 100],
              [250, 100, 310, 100],
              [350, 100, 410, 55],
              [350, 100, 410, 145],
              [450, 55, 500, 100],
              [450, 145, 500, 100],
            ].map(([x1, y1, x2, y2], i) => (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3a4558" strokeWidth="1.5" markerEnd="url(#harrow)" />
            ))}
            {[
              [10, 80, 88, 40, "Webhook", "intake", false],
              [110, 80, 88, 40, "Classify", "intent", false],
              [210, 80, 88, 40, "Retrieve", "context", false],
              [310, 80, 88, 40, "Execute", "action", true],
              [410, 35, 88, 40, "Ticket", "side", false],
              [410, 125, 88, 40, "Slack", "side", false],
              [500, 80, 52, 40, "Gate", "check", false],
            ].map(([x, y, w, h, label, sub, accent]) => (
              <g key={String(label)}>
                <rect
                  x={Number(x)}
                  y={Number(y)}
                  width={Number(w)}
                  height={Number(h)}
                  rx="8"
                  fill={accent ? "#2f5bff" : "#1a2230"}
                  stroke={accent ? "#2f5bff" : "#3a4558"}
                />
                <text
                  x={Number(x) + Number(w) / 2}
                  y={Number(y) + Number(h) / 2 - 2}
                  textAnchor="middle"
                  fill="white"
                  fontSize="10"
                  fontWeight="500"
                >
                  {label}
                </text>
                <text
                  x={Number(x) + Number(w) / 2}
                  y={Number(y) + Number(h) / 2 + 11}
                  textAnchor="middle"
                  fill="#7a8799"
                  fontSize="7"
                >
                  {sub}
                </text>
              </g>
            ))}
          </svg>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {[
              ["Guards", "PII · confidence · rate limit"],
              ["Outputs", "Zendesk · Slack · Sheet"],
              ["SLA", "p95 1.4s · 0.3% DLQ"],
            ].map(([t, b]) => (
              <div key={t} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
                <div className="text-[11px] font-medium text-white/80">{t}</div>
                <div className="mt-0.5 text-[10px] leading-relaxed text-white/45">{b}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#10151c] p-4">
          <div className="flex items-center justify-between gap-2">
            <div className="text-[10px] tracking-[0.12em] text-white/40 uppercase">Human review · DLQ</div>
            <span className="text-[9px] text-[#e8d4b0]">3 awaiting judgment</span>
          </div>
          <div className="mt-3 space-y-2">
            {[
              {
                id: "run · 8841",
                reason: "Confidence low",
                detail: "Classify 0.51 · refund vs chargeback",
                tone: "border-[#c4a574]/30 bg-[#c4a574]/8",
                chip: "text-[#e8d4b0] bg-[#c4a574]/15",
              },
              {
                id: "run · 8837",
                reason: "PII flag",
                detail: "SSN pattern in payload · redaction incomplete",
                tone: "border-[#c07070]/35 bg-[#c07070]/10",
                chip: "text-[#f0b4b4] bg-[#c07070]/20",
              },
              {
                id: "run · 8829",
                reason: "Policy conflict",
                detail: "Auto-credit vs finance hold rule",
                tone: "border-white/12 bg-white/[0.03]",
                chip: "text-[#9db4ff] bg-cobalt/20",
              },
            ].map((item) => (
              <div key={item.id} className={cn("rounded-xl border px-3 py-2.5", item.tone)}>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[9px] text-white/40">{item.id}</span>
                  <span className={cn("rounded-full px-2 py-0.5 text-[9px] font-medium", item.chip)}>
                    {item.reason}
                  </span>
                </div>
                <div className="mt-1.5 text-[11px] leading-snug text-white/75">{item.detail}</div>
                <div className="mt-2 flex gap-1.5 text-[9px]">
                  <span className="rounded-md bg-cobalt px-2.5 py-1 font-medium text-white">Approve</span>
                  <span className="rounded-md border border-white/15 px-2.5 py-1 text-white/65">Escalate</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Relay - full swimlane page */
export function RelayUi({ className = "" }: ShellProps) {
  const lanes = [
    { name: "CRM", bars: [{ left: 0, width: 24, label: "Deal won" }] },
    { name: "WMS", bars: [{ left: 22, width: 34, label: "Pick · pack · QC" }] },
    { name: "Carrier", bars: [{ left: 54, width: 24, label: "Label · pickup" }] },
    { name: "Email", bars: [{ left: 76, width: 20, label: "Notify" }] },
    { name: "Finance", bars: [{ left: 82, width: 16, label: "Invoice" }] },
  ];
  return (
    <div className={cn("min-h-[420px] bg-white", className)} aria-hidden>
      <div className="border-b border-hairline bg-paper px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-[13px] font-medium">Relay · Order to fulfillment</div>
            <div className="text-[10px] text-muted">ORD-10492 · Northline Freight · 48 line items</div>
          </div>
          <div className="flex gap-2 text-[10px]">
            <span className="rounded-full border border-hairline px-2.5 py-1">ETA 2.1 days</span>
            <span className="rounded-full bg-cobalt/10 px-2.5 py-1 font-medium text-cobalt">On track</span>
          </div>
        </div>
      </div>
      <div className="space-y-3 p-4 sm:p-5">
        <div className="mb-1 flex justify-between pl-[4.5rem] text-[9px] text-muted">
          <span>Order</span>
          <span>Warehouse</span>
          <span>Ship</span>
          <span>Customer</span>
        </div>
        {lanes.map((lane) => (
          <div key={lane.name} className="flex items-center gap-3">
            <div className="w-14 shrink-0 text-[11px] font-medium text-neutral">{lane.name}</div>
            <div className="relative h-10 flex-1 rounded-lg bg-warm">
              {lane.bars.map((b) => (
                <div
                  key={b.label}
                  className="absolute top-1.5 bottom-1.5 flex items-center justify-center rounded-md bg-cobalt px-2 text-[9px] font-medium text-white"
                  style={{ left: `${b.left}%`, width: `${b.width}%` }}
                >
                  <span className="truncate px-0.5">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="grid gap-2 pt-2 sm:grid-cols-3">
          {[
            ["Checkpoint", "Carrier sync must succeed before customer email"],
            ["Exception", "2 SKUs awaiting cycle count"],
            ["Owners", "Ops · Warehouse · CS"],
          ].map(([t, b]) => (
            <div key={t} className="rounded-xl border border-hairline px-3 py-2.5">
              <div className="text-[10px] font-medium text-ink">{t}</div>
              <div className="mt-1 text-[10px] leading-relaxed text-neutral">{b}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Ledger - full invoice review page */
export function LedgerUi({ className = "" }: ShellProps) {
  return (
    <div className={cn("min-h-[420px] bg-[#e8ebe7]", className)} aria-hidden>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/5 bg-white px-4 py-3">
        <div>
          <div className="text-[13px] font-medium">Ledger · Invoice intake</div>
          <div className="text-[10px] text-muted">INV-88421 · Northline Supplies · queued for finance</div>
        </div>
        <span className="rounded-full bg-[#F3E6D8] px-2.5 py-1 text-[10px] font-medium text-[#8A5A2B]">
          2 exceptions
        </span>
      </div>
      <div className="grid md:grid-cols-[1fr_1fr]">
        <div className="border-b border-black/5 p-5 md:border-r md:border-b-0">
          <div className="relative mx-auto aspect-[3/4] max-h-[320px] max-w-[220px] rounded-sm bg-white p-5 shadow-[0_16px_40px_rgba(17,17,16,0.12)]">
            <div className="text-[9px] font-semibold tracking-wide text-muted uppercase">Tax invoice</div>
            <div className="mt-2 text-[12px] font-medium">Northline Supplies</div>
            <div className="mt-4 space-y-2">
              {[90, 70, 80, 55, 65].map((w, i) => (
                <div key={i} className="h-1.5 rounded bg-warm" style={{ width: `${w}%` }} />
              ))}
            </div>
            <div className="mt-8 space-y-1.5 border-t border-hairline pt-4 text-[10px] text-neutral">
              <div className="flex justify-between"><span>Subtotal</span><span>$11,400.00</span></div>
              <div className="flex justify-between"><span>Tax</span><span>$1,080.00</span></div>
              <div className="flex justify-between font-semibold text-ink"><span>Total</span><span>$12,480.00</span></div>
            </div>
            <div className="absolute top-[34%] right-[-8%] rounded border-2 border-cobalt/50 bg-cobalt/5 px-2 py-1 text-[8px] text-cobalt shadow-sm">
              Amount box
            </div>
          </div>
        </div>
        <div className="bg-white p-4 sm:p-5">
          <div className="text-[10px] tracking-[0.12em] text-muted uppercase">Extracted fields</div>
          <div className="mt-3 space-y-2">
            {[
              ["Vendor", "Northline Supplies", true],
              ["Invoice #", "INV-88421", true],
              ["Amount", "$12,480.00", true],
              ["Due date", "2026-11-28", true],
              ["PO match", "PO-2291 · Partial", false],
              ["Tax ID", "Missing", false],
            ].map(([k, v, ok]) => (
              <div
                key={String(k)}
                className={cn(
                  "flex items-center justify-between rounded-lg border px-3 py-2.5 text-[11px]",
                  ok ? "border-hairline" : "border-[#e8c4a8] bg-[#fbf6f0]",
                )}
              >
                <span className="text-muted">{k}</span>
                <span className="font-medium">{v}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <span className="rounded-full bg-cobalt px-3 py-1.5 text-[11px] font-medium text-white">
              Send to finance
            </span>
            <span className="rounded-full border border-hairline px-3 py-1.5 text-[11px]">Request vendor fix</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Signal - full qualification console */
export function SignalUi({ className = "" }: ShellProps) {
  return (
    <div
      className={cn("min-h-[420px] bg-[linear-gradient(180deg,#1a1430_0%,#12101c_100%)] text-white", className)}
      aria-hidden
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <div>
          <div className="text-[13px] font-medium">Signal · Lead qualification</div>
          <div className="text-[10px] text-white/40">Scoring rules · CRM write-back · AE routing</div>
        </div>
        <span className="rounded-full border border-white/15 px-2.5 py-1 text-[10px] text-white/55">
          Synced · Salesforce
        </span>
      </div>
      <div className="grid sm:grid-cols-2">
        <div className="border-b border-white/10 p-5 sm:border-r sm:border-b-0">
          <div className="text-[11px] font-medium text-white/70">Funnel · last 7 days</div>
          <div className="mt-4 space-y-2.5">
            {[
              ["Inbound leads", 100, "186"],
              ["Scored ≥ 70", 62, "115"],
              ["Routed to AE", 38, "71"],
              ["Meeting booked", 18, "34"],
            ].map(([label, w, n]) => (
              <div key={String(label)}>
                <div className="mb-1 flex justify-between text-[10px] text-white/50">
                  <span>{label}</span>
                  <span>{n}</span>
                </div>
                <div className="h-8 overflow-hidden rounded-md bg-white/5">
                  <div
                    className="h-full rounded-md bg-gradient-to-r from-[#6b5cff] to-cobalt"
                    style={{ width: `${w}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 p-5">
          <div className="relative grid size-[160px] place-items-center">
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-5 rounded-full border border-white/10" />
            <div className="absolute inset-10 rounded-full border border-white/15" />
            <div className="absolute inset-14 rounded-full border border-cobalt/40 bg-cobalt/20" />
            <div className="relative text-center">
              <div className="font-display text-[40px] font-medium leading-none">88</div>
              <div className="mt-1 text-[10px] text-white/50">Vanta Ops</div>
            </div>
          </div>
          <div className="w-full max-w-[240px] space-y-2 text-[10px]">
            {[
              ["Fit", "Enterprise · 34"],
              ["Intent", "Demo request · 28"],
              ["Timing", "This quarter · 26"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between rounded-lg border border-white/10 px-3 py-2">
                <span className="text-white/45">{k}</span>
                <span className="font-medium text-white/85">{v}</span>
              </div>
            ))}
          </div>
          <div className="text-[10px] text-white/45">Route → Enterprise AE · write-back queued</div>
        </div>
      </div>
    </div>
  );
}

/** Meridian - full ops board */
export function MeridianUi({ className = "" }: ShellProps) {
  const slaStyle = (sla: string) =>
    sla === "On track"
      ? "bg-[#e4efe8] text-[#2F6B4F]"
      : sla === "Risk"
        ? "bg-[#F3E6D8] text-[#8A5A2B]"
        : "bg-[#f3e0e0] text-[#8a3b3b]";

  const cols = [
    {
      title: "Intake",
      wip: "4",
      cards: [
        { title: "Vendor onboarding", owner: "AK", sla: "On track", due: "Due 2d" },
        { title: "Access request", owner: "JR", sla: "Risk", due: "Due 6h" },
        { title: "Badge revoke", owner: "ML", sla: "On track", due: "Due 1d" },
      ],
    },
    {
      title: "In review",
      wip: "3",
      active: true,
      cards: [
        { title: "Contract renewal", owner: "SN", sla: "Risk", due: "Due 4h" },
        { title: "SLA follow-up", owner: "AK", sla: "On track", due: "Due 1d" },
      ],
    },
    {
      title: "Blocked",
      wip: "2",
      cards: [
        { title: "Invoice exception", owner: "TP", sla: "Breached", due: "Overdue 9h" },
        { title: "Policy waiver", owner: "JR", sla: "Risk", due: "Due 3h" },
      ],
    },
    {
      title: "Done",
      wip: "-",
      cards: [
        { title: "Vendor NDA", owner: "ML", sla: "On track", due: "Closed" },
        { title: "Seat transfer", owner: "AK", sla: "On track", due: "Closed" },
        { title: "Policy update", owner: "SN", sla: "On track", due: "Closed" },
      ],
    },
  ];
  return (
    <div className={cn("min-h-[460px] bg-[#f7f5f1]", className)} aria-hidden>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-hairline bg-white px-4 py-3">
        <div>
          <div className="text-[13px] font-medium">Meridian · Operations board</div>
          <div className="text-[10px] text-muted">Queue visibility before automation expands</div>
        </div>
        <div className="flex gap-2 text-[10px]">
          <span className="rounded-full border border-hairline px-2.5 py-1">Open 12</span>
          <span className="rounded-full bg-[#F3E6D8] px-2.5 py-1 font-medium text-[#8A5A2B]">SLA risk 3</span>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 border-b border-hairline bg-paper/80 px-4 py-2 text-[10px]">
        <span className="rounded-full bg-ink px-2.5 py-1 font-medium text-white">All</span>
        <span className="rounded-full border border-hairline bg-white px-2.5 py-1 text-neutral">Mine</span>
        <span className="rounded-full border border-hairline bg-white px-2.5 py-1 text-neutral">SLA risk</span>
        <span className="ml-auto text-muted">Owner · SLA · Due</span>
      </div>
      <div className="grid grid-cols-2 gap-2.5 p-3.5 sm:grid-cols-4">
        {cols.map((col) => (
          <div
            key={col.title}
            className={cn(
              "min-h-[300px] rounded-xl border p-2.5",
              col.active ? "border-cobalt/30 bg-cobalt/5" : "border-hairline bg-white",
            )}
          >
            <div className="mb-2 flex items-center justify-between px-1">
              <span className="text-[10px] font-semibold uppercase tracking-wide">{col.title}</span>
              <span className="text-[9px] text-muted">WIP {col.wip}</span>
            </div>
            <div className="space-y-1.5">
              {col.cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-lg border border-hairline bg-paper px-2.5 py-2 shadow-sm"
                >
                  <div className="text-[11px] font-medium leading-snug">{card.title}</div>
                  <div className="mt-2 flex items-center justify-between gap-1.5">
                    <span className="grid size-5 place-items-center rounded-full bg-ink/90 text-[8px] font-semibold text-white">
                      {card.owner}
                    </span>
                    <span className={cn("rounded-full px-1.5 py-0.5 text-[8px] font-medium", slaStyle(card.sla))}>
                      {card.sla}
                    </span>
                  </div>
                  <div className="mt-1.5 text-[9px] text-muted">{card.due}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Atlas - full governance page */
export function AtlasUi({ className = "" }: ShellProps) {
  const tools = ["Writing", "Coding", "Research"];
  const rules = ["Tenancy lock", "No model training", "Access review", "PII redaction", "Vendor list"];
  const matrix = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 0],
    [1, 1, 1],
    [1, 1, 1],
  ];
  return (
    <div className={cn("min-h-[460px] bg-white", className)} aria-hidden>
      <div className="border-b border-hairline bg-[linear-gradient(90deg,#f4f7fb,#fbfaf7)] px-4 py-3.5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-[13px] font-medium">Atlas · AI enablement governance</div>
            <div className="text-[10px] text-muted">Policy coverage · seat rollout · quarterly review</div>
          </div>
          <span className="rounded-full bg-cobalt/10 px-2.5 py-1 text-[10px] font-medium text-cobalt">
            Governance live
          </span>
        </div>
      </div>
      <div className="border-b border-hairline bg-ink px-4 py-3 text-white">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="text-[9px] tracking-[0.14em] text-white/45 uppercase">Decision · Q4 path</div>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-cobalt px-2 py-0.5 text-[10px] font-semibold">Build</span>
              <span className="text-[12px] font-medium">Coding assistant · internal fork</span>
            </div>
            <div className="mt-1 text-[10px] text-white/50">
              Adopt writing tools · Defer research copilots until attestation closes
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-[9px]">
            <span className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1.5">
              <span className="text-white/40">Owner</span>
              <span className="mt-0.5 block font-medium text-white/85">Priya N. · Eng</span>
            </span>
            <span className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1.5">
              <span className="text-white/40">Next step</span>
              <span className="mt-0.5 block font-medium text-white/85">Scope POC · Dec 2</span>
            </span>
          </div>
        </div>
        <div className="mt-2.5 flex flex-wrap gap-1.5 text-[9px]">
          <span className="rounded-full bg-[#e4efe8]/15 px-2.5 py-1 text-[#9dcfb0]">Adopt · Writing</span>
          <span className="rounded-full bg-cobalt/30 px-2.5 py-1 text-[#9db4ff]">Build · Coding</span>
          <span className="rounded-full bg-white/8 px-2.5 py-1 text-white/55">Defer · Research</span>
        </div>
      </div>
      <div className="grid gap-4 p-4 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="overflow-hidden rounded-xl border border-hairline">
          <div
            className="grid border-b border-hairline bg-paper text-[10px] font-medium text-muted"
            style={{ gridTemplateColumns: "1.3fr repeat(3, 1fr)" }}
          >
            <div className="px-3 py-2.5">Control</div>
            {tools.map((t) => (
              <div key={t} className="border-l border-hairline px-2 py-2.5 text-center">
                {t}
              </div>
            ))}
          </div>
          {rules.map((rule, ri) => (
            <div
              key={rule}
              className="grid border-b border-hairline last:border-0"
              style={{ gridTemplateColumns: "1.3fr repeat(3, 1fr)" }}
            >
              <div className="px-3 py-2.5 text-[11px] font-medium">{rule}</div>
              {matrix[ri].map((cell, ci) => (
                <div key={`${ri}-${ci}`} className="flex items-center justify-center border-l border-hairline py-2.5">
                  <span
                    className={cn(
                      "grid size-6 place-items-center rounded-md text-[10px] font-bold",
                      cell ? "bg-cobalt text-white" : "bg-warm text-muted",
                    )}
                  >
                    {cell ? "✓" : "-"}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <div className="rounded-xl border border-hairline p-3.5">
            <div className="text-[10px] tracking-[0.12em] text-muted uppercase">Seat rollout</div>
            <div className="mt-3 space-y-2.5">
              {[
                ["Writing tools", "142 / 150", 94, "Adopt"],
                ["Coding assistants", "68 / 80", 85, "Build"],
                ["Research copilots", "24 / 40", 60, "Defer"],
              ].map(([tool, seats, pct, path]) => (
                <div key={String(tool)}>
                  <div className="flex justify-between text-[11px]">
                    <span className="font-medium">{tool}</span>
                    <span className="flex items-center gap-2 text-muted">
                      <span
                        className={cn(
                          "rounded px-1.5 py-0.5 text-[8px] font-medium",
                          path === "Adopt"
                            ? "bg-[#e4efe8] text-[#2F6B4F]"
                            : path === "Build"
                              ? "bg-cobalt/10 text-cobalt"
                              : "bg-warm text-muted",
                        )}
                      >
                        {path}
                      </span>
                      {seats}
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-warm">
                    <div className="h-full rounded-full bg-cobalt" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-hairline bg-paper p-3.5 text-[11px] leading-relaxed text-neutral">
            Next review: 12 Dec 2026 · Access attestation for research copilots still open · Owner: Dana K.
          </div>
        </div>
      </div>
    </div>
  );
}

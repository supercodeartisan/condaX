/** Illustrative concept — AI knowledge assistant product surface. */
export function KiteAssistant({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-[20px] border border-hairline bg-surface shadow-[0_28px_80px_rgba(17,17,16,0.09)] ${className}`}
      aria-hidden
    >
      <div className="flex items-center justify-between border-b border-hairline px-4 py-3 sm:px-5">
        <div className="flex items-center gap-3">
          <div className="grid size-8 place-items-center rounded-full bg-cobalt text-[11px] font-semibold text-white">
            K
          </div>
          <div>
            <div className="text-[13px] font-medium text-ink">Kite</div>
            <div className="text-[11px] text-muted">Knowledge assistant</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden rounded-full bg-warm px-2.5 py-1 text-[10px] font-medium text-neutral sm:inline">
            Policies · Support
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-hairline px-2.5 py-1 text-[10px] text-neutral">
            <span className="size-1.5 rounded-full bg-cobalt" />
            Live
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
        <div className="flex min-h-[300px] flex-col border-b border-hairline p-4 sm:min-h-[340px] sm:p-5 lg:border-r lg:border-b-0">
          <div className="flex-1 space-y-4">
            <div className="max-w-[88%] rounded-2xl rounded-tl-md bg-warm px-4 py-3 text-[12.5px] leading-relaxed text-charcoal">
              What does our refund policy say about partial shipments?
            </div>

            <div className="max-w-[96%] rounded-2xl rounded-tr-md border border-hairline bg-paper px-4 py-3.5 text-[12.5px] leading-relaxed text-charcoal">
              <p className="text-ink">
                Partial shipments can be refunded for undelivered line items only. Shipping is
                non-refundable once the first parcel has left the warehouse.
              </p>
              <div className="mt-3 space-y-2 border-t border-hairline pt-3">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] tracking-[0.12em] text-muted uppercase">Sources</div>
                  <div className="text-[10px] text-muted">2 citations</div>
                </div>
                {[
                  ["Policy · Refunds", "§4.2 Partial fulfillment", "92%"],
                  ["Runbook · Support", "Tier-1 refund script", "88%"],
                ].map(([title, meta, score]) => (
                  <div
                    key={title}
                    className="flex items-center justify-between gap-3 rounded-lg border border-hairline bg-surface px-3 py-2"
                  >
                    <div className="min-w-0">
                      <div className="truncate text-[11px] font-medium text-ink">{title}</div>
                      <div className="text-[10px] text-muted">{meta}</div>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="text-[10px] font-medium text-cobalt">{score}</div>
                      <div className="text-[9px] text-muted">match</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-full border border-hairline bg-warm px-3.5 py-2.5">
            <span className="flex-1 text-[12px] text-muted">Ask across policies, tickets, docs…</span>
            <span className="grid size-7 place-items-center rounded-full bg-cobalt text-[11px] text-white">
              ↑
            </span>
          </div>
        </div>

        <div className="bg-paper p-4 sm:p-5">
          <div className="text-[10px] tracking-[0.12em] text-muted uppercase">Retrieval</div>
          <div className="mt-3 space-y-3">
            {[
              { label: "Chunks", value: "6" },
              { label: "Collections", value: "Policies · Support" },
              { label: "Latency", value: "410 ms" },
              { label: "Confidence", value: "High" },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-baseline justify-between gap-3 border-b border-hairline pb-2"
              >
                <span className="text-[11px] text-neutral">{row.label}</span>
                <span className="text-right text-[12px] font-medium text-ink">{row.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-hairline bg-surface p-3.5">
            <div className="text-[11px] font-medium text-ink">Answer checklist</div>
            <ul className="mt-2.5 space-y-2 text-[11px] text-neutral">
              {[
                ["Cite source before advising", true],
                ["Flag policy conflicts", true],
                ["Escalate billing edge cases", false],
              ].map(([label, done]) => (
                <li key={String(label)} className="flex items-start gap-2">
                  <span
                    className={`mt-0.5 grid size-3.5 shrink-0 place-items-center rounded-[4px] text-[8px] ${
                      done ? "bg-cobalt text-white" : "border border-hairline text-muted"
                    }`}
                  >
                    {done ? "✓" : ""}
                  </span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

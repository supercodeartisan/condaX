/** Floating assistant card layered over the hero dashboard. */
export function AIAssistant({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-[18px] border border-hairline bg-surface shadow-[0_28px_80px_rgba(17,17,16,0.14)] ${className}`}
      aria-hidden
    >
      <div className="flex items-center justify-between border-b border-hairline px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span className="grid size-7 place-items-center rounded-full bg-cobalt text-[10px] font-semibold text-white">
            AI
          </span>
          <div>
            <div className="text-[12px] font-medium text-ink">Workspace assistant</div>
            <div className="text-[10px] text-muted">Grounded in delivery docs</div>
          </div>
        </div>
        <span className="rounded-full bg-warm px-2.5 py-1 text-[10px] font-medium text-neutral">
          Cited
        </span>
      </div>

      <div className="space-y-3 p-4">
        <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-warm px-3.5 py-2.5 text-[12px] leading-relaxed text-charcoal">
          Which accounts need attention before Friday standup?
        </div>

        <div className="ml-auto max-w-[94%] rounded-2xl rounded-tr-md border border-hairline bg-paper px-3.5 py-3 text-[12px] leading-relaxed text-charcoal">
          <p className="font-medium text-ink">Two accounts look time-sensitive</p>
          <ul className="mt-2 space-y-2 text-neutral">
            <li className="flex gap-2.5">
              <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-cobalt/10 text-[9px] font-semibold text-cobalt">
                1
              </span>
              <span>
                <span className="font-medium text-ink">Northwind</span> - renewal in 6 days, open
                escalation
              </span>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-cobalt/10 text-[9px] font-semibold text-cobalt">
                2
              </span>
              <span>
                <span className="font-medium text-ink">Helix Labs</span> - billing dispute awaiting
                finance
              </span>
            </li>
          </ul>
          <div className="mt-3 flex flex-wrap gap-1.5 border-t border-hairline pt-2.5">
            <span className="rounded-full bg-cobalt/10 px-2 py-0.5 text-[10px] text-cobalt">CRM</span>
            <span className="rounded-full bg-warm px-2 py-0.5 text-[10px] text-neutral">Support</span>
            <span className="rounded-full bg-warm px-2 py-0.5 text-[10px] text-neutral">3 sources</span>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-hairline bg-paper px-3 py-2">
          <span className="flex-1 text-[11px] text-muted">Ask about accounts, policies, runbooks…</span>
          <span className="grid size-6 place-items-center rounded-full bg-cobalt text-[10px] text-white">
            ↑
          </span>
        </div>
      </div>
    </div>
  );
}

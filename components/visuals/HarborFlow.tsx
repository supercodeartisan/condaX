/** Illustrative concept — intelligent automation canvas. */
export function HarborFlow({ className = "" }: { className?: string }) {
  const nodes = [
    { title: "Event", meta: "CRM webhook", detail: "deal.updated" },
    { title: "Classify", meta: "Rules + model", detail: "Priority · Intent" },
    { title: "Retrieve", meta: "Policy store", detail: "4 docs" },
    { title: "Act", meta: "Create ticket", detail: "Zendesk", accent: true },
    { title: "Review", meta: "Human gate", detail: "Owner notify" },
  ];

  return (
    <div
      className={`overflow-hidden rounded-[20px] border border-hairline bg-[#111110] text-paper shadow-[0_28px_80px_rgba(17,17,16,0.18)] ${className}`}
      aria-hidden
    >
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
        <div className="flex items-center gap-3">
          <span className="grid size-7 place-items-center rounded-md bg-cobalt text-[10px] font-semibold text-white">
            H
          </span>
          <div>
            <div className="text-[13px] font-medium">Harbor</div>
            <div className="text-[11px] text-white/45">Automation canvas</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden rounded-full border border-white/12 px-2.5 py-1 text-[10px] text-white/55 sm:inline">
            128 runs today
          </span>
          <span className="rounded-full border border-cobalt/40 bg-cobalt/15 px-2.5 py-1 text-[10px] text-[#9DB4FF]">
            Live
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="text-[11px] text-white/50">Inbound renewal path</div>
          <div className="text-[10px] text-white/35">Avg latency 1.4s</div>
        </div>

        <div className="flex flex-wrap items-stretch gap-2 sm:gap-2.5">
          {nodes.map((node, i) => (
            <div key={node.title} className="flex items-center gap-2 sm:gap-2.5">
              <div
                className={`min-w-[104px] rounded-xl border px-3 py-2.5 ${
                  node.accent
                    ? "border-cobalt bg-cobalt text-white"
                    : "border-white/12 bg-white/[0.04] text-paper"
                }`}
              >
                <div className="text-[12px] font-medium">{node.title}</div>
                <div className={`mt-0.5 text-[10px] ${node.accent ? "text-white/75" : "text-white/45"}`}>
                  {node.meta}
                </div>
                <div className={`mt-1.5 text-[10px] ${node.accent ? "text-white/90" : "text-white/60"}`}>
                  {node.detail}
                </div>
              </div>
              {i < nodes.length - 1 ? (
                <div className="hidden h-px w-4 bg-gradient-to-r from-white/25 to-white/10 sm:block" aria-hidden />
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            ["Triggers", "Form submit · Status change · Schedule"],
            ["Guards", "PII redaction · Rate limit · Confidence"],
            ["Outputs", "Slack · Zendesk · Sheet · Email"],
          ].map(([title, body]) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3">
              <div className="text-[11px] font-medium text-white/80">{title}</div>
              <div className="mt-1.5 text-[11px] leading-relaxed text-white/45">{body}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

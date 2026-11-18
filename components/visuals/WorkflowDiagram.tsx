export function WorkflowDiagram({ className = "" }: { className?: string }) {
  const nodes = ["Intake", "Classify", "Retrieve", "Act", "Review"];
  return (
    <div
      className={`rounded-2xl border border-hairline bg-paper p-5 sm:p-6 ${className}`}
      aria-hidden
    >
      <div className="mb-5 flex items-center justify-between">
        <div className="text-[12px] font-medium text-ink">Intelligent automation</div>
        <div className="text-[11px] text-muted">Event → decision → action</div>
      </div>
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        {nodes.map((node, i) => (
          <div key={node} className="flex items-center gap-2 sm:gap-3">
            <div
              className={`rounded-xl border px-3 py-2 text-[11px] font-medium sm:px-4 sm:text-[12px] ${
                i === 3
                  ? "border-cobalt/30 bg-cobalt text-white"
                  : "border-hairline bg-surface text-charcoal"
              }`}
            >
              {node}
            </div>
            {i < nodes.length - 1 ? (
              <div className="hidden h-px w-6 bg-hairline sm:block" />
            ) : null}
          </div>
        ))}
      </div>
      <div className="mt-6 grid gap-2 sm:grid-cols-3">
        {["CRM webhook", "Policy store", "Human checkpoint"].map((item) => (
          <div key={item} className="rounded-lg border border-dashed border-hairline px-3 py-2 text-[11px] text-neutral">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

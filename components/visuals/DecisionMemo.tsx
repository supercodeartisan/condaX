import { cn } from "@/lib/cn";

const options = [
  {
    label: "Adopt",
    detail: "Configure tools already on the market",
    tone: "muted" as const,
  },
  {
    label: "Build",
    detail: "Ship software around your workflow",
    tone: "active" as const,
  },
  {
    label: "Defer",
    detail: "Wait until the decision is clearer",
    tone: "muted" as const,
  },
];

export function DecisionMemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[20px] border border-hairline bg-paper shadow-[0_20px_60px_rgba(17,17,16,0.06)]",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-hairline px-5 py-3.5 md:px-6">
        <div>
          <p className="text-[11px] tracking-[0.14em] text-muted uppercase">Decision memo</p>
          <p className="mt-1 text-[14px] font-medium text-ink">Adopt · Build · Defer</p>
        </div>
        <span className="rounded-full bg-warm px-3 py-1 text-[11px] font-medium tracking-[0.08em] text-cobalt uppercase">
          Draft
        </span>
      </div>

      <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
        <div className="border-b border-hairline p-5 md:border-r md:border-b-0 md:p-6">
          <p className="text-[12px] tracking-[0.12em] text-muted uppercase">Recommendation</p>
          <h3 className="font-display mt-3 text-[26px] font-medium tracking-tight text-ink md:text-[30px]">
            Build a bounded first release.
          </h3>
          <p className="mt-3 max-w-[40ch] text-[14px] leading-relaxed text-neutral">
            Off-the-shelf tools cover drafting. They do not cover the intake, approvals, and
            audit trail your operators need.
          </p>
          <dl className="mt-8 space-y-4 border-t border-hairline pt-6">
            <div className="grid grid-cols-[7rem_1fr] gap-3 text-[13px]">
              <dt className="text-muted">Horizon</dt>
              <dd className="text-charcoal">6-10 weeks to a first release</dd>
            </div>
            <div className="grid grid-cols-[7rem_1fr] gap-3 text-[13px]">
              <dt className="text-muted">Owners</dt>
              <dd className="text-charcoal">Ops lead + engineering sponsor</dd>
            </div>
            <div className="grid grid-cols-[7rem_1fr] gap-3 text-[13px]">
              <dt className="text-muted">Next step</dt>
              <dd className="text-charcoal">Scope memo for leadership review</dd>
            </div>
          </dl>
        </div>

        <div className="bg-warm/50 p-5 md:p-6">
          <p className="text-[12px] tracking-[0.12em] text-muted uppercase">Options tested</p>
          <ul className="mt-5 space-y-3">
            {options.map((option) => (
              <li
                key={option.label}
                className={cn(
                  "rounded-[14px] border px-4 py-3.5",
                  option.tone === "active"
                    ? "border-cobalt/25 bg-paper shadow-[0_8px_24px_rgba(47,91,255,0.08)]"
                    : "border-hairline bg-paper/70",
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[15px] font-medium text-ink">{option.label}</span>
                  {option.tone === "active" ? (
                    <span className="text-[11px] font-medium tracking-[0.1em] text-cobalt uppercase">
                      Selected
                    </span>
                  ) : null}
                </div>
                <p className="mt-1.5 text-[13px] leading-relaxed text-neutral">{option.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

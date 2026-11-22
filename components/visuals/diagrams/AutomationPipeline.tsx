import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import { DiagramShell } from "./DiagramShell";
import { diagramTokens as t } from "./diagramTokens";

const STEPS = [
  { id: "event", label: "Event", sub: "Webhook / schedule" },
  { id: "queue", label: "Queue", sub: "Durable inbox" },
  { id: "orchestrate", label: "Orchestrate", sub: "DAG / steps" },
  { id: "act", label: "Act", sub: "APIs & updates" },
  { id: "retry", label: "Retry / DLQ", sub: "Idempotent" },
  { id: "human", label: "Human gate", sub: "Review lane" },
  { id: "monitor", label: "Monitor", sub: "Logs & SLOs" },
] as const;

function Arrow({ className }: { className?: string }) {
  return (
    <svg className={cn("hidden shrink-0 lg:block", className)} width="18" height="10" viewBox="0 0 18 10" fill="none">
      <path d="M0 5h12" stroke={t.hairline} strokeWidth="1" />
      <path d="M10 1.5l6 3.5-6 3.5" stroke={t.cobalt} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Node({
  label,
  sub,
  variant = "default",
}: {
  label: string;
  sub: string;
  variant?: "default" | "act" | "human";
}) {
  return (
    <div
      className={cn(
        "rounded-xl border px-3 py-2.5 text-center sm:min-w-[6.75rem]",
        variant === "act" && "border-cobalt/35 bg-cobalt text-white shadow-[0_10px_26px_rgba(47,91,255,0.26)]",
        variant === "human" && "border-navy/30 bg-navy text-paper shadow-[0_8px_22px_rgba(15,27,51,0.22)]",
        variant === "default" && "border-hairline bg-white/95 text-ink shadow-[0_6px_16px_rgba(17,17,16,0.04)]",
      )}
    >
      <p
        className={cn(
          "text-[11px] font-medium sm:text-[12px]",
          variant === "default" ? "text-ink" : variant === "act" ? "text-white" : "text-paper",
        )}
      >
        {label}
      </p>
      <p
        className={cn(
          "mt-0.5 text-[9px] sm:text-[10px]",
          variant === "default" ? "text-muted" : variant === "act" ? "text-white/75" : "text-paper/65",
        )}
      >
        {sub}
      </p>
    </div>
  );
}

/** Event-driven automation with observability and human checkpoints. */
export function AutomationPipeline({ className = "" }: { className?: string }) {
  const nodes: ReactNode[] = [];
  STEPS.forEach((step, i) => {
    if (i > 0) nodes.push(<Arrow key={`${step.id}-a`} />);
    const variant = step.id === "act" ? "act" : step.id === "human" ? "human" : "default";
    nodes.push(<Node key={step.id} label={step.label} sub={step.sub} variant={variant} />);
  });

  return (
    <DiagramShell
      className={className}
      subtitle="Workflow automation"
      title="Event → action → oversight"
      badge="Observable"
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-6">
        <div className="flex flex-wrap items-center justify-center gap-2 lg:flex-nowrap lg:justify-start">{nodes}</div>

        <div className="rounded-xl border border-dashed border-hairline bg-warm/60 px-4 py-3 text-[10px] leading-relaxed text-neutral lg:max-w-[11rem]">
          <p className="font-medium text-charcoal">Sidecars</p>
          <ul className="mt-2 space-y-1.5">
            <li>Secrets & auth refresh</li>
            <li>Schema validation</li>
            <li>Trace IDs per run</li>
          </ul>
        </div>
      </div>

      <svg className="mt-5 w-full" viewBox="0 0 720 56" preserveAspectRatio="xMidYMid meet" aria-hidden>
        <line x1="40" y1="28" x2="680" y2="28" stroke={t.hairline} strokeWidth="1" strokeDasharray="4 4" />
        {[
          [80, "CRM"],
          [240, "ERP"],
          [400, "Slack"],
          [560, "Data warehouse"],
        ].map(([x, label]) => (
          <g key={String(label)}>
            <circle cx={Number(x)} cy={28} r="5" fill={t.cobalt} opacity="0.85" />
            <text x={Number(x)} y={48} textAnchor="middle" fill={t.muted} fontSize="9" fontFamily="system-ui">
              {label}
            </text>
          </g>
        ))}
      </svg>
    </DiagramShell>
  );
}
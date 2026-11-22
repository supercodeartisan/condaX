import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import { DiagramShell } from "./DiagramShell";
import { diagramTokens as t } from "./diagramTokens";

const STEPS = [
  { id: "ingest", label: "Ingest", sub: "Sources & sync" },
  { id: "parse", label: "Parse / chunk", sub: "Structure & splits" },
  { id: "embed", label: "Embed", sub: "Vector index" },
  { id: "hybrid", label: "Hybrid retrieve", sub: "BM25 + vectors" },
  { id: "rerank", label: "Rerank", sub: "Precision pass" },
  { id: "context", label: "Context", sub: "Window & policy" },
  { id: "llm", label: "LLM", sub: "Generation" },
  { id: "citations", label: "Citations", sub: "Source spans" },
  { id: "eval", label: "Eval", sub: "Regression set" },
] as const;

function FlowArrow({ className }: { className?: string }) {
  return (
    <svg className={cn("shrink-0 text-hairline", className)} width="20" height="12" viewBox="0 0 20 12" fill="none">
      <path d="M0 6h14" stroke="currentColor" strokeWidth="1" />
      <path d="M12 2l6 4-6 4" stroke={t.cobalt} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StepNode({
  label,
  sub,
  accent,
}: {
  label: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        "min-w-[6.5rem] flex-1 rounded-xl border px-2.5 py-2 text-center sm:min-w-[7.25rem] sm:px-3 sm:py-2.5",
        accent
          ? "border-cobalt/35 bg-cobalt text-white shadow-[0_10px_28px_rgba(47,91,255,0.28)]"
          : "border-hairline bg-white/95 text-ink shadow-[0_6px_18px_rgba(17,17,16,0.04)]",
      )}
    >
      <p className={cn("text-[11px] font-medium leading-tight sm:text-[12px]", accent ? "text-white" : "text-ink")}>
        {label}
      </p>
      <p className={cn("mt-0.5 text-[9px] sm:text-[10px]", accent ? "text-white/75" : "text-muted")}>{sub}</p>
    </div>
  );
}

function FlowRow({ steps, accentId }: { steps: readonly (typeof STEPS)[number][]; accentId?: string }) {
  const nodes: ReactNode[] = [];
  steps.forEach((step, i) => {
    if (i > 0) nodes.push(<FlowArrow key={`${step.id}-arrow`} className="hidden sm:block" />);
    nodes.push(<StepNode key={step.id} label={step.label} sub={step.sub} accent={step.id === accentId} />);
  });
  return <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">{nodes}</div>;
}

/** Production RAG topology for copilot / retrieval solutions. */
export function RagArchitecture({ className = "" }: { className?: string }) {
  return (
    <DiagramShell
      className={className}
      subtitle="Retrieval architecture"
      title="Corpus → grounded answer"
      badge="Access-aware"
    >
      <div className="relative space-y-4">
        <FlowRow steps={STEPS.slice(0, 5)} accentId="hybrid" />
        <div className="flex justify-center py-1" aria-hidden>
          <svg width="14" height="28" viewBox="0 0 14 28" fill="none">
            <path d="M7 0v20" stroke={t.hairline} strokeWidth="1" />
            <path d="M3 18l4 6 4-6" stroke={t.cobalt} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <FlowRow steps={STEPS.slice(5)} accentId="llm" />

        <svg
          className="mt-2 hidden w-full sm:block"
          viewBox="0 0 800 48"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <rect x="8" y="18" width="120" height="28" rx="8" fill={t.white} stroke={t.hairline} />
          <text x="68" y="36" textAnchor="middle" fill={t.neutral} fontSize="10" fontFamily="system-ui">
            Connectors
          </text>
          <rect x="340" y="18" width="120" height="28" rx="8" fill={t.cobaltSoft} stroke={t.cobalt} strokeOpacity="0.35" />
          <text x="400" y="36" textAnchor="middle" fill={t.cobalt} fontSize="10" fontFamily="system-ui">
            Vector + keyword
          </text>
          <rect x="672" y="18" width="120" height="28" rx="8" fill={t.navy} />
          <text x="732" y="36" textAnchor="middle" fill={t.white} fontSize="10" fontFamily="system-ui" opacity="0.9">
            Eval harness
          </text>
        </svg>
      </div>
    </DiagramShell>
  );
}
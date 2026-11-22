import { cn } from "@/lib/cn";
import { DiagramShell } from "./DiagramShell";
import { diagramTokens as t } from "./diagramTokens";

type BoxProps = {
  title: string;
  items: string[];
  className?: string;
  emphasis?: "cobalt" | "navy" | "paper";
};

function ArchBox({ title, items, className, emphasis = "paper" }: BoxProps) {
  return (
    <div
      className={cn(
        "rounded-xl border px-4 py-3",
        emphasis === "cobalt" &&
          "border-cobalt/35 bg-cobalt text-white shadow-[0_12px_32px_rgba(47,91,255,0.22)]",
        emphasis === "navy" && "border-navy/25 bg-navy text-paper shadow-[0_10px_28px_rgba(15,27,51,0.2)]",
        emphasis === "paper" && "border-hairline bg-white/95 text-ink shadow-[0_6px_18px_rgba(17,17,16,0.04)]",
        className,
      )}
    >
      <p
        className={cn(
          "text-[12px] font-medium",
          emphasis === "paper" ? "text-ink" : emphasis === "cobalt" ? "text-white" : "text-paper",
        )}
      >
        {title}
      </p>
      <ul className="mt-2 space-y-1">
        {items.map((item) => (
          <li
            key={item}
            className={cn(
              "text-[10px] leading-snug sm:text-[11px]",
              emphasis === "paper" ? "text-neutral" : emphasis === "cobalt" ? "text-white/78" : "text-paper/70",
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function VConnector({ h = 20 }: { h?: number }) {
  return (
    <div className="flex justify-center py-0.5" aria-hidden>
      <svg width="12" height={h} viewBox={`0 0 12 ${h}`} aria-hidden>
        <path d={`M6 0v${h - 6}`} stroke={t.hairline} strokeWidth="1" />
        <path
          d={`M3 ${h - 10}l3 6 3-6`}
          stroke={t.cobalt}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/** Customer SaaS topology — auth, tenancy, APIs, and analytics. */
export function SaaSArchitecture({ className = "" }: { className?: string }) {
  return (
    <DiagramShell
      className={className}
      subtitle="Product architecture"
      title="Customer-facing SaaS stack"
      badge="Multi-tenant"
    >
      <div className="grid w-full max-w-xl gap-3 sm:grid-cols-2">
        <ArchBox title="Auth" items={["SSO / OIDC", "Session & MFA", "Customer roles"]} />
        <ArchBox title="App" items={["Web · mobile shell", "Self-serve flows", "Brand surfaces"]} />
      </div>

      <VConnector />

      <ArchBox
        title="API"
        emphasis="cobalt"
        className="w-full max-w-xl"
        items={["REST / GraphQL", "Rate limits", "Webhooks · events"]}
      />

      <VConnector />

      <div className="grid w-full gap-3 sm:grid-cols-3">
        <ArchBox title="Data" items={["Postgres / objects", "Migrations", "Backups"]} />
        <ArchBox
          title="Tenancy"
          items={["Row / schema isolation", "Per-org config", "Audit log"]}
          emphasis="navy"
        />
        <ArchBox title="Analytics" items={["Product events", "Funnels", "Privacy gates"]} />
      </div>
    </DiagramShell>
  );
}
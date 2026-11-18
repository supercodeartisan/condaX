import { cn } from "@/lib/cn";

/** Polished delivery topology for the How we deliver section. */
export function ArchitectureVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[22px] border border-hairline bg-[linear-gradient(160deg,#FBFAF7_0%,#F1F5FB_48%,#E8EEF8_100%)] p-5 sm:p-6",
        className,
      )}
      aria-hidden
    >
      <div
        className="pointer-events-none absolute -top-16 -right-10 size-48 rounded-full bg-cobalt/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-12 size-56 rounded-full bg-[#9bb0ff]/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mb-5 flex items-center justify-between gap-3">
        <div>
          <div className="text-[11px] tracking-[0.12em] text-muted uppercase">Delivery topology</div>
          <div className="mt-1 text-[15px] font-medium text-ink">AI · Automation · Product</div>
        </div>
        <span className="rounded-full border border-cobalt/20 bg-white/80 px-2.5 py-1 text-[10px] font-medium text-cobalt shadow-sm backdrop-blur">
          Production-ready
        </span>
      </div>

      <div className="relative grid gap-3">
        <div className="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_12px_36px_rgba(17,17,16,0.06)] backdrop-blur">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[12px] font-medium text-ink">Customer & operator surfaces</span>
            <span className="text-[10px] text-muted">Apps · Copilots · Portals</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["Assistant", "Ops console", "Customer app"].map((label) => (
              <div
                key={label}
                className="rounded-xl border border-hairline bg-[linear-gradient(180deg,#FBFAF7,#F4F7FB)] px-2.5 py-3 text-center text-[11px] font-medium text-charcoal shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center py-1">
          <div className="h-10 w-px bg-gradient-to-b from-cobalt/50 via-cobalt/25 to-cobalt/10" />
          <span className="absolute inline-flex items-center gap-1.5 rounded-full border border-cobalt/25 bg-cobalt px-3 py-1.5 text-[10px] font-medium text-white shadow-[0_10px_28px_rgba(47,91,255,0.35)]">
            <span className="size-1.5 rounded-full bg-white/90" />
            AI & automation layer
          </span>
        </div>

        <div className="rounded-2xl border border-cobalt/25 bg-cobalt p-4 text-white shadow-[0_20px_48px_rgba(47,91,255,0.22)]">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[12px] font-medium">Intelligence & workflows</span>
            <span className="text-[10px] text-white/70">Guarded · Observable</span>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              ["Retrieve", "Grounded context"],
              ["Decide", "Rules + model"],
              ["Act", "Tickets · CRM"],
              ["Review", "Human gates"],
            ].map(([title, meta]) => (
              <div key={title} className="rounded-xl bg-white/12 px-2.5 py-2.5 ring-1 ring-white/10 backdrop-blur-sm">
                <div className="text-[11px] font-medium">{title}</div>
                <div className="mt-0.5 text-[10px] text-white/70">{meta}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center py-1">
          <div className="h-7 w-px bg-gradient-to-b from-cobalt/25 to-hairline" />
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            ["APIs", "Integrations"],
            ["Data", "Tenancy · Logs"],
            ["Cloud", "Secure runtime"],
          ].map(([title, meta]) => (
            <div
              key={title}
              className="rounded-xl border border-white/80 bg-white/95 px-3 py-3 shadow-[0_8px_22px_rgba(17,17,16,0.04)]"
            >
              <div className="text-[12px] font-medium text-ink">{title}</div>
              <div className="mt-1 text-[10px] text-muted">{meta}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

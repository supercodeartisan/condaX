import type { ReactNode } from "react";

export function DiagramShell({
  title,
  subtitle,
  badge,
  children,
  className = "",
}: {
  title: string;
  subtitle: string;
  badge?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[22px] border border-hairline bg-[linear-gradient(165deg,var(--color-paper)_0%,#f3f6fc_55%,#eef2fa_100%)] p-5 sm:p-7 ${className}`}
      aria-hidden
    >
      <div
        className="pointer-events-none absolute -right-16 -top-20 size-56 rounded-full bg-cobalt/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mb-6 flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-medium tracking-[0.12em] text-muted uppercase">{subtitle}</p>
          <p className="mt-1 font-display text-[17px] font-medium tracking-tight text-ink sm:text-[19px]">
            {title}
          </p>
        </div>
        {badge ? (
          <span className="rounded-full border border-cobalt/20 bg-white/90 px-2.5 py-1 text-[10px] font-medium text-cobalt shadow-sm backdrop-blur">
            {badge}
          </span>
        ) : null}
      </div>
      <div className="relative rounded-xl border border-hairline/80 bg-white/55 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] sm:p-4">
        {children}
      </div>
      <p className="relative mt-4 text-[11px] leading-relaxed text-muted">
        Technical diagram — illustrative architecture, not a live system screenshot.
      </p>
    </div>
  );
}
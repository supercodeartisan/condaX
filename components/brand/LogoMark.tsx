import { cn } from "@/lib/cn";

/** Inline SVG marks — use these in the header once a direction is chosen. */
export function LogoMarkC({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("size-8", className)}
      aria-hidden
    >
      <rect width="64" height="64" rx="16" fill="#2F5BFF" />
      <path
        fill="#FBFAF7"
        d="M46.2 32c0-10.6-7.4-18.2-17.8-18.2S10.6 21.4 10.6 32s7.4 18.2 17.8 18.2c6.6 0 12.2-3 15.2-8.2l-5.8-3.4c-1.8 2.8-4.8 4.6-9.4 4.6-6.2 0-10.4-4.8-10.4-11.2S21.6 20.8 27.8 20.8c4.8 0 7.8 2.2 9.4 5.6l6-3.2C41.4 18.4 36.2 13.8 28.4 13.8 16.6 13.8 8 21.8 8 32s8.6 18.2 20.4 18.2c8.2 0 14.2-3.6 17.8-9.8L46.2 32z"
      />
    </svg>
  );
}

export function LogoMarkAxis({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={cn("size-8", className)} aria-hidden>
      <g fill="none" stroke="#2F5BFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 32h24" />
        <circle cx="18" cy="32" r="8" />
        <circle cx="46" cy="32" r="5" />
        <path d="M30 15.5A17.5 17.5 0 0 0 14.2 41" />
      </g>
    </svg>
  );
}

export function LogoLockup({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const ink = tone === "dark";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMarkC className="size-8 shrink-0" />
      <span
        className={cn(
          "font-display text-[22px] font-semibold tracking-[-0.04em]",
          ink ? "text-ink" : "text-paper",
        )}
      >
        Condax
      </span>
    </span>
  );
}

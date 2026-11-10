import Link from "next/link";
import { cn } from "@/lib/cn";

export function PillLink({
  href,
  children,
  variant = "glass",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "glass" | "solid" | "ghost";
  className?: string;
}) {
  const styles = {
    glass:
      "border border-px-lime/20 bg-px-white/8 text-px-white backdrop-blur-[32px] hover:border-px-lime/50 hover:text-px-lime",
    solid: "bg-px-lime text-px-ink hover:bg-px-lime-dim",
    ghost: "bg-transparent text-px-white hover:text-px-lime hover:bg-px-white/8",
  }[variant];

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-[32px] py-2 pl-4 pr-3 text-[16px] font-medium leading-[150%] transition-colors duration-300",
        styles,
        className,
      )}
    >
      {children}
      <Arrow />
    </Link>
  );
}

export function Arrow() {
  return (
    <span className="grid size-5 place-items-center rounded-full">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
        <path d="M3 7h8M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function DownArrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M6 2v8M2 6l4 4 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

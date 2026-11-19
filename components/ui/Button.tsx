import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[15px] font-medium transition-[color,background-color,border-color,transform,box-shadow] duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt active:scale-[0.98]";

const variants = {
  primary:
    "bg-cobalt text-white shadow-[0_6px_18px_rgba(47,91,255,0.16)] hover:bg-cobalt-hover hover:shadow-[0_8px_22px_rgba(47,91,255,0.2)]",
  secondary:
    "border border-charcoal/15 bg-transparent text-charcoal hover:border-cobalt hover:text-cobalt",
  ghost: "bg-transparent text-charcoal hover:text-cobalt",
  inverse: "bg-paper text-ink hover:bg-white",
  inverseGhost:
    "border border-white/25 bg-transparent text-paper hover:border-white hover:bg-white/5",
} as const;

type Variant = keyof typeof variants;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  arrow = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
}) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
      {arrow ? <ArrowRightIcon className="transition-transform duration-300 group-hover:translate-x-0.5" /> : null}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  className,
  type = "button",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
}) {
  return (
    <button type={type} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

import { cn } from "@/lib/cn";

export function Section({
  children,
  className,
  id,
  tone = "warm",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "warm" | "paper" | "surface" | "night";
}) {
  const bg = {
    warm: "bg-warm",
    paper: "bg-paper",
    surface: "bg-surface",
    night: "bg-night text-paper",
  }[tone];

  return (
    <section id={id} className={cn("py-24 md:py-32 lg:py-36", bg, className)}>
      {children}
    </section>
  );
}

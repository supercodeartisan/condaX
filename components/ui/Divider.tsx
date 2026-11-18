import { cn } from "@/lib/cn";

export function Divider({ className }: { className?: string }) {
  return <div className={cn("h-px w-full bg-hairline", className)} role="separator" />;
}

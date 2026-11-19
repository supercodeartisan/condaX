import Link from "next/link";
import { ArrowLeftIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

export function BackLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-[14px] font-medium text-neutral transition-colors hover:text-cobalt",
        className,
      )}
    >
      <span className="inline-flex size-7 items-center justify-center rounded-full border border-hairline bg-surface text-ink transition-colors group-hover:border-cobalt group-hover:text-cobalt">
        <ArrowLeftIcon className="size-3.5" />
      </span>
      <span>{children}</span>
    </Link>
  );
}

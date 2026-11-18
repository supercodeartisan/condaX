import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Logo({
  className = "",
  tone = "dark",
  size = "lg",
}: {
  className?: string;
  tone?: "dark" | "light";
  size?: "sm" | "lg";
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={cn(
        "inline-flex shrink-0 items-center transition-opacity hover:opacity-90",
        className,
      )}
    >
      <Image
        src="/logo.png"
        alt={site.name}
        width={size === "lg" ? 120 : 80}
        height={size === "lg" ? 96 : 64}
        className={cn(
          "w-auto object-contain [image-rendering:auto]",
          size === "lg" ? "h-12" : "h-8",
        )}
        priority
        sizes={size === "lg" ? "120px" : "80px"}
      />
    </Link>
  );
}

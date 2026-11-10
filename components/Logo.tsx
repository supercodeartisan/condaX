import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label={`${site.name} home`} className={`block ${className}`}>
      <Image
        src="/logo.png"
        alt={site.name}
        width={160}
        height={48}
        priority
        className="h-7 w-auto lg:h-8"
      />
    </Link>
  );
}

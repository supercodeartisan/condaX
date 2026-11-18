import Image from "next/image";
import { cn } from "@/lib/cn";

type ProductShotProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  aspect?: string;
};

/** Polished product screenshot frame used across homepage and solution pages. */
export function ProductShot({
  src,
  alt,
  className = "",
  priority = false,
  aspect = "aspect-[16/10]",
}: ProductShotProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[22px] border border-hairline bg-surface shadow-[0_32px_90px_rgba(17,17,16,0.10)]",
        aspect,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1000}
        className="h-full w-full object-cover object-top"
        priority={priority}
      />
    </div>
  );
}

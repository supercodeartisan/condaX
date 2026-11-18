import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ImageAsset } from "@/lib/images";

type Tone = "raw" | "editorial" | "night";

type Props = {
  asset: ImageAsset;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  position?: string;
  /** editorial = slight desat + warm wash; night = darker grade */
  tone?: Tone;
};

export function EditorialImage({
  asset,
  className,
  imgClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  position = "center",
  tone = "editorial",
}: Props) {
  return (
    <div className={cn("img-frame relative overflow-hidden bg-hairline", className)}>
      <Image
        src={asset.src}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        priority={priority}
        sizes={sizes}
        className={cn(
          "h-full w-full object-cover",
          tone === "editorial" && "img-tone-editorial",
          tone === "night" && "img-tone-night",
          imgClassName,
        )}
        style={{ objectPosition: position }}
      />
      {tone !== "raw" ? <span className="img-wash" aria-hidden /> : null}
    </div>
  );
}

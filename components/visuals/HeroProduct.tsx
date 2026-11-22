import Image from "next/image";
import { images } from "@/lib/images";

/** Homepage hero visual — curated Unsplash product photography (not a hand-built mock). */
export function HeroProduct({ className = "" }: { className?: string }) {
  const asset = images.home.heroVisual;

  return (
    <div className={`relative isolate ${className}`}>
      <div
        className="pointer-events-none absolute -top-14 -right-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(47,91,255,0.18),transparent_68%)] sm:h-80 sm:w-80"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-10 -left-8 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(17,17,16,0.06),transparent_70%)]"
        aria-hidden
      />

      <div className="animate-fade-up delay-300 relative z-[1]">
        <div className="motion-soft-float">
          <div className="overflow-hidden rounded-[22px] border border-hairline bg-surface shadow-[0_36px_100px_rgba(17,17,16,0.16)] ring-1 ring-black/[0.03]">
            <div className="flex items-center gap-3 border-b border-hairline bg-[#ecebe7] px-3 py-2.5 sm:px-4">
              <div className="flex items-center gap-1.5" aria-hidden>
                <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                <span className="size-2.5 rounded-full bg-[#febc2e]" />
                <span className="size-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="min-w-0 flex-1 rounded-md border border-hairline bg-white/90 px-3 py-1 text-center text-[11px] text-muted truncate">
                app.condaxits.com / operations
              </div>
            </div>
            <div className="relative aspect-[16/11] bg-ink">
              <Image
                src={asset.src}
                alt={asset.alt}
                width={asset.width}
                height={asset.height}
                priority
                className="h-full w-full object-cover object-[center_20%]"
                sizes="(max-width: 1024px) 90vw, 600px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="animate-fade-up delay-500 pointer-events-none absolute -bottom-3 left-3 z-[2] sm:left-4 sm:-bottom-4">
        <div
          className="motion-soft-float rounded-2xl border border-hairline bg-surface/95 px-3.5 py-2.5 shadow-[0_16px_40px_rgba(17,17,16,0.12)] backdrop-blur-sm"
          style={{ animationDelay: "1.6s" }}
        >
          <div className="text-[10px] tracking-[0.12em] text-muted uppercase">Production</div>
          <div className="mt-0.5 text-[13px] font-medium text-ink">Live systems, measurable outcomes</div>
        </div>
      </div>
    </div>
  );
}

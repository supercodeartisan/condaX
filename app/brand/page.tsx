import type { Metadata } from "next";
import Image from "next/image";
import { LogoLockup, LogoMarkAxis, LogoMarkC } from "@/components/brand/LogoMark";

export const metadata: Metadata = {
  title: "Brand · Logo options",
  robots: { index: false, follow: false },
};

const concepts = [
  {
    file: "condax-logo-01-wordmark.jpg",
    title: "01 · Wordmark",
    note: "Studio-style text only — closest to Metalab / Work & Co confidence.",
  },
  {
    file: "condax-logo-02-c-mark.jpg",
    title: "02 · C mark",
    note: "Favicon / avatar. Cobalt tile with cut C.",
  },
  {
    file: "condax-logo-03-axis.jpg",
    title: "03 · Axis",
    note: "Ideas → product continuum. Quiet craft symbol.",
  },
  {
    file: "condax-logo-04-lockup.jpg",
    title: "04 · Lockup",
    note: "Primary site header candidate: mark + Condax.",
  },
  {
    file: "condax-logo-05-frame.jpg",
    title: "05 · Frame",
    note: "Product-window metaphor — UI craft without stock.",
  },
] as const;

const svgs = [
  { src: "/logos/01-wordmark.svg", label: "Wordmark", wide: true },
  { src: "/logos/01-wordmark-cobalt.svg", label: "Wordmark cobalt", wide: true },
  { src: "/logos/04-lockup.svg", label: "Lockup", wide: true },
  { src: "/logos/02-mark-c.svg", label: "C mark", wide: false },
  { src: "/logos/02-mark-c-ink.svg", label: "C mark ink", wide: false },
  { src: "/logos/03-mark-axis.svg", label: "Axis", wide: false },
  { src: "/logos/05-mark-frame.svg", label: "Frame", wide: false },
  { src: "/logos/06-mark-cx.svg", label: "CX", wide: false },
] as const;

export default function BrandPage() {
  return (
    <main id="main-content" className="pt-36 lg:pt-40">
      <section className="paddings mx-auto max-w-[1100px] pt-12 pb-10">
        <p className="eyebrow text-cobalt">Internal · not linked in nav</p>
        <h1 className="font-display mt-4 text-[40px] font-medium tracking-tight text-ink md:text-[52px]">
          Condax logo options
        </h1>
        <p className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-neutral">
          Drawn from product-studio patterns (quiet wordmark + simple geometric mark) and aligned to
          the site palette — ink, cobalt, warm paper. Production SVGs live in{" "}
          <code className="text-ink">/public/logos</code>. Pick one lockup + one mark; swap the
          header when ready.
        </p>
      </section>

      <section className="paddings mx-auto max-w-[1100px] pb-16">
        <h2 className="font-display text-[28px] font-medium text-ink">Production SVGs</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {svgs.map((item) => (
            <a
              key={item.src}
              href={item.src}
              className="group flex flex-col border border-hairline bg-paper p-6 transition-colors hover:border-cobalt/40"
            >
              <div
                className={`flex items-center justify-center rounded-[16px] bg-warm ${
                  item.wide ? "h-28" : "h-36"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.label}
                  className={item.wide ? "h-10 w-auto max-w-[85%]" : "h-14 w-14"}
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-3">
                <span className="text-[15px] font-medium text-ink">{item.label}</span>
                <span className="text-[12px] text-muted group-hover:text-cobalt">SVG</span>
              </div>
              <p className="mt-1 truncate text-[12px] text-muted">{item.src}</p>
            </a>
          ))}
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="rounded-[20px] bg-night p-8">
            <p className="text-[12px] tracking-[0.14em] text-white/45 uppercase">Live React lockup · night</p>
            <div className="mt-6 flex flex-wrap items-center gap-10">
              <LogoLockup tone="light" />
              <LogoMarkAxis className="size-10" />
            </div>
          </div>
          <div className="rounded-[20px] border border-hairline bg-paper p-8">
            <p className="text-[12px] tracking-[0.14em] text-muted uppercase">Live React lockup · paper</p>
            <div className="mt-6 flex flex-wrap items-center gap-10">
              <LogoLockup />
              <LogoMarkC className="size-12" />
            </div>
          </div>
        </div>
      </section>

      <section className="paddings mx-auto max-w-[1100px] pb-24">
        <h2 className="font-display text-[28px] font-medium text-ink">Concept renders</h2>
        <p className="mt-3 max-w-[48ch] text-[15px] text-neutral">
          Exploratory images for direction — use the SVGs above for production.
        </p>
        <div className="mt-8 grid gap-8">
          {concepts.map((c) => (
            <figure key={c.file} className="border-t border-hairline pt-8">
              <div className="overflow-hidden rounded-[20px] border border-hairline bg-warm">
                <Image
                  src={`/logos/${c.file}`}
                  alt={c.title}
                  width={1600}
                  height={900}
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-4 flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <span className="font-medium text-ink">{c.title}</span>
                <span className="max-w-[48ch] text-[14px] text-neutral">{c.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}

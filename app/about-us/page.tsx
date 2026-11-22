import type { Metadata } from "next";
import Link from "next/link";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { images } from "@/lib/images";
import { values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Condax is an international AI and automation consultancy. Senior owners, clear adopt-versus-build decisions, and clean handover.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="pt-36 lg:pt-40">
      <section className="paddings mx-auto max-w-[1720px] pt-12">
        <h1 className="font-display max-w-[18ch] text-[40px] leading-[1.1] font-medium tracking-tight text-ink sm:text-[56px] lg:text-[72px]">
          An international AI and automation consultancy.
        </h1>
        <p className="mt-6 max-w-[46ch] text-[18px] leading-relaxed text-neutral">
          Condax Information Technology Solutions helps organizations adopt AI, automate customer and
          operations workflows, and build custom products - with senior owners and a clean handover.
        </p>
        <EditorialImage
          asset={images.about.workspaceArchitecture}
          className="mt-12 aspect-[21/9] w-full rounded-[24px] md:aspect-[2.6/1]"
          sizes="(max-width: 1720px) 100vw, 1720px"
          priority
          tone="raw"
          position="center"
        />
      </section>

      <section className="paddings mx-auto grid max-w-[1720px] gap-12 py-24 lg:grid-cols-[1fr_1.2fr]">
        <div className="font-display text-[40px] leading-[1.15] font-medium tracking-tight text-ink md:text-[60px]">
          <span className="block">Direct.</span>
          <span className="mt-1 block">Accountable.</span>
          <span className="block">Outcome-focused.</span>
        </div>
        <ul className="divide-y divide-hairline border-y border-hairline">
          {values.map(([k, v]) => (
            <li key={k} className="grid grid-cols-[140px_1fr] gap-6 py-4 text-[15px]">
              <span className="font-medium text-ink">{k}</span>
              <span className="text-neutral">{v}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-hairline">
        <div className="paddings mx-auto flex max-w-[1720px] flex-col gap-6 py-16 md:flex-row md:items-end md:justify-between md:py-20">
          <div>
            <p className="text-[12px] tracking-[0.14em] text-muted uppercase">How we engage</p>
            <h2 className="font-display mt-3 max-w-[18ch] text-[32px] font-medium tracking-tight text-ink md:text-[40px]">
              Engagement models and delivery standards live on Services.
            </h2>
            <p className="mt-4 max-w-[42ch] text-[16px] leading-relaxed text-neutral">
              Advisory, AI enablement, and custom product engineering - with scope, governance, and
              handover defined before build.
            </p>
          </div>
          <Link href="/what-we-do" className="text-[14px] font-medium text-cobalt link-underline">
            Our approach
          </Link>
        </div>
      </section>
    </main>
  );
}

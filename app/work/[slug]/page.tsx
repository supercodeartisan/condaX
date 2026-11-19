import { notFound } from "next/navigation";
import { PillLink } from "@/components/Buttons";
import { BackLink } from "@/components/ui/BackLink";
import { WorkScreenshot } from "@/components/work/WorkScreenshot";
import { workCases } from "@/lib/work-cases";
import { workItems } from "@/lib/site";

export function generateStaticParams() {
  return workItems.map((w) => ({ slug: w.slug }));
}

export default async function WorkCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = workItems.find((w) => w.slug === slug);
  const detail = workCases[slug];
  if (!item || !detail) notFound();

  return (
    <main id="main-content" className="paddings mx-auto max-w-[1100px] pt-40 pb-24 lg:pt-44">
      <BackLink href="/work">All work</BackLink>
      <p className="mt-8 text-[13px] tracking-[0.14em] text-neutral uppercase">{item.industry}</p>
      <h1 className="font-display mt-4 text-[40px] leading-[1.12] font-light md:text-[56px]">
        {item.name}
      </h1>
      <p className="mt-6 text-[18px] leading-relaxed text-neutral">{item.blurb}</p>
      <div className="mt-8 flex flex-wrap gap-2">
        {item.chip ? (
          <span className="rounded-full border border-hairline bg-warm px-3 py-1 text-[12px] tracking-[0.08em] text-neutral uppercase">
            {item.chip} · Concept
          </span>
        ) : null}
        {item.tags.map((t) => (
          <span key={t} className="rounded-full border border-hairline px-3 py-1 text-[13px] text-neutral">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-12">
        <WorkScreenshot slug={slug} />
      </div>

      <section className="mt-14">
        <h2 className="font-display text-[28px] font-light md:text-[32px]">The challenge</h2>
        <p className="mt-5 text-[16px] leading-relaxed text-neutral">{detail.challenge}</p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-[28px] font-light md:text-[32px]">How we approached it</h2>
        <ul className="mt-6 space-y-3 text-[16px] leading-relaxed text-neutral">
          {detail.approach.map((item) => (
            <li key={item} className="border-t border-hairline pt-3">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-[28px] font-light md:text-[32px]">What good looks like</h2>
        <ul className="mt-6 space-y-3 text-[16px] leading-relaxed text-neutral">
          {detail.outcome.map((item) => (
            <li key={item} className="border-t border-hairline pt-3">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {detail.stack ? (
        <section className="mt-12">
          <h2 className="font-display text-[28px] font-light md:text-[32px]">Focus areas</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {detail.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-hairline px-3 py-1 text-[13px] text-neutral"
              >
                {s}
              </span>
            ))}
          </div>
        </section>
      ) : null}

      <p className="mt-12 text-[14px] leading-relaxed text-muted">
        Sample concept illustrating Condax delivery. Published with permission-ready client stories
        when available.
      </p>

      <div className="mt-16 rounded-[24px] border border-cobalt/15 bg-paper p-8">
        <h2 className="font-display text-[28px] font-light">Discuss a comparable initiative</h2>
        <p className="mt-2 text-neutral">We respond within one business day.</p>
        <PillLink href="/get-in-touch" variant="solid" className="mt-6">
          Request a consultation
        </PillLink>
      </div>
    </main>
  );
}

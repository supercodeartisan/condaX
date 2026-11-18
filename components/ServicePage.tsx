import { Comparison } from "@/components/Comparison";
import { Faq } from "@/components/Faq";
import { InsightCard } from "@/components/InsightCard";
import { PillLink } from "@/components/Buttons";
import { Plans } from "@/components/Plans";
import { ProcessTabsClient } from "@/components/ProcessTabs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";
import {
  capabilities,
  insights,
  type OutcomeStripItem,
  type ProcessStep,
  type UseCaseRow,
} from "@/lib/site";

type Props = {
  title: string;
  lede: string;
  eyebrow?: string;
  cta?: string;
  statsHeading?: string;
  statsLede?: string;
  stats: { value: string; label: string; text: string }[];
  offerings: { title: string; text: string }[];
  offeringsHeading?: string;
  offeringsLede?: string;
  outcomeStrip?: OutcomeStripItem[];
  outcomeStripHeading?: string;
  useCases?: UseCaseRow[];
  useCasesHeading?: string;
  useCasesLede?: string;
  process?: ProcessStep[];
  processHeading?: string;
  processLede?: string;
  showPlans?: boolean;
  showComparison?: boolean;
  closingTitle?: string;
  closingLede?: string;
  closingCta?: string;
  /** Optional custom product/diagram composition — prefer over stock photography */
  visual?: React.ReactNode;
};

export function ServicePage({
  title,
  lede,
  eyebrow,
  cta = "Request a consultation",
  statsHeading = "At a glance",
  statsLede,
  stats,
  offerings,
  offeringsHeading = "What we deliver",
  offeringsLede,
  outcomeStrip,
  outcomeStripHeading,
  useCases,
  useCasesHeading = "Where this lands",
  useCasesLede,
  process,
  processHeading,
  processLede,
  showPlans,
  showComparison = true,
  closingTitle = "Scope the next step",
  closingLede = "Describe whether you need AI enablement, custom software, or an advisory assessment. We will respond with a clear recommendation.",
  closingCta = "Contact us",
  visual,
}: Props) {
  return (
    <main id="main-content" className="pt-36 lg:pt-40">
      <section className="paddings mx-auto grid max-w-[1520px] items-end gap-10 border-b border-hairline pt-10 pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:pt-16">
        <Reveal>
          {eyebrow ? (
            <Eyebrow className="mb-4 text-cobalt">{eyebrow}</Eyebrow>
          ) : null}
          <h1 className="font-display display-hero max-w-[16ch] text-[42px] font-medium tracking-tight text-ink sm:text-[56px] lg:text-[68px]">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <div className="flex flex-col justify-end gap-5 pb-1 lg:items-end lg:text-right">
            <p className="max-w-[36ch] text-[16px] leading-relaxed text-neutral lg:text-[17px]">{lede}</p>
            <PillLink href="/get-in-touch" variant="solid">
              {cta}
            </PillLink>
          </div>
        </Reveal>
      </section>

      {visual ? (
        <Reveal>
          <section className="paddings mx-auto max-w-[1520px] py-8 md:py-12">
            <div className="overflow-hidden rounded-[24px] border border-hairline bg-warm/40 p-3 md:p-5">
              {visual}
            </div>
          </section>
        </Reveal>
      ) : null}

      {outcomeStrip && outcomeStrip.length > 0 ? (
        <Reveal delay={40}>
          <section className="border-y border-hairline bg-warm/50">
            <div className="paddings mx-auto max-w-[1520px] py-12 md:py-14">
              {outcomeStripHeading ? (
                <p className="mb-8 text-[12px] tracking-[0.14em] text-muted uppercase">{outcomeStripHeading}</p>
              ) : null}
              <div className="grid gap-10 sm:grid-cols-3">
                {outcomeStrip.map((item) => (
                  <div key={item.label}>
                    <div className="font-display text-[36px] font-medium tracking-tight text-ink md:text-[44px]">
                      {item.value}
                    </div>
                    <p className="mt-2 text-[15px] font-medium text-charcoal">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>
      ) : null}

      <Reveal delay={60}>
        <div className="mx-auto mt-2 flex max-w-[1100px] flex-wrap items-center justify-center gap-x-10 gap-y-3 pb-12 text-[15px] font-medium text-neutral">
          {capabilities.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>
      </Reveal>

      <section className="paddings mx-auto grid max-w-[1720px] gap-10 border-t border-hairline py-16 md:grid-cols-4">
        <Reveal className="col-span-full md:col-span-2">
          <h2 className="font-display text-[32px] font-light md:text-[40px]">{statsHeading}</h2>
          {statsLede ? (
            <p className="mt-3 max-w-[48ch] text-[16px] leading-relaxed text-neutral">{statsLede}</p>
          ) : null}
        </Reveal>
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 60}>
            <div className="font-display text-[40px] font-light md:text-[52px]">{s.value}</div>
            <div className="mt-2 font-medium">{s.label}</div>
            <p className="mt-2 text-[14px] text-neutral">{s.text}</p>
          </Reveal>
        ))}
      </section>

      {useCases && useCases.length > 0 ? (
        <section className="border-t border-hairline bg-surface">
          <div className="paddings mx-auto max-w-[1520px] py-16 md:py-20">
            <Reveal>
              <SectionHeader
                eyebrow="Use cases"
                title={useCasesHeading}
                description={useCasesLede}
                className="mb-4"
              />
            </Reveal>
            <div className="mt-6">
              {useCases.map((row, i) => (
                <Reveal key={row.title} delay={i * 55}>
                  <div className="group grid gap-3 border-b border-hairline py-9 md:grid-cols-[5rem_minmax(0,0.55fr)_minmax(0,1fr)_minmax(0,1.1fr)] md:items-baseline md:gap-8 md:py-10">
                    <span className="font-display text-[13px] text-muted tabular-nums transition-colors group-hover:text-cobalt">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-[22px] leading-snug font-medium tracking-tight text-ink md:text-[26px]">
                      {row.title}
                    </h3>
                    <p className="text-[13px] tracking-[0.08em] text-cobalt uppercase">{row.audience}</p>
                    <p className="max-w-[48ch] text-[16px] leading-relaxed text-neutral">{row.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="paddings mx-auto max-w-[1720px] py-16">
        <Reveal>
          <SectionHeader
            title={offeringsHeading}
            description={offeringsLede}
            className="mb-10 max-w-[48rem]"
          />
        </Reveal>
        <div
          className={cn(
            "grid gap-8 md:grid-cols-2",
            offerings.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
          )}
        >
          {offerings.map((o, i) => (
            <Reveal key={o.title} delay={i * 70}>
              <div className="h-full border-t border-hairline pt-6">
                <h3 className="text-[20px] font-medium">{o.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-neutral">{o.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {process && process.length > 0 ? (
        <ProcessTabsClient steps={process} heading={processHeading} lede={processLede} />
      ) : null}

      {showComparison ? <Comparison /> : null}

      <Reveal>
        <section className="paddings mx-auto my-10 max-w-[1720px] overflow-hidden rounded-[28px] border border-cobalt/15 bg-night text-paper">
          <div className="relative px-8 py-12 md:px-12 md:py-16">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_100%_0%,rgba(47,91,255,0.22),transparent_55%)]"
              aria-hidden
            />
            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-[36rem]">
                <p className="text-[12px] tracking-[0.14em] text-white/45 uppercase">Next step</p>
                <h2 className="font-display mt-4 text-[32px] font-medium tracking-tight md:text-[44px]">
                  {closingTitle}
                </h2>
                <p className="mt-4 max-w-[44ch] text-[16px] leading-relaxed text-white/60">{closingLede}</p>
              </div>
              <PillLink href="/get-in-touch" variant="solid" className="shrink-0 bg-paper text-ink hover:bg-paper/90">
                {closingCta}
              </PillLink>
            </div>
          </div>
        </section>
      </Reveal>

      {showPlans ? <Plans /> : null}

      <section className="paddings mx-auto max-w-[1720px] py-12">
        <h2 className="font-display mb-4 text-[32px] font-light">Related insights</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {insights.slice(0, 2).map((item) => (
            <InsightCard key={item.slug} item={item} showCover={false} />
          ))}
        </div>
      </section>

      <Faq />
    </main>
  );
}
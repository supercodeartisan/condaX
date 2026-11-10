import { Comparison } from "@/components/Comparison";
import { Faq } from "@/components/Faq";
import { InsightCard } from "@/components/InsightCard";
import { PillLink } from "@/components/Buttons";
import { Plans } from "@/components/Plans";
import { ProcessTabsClient } from "@/components/ProcessTabs";
import { RibbonShard } from "@/components/Ribbon";
import { capabilities, insights, type ProcessStep } from "@/lib/site";

type Props = {
  title: string;
  lede: string;
  cta?: string;
  trustLine?: string;
  statsHeading?: string;
  stats: { value: string; label: string; text: string }[];
  offerings: { title: string; text: string }[];
  process?: ProcessStep[];
  processHeading?: string;
  processLede?: string;
  showPlans?: boolean;
};

export function ServicePage({
  title,
  lede,
  cta = "Tell us what you need",
  trustLine = "Remote delivery for teams worldwide.",
  statsHeading = "At a glance",
  stats,
  offerings,
  process,
  processHeading,
  processLede,
  showPlans,
}: Props) {
  return (
    <main id="main-content" className="pt-16 lg:pt-20">
      <section className="paddings mx-auto grid max-w-[1720px] items-center gap-10 pt-10 pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:pt-16">
        <h1 className="font-display max-w-[16ch] text-[42px] leading-[1.1] font-light sm:text-[56px] lg:text-[72px]">
          {title}
        </h1>
        <div className="relative min-h-[220px] lg:min-h-[320px]">
          <RibbonShard className="absolute inset-0" />
          <div className="relative z-10 flex h-full flex-col justify-end gap-5 pb-4 lg:items-end lg:text-right">
            <p className="max-w-[36ch] text-[16px] text-px-white-80">{lede}</p>
            <PillLink href="/get-in-touch">{cta}</PillLink>
          </div>
        </div>
      </section>
      <p className="px-6 text-center text-[14px] text-px-white-48">{trustLine}</p>
      <div className="mx-auto mt-6 flex max-w-[1100px] flex-wrap items-center justify-center gap-x-10 gap-y-3 pb-12 text-[15px] font-medium text-px-white-64">
        {capabilities.map((n) => (
          <span key={n}>{n}</span>
        ))}
      </div>

      <section className="paddings mx-auto grid max-w-[1720px] gap-10 border-t border-px-white-12 py-16 md:grid-cols-4">
        <h2 className="font-display col-span-full text-[32px] font-light md:text-[40px]">{statsHeading}</h2>
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-[40px] font-light md:text-[52px]">{s.value}</div>
            <div className="mt-2 font-medium">{s.label}</div>
            <p className="mt-2 text-[14px] text-px-white-48">{s.text}</p>
          </div>
        ))}
      </section>

      <Comparison />

      <section className="paddings mx-auto max-w-[1720px] py-16">
        <h2 className="font-display mb-10 text-[36px] font-light md:text-[48px]">What we do</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {offerings.map((o) => (
            <div key={o.title} className="border-t border-px-white-12 pt-6">
              <h3 className="text-[20px] font-medium">{o.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-px-white-48">{o.text}</p>
            </div>
          ))}
        </div>
      </section>

      {process && process.length > 0 ? (
        <ProcessTabsClient steps={process} heading={processHeading} lede={processLede} />
      ) : null}

      <section className="paddings mx-auto my-10 flex max-w-[1720px] flex-col items-start justify-between gap-6 rounded-[28px] border border-px-lime/15 bg-px-white-8 px-8 py-12 md:flex-row md:items-center">
        <div>
          <h2 className="font-display text-[32px] font-light md:text-[40px]">Ready to start?</h2>
          <p className="mt-2 text-px-white-48">Tell us whether you need AI tools in the workflow, a custom product, or a decision.</p>
        </div>
        <PillLink href="/get-in-touch" variant="solid">Let’s work together</PillLink>
      </section>

      {showPlans ? <Plans /> : null}

      <section className="paddings mx-auto max-w-[1720px] py-12">
        <h2 className="font-display mb-4 text-[32px] font-light">Latest Insights</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {insights.slice(0, 2).map((item) => (
            <InsightCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      <Faq />
    </main>
  );
}

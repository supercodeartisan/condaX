import Link from "next/link";
import { Plans } from "@/components/Plans";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";
import { workItems } from "@/lib/site";

export type ServiceProcessStep = {
  title: string;
  duration: string;
  summary: string;
  /** Accepted for Solutions pages; not rendered on the lean spine */
  outcomes?: string[];
  weDo?: string[];
  youDo?: string[];
};

export type ServiceFit = {
  bestWhen: string[];
  notFor: string[];
};

type Props = {
  title: string;
  lede: string;
  eyebrow?: string;
  /** Single primary CTA label - shown once in the hero */
  cta?: string;
  /** Contact URL, optionally with ?scope= to prefill the form */
  ctaHref?: string;
  visual?: React.ReactNode;
  fit?: ServiceFit;
  offerings: { title: string; text: string }[];
  offeringsHeading?: string;
  offeringsLede?: string;
  process?: ServiceProcessStep[];
  processHeading?: string;
  processLede?: string;
  relatedWork?: string[];
  relatedWorkHeading?: string;
  showPlans?: boolean;
  closingTitle?: string;
  closingLede?: string;
  /** Visual band background — defaults to warm wash */
  visualTone?: "warm" | "paper" | "diagram";
};

export function ServicePage({
  title,
  lede,
  eyebrow,
  cta = "Request a consultation",
  ctaHref = "/get-in-touch",
  visual,
  fit,
  offerings,
  offeringsHeading = "What you get",
  offeringsLede,
  process,
  processHeading = "How it runs",
  processLede,
  relatedWork,
  relatedWorkHeading = "Related work",
  showPlans,
  closingTitle = "Ready to talk through fit?",
  closingLede = "Tell us what you are deciding or building. We will respond with a clear recommendation.",
  visualTone = "warm",
}: Props) {
  const visualSectionClass = cn(
    "border-b border-hairline",
    visualTone === "warm" && "bg-warm/40",
    visualTone === "paper" && "bg-paper",
    visualTone === "diagram" && "bg-[linear-gradient(180deg,var(--color-paper)_0%,#f4f6fb_100%)]",
  );
  const visualPadClass = visualTone === "diagram" ? "py-12 md:py-16" : "py-10 md:py-14";
  const proof = (relatedWork ?? [])
    .map((slug) => workItems.find((item) => item.slug === slug))
    .filter((item): item is (typeof workItems)[number] => Boolean(item));

  return (
    <main id="main-content" className="pt-36 lg:pt-40">
      <section className="border-b border-hairline">
        <Container className="grid items-end gap-10 pt-10 pb-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pt-16 lg:pb-20">
          <Reveal>
            {eyebrow ? <Eyebrow className="mb-4 text-cobalt">{eyebrow}</Eyebrow> : null}
            <h1 className="font-display display-hero max-w-[16ch] text-[42px] font-medium tracking-tight text-ink sm:text-[56px] lg:text-[68px]">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex flex-col gap-6 lg:pb-1">
              <p className="max-w-[40ch] text-[16px] leading-relaxed text-neutral lg:text-[17px]">{lede}</p>
              <ButtonLink href={ctaHref} arrow className="w-fit">
                {cta}
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      {visual ? (
        <section className={visualSectionClass}>
          <Container className={cn(visualPadClass, visualTone === "diagram" && "max-w-[min(100%,56rem)]")}>
            <Reveal>
              <div className={cn(visualTone === "diagram" ? "" : "overflow-hidden")}>{visual}</div>
            </Reveal>
          </Container>
        </section>
      ) : null}

      {fit ? (
        <section className="border-b border-hairline">
          <Container className="grid gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-20">
            <Reveal>
              <p className="text-[12px] font-medium tracking-[0.14em] text-cobalt uppercase">Best when</p>
              <ul className="mt-6 space-y-4">
                {fit.bestWhen.map((item) => (
                  <li
                    key={item}
                    className="border-l border-hairline pl-4 text-[16px] leading-relaxed text-charcoal"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-[12px] font-medium tracking-[0.14em] text-muted uppercase">Not for</p>
              <ul className="mt-6 space-y-4">
                {fit.notFor.map((item) => (
                  <li
                    key={item}
                    className="border-l border-hairline pl-4 text-[16px] leading-relaxed text-neutral"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </section>
      ) : null}

      <section className="border-b border-hairline">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeader
              title={offeringsHeading}
              description={offeringsLede}
              className="mb-10 max-w-[42rem]"
            />
          </Reveal>
          <div
            className={cn(
              "grid gap-x-10 gap-y-0",
              offerings.length >= 5 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-2",
            )}
          >
            {offerings.map((o, i) => (
              <Reveal key={o.title} delay={i * 50}>
                <div className="grid grid-cols-[3rem_1fr] gap-4 border-t border-hairline py-7">
                  <span className="font-display text-[13px] tabular-nums text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[18px] font-medium text-ink md:text-[19px]">{o.title}</h3>
                    <p className="mt-2 max-w-[44ch] text-[15px] leading-relaxed text-neutral">{o.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {process && process.length > 0 ? (
        <section className="border-b border-hairline bg-paper">
          <Container className="py-16 md:py-20">
            <Reveal>
              <SectionHeader
                title={processHeading}
                description={processLede}
                className="mb-10 max-w-[40rem]"
              />
            </Reveal>
            <ol className="divide-y divide-hairline border-y border-hairline">
              {process.map((step, i) => (
                <li key={step.title}>
                  <Reveal delay={i * 45}>
                    <div className="grid gap-4 py-8 sm:grid-cols-[4.5rem_minmax(0,0.35fr)_minmax(0,0.2fr)_minmax(0,1fr)] sm:items-baseline sm:gap-8 md:py-9">
                      <span className="font-display text-[13px] tabular-nums text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-[22px] font-medium tracking-tight text-ink md:text-[24px]">
                        {step.title}
                      </h3>
                      <p className="text-[13px] tracking-[0.06em] text-cobalt uppercase">{step.duration}</p>
                      <p className="max-w-[48ch] text-[15px] leading-relaxed text-neutral md:text-[16px]">
                        {step.summary}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      ) : null}

      {proof.length > 0 ? (
        <section className="border-b border-hairline">
          <Container className="py-16 md:py-20">
            <Reveal>
              <SectionHeader title={relatedWorkHeading} className="mb-10" />
            </Reveal>
            <div className="grid gap-0 md:grid-cols-2">
              {proof.map((item, i) => (
                <Reveal key={item.slug} delay={i * 60}>
                  <Link
                    href={`/work/${item.slug}`}
                    className={`group block border-hairline py-8 transition-colors md:py-10 ${
                      i === 0 ? "md:border-r md:pr-12" : "md:pl-12"
                    } border-b md:border-b-0`}
                  >
                    <p className="text-[12px] tracking-[0.12em] text-muted uppercase">{item.industry}</p>
                    <h3 className="font-display mt-3 text-[26px] font-medium tracking-tight text-ink transition-colors group-hover:text-cobalt md:text-[30px]">
                      {item.name}
                    </h3>
                    <p className="mt-3 max-w-[40ch] text-[15px] leading-relaxed text-neutral">{item.blurb}</p>
                    <span className="mt-6 inline-flex text-[14px] font-medium text-cobalt link-underline">
                      View sample
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="bg-night text-paper">
        <Container className="relative py-16 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_100%_0%,rgba(47,91,255,0.22),transparent_55%)]"
            aria-hidden
          />
          <Reveal>
            <div className="relative max-w-[40rem]">
              <h2 className="font-display text-[32px] font-medium tracking-tight md:text-[44px]">
                {closingTitle}
              </h2>
              <p className="mt-4 max-w-[44ch] text-[16px] leading-relaxed text-white/60">{closingLede}</p>
            </div>
          </Reveal>
        </Container>
      </section>

      {showPlans ? <Plans /> : null}
    </main>
  );
}

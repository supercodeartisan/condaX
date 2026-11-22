import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { WorkScreenshot } from "@/components/work/WorkScreenshot";

const concepts = [
  {
    slug: "kite",
    name: "Kite",
    category: "AI knowledge assistant",
    blurb: "Conversation, retrieval, and cited sources in one calm workspace.",
  },
  {
    slug: "meridian",
    name: "Meridian",
    category: "Internal operations platform",
    blurb: "Queues, ownership, and status visibility without spreadsheet sprawl.",
  },
  {
    slug: "harbor",
    name: "Harbor",
    category: "Intelligent automation",
    blurb: "Classify, retrieve, and execute - with human review where judgment is required.",
  },
  {
    slug: "atlas",
    name: "Atlas",
    category: "AI enablement decision",
    blurb: "A clear adopt, build, or defer recommendation with owners and next steps.",
  },
] as const;

export function SelectedWork() {
  return (
    <Section tone="paper" className="border-y border-hairline !py-28 md:!py-36">
      <Container>
        <Reveal className="max-w-[40rem]">
          <Eyebrow>Selected concepts</Eyebrow>
          <h2 className="font-display type-h2 mt-4 text-ink">Representative product work.</h2>
          <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-neutral md:text-[17px]">
            Product demonstrations for assistants, operations software, automation, and decision
            memos. Labeled as samples until verified client case studies are published.
          </p>
        </Reveal>

        <div className="mt-16 space-y-16 md:mt-24 md:space-y-24">
          {concepts.map((concept, i) => (
            <ConceptBlock key={concept.slug} concept={concept} reverse={i % 2 === 1} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ConceptBlock({
  concept,
  reverse,
}: {
  concept: (typeof concepts)[number];
  reverse?: boolean;
}) {
  return (
    <Reveal>
      <Link
        href={`/work/${concept.slug}`}
        className="group block border-t border-hairline pt-10 md:pt-14"
      >
        <div
          className={
            reverse
              ? "grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:items-start lg:gap-12"
              : "grid gap-8 lg:grid-cols-[minmax(280px,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-12"
          }
        >
          <div className={reverse ? "lg:order-2 lg:pt-2" : "lg:pt-2"}>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-hairline bg-warm px-3 py-1 text-[11px] tracking-[0.12em] text-neutral uppercase">
                Sample
              </span>
              <span className="text-[12px] text-muted">{concept.category}</span>
            </div>
            <h3 className="font-display display-section mt-5 text-[32px] font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-cobalt sm:text-[40px] md:text-[44px]">
              {concept.name}
            </h3>
            <p className="mt-4 max-w-[36ch] text-[16px] leading-relaxed text-neutral md:text-[17px]">
              {concept.blurb}
            </p>
            <span className="mt-7 inline-flex text-[14px] font-medium text-cobalt link-underline">
              View sample
            </span>
          </div>

          <div className={reverse ? "lg:order-1 min-w-0" : "min-w-0"}>
            <div className="overflow-hidden rounded-[22px] shadow-[0_24px_60px_rgba(17,17,16,0.08)] ring-1 ring-black/[0.04] transition-transform duration-500 ease-out group-hover:scale-[1.01]">
              <WorkScreenshot slug={concept.slug} />
            </div>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

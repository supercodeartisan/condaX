import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { KiteAssistant } from "@/components/visuals/KiteAssistant";
import { MeridianOps } from "@/components/visuals/MeridianOps";
import { HarborFlow } from "@/components/visuals/HarborFlow";

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
];

export function SelectedWork() {
  return (
    <Section tone="paper" className="border-y border-hairline !py-28 md:!py-36">
      <Container>
        <Reveal className="max-w-[40rem]">
          <Eyebrow>Selected concepts</Eyebrow>
          <h2 className="font-display display-section mt-4 text-[40px] font-medium tracking-tight text-ink md:text-[52px]">
            Representative product work.
          </h2>
          <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-neutral md:text-[17px]">
            Sample product compositions for assistants, operations software, and automation. Client
            case studies will replace these when published.
          </p>
        </Reveal>

        <div className="mt-16 space-y-16 md:mt-24 md:space-y-24">
          <ConceptBlock concept={concepts[0]}>
            <KiteAssistant />
          </ConceptBlock>

          <ConceptBlock concept={concepts[1]} reverse>
            <MeridianOps />
          </ConceptBlock>

          <ConceptBlock concept={concepts[2]}>
            <HarborFlow />
          </ConceptBlock>
        </div>
      </Container>
    </Section>
  );
}

function ConceptBlock({
  concept,
  reverse,
  children,
}: {
  concept: (typeof concepts)[number];
  reverse?: boolean;
  children: React.ReactNode;
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
            <div className="overflow-hidden rounded-[22px] transition-transform duration-500 ease-out group-hover:scale-[1.01]">
              {children}
            </div>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

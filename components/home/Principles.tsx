import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ArchitectureVisual } from "@/components/visuals/ArchitectureVisual";

const principles = [
  {
    title: "Product thinking before implementation",
    text: "We clarify the job to be done before writing production code — adopt, build, or defer.",
  },
  {
    title: "Senior engineering ownership",
    text: "Clear owners. You work with practitioners who can decide and deliver.",
  },
  {
    title: "Practical AI",
    text: "Models only where they earn their place — with retrieval, evaluation, and guardrails when needed.",
  },
  {
    title: "Maintainable architecture",
    text: "Systems your operators can run after we leave. Handover is part of the engagement.",
  },
  {
    title: "Clear communication",
    text: "Visible trade-offs, and status that respects your working day.",
  },
  {
    title: "Quality-focused delivery",
    text: "Validate on real data. Prefer a bounded release that works in production over an unscoped platform.",
  },
];

export function Principles() {
  return (
    <section className="border-y border-hairline bg-paper py-28 md:py-36">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:items-start">
          <div>
            <Reveal>
              <Eyebrow>How we work</Eyebrow>
              <h2 className="font-display display-section mt-4 max-w-[12ch] text-[40px] font-medium tracking-tight text-ink md:text-[52px]">
                How we deliver.
              </h2>
              <p className="mt-5 max-w-[42ch] text-[17px] leading-relaxed text-neutral">
                Credibility comes from engineering discipline, explicit trade-offs, and structured
                handover — not from borrowed social proof.
              </p>
            </Reveal>

            <div className="mt-12">
              {principles.map((item, i) => (
                <Reveal key={item.title} delay={Math.min(i, 4) * 45}>
                  <div className="grid grid-cols-[3rem_1fr] gap-4 border-t border-hairline py-6">
                    <span className="text-[12px] tabular-nums text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[17px] font-medium text-ink md:text-[18px]">{item.title}</h3>
                      <p className="mt-2 max-w-[44ch] text-[15px] leading-relaxed text-neutral">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120} className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[22px] border border-hairline bg-surface p-2 shadow-[0_24px_70px_rgba(17,17,16,0.06)]">
              <ArchitectureVisual className="border-0 shadow-none" />
            </div>
            <p className="mt-5 text-[13px] leading-relaxed text-muted">
              Architecture stays legible — services, data, and AI layers with clear boundaries.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

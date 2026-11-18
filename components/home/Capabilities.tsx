import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const capabilities = [
  {
    title: "Customer AI",
    text: "Assistants, copilots, and grounded answers for onboarding, support, and sales — with citations and human review.",
  },
  {
    title: "Workflow automation",
    text: "Intake, routing, fulfillment, and finance paths that remove manual chasing while keeping checkpoints where judgment matters.",
  },
  {
    title: "AI engineering",
    text: "LLM-powered applications, retrieval, agents, and evals that earn their place in production systems.",
  },
  {
    title: "Digital product & SaaS",
    text: "Web applications, platforms, and custom software built for operators and customers who use them every day.",
  },
  {
    title: "Architecture & handover",
    text: "Cloud foundations, clear ownership, and structured transfer so your operators can run and extend what we ship.",
  },
];

export function Capabilities() {
  return (
    <section className="bg-warm py-28 md:py-36">
      <Container>
        <div className="grid gap-10 border-b border-hairline pb-14 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:gap-20">
          <Reveal>
            <Eyebrow>Capabilities</Eyebrow>
            <h2 className="font-display display-section mt-4 max-w-[14ch] text-[40px] font-medium tracking-tight text-ink md:text-[52px]">
              Engineering across the product lifecycle.
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="max-w-[40ch] text-[17px] leading-relaxed text-neutral lg:justify-self-end lg:pb-1">
              From customer AI and automation pilots to production systems — integrated only where outcomes are measurable.
            </p>
          </Reveal>
        </div>

        <div className="mt-4">
          {capabilities.map((item, i) => (
            <Reveal key={item.title} delay={i * 55}>
              <div className="group grid gap-3 border-b border-hairline py-9 transition-colors md:grid-cols-[5rem_minmax(0,0.95fr)_minmax(0,1.15fr)] md:items-baseline md:gap-10 md:py-11">
                <span className="font-display text-[13px] text-muted tabular-nums transition-colors group-hover:text-cobalt">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[24px] leading-snug font-medium tracking-tight text-ink md:text-[28px]">
                  {item.title}
                </h3>
                <p className="max-w-[48ch] text-[16px] leading-relaxed text-neutral md:text-[17px]">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const paths = [
  {
    index: "01",
    label: "AI for teams",
    title: "Enablement and adoption",
    description:
      "Select, deploy, and govern AI tools in the workflows people already run - with training, policy, and measurement.",
    items: [
      "Tool selection and rollout",
      "Workflow embedding",
      "Access and data governance",
      "Team enablement",
      "Adoption measurement",
      "Focused AI pilots",
    ],
    href: "/services/ai-for-teams",
    cta: "Explore AI for teams",
  },
  {
    index: "02",
    label: "Advisory",
    title: "Discovery and decisions",
    description:
      "Expert guidance before a larger build - scope, feasibility, and a written adopt, build, or defer recommendation.",
    items: [
      "Technical discovery",
      "Architecture advisory",
      "AI and automation feasibility",
      "Product strategy",
      "Engineering audits",
      "Investment clarity",
    ],
    href: "/services/advisory",
    cta: "Explore advisory",
  },
  {
    index: "03",
    label: "Custom products",
    title: "Product engineering",
    description:
      "An engineering partner for AI systems, automation, or a substantial product - with clean handover.",
    items: [
      "Customer AI and copilots",
      "Workflow automation",
      "SaaS and custom products",
      "Legacy modernization",
      "Intelligent operations systems",
      "Long-term partnerships",
    ],
    href: "/services/custom-products",
    cta: "Explore product engineering",
  },
];

export function Engagement() {
  return (
    <section className="border-y border-hairline bg-paper py-28 md:py-36">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20">
          <Reveal className="max-w-[28rem] lg:sticky lg:top-28">
            <Eyebrow>How we engage</Eyebrow>
            <h2 className="font-display type-h2 mt-4 text-ink">
              Three engagement paths. One delivery standard.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-neutral">
              Whether you need enablement, a decision, or delivery capacity, we define scope,
              governance, and handover before implementation begins.
            </p>
          </Reveal>

          <div className="divide-y divide-hairline border-y border-hairline">
            {paths.map((path, pathIndex) => (
              <Reveal key={path.title} delay={pathIndex * 80}>
                <article className="grid gap-8 py-10 sm:grid-cols-[4.5rem_1fr] sm:gap-10 md:py-12">
                  <span className="font-display text-[13px] text-muted tabular-nums">{path.index}</span>
                  <div>
                    <p className="text-[12px] font-medium tracking-[0.14em] text-cobalt uppercase">
                      {path.label}
                    </p>
                    <h3 className="font-display type-h3 mt-3 text-ink">{path.title}</h3>
                    <p className="mt-3 max-w-[44ch] text-[16px] leading-relaxed text-neutral">
                      {path.description}
                    </p>
                    <ul className="mt-7 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                      {path.items.map((item) => (
                        <li
                          key={item}
                          className="border-l border-hairline pl-3 text-[14px] leading-snug text-charcoal"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={path.href}
                      className="mt-8 inline-flex text-[14px] font-medium text-cobalt link-underline"
                    >
                      {path.cta}
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

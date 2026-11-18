import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const paths = [
  {
    label: "Advisory",
    title: "Discovery and pilots",
    description:
      "For organizations that need expert guidance before committing to a larger build - clarity first, then investment.",
    items: [
      "Technical discovery",
      "Architecture advisory",
      "AI and automation feasibility",
      "Product strategy",
      "Focused automation pilots",
      "Engineering audits",
    ],
    href: "/services/advisory",
    cta: "Explore advisory",
    tone: "light" as const,
  },
  {
    label: "Delivery",
    title: "Product engineering",
    description:
      "For organizations that need an engineering partner to deliver AI systems, automation, or a substantial product - and transfer ownership cleanly.",
    items: [
      "Customer AI and copilots",
      "Workflow automation",
      "SaaS and custom products",
      "Legacy modernization",
      "Intelligent operations systems",
      "Long-term engineering partnerships",
    ],
    href: "/services/custom-products",
    cta: "Explore product engineering",
    tone: "night" as const,
  },
];

export function Engagement() {
  return (
    <section className="bg-warm py-28 md:py-36">
      <Container>
        <Reveal className="max-w-[40rem]">
          <Eyebrow>How we engage</Eyebrow>
          <h2 className="font-display display-section mt-4 text-[40px] font-medium tracking-tight text-ink md:text-[52px]">
            Two engagement models.
            <br className="hidden sm:block" /> One delivery standard.
          </h2>
          <p className="mt-5 max-w-[44ch] text-[17px] leading-relaxed text-neutral">
            Whether you need a decision or delivery capacity, we define scope, governance, and handover
            before implementation begins.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-2 lg:gap-6">
          {paths.map((path, pathIndex) => {
            const night = path.tone === "night";
            return (
              <Reveal key={path.title} delay={pathIndex * 100}>
              <article
                className={
                  night
                    ? "flex h-full flex-col bg-night p-8 text-paper transition-transform duration-500 ease-out md:p-10 lg:translate-y-6 hover:-translate-y-0.5 lg:hover:translate-y-5"
                    : "flex h-full flex-col border border-hairline bg-paper p-8 transition-transform duration-500 ease-out md:p-10 hover:-translate-y-0.5"
                }
              >
                <p className={`eyebrow ${night ? "text-white/45" : "text-cobalt"}`}>{path.label}</p>
                <h3
                  className={`font-display display-section mt-4 text-[34px] font-medium tracking-tight md:text-[42px] ${
                    night ? "text-paper" : "text-ink"
                  }`}
                >
                  {path.title}
                </h3>
                <p
                  className={`mt-4 max-w-[40ch] text-[16px] leading-relaxed ${
                    night ? "text-white/60" : "text-neutral"
                  }`}
                >
                  {path.description}
                </p>
                <ul
                  className={`mt-8 flex-1 space-y-3 border-t pt-8 ${
                    night ? "border-white/10" : "border-hairline"
                  }`}
                >
                  {path.items.map((item) => (
                    <li
                      key={item}
                      className={`flex gap-3 text-[15px] ${night ? "text-white/80" : "text-charcoal"}`}
                    >
                      <span
                        className={`mt-2 size-1.5 shrink-0 rounded-full ${
                          night ? "bg-cobalt" : "bg-cobalt"
                        }`}
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={path.href}
                  className={`mt-10 inline-flex w-fit text-[14px] font-medium link-underline ${
                    night ? "text-white" : "text-cobalt"
                  }`}
                >
                  {path.cta}
                </Link>
              </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

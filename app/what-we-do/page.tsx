import type { Metadata } from "next";
import Link from "next/link";
import { Plans } from "@/components/Plans";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { nav } from "@/lib/site";

export const metadata: Metadata = {
  title: "What we do",
  description:
    "Condax engagement models - AI for teams, custom products, and advisory - plus product shapes we ship and how we deliver.",
};

const services = [
  {
    index: "01",
    href: "/services/ai-for-teams",
    title: "AI for teams",
    text: "Select, deploy, and govern AI tools in the workflows people already run.",
    when: "Best when tooling exists — or is about to — and adoption needs structure.",
  },
  {
    index: "02",
    href: "/services/custom-products",
    title: "Custom products",
    text: "Design and ship software around your operating model when off-the-shelf tools fall short.",
    when: "Best when the process, data, or brand experience cannot be rented.",
  },
  {
    index: "03",
    href: "/services/advisory",
    title: "Advisory",
    text: "A written recommendation: adopt a tool, build a product, or defer.",
    when: "Best when leadership is stuck between options and needs a decision memo.",
  },
];

const expectations = [
  {
    title: "Documented decisions",
    text: "Adopt, build, or defer — written down, with the trade-offs attached.",
  },
  {
    title: "In the workflow",
    text: "Tools and products land where the work already happens. Handover is part of the engagement.",
  },
  {
    title: "Careful with data",
    text: "Your tenancy, your vendors, your access rules. Model vendors are subprocessors with defined boundaries.",
  },
  {
    title: "Senior ownership",
    text: "You work with people who can decide and deliver — then leave your operators able to run the result.",
  },
];

export default function WhatWeDoPage() {
  return (
    <main id="main-content" className="pt-36 lg:pt-40">
      <section className="border-b border-hairline">
        <Container className="max-w-[1100px] pt-10 pb-14 md:pt-16 md:pb-20">
          <Reveal>
            <p className="text-center text-[12px] tracking-[0.14em] text-muted uppercase">Our approach</p>
            <h1 className="font-display type-h1 mx-auto mt-4 max-w-[20ch] text-center text-ink">
              Enable AI adoption. Build custom software when tools are not enough.
            </h1>
            <p className="mx-auto mt-6 max-w-[52ch] text-center type-body-lg text-neutral">
              <span className="font-medium text-ink">Services</span> are how we engage — advisory,
              enablement, or product engineering.{" "}
              <span className="font-medium text-ink">Solutions</span> are the product shapes we ship
              when you build. One delivery standard: scoped work, clear ownership, and a handover your
              organization can operate.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-hairline bg-paper">
        <Container className="py-16 md:py-20">
          <Reveal>
            <Eyebrow>Services</Eyebrow>
            <h2 className="font-display type-h2 mt-4 text-ink">How we engage</h2>
            <p className="mt-3 max-w-[46ch] text-[16px] leading-relaxed text-neutral">
              Pick the engagement that matches the decision in front of you. Each path has its own page
              with scope, governance, and handover detail.
            </p>
          </Reveal>

          <div className="mt-10 divide-y divide-hairline border-y border-hairline">
            {services.map((service, i) => (
              <Reveal key={service.href} delay={i * 60}>
                <Link
                  href={service.href}
                  className="group grid gap-4 py-9 transition-colors sm:grid-cols-[4.5rem_minmax(0,0.9fr)_minmax(0,1.1fr)_auto] sm:items-baseline sm:gap-8 md:py-10"
                >
                  <span className="font-display text-[13px] tabular-nums text-muted">{service.index}</span>
                  <div>
                    <h3 className="font-display type-h3 text-ink transition-colors group-hover:text-cobalt">
                      {service.title}
                    </h3>
                    <p className="mt-2 max-w-[36ch] text-[15px] leading-relaxed text-neutral">
                      {service.text}
                    </p>
                  </div>
                  <p className="max-w-[36ch] text-[14px] leading-relaxed text-muted sm:pt-1">
                    {service.when}
                  </p>
                  <span className="text-[14px] font-medium text-cobalt link-underline sm:justify-self-end">
                    Explore service
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline">
        <Container className="py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:gap-16">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <Eyebrow>Solutions</Eyebrow>
              <h2 className="font-display type-h2 mt-4 text-ink">What we build</h2>
              <p className="mt-4 max-w-[34ch] text-[16px] leading-relaxed text-neutral">
                Product shapes we design and ship — usually through custom product engineering or a
                defined automation engagement.
              </p>
              <p className="mt-4 max-w-[36ch] text-[14px] leading-relaxed text-muted">
                Not sure which shape fits? Start with{" "}
                <Link href="/services/advisory" className="font-medium text-cobalt link-underline">
                  advisory
                </Link>{" "}
                or{" "}
                <Link href="/services/ai-for-teams" className="font-medium text-cobalt link-underline">
                  AI for teams
                </Link>
                .
              </p>
            </Reveal>

            <ul className="grid gap-4 sm:grid-cols-2">
              {nav.solutions.map((solution, i) => (
                <Reveal key={solution.href} delay={i * 50}>
                  <li className="h-full">
                    <Link
                      href={solution.href}
                      className="group flex h-full flex-col rounded-[20px] border border-hairline bg-surface p-6 transition-colors hover:border-cobalt/40"
                    >
                      <h3 className="font-display text-[20px] font-medium tracking-tight text-ink transition-colors group-hover:text-cobalt">
                        {solution.title}
                      </h3>
                      <p className="mt-2 flex-1 text-[14px] leading-relaxed text-neutral">
                        {solution.description}
                      </p>
                      <span className="mt-5 text-[13px] font-medium text-cobalt link-underline">
                        View solution
                      </span>
                    </Link>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-warm/30">
        <Container className="grid gap-12 py-16 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16 md:py-20">
          <Reveal className="md:sticky md:top-28 md:self-start">
            <h2 className="font-display type-h2 text-ink">What you can expect</h2>
            <p className="mt-4 max-w-[36ch] text-[16px] leading-relaxed text-neutral">
              Clear decisions, production delivery, and a handover your operators can run — on every
              service and solution engagement.
            </p>
            <div className="mt-8">
              <ButtonLink href="/get-in-touch" arrow className="w-fit">
                Talk through fit
              </ButtonLink>
            </div>
          </Reveal>

          <div className="divide-y divide-hairline border-y border-hairline">
            {expectations.map((item, i) => (
              <Reveal key={item.title} delay={i * 45}>
                <div className="grid gap-2 py-6 sm:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] sm:gap-6">
                  <h3 className="text-[17px] font-medium text-ink">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed text-neutral">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Plans />
    </main>
  );
}
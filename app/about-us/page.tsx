import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/lib/images";
import { site, team, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Condax is an international AI and automation consultancy. Senior owners, clear adopt-versus-build decisions, and clean handover.",
};

const philosophy = [
  {
    title: "Adopt versus build",
    text: "We document trade-offs so leadership can adopt existing tools when they fit — or scope custom software when they do not.",
  },
  {
    title: "In the workflow",
    text: "Pilots and products land where work already happens. Handover is part of the engagement, not a bolt-on at the end.",
  },
  {
    title: "Production discipline",
    text: "Maintainable architecture, reliable integrations, and operational readiness after launch — the same bar whether we enable tools or ship products.",
  },
];

const collaboration = [
  {
    label: "Delivery",
    detail: "Remote by default. English is our working language.",
  },
  {
    label: "Scheduling",
    detail: "We align to your working day — whether you operate in one region or several.",
  },
  {
    label: "Footprint",
    detail: `Cross-border engagements are the default (${site.footprint}).`,
  },
];

export default function AboutPage() {
  return (
    <main id="main-content" className="pt-36 lg:pt-40">
      <section className="paddings mx-auto max-w-[1720px] pt-12">
        <Reveal>
          <Eyebrow>About {site.name}</Eyebrow>
          <h1 className="font-display type-h1 mt-4 max-w-[18ch] text-ink">
            An international AI and automation consultancy.
          </h1>
          <p className="type-body-lg mt-6 max-w-[46ch] text-neutral">
            {site.legalName} helps organizations adopt AI, automate customer and operations workflows,
            and build custom products — with senior owners and a clean handover.
          </p>
        </Reveal>
        <EditorialImage
          asset={images.about.workspaceArchitecture}
          className="mt-12 aspect-[21/9] w-full rounded-[24px] md:aspect-[2.6/1]"
          sizes="(max-width: 1720px) 100vw, 1720px"
          priority
          tone="raw"
          position="center"
        />
      </section>

      <section className="border-y border-hairline bg-warm/40">
        <Container className="grid gap-10 py-20 md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] md:gap-16 md:py-24">
          <Reveal className="md:sticky md:top-28 md:self-start">
            <Eyebrow>Mission</Eyebrow>
            <h2 className="font-display type-h2 mt-4 text-ink">Strategy through production handover.</h2>
          </Reveal>
          <Reveal delay={60}>
            <p className="type-body-lg max-w-[48ch] text-neutral">{site.description}</p>
            <p className="mt-6 max-w-[48ch] text-[16px] leading-relaxed text-neutral">
              {site.tagline}. We stay accountable from discovery through design, build, and the point
              your operators can run what we leave behind.
            </p>
            <ul className="mt-10 divide-y divide-hairline border-y border-hairline">
              {team.map(([k, v]) => (
                <li key={k} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
                  <span className="text-[14px] font-medium text-ink">{k}</span>
                  <span className="text-[15px] leading-relaxed text-neutral">{v}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="paddings mx-auto grid max-w-[1720px] gap-12 py-24 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div className="font-display type-h2 text-ink">
            <span className="block">Direct.</span>
            <span className="mt-1 block">Accountable.</span>
            <span className="block">Outcome-focused.</span>
          </div>
        </Reveal>
        <Reveal delay={45}>
          <ul className="divide-y divide-hairline border-y border-hairline">
            {values.map(([k, v]) => (
              <li key={k} className="grid grid-cols-[140px_1fr] gap-6 py-4 text-[15px]">
                <span className="font-medium text-ink">{k}</span>
                <span className="text-neutral">{v}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="border-t border-hairline bg-paper">
        <Container className="py-20 md:py-24">
          <Reveal>
            <div className="max-w-[36rem]">
              <Eyebrow>How we operate</Eyebrow>
              <h2 className="font-display type-h2 mt-4 text-ink">Practice model and engineering bar.</h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal delay={40}>
              <article className="rounded-[24px] border border-hairline bg-surface p-8 md:p-10">
                <Eyebrow>Business model</Eyebrow>
                <h3 className="font-display type-h3 mt-4 text-ink">Remote delivery consultancy.</h3>
                <p className="mt-4 max-w-[42ch] text-[16px] leading-relaxed text-neutral">
                  We engage as a senior-led practice — advisory, AI enablement, or custom product
                  engineering — with scope, governance, and handover defined before build begins.
                </p>
                <p className="mt-4 max-w-[42ch] text-[15px] leading-relaxed text-muted">
                  You work with people who can decide and deliver. We work alongside the teams who
                  will own the result after we leave.
                </p>
                <Link href="/what-we-do" className="mt-8 inline-flex text-[14px] font-medium text-cobalt link-underline">
                  Services and solutions
                </Link>
              </article>
            </Reveal>
            <Reveal delay={80}>
              <div>
                <Eyebrow>Engineering philosophy</Eyebrow>
                <h3 className="font-display type-h3 mt-4 max-w-[22ch] text-ink">
                  Useful in production, not impressive in a deck.
                </h3>
                <ul className="mt-8 space-y-8">
                  {philosophy.map((item) => (
                    <li key={item.title} className="border-l-2 border-cobalt/30 pl-5">
                      <p className="text-[15px] font-medium text-ink">{item.title}</p>
                      <p className="mt-2 max-w-[40ch] text-[15px] leading-relaxed text-neutral">
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-hairline">
        <Container className="grid gap-12 py-20 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:py-24">
          <Reveal>
            <Eyebrow>Global collaboration</Eyebrow>
            <h2 className="font-display type-h2 mt-4 text-ink">Built for distributed teams.</h2>
            <p className="mt-5 max-w-[40ch] text-[16px] leading-relaxed text-neutral">
              International companies are our default client profile. We coordinate across time zones
              without asking you to fit a single local office clock.
            </p>
          </Reveal>
          <Reveal delay={60}>
            <ol className="divide-y divide-hairline border-y border-hairline">
              {collaboration.map((row, i) => (
                <li key={row.label} className="grid gap-3 py-6 sm:grid-cols-[6rem_1fr] sm:items-baseline">
                  <span className="font-display text-[20px] tabular-nums text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[14px] font-medium tracking-[0.06em] text-cobalt uppercase">
                      {row.label}
                    </p>
                    <p className="mt-2 text-[16px] leading-relaxed text-neutral">{row.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      <section className="relative border-t border-hairline bg-night text-paper">
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden bg-[radial-gradient(ellipse_70%_60%_at_15%_80%,rgba(47,91,255,0.14),transparent_55%)]"
          aria-hidden
        />
        <Container className="relative grid gap-10 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-end md:py-28">
          <Reveal>
            <h2 className="font-display type-h2 max-w-[16ch] text-paper">
              Ready to talk through fit?
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-[36ch] text-[17px] leading-relaxed text-white/60">
              Share objectives across AI, automation, or product delivery. We will outline options,
              constraints, and a recommended next step.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <ButtonLink href="/get-in-touch" variant="inverse" arrow>
                Get in touch
              </ButtonLink>
              <Link
                href="/what-we-do"
                className="text-[14px] font-medium text-white/70 link-underline hover:text-paper"
              >
                How we engage
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
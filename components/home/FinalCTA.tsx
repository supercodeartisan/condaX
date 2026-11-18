import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="relative bg-night text-paper">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(47,91,255,0.18),transparent_60%)]"
        aria-hidden
      />
      <Container className="relative py-28 md:py-36 lg:py-44">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <Reveal>
            <p className="text-[12px] tracking-[0.14em] text-white/45 uppercase">Next step</p>
            <h2 className="font-display display-hero mt-5 max-w-[11ch] text-[48px] font-medium tracking-tight md:text-[68px] lg:text-[80px]">
              Ready to automate the next workflow?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="lg:pb-2">
              <p className="max-w-[34ch] text-[17px] leading-relaxed text-white/60 md:text-[18px]">
                Share your objectives across AI, automation, or product delivery. We will outline
                options, constraints, and a recommended next step.
              </p>
              <div className="mt-8">
                <ButtonLink href="/get-in-touch" variant="inverse" arrow>
                  Contact us
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
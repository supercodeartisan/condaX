import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeroProduct } from "@/components/visuals/HeroProduct";

export function Hero() {
  return (
    <section className="atmosphere relative pt-[120px] pb-20 md:pb-28 lg:pt-[136px] lg:pb-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 xl:gap-16">
          <div className="relative z-[1] max-w-[40rem]">
            <Eyebrow className="animate-fade-up">
              AI systems, automation, and product engineering
            </Eyebrow>

            <h1 className="font-display mt-6 flex flex-col gap-1 text-[40px] font-medium tracking-[-0.035em] text-ink sm:text-[52px] md:text-[60px] lg:text-[68px] xl:text-[74px]">
              <span
                className="animate-fade-up delay-100 block max-lg:max-w-[12ch] lg:whitespace-nowrap"
                style={{ lineHeight: 1.35 }}
              >
                From strategy
              </span>
              <span
                className="animate-fade-up delay-200 block max-lg:max-w-[14ch] lg:whitespace-nowrap"
                style={{ lineHeight: 1.35 }}
              >
                to automated operations.
              </span>
            </h1>

            <p className="animate-fade-up delay-300 mt-7 max-w-[36ch] text-[17px] leading-[1.7] text-neutral md:text-[18px]">
              We design customer AI, workflow automation, and production software for organizations that
              need durable outcomes — not prototypes.
            </p>
            <div className="animate-fade-up delay-400 mt-10 flex flex-wrap items-center gap-3">
              <ButtonLink href="/work" arrow>
                View work
              </ButtonLink>
              <ButtonLink href="/get-in-touch" variant="secondary">
                Contact us
              </ButtonLink>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] pb-20 sm:pb-16 lg:mx-0 lg:max-w-none lg:pb-10 xl:pb-6">
            <HeroProduct />
          </div>
        </div>
      </Container>
    </section>
  );
}

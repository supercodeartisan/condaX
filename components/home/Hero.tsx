import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeroProduct } from "@/components/visuals/HeroProduct";

export function Hero() {
  return (
    <section className="atmosphere relative pt-[112px] pb-16 md:pb-24 lg:pt-[128px] lg:pb-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-10 xl:gap-14">
          <div className="relative z-[1] max-w-[38rem] lg:max-w-[40rem]">
            <Eyebrow className="animate-fade-up">
              AI systems, automation, and product engineering
            </Eyebrow>

            <h1 className="font-display mt-5 text-[36px] font-medium tracking-[-0.035em] text-ink sm:text-[48px] md:text-[56px] lg:text-[60px] xl:text-[68px]">
              <span className="animate-fade-up delay-100 block leading-[1.12]">From strategy</span>
              <span className="animate-fade-up delay-200 mt-1 block leading-[1.12]">
                to automated operations.
              </span>
            </h1>

            <p className="animate-fade-up delay-300 mt-6 max-w-[38ch] text-[16px] leading-[1.7] text-neutral md:mt-7 md:text-[18px]">
              We design customer AI, workflow automation, and production software for organizations that
              need durable outcomes - not prototypes.
            </p>
            <div className="animate-fade-up delay-400 mt-8 flex flex-wrap items-center gap-3 md:mt-10">
              <ButtonLink href="/get-in-touch" arrow className="group">
                Contact us
              </ButtonLink>
              <ButtonLink href="/work" variant="secondary">
                View work
              </ButtonLink>
            </div>
          </div>

          <div className="relative w-full min-w-0 lg:justify-self-end">
            <div className="mx-auto w-full max-w-[520px] lg:ml-auto lg:mr-0 lg:max-w-[560px] xl:max-w-[600px]">
              <HeroProduct />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

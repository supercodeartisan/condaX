import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeroProduct } from "@/components/visuals/HeroProduct";

export function Hero() {
  return (
    <section className="atmosphere relative overflow-hidden pt-[112px] pb-20 md:pb-28 lg:pt-[128px] lg:pb-32">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] bg-[linear-gradient(105deg,transparent_0%,rgba(243,241,236,0.65)_28%,rgba(238,242,255,0.45)_100%)] lg:block"
        aria-hidden
      />
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12 xl:gap-16">
          <div className="relative z-[1] max-w-[38rem] lg:max-w-[40rem]">
            <Eyebrow className="animate-fade-up">
              AI systems, automation, and product engineering
            </Eyebrow>

            <h1 className="font-display type-h1 mt-5 text-ink">
              <span className="animate-fade-up delay-100 block">From strategy</span>
              <span className="animate-fade-up delay-200 mt-1 block">to automated operations.</span>
            </h1>

            <p className="animate-fade-up delay-300 type-body-lg mt-6 max-w-[42ch] text-neutral md:mt-7">
              We help organizations turn AI opportunities into production systems. From technical
              strategy and architecture to intelligent automation and custom software, Condax delivers
              solutions built for real operational environments.
            </p>
            <div className="animate-fade-up delay-400 mt-8 flex flex-wrap items-center gap-3 md:mt-10">
              <ButtonLink href="/get-in-touch" arrow className="group">
                Discuss a project
              </ButtonLink>
              <ButtonLink href="/work" variant="secondary">
                Explore our work
              </ButtonLink>
            </div>
          </div>

          <div className="relative z-[1] w-full min-w-0 pb-6 sm:pb-10 lg:justify-self-stretch lg:pb-12">
            <div className="mx-auto w-full max-w-[640px] lg:mr-0 lg:ml-auto lg:max-w-none">
              <HeroProduct />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

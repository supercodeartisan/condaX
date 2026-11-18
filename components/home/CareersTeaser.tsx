import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CareersTeaser() {
  return (
    <section className="border-y border-hairline bg-paper py-24 md:py-28">
      <Container>
        <Reveal>
          <div className="grid items-end gap-10 md:grid-cols-[1.4fr_auto] md:gap-16">
            <div>
              <p className="eyebrow">Careers</p>
              <h2 className="font-display display-section mt-4 max-w-[14ch] text-[36px] font-medium tracking-tight text-ink md:text-[48px]">
                We hire for craft and accountability.
              </h2>
              <p className="mt-5 max-w-[42ch] text-[16px] leading-relaxed text-neutral md:text-[17px]">
                Engineers, designers, and product professionals focused on reliable delivery and clear
                handover.
              </p>
            </div>
            <ButtonLink href="/careers" variant="secondary" arrow className="w-fit">
              See open roles
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

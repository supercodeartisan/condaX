import { ButtonLink } from "@/components/ui/Button";
import { plans } from "@/lib/site";

export function Plans({ id = "plans" }: { id?: string }) {
  return (
    <section
      id={id}
      className="paddings mx-auto mt-10 mb-20 flex w-full max-w-[1720px] scroll-mt-28 flex-col gap-10 border-t border-hairline pt-14 sm:mb-28 md:mt-12 md:gap-12"
    >
      <h2 className="font-display text-[32px] leading-[1.15] font-medium tracking-tight text-ink sm:text-[40px] md:text-[48px]">
        Engagement options
      </h2>
      <PlanGroup group={plans.startSmall} />
      <div className="h-px bg-hairline" />
      <PlanGroup group={plans.ongoing} />
    </section>
  );
}

function PlanGroup({
  group,
}: {
  group: { title: string; subtitle: string; items: { name: string; price: string; text: string }[] };
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div>
        <h3 className="font-display text-[28px] font-medium tracking-tight text-ink md:text-[36px]">
          {group.title}
        </h3>
        <p className="mt-3 max-w-[36ch] text-[16px] leading-relaxed text-neutral">{group.subtitle}</p>
        <ButtonLink href="/get-in-touch" variant="secondary" className="mt-6">
          Request pricing
        </ButtonLink>
      </div>
      <div className="flex flex-col gap-8">
        {group.items.map((item) => (
          <div key={item.name} className="border-t border-hairline pt-6">
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="text-[18px] font-medium text-ink">{item.name}</h4>
              <span className="rounded-full bg-warm px-2.5 py-1 text-[12px] text-muted">{item.price}</span>
            </div>
            <p className="mt-2 text-[15px] leading-relaxed text-neutral">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import { PillLink } from "@/components/Buttons";
import { plans } from "@/lib/site";

export function Plans({ id = "plans" }: { id?: string }) {
  return (
    <section id={id} className="paddings mx-auto mt-[42px] mb-20 flex w-full max-w-[1720px] scroll-mt-[80px] flex-col gap-[42px] lg:mt-[22px] lg:gap-[50px] sm:mb-[200px]">
      <h2 className="font-display text-[36px] leading-[120%] font-light sm:text-[42px] md:text-[48px] lg:text-[60px]">
        Ways to start
      </h2>
      <PlanGroup group={plans.startSmall} />
      <div className="h-px bg-px-white-12" />
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
    <div className="grid gap-8 border-t border-px-white-12 pt-10 lg:grid-cols-2">
      <div>
        <h3 className="font-display text-[32px] font-light md:text-[40px]">{group.title}</h3>
        <p className="mt-3 max-w-[36ch] text-[16px] text-px-white-48">{group.subtitle}</p>
        <PillLink href="/get-in-touch" className="mt-6">
          Get a quote
        </PillLink>
      </div>
      <div className="flex flex-col gap-8">
        {group.items.map((item) => (
          <div key={item.name}>
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="text-[18px] font-medium">{item.name}</h4>
              <span className="rounded-full bg-px-white-8 px-2.5 py-1 text-[12px] text-px-white-64">
                {item.price}
              </span>
            </div>
            <p className="mt-1 text-[15px] text-px-white-48">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

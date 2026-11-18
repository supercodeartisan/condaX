import type { Metadata } from "next";
import { Plans } from "@/components/Plans";
import { StickyCta } from "@/components/StickyCta";
import { cn } from "@/lib/cn";

export const metadata: Metadata = { title: "What we do" };

const modes = [
  {
    title: "Adopt AI tools",
    text: "Select the stack, place it in daily work, train operators, and establish governance — with deployment and policy, not license procurement alone.",
  },
  {
    title: "Build a custom product",
    text: "When a general-purpose tool cannot carry the process, we design and ship software around your workflow. Web, mobile, or internal.",
  },
  {
    title: "Embed AI in systems you already run",
    text: "Copilots, search, and automations on systems you already operate. We recommend stopping at tool adoption when that meets the requirements.",
  },
];

const impacts = [
  ["Documented decisions", "Adopt, build, or defer — written down, with the trade-offs attached."],
  ["In the workflow", "Tools and products land where the work already happens. Handover is part of the engagement."],
  ["Careful with data", "Your tenancy, your vendors, your access rules. We treat model vendors as subprocessors with defined data boundaries."],
  ["Senior ownership", "You work with people who can decide and deliver — then leave your operators able to run the result."],
];

const expertise = [
  {
    title: "AI for teams",
    items: ["Tool selection", "Rollout & training", "Policy & data"],
    extra: "Appropriate when tooling is already procured.",
  },
  {
    title: "Custom products",
    items: ["Discovery", "Design", "Engineering"],
    extra: "Appropriate when a tool cannot carry the job.",
  },
  {
    title: "In the stack you have",
    items: ["Copilots", "Internal tools", "Automations"],
    extra: "Appropriate when the systems already exist.",
  },
];

export default function WhatWeDoPage() {
  return (
    <main id="main-content" className="pt-36 lg:pt-40">
      <StickyCta href="#plans" label="View engagement options" />

      <section className="paddings mx-auto max-w-[1100px] pt-10 pb-14 md:pt-16 md:pb-20">
        <p className="text-center text-[12px] tracking-[0.14em] text-muted uppercase">Our approach</p>
        <h1 className="font-display mx-auto mt-4 max-w-[18ch] text-center text-[32px] leading-[1.15] font-light sm:text-[44px] md:text-[56px] lg:text-[64px]">
          Enable AI adoption. Build custom software when off-the-shelf tools are insufficient.
        </h1>
      </section>

      <section className="paddings mx-auto grid w-full max-w-[1720px] gap-8 border-y border-hairline py-12 sm:gap-10 md:grid-cols-3 md:py-16">
        {modes.map((m, i) => (
          <div
            key={m.title}
            className={cn(
              "md:border-hairline",
              i > 0 && "border-t border-hairline pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-8 lg:pl-10",
            )}
          >
            <div className="text-[11px] tracking-[0.14em] text-muted uppercase">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h2 className="mt-3 text-[18px] font-medium sm:text-[20px]">{m.title}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-neutral">{m.text}</p>
          </div>
        ))}
      </section>

      <section className="paddings mx-auto grid w-full max-w-[1720px] gap-10 py-14 md:gap-12 md:py-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-[32px] leading-[1.15] font-light sm:text-[40px] md:text-[48px]">
            What you can expect
          </h2>
          <p className="mt-4 max-w-[36ch] text-[15px] leading-relaxed text-neutral">
            Clear decisions, production delivery, and a handover your operators can run.
          </p>
        </div>
        <div className="divide-y divide-hairline border-y border-hairline">
          {impacts.map(([t, d]) => (
            <div key={t} className="grid gap-2 py-6 sm:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] sm:gap-6">
              <h3 className="text-[17px] font-medium text-ink">{t}</h3>
              <p className="text-[15px] leading-relaxed text-neutral">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-hairline bg-[linear-gradient(160deg,#1c1c1a_0%,#243044_100%)]">
        <div className="paddings mx-auto flex max-w-[1720px] flex-col items-start gap-8 py-16 md:flex-row md:items-end md:justify-between md:py-20">
          <div>
            <p className="text-[12px] tracking-[0.14em] text-white/45 uppercase">Focus</p>
            <div className="font-display mt-4 space-y-1 text-[40px] leading-[1.05] font-light text-white sm:text-[52px] md:text-[64px]">
              <div>Tools</div>
              <div>Products</div>
              <div>Delivery</div>
            </div>
          </div>
          <p className="max-w-[34ch] text-[15px] leading-relaxed text-white/60 md:text-right">
            Three modes of work — adopt what exists, build what must be custom, or embed AI into the
            systems you already run.
          </p>
        </div>
      </section>

      <section className="paddings mx-auto w-full max-w-[1720px] py-14 md:py-20">
        <h2 className="font-display text-[32px] font-light sm:text-[40px] md:text-[48px]">
          Where we spend the work
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="rounded-[20px] border border-hairline bg-surface p-6 shadow-[0_8px_30px_rgba(17,17,16,0.03)]"
            >
              <div className="text-[11px] tracking-[0.14em] text-muted uppercase">{item.title}</div>
              <ul className="mt-4 space-y-2">
                {item.items.map((i) => (
                  <li key={i} className="text-[18px] font-medium tracking-tight text-ink sm:text-[20px]">
                    {i}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[13px] leading-relaxed text-neutral">{item.extra}</p>
            </div>
          ))}
        </div>
      </section>

      <Plans />
    </main>
  );
}

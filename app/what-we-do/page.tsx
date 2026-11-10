import type { Metadata } from "next";
import { Plans } from "@/components/Plans";
import { StickyCta } from "@/components/StickyCta";

export const metadata: Metadata = { title: "What we do" };

const modes = [
  {
    title: "Adopt AI tools",
    text: "Choose the stack, put it in daily work, train the team, and set a policy. For companies that need to use AI well — not just buy licences.",
  },
  {
    title: "Build a custom product",
    text: "When a generic tool cannot carry the process, we design and ship software around your workflow. Web, mobile, or internal.",
  },
  {
    title: "Put AI into what you already run",
    text: "Copilots, search, and automations on systems you already pay for. We will say when the right move is to stop and use the tool as-is.",
  },
];

const impacts = [
  ["A decision, not a deck", "Buy, build, or wait — written down, with the trade-offs attached."],
  ["In the workflow", "Tools and products land where the work already happens. Handover is part of the job."],
  ["Careful with data", "Your tenancy, your vendors, your access rules. We do not treat models as a dumping ground."],
  ["Remote, worldwide", "English delivery aligned to your working day — no on-site requirement."],
];

export default function WhatWeDoPage() {
  return (
    <main id="main-content" className="pt-16 lg:pt-20">
      <StickyCta href="#plans" label="See our plans" />
      <section className="relative flex h-[566px] w-full items-end justify-center md:h-[768px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(212,255,31,0.22),transparent_42%),radial-gradient(circle_at_82%_62%,rgba(232,230,225,0.12),transparent_48%)]" />
        <div className="absolute inset-0 bg-px-black/45" />
        <h1 className="font-display paddings relative z-10 mx-auto mb-16 max-w-[1100px] text-center text-[36px] leading-[1.12] font-light sm:text-[52px] lg:text-[72px] lg:leading-[80px]">
          Help the team use AI. Or build the product when a tool is not enough.
        </h1>
      </section>

      <section className="paddings mx-auto grid w-full max-w-[1720px] gap-10 py-14 md:grid-cols-3">
        {modes.map((m) => (
          <div key={m.title}>
            <h2 className="text-[20px] font-medium">{m.title}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-px-white-64">{m.text}</p>
          </div>
        ))}
      </section>

      <section className="paddings mx-auto grid w-full max-w-[1720px] gap-8 py-10 lg:grid-cols-[1fr_auto_1.4fr]">
        <h2 className="font-display sticky top-[120px] self-start text-[36px] leading-[120%] font-light sm:text-[42px] md:text-[48px] lg:text-[60px]">
          What you can expect
        </h2>
        <div className="sticky top-[120px] hidden size-[34px] items-center justify-center rounded-full border border-px-white-24 lg:flex" aria-hidden>
          <span className="text-sm">→</span>
        </div>
        <div className="flex flex-col gap-10">
          {impacts.map(([t, d]) => (
            <div key={t}>
              <h3 className="text-[18px] font-medium">{t}</h3>
              <p className="mt-2 max-w-[46ch] text-[15px] text-px-white-48">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative my-8 flex h-[70vh] min-h-[420px] items-center justify-center overflow-hidden">
        <div className="font-display absolute inset-0 flex flex-col items-center justify-center text-[18vw] leading-[0.9] font-light text-white/90">
          <span>Tools</span>
          <span>Products</span>
          <span>Worldwide</span>
        </div>
        <svg className="relative h-[42%] w-[70%] opacity-80" viewBox="0 0 800 240" fill="none" aria-hidden>
          <defs>
            <linearGradient id="arc" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#d4ff1f" />
              <stop offset="50%" stopColor="#e8e6e1" />
              <stop offset="100%" stopColor="#6e6e68" />
            </linearGradient>
          </defs>
          <path d="M40 200 C 220 20, 580 20, 760 200" stroke="url(#arc)" strokeWidth="18" strokeLinecap="round" />
        </svg>
      </section>

      <section className="paddings mx-auto flex w-full max-w-[1720px] flex-col gap-10 py-10">
        <h2 className="font-display text-[36px] font-light md:text-[48px]">Where we spend the work</h2>
        <div className="grid gap-10 border-t border-px-white-12 pt-8 md:grid-cols-3">
          <Expertise title="AI for teams" items={["Tool selection", "Rollout & training", "Policy & data"]} extra="Start here if you already have licences." />
          <Expertise title="Custom products" items={["Discovery", "Design", "Engineering"]} extra="Start here if a tool cannot carry the job." />
          <Expertise title="In the stack you have" items={["Copilots", "Internal tools", "Automations"]} extra="Start here if the systems already exist." />
        </div>
      </section>

      <Plans />
    </main>
  );
}

function Expertise({ title, items, extra }: { title: string; items: string[]; extra: string }) {
  return (
    <div>
      <div className="mb-4 text-[12px] tracking-[0.16em] text-px-white-48 uppercase">{title}</div>
      <ul className="space-y-2 text-[20px]">{items.map((i) => <li key={i}>{i}</li>)}</ul>
      <div className="mt-4 text-px-white-32">{extra}</div>
    </div>
  );
}

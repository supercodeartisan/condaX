"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";

const steps = [
  {
    title: "Discover",
    text: "Understand the business, users, challenges, and objectives - before prescribing a stack.",
  },
  {
    title: "Define",
    text: "Establish product direction, architecture, and implementation priorities documented for leadership approval.",
  },
  {
    title: "Design",
    text: "Shape the user experience and technical solution around how operators run daily work.",
  },
  {
    title: "Build & Prove",
    text: "Develop, integrate, test, and validate on real data before calling anything complete.",
  },
  {
    title: "Evolve",
    text: "Deploy, improve, scale, and support - with ownership transferred to your operators.",
  },
];

export function Method() {
  const [active, setActive] = useState(0);

  return (
    <Section tone="paper" className="border-y border-hairline">
      <Container>
        <Reveal>
          <SectionHeader eyebrow="Method" title="From discovery to automated delivery." />
        </Reveal>

        <Reveal delay={80} className="mt-14 hidden lg:block">
          <div className="relative">
            <div className="absolute top-[22px] right-0 left-0 h-px bg-hairline" aria-hidden />
            <div
              className="absolute top-[22px] left-0 h-px bg-cobalt/50 transition-all duration-500 ease-out"
              style={{ width: `${(active / Math.max(steps.length - 1, 1)) * 100}%` }}
              aria-hidden
            />
            <ol className="grid grid-cols-5 gap-4">
              {steps.map((step, i) => (
                <li key={step.title}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className="group flex w-full flex-col items-start gap-4 text-left"
                    aria-current={i === active ? "step" : undefined}
                  >
                    <span
                      className={cn(
                        "relative z-10 flex size-11 items-center justify-center rounded-full border text-[13px] font-medium transition-[color,background-color,border-color,transform] duration-300",
                        i === active
                          ? "border-cobalt bg-cobalt text-white scale-105"
                          : i < active
                            ? "border-cobalt/40 bg-warm text-cobalt"
                            : "border-hairline bg-warm text-muted group-hover:border-cobalt/30 group-hover:text-cobalt",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "font-display text-[18px] font-medium tracking-tight transition-colors duration-300",
                        i === active ? "text-ink" : "text-neutral",
                      )}
                    >
                      {step.title}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-12 max-w-[40rem] border-t border-hairline pt-10">
            <div key={active} className="motion-panel-in">
              <h3 className="font-display text-[28px] font-medium tracking-tight text-ink">
                {steps[active].title}
              </h3>
              <p className="mt-4 text-[17px] leading-relaxed text-neutral">{steps[active].text}</p>
            </div>
          </div>
        </Reveal>

        <ol className="mt-12 space-y-0 lg:hidden" aria-label="Engagement method steps">
          {steps.map((step, i) => (
            <li key={`m-${step.title}`} className="border-t border-hairline py-7">
              <Reveal delay={i * 50}>
                <div className="flex gap-4">
                  <span className="font-display text-[13px] text-cobalt tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-[22px] font-medium tracking-tight text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-neutral">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

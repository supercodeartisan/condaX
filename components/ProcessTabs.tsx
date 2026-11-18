"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import type { ProcessStep } from "@/lib/site";

export function ProcessTabsClient({
  steps,
  heading = "Engagement process",
  lede = "A typical path from first conversation to handover. We tailor pace and depth to the decision in front of you.",
}: {
  steps: ProcessStep[];
  heading?: string;
  lede?: string;
}) {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section className="paddings mx-auto max-w-[1520px] py-16 md:py-24">
      <div className="max-w-[40rem]">
        <p className="eyebrow">How we work with you</p>
        <h2 className="font-display mt-3 text-[36px] font-medium tracking-tight text-ink md:text-[48px]">
          {heading}
        </h2>
        <p className="mt-4 text-[16px] leading-relaxed text-neutral">{lede}</p>
      </div>

      <div className="mt-12">
        <ol className="flex gap-2 overflow-x-auto pb-2 lg:grid lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))] lg:gap-3 lg:overflow-visible">
          {steps.map((s, i) => {
            const isActive = i === active;
            return (
              <li key={s.title} className="min-w-[140px] shrink-0 lg:min-w-0">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex w-full flex-col items-start gap-2 rounded-2xl border px-4 py-4 text-left transition-colors",
                    isActive
                      ? "border-cobalt/30 bg-cobalt/5"
                      : "border-hairline bg-surface hover:border-cobalt/20",
                  )}
                  aria-current={isActive ? "step" : undefined}
                >
                  <span
                    className={cn(
                      "flex size-9 items-center justify-center rounded-full text-[12px] font-medium",
                      isActive ? "bg-cobalt text-white" : "bg-warm text-neutral",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={cn("text-[14px] font-medium", isActive ? "text-ink" : "text-neutral")}>
                    {s.title}
                  </span>
                  <span className="text-[11px] text-muted">{s.duration}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="mt-10 grid gap-10 border-t border-hairline pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-[28px] font-medium tracking-tight text-ink md:text-[34px]">
              {step.title}
            </h3>
            <span className="rounded-full border border-cobalt/25 px-3 py-1 text-[11px] tracking-wide text-cobalt uppercase">
              {step.duration}
            </span>
          </div>
          <p className="mt-4 max-w-[54ch] text-[16px] leading-relaxed text-neutral">{step.summary}</p>
          <div className="mt-8">
            <h4 className="eyebrow">Outcomes</h4>
            <ul className="mt-4 space-y-3">
              {step.outcomes.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-charcoal">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cobalt" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <RoleBlock label="Condax" items={step.weDo} accent />
          <RoleBlock label="Your side" items={step.youDo} />
        </div>
      </div>
    </section>
  );
}

function RoleBlock({
  label,
  items,
  accent,
}: {
  label: string;
  items: string[];
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-6",
        accent ? "border-cobalt/20 bg-cobalt/5" : "border-hairline bg-surface",
      )}
    >
      <div className={cn("text-[12px] tracking-[0.14em] uppercase", accent ? "text-cobalt" : "text-muted")}>
        {label}
      </div>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="text-[14px] leading-relaxed text-neutral">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

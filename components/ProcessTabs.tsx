"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import type { ProcessStep } from "@/lib/site";

export function ProcessTabsClient({
  steps,
  heading = "Engagement process",
  lede = "A typical path from first conversation to handover. We tailor pace and depth to the decision in front of you — tools, a build, or a clear recommendation to wait.",
}: {
  steps: ProcessStep[];
  heading?: string;
  lede?: string;
}) {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section className="paddings mx-auto max-w-[1720px] py-16 md:py-24">
      <div className="max-w-[62ch]">
        <p className="text-[13px] tracking-[0.14em] text-px-white-48 uppercase">How we work with you</p>
        <h2 className="font-display mt-3 text-[36px] font-light md:text-[52px]">{heading}</h2>
        <p className="mt-4 text-[16px] leading-relaxed text-px-white-64">{lede}</p>
      </div>

      {/* Step rail */}
      <div className="mt-12">
        <div className="relative hidden lg:block">
          <div className="absolute top-[22px] right-0 left-0 h-px bg-px-white-12" aria-hidden />
          <div
            className="absolute top-[22px] left-0 h-px bg-px-lime/60 transition-all duration-500"
            style={{ width: `${(active / Math.max(steps.length - 1, 1)) * 100}%` }}
            aria-hidden
          />
        </div>
        <ol className="flex gap-2 overflow-x-auto pb-2 lg:grid lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))] lg:gap-0 lg:overflow-visible lg:pb-0">
          {steps.map((s, i) => {
            const isActive = i === active;
            const isPast = i < active;
            return (
              <li key={s.title} className="min-w-[148px] shrink-0 lg:min-w-0">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "group relative flex w-full flex-col items-start gap-3 rounded-2xl border px-4 py-4 text-left transition-colors duration-300 lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0 lg:pt-0 lg:pb-4",
                    isActive
                      ? "border-px-lime/40 bg-px-white-8 lg:bg-transparent"
                      : "border-px-white-12 bg-transparent hover:border-px-lime/25 lg:hover:border-transparent",
                  )}
                  aria-current={isActive ? "step" : undefined}
                >
                  <span
                    className={cn(
                      "relative z-10 flex h-11 w-11 items-center justify-center rounded-full border text-[13px] font-medium transition-colors duration-300",
                      isActive
                        ? "border-px-lime bg-px-lime text-px-ink"
                        : isPast
                          ? "border-px-lime/50 bg-px-black text-px-lime"
                          : "border-px-white-16 bg-px-black text-px-white-48 group-hover:border-px-lime/40 group-hover:text-px-lime",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "text-[15px] font-medium leading-snug transition-colors",
                      isActive ? "text-white" : "text-px-white-48 group-hover:text-px-white-80",
                    )}
                  >
                    {s.title}
                  </span>
                  <span className="text-[12px] text-px-white-32">{s.duration}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Detail panel */}
      <div className="mt-10 grid gap-10 border-t border-px-white-12 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-[28px] font-light md:text-[36px]">{step.title}</h3>
            <span className="rounded-full border border-px-lime/30 px-3 py-1 text-[12px] tracking-wide text-px-lime uppercase">
              {step.duration}
            </span>
          </div>
          <p className="mt-4 max-w-[54ch] text-[16px] leading-relaxed text-px-white-64">{step.summary}</p>

          <div className="mt-8">
            <h4 className="text-[13px] tracking-[0.14em] text-px-white-48 uppercase">Outcomes</h4>
            <ul className="mt-4 space-y-3">
              {step.outcomes.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-px-white-80">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-px-lime" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <RoleBlock label="Condax" items={step.weDo} accent />
          <RoleBlock label="Your team" items={step.youDo} />
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
    <div className={cn("rounded-[24px] border p-6", accent ? "border-px-lime/25 bg-px-white-8" : "border-px-white-12")}>
      <div
        className={cn(
          "text-[12px] tracking-[0.14em] uppercase",
          accent ? "text-px-lime" : "text-px-white-48",
        )}
      >
        {label}
      </div>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="text-[14px] leading-relaxed text-px-white-64">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

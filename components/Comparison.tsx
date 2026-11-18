"use client";

import { useState } from "react";
import { comparison } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Comparison() {
  const [active, setActive] = useState(0);
  const row = comparison[active];

  return (
    <section className="paddings mx-auto w-full max-w-[1720px] py-16">
      <h2 className="font-display mb-10 max-w-[16ch] text-[36px] leading-[120%] font-light md:text-[48px] lg:text-[60px]">
        A partner focused on the right investment
      </h2>
      <div className="flex flex-wrap gap-2 border-b border-px-white-12 pb-4">
        {comparison.map(([label], i) => (
          <button
            key={label}
            onClick={() => setActive(i)}
            className={cn(
              "rounded-full px-4 py-2 text-[14px] font-medium transition-colors",
              i === active ? "bg-px-lime text-px-ink" : "text-px-white-48 hover:text-px-lime",
            )}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-8 md:grid-cols-[auto_1fr_1fr] md:items-start">
        <div className="text-[12px] tracking-[0.16em] text-px-white-32 uppercase">Comparison</div>
        <div>
          <div className="mb-2 text-[12px] tracking-[0.14em] text-px-white-32 uppercase">Common approach</div>
          <p className="text-[20px] leading-snug text-px-white-48 md:text-[24px]">{row[1]}</p>
        </div>
        <div>
          <div className="mb-2 text-[12px] tracking-[0.14em] text-px-lime uppercase">Condax</div>
          <p className="text-[20px] leading-snug md:text-[24px]">{row[2]}</p>
        </div>
      </div>
    </section>
  );
}

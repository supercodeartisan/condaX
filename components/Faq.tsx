"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="paddings mx-auto w-full max-w-[1720px] py-20">
      <h2 className="font-display mb-10 text-[36px] leading-[120%] font-light md:text-[48px] lg:text-[60px]">
        Frequently asked questions
      </h2>
      <div className="divide-y divide-px-white-12 border-y border-px-white-12">
        {faqs.map((item, i) => {
          const expanded = open === i;
          return (
            <div key={item.q}>
              <button
                className="flex w-full items-center justify-between gap-6 py-6 text-left text-[18px] font-medium md:text-[20px]"
                aria-expanded={expanded}
                onClick={() => setOpen(expanded ? -1 : i)}
              >
                {item.q}
                <span className={cn("text-px-lime/70 transition-transform", expanded && "rotate-45 text-px-lime")}>+</span>
              </button>
              {expanded && (
                <p className="max-w-[72ch] pb-6 text-[16px] leading-relaxed text-px-white-64">{item.a}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

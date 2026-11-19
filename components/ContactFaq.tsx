"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { faqs } from "@/lib/site";

/** Lean FAQ once - on Contact only. */
export function ContactFaq() {
  const [open, setOpen] = useState(0);
  const items = faqs.slice(0, 5);

  return (
    <section className="border-t border-hairline bg-warm/40">
      <Container className="py-16 md:py-20">
        <h2 className="font-display text-[32px] font-medium tracking-tight text-ink md:text-[40px]">
          Common questions
        </h2>
        <div className="mt-8 divide-y divide-hairline border-y border-hairline">
          {items.map((item, i) => {
            const expanded = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 py-5 text-left text-[17px] font-medium text-ink md:text-[18px]"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? -1 : i)}
                >
                  {item.q}
                  <span
                    className={cn(
                      "text-muted transition-transform",
                      expanded && "rotate-45 text-cobalt",
                    )}
                  >
                    +
                  </span>
                </button>
                {expanded ? (
                  <p className="max-w-[72ch] pb-5 text-[15px] leading-relaxed text-neutral md:text-[16px]">
                    {item.a}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

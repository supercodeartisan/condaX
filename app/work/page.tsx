"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { WorkScreenshot } from "@/components/work/WorkScreenshot";
import { workFilters, workItems } from "@/lib/site";
import { cn } from "@/lib/cn";

export default function WorkPage() {
  const [filter, setFilter] = useState("All work");
  const items = useMemo(
    () => (filter === "All work" ? workItems : workItems.filter((w) => w.industry === filter)),
    [filter],
  );

  return (
    <main id="main-content" className="pt-36 lg:pt-40">
      <div className="paddings mx-auto max-w-[1720px] pt-12 pb-6">
        <h1 className="font-display text-[40px] leading-[1.1] font-light sm:text-[56px] lg:text-[80px]">
          Sample product work.
        </h1>
        <p className="mt-5 max-w-[52ch] text-[17px] text-neutral">
          Customer AI, workflow automation, and enablement concepts - each with a product UI
          screenshot. Live client case studies replace these samples when released.
        </p>
        <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
          {workFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-[14px] font-medium transition-colors",
                filter === f
                  ? "bg-cobalt text-white"
                  : "border border-hairline text-neutral hover:border-cobalt/40 hover:text-cobalt",
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="paddings mx-auto max-w-[1720px] space-y-10 pb-24">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/work/${item.slug}`}
            className="group grid items-start gap-8 border-t border-hairline pt-10 transition-colors lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
          >
            <div>
              <div className="flex flex-wrap items-center gap-3">
                {item.chip ? (
                  <span className="rounded-full bg-warm px-2.5 py-0.5 text-[11px] text-neutral uppercase tracking-wide">
                    {item.chip}
                  </span>
                ) : null}
                <span className="text-[12px] text-muted">{item.industry}</span>
              </div>
              <h2 className="font-display mt-4 text-[32px] font-medium tracking-tight transition-colors group-hover:text-cobalt md:text-[40px]">
                {item.name}
              </h2>
              <p className="mt-4 max-w-[46ch] text-[16px] leading-relaxed text-neutral">
                {item.blurb}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-hairline px-2.5 py-0.5 text-[12px] text-neutral"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="mt-7 inline-flex text-[14px] font-medium text-cobalt link-underline">
                View sample
              </span>
            </div>
            <div className="min-w-0">
              <WorkScreenshot slug={item.slug} />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

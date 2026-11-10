"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { workFilters, workItems } from "@/lib/site";
import { cn } from "@/lib/cn";

export default function WorkPage() {
  const [filter, setFilter] = useState("All work");
  const items = useMemo(
    () => (filter === "All work" ? workItems : workItems.filter((w) => w.industry === filter)),
    [filter],
  );

  return (
    <main id="main-content" className="pt-16 lg:pt-20">
      <div className="paddings mx-auto max-w-[1720px] pt-12 pb-6">
        <h1 className="font-display text-[40px] leading-[1.1] font-light sm:text-[56px] lg:text-[80px]">
          Sample work, in the shape of the offer.
        </h1>
        <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
          {workFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-[14px] font-medium",
                filter === f ? "bg-px-lime text-px-ink" : "text-px-white-48 hover:text-px-lime",
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-[1720px]">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/work/${item.slug}`}
            className="paddings group grid items-center gap-6 border-t border-px-white-12 py-8 transition-colors hover:bg-px-white-8 md:grid-cols-[180px_1fr_160px_120px_auto]"
          >
            <div>
              <div className="text-[22px] font-medium tracking-tight">{item.name}</div>
              {item.chip ? (
                <span className="mt-2 inline-flex rounded-full bg-px-white-8 px-2 py-0.5 text-[11px] text-px-white-64">
                  {item.chip}
                </span>
              ) : null}
            </div>
            <p className="max-w-[52ch] text-[15px] leading-relaxed text-px-white-64">{item.blurb}</p>
            <div className="hidden aspect-[16/10] rounded-lg bg-[#161814] md:block" />
            <div className="hidden flex-col items-end gap-1 md:flex">
              {item.tags.map((t) => (
                <span key={t} className="rounded-full border border-px-white-16 px-2.5 py-0.5 text-[12px]">
                  {t}
                </span>
              ))}
            </div>
            <span className="hidden rounded-full border border-px-white-16 px-3 py-1 text-[13px] md:inline-flex">
              See
            </span>
          </Link>
        ))}
        <p className="paddings py-10 text-[14px] text-px-white-32">
          These rows are labelled samples until live Condax case studies replace them. Structure stays.
        </p>
      </div>
    </main>
  );
}

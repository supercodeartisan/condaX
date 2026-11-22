"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { WorkScreenshot } from "@/components/work/WorkScreenshot";
import { workFilters, workItems } from "@/lib/site";
import { cn } from "@/lib/cn";

const productDemonstrations = workItems.map((w) => ({ slug: w.slug, name: w.name }));

const workTaxonomy = [
  {
    id: "demonstrations",
    label: "Product demonstrations",
    description:
      "Representative samples—Kite, Harbor, Meridian, and Atlas—showing how we design assistants, automation, operations software, and enablement programs. Not verified client case studies.",
    available: true,
  },
  {
    id: "architecture",
    label: "Technical architecture",
    description: "Deeper build narratives and system diagrams, published alongside permitted client work.",
    available: false,
  },
  {
    id: "case-studies",
    label: "Verified case studies",
    description: "Permissioned client stories replace these samples when ready to share.",
    available: false,
  },
] as const;

export default function WorkPage() {
  const [filter, setFilter] = useState("All work");
  const [demoFilter, setDemoFilter] = useState<string | "all">("all");

  const items = useMemo(() => {
    let list =
      filter === "All work" ? workItems : workItems.filter((w) => w.industry === filter);
    if (demoFilter !== "all") {
      list = list.filter((w) => w.slug === demoFilter);
    }
    return list;
  }, [filter, demoFilter]);

  return (
    <main id="main-content" className="pt-36 lg:pt-40">
      <div className="paddings mx-auto max-w-[1720px] pt-12 pb-6">
        <p className="text-[12px] font-medium tracking-[0.14em] text-cobalt uppercase">
          Work taxonomy
        </p>
        <h1 className="font-display mt-3 text-[40px] leading-[1.1] font-medium tracking-tight text-ink sm:text-[56px] lg:text-[80px]">
          Selected product work.
        </h1>
        <p className="mt-5 max-w-[52ch] text-[17px] text-neutral">
          A curated library until live client stories ship. Everything listed today is a{" "}
          <strong className="font-medium text-ink">product demonstration</strong>—representative
          concepts, not endorsements or permissioned case studies.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {workTaxonomy.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                "rounded-[20px] border p-5",
                tier.available
                  ? "border-cobalt/25 bg-paper"
                  : "border-hairline bg-warm/60 opacity-90",
              )}
            >
              <p className="text-[11px] tracking-[0.12em] text-muted uppercase">
                {tier.available ? "Available now" : "Planned"}
              </p>
              <h2 className="font-display mt-2 text-[20px] font-medium tracking-tight text-ink">
                {tier.label}
              </h2>
              <p className="mt-2 text-[14px] leading-relaxed text-neutral">{tier.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <p className="text-[13px] font-medium text-ink">Product demonstrations</p>
          <p className="mt-1 max-w-[58ch] text-[14px] text-neutral">
            Jump to a sample concept. Each demonstration links to challenge, approach, and outcome
            detail—not a named client engagement.
          </p>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
            <button
              type="button"
              onClick={() => setDemoFilter("all")}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-[14px] font-medium transition-colors",
                demoFilter === "all"
                  ? "bg-cobalt text-white"
                  : "border border-hairline text-neutral hover:border-cobalt/40 hover:text-cobalt",
              )}
            >
              All demonstrations
            </button>
            {productDemonstrations.map((demo) => (
              <button
                key={demo.slug}
                type="button"
                onClick={() => setDemoFilter(demo.slug)}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2 text-[14px] font-medium transition-colors",
                  demoFilter === demo.slug
                    ? "bg-cobalt text-white"
                    : "border border-hairline text-neutral hover:border-cobalt/40 hover:text-cobalt",
                )}
              >
                {demo.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {workFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-[14px] font-medium transition-colors",
                filter === f
                  ? "border border-cobalt bg-cobalt/10 text-cobalt"
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
                <span className="text-[12px] text-muted">Product demonstration</span>
                <span className="text-[12px] text-muted">·</span>
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
                View demonstration
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
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { InsightCard } from "@/components/InsightCard";
import { cn } from "@/lib/cn";
import { insightTopicFilters, insights } from "@/lib/site";

export function InsightsListing() {
  const featured = insights[0];
  const [topic, setTopic] = useState<(typeof insightTopicFilters)[number]>("All topics");

  const items = useMemo(
    () => (topic === "All topics" ? insights : insights.filter((i) => i.topic === topic)),
    [topic],
  );

  const list = items.filter((i) => i.slug !== featured.slug);

  return (
    <>
      <h1 className="font-display text-[40px] font-light md:text-[56px]">Insights</h1>
      <p className="mt-3 max-w-[46ch] text-[16px] text-neutral">
        Practical notes on AI adoption, workflow automation, customer-facing assistants, and
        governance — written for leaders making near-term technology decisions.
      </p>

      <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
        {insightTopicFilters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setTopic(f)}
            className={cn(
              "shrink-0 rounded-full px-4 py-2 text-[14px] font-medium transition-colors",
              topic === f
                ? "bg-cobalt text-white"
                : "border border-hairline text-neutral hover:border-cobalt/40 hover:text-cobalt",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {topic === "All topics" ? (
        <Link
          href={`/insights/${featured.slug}`}
          className="mt-12 block max-w-[820px] rounded-[24px] border border-hairline bg-surface p-8 transition-shadow hover:shadow-[0_16px_48px_rgba(17,17,16,0.06)] md:p-10"
        >
          <span className="mb-4 inline-flex items-center gap-2">
            <span className="rounded-full bg-cobalt/10 px-3 py-1 text-[12px] font-medium uppercase tracking-wide text-cobalt">
              Featured
            </span>
          </span>
          <div className="mb-4 flex flex-wrap gap-3 text-[13px] text-muted">
            <span>{featured.type}</span>
            <span className="rounded-full border border-hairline px-2.5 py-0.5">{featured.topic}</span>
            <span>{featured.date}</span>
          </div>
          <h2 className="font-display text-[28px] leading-[1.15] font-light md:text-[40px]">
            {featured.title}
          </h2>
          <p className="mt-4 text-neutral">{featured.dek}</p>
          <div className="mt-6 text-[14px]">
            {featured.author}
            <span className="block text-muted">{featured.role}</span>
          </div>
        </Link>
      ) : null}

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {(topic === "All topics" ? list : items).map((item) => (
          <InsightCard key={item.slug} item={item} showCover={false} showTopicChip />
        ))}
      </div>
    </>
  );
}

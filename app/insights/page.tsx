import type { Metadata } from "next";
import { InsightCard } from "@/components/InsightCard";
import { insights } from "@/lib/site";

export const metadata: Metadata = { title: "Insights" };

export default function InsightsPage() {
  const featured = insights[0];

  return (
    <main id="main-content" className="pt-16 lg:pt-20">
      <div className="paddings mx-auto max-w-[1720px] pt-12">
        <a href={`/insights/${featured.slug}`} className="mb-16 block max-w-[720px]">
          <div className="mb-4 flex gap-3 text-[13px] text-px-white-48">
            <span>{featured.type}</span>
            <span>{featured.topic}</span>
            <span>{featured.date}</span>
          </div>
          <h2 className="font-display text-[32px] leading-[1.15] font-light md:text-[44px]">{featured.title}</h2>
          <p className="mt-4 text-px-white-48">{featured.dek}</p>
          <div className="mt-6 text-[14px]">
            {featured.author}
            <span className="block text-px-white-48">{featured.role}</span>
          </div>
        </a>
        <h1 className="font-display text-[40px] font-light md:text-[56px]">Insights</h1>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {insights.map((item) => (
            <InsightCard key={item.slug} item={item} />
          ))}
        </div>
        <p className="py-12 text-[14px] text-px-white-32">
          Guides on tool vs build, rollout, and copilots. Swap in published Condax articles when they are ready.
        </p>
      </div>
    </main>
  );
}

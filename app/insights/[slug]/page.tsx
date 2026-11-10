import Link from "next/link";
import { notFound } from "next/navigation";
import { InsightCard } from "@/components/InsightCard";
import { insights } from "@/lib/site";

export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = insights.find((i) => i.slug === slug);
  if (!item) notFound();
  const related = insights.filter((i) => i.slug !== slug);

  return (
    <main id="main-content" className="paddings mx-auto max-w-[820px] pt-28 pb-24 lg:pt-32">
      <div className="flex gap-3 text-[13px] text-px-white-48">
        <span>{item.type}</span>
        <span>{item.topic}</span>
        <span>{item.date}</span>
      </div>
      <h1 className="font-display mt-4 text-[40px] leading-[1.12] font-light md:text-[52px]">{item.title}</h1>
      <p className="mt-6 text-[20px] text-px-white-64">{item.dek}</p>
      <div className="mt-8 border-t border-px-white-12 pt-6 text-[14px]">
        {item.author}
        <span className="block text-px-white-48">{item.role}</span>
      </div>
      <div className="mt-12 space-y-4 text-[17px] leading-[1.7] text-px-white-80">
        <p>
          Layout shell for a Condax guide. Keep the header, author block, and related footer when you
          publish the full piece.
        </p>
        <p>
          We write for a decision this quarter: buy a tool, build a product, or wait — not a cloud of
          thought leadership.
        </p>
      </div>
      <section className="mt-20">
        <h2 className="font-display mb-4 text-[28px] font-light">Related Insights</h2>
        {related.map((r) => (
          <InsightCard key={r.slug} item={r} />
        ))}
      </section>
      <Link href="/insights" className="mt-10 inline-block text-px-white-48 hover:text-px-lime">
        ← All insights
      </Link>
    </main>
  );
}

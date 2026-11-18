import Link from "next/link";
import { notFound } from "next/navigation";
import { InsightCard } from "@/components/InsightCard";
import { insightBodies } from "@/lib/insights-content";
import { insights } from "@/lib/site";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = insights.find((i) => i.slug === slug);
  if (!item) notFound();
  const body = insightBodies[slug];
  if (!body) notFound();
  const related = insights.filter((i) => i.slug !== slug);

  return (
    <main id="main-content" className="paddings mx-auto max-w-[820px] pt-40 pb-24 lg:pt-44">
      <div className="flex flex-wrap gap-3 text-[13px] text-neutral">
        <span>{item.type}</span>
        <span aria-hidden>·</span>
        <span>{item.topic}</span>
        <span aria-hidden>·</span>
        <time>{item.date}</time>
      </div>
      <h1 className="font-display mt-4 text-[40px] leading-[1.12] font-light md:text-[52px]">
        {item.title}
      </h1>
      <p className="mt-6 text-[20px] text-neutral">{item.dek}</p>
      <div className="mt-8 border-t border-hairline pt-6 text-[14px] text-ink">
        {item.author}
        <span className="block text-neutral">{item.role}</span>
      </div>
      <article className="mt-12 space-y-10 text-[17px] leading-[1.75] text-charcoal">
        {body.map((section) => (
          <section key={section.heading ?? section.paragraphs[0]?.slice(0, 24)}>
            {section.heading ? (
              <h2 className="font-display mb-4 text-[26px] font-medium tracking-tight text-ink">
                {section.heading}
              </h2>
            ) : null}
            <div className="space-y-4 text-neutral">
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </article>
      <section className="mt-20">
        <h2 className="font-display mb-4 text-[28px] font-light">Related insights</h2>
        {related.map((r) => (
          <InsightCard key={r.slug} item={r} showCover={false} />
        ))}
      </section>
      <Link href="/insights" className="mt-10 inline-block text-neutral hover:text-cobalt">
        ← All insights
      </Link>
    </main>
  );
}

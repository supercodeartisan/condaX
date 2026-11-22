import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InsightCard } from "@/components/InsightCard";
import { BackLink } from "@/components/ui/BackLink";
import { headingId } from "@/lib/heading-id";
import { insightBodies } from "@/lib/insights-content";
import { insights, site } from "@/lib/site";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = insights.find((i) => i.slug === slug);
  if (!item) {
    return { title: "Insights" };
  }
  return {
    title: item.title,
    description: item.dek,
    openGraph: {
      title: `${item.title} · ${site.name}`,
      description: item.dek,
      url: `${site.url}/insights/${item.slug}`,
      type: "article",
    },
  };
}

export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = insights.find((i) => i.slug === slug);
  if (!item) notFound();
  const body = insightBodies[slug];
  if (!body) notFound();
  const related = insights
    .filter((i) => i.slug !== slug)
    .sort((a, b) => Number(a.topic !== item.topic) - Number(b.topic !== item.topic))
    .slice(0, 3);

  const tocEntries = body.filter((section) => section.heading);
  const showToc = tocEntries.length >= 3;

  return (
    <main id="main-content" className="paddings mx-auto max-w-[820px] pt-40 pb-24 lg:pt-44">
      <BackLink href="/insights">All insights</BackLink>
      <div className="mt-8 flex flex-wrap gap-3 text-[13px] text-neutral">
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

      {showToc ? (
        <nav
          aria-label="On this page"
          className="mt-10 rounded-[16px] border border-hairline bg-paper px-5 py-4"
        >
          <p className="text-[12px] font-medium tracking-[0.12em] text-muted uppercase">
            On this page
          </p>
          <ol className="mt-3 space-y-2 text-[15px]">
            {tocEntries.map((section) => {
              const id = headingId(section.heading!);
              return (
                <li key={id}>
                  <a href={`#${id}`} className="text-cobalt link-underline">
                    {section.heading}
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>
      ) : null}

      <article className="mt-12 space-y-10 text-[17px] leading-[1.75] text-charcoal">
        {body.map((section) => (
          <section key={section.heading ?? section.paragraphs[0]?.slice(0, 24)}>
            {section.heading ? (
              <h2
                id={headingId(section.heading)}
                className="font-display mb-4 scroll-mt-32 text-[26px] font-medium tracking-tight text-ink"
              >
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
    </main>
  );
}
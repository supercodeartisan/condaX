import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { insights } from "@/lib/site";

export function InsightsPreview() {
  const items = insights.slice(0, 2);

  return (
    <section className="bg-warm py-28 md:py-36">
      <Container>
        <Reveal>
          <div className="flex flex-col justify-between gap-6 border-b border-hairline pb-10 md:flex-row md:items-end">
            <div>
              <Eyebrow>Insights</Eyebrow>
              <h2 className="font-display display-section mt-4 max-w-[16ch] text-[36px] font-medium tracking-tight text-ink md:text-[48px]">
                On AI, automation, and product decisions.
              </h2>
            </div>
            <Link href="/insights" className="text-[14px] font-medium text-cobalt link-underline">
              All insights
            </Link>
          </div>
        </Reveal>

        <div className="mt-4 grid md:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.slug} delay={i * 90}>
              <Link
                href={`/insights/${item.slug}`}
                className={`group border-hairline py-10 transition-colors md:py-12 ${
                  i === 0 ? "md:border-r md:pr-12" : "md:pl-12"
                } block border-b md:border-b-0`}
              >
                <div className="flex flex-wrap items-center gap-3 text-[12px] text-muted">
                  <span className="tracking-[0.12em] uppercase">{item.type}</span>
                  <span aria-hidden>·</span>
                  <span>{item.topic}</span>
                  {item.date ? (
                    <>
                      <span aria-hidden>·</span>
                      <time>{item.date}</time>
                    </>
                  ) : null}
                </div>
                <h3 className="font-display mt-5 text-[26px] leading-snug font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-cobalt md:text-[32px]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-[42ch] text-[15px] leading-relaxed text-neutral md:text-[16px]">
                  {item.dek}
                </p>
                <span className="mt-7 inline-flex text-[14px] font-medium text-cobalt link-underline">
                  Read article
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

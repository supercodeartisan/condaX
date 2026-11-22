import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { BackLink } from "@/components/ui/BackLink";
import { ButtonLink } from "@/components/ui/Button";
import {
  CAREERS_SLUG_REDIRECTS,
  getRole,
  hiringProcess,
  roles,
} from "@/lib/careers";
import { roleJobPostingJsonLd } from "@/lib/careers-jobposting";

export function generateStaticParams() {
  return roles.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const role = getRole(slug);
  return {
    title: role ? role.title : "Role",
    description: role?.summary,
  };
}

export default async function RolePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const redirectSlug = CAREERS_SLUG_REDIRECTS[slug];
  if (redirectSlug) redirect(`/careers/${redirectSlug}`);

  const role = getRole(slug);
  if (!role) notFound();

  const jsonLd = roleJobPostingJsonLd(role);

  const facts = [
    { label: "Team", value: role.team },
    { label: "Location", value: role.location },
    { label: "Work style", value: "Remote-first" },
    { label: "Eligible regions", value: role.eligibleRegions.join(" · ") },
    { label: "Employment", value: role.employmentTypes.join(" · ") },
    { label: "Engagement", value: role.type },
    { label: "Experience", value: role.experience },
    { label: "Reports to", value: role.reportsTo },
  ];

  return (
    <main id="main-content" className="pt-36 lg:pt-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="paddings mx-auto max-w-[920px] pt-10 pb-24 lg:pt-14">
        <BackLink href="/careers">All careers</BackLink>

        <header className="mt-10 border-b border-hairline pb-12">
          <p className="text-[12px] font-medium tracking-[0.14em] text-cobalt uppercase">
            {role.team}
          </p>
          <h1 className="font-display mt-4 text-[40px] leading-[1.1] font-medium tracking-tight text-ink md:text-[56px]">
            {role.title}
          </h1>
          <p className="mt-5 max-w-[48ch] text-[18px] leading-relaxed text-neutral">{role.summary}</p>

          <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label} className="border-t border-hairline pt-3">
                <dt className="text-[11px] tracking-[0.12em] text-muted uppercase">{fact.label}</dt>
                <dd className="mt-1.5 text-[14px] font-medium text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <ButtonLink href={`/careers/${role.slug}/apply`} arrow>
              Apply for this role
            </ButtonLink>
          </div>
        </header>

        <section className="border-b border-hairline py-12">
          <h2 className="font-display text-[28px] font-medium tracking-tight text-ink md:text-[32px]">
            About the role
          </h2>
          <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-neutral md:text-[17px]">
            {role.about.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="border-b border-hairline py-12">
          <h2 className="font-display text-[28px] font-medium tracking-tight text-ink md:text-[32px]">
            What success looks like
          </h2>
          <ul className="mt-8 space-y-0">
            {role.impact.map((item, i) => (
              <li
                key={item}
                className="grid grid-cols-[3rem_1fr] gap-4 border-t border-hairline py-5 text-[16px] leading-relaxed text-charcoal"
              >
                <span className="font-display text-[13px] tabular-nums text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-b border-hairline py-12">
          <h2 className="font-display text-[28px] font-medium tracking-tight text-ink md:text-[32px]">
            What you&apos;ll do
          </h2>
          <ul className="mt-8 space-y-0">
            {role.youWill.map((item, i) => (
              <li
                key={item}
                className="grid grid-cols-[3rem_1fr] gap-4 border-t border-hairline py-5 text-[16px] leading-relaxed text-charcoal"
              >
                <span className="font-display text-[13px] tabular-nums text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-b border-hairline py-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-[28px] font-medium tracking-tight text-ink md:text-[32px]">
                Requirements
              </h2>
              <ul className="mt-6 space-y-3">
                {role.youMight.map((item) => (
                  <li
                    key={item}
                    className="border-l border-hairline pl-4 text-[15px] leading-relaxed text-neutral"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-[28px] font-medium tracking-tight text-ink md:text-[32px]">
                Nice to have
              </h2>
              <ul className="mt-6 space-y-3">
                {role.nice.map((item) => (
                  <li
                    key={item}
                    className="border-l border-hairline pl-4 text-[15px] leading-relaxed text-neutral"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-b border-hairline py-12">
          <h2 className="font-display text-[28px] font-medium tracking-tight text-ink md:text-[32px]">
            Interview process
          </h2>
          <p className="mt-4 max-w-[48ch] text-[16px] leading-relaxed text-neutral">
            Four steps. We share the format of each conversation before it happens, and we reply
            either way.
          </p>
          <ol className="mt-8 divide-y divide-hairline border-y border-hairline">
            {hiringProcess.map((step) => (
              <li
                key={step.step}
                className="grid gap-2 py-5 sm:grid-cols-[4.5rem_minmax(0,0.4fr)_minmax(0,1fr)] sm:items-baseline sm:gap-6"
              >
                <span className="font-display text-[13px] tabular-nums text-muted">{step.step}</span>
                <div>
                  <p className="font-medium text-ink">{step.title}</p>
                  <p className="mt-1 text-[12px] tracking-[0.06em] text-cobalt uppercase">
                    {step.duration}
                  </p>
                </div>
                <p className="text-[15px] leading-relaxed text-neutral">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="pt-12">
          <h2 className="font-display text-[28px] font-medium tracking-tight text-ink md:text-[32px]">
            Ready to apply?
          </h2>
          <p className="mt-4 max-w-[48ch] text-[16px] leading-relaxed text-neutral">
            Application includes LinkedIn, location, and a few role-specific questions. We hire for
            strong technical craft and clear English communication in interviews and client delivery.
          </p>
          <p className="mt-6">
            <Link
              href={`/careers/${role.slug}/apply`}
              className="text-[15px] font-medium text-cobalt link-underline"
            >
              Continue to application
            </Link>
          </p>
        </section>
      </article>
    </main>
  );
}

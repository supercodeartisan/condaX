import type { Metadata } from "next";
import Link from "next/link";
import { StickyCta } from "@/components/StickyCta";
import { ButtonLink } from "@/components/ui/Button";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { hiringProcess, roles, whyJoin } from "@/lib/careers";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Condax hires senior engineers with over five years of production experience. Remote roles for AI enablement and custom products.",
};

export default function CareersPage() {
  return (
    <main id="main-content" className="pt-36 lg:pt-40">
      <StickyCta href="#open-roles" label="See open roles" />

      <section className="paddings mx-auto max-w-[1720px] pt-12 pb-10">
        <p className="text-[13px] tracking-[0.14em] text-muted uppercase">
          Careers · Remote · {site.footprint}
        </p>
        <h1 className="font-display mt-4 max-w-[16ch] text-[42px] leading-[1.1] font-medium tracking-tight text-ink sm:text-[56px] lg:text-[72px]">
          Deliver for global clients. Work remotely.
        </h1>
        <p className="mt-6 max-w-[48ch] text-[18px] leading-relaxed text-neutral">
          Condax hires senior engineers for AI enablement and custom products - including
          TypeScript, Java/Spring Boot, and C#/.NET - plus specialists who run deep technical
          interviews. Delivery roles require over five years of production experience. Roles are
          remote and open internationally. Strong technical craft and strong English communication
          are both required.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="#open-roles" arrow>
            Open roles
          </ButtonLink>
          <ButtonLink href="/careers/general" variant="secondary">
            General application
          </ButtonLink>
        </div>
      </section>

      <section className="paddings mx-auto max-w-[1720px] pb-4">
        <EditorialImage
          asset={images.careers.hero}
          className="aspect-[21/9] w-full rounded-[24px] md:aspect-[2.6/1]"
          sizes="(max-width: 1720px) 100vw, 1720px"
          priority
          tone="raw"
          position="center"
        />
      </section>

      <section className="paddings mx-auto max-w-[1720px] py-12 md:py-16">
        <h2 className="font-display text-[36px] font-medium tracking-tight text-ink md:text-[48px]">
          Why join
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {whyJoin.map((item) => (
            <div key={item.title} className="border-t border-hairline pt-6">
              <h3 className="text-[18px] font-medium text-ink">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="paddings mx-auto max-w-[1720px] py-12 md:py-16">
        <h2 className="font-display text-[36px] font-medium tracking-tight text-ink md:text-[48px]">
          How we hire
        </h2>
        <p className="mt-3 max-w-[52ch] text-[16px] leading-relaxed text-neutral">
          A structured process designed for senior remote candidates. Typical end-to-end timeline is
          two to four weeks. We tell you the format of each step before it happens - and we reply
          either way.
        </p>
        <ol className="mt-10 divide-y divide-hairline border-y border-hairline">
          {hiringProcess.map((s) => (
            <li
              key={s.step}
              className="grid gap-3 py-8 sm:grid-cols-[4.5rem_minmax(0,0.35fr)_minmax(0,0.25fr)_minmax(0,1fr)] sm:items-baseline sm:gap-8"
            >
              <span className="font-display text-[13px] tabular-nums text-muted">{s.step}</span>
              <h3 className="font-display text-[20px] font-medium tracking-tight text-ink md:text-[22px]">
                {s.title}
              </h3>
              <p className="text-[12px] tracking-[0.06em] text-cobalt uppercase">{s.duration}</p>
              <p className="max-w-[48ch] text-[15px] leading-relaxed text-neutral">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="open-roles" className="paddings mx-auto max-w-[1720px] scroll-mt-24 py-12 md:py-16">
        <h2 className="font-display text-[36px] font-medium tracking-tight text-ink md:text-[48px]">
          Open roles
        </h2>
        <p className="mt-3 text-[16px] text-neutral">
          {roles.length} open roles across senior delivery engineering (including Java/Spring and
          C#/.NET) and technical interviewing. Senior delivery roles require over 5 years of
          production experience. No matching role?{" "}
          <Link href="/careers/general" className="font-medium text-cobalt link-underline">
            Submit a general application
          </Link>
          .
        </p>
        <div className="mt-10 divide-y divide-hairline border-y border-hairline">
          {roles.map((role) => (
            <Link
              key={role.slug}
              href={`/careers/${role.slug}`}
              className="group grid gap-4 py-8 transition-colors md:grid-cols-[1fr_180px_auto] md:items-center"
            >
              <div>
                <div className="text-[22px] font-medium tracking-tight text-ink transition-colors group-hover:text-cobalt">
                  {role.title}
                </div>
                <p className="mt-2 max-w-[52ch] text-[15px] text-neutral">{role.summary}</p>
              </div>
              <div className="text-[13px] text-muted">
                <div>{role.team}</div>
                <div className="mt-1">{role.location}</div>
                <div className="mt-1">{role.type}</div>
              </div>
              <span className="hidden rounded-full border border-hairline px-3 py-1 text-[13px] text-charcoal md:inline-flex">
                View
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="paddings mx-auto my-10 flex max-w-[1720px] flex-col items-start justify-between gap-6 border border-hairline bg-warm/50 px-8 py-12 md:flex-row md:items-center md:rounded-[24px]">
        <div>
          <h2 className="font-display text-[32px] font-medium tracking-tight text-ink md:text-[40px]">
            No matching role?
          </h2>
          <p className="mt-2 max-w-[42ch] text-[16px] text-neutral">
            Tell us what you do well. We maintain a pipeline of qualified senior engineers for future
            engagements.
          </p>
        </div>
        <ButtonLink href="/careers/general" className="shrink-0">
          General application
        </ButtonLink>
      </section>
    </main>
  );
}

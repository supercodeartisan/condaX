import type { Metadata } from "next";
import Link from "next/link";
import { PillLink } from "@/components/Buttons";
import { StickyCta } from "@/components/StickyCta";
import { hiringProcess, roles, whyJoin } from "@/lib/careers";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <main id="main-content" className="pt-16 lg:pt-20">
      <StickyCta href="#open-roles" label="See open roles" />

      <section className="paddings mx-auto max-w-[1720px] pt-12 pb-10">
        <p className="text-[13px] tracking-[0.14em] text-px-white-48 uppercase">
          Careers · Remote · {site.footprint}
        </p>
        <h1 className="font-display mt-4 max-w-[16ch] text-[42px] leading-[1.1] font-light sm:text-[56px] lg:text-[72px]">
          Build for international clients. Work from anywhere.
        </h1>
        <p className="mt-6 max-w-[48ch] text-[18px] text-px-white-64">
          Condax hires engineers, designers, and product people for AI enablement and custom products.
          Based in the Philippines; roles are remote and open internationally. English is the working
          language.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <PillLink href="#open-roles" variant="solid">
            Open roles
          </PillLink>
          <PillLink href="/careers/general">General application</PillLink>
        </div>
      </section>

      <section className="paddings mx-auto max-w-[1720px] py-12">
        <h2 className="font-display text-[36px] font-light md:text-[48px]">Why join</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {whyJoin.map((item) => (
            <div key={item.title} className="border-t border-px-white-12 pt-6">
              <h3 className="text-[18px] font-medium">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-px-white-48">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="paddings mx-auto max-w-[1720px] py-12">
        <h2 className="font-display text-[36px] font-light md:text-[48px]">How we hire</h2>
        <p className="mt-3 max-w-[46ch] text-px-white-48">
          Usually a few conversations over two to four weeks. Your recruiter — or the hiring lead — will
          say what each step is before it happens.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {hiringProcess.map((s) => (
            <div key={s.step} className="rounded-[24px] border border-px-white-12 p-6">
              <div className="text-[12px] tracking-[0.14em] text-px-lime uppercase">{s.step}</div>
              <h3 className="mt-3 text-[20px] font-medium">{s.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-px-white-48">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="open-roles" className="paddings mx-auto max-w-[1720px] scroll-mt-24 py-12">
        <h2 className="font-display text-[36px] font-light md:text-[48px]">Open roles</h2>
        <p className="mt-3 text-px-white-48">
          Remote · worldwide. Don&apos;t see a fit?{" "}
          <Link href="/careers/general" className="text-px-lime underline underline-offset-4">
            Send a general application
          </Link>
          .
        </p>
        <div className="mt-10 divide-y divide-px-white-12 border-y border-px-white-12">
          {roles.map((role) => (
            <Link
              key={role.slug}
              href={`/careers/${role.slug}`}
              className="group grid gap-4 py-8 transition-colors hover:bg-px-white-8 md:grid-cols-[1fr_180px_auto] md:items-center"
            >
              <div>
                <div className="text-[22px] font-medium tracking-tight group-hover:text-px-lime">{role.title}</div>
                <p className="mt-2 max-w-[52ch] text-[15px] text-px-white-64">{role.summary}</p>
              </div>
              <div className="text-[13px] text-px-white-48">
                <div>{role.team}</div>
                <div className="mt-1">{role.location}</div>
                <div className="mt-1">{role.type}</div>
              </div>
              <span className="hidden rounded-full border border-px-white-16 px-3 py-1 text-[13px] md:inline-flex">
                View
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="paddings mx-auto my-10 flex max-w-[1720px] flex-col items-start justify-between gap-6 rounded-[28px] border border-px-lime/15 bg-px-white-8 px-8 py-12 md:flex-row md:items-center">
        <div>
          <h2 className="font-display text-[32px] font-light md:text-[40px]">No perfect role listed?</h2>
          <p className="mt-2 max-w-[42ch] text-px-white-48">
            Tell us what you do well. We keep a small bench of people we want to work with as client work grows.
          </p>
        </div>
        <PillLink href="/careers/general" variant="solid">
          General application
        </PillLink>
      </section>
    </main>
  );
}

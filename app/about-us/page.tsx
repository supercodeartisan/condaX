import type { Metadata } from "next";
import { PillLink } from "@/components/Buttons";
import { StickyCta } from "@/components/StickyCta";
import { team, values } from "@/lib/site";

export const metadata: Metadata = { title: "About us" };

export default function AboutPage() {
  return (
    <main id="main-content" className="pt-16 lg:pt-20">
      <StickyCta href="/careers" label="Careers" />
      <section className="paddings mx-auto max-w-[1720px] pt-12">
        <h1 className="font-display max-w-[18ch] text-[40px] leading-[1.1] font-light sm:text-[56px] lg:text-[72px]">
          An international consulting company, based in the Philippines.
        </h1>
        <p className="mt-6 max-w-[46ch] text-[18px] text-px-white-64">
          Condax Information Technology Solutions (Condax) helps clients worldwide adopt AI tools and
          build custom products. We deliver remotely, in English — scheduled to your working day.
        </p>
        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {["#1c1e16", "#2a3210", "#2a2a24"].map((bg) => (
            <div key={bg} className="aspect-[4/3] rounded-2xl" style={{ background: bg }} />
          ))}
        </div>
      </section>

      <section className="paddings mx-auto grid max-w-[1720px] gap-12 py-24 lg:grid-cols-[1fr_1.2fr]">
        <div className="font-display text-[40px] leading-[1.15] font-light md:text-[60px]">
          We are <span className="text-white">direct</span>
          <span className="mt-1 block text-px-white-48">distributed</span>
          <span className="block text-px-white-48">useful</span>
        </div>
        <ul className="divide-y divide-px-white-12 border-y border-px-white-12">
          {values.map(([k, v]) => (
            <li key={k} className="grid grid-cols-[140px_1fr] gap-6 py-4 text-[15px]">
              <span className="font-medium">{k}</span>
              <span>{v}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="paddings mx-auto max-w-[1720px] py-10">
        <h2 className="font-display text-[36px] font-light md:text-[48px]">How we work</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            [
              "Worldwide clients",
              "International work is the default. We do not treat local geography as a gate for who we serve.",
            ],
            [
              "Remote delivery",
              "Engagements run without on-site theatre. We align overlap to your working day and keep async habits sharp.",
            ],
            [
              "Handover is the point",
              "Your people should be able to run the tools or the product after we leave. We hire for that standard.",
            ],
          ].map(([t, d]) => (
            <div key={t} className="border-t border-px-white-12 pt-6">
              <h3 className="text-[20px] font-medium">{t}</h3>
              <p className="mt-3 text-px-white-48">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="paddings mx-auto max-w-[1720px] py-16">
        <h2 className="font-display text-[36px] font-light md:text-[48px]">How we deliver</h2>
        <div className="mt-8 overflow-hidden rounded-[24px] bg-[#141410]">
          <div className="flex flex-wrap gap-2 p-4">
            <span className="rounded-full bg-px-lime px-4 py-1.5 text-[14px] font-medium text-px-ink">
              Remote-first
            </span>
            <span className="rounded-full px-4 py-1.5 text-[14px] text-px-white-48">English</span>
            <span className="rounded-full px-4 py-1.5 text-[14px] text-px-white-48">Client hours</span>
            <span className="rounded-full px-4 py-1.5 text-[14px] text-px-white-48">Worldwide</span>
          </div>
          <div className="aspect-[21/9] bg-[#1c1e16]" />
          <div className="grid gap-6 p-6 md:grid-cols-2">
            <div>
              <h3 className="font-medium">We come to your clock</h3>
              <p className="mt-2 text-[14px] text-px-white-48">
                Coverage is planned around the engagement — not a single office timezone.
              </p>
            </div>
            <div>
              <h3 className="font-medium">English as the working language</h3>
              <p className="mt-2 text-[14px] text-px-white-48">
                One language across delivery and the site. Locales can follow later.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="paddings mx-auto max-w-[1720px] py-10">
        <h2 className="font-display mb-8 text-[36px] font-light md:text-[48px]">How we show up</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {team.map(([name, role]) => (
            <div key={name}>
              <div className="mb-3 aspect-[3/4] rounded-xl bg-[#161814]" />
              <div className="text-[14px] font-medium">{name}</div>
              <div className="text-[13px] text-px-white-48">{role}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="join" className="paddings mx-auto max-w-[1720px] scroll-mt-24 py-20">
        <h2 className="font-display text-[40px] font-light md:text-[56px]">Join the delivery team</h2>
        <p className="mt-3 max-w-[46ch] text-px-white-48">
          Engineers, designers, and product people — remote roles, open internationally.
        </p>
        <PillLink href="/careers" variant="solid" className="mt-8">
          See open roles
        </PillLink>
      </section>
    </main>
  );
}

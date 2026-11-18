import type { Metadata } from "next";
import { People } from "@/components/about/People";
import { StickyCta } from "@/components/StickyCta";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { images } from "@/lib/images";
import { values } from "@/lib/site";

export const metadata: Metadata = { title: "About us" };

const workflow = [
  {
    step: "01",
    title: "Discover",
    text: "Map the customer journey, systems, and constraints. Identify where AI and automation can change the work — not where a slide says they should.",
  },
  {
    step: "02",
    title: "Decide",
    text: "Adopt a tool, automate a workflow, or build a product. Trade-offs are written down so leadership can approve a clear path.",
  },
  {
    step: "03",
    title: "Design",
    text: "Shape the experience and the operating model together: human checkpoints, data boundaries, and the first release that can run in production.",
  },
  {
    step: "04",
    title: "Build & automate",
    text: "Ship iteratively — copilots, retrieval, and workflow automation with observability, evals, and owners attached from day one.",
  },
  {
    step: "05",
    title: "Prove",
    text: "Validate on live volume and real operators. Measure adoption, accuracy, and cycle time before expanding scope.",
  },
  {
    step: "06",
    title: "Hand over",
    text: "Transfer runbooks, access, and ownership. Your operators can run and extend the system — or we stay on a defined partnership.",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content" className="pt-36 lg:pt-40">
      <StickyCta href="/get-in-touch" label="Contact us" />
      <section className="paddings mx-auto max-w-[1720px] pt-12">
        <h1 className="font-display max-w-[18ch] text-[40px] leading-[1.1] font-light sm:text-[56px] lg:text-[72px]">
          An international AI and automation consultancy.
        </h1>
        <p className="mt-6 max-w-[46ch] text-[18px] text-px-white-64">
          Condax Information Technology Solutions (Condax) helps organizations adopt AI, automate
          customer and operations workflows, and build custom products — with senior owners and a clean
          handover.
        </p>
        <EditorialImage
          asset={images.about.workspaceArchitecture}
          className="mt-12 aspect-[21/9] w-full rounded-[24px] md:aspect-[2.6/1]"
          sizes="(max-width: 1720px) 100vw, 1720px"
          priority
          tone="raw"
          position="center"
        />
      </section>

      <section className="paddings mx-auto grid max-w-[1720px] gap-12 py-24 lg:grid-cols-[1fr_1.2fr]">
        <div className="font-display text-[40px] leading-[1.15] font-light text-ink md:text-[60px]">
          <span className="block">Direct.</span>
          <span className="mt-1 block">Accountable.</span>
          <span className="block">Outcome-focused.</span>
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

      <People />

      <section className="paddings mx-auto max-w-[1720px] py-10 pb-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[13px] tracking-[0.14em] text-px-white-48 uppercase">Delivery method</p>
            <h2 className="font-display mt-3 text-[36px] font-light md:text-[48px]">How we work</h2>
          </div>
          <p className="max-w-[42ch] text-[15px] leading-relaxed text-px-white-48 md:text-right">
            A structured path from discovery to handover — built for AI systems and automation that
            have to run after we leave.
          </p>
        </div>

        <div className="relative mt-14">
          <div
            className="pointer-events-none absolute top-7 right-0 left-0 hidden h-px bg-px-white-12 lg:block"
            aria-hidden
          />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {workflow.map((item) => (
              <li key={item.step} className="relative">
                <div className="relative z-[1] flex size-14 items-center justify-center rounded-full border border-px-white-16 bg-warm text-[13px] font-medium tabular-nums text-cobalt">
                  {item.step}
                </div>
                <h3 className="mt-5 text-[18px] font-medium tracking-tight">{item.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-px-white-48">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

    </main>
  );
}

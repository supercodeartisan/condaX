import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { SaaSDashboard } from "@/components/visuals/SaaSDashboard";

export const metadata: Metadata = {
  title: "Custom products",
  description:
    "Custom software from Condax when off-the-shelf tools are not enough - scoped builds, production AI, and clean handover.",
};

const scope = encodeURIComponent("A custom product");

export default function CustomProductsPage() {
  return (
    <ServicePage
      visual={<SaaSDashboard />}
      title="Software shaped around how you already work."
      lede="When a general-purpose tool is not enough, we design and build the product - web, mobile, or internal - and integrate AI only where it improves measurable outcomes."
      cta="Scope a build"
      ctaHref={`/get-in-touch?scope=${scope}`}
      showPlans
      fit={{
        bestWhen: [
          "Off-the-shelf tools cannot carry the process, data model, or brand experience.",
          "You need a scoped first release your operators can evaluate before expanding.",
          "AI belongs inside the product - copilots, search, or automation on your data.",
        ],
        notFor: [
          "License and enablement work alone - that is AI for teams.",
          "Staff augmentation without a product owner or defined release.",
          "Unscoped platform builds with no first-slice acceptance criteria.",
        ],
      }}
      offeringsHeading="What you get"
      offeringsLede="A shippable first release, production fundamentals, and handover your operators can run."
      offerings={[
        {
          title: "Discovery",
          text: "The job to be done, the data you have, and a written adopt-versus-build recommendation.",
        },
        {
          title: "Design",
          text: "Interfaces for the people who will use this every day - validated before engineering scales.",
        },
        {
          title: "Engineering",
          text: "Web, mobile, APIs, and model-backed features that must run in production.",
        },
        {
          title: "AI in the product",
          text: "Copilots, search, and automations on your data - with the same care as the rest of the stack.",
        },
        {
          title: "Launch & handover",
          text: "Docs, owners, and runbooks. We continue only if you want a clear monthly partnership.",
        },
      ]}
      processHeading="How it runs"
      processLede="From a written build decision to a first release you can evaluate - then expand only when that release earns it."
      process={[
        {
          title: "Frame",
          duration: "1-2 weeks",
          summary: "Pressure-test whether you should build at all. If a configured tool is enough, we say so in writing.",
        },
        {
          title: "Scope & design",
          duration: "2-4 weeks",
          summary: "Cut to the smallest valuable slice, lock acceptance criteria, and shape the daily experience.",
        },
        {
          title: "Build & prove",
          duration: "Weeks to months",
          summary: "Ship in the open with demos on a fixed cadence. Validate on real data before calling it done.",
        },
        {
          title: "Hand over",
          duration: "1-2 weeks",
          summary: "Transfer repos, access, and runbooks. Stay only if you want a defined partnership.",
        },
      ]}
      relatedWork={["meridian", "kite"]}
      closingTitle="Describe the workflow a tool cannot cover."
      closingLede="Open contact from the hero with custom product preselected. We outline constraints, a release slice, and commercial options."
    />
  );
}

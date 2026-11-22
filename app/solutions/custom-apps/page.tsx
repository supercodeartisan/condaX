import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { SaaSArchitecture } from "@/components/visuals/diagrams/SaaSArchitecture";

export const metadata: Metadata = {
  title: "Custom apps",
  description:
    "Customer-facing web and mobile products from Condax - scoped releases, production discipline, and AI only where it improves the experience.",
};

const scope = encodeURIComponent("A custom product");

export default function CustomAppsPage() {
  return (
    <ServicePage
      eyebrow="Solution · Customer-facing"
      visualTone="diagram"
      visual={<SaaSArchitecture className="mx-auto w-full max-w-2xl" />}
      title="Customer-facing web and mobile products."
      lede="When the application is revenue infrastructure - portals, field apps, partner surfaces - we design and ship experiences your customers use. Distinct from internal tools: brand, acquisition, and retention sit in the brief."
      cta="Scope a customer app"
      ctaHref={`/get-in-touch?scope=${scope}`}
      fit={{
        bestWhen: [
          "The product is customer or partner facing - not an internal ops console.",
          "Brand, self-serve flows, and retention matter as much as the backend.",
          "You need a scoped customer release executives can approve before a broader roadmap.",
        ],
        notFor: [
          "Internal queues and operator consoles - that is Internal tools.",
          "AI tool enablement without a product build - that is AI for teams.",
          "Engagement framing alone - start with Custom products if you need adopt-versus-build first.",
        ],
      }}
      offeringsHeading="What you get"
      offeringsLede="A customer release with production fundamentals - auth, monitoring, and handover your team can extend."
      offerings={[
        {
          title: "Product discovery",
          text: "Jobs-to-be-done for end users, competitive constraints, and a release plan leadership can approve.",
        },
        {
          title: "Experience design",
          text: "Research with customers, high-fidelity UI, and build-ready specs for web or mobile.",
        },
        {
          title: "Full-stack engineering",
          text: "Customer auth, APIs, and optional in-product AI with a production bar.",
        },
        {
          title: "Launch & handover",
          text: "Go-live checklist, support hooks, and ownership transfer - optional partnership for iteration.",
        },
      ]}
      processHeading="How it runs"
      processLede="Customer releases follow the same engineering discipline as Custom products - framed for external users and brand."
      process={[
        {
          title: "Frame",
          duration: "1-2 weeks",
          summary: "Pressure-test the customer product bet and document buy-versus-build before design spend.",
        },
        {
          title: "Define",
          duration: "2-4 weeks",
          summary: "Journeys, data model, and release-zero criteria - including where AI is in or out of v1.",
        },
        {
          title: "Build & prove",
          duration: "Weeks to months",
          summary: "Demo cadence and UAT with real customer proxies before launch communication.",
        },
        {
          title: "Launch",
          duration: "1-2 weeks",
          summary: "Production cutover, documentation, and owners who can operate and extend.",
        },
      ]}
      relatedWork={["kite", "meridian"]}
      closingTitle="When the product faces your customers."
      closingLede="Open contact from the hero with custom product preselected. We return with release scope, AI placement, and a commercial path."
    />
  );
}
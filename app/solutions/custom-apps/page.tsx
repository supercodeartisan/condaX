import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { SaaSDashboard } from "@/components/visuals/SaaSDashboard";

export const metadata: Metadata = { title: "Custom apps" };

export default function CustomAppsPage() {
  return (
    <ServicePage
      eyebrow="Solution · Customer-facing products"
      visual={<SaaSDashboard />}
      title="Web and mobile products built for your customers."
      lede="When the application is revenue infrastructure — not an internal workaround — we design, build, and ship a custom product. AI and automation appear only when they improve the customer experience with measurable outcomes."
      cta="Scope a product release"
      statsHeading="Shipped like a product, not a project"
      statsLede="Scoped releases, production discipline, and handover your client operators can extend — optional partnership for iteration after launch."
      outcomeStripHeading="Launch criteria"
      outcomeStrip={[
        { value: "Production", label: "Auth, monitoring, backups" },
        { value: "Designed", label: "Flows validated with real users" },
        { value: "Optional AI", label: "Features that earn retention" },
      ]}
      useCasesHeading="Products we deliver"
      useCasesLede="Web and mobile experiences where the brand, data, and workflow cannot be rented from a template — with customer AI only when it serves the user journey."
      useCases={[
        {
          title: "Customer portals",
          audience: "B2B & regulated markets",
          text: "Self-service accounts, documents, and status — integrated with your core systems and identity provider.",
        },
        {
          title: "Mobile field apps",
          audience: "Operators on the move",
          text: "Offline-tolerant workflows, capture, and sync — native or cross-platform when the job belongs on a phone.",
        },
        {
          title: "Embedded assistants",
          audience: "End users in-product",
          text: "Guided help and personalization on your data, with transparent limits and escalation to human support.",
        },
        {
          title: "Platform extensions",
          audience: "Ecosystem & partners",
          text: "APIs and partner surfaces that extend your product without fragmenting the core experience.",
        },
      ]}
      offeringsHeading="Delivery scope"
      offeringsLede="Integrated design and engineering from discovery through launch — same owners through UAT and go-live."
      offerings={[
        {
          title: "Product discovery",
          text: "Jobs-to-be-done, competitive constraints, and a release plan executives can approve.",
        },
        {
          title: "Experience design",
          text: "Research with your customers or operators, high-fidelity UI, and specs engineering can build against.",
        },
        {
          title: "Full-stack engineering",
          text: "Web, mobile, APIs, and model-backed features with the same production bar as the rest of the stack.",
        },
        {
          title: "Launch & partnership",
          text: "Go-live checklist, handover to your owners, or a monthly partnership for roadmap iteration.",
        },
      ]}
      processHeading="From concept to customer release"
      processLede="Aligned with our custom products engagement model — framed for customer-facing revenue software and the stakeholders who approve spend."
      process={[
        {
          title: "Frame",
          duration: "1–2 weeks",
          summary:
            "Pressure-test the product bet: market, differentiation, and whether a configured platform could suffice. We document the recommendation before build funding.",
          outcomes: ["Product thesis and success metrics", "Buy vs build memo", "Release zero scope"],
          weDo: [
            "Discovery with sponsors and customer proxies",
            "Technical feasibility and dependency scan",
            "Commercial options for fixed vs phased delivery",
          ],
          youDo: [
            "Share research, constraints, and deadlines",
            "Name decision-maker for build approval",
            "Approve frame before design spend",
          ],
        },
        {
          title: "Define",
          duration: "2–4 weeks",
          summary:
            "Flows, data model, and release zero acceptance criteria — including where AI features are in or out of v1.",
          outcomes: ["Scoped release with criteria", "Architecture and integration list", "Quoted delivery band"],
          weDo: [
            "Design and validate critical journeys",
            "Align engineering on stack and hosting",
            "Produce statement of work assumptions",
          ],
          youDo: [
            "Provide user access for research",
            "Prioritize v1 vs roadmap items",
            "Sign scope before build",
          ],
        },
        {
          title: "Build & prove",
          duration: "Weeks → months",
          summary:
            "Iterative demos, instrumented AI where scoped, and UAT against agreed criteria on real users before launch communication.",
          outcomes: ["Staging and production paths", "UAT sign-off package", "Launch readiness checklist"],
          weDo: [
            "Ship on demo cadence with clear owners",
            "Harden security, observability, and backups",
            "Support structured UAT and defect triage",
          ],
          youDo: [
            "Staff UAT with customer-facing owners",
            "Confirm go-live window and comms",
            "Accept or list blocking issues explicitly",
          ],
        },
        {
          title: "Launch & hand over",
          duration: "1–2 weeks",
          summary:
            "Production cutover, documentation, and optional partnership. Your client operators receive what they need to operate and extend.",
          outcomes: ["Handover and runbooks", "Vendor and access inventory", "Partnership proposal if desired"],
          weDo: [
            "Support launch window and hypercare",
            "Transfer repos and operational access",
            "Train admins and customer-success hooks",
          ],
          youDo: [
            "Name product, engineering, and support owners",
            "Confirm SLAs and escalation after launch",
            "Choose partnership, pause, or internal roadmap",
          ],
        },
      ]}
      showPlans
      closingTitle="When the product is the business."
      closingLede="Outline the customer problem, timeline, and constraints. We will return with release scope, AI placement, and a commercial path leadership can approve."
      closingCta="Discuss a custom app"
      stats={[
        {
          value: "Quoted",
          label: "Per product release",
          text: "Defined scope and acceptance criteria — not an open-ended build.",
        },
        {
          value: "Design + eng",
          label: "Integrated delivery",
          text: "Same practitioners from research through production hardening.",
        },
        {
          value: "Production",
          label: "Ready to run",
          text: "Launch includes access control, backups, and monitoring fundamentals.",
        },
        {
          value: "Maintainable",
          label: "Built to be owned",
          text: "Architecture and documentation your client operators can extend.",
        },
      ]}
    />
  );
}
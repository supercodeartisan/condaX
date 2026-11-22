import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { RagArchitecture } from "@/components/visuals/diagrams/RagArchitecture";

export const metadata: Metadata = { title: "Copilots & chat" };

const scope = encodeURIComponent("Copilot or customer AI");

export default function CopilotsPage() {
  return (
    <ServicePage
      eyebrow="Solution"
      visualTone="diagram"
      visual={<RagArchitecture className="mx-auto w-full" />}
      title="Assistants grounded in your organization’s data."
      lede="Customer or internal copilots on your documents, tickets, and product context - with retrieval, guardrails, and human handover security can explain."
      cta="Scope a copilot"
      ctaHref={`/get-in-touch?scope=${scope}`}
      fit={{
        bestWhen: [
          "You need answers tied to your corpus - not a generic chat box.",
          "Support, onboarding, sales, or internal search is the first job.",
          "Access rules, citations, and escalation paths matter to leadership.",
        ],
        notFor: [
          "Broad AI tool rollout for every employee - that is AI for teams.",
          "A full custom product where chat is only one feature among many.",
          "Unscoped “enterprise AI” with no named workflow or corpus.",
        ],
      }}
      offeringsHeading="What we build"
      offeringsLede="Grounding, guardrails, and workflow embedding - model logos matter less than production fit."
      offerings={[
        {
          title: "Retrieval & corpus",
          text: "Chunking, metadata, and refresh so answers stay current on systems you already operate.",
        },
        {
          title: "Access & guardrails",
          text: "Role-aware retrieval, refusal rules, PII handling, and logs leadership can review.",
        },
        {
          title: "Workflow embedding",
          text: "Inside helpdesk, CRM, or internal tools - not a tab people forget to open.",
        },
        {
          title: "Evals & handover",
          text: "Test sets on real questions and documentation so operators can tune after launch.",
        },
      ]}
      processHeading="How it runs"
      processLede="One workflow, one corpus, measurable success - then expand only if the pilot earns it."
      process={[
        {
          title: "Frame",
          duration: "1 week",
          summary: "Name the workflow, corpus, success bar, and refusal policy before model selection.",
        },
        {
          title: "Ground",
          duration: "1-2 weeks",
          summary: "Index approved data, wire access rules, and stand up a thin pilot surface.",
        },
        {
          title: "Pilot",
          duration: "2-4 weeks",
          summary: "Named operators use it on live work. We review logs and cut paths that miss the bar.",
        },
        {
          title: "Operate",
          duration: "1-2 weeks",
          summary: "Hand over runbooks, eval harness, and ownership inside your organization.",
        },
      ]}
      relatedWork={["kite", "atlas"]}
      closingTitle="Start with one workflow and one corpus."
      closingLede="Open contact from the hero with copilot interest preselected. We propose pilot scope, eval approach, and a timeline band."
    />
  );
}
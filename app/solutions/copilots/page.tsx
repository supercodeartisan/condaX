import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { BrowserFrame } from "@/components/visuals/BrowserFrame";
import { KiteAssistant } from "@/components/visuals/KiteAssistant";

export const metadata: Metadata = { title: "Copilots & chat" };

export default function CopilotsPage() {
  return (
    <ServicePage
      eyebrow="Solution · Customer & internal AI"
      visual={
        <BrowserFrame title="Copilot" url="assistant.yourco.com / support">
          <KiteAssistant className="rounded-none border-0 shadow-none" />
        </BrowserFrame>
      }
      title="Assistants grounded in your organization’s data."
      lede="Customer or internal copilots on your documents, tickets, and product context - retrieval, guardrails, and human handover you can explain to security and leadership."
      cta="Scope a copilot pilot"
      statsHeading="Designed for production answers"
      statsLede="Not a branded chat box. The assistant is only as good as the corpus, access rules, and the workflow it sits inside."
      outcomeStripHeading="Typical outcomes"
      outcomeStrip={[
        { value: "Faster", label: "First-response time on known topics" },
        { value: "Cited", label: "Answers tied to source documents" },
        { value: "Bounded", label: "Clear refusal and escalation paths" },
      ]}
      useCasesHeading="Copilots that earn trust"
      useCasesLede="We start with one workflow - support, onboarding, sales enablement, or internal search - and expand only after operators trust the first release."
      useCases={[
        {
          title: "Support deflection with citations",
          audience: "Customer operations",
          text: "Grounded replies on help center and ticket history, with escalation when confidence is low or policy blocks an answer.",
        },
        {
          title: "Internal knowledge search",
          audience: "Practitioners & operators",
          text: "Search across wiki, policies, and code with the same access boundaries people already have - not a dump of everything into one prompt.",
        },
        {
          title: "Sales and onboarding assistants",
          audience: "Revenue & success",
          text: "Product answers and guided flows on your collateral, with CRM context where appropriate and a human path for exceptions.",
        },
        {
          title: "Engineering and ops copilots",
          audience: "Technical operators",
          text: "Runbooks, incident context, and repository-aware assistance - scoped corpora and audit logs for every response.",
        },
      ]}
      offeringsHeading="What we build"
      offeringsLede="AI engineering alongside integration - model choice matters less than grounding, evaluation, and who may see what."
      offerings={[
        {
          title: "Retrieval & corpus design",
          text: "Chunking, metadata, and refresh so answers stay current - tied to the systems you already operate.",
        },
        {
          title: "Access & guardrails",
          text: "Role-aware retrieval, refusal rules, PII handling, and logging leadership can review.",
        },
        {
          title: "Workflow embedding",
          text: "Copilot inside helpdesk, CRM, or internal tools - not a separate tab people forget to open.",
        },
        {
          title: "Evals & handover",
          text: "Test sets on real questions, observable quality, and documentation so your operators can tune prompts after launch.",
        },
      ]}
      processHeading="From corpus to pilot"
      processLede="A short path to a copilot your client stakeholders can approve - scoped data, measurable success, and operators named before go-live."
      process={[
        {
          title: "Frame",
          duration: "1 week",
          summary:
            "Name the workflow, the corpus, and what “good” looks like. We document risks - hallucination, access leakage, and vendor constraints - before model selection.",
          outcomes: ["Success criteria and refusal policy", "Data inventory and retention rules", "Buy vs build on assistant shell"],
          weDo: [
            "Map sources, auth, and refresh cadence",
            "Draft guardrails and escalation triggers",
            "Recommend stack and hosting posture",
          ],
          youDo: [
            "Introduce owners of the target workflow",
            "Approve corpora and red lines for the pilot",
            "Name security and legal reviewers early",
          ],
        },
        {
          title: "Ground",
          duration: "1-2 weeks",
          summary:
            "Build retrieval on approved data, wire access rules, and stand up a thin UI or channel integration for a narrow audience.",
          outcomes: ["Indexed corpus with metadata", "Role-scoped retrieval paths", "Baseline eval set from real tickets or FAQs"],
          weDo: [
            "Implement ingestion and chunking",
            "Connect identity and document permissions",
            "Run offline evals before user-facing pilot",
          ],
          youDo: [
            "Provide sample content and exemplar questions",
            "Validate access mirrors production roles",
            "Approve pilot audience size",
          ],
        },
        {
          title: "Pilot",
          duration: "2-4 weeks",
          summary:
            "Named operators use the assistant on live work. We coach in the workflow, review logs, and cut paths that do not meet the success criteria.",
          outcomes: ["Usage and quality metrics", "Refined prompts and retrieval", "Escalation playbook"],
          weDo: [
            "Monitor answers, citations, and handovers",
            "Iterate retrieval and system prompts",
            "Weekly readout to sponsors",
          ],
          youDo: [
            "Assign operators and feedback channel",
            "Route edge cases to humans quickly",
            "Decide expand, pause, or stop",
          ],
        },
        {
          title: "Operate",
          duration: "1-2 weeks",
          summary:
            "Handover with runbooks, eval harness, and ownership inside your organization. We stay only if you want ongoing tuning.",
          outcomes: ["Operator documentation", "Log and eval access", "Optional partnership for expansion"],
          weDo: [
            "Transfer configs, secrets process, and dashboards",
            "Train operators on tuning boundaries",
            "Close access that is no longer needed",
          ],
          youDo: [
            "Name owners for corpus refresh and policy",
            "Accept handover and incident routing",
            "Plan next workflow or corpus only if pilot earned it",
          ],
        },
      ]}
      showPlans
      closingTitle="Start with one workflow, one corpus."
      closingLede="Tell us where answers break down today - support queue, internal search, or customer onboarding. We will propose a pilot scope, eval approach, and timeline band."
      closingCta="Discuss a copilot pilot"
      stats={[
        {
          value: "Grounded",
          label: "Your data, not generic chat",
          text: "Value comes from corpus design, retrieval, and workflow - not the model logo on the login screen.",
        },
        {
          value: "Scoped",
          label: "One job first",
          text: "Support, sales, or internal search - not organization-wide AI deployment by default.",
        },
        {
          value: "Observable",
          label: "Logs you can explain",
          text: "What it answered, from which source, and who reviewed escalation.",
        },
        {
          value: "Handover",
          label: "Operators can run it",
          text: "Eval sets, guardrails, and documentation - we do not leave an opaque black box.",
        },
      ]}
    />
  );
}
import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { BrowserFrame } from "@/components/visuals/BrowserFrame";
import { HarborFlow } from "@/components/visuals/HarborFlow";

export const metadata: Metadata = { title: "Automations" };

export default function AutomationsPage() {
  return (
    <ServicePage
      eyebrow="Solution · Workflow automation"
      visual={
        <BrowserFrame title="Automations" url="ops.yourco.com / workflows">
          <HarborFlow className="rounded-none border-0 shadow-none" />
        </BrowserFrame>
      }
      title="Automate repeatable work currently handled by email."
      lede="We connect the tools you already operate — and add AI where a person was only copying, routing, classifying, or summarizing. Checkpoints remain wherever judgment is required."
      cta="Chart an automation path"
      statsHeading="Automation with accountability"
      statsLede="Visible runs, named owners, and logs your organization can audit — not opaque scripts that only consultants understand."
      outcomeStripHeading="Results operators notice"
      outcomeStrip={[
        { value: "Hours back", label: "Less manual routing and chase" },
        { value: "Fewer errors", label: "Consistent extraction and filing" },
        { value: "Still human", label: "Review gates where policy demands" },
      ]}
      useCasesHeading="Workflows we automate"
      useCasesLede="Intelligent automation across intake, document flow, and customer operations — starting with one high-volume path before broadening connectors."
      useCases={[
        {
          title: "Ticket and case routing",
          audience: "Support & operations",
          text: "Classify, assign, and notify from helpdesk or CRM events — with AI drafts only where templates already exist.",
        },
        {
          title: "Document intake",
          audience: "Back office",
          text: "Extract fields, file to storage, and trigger downstream systems with human approval on low-confidence reads.",
        },
        {
          title: "Order and fulfillment handoffs",
          audience: "Revenue operations",
          text: "Status sync between sales, ops, and finance tools — exceptions surfaced instead of buried in email.",
        },
        {
          title: "Internal approvals",
          audience: "Cross-functional stakeholders",
          text: "Structured requests with reminders and audit trail; automation moves data, people still decide at defined gates.",
        },
      ]}
      offeringsHeading="What we implement"
      offeringsLede="Integration-first engineering with AI steps inside the flow — not a separate chatbot on the side."
      offerings={[
        {
          title: "Stack mapping",
          text: "Inventory triggers, APIs, and ownership before writing automation — new SaaS only when the workflow cannot live in current tools.",
        },
        {
          title: "Orchestration",
          text: "Durable workflows with retries, idempotency, and dead-letter handling operators can see.",
        },
        {
          title: "AI classification & extraction",
          text: "Structured outputs with confidence thresholds and fallback to manual review queues.",
        },
        {
          title: "Runbooks & extension",
          text: "Documentation and patterns so practitioners can add steps after handover without reverse-engineering scripts.",
        },
      ]}
      processHeading="From email loop to owned workflow"
      processLede="Prove one path end-to-end, measure time saved and error rate, then expand connectors with the same observability standards."
      process={[
        {
          title: "Chart",
          duration: "1 week",
          summary:
            "Trace the current loop — who touches it, which systems, where it breaks — and pick one automation candidate with measurable ROI.",
          outcomes: ["Current-state diagram", "Candidate workflow and metrics", "Risk and compliance notes"],
          weDo: [
            "Interview operators and review sample items",
            "Estimate volume and failure modes",
            "Propose build vs iPaaS vs hybrid",
          ],
          youDo: [
            "Grant read access to relevant systems",
            "Confirm policies on data movement",
            "Sponsor a single pilot workflow",
          ],
        },
        {
          title: "Connect",
          duration: "1–3 weeks",
          summary:
            "Wire authentication, webhooks or polling, and sandbox paths. AI steps run only with logging and test fixtures on historical samples.",
          outcomes: ["Integrated dev/staging paths", "Test harness on sample payloads", "Alerting on failures"],
          weDo: [
            "Implement connectors and secret handling",
            "Build AI steps with evaluation on samples",
            "Define rollback and pause switches",
          ],
          youDo: [
            "Provision service accounts and approvals",
            "Provide anonymized historical data",
            "Review AI output quality on samples",
          ],
        },
        {
          title: "Pilot",
          duration: "2–4 weeks",
          summary:
            "Production traffic on the chosen path with side-by-side comparison to the manual process where safe.",
          outcomes: ["Time and error metrics", "Tuned thresholds and routing rules", "Operator feedback incorporated"],
          weDo: [
            "Monitor runs and tune automation",
            "Weekly metrics readout",
            "Harden error notifications",
          ],
          youDo: [
            "Assign operators to monitor queues",
            "Escalate policy edge cases quickly",
            "Approve broaden or rollback",
          ],
        },
        {
          title: "Operate",
          duration: "1 week",
          summary:
            "Transfer ownership, dashboards, and change process. Your practitioners extend flows; we remain optional for new connectors.",
          outcomes: ["Runbooks and ownership map", "Dashboard for runs and failures", "Backlog for phase two"],
          weDo: [
            "Document each step and dependency",
            "Train maintainers on safe changes",
            "Hand off alerting and on-call basics",
          ],
          youDo: [
            "Name owners for each integration",
            "Accept monitoring and access model",
            "Prioritize next workflows from backlog",
          ],
        },
      ]}
      showPlans
      closingTitle="Pick one loop that costs you hours every week."
      closingLede="Describe the handoff that still runs on email or copy-paste. We will map tools, propose checkpoints, and quote a pilot automation with clear metrics."
      closingCta="Plan workflow automation"
      stats={[
        {
          value: "Existing stack",
          label: "Start with what you operate",
          text: "New software only when the workflow cannot live in current tools.",
        },
        {
          value: "Checkpoints",
          label: "Judgment where required",
          text: "Automation accelerates work; it does not remove accountable review.",
        },
        {
          value: "Visible",
          label: "Runs you can inspect",
          text: "Logs, owners, and pause controls — not hidden cron jobs.",
        },
        {
          value: "Owned",
          label: "Practitioners can extend",
          text: "Handover includes patterns for adding steps safely after we leave.",
        },
      ]}
    />
  );
}
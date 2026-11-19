import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { BrowserFrame } from "@/components/visuals/BrowserFrame";
import { HarborFlow } from "@/components/visuals/HarborFlow";

export const metadata: Metadata = { title: "Automations" };

const scope = encodeURIComponent("Workflow automation & internal tools");

export default function AutomationsPage() {
  return (
    <ServicePage
      eyebrow="Solution"
      visual={
        <BrowserFrame os="dark" title="Automations" url="ops.yourco.com / workflows">
          <HarborFlow className="rounded-none border-0 shadow-none" />
        </BrowserFrame>
      }
      title="Automate repeatable work currently handled by email."
      lede="Connect the tools you already operate - and add AI where people were only copying, routing, classifying, or summarizing. Checkpoints stay where judgment is required."
      cta="Chart an automation"
      ctaHref={`/get-in-touch?scope=${scope}`}
      fit={{
        bestWhen: [
          "A high-volume loop still runs on email, copy-paste, or chase.",
          "You can name one path with measurable time or error cost.",
          "Human review gates must remain visible and auditable.",
        ],
        notFor: [
          "Replacing the entire ops stack with a new internal product - see Internal tools.",
          "Customer-facing product builds - see Custom apps.",
          "Opaque scripts with no owners, logs, or pause controls.",
        ],
      }}
      offeringsHeading="What we implement"
      offeringsLede="Integration-first engineering with AI steps inside the flow - not a chatbot on the side."
      offerings={[
        {
          title: "Stack mapping",
          text: "Inventory triggers, APIs, and ownership before writing automation.",
        },
        {
          title: "Orchestration",
          text: "Durable workflows with retries, idempotency, and dead-letter handling operators can see.",
        },
        {
          title: "AI classify & extract",
          text: "Structured outputs with confidence thresholds and fallback to manual review.",
        },
        {
          title: "Runbooks",
          text: "Patterns so practitioners can extend steps after handover without reverse-engineering scripts.",
        },
      ]}
      processHeading="How it runs"
      processLede="Prove one path end-to-end, measure results, then expand connectors with the same observability."
      process={[
        {
          title: "Chart",
          duration: "1 week",
          summary: "Trace the current loop and pick one automation candidate with measurable ROI.",
        },
        {
          title: "Connect",
          duration: "1-3 weeks",
          summary: "Wire auth, sandbox paths, and AI steps with logging on historical samples.",
        },
        {
          title: "Pilot",
          duration: "2-4 weeks",
          summary: "Production traffic on the chosen path with side-by-side comparison where safe.",
        },
        {
          title: "Operate",
          duration: "1 week",
          summary: "Transfer ownership, dashboards, and change process to your practitioners.",
        },
      ]}
      relatedWork={["harbor", "meridian"]}
      closingTitle="Pick one loop that costs hours every week."
      closingLede="Open contact from the hero with automation interest preselected. We map tools, checkpoints, and a pilot with clear metrics."
    />
  );
}

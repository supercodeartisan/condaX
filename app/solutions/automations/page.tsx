import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = { title: "Automations" };

export default function AutomationsPage() {
  return (
    <ServicePage
      title="Repeatable work, taken out of inboxes."
      lede="We wire the tools you already have — and add AI where a person was only copying, routing, or summarising."
      showPlans
      offerings={[
        { title: "Routing & status", text: "Handoffs that used to live in email, now in a system with an owner." },
        { title: "Document & ticket flow", text: "Extract, file, and notify — with a human checkpoint where it matters." },
        { title: "Integrations", text: "CRM, helpdesk, sheets, and chat, talking to each other on purpose." },
        { title: "AI steps", text: "Drafts and classifications inside the automation, not a separate chatbot." },
      ]}
      stats={[
        { value: "Existing stack", label: "Start with what you pay for", text: "New software only if the workflow cannot live in the current tools." },
        { value: "Checkpoints", label: "People where judgment is required", text: "Automation is not an excuse to skip review." },
        { value: "Visible", label: "You can see what ran", text: "Logs and owners, not a mystery Zap." },
        { value: "Worldwide", label: "Follows the sun", text: "Jobs that should not wait for one office to open." },
      ]}
    />
  );
}

import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = { title: "Copilots & chat" };

export default function CopilotsPage() {
  return (
    <ServicePage
      title="Assistants that know your work, not the open web."
      lede="Customer or internal copilots grounded in your documents, tickets, and product — with access rules you can explain."
      showPlans
      offerings={[
        { title: "Internal copilots", text: "Answers from your wiki, code, and policies — for the people who already work there." },
        { title: "Customer assistants", text: "Support and onboarding on your knowledge, with a human path when the model should stop." },
        { title: "Grounding", text: "Retrieval on your corpus, not a hopeful prompt against the public internet." },
        { title: "Guardrails", text: "What it may say, what it must refuse, and who sees the logs." },
      ]}
      stats={[
        { value: "Your data", label: "Not a generic chat window", text: "The value is the corpus and the workflow, not the model brand." },
        { value: "Scoped", label: "One job first", text: "Support, sales, or internal search — not “AI everywhere.”" },
        { value: "Handover", label: "Your team can run it", text: "We do not lock the assistant behind a black box." },
        { value: "Worldwide", label: "Remote build", text: "English delivery for international product and ops teams." },
      ]}
    />
  );
}

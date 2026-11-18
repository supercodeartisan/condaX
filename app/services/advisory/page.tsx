import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = { title: "Advisory" };

export default function AdvisoryPage() {
  return (
    <ServicePage
      title="A clear recommendation: adopt, build, or defer."
      lede="Short paid sessions and written recommendations when leadership is deciding between AI tools, a custom product, and deferring action."
      cta="Book a session"
      processHeading="Engagement process"
      processLede="Advisory is a decision aid - structured for a defined outcome, not ongoing general advisory by default. You leave with a written recommendation and a next paid step only if one is justified."
      offerings={[
        { title: "Adopt vs build", text: "Whether general-purpose AI tools cover the job, or you need software of your own." },
        { title: "Stack review", text: "What you already operate, what to discontinue, and what is worth adding." },
        { title: "Risk & data", text: "Vendors, tenancy, and a policy that remains enforceable under informal early usage." },
        { title: "Roadmap", text: "A sequence: pilot, then product, then stop - with owners attached." },
      ]}
      process={[
        {
          title: "Brief",
          duration: "1-2 days",
          summary:
            "We lock the decision that is stuck, who has to live with it, and what “done” means for this advisory - before we dig in.",
          outcomes: [
            "Decision statement and stakeholders",
            "Constraints and time box",
            "Agreed inputs Condax will need",
          ],
          weDo: [
            "Intake call and written brief confirmation",
            "Clarify buy / build / wait options on the table",
            "List documents and access required",
          ],
          youDo: [
            "Name the decision-maker and attendees",
            "Share the stuck decision in plain language",
            "Provide stack, budget band, and hard constraints",
          ],
        },
        {
          title: "Read",
          duration: "2-5 days",
          summary:
            "We review your stack, workflows, and constraints so the session is working time - not open-ended discovery on the call.",
          outcomes: [
            "Prepared reading of current state",
            "Hypotheses and open questions",
            "Session agenda with decision points",
          ],
          weDo: [
            "Review materials and light desk research",
            "Map options against your constraints",
            "Send a short pre-read before the session",
          ],
          youDo: [
            "Share tools, contracts, and sample workflows",
            "Flag political or compliance landmines early",
            "Confirm attendees can decide or escalate fast",
          ],
        },
        {
          title: "Session",
          duration: "Half day → 2 days",
          summary:
            "Facilitated working time: trade-offs on the table, without presentation-heavy facilitation. We pressure-test the recommendation until it is clear enough to write.",
          outcomes: [
            "Aligned recommendation in the room",
            "Documented no-gos and assumptions",
            "Owners for any immediate next actions",
          ],
          weDo: [
            "Facilitate the working session",
            "Surface risks and false choices",
            "Capture decisions as they are made",
          ],
          youDo: [
            "Bring the people who own the outcome",
            "Decide or escalate in-session when needed",
            "Challenge recommendations with real constraints",
          ],
        },
        {
          title: "Write-up",
          duration: "2-5 days",
          summary:
            "A written recommendation: adopt, build, or defer - with the constraints, the sequence, and the next paid step only if it is justified.",
          outcomes: [
            "Decision memo leadership can circulate",
            "Roadmap sketch with owners",
            "Optional proposal for pilot or build",
          ],
          weDo: [
            "Deliver the write-up in clear prose",
            "Offer a short clarification call",
            "Propose next engagement only when warranted",
          ],
          youDo: [
            "Circulate and archive the decision",
            "Assign owners for follow-through",
            "Accept, defer, or decline any next proposal",
          ],
        },
      ]}
      stats={[
        { value: "Hours → days", label: "Typical advisory", text: "A decision aid, structured for a defined outcome." },
        { value: "One recommendation", label: "Adopt, build, or defer", text: "We will recommend that you do not hire us to build when that is the better path." },
        { value: "Written", label: "You leave with a memo", text: "A recommendation you can share with leadership." },
        { value: "$1k-$4k", label: "Per session band", text: "Quoted before we start. See engagement options for pilots and builds." },
      ]}
    />
  );
}

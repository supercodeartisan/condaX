import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = { title: "Advisory" };

export default function AdvisoryPage() {
  return (
    <ServicePage
      title="A clear call: buy, build, or wait."
      lede="Short paid sessions and written recommendations when the team is stuck between AI tools, a custom product, and doing nothing."
      cta="Book a session"
      processHeading="Engagement process"
      processLede="Advisory is a decision aid — not a retainer in disguise. You leave with a written call and a next paid step only if there is one."
      offerings={[
        { title: "Buy vs build", text: "Whether ChatGPT-class tools cover the job, or you need software of your own." },
        { title: "Stack review", text: "What you already pay for, what to drop, and what is worth adding." },
        { title: "Risk & data", text: "Vendors, tenancy, and a policy that will survive the first enthusiastic intern." },
        { title: "Roadmap", text: "A sequence: pilot, then product, then stop — with owners attached." },
      ]}
      process={[
        {
          title: "Brief",
          duration: "1–2 days",
          summary:
            "We lock the decision that is stuck, who has to live with it, and what “done” means for this advisory — before we dig in.",
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
          duration: "2–5 days",
          summary:
            "We review your stack, workflows, and constraints so the session is working time — not discovery theatre on the call.",
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
            "Facilitated working time: trade-offs on the table, no slide performance. We pressure-test the call until it is clear enough to write.",
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
          duration: "2–5 days",
          summary:
            "A written recommendation: buy, build, or wait — with the no-gos, the sequence, and the next paid step only if it is justified.",
          outcomes: [
            "Decision memo leadership can circulate",
            "Roadmap sketch with owners",
            "Optional proposal for pilot or build",
          ],
          weDo: [
            "Deliver the write-up in plain English",
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
        { value: "Hours → days", label: "Typical advisory", text: "A decision aid, not a retainer in disguise." },
        { value: "One call", label: "Buy, build, or wait", text: "We are willing to recommend that you do not hire us to build." },
        { value: "English", label: "For international teams", text: "Remote sessions across time zones." },
        { value: "$1k–$4k", label: "Per session band", text: "Quoted before we start. See plans for pilots and builds." },
      ]}
    />
  );
}

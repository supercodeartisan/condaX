export type WorkCase = {
  slug: string;
  challenge: string;
  approach: string[];
  outcome: string[];
  stack?: string[];
};

/** Product concepts - labeled Sample on the site until live client cases replace them. */
export const workCases: Record<string, WorkCase> = {
  kite: {
    slug: "kite",
    challenge:
      "Customer teams needed reliable answers from product docs and policies. Generic chat produced unreliable replies; search returned documents without a usable conversation surface.",
    approach: [
      "Scoped one customer-facing corpus and one audience before expanding coverage.",
      "Designed retrieval with citations and a calm conversation UI operators and customers could trust.",
      "Added review and logging so wrong answers could be caught and improved.",
      "Left evaluation notes and runbooks so the client could change sources without starting over.",
    ],
    outcome: [
      "Answers tied to sources instead of unsupported improvisation.",
      "A product shape ready for expansion once the first corpus proved useful.",
      "Clear ownership of quality after handover.",
    ],
    stack: ["Retrieval", "LLM APIs", "Citations UI", "Eval harness"],
  },
  beacon: {
    slug: "beacon",
    challenge:
      "New customers stalled during onboarding because product questions lived across docs, email, and tribal knowledge. Support volume spiked in the first two weeks after signup.",
    approach: [
      "Mapped the onboarding journey and the questions that blocked activation.",
      "Grounded an assistant in approved onboarding docs, with escalation to humans for edge cases.",
      "Instrumented drop-off points so the client could see where guidance failed.",
      "Handed over content ownership so product marketing could update answers safely.",
    ],
    outcome: [
      "Faster time-to-first-value for new accounts.",
      "Fewer repetitive onboarding tickets for support.",
      "A maintainable knowledge path instead of a one-off chatbot.",
    ],
    stack: ["RAG", "Onboarding flows", "Escalation paths", "Analytics"],
  },
  canvas: {
    slug: "canvas",
    challenge:
      "Sales and support agents spent too long drafting replies while switching between CRM, policy docs, and prior tickets. Quality varied by person and shift.",
    approach: [
      "Connected approved CRM fields and policy sources into a single drafting surface.",
      "Required citation and tone controls before send - never auto-send on day one.",
      "Logged drafts and outcomes so the team could improve prompts and retrieval.",
      "Trained champions to extend playbooks after Condax left.",
    ],
    outcome: [
      "Faster first responses with more consistent policy language.",
      "Agents stayed in control of customer communication.",
      "A measurable path from draft assist to broader automation later.",
    ],
    stack: ["CRM context", "Retrieval", "Draft assist", "Human review"],
  },
  pulse: {
    slug: "pulse",
    challenge:
      "Inbound support volume outpaced manual triage. Urgent customer issues sat behind routine requests, and ownership was unclear across queues.",
    approach: [
      "Modeled classify → prioritize → route with confidence thresholds and human review.",
      "Automated only the repetitive middle; escalations stayed visible to operators.",
      "Wrote back status to the helpdesk so customers and agents shared one picture.",
      "Measured precision and time-to-assignment before expanding automation scope.",
    ],
    outcome: [
      "Faster routing of urgent customer issues.",
      "Less queue thrash for tier-1 agents.",
      "A controlled expansion path for automation coverage.",
    ],
    stack: ["Classification", "Queues", "Helpdesk APIs", "Human gates"],
  },
  harbor: {
    slug: "harbor",
    challenge:
      "Inbound requests arrived faster than the team could classify and route them. Manual triage created delays; full automation without checkpoints felt unsafe.",
    approach: [
      "Modeled intake → classify → route → act with explicit human checkpoints where risk was high.",
      "Automated the repetitive middle without hiding failures from operators.",
      "Surfaced status so requesters and owners shared the same picture.",
      "Instrumented the flow so the team could tighten rules after real volume, not guesswork.",
    ],
    outcome: [
      "Faster triage without assuming every decision can be fully automatic.",
      "Operators kept control at the moments that mattered.",
      "A path to expand automation only where metrics justified it.",
    ],
    stack: ["Workflow automation", "Queues", "Human review steps", "Observability"],
  },
  relay: {
    slug: "relay",
    challenge:
      "Order status lived across CRM, warehouse tools, and customer email. Missed handoffs created delays and reactive support work.",
    approach: [
      "Mapped the order lifecycle and the systems that owned each stage.",
      "Automated status sync and customer notifications with exception queues for humans.",
      "Kept audit logs so operations could explain what ran and why.",
      "Documented ownership so the client could extend rules without rewriting the path.",
    ],
    outcome: [
      "Fewer missed handoffs between sales, warehouse, and support.",
      "Customers received clearer status without manual chasing.",
      "Operations could expand automation stage by stage.",
    ],
    stack: ["CRM sync", "Event triggers", "Notifications", "Exception queues"],
  },
  ledger: {
    slug: "ledger",
    challenge:
      "Finance teams spent hours extracting invoice fields, chasing missing data, and routing exceptions. Errors were expensive and slow to catch.",
    approach: [
      "Automated extraction and validation against purchase orders and vendor rules.",
      "Routed only exceptions to finance review with a clear work queue.",
      "Logged every automated decision for audit readiness.",
      "Left a runbook so AP owners could adjust rules after handover.",
    ],
    outcome: [
      "Faster invoice cycle time with fewer manual keystrokes.",
      "Exceptions stayed visible instead of buried in email.",
      "A foundation for deeper finance automation later.",
    ],
    stack: ["Document AI", "Validation rules", "AP queue", "Audit logs"],
  },
  signal: {
    slug: "signal",
    challenge:
      "Inbound leads were scored inconsistently and routed late. Sales lost time on low-intent inquiries while high-intent accounts waited.",
    approach: [
      "Defined scoring criteria with sales leadership and encoded them as transparent rules.",
      "Automated enrichment and CRM write-back with a human override path.",
      "Surfaced reason codes so reps understood why a lead was prioritized.",
      "Measured conversion by segment before widening automation.",
    ],
    outcome: [
      "Faster response to high-intent leads.",
      "Clearer ownership between marketing and sales.",
      "A measurable, adjustable scoring model - not a black box.",
    ],
    stack: ["Lead scoring", "CRM APIs", "Enrichment", "Routing rules"],
  },
  meridian: {
    slug: "meridian",
    challenge:
      "Operations lived across spreadsheets, inboxes, and chat threads. Ownership was unclear, and automation could not be layered on top of tribal process.",
    approach: [
      "Captured the real queue: intake, assignment, blockers, and done - with the people who run it daily.",
      "Designed an operations surface with visible ownership and status before automating steps.",
      "Built the first release around one high-volume process.",
      "Documented roles and handover so the client could extend fields and later automate stages.",
    ],
    outcome: [
      "A single place to see who owns what and what is blocked.",
      "Fewer status meetings driven by spreadsheet reconciliation.",
      "A foundation ready for automation without rewriting the process.",
    ],
    stack: ["TypeScript", "Next.js", "Postgres", "Auth & roles"],
  },
  atlas: {
    slug: "atlas",
    challenge:
      "A growing team had already procured AI writing and coding licenses, but usage was uneven and nobody owned the data rules. Leadership wanted adoption without exposing customer or source material to the wrong destinations.",
    approach: [
      "Mapped real workflows - support replies, internal briefs, and engineering assist - rather than generic AI training.",
      "Chose and configured tools against tenancy and retention settings the company could defend.",
      "Wrote a short usage policy with concrete do / don’t examples from their work.",
      "Ran role-based enablement and left named owners for access, policy updates, and questions.",
    ],
    outcome: [
      "Operators had a clear path for everyday tasks inside approved tools.",
      "Sensitive material had explicit boundaries before licenses were expanded.",
      "The company could measure adoption against real jobs, not training attendance alone.",
    ],
    stack: ["Managed AI workspaces", "IDE assistants", "Policy & enablement"],
  },
};

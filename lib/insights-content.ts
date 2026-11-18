export type InsightSection = {
  heading?: string;
  paragraphs: string[];
};

export const insightBodies: Record<string, InsightSection[]> = {
  "tool-or-build": [
    {
      paragraphs: [
        "Most teams need a decision, not a broad strategy document. They need a clear call this quarter: adopt a tool the organization already has, build something that lives in their stack, or defer until the work is sharp enough to decide.",
        "Condax runs that decision with operators and sponsors in the same working sessions. The right answer is the one that changes how work gets done in the next release cycle.",
      ],
    },
    {
      heading: "Start with the job, not the model",
      paragraphs: [
        "Write the job in one sentence: who does it, how often, what “done” looks like, and what breaks when it fails. If you cannot name the job, you are not ready to adopt or build.",
        "Then map where the work already lives — inbox, spreadsheet, CRM, codebase, customer chat. Tools win when the job fits a generic surface. Builds win when the job is trapped in your data, permissions, or process.",
      ],
    },
    {
      heading: "When a tool is enough",
      paragraphs: [
        "Choose adopt when a well-configured product covers most of the job, when operators will live in that product anyway, and when the risk is mostly usage policy — not missing workflow.",
        "Examples: drafting and summarizing in a managed workspace, coding assistance in an IDE, research with clear source rules. The engagement is rollout, training, and guardrails — not a custom UI.",
      ],
    },
    {
      heading: "When you should build",
      paragraphs: [
        "Build when the answer must stay inside your tenancy, when the workflow needs buttons and states a chat interface cannot own, or when retrieval over your corpus is the product.",
        "Build also when routing sensitive content through unmanaged consumer tools would leak customer data, break audit requirements, or create a second source of truth nobody trusts.",
      ],
    },
    {
      heading: "A decision you can approve or decline",
      paragraphs: [
        "A useful recommendation is short: adopt, build, or defer — with cost, timeline, and what you give up. If the honest answer is defer, that is still a delivery. Shipping the wrong system is more expensive than a delayed start.",
      ],
    },
  ],
  "rollout-without-leaking-data": [
    {
      paragraphs: [
        "Handing everyone a copilot without tenancy rules is how confidential work ends up in the wrong place. A rollout that sustains treats data boundaries as part of the product — not a footnote after training day.",
      ],
    },
    {
      heading: "Lock the workspace before the licenses",
      paragraphs: [
        "Prefer vendors and plans where prompts and files stay in your workspace by default. Turn off training on your content unless counsel has explicitly approved otherwise.",
        "Decide which systems may connect (drive, ticket tools, code hosts) and which stay disconnected. Connection is a security decision, not a convenience toggle.",
      ],
    },
    {
      heading: "Write a policy the organization can enforce",
      paragraphs: [
        "A usable policy names: what may be pasted, what never leaves the company, which tools are approved, and who to ask when unsure. Keep it short enough to read in five minutes.",
        "Pair the policy with examples from your real work — contracts, customer tickets, source code — so people do not have to invent judgment under deadline pressure.",
      ],
    },
    {
      heading: "Train on the workflow, not the feature list",
      paragraphs: [
        "Show one real task end to end: intake → draft → review → save back to the system of record. Measure whether the team still uses the tool two weeks later, not whether they attended the kickoff.",
        "Leave owners: who renews access, who updates the policy, who reviews risky use. Without owners, the rollout decays into unmanaged shadow tooling.",
      ],
    },
  ],
  "copilot-vs-chatgpt": [
    {
      paragraphs: [
        "A generic chat interface is excellent at open-ended drafting. It is a weak product when operators need grounded answers, citations, permissions, and a place to act — approve, reject, file, assign.",
        "A custom copilot is worth the build when those product requirements are the job. It is not worth the build when a managed tool already covers the work with acceptable risk.",
      ],
    },
    {
      heading: "Signals you need a custom surface",
      paragraphs: [
        "Answers must cite your corpus, and wrong citations are expensive. Users need a review step before anything is sent to a customer. The same assistant must respect role-based access across teams.",
        "You also need logging, evaluation, and a handover path so your engineers can change prompts and retrieval without Condax in the loop indefinitely.",
      ],
    },
    {
      heading: "Signals you should stay on a generic tool",
      paragraphs: [
        "The job is mostly writing or ideation with public or low-sensitivity context. Usage volume is low. Nobody will maintain retrieval quality after launch.",
        "In those cases we help you adopt and govern the tool — and we will recommend that path even when a custom build would appear more ambitious in a presentation.",
      ],
    },
    {
      heading: "Prove it on a thin slice",
      paragraphs: [
        "If you do build, start with one workflow, one corpus, and clear success metrics. Expand only after operators trust the first release. Copilots fail when they try to deliver enterprise-wide knowledge on day one.",
      ],
    },
  ],
  "ai-governance-review-cadence": [
    {
      paragraphs: [
        "Most AI governance programs fail quietly. Policies are published, access is granted, and six months later nobody can say what changed, what was blocked, or what still needs a decision.",
        "A sustainable program ties governance to a calendar operators already respect: product releases, security reviews, and vendor renewals. The goal is fewer surprises, not more committee meetings.",
      ],
    },
    {
      heading: "Anchor reviews to real ownership",
      paragraphs: [
        "Name three roles before the first review: a business owner for use cases, a security or data owner for boundaries, and an engineering owner for integrations. Without named owners, governance becomes a shared inbox nobody monitors.",
        "Each quarter, those owners confirm what is in production, what is piloting, and what was retired. Retired tools matter as much as new ones — shadow usage often returns through forgotten licenses.",
      ],
    },
    {
      heading: "What each review should cover",
      paragraphs: [
        "Start with inventory: approved tools, connected systems, and teams with access. Then review incidents or near-misses — pasted customer data, wrong citations sent externally, or automations that bypassed approval.",
        "Close with deltas: policy updates, training gaps, and vendor changes. If nothing changed, the review should still record that explicitly so auditors see continuity, not neglect.",
      ],
    },
    {
      heading: "Keep artifacts short and operational",
      paragraphs: [
        "One-page summaries beat long governance binders. Link to the live policy, the access request process, and the escalation path when someone is unsure.",
        "Store decisions where engineers and operators already work — ticket comments, internal wikis, or release notes — so governance is visible in the workflow, not buried in a folder.",
      ],
    },
    {
      heading: "When to escalate outside the cadence",
      paragraphs: [
        "Trigger an out-of-cycle review when you add a new data source to retrieval, connect a customer-facing channel, change model vendors, or expand to a regulated use case.",
        "Those events change risk faster than a quarterly slide deck can catch. Treat them like production changes: scoped, tested, and owned.",
      ],
    },
  ],
  "customer-ai-guardrails": [
    {
      paragraphs: [
        "Customer-facing assistants fail in public. A wrong discount, an outdated policy quote, or an overconfident answer can reach thousands of inboxes before a human notices.",
        "Guardrails are not limitations on the model — they are product requirements: what the assistant may suggest, what it must escalate, and how operators override it without fighting the UI.",
      ],
    },
    {
      heading: "Define allowed and forbidden actions",
      paragraphs: [
        "List actions the assistant may take autonomously: summarize a thread, draft a reply, surface links from approved documentation. List actions that always require a human: refunds, contract language, security exceptions, pricing outside a published band.",
        "Encode those rules in workflow states, not only in prompt text. Prompts drift; buttons and approval steps persist.",
      ],
    },
    {
      heading: "Escalation paths customers and staff can trust",
      paragraphs: [
        "When the assistant is uncertain, it should hand off with context — customer identity, intent, cited sources, and what was already attempted. Operators should not re-read an entire chat to understand the situation.",
        "Customers should see a clear signal when a human takes over, and roughly when to expect a response. Ambiguous handoffs erode trust faster than slow replies.",
      ],
    },
    {
      heading: "Content and brand boundaries",
      paragraphs: [
        "Tie answers to corpora you maintain: help center articles, approved macros, product changelogs. Block or flag topics your counsel has restricted — competitors, medical claims, financial advice — with a consistent customer-safe message.",
        "Review tone guidelines the same way you review security: short, example-driven, and referenced in evaluation sets.",
      ],
    },
    {
      heading: "Operate guardrails after launch",
      paragraphs: [
        "Sample production conversations weekly. Track override rate, escalation rate, and citation accuracy. Spikes usually indicate corpus drift, a bad deployment, or a new edge case in the product.",
        "Assign an owner to update guardrails when SKUs, policies, or regions change. Customer AI without ongoing maintenance becomes a liability within a quarter.",
      ],
    },
  ],
  "workflow-automation-checkpoints": [
    {
      paragraphs: [
        "Automation that removes every human step looks efficient on a flowchart and expensive in production. Errors compound until they hit a customer or a compliance control.",
        "The best automations shorten cycle time but keep explicit checkpoints where judgment, accountability, or audit matters.",
      ],
    },
    {
      heading: "Map decisions, not only tasks",
      paragraphs: [
        "Break the workflow into decisions: classify intent, assign owner, approve an exception, notify a customer. Automate tasks that are rules-based and high-volume; keep humans on decisions with financial, legal, or reputational weight.",
        "If your team cannot explain why a step is automated, it is a candidate for a checkpoint instead.",
      ],
    },
    {
      heading: "Design checkpoints operators will use",
      paragraphs: [
        "A checkpoint should arrive with context: extracted fields, confidence scores, links to source records, and a suggested action. Asking someone to open three systems to decide is how checkpoints get bypassed.",
        "Default safe actions when time expires — hold, route to a senior queue, or request more data — rather than silently proceeding.",
      ],
    },
    {
      heading: "Measure automation with quality, not only speed",
      paragraphs: [
        "Track touchless rate alongside exception rate, rework rate, and customer contact rate after automation. A high touchless rate with rising complaints is a failing design.",
        "Review checkpoints quarterly. As rules mature, you can narrow human involvement — but only with evidence, not optimism.",
      ],
    },
    {
      heading: "Handover to your operations team",
      paragraphs: [
        "Document who may change routing rules, who approves new automations, and how to roll back a bad deploy. Condax treats handover as part of delivery: your team should operate the workflow without vendor gatekeeping.",
      ],
    },
  ],
  "measuring-ai-pilot-success": [
    {
      paragraphs: [
        "Pilots often end with enthusiasm instead of evidence. Sponsors ask for scale; operators are unsure the tool still fits; security has open questions that were never closed.",
        "Useful pilot metrics connect usage, quality, and risk so leadership can approve scale, extend, or stop — on the same page.",
      ],
    },
    {
      heading: "Adoption that reflects real work",
      paragraphs: [
        "Count weekly active users in the target role, not everyone who attended training. Measure tasks completed with the tool in the system of record — tickets closed, drafts accepted, code merged — not generic session time.",
        "Compare against a pre-pilot baseline for the same team. Flat adoption after six weeks is a signal to fix workflow fit, not to buy more licenses.",
      ],
    },
    {
      heading: "Quality signals you can defend",
      paragraphs: [
        "For generative use cases, track acceptance rate, edit distance, or time-to-publish after AI assist. For retrieval, track citation accuracy and unanswered rate on a labeled evaluation set refreshed monthly.",
        "Define failure modes explicitly: hallucinated policy, wrong customer identity, leaked sensitive fields. Count them, even when rare.",
      ],
    },
    {
      heading: "Risk and governance completion",
      paragraphs: [
        "A pilot is not successful if governance is still provisional. Confirm tenancy, retention, subprocessors, and access controls are signed off. Record any approved exceptions with expiry dates.",
        "Run a short survey: do operators know what not to paste? Unsure answers predict incidents better than model benchmarks.",
      ],
    },
    {
      heading: "Scale, extend, or stop",
      paragraphs: [
        "Recommend scale when adoption, quality, and governance meet thresholds agreed at kickoff. Extend the pilot when one metric lags but the trajectory is clear. Stop when the tool does not change the job — that outcome saves more than a forced rollout.",
      ],
    },
  ],
  "retrieval-for-customer-answers": [
    {
      paragraphs: [
        "Customer support AI lives or dies on retrieval. Models can sound polished while citing the wrong article, an outdated release note, or a internal-only page that should never surface externally.",
        "Retrieval quality is an engineering and content discipline — not a one-time embedding job.",
      ],
    },
    {
      heading: "Curate the corpus like a product",
      paragraphs: [
        "Start from what customers already read: public docs, status pages, approved macros. Remove duplicates, archive superseded articles, and mark region- or plan-specific content so retrieval can filter intentionally.",
        "Assign a content owner who treats the corpus as part of the release process. Shipping product without updating docs guarantees retrieval regressions.",
      ],
    },
    {
      heading: "Chunking and metadata that respect support reality",
      paragraphs: [
        "Chunk by semantic section, not arbitrary token windows. Attach metadata: product area, plan tier, locale, last reviewed date. Support agents search with constraints; your retrieval layer should too.",
        "Keep policy and legal snippets in separate namespaces with stricter access if the same index serves internal and external assistants.",
      ],
    },
    {
      heading: "Evaluation beyond demos",
      paragraphs: [
        "Maintain a set of real or redacted customer questions with expected citations. Run it on every retrieval or prompt change. Track precision at the citation level, not only whether the answer sounds right.",
        "Add questions from escalations and failed chats monthly. That is where production teaches you what marketing demos never will.",
      ],
    },
    {
      heading: "When to defer customer-facing retrieval",
      paragraphs: [
        "If you cannot keep the corpus current, lack evaluation owners, or still route most answers through unmanaged documents, stay with assisted drafting for agents instead of autonomous replies. Condax will recommend that deferral when it reduces risk.",
      ],
    },
  ],
  "intake-routing-automation": [
    {
      paragraphs: [
        "Intake is where requests multiply: email, forms, chat, partner portals. Teams respond by adding headcount or spreadsheets until SLAs slip.",
        "Routing automation works when classification, priority, and ownership are explicit — and when exceptions have a visible path instead of a black hole.",
      ],
    },
    {
      heading: "Start from SLA commitments, not model accuracy",
      paragraphs: [
        "Document promised response times by channel and severity. Design queues and business hours around those commitments. A classifier that is 95% accurate but sends urgent work to the wrong overnight queue still breaches SLA.",
        "Instrument time-in-queue and first-action timestamps from day one. Without them, you cannot prove automation helped.",
      ],
    },
    {
      heading: "Classification with human-readable reasons",
      paragraphs: [
        "Use labels operators understand — billing, access, outage, sales inquiry — not opaque model IDs. Store the model’s rationale and confidence so reviewers can correct routing and feed that signal back into rules or training data.",
        "Keep a small set of stable categories. Taxonomies that change weekly make automation brittle and reporting useless.",
      ],
    },
    {
      heading: "Exception paths customers still see",
      paragraphs: [
        "When automation is unsure, route to a named queue with context, not back to the customer with a generic bounce. Auto-replies should set expectations and offer a ticket ID customers can reference.",
        "Audit bypass rules: executives, strategic accounts, and regulatory inquiries often need overrides. Encode them explicitly to avoid informal inbox politics.",
      ],
    },
    {
      heading: "Expand in layers",
      paragraphs: [
        "Automate acknowledgment and routing first. Add drafting or resolution assist only after routing metrics stabilize. Each layer should survive a vendor or model swap without rewriting the whole intake system.",
      ],
    },
  ],
  "automation-roi-first-90-days": [
    {
      paragraphs: [
        "Automation programs stall when success is defined as “we connected the tools.” ROI shows up when one workflow moves faster with fewer errors — and when you can show the baseline you beat.",
        "Condax scopes first automations to a 90-day window: baseline, build, measure, then decide whether to expand.",
      ],
    },
    {
      heading: "Baseline before the build",
      paragraphs: [
        "Pick a single high-volume path. Count volume, cycle time, rework rate, and who touches each step. If you cannot measure those today, instrument them for two weeks before writing automation.",
      ],
    },
    {
      heading: "Ship one end-to-end path",
      paragraphs: [
        "Automate acknowledgment, classification, and routing first — with a human checkpoint where judgment still matters. Avoid expanding connectors until the first path is stable under live volume.",
      ],
    },
    {
      heading: "Go / no-go metrics",
      paragraphs: [
        "Agree thresholds in writing: time saved per item, exception rate, and operator trust after four weeks. Flat metrics mean fix the workflow fit — not buy another platform.",
      ],
    },
  ],
  "handover-checklist-for-ai-systems": [
    {
      paragraphs: [
        "A system that only the builders can operate is unfinished. Handover is part of delivery: access, runbooks, evals, and named owners so your organization can run and extend the work.",
      ],
    },
    {
      heading: "Access and tenancy",
      paragraphs: [
        "Transfer admin ownership for workspaces, API keys, cloud projects, and vendor accounts. Document who may grant access and how secrets rotate.",
      ],
    },
    {
      heading: "Runbooks and rollback",
      paragraphs: [
        "Write the happy path and the failure path: how to pause an automation, replay a failed job, and restore a previous prompt or model version. Include contacts for after-hours incidents.",
      ],
    },
    {
      heading: "Quality harness",
      paragraphs: [
        "Leave an evaluation set and a cadence for reviewing answer quality or automation exceptions. Without that, drift is invisible until customers complain.",
      ],
    },
  ],
  "choosing-human-checkpoints": [
    {
      paragraphs: [
        "Full automation sounds efficient until a wrong action reaches a customer. The useful question is not “can the model do this?” but “what is the cost of being wrong here?”",
      ],
    },
    {
      heading: "Unattended vs review vs manual",
      paragraphs: [
        "Unattended steps should be reversible, low-stakes, and easy to detect when wrong. Draft-for-review fits high-volume writing where a person still owns the send. Manual stays for policy, refunds above a threshold, and anything regulators expect a human to decide.",
      ],
    },
    {
      heading: "Design the exception path",
      paragraphs: [
        "Every automated step needs a visible queue when confidence is low or rules fail. Operators should see why something stopped — not dig through logs.",
      ],
    },
    {
      heading: "Revisit after real volume",
      paragraphs: [
        "Checkpoints that made sense at launch may be removable after four weeks of clean data — or may need to move earlier. Treat the loop map as a living artifact.",
      ],
    },
  ],
  "vendor-due-diligence-for-ai": [
    {
      paragraphs: [
        "Enterprise AI procurement moved faster than security playbooks. Organizations sign pilots on standard terms and only later discover training on customer data, unclear subprocessors, or logging they cannot export.",
        "Due diligence should fit procurement timelines — structured, repeatable, and shared with legal early.",
      ],
    },
    {
      heading: "Data handling and residency",
      paragraphs: [
        "Ask where prompts, uploads, and outputs are stored; retention defaults; and whether your content is used to train foundation models. Get answers in writing for the specific SKU and region, not the marketing site.",
        "Map residency requirements for your customers and regulators. A vendor that cannot commit to your regions is a defer-or-architect-around decision, not a negotiation footnote.",
      ],
    },
    {
      heading: "Security, access, and audit",
      paragraphs: [
        "Confirm SSO, role-based access, admin logging, and export of audit trails. Understand API scopes if you will connect CRM, code, or ticket systems.",
        "Request recent third-party assessments or penetration test summaries appropriate to your risk tier. Fill gaps with your own threat model for connected systems.",
      ],
    },
    {
      heading: "Subprocessors and model supply chain",
      paragraphs: [
        "List inference providers, hosting vendors, and support subprocessors. Note change-notification clauses and your right to object or exit.",
        "For customer-facing AI, subprocessors are part of your customer commitment. Track them the same way you track payment processors.",
      ],
    },
    {
      heading: "Operational fit and exit",
      paragraphs: [
        "Evaluate API limits, incident communication, and support for your deployment model — SaaS, VPC, or self-hosted. Ask what happens on non-renewal: data export formats, deletion timelines, and model-specific lock-in.",
        "Condax uses this questionnaire in advisory work before build commitments. The answers often determine adopt versus build more clearly than a feature matrix.",
      ],
    },
  ],
};

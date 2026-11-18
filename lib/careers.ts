export type Role = {
  slug: string;
  title: string;
  team: string;
  location: string;
  type: string;
  summary: string;
  /** Longer role narrative for the JD page */
  about: string;
  youWill: string[];
  youMight: string[];
  nice: string[];
  /** Optional role-specific application questions */
  applyQuestions: { id: string; label: string; hint?: string }[];
};

export const hiringProcess = [
  {
    step: "01",
    title: "Application review",
    duration: "3-5 business days",
    text: "We read your CV, LinkedIn, and answers against the role - looking for clear technical depth and evidence you can explain your work. Strong fits move forward; everyone hears back either way.",
  },
  {
    step: "02",
    title: "Screening conversation",
    duration: "25-30 minutes",
    text: "A focused English interview with the hiring lead: recent work, what you want next, timezone overlap, and mutual fit. We assess spoken communication as carefully as substance - client delivery depends on both.",
  },
  {
    step: "03",
    title: "Practical assessment",
    duration: "60-90 minutes",
    text: "Role-specific and grounded in real work - portfolio deep-dive, pairing, architecture discussion, or a short case. Strong technical skill is non-negotiable. We share the format in advance; no trick puzzles.",
  },
  {
    step: "04",
    title: "Team & ways of working",
    duration: "45-60 minutes",
    text: "Meet people you would deliver with. We cover async habits, client communication in English, ownership, and how decisions get made on a distributed team.",
  },
  {
    step: "05",
    title: "Offer & onboarding",
    duration: "Usually within a few days",
    text: "Compensation, start date, equipment, and first-week plan. Typical end-to-end timeline is two to four weeks when calendars align.",
  },
];

export const whyJoin = [
  {
    title: "Client delivery, not idle staffing",
    text: "You work on client pilots and products - AI enablement and custom builds that must ship.",
  },
  {
    title: "International by default",
    text: "Clients and colleagues across regions. Location is not a hiring filter.",
  },
  {
    title: "Senior bar, small team",
    text: "Flat structure. Direct client contact. We hire senior contributors who operate with minimal overhead.",
  },
  {
    title: "Craft and communication",
    text: "Strong technical skill and clear English - interviews, demos, and async writing. You work with clients directly, not behind a coordination layer.",
  },
];

export const roles: Role[] = [
  {
    slug: "senior-full-stack-engineer",
    title: "Senior Full-Stack Engineer",
    team: "Engineering",
    location: "Remote · Worldwide",
    type: "Full-time · Contract",
    summary:
      "Own end-to-end delivery of custom web products, internal tools, and production AI features for international clients.",
    about:
      "Condax engages when a team needs software that operators will run in production - SaaS products, internal platforms, and carefully scoped AI features. As a Senior Full-Stack Engineer you own slices of that work from brief to handover: architecture choices, implementation, quality, and the written trail that lets the client’s team continue without us. You will work in small squads with design and product, talk to clients in English, and prefer maintainable systems over demonstration-led delivery.",
    youWill: [
      "Lead feature delivery across API, data model, UI, deployment, and observability.",
      "Ship production TypeScript applications (typically React / Next.js and a solid backend or BFF).",
      "Integrate model-backed capabilities where they earn their place - with evals, logging, and human checkpoints.",
      "Write handover docs, runbooks, and short decision records so ownership can leave Condax cleanly.",
      "Participate in client demos, trade-off conversations, and status updates in English.",
      "Uphold engineering standards: reviews, testing strategy, and secure handling of client data.",
      "Collaborate async across time zones with clear written updates and predictable overlap windows.",
    ],
    youMight: [
      "5+ years building and operating production web software.",
      "Deep TypeScript fluency and strong React (or equivalent) craft.",
      "Comfort owning ambiguous scope without a large supporting cast.",
      "Evidence of shipping under real constraints - deadlines, legacy systems, or imperfect data.",
      "Strong English interview and communication skills (spoken and written) for client-facing delivery.",
    ],
    nice: [
      "Production experience with LLM features, RAG, or agent tooling.",
      "Prior consulting, agency, or product-studio delivery.",
      "Cloud fundamentals (AWS, GCP, or Azure) and CI/CD ownership.",
      "Reliable overlap with APAC / EU / US client hours depending on engagement.",
    ],
    applyQuestions: [
      {
        id: "recent_ship",
        label: "Describe a production system you owned end to end in the last two years.",
        hint: "Stack, constraints, and what you personally decided vs. inherited.",
      },
      {
        id: "ai_judgment",
        label: "When would you refuse to put an LLM feature into a client product?",
        hint: "A short, concrete example is better than a framework list.",
      },
    ],
  },
  {
    slug: "frontend-engineer",
    title: "Frontend Engineer",
    team: "Engineering",
    location: "Remote · Worldwide",
    type: "Full-time · Contract",
    summary:
      "Craft calm, production-grade interfaces for products, copilots, and internal tools - accessibility and performance included.",
    about:
      "Our product compositions and client UIs need engineers who care about interaction quality as much as delivery speed. As a Frontend Engineer you partner closely with design and full-stack peers to implement systems that feel considered: dense operational screens, customer-facing flows, and AI surfaces that stay usable under load. You will raise the bar on component quality, performance budgets, and front-end architecture that survives handover.",
    youWill: [
      "Implement responsive, accessible interfaces in React / Next.js (or similar) with strong TypeScript.",
      "Translate Figma (and imperfect briefs) into production UI with sensible component boundaries.",
      "Own front-end performance, state management choices, and design-system consistency.",
      "Build AI product surfaces - review steps, streaming states, empty states - without novelty for its own sake.",
      "Collaborate with backend engineers on API contracts and error handling that operators understand.",
      "Document UI patterns so client teams can extend the product after Condax exits.",
    ],
    youMight: [
      "3+ years of professional front-end engineering on shipped products.",
      "Strong React and TypeScript; comfort with modern CSS (including Tailwind or equivalent).",
      "Eye for spacing, hierarchy, and interaction detail - not layout alone.",
      "Experience working with designers in a tight feedback loop.",
      "Strong technical front-end craft and strong English interview / communication skills for reviews and client demos.",
    ],
    nice: [
      "Design-system or component-library ownership.",
      "Motion craft that respects prefers-reduced-motion.",
      "Light full-stack ability (API routes, auth flows).",
      "Prior product-studio or consulting experience.",
    ],
    applyQuestions: [
      {
        id: "ui_craft",
        label: "Link one UI you are proud of and explain two craft decisions you made.",
        hint: "Public URLs preferred; private work can be described without screenshots of confidential data.",
      },
      {
        id: "ai_surface",
        label: "How would you design the empty / loading / error states for a copilot review screen?",
        hint: "Focus on operator trust, not visual novelty.",
      },
    ],
  },
  {
    slug: "backend-platform-engineer",
    title: "Backend / Platform Engineer",
    team: "Engineering",
    location: "Remote · Worldwide",
    type: "Full-time · Contract",
    summary:
      "Design APIs, data layers, and platform foundations that keep client products reliable, observable, and hand-over-ready.",
    about:
      "Condax builds systems that must survive real traffic, real data, and real operators. As a Backend / Platform Engineer you shape services, data models, integrations, and the operational backbone (auth, jobs, queues, observability) so products stay understandable after we leave. You will make pragmatic buy-vs-build calls, keep security and tenancy explicit, and partner with AI engineers when model features need durable plumbing.",
    youWill: [
      "Design and implement APIs, services, and data models for custom products and internal tools.",
      "Own reliability basics: logging, metrics, alerting, backups, and failure modes that are documented.",
      "Integrate third-party systems (CRM, ERP, auth, payments, AI vendors) with clear boundaries.",
      "Partner on AI features so retrieval, tool calls, and permissions sit on solid platform rails.",
      "Improve CI/CD, environments, and secrets handling for small delivery teams.",
      "Write architecture notes and runbooks suitable for client engineering handover.",
    ],
    youMight: [
      "5+ years of backend or platform engineering in production.",
      "Strong in at least one of Node/TypeScript, Python, Go, or Java - and SQL fluency.",
      "Experience with cloud infrastructure and containerized deployments.",
      "Track record of operating systems you built (on-call or equivalent ownership).",
      "Strong backend/platform technical skill and strong English interview / communication skills for design reviews and client sessions.",
    ],
    nice: [
      "Event-driven architectures, queues, or workflow engines.",
      "Security / compliance exposure (SOC2-minded practices, least privilege).",
      "Experience modernizing legacy systems without big-bang rewrites.",
      "Prior consulting or multi-tenant SaaS background.",
    ],
    applyQuestions: [
      {
        id: "reliability",
        label: "Describe a production incident you owned - cause, response, and what you changed afterward.",
      },
      {
        id: "integration",
        label: "Walk through how you would integrate a third-party LLM vendor into a client’s VPC or tenancy constraints.",
        hint: "Trade-offs and failure modes matter more than brand names.",
      },
    ],
  },
  {
    slug: "ai-engineer",
    title: "AI / LLM Engineer",
    team: "AI & Engineering",
    location: "Remote · Worldwide",
    type: "Full-time · Contract",
    summary:
      "Turn AI pilots into systems clients can run - copilots, retrieval, and automations grounded in their data, not a demo chatbot.",
    about:
      "Condax treats AI as product engineering with extra failure modes. As an AI / LLM Engineer you design retrieval, tool use, evaluation, and human checkpoints so features earn their place in production. You will push back when a prompt is not a product, choose vendors against cost and data constraints, and leave the client able to operate what you shipped.",
    youWill: [
      "Design and build copilots, RAG pipelines, and workflow automations on real client stacks.",
      "Select models and vendors against latency, cost, quality, and data-residency constraints.",
      "Add evals, tracing, and human review steps before anything is called production-ready.",
      "Partner with product and engineering so AI sits inside the product - not as a side chatbot.",
      "Support AI-for-teams rollouts: safe usage patterns, tenancy boundaries, and operator training materials.",
      "Document prompts, datasets, and operational playbooks for handover.",
    ],
    youMight: [
      "Shipped at least one LLM or ML feature that real users depended on.",
      "Solid software engineering habits - APIs, tests, reviews - not only notebooks.",
      "Ability to explain adopt versus build for AI without relying on presentation-only rationale.",
      "Strong AI/engineering technical skill and strong English interview / communication skills for async handovers and client explanations.",
      "Comfort saying “not yet” when data quality or risk is wrong.",
    ],
    nice: [
      "Enterprise data constraints or regulated environments.",
      "Familiarity with major model APIs, vector stores, and eval harnesses.",
      "Experience mentoring client engineers after handover.",
      "Background in search, NLP, or information retrieval.",
    ],
    applyQuestions: [
      {
        id: "production_ai",
        label: "Describe an LLM or ML feature you shipped to production. What broke after launch, and how did you fix it?",
      },
      {
        id: "eval_approach",
        label: "How do you decide a retrieval or agent change is safe to release?",
        hint: "Mention metrics, human review, or rollout strategy if relevant.",
      },
    ],
  },
  {
    slug: "solutions-architect",
    title: "Solutions Architect",
    team: "Architecture",
    location: "Remote · Worldwide",
    type: "Full-time · Contract",
    summary:
      "Shape technical direction for engagements - from discovery recommendations to architecture that a delivery team can execute.",
    about:
      "Many Condax engagements start with a hard call: buy a tool, build software, or wait. As a Solutions Architect you lead that technical clarity - mapping current systems, proposing options with trade-offs, and establishing an architecture the delivery team can ship against. You stay close enough to implementation to remain credible, and close enough to clients to keep recommendations practical.",
    youWill: [
      "Run technical discovery: systems, constraints, risks, and success criteria.",
      "Produce architecture options and recommendations clients can accept or reject.",
      "Define integration patterns, data boundaries, and non-functional requirements.",
      "Guide delivery teams on sequencing, spikes, and technical debt they should not ignore.",
      "Support advisory and enablement work when AI tooling is the right answer instead of a build.",
      "Present findings clearly in English - written briefs and live sessions.",
    ],
    youMight: [
      "7+ years across engineering and architecture, or equivalent senior IC experience.",
      "Breadth across web, cloud, data, and integration landscapes.",
      "Evidence of influencing stakeholders without relying on formal authority alone.",
      "Comfortable in discovery workshops and whiteboard-to-document workflows.",
      "Strong technical judgment and strong English interview / communication skills for workshops and decision records.",
    ],
    nice: [
      "Consulting or multi-client delivery background.",
      "AI / data platform exposure.",
      "Security architecture familiarity.",
      "Experience estimating delivery risk honestly.",
    ],
    applyQuestions: [
      {
        id: "buy_build",
        label: "Give an example where you recommended “buy” or “wait” instead of “build.” What convinced the stakeholders?",
      },
      {
        id: "architecture_doc",
        label: "How do you keep architecture docs useful after week one of delivery?",
      },
    ],
  },
  {
    slug: "devops-cloud-engineer",
    title: "DevOps / Cloud Engineer",
    team: "Platform",
    location: "Remote · Worldwide",
    type: "Full-time · Contract",
    summary:
      "Make environments, pipelines, and cloud foundations reliably operable for product teams and client handovers.",
    about:
      "Delivery speed collapses when environments are fragile. As a DevOps / Cloud Engineer you create the infrastructure and automation that let Condax squads ship safely - and that clients can operate after engagement. You will prefer clear IaC, least-privilege access, and observability over clever one-offs.",
    youWill: [
      "Build and maintain CI/CD, environments, and release workflows for product teams.",
      "Implement infrastructure as code on AWS, GCP, or Azure with reviewable changes.",
      "Harden secrets, identity, networking, and backup practices for client tenancies.",
      "Improve observability: logs, metrics, tracing, and actionable alerts.",
      "Partner with engineers on performance, cost, and operational readiness before go-live.",
      "Produce handover documentation clients’ platform teams can operate from.",
    ],
    youMight: [
      "4+ years in DevOps, SRE, or cloud platform roles.",
      "Hands-on with Terraform/Pulumi (or equivalent) and container orchestration.",
      "Experience supporting product teams, not only ticket queues.",
      "Strong cloud/platform technical skill and strong English interview / communication skills for runbooks and incident notes.",
    ],
    nice: [
      "FinOps awareness and cost governance.",
      "Security tooling (WAF, CSPM, secret scanning).",
      "Multi-account / multi-tenant cloud organization design.",
      "Prior agency or consulting delivery.",
    ],
    applyQuestions: [
      {
        id: "platform_story",
        label: "Describe a platform or pipeline improvement that measurably reduced delivery friction.",
      },
      {
        id: "handover",
        label: "What does a good infrastructure handover look like for a client who has a small ops team?",
      },
    ],
  },
  {
    slug: "product-designer",
    title: "Product Designer",
    team: "Design",
    location: "Remote · Worldwide",
    type: "Full-time · Contract",
    summary:
      "Design products and internal tools that operators and customers open every day - calm UI, clear flows, no concept-only deliverables.",
    about:
      "Condax design work is judged by whether people can complete the job with less friction. As a Product Designer you own experience from problem framing through production-ready specs, working inside small delivery squads. You will design for density, clarity, and AI surfaces that stay trustworthy - and you will talk to clients and users directly.",
    youWill: [
      "Own UX and UI from brief to production-ready specifications and design QA.",
      "Design flows for products, internal tools, and AI review / copilot surfaces.",
      "Facilitate lightweight research and usability checks appropriate to engagement length.",
      "Partner tightly with engineers; prefer implementable systems over speculative presentations.",
      "Maintain coherent visual and interaction patterns across an engagement.",
      "Present work to clients in English and incorporate feedback into the next slice.",
    ],
    youMight: [
      "Portfolio of shipped digital products (not only marketing sites).",
      "Strong Figma craft and interaction thinking.",
      "Ability to write short specs engineers respect.",
      "Comfort collaborating remotely across time zones.",
      "Strong product-design craft and strong English interview / communication skills for workshops and critiques.",
    ],
    nice: [
      "Consulting or product-studio experience.",
      "Light prototyping or front-end literacy.",
      "Experience designing complex B2B / ops interfaces.",
      "Interest in AI product patterns that stay usable under load.",
    ],
    applyQuestions: [
      {
        id: "shipped_case",
        label: "Walk through one shipped product case: problem, constraints, your decisions, and outcome.",
      },
      {
        id: "ops_ui",
        label: "How do you approach information density in an internal operations UI?",
      },
    ],
  },
  {
    slug: "product-manager",
    title: "Product Manager",
    team: "Product",
    location: "Remote · Worldwide",
    type: "Full-time · Contract",
    summary:
      "Keep engagements pointed at outcomes - discovery, scope, sequencing, and honest calls between tools and custom software.",
    about:
      "Condax product managers protect clarity. You will run discovery, write scopes clients can accept or reject, sequence delivery, and keep quality ahead of process overhead. You sit between client stakeholders and the delivery squad - facilitating adopt-versus-build decisions, surfacing risk early, and making sure handover is part of the plan, not an afterthought.",
    youWill: [
      "Lead discovery and produce briefs / scopes with explicit outcomes and trade-offs.",
      "Facilitate buy vs build vs wait decisions with engineering and design.",
      "Own delivery cadence: demos, risk logs, stakeholder updates, and definition of done.",
      "Coordinate a remote international team without drowning people in process.",
      "Protect quality: push back on unjustified scope and under-specified AI features.",
      "Plan handover - training, docs, and ownership - from the start of the engagement.",
    ],
    youMight: [
      "Led product or delivery work in software, consulting, or a studio.",
      "Write briefs that engineers and designers respect.",
      "Strong product judgment and strong English interview / communication skills with international clients.",
      "Bias to shipping over ceremony; comfort with incomplete information.",
    ],
    nice: [
      "AI product or enablement exposure.",
      "Commercial instincts (scope, timeline, change control).",
      "Experience with distributed teams and async rituals.",
      "Technical literacy sufficient to challenge weak proposals.",
    ],
    applyQuestions: [
      {
        id: "scope_call",
        label: "Describe a time you reduced scope to protect quality. What did you cut, and how did you bring stakeholders along?",
      },
      {
        id: "ai_enablement",
        label: "When is “adopt a tool” a better product decision than “build a custom AI feature”?",
      },
    ],
  },
  {
    slug: "engagement-lead",
    title: "Engagement / Delivery Lead",
    team: "Delivery",
    location: "Remote · Worldwide",
    type: "Full-time · Contract",
    summary:
      "Run client engagements end to end - relationship, plan, risk, and the operating rhythm that keeps senior ICs effective.",
    about:
      "Small senior teams still need someone accountable for the engagement as a whole. As an Engagement / Delivery Lead you own the client relationship day to day, keep work sequenced, surface risk early, and make sure Condax delivers what was promised - including a clean exit. You are not a pure coordinator; you understand product and engineering enough to intervene when quality slips.",
    youWill: [
      "Own engagement health: plan, milestones, risks, and stakeholder communication.",
      "Translate client goals into a delivery shape the squad can execute.",
      "Facilitate ceremonies that earn their keep; kill ones that do not.",
      "Partner with commercial conversations on scope changes and timeline impact.",
      "Ensure handover, training, and access cleanup are completed before close-out.",
      "Coach the team on client communication standards in English.",
    ],
    youMight: [
      "5+ years leading delivery in consulting, agencies, or product organizations.",
      "Track record managing multi-disciplinary remote teams.",
      "Strong delivery judgment and strong English interview / communication skills with executive stakeholders.",
      "Comfort with ambiguity and changing constraints.",
    ],
    nice: [
      "Background as a PM, engineering manager, or technical program lead.",
      "Experience with AI or digital transformation programs.",
      "Exposure to commercial negotiation and SOW change control.",
    ],
    applyQuestions: [
      {
        id: "engagement_save",
        label: "Tell us about an engagement that was at risk. What did you change, and what was the result?",
      },
      {
        id: "rituals",
        label: "Which delivery rituals do you insist on for a remote senior team - and which do you refuse?",
      },
    ],
  },
  {
    slug: "qa-engineer",
    title: "QA / Quality Engineer",
    team: "Engineering",
    location: "Remote · Worldwide",
    type: "Full-time · Contract",
    summary:
      "Raise the quality bar for client products - risk-based testing, automation where it pays off, and release confidence without ceremony.",
    about:
      "Condax ships software clients will operate. As a QA / Quality Engineer you embed with delivery squads to catch the failures that matter: regressions, broken handovers, fragile AI behaviors, and unclear acceptance criteria. You will prefer risk-based strategy and useful automation over checkbox-driven ceremony.",
    youWill: [
      "Define test strategy per engagement: critical paths, data setups, and release gates.",
      "Design and maintain automated checks where they reduce real risk.",
      "Explore AI and workflow features for failure modes operators would hit.",
      "Partner with engineers and PMs to sharpen acceptance criteria before build.",
      "Support go-live readiness and post-release verification.",
      "Leave a maintainable quality harness and notes for the client team.",
    ],
    youMight: [
      "4+ years in QA, SDET, or quality engineering on shipped products.",
      "Experience with modern web test tooling and CI integration.",
      "Strong quality/engineering technical skill and strong English interview / communication skills to explain risk to non-QA stakeholders.",
      "Comfortable in remote, async delivery.",
    ],
    nice: [
      "API and contract testing experience.",
      "Exposure to AI / ML product evaluation.",
      "Security or accessibility testing familiarity.",
      "Consulting or multi-client delivery background.",
    ],
    applyQuestions: [
      {
        id: "risk_based",
        label: "How do you decide what not to automate on a short consulting engagement?",
      },
      {
        id: "ai_quality",
        label: "What would you test for a retrieval-augmented assistant before calling it production-ready?",
      },
    ],
  },
  {
    slug: "technical-writer",
    title: "Technical Writer / Enablement Specialist",
    team: "Enablement",
    location: "Remote · Worldwide",
    type: "Full-time · Contract",
    summary:
      "Turn delivery into durable enablement - docs, training, and policy language operators can use after Condax leaves.",
    about:
      "Handover is part of the product. As a Technical Writer / Enablement Specialist you create the guides, runbooks, and training materials that make AI tools and custom software durable. You will work beside engineers and PMs, interview operators, and write in clear English that respects how people work day to day.",
    youWill: [
      "Produce runbooks, admin guides, and user help for products and AI rollouts.",
      "Convert engagement outcomes into training sessions and short reference material.",
      "Help draft practical policy language for AI tool usage where needed.",
      "Interview subject-matter experts and operators to keep docs accurate.",
      "Maintain information architecture so docs stay findable after handover.",
      "Partner with design and engineering on in-product empty states and help copy.",
    ],
    youMight: [
      "Proven portfolio of technical documentation or enablement programs.",
      "Excellent written English and strong spoken English interview / facilitation skills for remote training.",
      "Strong technical literacy - able to work with engineering teams and imperfect source material.",
      "Comfortable facilitating short training sessions remotely.",
    ],
    nice: [
      "AI tooling or developer-docs background.",
      "Instructional design experience.",
      "Familiarity with docs-as-code workflows.",
      "Prior consulting or customer education roles.",
    ],
    applyQuestions: [
      {
        id: "doc_sample",
        label: "Share a public writing sample (or describe a private one) and what made it effective for operators.",
      },
      {
        id: "enablement",
        label: "How would you structure a 45-minute enablement session for a team adopting a new internal tool?",
      },
    ],
  },
];

export const generalApplyQuestions: Role["applyQuestions"] = [
  {
    id: "craft_focus",
    label: "What craft do you want to be hired for, and at what seniority?",
  },
  {
    id: "recent_work",
    label: "Summarize the most relevant work from the last 18 months.",
    hint: "Outcomes and constraints, not only titles.",
  },
];

export function getRole(slug: string) {
  return roles.find((r) => r.slug === slug);
}

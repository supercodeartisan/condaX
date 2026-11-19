export type Role = {
  slug: string;
  title: string;
  team: string;
  location: string;
  type: string;
  experience: string;
  reportsTo: string;
  summary: string;
  /** Multi-paragraph role narrative */
  about: string[];
  /** Outcomes this role is hired to drive */
  impact: string[];
  youWill: string[];
  youMight: string[];
  nice: string[];
  applyQuestions: { id: string; label: string; hint?: string }[];
};

export const hiringProcess = [
  {
    step: "01",
    title: "Application review",
    duration: "3-5 business days",
    text: "We read your CV, LinkedIn, and answers against the role - looking for clear senior depth and evidence you can explain your work. Strong fits move forward; everyone hears back either way.",
  },
  {
    step: "02",
    title: "Screening conversation",
    duration: "25-30 minutes",
    text: "A focused English interview with the hiring lead: recent work, what you want next, timezone overlap, and mutual fit. We assess spoken communication as carefully as substance - client delivery depends on both.",
  },
  {
    step: "03",
    title: "Leadership conversation",
    duration: "45-60 minutes",
    text: "A conversation with Condax leadership (CTO or CEO). We cover technical judgment, ownership, client communication, and how you would operate on a small senior remote team.",
  },
  {
    step: "04",
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
    title: "Senior bar only",
    text: "We hire engineers with over five years of production experience. Flat structure. Direct client contact.",
  },
  {
    title: "Craft and communication",
    text: "Strong technical skill and clear English - interviews, demos, and async writing. You work with clients directly.",
  },
];

/** Open roles - senior engineers only (5+ years production experience). */
export const roles: Role[] = [
  {
    slug: "senior-full-stack-engineer",
    title: "Senior Full-Stack Engineer",
    team: "Engineering",
    location: "Remote · Worldwide",
    type: "Full-time · Contract",
    experience: "5+ years production",
    reportsTo: "CTO",
    summary:
      "Own end-to-end delivery of custom web products, internal tools, and production AI features for international clients.",
    about: [
      "Condax is a small AI, automation, and product engineering consultancy. We help organizations adopt AI tools, automate workflows, and ship custom software - then hand ownership to the people who will run it.",
      "As a Senior Full-Stack Engineer you are accountable for a delivery slice from brief through production: architecture trade-offs, implementation quality, observability, and the written trail that lets a client team continue without us. You will work in tight squads, speak with clients in English, and prefer systems that stay maintainable after handover over demos that impress for a week.",
      "This is a senior IC role. We expect over five years building and operating production software, comfort with ambiguous scope, and the judgment to say when a feature - including an LLM feature - does not belong in v1.",
    ],
    impact: [
      "Ship production releases clients can operate, not prototypes that stall after kickoff.",
      "Raise the engineering bar across TypeScript, React/Next.js, APIs, and deployment discipline.",
      "Leave clear runbooks, decisions, and ownership so Condax can exit cleanly.",
    ],
    youWill: [
      "Lead feature delivery across data model, API, UI, deployment, and observability for a scoped engagement.",
      "Ship production TypeScript applications - typically React / Next.js with a solid backend or BFF - under real client constraints.",
      "Integrate model-backed capabilities only where they earn their place: evals, logging, refusal paths, and human checkpoints.",
      "Facilitate short technical demos and trade-off conversations with client stakeholders in English.",
      "Write handover packs: runbooks, decision records, access inventory, and known limits.",
      "Uphold reviews, testing strategy, and secure handling of client data across environments.",
      "Work async across time zones with predictable overlap and clear written status.",
    ],
    youMight: [
      "Over 5 years building and operating production web software as a senior IC or equivalent.",
      "Deep TypeScript fluency and strong React (or comparable) craft in shipped products.",
      "Proven ownership of ambiguous scope without a large supporting cast.",
      "Evidence of shipping under constraints: deadlines, legacy systems, imperfect data, or regulated environments.",
      "Strong spoken and written English for client-facing delivery, not only internal chats.",
    ],
    nice: [
      "Production experience with LLM features, RAG, or agent tooling.",
      "Prior consulting, agency, or product-studio multi-client delivery.",
      "Cloud fundamentals (AWS, GCP, or Azure) and CI/CD ownership.",
      "Reliable overlap with APAC, EU, or US client hours depending on engagement.",
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
    slug: "senior-frontend-engineer",
    title: "Senior Frontend Engineer",
    team: "Engineering",
    location: "Remote · Worldwide",
    type: "Full-time · Contract",
    experience: "5+ years production",
    reportsTo: "CTO",
    summary:
      "Lead production-grade interfaces for products, copilots, and internal tools - accessibility, performance, and craft that survive handover.",
    about: [
      "Condax ships interfaces operators and customers open every day: dense ops consoles, customer portals, and AI surfaces that must stay calm under load. We do not hire for marketing-site polish alone.",
      "As a Senior Frontend Engineer you set the interaction and component bar for an engagement. You translate imperfect briefs into production UI, partner tightly with full-stack peers on contracts and error states, and document patterns so client teams can extend the product after we leave.",
      "You need over five years of professional front-end engineering on shipped products, plus the English communication skill to defend craft decisions in reviews and client demos.",
    ],
    impact: [
      "Make Condax product UIs feel considered, fast, and operable - not demo-only.",
      "Establish reusable front-end patterns that shorten later engagements.",
      "Improve accessibility and performance budgets without slowing delivery.",
    ],
    youWill: [
      "Lead responsive, accessible interfaces in React / Next.js (or similar) with strong TypeScript.",
      "Define component boundaries, design-system discipline, and state patterns appropriate to the product.",
      "Own front-end performance: budgets, loading strategy, and regressions that matter to operators.",
      "Build AI product surfaces - streaming, citations, review steps, empty and error states - with operator trust first.",
      "Collaborate on API contracts and failure modes so the UI explains problems clearly.",
      "Leave UI documentation and patterns a client engineer can extend without reverse-engineering.",
      "Participate in design and engineering reviews; raise the craft bar without blocking shipping.",
    ],
    youMight: [
      "Over 5 years of professional front-end engineering on shipped digital products.",
      "Strong React and TypeScript; modern CSS including Tailwind or equivalent systems.",
      "A portfolio that shows hierarchy, interaction detail, and density handling - not only visual flair.",
      "Experience leading front-end craft reviews or mentoring peers.",
      "Strong English for critiques, async write-ups, and client demos.",
    ],
    nice: [
      "Design-system or component-library ownership in production.",
      "Motion craft that respects prefers-reduced-motion.",
      "Light full-stack ability (API routes, auth flows).",
      "Prior product-studio or consulting delivery.",
    ],

    applyQuestions: [
      {
        id: "ui_craft",
        label: "Link one UI you are proud of and explain two craft decisions you made.",
        hint: "Public URLs preferred; private work can be described without confidential screenshots.",
      },
      {
        id: "ai_surface",
        label: "How would you design empty, loading, and error states for a copilot review screen?",
        hint: "Focus on operator trust, not visual novelty.",
      },
    ],
  },
  {
    slug: "senior-backend-platform-engineer",
    title: "Senior Backend / Platform Engineer",
    team: "Engineering",
    location: "Remote · Worldwide",
    type: "Full-time · Contract",
    experience: "5+ years production",
    reportsTo: "CTO",
    summary:
      "Design APIs, data layers, and platform foundations that keep client products reliable, observable, and hand-over-ready.",
    about: [
      "Condax products must survive real traffic, real data, and real operators. Backend and platform work is judged by clarity under failure - not only green-path demos.",
      "As a Senior Backend / Platform Engineer you shape services, data models, integrations, auth, jobs, and observability so a client’s team can operate what we ship. You make pragmatic buy-versus-build calls, keep tenancy and secrets explicit, and partner when AI features need durable plumbing.",
      "Over five years of backend or platform engineering in production is required, including systems you have personally operated or been accountable for.",
    ],
    impact: [
      "Establish reliable foundations engagements can build on without reinventing auth, jobs, or logging.",
      "Reduce production risk through observability, backups, and documented failure modes.",
      "Enable clean handover to client engineers with architecture notes they can actually use.",
    ],
    youWill: [
      "Design and implement APIs, services, and data models for custom products and internal tools.",
      "Own reliability basics: structured logging, metrics, alerting, backups, and recoverable failure modes.",
      "Integrate third-party systems (CRM, ERP, identity, AI vendors) with clear boundaries and ownership.",
      "Partner on AI features so retrieval, tool calls, and permissions sit on solid platform rails.",
      "Improve CI/CD, environments, and secrets handling for small delivery teams.",
      "Write architecture notes and runbooks suitable for client engineering handover.",
      "Pressure-test scope: push back on fragile shortcuts that will fail after Condax exits.",
    ],
    youMight: [
      "Over 5 years of backend or platform engineering in production.",
      "Strong skill in at least one of Node/TypeScript, Python, Go, or Java - plus SQL fluency.",
      "Hands-on experience with cloud infrastructure and containerized deployments.",
      "A track record of operating systems you built (on-call or equivalent ownership).",
      "Strong English for design reviews, incident notes, and client technical sessions.",
    ],
    nice: [
      "Event-driven architectures, queues, or workflow engines.",
      "Security and compliance-minded practices (least privilege, audit trails).",
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
        label:
          "Walk through how you would integrate a third-party LLM vendor under a client’s VPC or tenancy constraints.",
        hint: "Trade-offs and failure modes matter more than brand names.",
      },
    ],
  },
  {
    slug: "senior-ai-engineer",
    title: "Senior AI / LLM Engineer",
    team: "AI & Engineering",
    location: "Remote · Worldwide",
    type: "Full-time · Contract",
    experience: "5+ years software · production AI/ML",
    reportsTo: "CTO",
    summary:
      "Turn AI pilots into systems clients can run - copilots, retrieval, and automations grounded in their data, with evals and human checkpoints.",
    about: [
      "Condax treats AI as product engineering with extra failure modes. We do not ship chat demos that cannot survive contact with real corpora, access rules, or operators.",
      "As a Senior AI / LLM Engineer you design retrieval, tool use, evaluation, and human review so features earn their place in production. You will refuse work when a prompt is not a product, choose vendors against cost and data residency, and leave clients able to operate what you shipped.",
      "Candidates need over five years of software engineering experience, including at least one LLM or ML feature that real users depended on - with the engineering habits (APIs, tests, reviews) to match.",
    ],
    impact: [
      "Convert AI ambition into bounded pilots and production features with measurable quality.",
      "Establish eval and logging practices Condax and clients can reuse.",
      "Protect clients from unsafe or unmaintainable AI shortcuts.",
    ],
    youWill: [
      "Design and build copilots, RAG pipelines, and workflow automations on real client stacks.",
      "Select models and vendors against latency, cost, quality, and data-residency constraints.",
      "Add evals, tracing, and human review steps before anything is called production-ready.",
      "Partner with product and engineering so AI sits inside the workflow - not a side chatbot.",
      "Support AI-for-teams engagements: safe usage patterns, tenancy boundaries, and operator materials.",
      "Document prompts, datasets, failure modes, and operational playbooks for handover.",
      "Explain adopt-versus-build recommendations clearly to non-ML stakeholders in English.",
    ],
    youMight: [
      "Over 5 years of software engineering, including production LLM or ML features real users relied on.",
      "Solid engineering habits - APIs, tests, code review - not notebook-only work.",
      "Judgment to defer or refuse when data quality, access control, or eval coverage is inadequate.",
      "Strong English for async handovers, leadership readouts, and client workshops.",
    ],
    nice: [
      "Enterprise or regulated data environments.",
      "Familiarity with major model APIs, vector stores, and eval harnesses.",
      "Experience mentoring client engineers after handover.",
      "Background in search, NLP, or information retrieval.",
    ],

    applyQuestions: [
      {
        id: "production_ai",
        label:
          "Describe an LLM or ML feature you shipped to production. What broke after launch, and how did you fix it?",
      },
      {
        id: "eval_approach",
        label: "How do you decide a retrieval or agent change is safe to release?",
        hint: "Mention metrics, human review, or rollout strategy if relevant.",
      },
    ],
  },
  {
    slug: "senior-devops-cloud-engineer",
    title: "Senior DevOps / Cloud Engineer",
    team: "Platform",
    location: "Remote · Worldwide",
    type: "Full-time · Contract",
    experience: "5+ years production",
    reportsTo: "CTO",
    summary:
      "Make environments, pipelines, and cloud foundations reliably operable for Condax delivery teams and client handovers.",
    about: [
      "Delivery speed collapses when environments are fragile. Condax engagements need infrastructure that is reviewable, least-privilege by default, and understandable after we leave.",
      "As a Senior DevOps / Cloud Engineer you build CI/CD, environments, identity, networking, and observability that let small senior squads ship safely - and that client platform teams can operate without reverse-engineering one-offs.",
      "Over five years in DevOps, SRE, or cloud platform roles is required, with experience supporting product teams rather than ticket queues alone.",
    ],
    impact: [
      "Shorten time-to-safe-deploy across Condax engagements.",
      "Reduce secrets, access, and environment drift risk for client tenancies.",
      "Leave infrastructure handovers that a small client ops team can run.",
    ],
    youWill: [
      "Build and maintain CI/CD, environments, and release workflows for product teams.",
      "Implement infrastructure as code on AWS, GCP, or Azure with reviewable changes.",
      "Harden secrets, identity, networking, and backup practices for client tenancies.",
      "Improve observability: logs, metrics, tracing, and actionable alerts.",
      "Partner with engineers on performance, cost, and operational readiness before go-live.",
      "Produce handover documentation clients’ platform teams can operate from.",
      "Prefer clear patterns over clever snowflakes that only you can maintain.",
    ],
    youMight: [
      "Over 5 years in DevOps, SRE, or cloud platform roles.",
      "Hands-on Terraform/Pulumi (or equivalent) and container orchestration experience.",
      "Experience supporting product delivery teams, not only L1 ticket queues.",
      "Strong English for runbooks, incident notes, and client platform conversations.",
    ],
    nice: [
      "FinOps awareness and cost governance.",
      "Security tooling (WAF, CSPM, secret scanning).",
      "Multi-account or multi-tenant cloud organization design.",
      "Prior agency or consulting delivery.",
    ],

    applyQuestions: [
      {
        id: "platform_story",
        label: "Describe a platform or pipeline improvement that measurably reduced delivery friction.",
      },
      {
        id: "handover",
        label: "What does a good infrastructure handover look like for a client with a small ops team?",
      },
    ],
  },
  {
    slug: "senior-java-spring-engineer",
    title: "Senior Java / Spring Boot Engineer",
    team: "Engineering",
    location: "Remote · Worldwide",
    type: "Full-time · Contract",
    experience: "5+ years production",
    reportsTo: "CTO",
    summary:
      "Design and ship production Java / Spring Boot services, APIs, and integrations for Condax client engagements - with clear ownership through handover.",
    about: [
      "Many Condax clients already run on the JVM. When the right path is custom software on Java and Spring Boot, we need senior engineers who can design services that are reliable, observable, and understandable after we leave.",
      "As a Senior Java / Spring Boot Engineer you own backend delivery on the JVM stack: domain modeling, Spring Boot services, data access, messaging, security, and production readiness. You will work alongside TypeScript and platform peers when engagements span stacks, and you will talk to clients in English about trade-offs - not only ticket status.",
      "Over five years of production Java experience is required, including Spring Boot systems you have shipped and operated (or been accountable for in production).",
    ],
    impact: [
      "Deliver JVM-backed products and services clients can run without Condax as a permanent dependency.",
      "Raise the bar for Spring Boot architecture, testing, and operational clarity on engagements.",
      "Bridge Java client stacks with Condax delivery standards for handover and observability.",
    ],
    youWill: [
      "Design and implement Spring Boot services, REST/GraphQL APIs, and domain models for scoped client builds.",
      "Own data access, transactions, and consistency patterns appropriate to the problem (JPA/JDBC, messaging, or both).",
      "Integrate with identity providers, queues, and third-party systems under explicit tenancy and security constraints.",
      "Establish testing strategy: unit, integration, and contract tests that protect production paths.",
      "Partner with frontend, AI, and platform engineers when the engagement spans stacks.",
      "Produce architecture notes, runbooks, and known-limits documentation for client Java teams.",
      "Participate in client demos and technical trade-off sessions in English.",
    ],
    youMight: [
      "Over 5 years of production Java engineering, including Spring Boot in live systems.",
      "Strong grasp of concurrency, JVM performance basics, and API design.",
      "Experience with relational databases, migrations, and production troubleshooting on the JVM.",
      "Comfort owning ambiguous backend scope without a large supporting cast.",
      "Strong spoken and written English for client-facing technical conversations.",
    ],
    nice: [
      "Kotlin alongside Java in production.",
      "Kafka, RabbitMQ, or similar messaging in production.",
      "Prior consulting or multi-client delivery.",
      "Exposure to LLM/API integration from Spring services.",
      "Cloud deployment of JVM services (AWS, GCP, or Azure).",
    ],

    applyQuestions: [
      {
        id: "spring_ship",
        label: "Describe a Spring Boot service you owned in production. What failed under load or edge cases, and what did you change?",
      },
      {
        id: "java_tradeoff",
        label: "When would you choose messaging over a synchronous API between services - and when would you refuse that complexity?",
        hint: "A concrete past decision is better than a textbook answer.",
      },
    ],
  },
  {
    slug: "senior-dotnet-engineer",
    title: "Senior C# / .NET Engineer",
    team: "Engineering",
    location: "Remote · Worldwide",
    type: "Full-time · Contract",
    experience: "5+ years production",
    reportsTo: "CTO",
    summary:
      "Design and ship production C# / .NET services, APIs, and integrations for Condax client engagements - with maintainable architecture and clean handover.",
    about: [
      "A substantial share of enterprise clients run on .NET. Condax needs senior engineers who can deliver on that stack without treating it as a second-class path next to TypeScript.",
      "As a Senior C# / .NET Engineer you own backend (and full-stack where ASP.NET UI is in scope) delivery: service design, data access, identity, integrations, testing, and production readiness. You will collaborate with Condax peers on polyglot engagements and communicate clearly with client stakeholders in English.",
      "Over five years of production C# / .NET experience is required, including systems you have shipped and been accountable for after go-live.",
    ],
    impact: [
      "Ship .NET services and applications that client teams can operate and extend.",
      "Establish Condax-quality standards for ASP.NET / .NET architecture on engagements.",
      "Reduce handover friction for Microsoft-stack client engineering organizations.",
    ],
    youWill: [
      "Design and implement .NET services and APIs (ASP.NET Core) for scoped client products and internal tools.",
      "Own data access, domain modeling, and persistence patterns that match the engagement’s constraints.",
      "Integrate with Microsoft and third-party identity, messaging, and SaaS systems under clear security boundaries.",
      "Define testing and observability practices appropriate to production .NET workloads.",
      "Partner with frontend, AI, and platform engineers on polyglot deliveries.",
      "Write architecture notes and runbooks suitable for client .NET teams.",
      "Present technical trade-offs and demos to clients in English.",
    ],
    youMight: [
      "Over 5 years of production C# / .NET engineering.",
      "Strong ASP.NET Core experience and solid SQL / EF Core (or equivalent) fluency.",
      "Evidence of shipping and operating services under real production constraints.",
      "Comfort with ambiguous scope and senior IC ownership.",
      "Strong spoken and written English for client technical sessions.",
    ],
    nice: [
      "Azure-native delivery (App Service, Functions, Service Bus, Entra ID).",
      "Blazor or other .NET UI experience when the product stays on Microsoft stack.",
      "Prior consulting or multi-client delivery.",
      "Exposure to integrating LLM APIs from .NET services.",
      "Containerized .NET deployments and CI/CD ownership.",
    ],

    applyQuestions: [
      {
        id: "dotnet_ship",
        label: "Describe a .NET service or application you owned in production. What operational pain did you hit, and how did you harden it?",
      },
      {
        id: "dotnet_boundaries",
        label: "How do you decide service boundaries in a .NET codebase that started as a modular monolith?",
        hint: "Trade-offs and a past example matter more than slogans.",
      },
    ],
  },
  {
    slug: "senior-technical-interviewer",
    title: "Senior Technical Interviewer",
    team: "Talent · Engineering",
    location: "Remote · Worldwide",
    type: "Full-time · Contract",
    experience: "5+ years production · deep interview craft",
    reportsTo: "CTO",
    summary:
      "Run deep technical interviews for Condax engineering hiring - assess real production judgment across stacks, not puzzle performance.",
    about: [
      "Condax hires only senior engineers. That bar only holds if interviews are rigorous, consistent, and grounded in how people actually ship software - not trivia or trick puzzles.",
      "As a Senior Technical Interviewer you conduct in-depth technical conversations for Condax candidates (and, when scoped, client hiring support). You probe architecture judgment, debugging instincts, stack depth (TypeScript, Java/Spring, C#/.NET, platform, AI), and English communication under client-delivery conditions.",
      "You are a strong senior engineer first. Interviewing is the focus of this role, but credibility comes from years of production work and the ability to evaluate peers fairly across multiple stacks.",
    ],
    impact: [
      "Protect Condax’s senior hiring bar with consistent, high-signal technical interviews.",
      "Reduce false positives and false negatives that waste delivery capacity.",
      "Give candidates a professional, respectful process that still surfaces real depth.",
    ],
    youWill: [
      "Design and run deep technical interviews aligned to Condax role profiles (full-stack, frontend, backend, Java/Spring, .NET, AI, platform).",
      "Assess production judgment: trade-offs, failure modes, ownership stories, and communication clarity in English.",
      "Write structured interview notes and hire/no-hire recommendations leadership can trust.",
      "Calibrate with Condax leadership on what “senior” means per stack - and push back when a candidate is mid-level in senior clothing.",
      "Maintain a living bank of scenario-based questions that mirror Condax delivery work (not LeetCode theater).",
      "Occasionally support client-side technical screening when Condax is asked to help evaluate engineers.",
      "Keep candidate experience high: clear expectations, no trick puzzles, timely written feedback inputs.",
    ],
    youMight: [
      "Over 5 years of production engineering, plus substantial experience interviewing or mentoring senior ICs.",
      "Depth in at least one major stack Condax hires for (TypeScript, Java/Spring, or C#/.NET) and literacy across others.",
      "Evidence you can separate signal from confidence - fair evaluation under time pressure.",
      "Excellent spoken English for long-form technical conversation with international candidates.",
      "Comfort delivering candid, evidence-based hire recommendations to leadership.",
    ],
    nice: [
      "Prior staff+/principal interviewing experience or hiring-committee work.",
      "Experience interviewing across both product and consulting environments.",
      "Familiarity with AI/LLM engineering assessment.",
      "Structured rubric design or interviewer training experience.",
    ],

    applyQuestions: [
      {
        id: "interview_signal",
        label: "Describe a time you reversed an initial positive impression during a technical interview. What evidence changed your mind?",
      },
      {
        id: "stack_depth",
        label: "Which stack are you deepest in, and how would you probe senior-level judgment in that stack in 45 minutes?",
        hint: "Outline the conversation structure - not a list of trivia questions.",
      },
    ],
  },
  {
    slug: "technical-interview-lead",
    title: "Technical Interview Lead",
    team: "Talent · Engineering",
    location: "Remote · Worldwide",
    type: "Full-time · Contract",
    experience: "7+ years production · hiring systems",
    reportsTo: "CTO",
    summary:
      "Own Condax’s technical interview system - rubrics, stack-specific depth (including Java/Spring and .NET), interviewer calibration, and bar quality.",
    about: [
      "As Condax grows senior engineering hiring across TypeScript, Java/Spring Boot, C#/.NET, AI, and platform, someone must own the interview system itself - not only run individual loops.",
      "As Technical Interview Lead you design and continuously improve how Condax evaluates senior engineers. You build stack-specific rubrics, train and calibrate interviewers, audit interview quality, and partner with leadership on hard hire calls. You still conduct high-stakes interviews yourself, especially for specialized stacks.",
      "This role requires deep technical credibility (7+ years production engineering) and proven experience building or leading interview processes - not recruiter coordination alone.",
    ],
    impact: [
      "Make Condax hiring quality predictable as role volume and stack diversity grow.",
      "Ensure Java/Spring, .NET, and other specialized roles get the same senior bar as core TypeScript delivery.",
      "Create an interview practice candidates experience as rigorous and fair.",
    ],
    youWill: [
      "Own the end-to-end technical interview framework for Condax engineering roles.",
      "Design stack-specific deep interviews for TypeScript, Java/Spring Boot, C#/.NET, AI/LLM, and platform candidates.",
      "Recruit, coach, and calibrate Senior Technical Interviewers; review their notes for consistency.",
      "Partner with leadership on final hiring recommendations and bar-raising decisions.",
      "Instrument the funnel: time-to-signal, pass rates by stage, and false-positive postmortems after bad hires (or near-misses).",
      "Keep question banks and rubrics current with how Condax actually delivers for clients.",
      "Run the most difficult interviews yourself when stack depth or seniority is ambiguous.",
    ],
    youMight: [
      "7+ years of production engineering plus ownership of a hiring or interview program.",
      "Personal depth in at least one of Java/Spring, C#/.NET, or large-scale TypeScript backends - and the ability to evaluate the others.",
      "Evidence of building rubrics, calibrating interviewers, or running hiring committees.",
      "Exceptional English communication for interviewing, coaching interviewers, and writing decision memos.",
      "Judgment to protect the senior bar under hiring pressure.",
    ],
    nice: [
      "Experience hiring for a consultancy, agency, or multi-product engineering org.",
      "Prior staff+/principal or engineering-manager background.",
      "Familiarity with AI engineering assessment.",
      "Operations mindset: metrics, process improvement, documentation.",
    ],

    applyQuestions: [
      {
        id: "bar_raise",
        label: "Tell us about a time you raised a hiring bar against organizational pressure. What did you change in the process afterward?",
      },
      {
        id: "multi_stack",
        label: "How would you structure Condax interviews so Java/Spring and .NET candidates are evaluated as rigorously as TypeScript candidates?",
        hint: "Speak to rubrics, interviewer assignment, and calibration - not slogans.",
      },
    ],
  },
];

export const generalApplyQuestions: Role["applyQuestions"] = [
  {
    id: "craft_focus",
    label:
      "Which craft are you targeting (e.g. TypeScript full-stack, Java/Spring, C#/.NET, AI, platform, technical interviewing), and roughly how many years of production experience?",
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

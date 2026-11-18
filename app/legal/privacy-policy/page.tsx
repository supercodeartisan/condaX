import type { Metadata } from "next";
import Link from "next/link";
import { EmailLink } from "@/components/EmailLink";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy policy" };

export default function PrivacyPage() {
  return (
    <main id="main-content" className="paddings mx-auto max-w-[820px] pt-40 pb-24 lg:pt-44">
      <h1 className="font-display text-[40px] font-light md:text-[52px]">Privacy policy</h1>
      <p className="mt-4 text-[14px] text-muted">Last updated · November 2026</p>
      <div className="mt-8 space-y-8 text-[16px] leading-relaxed text-neutral">
        <section className="space-y-4">
          <p>
            This policy explains how {site.legalName} (“Condax,” “we,” “us”) collects and uses
            personal information when you visit {site.url.replace("https://", "")}, contact us, or
            apply for a role. It applies to our marketing site and hiring flows. Client project work
            is governed by the contract and data terms for that engagement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-[24px] font-medium text-ink">Who we are</h2>
          <p>
            Condax is an international consultancy serving clients worldwide. For privacy questions,
            email{" "}
            <EmailLink
              to="support@condaxits.com"
              subject="Privacy question"
              className="text-cobalt underline underline-offset-4"
            >
              support@condaxits.com
            </EmailLink>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-[24px] font-medium text-ink">Information we collect</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="font-medium text-ink">Contact and referral forms:</span> name, email,
              company context you choose to share, location region, project needs, and optional
              attachments.
            </li>
            <li>
              <span className="font-medium text-ink">Careers applications:</span> name, email, phone,
              LinkedIn URL, location details, CV, answers to role questions, and portfolio links.
            </li>
            <li>
              <span className="font-medium text-ink">Technical data:</span> standard server logs and
              essential cookies needed to run the site. If we enable analytics, we will update this
              policy and the cookie notice accordingly.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-[24px] font-medium text-ink">How we use information</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Respond to enquiries and schedule conversations about potential work.</li>
            <li>Evaluate applications and communicate about hiring.</li>
            <li>Operate, secure, and improve the website.</li>
            <li>Meet legal or compliance obligations when required.</li>
          </ul>
          <p>We do not sell personal data. We do not use job applications or contact submissions to train public AI models.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-[24px] font-medium text-ink">Client project data</h2>
          <p>
            Files, credentials, and systems shared for an engagement stay in the tenancy and tools
            agreed for that project. We do not use client content to train public models. Retention
            and deletion follow the statement of work and any data processing terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-[24px] font-medium text-ink">Sharing</h2>
          <p>
            We may share information with service providers who help us run email, hosting, or
            recruiting infrastructure — under confidentiality obligations — or when required by law.
            We do not share your information for unrelated marketing lists.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-[24px] font-medium text-ink">International transfers</h2>
          <p>
            Because Condax works remotely with international clients and candidates, information may
            be processed in countries where Condax or our service providers operate. We take reasonable
            steps to protect information in transit and at rest.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-[24px] font-medium text-ink">Retention</h2>
          <p>
            Contact enquiries are kept as long as needed to respond and manage the relationship.
            Application materials are retained for the hiring process and for a limited period
            afterward for legitimate hiring records, then deleted or archived under our retention
            practice unless law requires longer retention.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-[24px] font-medium text-ink">Your choices</h2>
          <p>
            You may request access, correction, or deletion of personal information we hold about
            you by emailing support@condaxits.com. We may need to verify your request. Some records
            may be retained where we have a legal obligation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-[24px] font-medium text-ink">Cookies</h2>
          <p>
            See our{" "}
            <Link href="/legal/cookie-policy" className="text-cobalt underline underline-offset-4">
              Cookie policy
            </Link>{" "}
            for how we use cookies on this site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-[24px] font-medium text-ink">Changes</h2>
          <p>
            We may update this policy as our practices or legal requirements change. The “Last
            updated” date at the top will change when we do.
          </p>
        </section>
      </div>
    </main>
  );
}

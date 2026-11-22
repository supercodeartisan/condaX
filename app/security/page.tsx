import type { Metadata } from "next";
import Link from "next/link";
import { EmailLink } from "@/components/EmailLink";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Security & trust",
  description:
    "How Condax approaches data ownership, website security controls, and client project confidentiality — without overstated certification claims.",
};

export default function SecurityPage() {
  return (
    <main id="main-content" className="paddings mx-auto max-w-[820px] pt-40 pb-24 lg:pt-44">
      <h1 className="font-display text-[40px] font-light md:text-[52px]">Security &amp; trust</h1>
      <p className="mt-4 text-[14px] text-muted">Last updated · November 2026</p>
      <div className="mt-8 space-y-8 text-[16px] leading-relaxed text-neutral">
        <section className="space-y-4">
          <p>
            This page describes how {site.legalName} (“Condax”) handles information on this website
            and how we approach security in client work. It is a plain-language summary — not a
            certification statement. Unless your contract says otherwise, project-specific terms govern
            delivery engagements.
          </p>
          <p className="rounded-2xl border border-hairline bg-surface px-4 py-3 text-[14px] text-muted">
            Condax does not claim SOC 2, ISO 27001, HIPAA, or similar third-party attestation on this
            site. If you need formal compliance documentation for a procurement process, ask us what we
            can share for your engagement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-[24px] font-medium text-ink">Client data ownership</h2>
          <p>
            For consulting and product work, you retain ownership of your data, materials, and systems.
            We use client content only to deliver the agreed scope. We do not use contact submissions,
            referrals, or job applications to train public AI models. Retention and deletion for project
            data follow the statement of work and any data processing terms you sign with us.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-[24px] font-medium text-ink">Website and hiring data</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="font-medium text-ink">Contact and referral forms</span> — stored so we
              can respond and review introductions. Submissions use bot-mitigation controls described
              below.
            </li>
            <li>
              <span className="font-medium text-ink">Careers applications</span> — CVs and supporting
              files are uploaded to private object storage (Vercel Blob) when that storage is
              configured. Access for Condax staff is through authenticated admin routes, not public
              links.
            </li>
            <li>
              <span className="font-medium text-ink">Hosting</span> — this marketing site and its APIs
              run on managed infrastructure (Vercel). Database records for enquiries and applications
              use a hosted Postgres provider when configured.
            </li>
          </ul>
          <p>
            For details on what we collect and why, see our{" "}
            <Link href="/legal/privacy-policy" className="text-cobalt underline underline-offset-4">
              Privacy policy
            </Link>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-[24px] font-medium text-ink">Controls on this site</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="font-medium text-ink">Cloudflare Turnstile</span> — when configured,
              public forms require a Turnstile challenge before we accept a submission.
            </li>
            <li>
              <span className="font-medium text-ink">Rate limiting</span> — API routes apply
              per-request limits to reduce abuse. Limits are enforced per deployment instance, not as a
              global guarantee.
            </li>
            <li>
              <span className="font-medium text-ink">Honeypot fields</span> — hidden fields help
              filter automated submissions without adding friction for real visitors.
            </li>
            <li>
              <span className="font-medium text-ink">HTTP security headers</span> — including
              Content-Security-Policy, Strict-Transport-Security (on HTTPS), frame denial, and
              nosniff settings on responses from this application.
            </li>
            <li>
              <span className="font-medium text-ink">Admin access</span> — internal review tools use a
              password gate and signed, httpOnly session cookies with a limited lifetime. Session
              tokens are not the raw password.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-[24px] font-medium text-ink">Least privilege and vendors</h2>
          <p>
            We aim to use the minimum credentials and access each integration needs — for example,
            private blob storage for CVs and scoped API keys for email and database providers. Client
            projects may involve additional subprocessors; we document those in contracts when they
            apply.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-[24px] font-medium text-ink">Incident response and questions</h2>
          <p>
            If you believe there is a security issue affecting data you shared with Condax, email{" "}
            <EmailLink
              to={site.emails.contact}
              subject="Security concern"
              className="text-cobalt underline underline-offset-4"
            >
              {site.emails.contact}
            </EmailLink>{" "}
            with enough detail for us to investigate. For privacy requests, use the same address or
            follow the steps in our privacy policy.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-[24px] font-medium text-ink">Related policies</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <Link href="/legal/privacy-policy" className="text-cobalt underline underline-offset-4">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/legal/cookie-policy" className="text-cobalt underline underline-offset-4">
                Cookie policy
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
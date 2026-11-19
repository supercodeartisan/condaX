import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { ContactFaq } from "@/components/ContactFaq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get in touch",
  description:
    "Contact Condax about AI enablement, custom software, or an advisory assessment. We typically reply within one business day.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string; scope?: string }>;
}) {
  const params = await searchParams;
  const referralCode = params.ref?.trim() || undefined;
  const defaultScope = params.scope?.trim() || undefined;

  return (
    <main id="main-content" className="pt-36 lg:pt-40">
      <div className="paddings mx-auto grid max-w-[1720px] gap-16 py-12 lg:grid-cols-[1fr_1.1fr] lg:py-20">
        <div>
          <h1 className="font-display text-[48px] leading-[1.1] font-medium tracking-tight text-ink md:text-[64px]">
            Contact Condax
          </h1>
          <p className="mt-5 max-w-[36ch] text-[18px] leading-relaxed text-neutral">
            Whether you need AI enablement, custom software, or an initial assessment, we work with
            organizations across time zones.
          </p>
          <div className="mt-6">
            <div className="text-[14px] font-medium text-ink">Average response time</div>
            <div className="text-[14px] text-muted">Within one business day</div>
          </div>
          <div className="mt-10 max-w-[46ch] space-y-2 border-t border-hairline pt-8 text-[15px] text-neutral">
            <p>
              Referring another organization?{" "}
              <Link href="/refer-a-client" className="text-cobalt underline underline-offset-4">
                Create a referral link
              </Link>
              .
            </p>
            <p>
              Interested in joining Condax?{" "}
              <Link href="/careers" className="text-cobalt underline underline-offset-4">
                View open roles
              </Link>
              .
            </p>
            <p className="pt-2 text-[14px] text-muted">
              Prefer email? {site.emails.contact}
            </p>
          </div>
        </div>
        <ContactForm referralCode={referralCode} defaultScope={defaultScope} />
      </div>
      <ContactFaq />
    </main>
  );
}

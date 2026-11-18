import type { Metadata } from "next";
import { ReferralForm } from "@/components/ReferralForm";

export const metadata: Metadata = { title: "Refer a client" };

export default function ReferPage() {
  return (
    <main id="main-content" className="paddings mx-auto max-w-[820px] pt-40 pb-24 lg:pt-44">
      <h1 className="font-display text-[48px] leading-[1.1] font-light md:text-[64px]">
        Refer an organization that needs AI enablement or custom software.
      </h1>
      <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-neutral">
        <p>
          Share who they are and how Condax should reach them. You will receive a unique referral
          link to send. When they submit the contact form through that link, the referral is attached
          automatically.
        </p>
        <p>
          When a paid engagement results from your introduction, we will agree referral terms in
          writing before any contract is signed.
        </p>
      </div>
      <ReferralForm />
      <p className="mt-8 text-[14px] text-muted">
        Or email{" "}
        <a href="mailto:hello@condax.solutions" className="text-cobalt underline underline-offset-4">
          hello@condax.solutions
        </a>{" "}
        with “Referral” in the subject line.
      </p>
    </main>
  );
}

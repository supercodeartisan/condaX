import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = { title: "Get in touch" };

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const params = await searchParams;
  const referralCode = params.ref?.trim() || undefined;

  return (
    <main id="main-content" className="pt-36 lg:pt-40">
      <div className="paddings mx-auto grid max-w-[1720px] gap-16 py-12 lg:grid-cols-[1fr_1.1fr] lg:py-20">
        <div>
          <h1 className="font-display text-[48px] leading-[1.1] font-light md:text-[64px]">
            Contact Condax
          </h1>
          <p className="mt-5 max-w-[36ch] text-[18px] text-px-white-64">
            Whether you need AI enablement, custom software, or an initial assessment, we work with
            organizations across time zones.
          </p>
          <div className="mt-6">
            <div className="text-[14px] font-medium">Average response time</div>
            <div className="text-[14px] text-px-white-48">Within one business day</div>
          </div>
          <div className="mt-10 max-w-[46ch] space-y-2 border-t border-px-white-12 pt-8 text-[15px] text-px-white-64">
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
          </div>
        </div>
        <ContactForm referralCode={referralCode} />
      </div>
    </main>
  );
}

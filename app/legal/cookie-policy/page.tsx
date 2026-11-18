import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Cookie policy" };

export default function CookiePage() {
  return (
    <main id="main-content" className="paddings mx-auto max-w-[820px] pt-40 pb-24 lg:pt-44">
      <h1 className="font-display text-[40px] font-light md:text-[52px]">Cookie policy</h1>
      <p className="mt-4 text-[14px] text-muted">Last updated · November 2026</p>
      <div className="mt-8 space-y-8 text-[16px] leading-relaxed text-neutral">
        <p>
          This policy describes how {site.legalName} (“Condax”) uses cookies and similar technologies
          on {site.url.replace("https://", "")}.
        </p>

        <section className="space-y-3">
          <h2 className="font-display text-[24px] font-medium text-ink">What are cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. They help
            the site function, remember preferences, or understand how the site is used.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-[24px] font-medium text-ink">How we use cookies</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="font-medium text-ink">Essential:</span> required for security, load
              balancing, and basic site operation. The site may not work correctly without them.
            </li>
            <li>
              <span className="font-medium text-ink">Preferences:</span> if we add features that
              remember UI choices, we will list them here.
            </li>
            <li>
              <span className="font-medium text-ink">Analytics:</span> we may use privacy-respecting
              analytics to understand aggregate traffic. If enabled, we will identify the provider
              here and, where required, request consent before non-essential cookies run.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-[24px] font-medium text-ink">Your controls</h2>
          <p>
            You can control cookies through your browser settings — including blocking or deleting
            cookies. Blocking essential cookies may affect site functionality.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-[24px] font-medium text-ink">More information</h2>
          <p>
            For how we handle personal data more broadly, see our{" "}
            <Link href="/legal/privacy-policy" className="text-cobalt underline underline-offset-4">
              Privacy policy
            </Link>
            . Questions:{" "}
            <a href="mailto:support@condaxits.com" className="text-cobalt underline underline-offset-4">
              support@condaxits.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}

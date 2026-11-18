import type { Metadata } from "next";
import Link from "next/link";
import { PillLink } from "@/components/Buttons";

export const metadata: Metadata = {
  title: "Application received",
  robots: { index: false, follow: false },
};

export default async function ApplicationSubmittedPage({
  searchParams,
}: {
  searchParams: Promise<{ ok?: string; error?: string; role?: string; id?: string }>;
}) {
  const params = await searchParams;
  const failed = Boolean(params.error) || params.ok !== "1";

  return (
    <main id="main-content" className="paddings mx-auto max-w-[720px] pt-40 pb-24 lg:pt-44">
      {failed ? (
        <>
          <p className="text-[13px] tracking-[0.14em] text-red-700 uppercase">Not submitted</p>
          <h1 className="font-display mt-4 text-[40px] font-light md:text-[52px]">
            We could not save that application.
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-neutral">
            {params.error || "Please go back and try again."}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <PillLink href="/careers" variant="solid">
              Back to careers
            </PillLink>
            <a
              href="mailto:admin@condaxits.com"
              className="inline-flex items-center rounded-full border border-hairline px-5 py-2.5 text-[15px] font-medium text-ink"
            >
              Email admin@condaxits.com
            </a>
          </div>
        </>
      ) : (
        <>
          <p className="text-[13px] tracking-[0.14em] text-cobalt uppercase">Application received</p>
          <h1 className="font-display mt-4 text-[40px] font-light md:text-[52px]">
            Thank you. We received your application.
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-neutral">
            {params.role ? (
              <>
                Your application for <span className="text-ink">{params.role}</span> has been
                received.{" "}
              </>
            ) : null}
            We typically reply within a few business days.
          </p>
          {params.id ? (
            <p className="mt-3 text-[13px] text-muted">Reference · {params.id}</p>
          ) : null}
          <div className="mt-10 flex flex-wrap gap-3">
            <PillLink href="/careers" variant="solid">
              Back to careers
            </PillLink>
            <Link href="/" className="inline-flex items-center text-[15px] text-cobalt underline underline-offset-4">
              Home
            </Link>
          </div>
        </>
      )}
    </main>
  );
}

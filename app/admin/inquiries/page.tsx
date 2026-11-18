import Link from "next/link";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { listInquiriesLocal, listReferralsLocal } from "@/lib/local-store";

export const dynamic = "force-dynamic";

export default async function AdminInquiriesPage() {
  const authed = await isAdminAuthenticated();

  if (!authed) {
    return (
      <main className="paddings mx-auto max-w-[720px] pt-28 pb-24">
        <h1 className="font-display text-[40px] font-light">Admin · Inquiries</h1>
        <p className="mt-4 text-neutral">
          Sign in at{" "}
          <Link href="/admin/applications" className="text-cobalt underline underline-offset-4">
            /admin/applications
          </Link>{" "}
          first.
        </p>
      </main>
    );
  }

  const [inquiries, referrals] = await Promise.all([
    listInquiriesLocal(100),
    listReferralsLocal(100),
  ]);

  return (
    <main className="paddings mx-auto max-w-[1100px] pt-28 pb-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-[40px] font-light">Inquiries & referrals</h1>
          <p className="mt-2 text-[15px] text-neutral">
            Contact submissions and referral links stored for review.
          </p>
        </div>
        <Link href="/admin/applications" className="text-[14px] text-cobalt underline underline-offset-4">
          Applications
        </Link>
      </div>

      <section className="mt-12">
        <h2 className="text-[20px] font-medium">Referrals ({referrals.length})</h2>
        <div className="mt-4 divide-y divide-hairline border-y border-hairline">
          {referrals.length === 0 ? (
            <p className="py-6 text-[14px] text-muted">No referrals yet.</p>
          ) : (
            referrals.map((r) => (
              <article key={r.id} className="grid gap-2 py-5 md:grid-cols-[140px_1fr_1fr]">
                <div>
                  <div className="font-medium text-cobalt">{r.code}</div>
                  <div className="text-[12px] text-muted">{new Date(r.created_at).toLocaleString()}</div>
                </div>
                <div className="text-[14px]">
                  <div className="font-medium">{r.organization}</div>
                  <div className="text-neutral">
                    {r.contact_name} · {r.contact_email}
                  </div>
                </div>
                <div className="text-[14px] text-neutral">
                  From {r.referrer_name} · {r.referrer_email}
                  {r.notes ? <p className="mt-1 text-[13px]">{r.notes}</p> : null}
                </div>
              </article>
            ))
          )}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-[20px] font-medium">Inquiries ({inquiries.length})</h2>
        <div className="mt-4 divide-y divide-hairline border-y border-hairline">
          {inquiries.length === 0 ? (
            <p className="py-6 text-[14px] text-muted">No inquiries yet.</p>
          ) : (
            inquiries.map((item) => (
              <article key={item.id} className="grid gap-2 py-5 md:grid-cols-[120px_1fr]">
                <div>
                  <div className="text-[12px] tracking-wide text-muted uppercase">{item.kind}</div>
                  <div className="mt-1 text-[12px] text-muted">
                    {new Date(item.created_at).toLocaleString()}
                  </div>
                </div>
                <div className="text-[14px]">
                  <div className="font-medium">
                    {item.name} · {item.email}
                  </div>
                  {item.referral_code ? (
                    <div className="mt-1 text-cobalt">Referral · {item.referral_code}</div>
                  ) : null}
                  <pre className="mt-3 overflow-x-auto rounded-xl bg-warm p-3 text-[12px] leading-relaxed text-neutral whitespace-pre-wrap">
                    {JSON.stringify(item.payload, null, 2)}
                  </pre>
                </div>
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  );
}

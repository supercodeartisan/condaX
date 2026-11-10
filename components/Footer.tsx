import Link from "next/link";
import { Ribbon } from "@/components/Ribbon";
import { footerNav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-px-white-8 sm:mt-[200px]">
      <div className="absolute inset-y-0 right-0 left-1/3 opacity-40">
        <Ribbon />
      </div>
      <div className="paddings relative mx-auto grid max-w-[1720px] gap-12 py-16 lg:grid-cols-[1.4fr_1fr] lg:py-24">
        <p className="font-display max-w-[18ch] text-[40px] leading-[110%] font-light md:text-[56px] lg:text-[64px]">
          Tools in the workflow, or a product built for you.
        </p>
        <nav aria-label="Footer navigation" className="grid grid-cols-3 gap-6 text-[14px] md:text-[16px]">
          <FooterCol title="Company" items={footerNav.company} />
          <FooterCol title="Services" items={footerNav.services} />
          <FooterCol title="Solutions" items={footerNav.solutions} />
        </nav>
      </div>
      <div className="paddings relative mx-auto flex max-w-[1720px] flex-col gap-6 border-t border-px-white-8 py-6 text-[13px] text-px-white-48 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p>© {new Date().getFullYear()} {site.legalName}</p>
          <p className="mt-1 text-px-white-32">
            {site.name} · Based in {site.base} · {site.footprint}
          </p>
        </div>
        <div className="flex flex-wrap gap-5">
          <Link href="/careers" className="hover:text-px-lime">Careers</Link>
          <Link href="/refer-a-client" className="hover:text-px-lime">Refer a client</Link>
          <Link href="/legal/privacy-policy" className="hover:text-px-lime">Legal</Link>
          <Link href="/legal/cookie-policy" className="hover:text-px-lime">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { href: string; label: string }[] }) {
  return (
    <div>
      <div className="mb-3 text-px-white-48">{title}</div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-white transition-colors hover:text-px-lime">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

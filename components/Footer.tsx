import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerNav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-night text-paper">
      <Container className="grid gap-14 py-16 lg:grid-cols-[1.3fr_1fr] lg:gap-20 lg:py-24">
        <div>
          <p className="font-display text-[22px] font-semibold tracking-[-0.04em] text-paper">
            {site.name}
          </p>
          <p className="mt-5 max-w-[34ch] text-[16px] leading-relaxed text-white/55">
            AI, automation, and product engineering consultancy. We design and ship software your
            organization can operate and maintain after handover.
          </p>
          <p className="mt-8 text-[13px] text-white/40">Remote delivery. Global client base.</p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <FooterCol title="Company" items={footerNav.company} />
          <FooterCol title="Services" items={footerNav.services} />
          <FooterCol title="Solutions" items={footerNav.solutions} />
        </nav>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-[13px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}
          </p>
          <div className="flex flex-wrap gap-5">
            <Link href="/careers" className="transition-colors hover:text-white">
              Careers
            </Link>
            <Link href="/get-in-touch" className="transition-colors hover:text-white">
              Contact
            </Link>
            <Link href="/legal/privacy-policy" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="/legal/cookie-policy" className="transition-colors hover:text-white">
              Cookies
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { href: string; label: string }[] }) {
  return (
    <div>
      <div className="mb-4 text-[12px] tracking-[0.14em] text-white/40 uppercase">{title}</div>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-[14px] text-white/75 transition-colors hover:text-white">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

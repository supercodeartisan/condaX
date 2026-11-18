"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { nav } from "@/lib/site";
import { cn } from "@/lib/cn";

type Menu = "services" | "solutions" | "mobile" | null;

const primaryLinks = [
  { href: "/work", label: "Work" },
  { href: "/about-us", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/careers", label: "Careers" },
];

export function Header() {
  const pathname = usePathname();
  const [menu, setMenu] = useState<Menu>(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMenu(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menu !== "mobile") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menu]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-40">
      <a
        href="#main-content"
        className="sr-only z-50 focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-cobalt focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <div
        className={cn(
          "absolute inset-0 -z-10 border-b transition-[background-color,border-color,backdrop-filter,box-shadow] duration-300",
          scrolled || menu
            ? "border-hairline bg-paper/90 shadow-[0_8px_30px_rgba(17,17,16,0.04)] backdrop-blur-xl"
            : "border-transparent bg-paper/55 backdrop-blur-md",
        )}
      />
      <div className="paddings relative mx-auto flex h-[88px] w-full max-w-[1520px] items-center justify-between">
        <Logo size="lg" />

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex" aria-label="Primary">
          <NavTrigger
            label="Services"
            open={menu === "services"}
            active={pathname.startsWith("/services") || pathname === "/what-we-do"}
            onOpen={() => setMenu("services")}
            onToggle={() => setMenu(menu === "services" ? null : "services")}
          />
          <NavTrigger
            label="Solutions"
            open={menu === "solutions"}
            active={pathname.startsWith("/solutions")}
            onOpen={() => setMenu("solutions")}
            onToggle={() => setMenu(menu === "solutions" ? null : "solutions")}
          />
          {primaryLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors",
                  active
                    ? "bg-cobalt/10 text-cobalt"
                    : "text-charcoal/75 hover:text-cobalt",
                )}
                onMouseEnter={() => setMenu(null)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="/get-in-touch" className="max-sm:hidden" arrow>
            Contact
          </ButtonLink>
          <button
            type="button"
            className="inline-flex items-center rounded-full border border-[#d7dde8] bg-white/70 px-4 py-2 text-[14px] font-medium text-charcoal lg:hidden"
            aria-expanded={menu === "mobile"}
            aria-controls="mobile-nav"
            onClick={() => setMenu(menu === "mobile" ? null : "mobile")}
          >
            {menu === "mobile" ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "absolute top-full right-0 left-0 z-10 mx-auto hidden w-[min(920px,calc(100vw-2rem))] pt-2 transition-[opacity,transform] duration-250 ease-out lg:block",
          menu === "services" || menu === "solutions"
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0",
        )}
        onMouseLeave={() => setMenu(null)}
      >
        {menu === "services" ? <ServicesPanel /> : null}
        {menu === "solutions" ? <SolutionsPanel /> : null}
      </div>

      {menu === "mobile" ? <MobileMenu onClose={() => setMenu(null)} /> : null}
    </header>
  );
}

function NavTrigger({
  label,
  open,
  active,
  onOpen,
  onToggle,
}: {
  label: string;
  open: boolean;
  active?: boolean;
  onOpen: () => void;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      className={cn(
        "rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors",
        open || active ? "bg-cobalt/10 text-cobalt" : "text-charcoal/75 hover:text-cobalt",
      )}
      aria-expanded={open}
      aria-haspopup="true"
      onClick={onToggle}
      onMouseEnter={onOpen}
    >
      {label}
    </button>
  );
}

function ServicesPanel() {
  return (
    <div className="overflow-hidden rounded-2xl border border-hairline bg-surface shadow-[0_24px_80px_rgba(17,17,16,0.08)]">
      <div className="grid grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-1 p-3">
          {nav.services.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-3 transition-colors hover:bg-warm"
            >
              <div className="text-[15px] font-medium text-ink">{item.title}</div>
              <div className="mt-1 text-[13px] leading-snug text-neutral">{item.description}</div>
            </Link>
          ))}
        </div>
        <Link
          href="/what-we-do"
          className="group relative m-3 overflow-hidden rounded-xl bg-warm p-6"
        >
          <div className="eyebrow">What we do</div>
          <p className="font-display mt-3 text-[22px] leading-snug font-medium tracking-tight text-ink">
            Product and AI engineering — from initial scope through production handover.
          </p>
          <span className="mt-6 inline-flex text-[14px] font-medium text-cobalt group-hover:underline">
            Our approach
          </span>
        </Link>
      </div>
    </div>
  );
}

function SolutionsPanel() {
  return (
    <div className="overflow-hidden rounded-2xl border border-hairline bg-surface p-3 shadow-[0_24px_80px_rgba(17,17,16,0.08)]">
      <div className="grid grid-cols-2 gap-2">
        {nav.solutions.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-xl px-4 py-4 transition-colors hover:bg-warm"
          >
            <div className="text-[15px] font-medium text-ink">{item.title}</div>
            <div className="mt-1 text-[13px] leading-snug text-neutral">{item.description}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [open, setOpen] = useState<"services" | "solutions" | null>(null);
  const titleId = useId();

  return (
    <div
      id="mobile-nav"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 top-[88px] z-50 overflow-y-auto border-t border-hairline bg-paper lg:hidden"
    >
      <p id={titleId} className="sr-only">
        Site navigation
      </p>
      <div className="paddings flex flex-col gap-1 py-8">
        <MobileGroup
          label="Services"
          open={open === "services"}
          onToggle={() => setOpen(open === "services" ? null : "services")}
        >
          {nav.services.map((item) => (
            <Link key={item.href} href={item.href} onClick={onClose} className="block py-2 pl-1 text-neutral">
              <span className="text-[16px] text-charcoal">{item.title}</span>
              <span className="mt-1 block text-[14px]">{item.description}</span>
            </Link>
          ))}
        </MobileGroup>
        <MobileGroup
          label="Solutions"
          open={open === "solutions"}
          onToggle={() => setOpen(open === "solutions" ? null : "solutions")}
        >
          {nav.solutions.map((item) => (
            <Link key={item.href} href={item.href} onClick={onClose} className="block py-2 pl-1 text-neutral">
              <span className="text-[16px] text-charcoal">{item.title}</span>
              <span className="mt-1 block text-[14px]">{item.description}</span>
            </Link>
          ))}
        </MobileGroup>
        {primaryLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="py-3 font-display text-[28px] font-medium tracking-tight text-ink"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/get-in-touch"
          onClick={onClose}
          className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-cobalt px-5 py-2.5 text-[15px] font-medium text-white hover:bg-cobalt-hover"
        >
          Contact
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path
              d="M3 7h8M8 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

function MobileGroup({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-[#d7dde8] pb-3">
      <button
        type="button"
        className="flex w-full items-center justify-between py-3 font-display text-[28px] font-medium tracking-tight text-ink"
        aria-expanded={open}
        onClick={onToggle}
      >
        {label}
        <span className="text-[18px] text-muted" aria-hidden>
          {open ? "−" : "+"}
        </span>
      </button>
      {open ? <div className="pb-3">{children}</div> : null}
    </div>
  );
}

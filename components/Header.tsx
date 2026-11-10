"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { Arrow, PillLink } from "@/components/Buttons";
import { nav } from "@/lib/site";
import { cn } from "@/lib/cn";

type Menu = "services" | "solutions" | "mobile" | null;

export function Header() {
  const pathname = usePathname();
  const [menu, setMenu] = useState<Menu>(null);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    document.documentElement.classList.toggle("homepage", isHome);
    return () => document.documentElement.classList.remove("homepage");
  }, [isHome]);

  useEffect(() => {
    setMenu(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <a
        href="#main-content"
        className="sr-only z-50 focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-px-lime focus:px-4 focus:py-2 focus:text-px-ink"
      >
        Skip to main content
      </a>
      <div
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 h-full transition-[background-color,backdrop-filter] duration-[230ms] ease",
          scrolled || menu ? "bg-px-black-72 backdrop-blur-[10px]" : "bg-transparent",
        )}
      />
      <div className="paddings relative mx-auto flex h-16 w-full max-w-[1720px] items-center justify-between lg:h-20">
        <Logo className="text-white" />

        <nav className="absolute left-1/2 hidden h-full -translate-x-1/2 items-center lg:flex">
          <button
            className={cn(
              "rounded-[32px] px-4 py-3 text-[16px] font-medium leading-[150%] text-white transition-colors duration-300 hover:text-px-lime lg:px-5",
              menu && menu !== "services" && "text-px-white-48",
              menu === "services" && "text-px-lime",
            )}
            aria-expanded={menu === "services"}
            aria-haspopup="true"
            onClick={() => setMenu(menu === "services" ? null : "services")}
            onMouseEnter={() => setMenu("services")}
          >
            Services
          </button>
          <button
            className={cn(
              "rounded-[32px] px-4 py-3 text-[16px] font-medium leading-[150%] text-white transition-colors duration-300 hover:text-px-lime lg:px-5",
              menu && menu !== "solutions" && "text-px-white-48",
              menu === "solutions" && "text-px-lime",
            )}
            aria-expanded={menu === "solutions"}
            aria-haspopup="true"
            onClick={() => setMenu(menu === "solutions" ? null : "solutions")}
            onMouseEnter={() => setMenu("solutions")}
          >
            Solutions
          </button>
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-[32px] px-4 py-3 text-[16px] font-medium leading-[150%] text-white transition-colors duration-300 hover:text-px-lime lg:px-5"
              onMouseEnter={() => setMenu(null)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <PillLink href="/get-in-touch" variant="solid" className="max-sm:hidden">
            Get in touch
          </PillLink>
          <button
            className="inline-flex items-center rounded-[32px] border border-px-lime/25 bg-px-white/8 px-4 py-2 text-[16px] font-medium backdrop-blur-xl lg:hidden"
            aria-expanded={menu === "mobile"}
            onClick={() => setMenu(menu === "mobile" ? null : "mobile")}
          >
            {menu === "mobile" ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "absolute top-full right-0 left-0 z-10 mx-auto mt-2 hidden w-[886px] max-w-[calc(100vw-32px)] transition-[opacity,transform] duration-[250ms] ease-out lg:block",
          menu === "services" || menu === "solutions"
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
        onMouseLeave={() => setMenu(null)}
      >
        {menu === "services" && <ServicesPanel />}
        {menu === "solutions" && <SolutionsPanel />}
      </div>

      {menu === "mobile" && <MobileMenu onClose={() => setMenu(null)} />}
    </header>
  );
}

function ServicesPanel() {
  return (
    <div className="overflow-hidden rounded-[24px] border border-px-lime/15 bg-[#121310]/95 p-3 shadow-none backdrop-blur-2xl">
      <div className="grid grid-cols-[1fr_1.4fr] gap-3">
        <div className="flex flex-col justify-center gap-1 p-2">
          {nav.services.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl px-4 py-3 transition-colors hover:bg-px-white-8"
            >
              <div className="text-[16px] font-medium">{item.title}</div>
              <div className="text-[14px] text-px-white-48">{item.description}</div>
            </Link>
          ))}
        </div>
        <Link
          href="/what-we-do"
          className="group/card relative overflow-hidden rounded-[18px] bg-[#141410]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#d4ff1f55,transparent_55%)]" />
          <div className="absolute inset-0 bg-px-black-48 transition-colors duration-200 group-hover/card:bg-transparent" />
          <div className="relative flex h-[247px] flex-col justify-end p-5">
            <div className="text-[11px] tracking-[0.14em] text-px-white-56 uppercase">What we do</div>
            <div className="mt-1 text-[18px] font-medium leading-snug">
              AI tools in the workflow — or a product built around yours.
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

function SolutionsPanel() {
  return (
    <div className="overflow-hidden rounded-[24px] border border-px-lime/15 bg-[#121310]/95 p-3 backdrop-blur-2xl">
      <div className="grid grid-cols-2 gap-3">
        {nav.solutions.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex flex-col overflow-hidden rounded-[18px] bg-[#161814] transition-colors hover:bg-[#1e2018]"
          >
            <div className="p-4 pb-2">
              <div className="text-[16px] font-medium">{item.title}</div>
              <div className="mt-1 text-[13px] leading-snug text-px-white-48">{item.description}</div>
            </div>
            <div className="relative mx-3 mb-3 h-[132px] overflow-hidden rounded-xl bg-black">
              <SolutionPreview kind={item.visual} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function SolutionPreview({ kind }: { kind: string }) {
  if (kind === "copilot") {
    return (
      <div className="flex h-full flex-col justify-end gap-2 p-4">
        <div className="h-8 w-[70%] rounded-full bg-px-lime/80" />
        <div className="ml-auto h-8 w-[55%] rounded-full bg-px-white-16" />
        <div className="h-8 w-[62%] rounded-full bg-px-white-8" />
      </div>
    );
  }
  if (kind === "internal") {
    return (
      <div className="flex h-full items-center justify-center p-3">
        <div className="h-full w-full rounded-lg border border-px-white-12 bg-[#ecece6]">
          <div className="h-6 border-b border-black/10 bg-px-lime/80" />
          <div className="grid grid-cols-3 gap-2 p-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-8 rounded bg-[#d6d6ce]" />
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (kind === "auto") {
    return (
      <div className="flex h-full items-center justify-center gap-2 px-6">
        <div className="h-2 flex-1 rounded-full bg-px-white-16" />
        <div className="size-3 rounded-full bg-px-lime" />
        <div className="h-2 flex-1 rounded-full bg-px-white-16" />
        <div className="size-3 rounded-full bg-px-lime" />
        <div className="h-2 flex-1 rounded-full bg-px-white-16" />
      </div>
    );
  }
  return (
    <div className="flex h-full items-end justify-center gap-2 pt-4">
      <div className="h-[90%] w-[48%] rounded-t-lg border border-px-white-12 bg-[#2a2a22]" />
      <div className="h-[110%] w-[42%] rounded-t-[18px] border border-px-white-12 bg-[#3a4a10]" />
    </div>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [open, setOpen] = useState<"services" | "solutions" | null>(null);

  return (
    <div className="fixed inset-0 top-16 z-50 overflow-y-auto bg-px-black lg:hidden">
      <div className="paddings flex flex-col gap-1 py-6">
        <button className="py-3 text-left text-[22px] font-medium" onClick={() => setOpen(open === "services" ? null : "services")}>
          Services
        </button>
        {open === "services" &&
          nav.services.map((item) => (
            <Link key={item.href} href={item.href} onClick={onClose} className="py-2 pl-3 text-px-white-64">
              {item.title}
              <span className="mt-1 block text-[14px] text-px-white-48">{item.description}</span>
            </Link>
          ))}
        <button className="py-3 text-left text-[22px] font-medium" onClick={() => setOpen(open === "solutions" ? null : "solutions")}>
          Solutions
        </button>
        {open === "solutions" &&
          nav.solutions.map((item) => (
            <Link key={item.href} href={item.href} onClick={onClose} className="py-2 pl-3 text-px-white-64">
              {item.title}
              <span className="mt-1 block text-[14px] text-px-white-48">{item.description}</span>
            </Link>
          ))}
        {nav.links.map((link) => (
          <Link key={link.href} href={link.href} onClick={onClose} className="py-3 text-[22px] font-medium">
            {link.label}
          </Link>
        ))}
        <Link href="/get-in-touch" onClick={onClose} className="mt-6 inline-flex items-center gap-2 text-[18px] font-medium text-px-lime">
          Get in touch <Arrow />
        </Link>
      </div>
    </div>
  );
}

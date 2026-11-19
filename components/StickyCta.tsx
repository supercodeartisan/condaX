"use client";

import { useEffect, useState } from "react";
import { DownArrow } from "@/components/Buttons";
import { cn } from "@/lib/cn";

/**
 * Fixed jump CTA. Hides once the target is on screen, near the footer,
 * or when the user is at the bottom of the page - so it does not float over the footer.
 */
export function StickyCta({ href, label }: { href: string; label: string }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hash = href.startsWith("#") ? href.slice(1) : null;
    const target = hash ? document.getElementById(hash) : null;
    const footer = document.querySelector("footer");

    const update = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 160;

      let targetVisible = false;
      if (target) {
        const rect = target.getBoundingClientRect();
        targetVisible = rect.top < window.innerHeight * 0.72 && rect.bottom > 80;
      }

      let footerVisible = false;
      if (footer) {
        const rect = footer.getBoundingClientRect();
        footerVisible = rect.top < window.innerHeight - 24;
      }

      setVisible(!nearBottom && !targetVisible && !footerVisible);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [href]);

  return (
    <a
      href={href}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={cn(
        "fixed bottom-[max(1.5rem,calc(1.5rem+env(safe-area-inset-bottom)))] left-1/2 z-30 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-hairline bg-surface/95 px-4 py-2 text-[14px] font-medium text-charcoal shadow-[0_12px_40px_rgba(17,17,16,0.1)] backdrop-blur-xl transition-[opacity,transform,visibility] duration-300 hover:text-cobalt sm:bottom-[max(2.5rem,calc(2.5rem+env(safe-area-inset-bottom)))]",
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none invisible translate-y-3 opacity-0",
      )}
    >
      {label}
      <DownArrow />
    </a>
  );
}

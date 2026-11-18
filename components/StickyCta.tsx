import { DownArrow } from "@/components/Buttons";

export function StickyCta({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="fixed bottom-[max(1.5rem,calc(1.5rem+env(safe-area-inset-bottom)))] left-1/2 z-30 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-hairline bg-surface/95 px-4 py-2 text-[14px] font-medium text-charcoal shadow-[0_12px_40px_rgba(17,17,16,0.1)] backdrop-blur-xl hover:text-cobalt sm:bottom-[max(2.5rem,calc(2.5rem+env(safe-area-inset-bottom)))]"
    >
      {label}
      <DownArrow />
    </a>
  );
}

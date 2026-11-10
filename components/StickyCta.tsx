import { DownArrow } from "@/components/Buttons";

export function StickyCta({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="fixed bottom-[max(1.5rem,calc(1.5rem+env(safe-area-inset-bottom)))] left-1/2 z-30 inline-flex -translate-x-1/2 items-center gap-2 rounded-[32px] border border-px-lime/30 bg-px-black/70 px-4 py-2 text-[14px] font-medium text-px-lime backdrop-blur-xl sm:bottom-[max(2.5rem,calc(2.5rem+env(safe-area-inset-bottom)))]"
    >
      {label}
      <DownArrow />
    </a>
  );
}

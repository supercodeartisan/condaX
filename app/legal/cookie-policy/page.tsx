import type { Metadata } from "next";

export const metadata: Metadata = { title: "Cookie policy" };

export default function CookiePage() {
  return (
    <main id="main-content" className="paddings mx-auto max-w-[820px] pt-28 pb-24 lg:pt-32">
      <h1 className="font-display text-[40px] font-light md:text-[52px]">Cookie policy</h1>
      <p className="mt-8 text-[16px] leading-relaxed text-px-white-64">
        Placeholder. Wire a consent manager (Cookiebot or equivalent) before production. This shell
        exists so the footer link and IA match the intended site.
      </p>
    </main>
  );
}

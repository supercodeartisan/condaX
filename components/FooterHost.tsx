"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer";

/** Footer is always visible on marketing pages - admin uses its own chrome. */
export function FooterHost() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;
  return <Footer />;
}

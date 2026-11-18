import type { Metadata } from "next";
import { IBM_Plex_Sans, Outfit } from "next/font/google";
import { FooterHost } from "@/components/FooterHost";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

/**
 * Outfit replaces Syne for display type. Syne’s geometric “g” terminates
 * with a flat descender by design (visible even on fonts.google.com/specimen/Syne),
 * which reads as clipping on marketing headlines.
 */
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display-family",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex",
  weight: ["300", "400", "500", "600"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} · Digital products & AI engineering`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${ibmPlex.variable}`}>
      <body className="bg-warm min-h-dvh font-sans text-charcoal antialiased">
        <Header />
        {children}
        <FooterHost />
      </body>
    </html>
  );
}

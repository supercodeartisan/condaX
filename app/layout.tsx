import type { Metadata } from "next";
import { Geist, Outfit } from "next/font/google";
import { Curtain } from "@/components/Curtain";
import { FooterHost } from "@/components/FooterHost";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} • ${site.tagline}`,
    template: `%s • ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${outfit.variable}`}>
      <body className="bg-px-black min-h-dvh font-sans antialiased">
        <Curtain />
        <Header />
        {children}
        <FooterHost />
      </body>
    </html>
  );
}

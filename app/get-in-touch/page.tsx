import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = { title: "Get in touch" };

export default function ContactPage() {
  return (
    <main id="main-content" className="pt-16 lg:pt-20">
      <div className="paddings mx-auto grid max-w-[1720px] gap-16 py-12 lg:grid-cols-[1fr_1.1fr] lg:py-20">
        <div>
          <h1 className="font-display text-[48px] leading-[1.1] font-light md:text-[64px]">Ready to chat?</h1>
          <p className="mt-5 max-w-[36ch] text-[18px] text-px-white-64">
            AI tools, a custom product, or you are not sure yet. International clients are the default —
            we work remotely, in English, on your clock.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["#1c1e16", "#2a3210", "#3a3a34", "#161814", "#2a2a24"].map((bg) => (
                <span key={bg} className="size-9 rounded-full border-2 border-black" style={{ background: bg }} />
              ))}
            </div>
          </div>
          <div className="mt-6">
            <div className="text-[14px] font-medium">Average response time</div>
            <div className="text-[14px] text-px-white-48">Within one business day in your timezone</div>
          </div>
          <div className="mt-10 max-w-[46ch] space-y-2 border-t border-px-white-12 pt-8 text-[15px] text-px-white-64">
            <p>
              Know a team that needs AI help or a custom product?{" "}
              <Link href="/refer-a-client" className="text-px-lime underline underline-offset-4">
                Make an introduction
              </Link>
              .
            </p>
            <p>
              Want to join the delivery team?{" "}
              <Link href="/careers" className="text-px-lime underline underline-offset-4">
                See open roles
              </Link>
              .
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}

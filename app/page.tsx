import Link from "next/link";
import { Ribbon } from "@/components/Ribbon";
import { capabilities } from "@/lib/site";

export default function HomePage() {
  return (
    <main id="main-content" className="relative flex h-dvh flex-col overflow-hidden">
      <Ribbon />
      <div className="paddings relative z-10 mx-auto flex w-full max-w-[1720px] flex-1 flex-col justify-center pt-20 short:justify-start short:pt-4">
        <h1 className="font-display animate-fade-up max-w-[1100px] text-[40px] leading-[1.1] font-light sm:text-[56px] md:text-[68px] lg:text-[80px] lg:leading-[88px]">
          AI tools your team can use. Products built around how you work.
        </h1>
        <p className="animate-fade-up delay-400 mt-6 max-w-[546px] text-[18px] leading-[30px] text-px-white-80 sm:text-[20px]">
          An international consulting company based in the Philippines. We help teams worldwide adopt
          AI — or we build the custom product when a generic tool is not enough. Remote, in English.
        </p>
        <div className="animate-fade-left delay-500 mt-10 hidden items-center gap-8 md:flex">
          {capabilities.map((name) => (
            <span
              key={name}
              className="group text-[15px] font-medium tracking-tight text-px-white-64 transition-all duration-500 ease-out hover:text-px-lime"
            >
              <span className="inline-block p-px transition-all duration-500 ease-out group-hover:blur-[7px] hover:!blur-none hover:!text-white">
                {name}
              </span>
            </span>
          ))}
          <Link href="/what-we-do" className="text-[14px] text-px-white-48 underline-offset-4 hover:text-px-lime hover:underline">
            How we work
          </Link>
          <Link href="/careers" className="text-[14px] text-px-white-48 underline-offset-4 hover:text-px-lime hover:underline">
            Careers
          </Link>
        </div>
        <div className="animate-fade-up delay-500 mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 md:hidden">
          {capabilities.map((name) => (
            <span key={name} className="text-[14px] font-medium text-px-white-64">
              {name}
            </span>
          ))}
          <Link href="/careers" className="text-[14px] text-px-lime">
            Careers
          </Link>
        </div>
      </div>
      <div className="relative z-10 flex w-full justify-center px-0 pt-3 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-6 md:px-8 lg:absolute lg:bottom-[max(3rem,calc(3rem+env(safe-area-inset-bottom)))] lg:left-1/2 lg:w-full lg:-translate-x-1/2 lg:px-12 lg:py-0">
        <Link href="/work/kite" className="flex max-w-[640px] items-center gap-4 px-4 py-2">
          <div className="grid grid-cols-4 overflow-hidden rounded-lg">
            {["#1c1e16", "#2a3210", "#3a3a34", "#141410"].map((bg) => (
              <span key={bg} className="block aspect-[100/64] w-[52px] sm:w-[64px]" style={{ background: bg }} />
            ))}
          </div>
          <span>
            <span className="block text-[11px] tracking-[0.14em] text-px-white-48 uppercase">
              Sample work
            </span>
            <span className="mt-0.5 block text-[14px] leading-snug sm:text-[16px]">
              A customer-facing assistant, built on the client’s own knowledge.
            </span>
          </span>
        </Link>
      </div>
    </main>
  );
}

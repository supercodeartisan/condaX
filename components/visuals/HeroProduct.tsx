import { SaaSDashboard } from "@/components/visuals/SaaSDashboard";
import { AIAssistant } from "@/components/visuals/AIAssistant";

/** Art-directed layered product composition for the homepage hero. */
export function HeroProduct({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="pointer-events-none absolute -top-12 -right-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(47,91,255,0.14),transparent_68%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-10 -left-8 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(28,28,26,0.06),transparent_70%)]"
        aria-hidden
      />

      <div className="animate-fade-up delay-300 relative z-[1] origin-top-right lg:translate-x-1 lg:scale-[1.01]">
        <div className="motion-soft-float">
          <SaaSDashboard />
        </div>
      </div>

      <div className="animate-fade-up delay-500 absolute right-0 -bottom-4 z-[2] w-[min(100%,340px)] sm:-bottom-6 sm:w-[76%] md:right-[-2%] lg:right-0 lg:w-[72%]">
        <div className="motion-soft-float" style={{ animationDelay: "2.4s" }}>
          <AIAssistant className="shadow-[0_34px_90px_rgba(17,17,16,0.16)] ring-1 ring-black/[0.04]" />
        </div>
      </div>
    </div>
  );
}

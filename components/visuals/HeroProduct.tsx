import { SaaSDashboard } from "@/components/visuals/SaaSDashboard";
import { AIAssistant } from "@/components/visuals/AIAssistant";

/** Art-directed layered product composition for the homepage hero. */
export function HeroProduct({ className = "" }: { className?: string }) {
  return (
    <div className={`relative isolate ${className}`}>
      <div
        className="pointer-events-none absolute -top-10 -right-8 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(47,91,255,0.12),transparent_68%)] sm:h-72 sm:w-72"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-8 -left-6 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(28,28,26,0.05),transparent_70%)]"
        aria-hidden
      />

      <div className="animate-fade-up delay-300 relative z-[1]">
        <div className="motion-soft-float">
          <SaaSDashboard />
        </div>
      </div>

      <div className="animate-fade-up delay-500 relative z-[2] mx-auto mt-[-3.5rem] w-[min(100%,92%)] sm:mt-[-4.25rem] sm:w-[78%] sm:ml-auto sm:mr-1 lg:mt-[-4.5rem] lg:w-[74%]">
        <div className="motion-soft-float" style={{ animationDelay: "2.4s" }}>
          <AIAssistant className="shadow-[0_28px_70px_rgba(17,17,16,0.14)] ring-1 ring-black/[0.04]" />
        </div>
      </div>
    </div>
  );
}

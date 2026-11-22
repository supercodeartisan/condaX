import { SaaSDashboard } from "@/components/visuals/SaaSDashboard";
import { AIAssistant } from "@/components/visuals/AIAssistant";

/**
 * Homepage hero — Condax product UI composition (not stock photography).
 * Operations console + grounded assistant layered for depth.
 */
export function HeroProduct({ className = "" }: { className?: string }) {
  return (
    <div className={`relative isolate ${className}`}>
      <div
        className="pointer-events-none absolute -inset-6 rounded-[28px] bg-[radial-gradient(ellipse_at_30%_20%,rgba(47,91,255,0.12),transparent_55%),radial-gradient(ellipse_at_80%_80%,rgba(15,27,51,0.08),transparent_50%)] sm:-inset-10"
        aria-hidden
      />

      {/* Desktop / tablet: layered composition */}
      <div className="relative z-[1] hidden sm:block">
        <div className="animate-fade-up delay-300">
          <div className="motion-soft-float">
            <SaaSDashboard />
          </div>
        </div>
        <div className="animate-fade-up delay-500 absolute right-0 bottom-[-1.25rem] w-[72%] max-w-[380px] lg:bottom-[-1.5rem] lg:w-[68%]">
          <div className="motion-soft-float" style={{ animationDelay: "2.4s" }}>
            <AIAssistant />
          </div>
        </div>
      </div>

      {/* Mobile: single primary frame + compact assistant strip */}
      <div className="relative z-[1] space-y-3 sm:hidden">
        <div className="animate-fade-up delay-300">
          <SaaSDashboard />
        </div>
        <div className="animate-fade-up delay-500">
          <AIAssistant />
        </div>
      </div>
    </div>
  );
}

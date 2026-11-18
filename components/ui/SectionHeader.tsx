import { cn } from "@/lib/cn";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-[40rem]",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "font-display display-section text-[36px] font-medium tracking-tight text-ink sm:text-[44px] md:text-[52px]",
          eyebrow && "mt-4",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-[17px] leading-relaxed text-neutral md:text-[18px]">{description}</p>
      ) : null}
    </div>
  );
}

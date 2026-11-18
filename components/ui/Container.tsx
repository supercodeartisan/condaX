import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
}) {
  return (
    <Tag className={cn("paddings mx-auto w-full max-w-[1520px]", className)}>
      {children}
    </Tag>
  );
}

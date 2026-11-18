import type { ReactNode } from "react";
import { gmailComposeUrl } from "@/lib/mail";

/** Opens Gmail compose in a new tab (reliable when no desktop mail app is set). */
export function EmailLink({
  to,
  subject,
  body,
  children,
  className,
}: {
  to: string;
  subject?: string;
  body?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={gmailComposeUrl(to, { subject, body })}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

/** Open Gmail compose in the browser (works when mailto: has no desktop client). */
export function gmailComposeUrl(
  to: string,
  opts?: { subject?: string; body?: string },
): string {
  const params = new URLSearchParams({ view: "cm", fs: "1", to });
  if (opts?.subject) params.set("su", opts.subject);
  if (opts?.body) params.set("body", opts.body);
  return `https://mail.google.com/mail/?${params.toString()}`;
}

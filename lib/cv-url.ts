/** Fix legacy absolute local-cv URLs that used 0.0.0.0 / wrong host when using dev:lan. */
export function normalizeCvUrl(url: string): string {
  if (!url) return url;
  try {
    if (url.startsWith("/")) return url;
    const parsed = new URL(url);
    if (parsed.pathname.startsWith("/api/local-cv/")) {
      return `${parsed.pathname}${parsed.search}`;
    }
  } catch {
    /* keep as-is */
  }
  return url;
}

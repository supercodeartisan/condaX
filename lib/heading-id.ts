/** Stable in-page anchor ids from insight section headings. */
export function headingId(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
import { clientIp } from "@/lib/rate-limit";

export type RequestGeo = {
  ip: string;
  /** ISO 3166-1 alpha-2 from Vercel edge, e.g. US */
  country: string | null;
  /** Subdivision / region code from Vercel, e.g. CA */
  region: string | null;
  city: string | null;
};

/**
 * IP + coarse geo for form submissions.
 * On Vercel, country/region/city come from edge headers (no extra GeoIP API).
 */
export function getRequestGeo(request: Request): RequestGeo {
  const ip = clientIp(request);
  const country =
    request.headers.get("x-vercel-ip-country")?.trim().toUpperCase() || null;
  const region = request.headers.get("x-vercel-ip-country-region")?.trim() || null;
  const city = request.headers.get("x-vercel-ip-city")?.trim() || null;

  return {
    ip: ip === "unknown" ? "unknown" : ip,
    country: country && country !== "XX" ? country : null,
    region: region || null,
    city: city || null,
  };
}

export function formatRequestGeo(geo: {
  ip?: string | null;
  geo_country?: string | null;
  geo_region?: string | null;
  geo_city?: string | null;
}): string {
  const place = [geo.geo_city, geo.geo_region, geo.geo_country].filter(Boolean).join(", ");
  if (place && geo.ip) return `${place} · ${geo.ip}`;
  if (place) return place;
  if (geo.ip) return geo.ip;
  return "—";
}

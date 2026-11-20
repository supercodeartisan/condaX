import { clientIp } from "@/lib/rate-limit";
import { countryNameFromCode } from "@/lib/countries";

export type RequestGeo = {
  ip: string;
  /** ISO 3166-1 alpha-2 from Vercel edge, e.g. US */
  country: string | null;
  /** Subdivision / region code from Vercel, e.g. CA */
  region: string | null;
  city: string | null;
};

function decodeHeaderValue(raw: string | null): string | null {
  if (!raw) return null;
  const trimmed = raw.trim();
  if (!trimmed) return null;
  try {
    return decodeURIComponent(trimmed.replace(/\+/g, " "));
  } catch {
    return trimmed;
  }
}

function geoFromHeaderGetter(get: (name: string) => string | null, ip: string): RequestGeo {
  const countryRaw = get("x-vercel-ip-country")?.trim().toUpperCase() || null;
  const region = get("x-vercel-ip-country-region")?.trim() || null;
  const city = decodeHeaderValue(get("x-vercel-ip-city"));

  return {
    ip: ip === "unknown" ? "unknown" : ip,
    country: countryRaw && countryRaw !== "XX" ? countryRaw : null,
    region: region || null,
    city,
  };
}

/**
 * IP + coarse geo for form submissions.
 * On Vercel, country/region/city come from edge headers (no extra GeoIP API).
 */
export function getRequestGeo(request: Request): RequestGeo {
  return geoFromHeaderGetter((name) => request.headers.get(name), clientIp(request));
}

/** Server Components / pages: read geo from Next.js `headers()`. */
export function getRequestGeoFromHeaders(headerStore: {
  get(name: string): string | null;
}): RequestGeo {
  const forwarded = headerStore.get("x-forwarded-for");
  const realIp = headerStore.get("x-real-ip");
  const ip =
    (forwarded ? forwarded.split(",")[0]?.trim() : "") ||
    realIp?.trim() ||
    "unknown";
  return geoFromHeaderGetter((name) => headerStore.get(name), ip);
}

/** Prefill values for the careers apply form (editable by the candidate). */
export function locationPrefillFromGeo(geo: RequestGeo): {
  country: string;
  city: string;
} {
  return {
    country: countryNameFromCode(geo.country) ?? "",
    city: geo.city ?? "",
  };
}

export function formatRequestGeo(geo: {
  ip?: string | null;
  geo_country?: string | null;
  geo_region?: string | null;
  geo_city?: string | null;
}): string {
  // Vercel city headers (and older stored rows) may be percent-encoded, e.g. Salt%20Lake%20City.
  const place = [
    decodeHeaderValue(geo.geo_city ?? null),
    decodeHeaderValue(geo.geo_region ?? null),
    geo.geo_country,
  ]
    .filter(Boolean)
    .join(", ");
  if (place && geo.ip) return `${place} · ${geo.ip}`;
  if (place) return place;
  if (geo.ip) return geo.ip;
  return "-";
}

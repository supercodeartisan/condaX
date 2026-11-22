"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  CAREERS_FILTER_CATEGORIES,
  CAREERS_FILTER_REGIONS,
  CAREERS_FILTER_SENIORITIES,
  type Role,
  type RoleCategory,
  type RoleSeniority,
} from "@/lib/careers";

function roleMatchesRegion(role: Role, region: string): boolean {
  if (!region || region === "all" || region === "Worldwide") return true;
  return role.eligibleRegions.includes(region);
}

function hasActiveFilters(
  category: string,
  seniority: string,
  region: string,
): boolean {
  return category !== "all" || seniority !== "all" || (region !== "all" && region !== "Worldwide");
}

export function CareersRoleList({ roles }: { roles: Role[] }) {
  const [category, setCategory] = useState<RoleCategory | "all">("all");
  const [seniority, setSeniority] = useState<RoleSeniority | "all">("all");
  const [region, setRegion] = useState<string>("all");

  const filtered = useMemo(() => {
    return roles.filter((role) => {
      if (category !== "all" && role.category !== category) return false;
      if (seniority !== "all" && role.seniority !== seniority) return false;
      if (!roleMatchesRegion(role, region)) return false;
      return true;
    });
  }, [roles, category, seniority, region]);

  const filtersActive = hasActiveFilters(category, seniority, region);

  function clearFilters() {
    setCategory("all");
    setSeniority("all");
    setRegion("all");
  }

  const selectClass =
    "w-full rounded-2xl border border-hairline bg-surface px-4 py-3 text-[14px] text-charcoal outline-none focus:border-cobalt";

  return (
    <div>
      <div className="mt-8 flex flex-col gap-4 rounded-[20px] border border-hairline bg-warm/30 p-5 md:flex-row md:flex-wrap md:items-end md:gap-5">
        <label className="block min-w-[160px] flex-1">
          <span className="mb-1.5 block text-[11px] font-medium tracking-[0.1em] text-muted uppercase">
            Category
          </span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as RoleCategory | "all")}
            className={selectClass}
            aria-label="Filter by category"
          >
            {CAREERS_FILTER_CATEGORIES.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block min-w-[160px] flex-1">
          <span className="mb-1.5 block text-[11px] font-medium tracking-[0.1em] text-muted uppercase">
            Level
          </span>
          <select
            value={seniority}
            onChange={(e) => setSeniority(e.target.value as RoleSeniority | "all")}
            className={selectClass}
            aria-label="Filter by seniority"
          >
            {CAREERS_FILTER_SENIORITIES.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block min-w-[160px] flex-1">
          <span className="mb-1.5 block text-[11px] font-medium tracking-[0.1em] text-muted uppercase">
            Region eligibility
          </span>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className={selectClass}
            aria-label="Filter by eligible region"
          >
            <option value="all">All regions</option>
            {CAREERS_FILTER_REGIONS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>
        {filtersActive ? (
          <button
            type="button"
            onClick={clearFilters}
            className="rounded-full border border-hairline px-4 py-2.5 text-[13px] font-medium text-charcoal transition-colors hover:border-cobalt hover:text-cobalt"
          >
            Clear filters
          </button>
        ) : null}
      </div>

      <p className="mt-4 text-[14px] text-neutral">
        {filtered.length} role{filtered.length === 1 ? "" : "s"}
        {filtersActive ? ` (filtered from ${roles.length})` : ""}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-[20px] border border-dashed border-hairline px-6 py-12 text-center">
          <p className="text-[17px] font-medium text-ink">No roles match these filters</p>
          <p className="mt-2 text-[15px] text-neutral">
            Try another category, level, or region — or{" "}
            <button
              type="button"
              onClick={clearFilters}
              className="font-medium text-cobalt underline underline-offset-4"
            >
              clear filters
            </button>
            . You can also{" "}
            <Link href="/careers/general" className="font-medium text-cobalt link-underline">
              submit a general application
            </Link>
            .
          </p>
        </div>
      ) : (
        <div className="mt-6 divide-y divide-hairline border-y border-hairline">
          {filtered.map((role) => (
            <Link
              key={role.slug}
              href={`/careers/${role.slug}`}
              className="group grid gap-4 py-8 transition-colors md:grid-cols-[1fr_200px_auto] md:items-center"
            >
              <div>
                <div className="text-[22px] font-medium tracking-tight text-ink transition-colors group-hover:text-cobalt">
                  {role.title}
                </div>
                <p className="mt-2 max-w-[52ch] text-[15px] text-neutral">{role.summary}</p>
              </div>
              <div className="text-[13px] text-muted">
                <div>{role.team}</div>
                <div className="mt-1">{role.location}</div>
                <div className="mt-1">{role.type}</div>
                <div className="mt-1 capitalize text-neutral">
                  {role.remoteStatus} · {role.seniority}
                </div>
              </div>
              <span className="hidden rounded-full border border-hairline px-3 py-1 text-[13px] text-charcoal md:inline-flex">
                View
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
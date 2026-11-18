"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { toIsoDate } from "@/lib/careers-apply";

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function parseIso(value: string | undefined): Date | null {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const [y, m, d] = value.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  if (date.getFullYear() !== y || date.getMonth() !== m - 1 || date.getDate() !== d) return null;
  return date;
}

function startOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function daysInMonth(year: number, monthIndex: number) {
  return new Date(year, monthIndex + 1, 0).getDate();
}

function clampView(view: Date, min: Date, max: Date) {
  const t = startOfMonth(view).getTime();
  const minT = startOfMonth(min).getTime();
  const maxT = startOfMonth(max).getTime();
  if (t < minT) return startOfMonth(min);
  if (t > maxT) return startOfMonth(max);
  return startOfMonth(view);
}

function formatDisplay(iso: string) {
  const d = parseIso(iso);
  if (!d) return "";
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function CalendarDatePicker({
  name,
  label,
  hint,
  required = true,
  min,
  max,
  defaultValue = "",
  initialViewDate,
}: {
  name: string;
  label: string;
  hint?: string;
  required?: boolean;
  min: string;
  max: string;
  defaultValue?: string;
  initialViewDate?: string;
}) {
  const minDate = useMemo(() => parseIso(min) ?? new Date(), [min]);
  const maxDate = useMemo(() => parseIso(max) ?? new Date(), [max]);
  const [value, setValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const initialView =
    parseIso(defaultValue) ?? parseIso(initialViewDate) ?? maxDate;
  const [view, setView] = useState(() => clampView(initialView, minDate, maxDate));

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const yearOptions = useMemo(() => {
    const years: number[] = [];
    for (let y = minDate.getFullYear(); y <= maxDate.getFullYear(); y += 1) years.push(y);
    return years;
  }, [minDate, maxDate]);

  const cells = useMemo(() => {
    const year = view.getFullYear();
    const month = view.getMonth();
    const firstDow = new Date(year, month, 1).getDay();
    const total = daysInMonth(year, month);
    const out: Array<{ iso: string; day: number; disabled: boolean } | null> = [];
    for (let i = 0; i < firstDow; i += 1) out.push(null);
    for (let day = 1; day <= total; day += 1) {
      const date = new Date(year, month, day);
      const iso = toIsoDate(date);
      out.push({ iso, day, disabled: date < minDate || date > maxDate });
    }
    while (out.length % 7 !== 0) out.push(null);
    return out;
  }, [view, minDate, maxDate]);

  const canPrev = startOfMonth(view).getTime() > startOfMonth(minDate).getTime();
  const canNext = startOfMonth(view).getTime() < startOfMonth(maxDate).getTime();

  return (
    <div ref={rootRef} className="relative block">
      <span className="text-[14px] font-medium text-ink">{label}</span>
      {hint ? <span className="mt-1 block text-[13px] text-neutral">{hint}</span> : null}

      <input type="hidden" name={name} value={value} required={required} />

      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => {
          setOpen((v) => {
            const next = !v;
            if (next) {
              setView(
                clampView(
                  parseIso(value) ?? parseIso(initialViewDate) ?? maxDate,
                  minDate,
                  maxDate,
                ),
              );
            }
            return next;
          });
        }}
        className={cn(
          "mt-3 flex w-full items-center justify-between rounded-2xl border bg-surface px-4 py-4 text-left text-[15px] outline-none transition-colors",
          open ? "border-cobalt" : "border-hairline hover:border-cobalt/40",
        )}
      >
        <span className={value ? "text-charcoal" : "text-muted"}>
          {value ? formatDisplay(value) : "Select date"}
        </span>
        <span className="text-muted" aria-hidden>
          {open ? "▴" : "▾"}
        </span>
      </button>

      {open ? (
        <div
          role="dialog"
          aria-label={label}
          className="absolute z-30 mt-2 w-full overflow-hidden rounded-2xl border border-hairline bg-paper shadow-[0_16px_48px_rgba(17,17,16,0.12)]"
        >
          <div className="flex items-center justify-between gap-2 border-b border-hairline px-3 py-3">
            <button
              type="button"
              aria-label="Previous month"
              disabled={!canPrev}
              onClick={() =>
                setView((v) =>
                  clampView(new Date(v.getFullYear(), v.getMonth() - 1, 1), minDate, maxDate),
                )
              }
              className="rounded-full px-3 py-1 text-[14px] text-neutral transition-colors hover:bg-warm disabled:opacity-30"
            >
              ‹
            </button>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <select
                aria-label="Month"
                value={view.getMonth()}
                onChange={(e) =>
                  setView(
                    clampView(
                      new Date(view.getFullYear(), Number(e.target.value), 1),
                      minDate,
                      maxDate,
                    ),
                  )
                }
                className="rounded-full border border-hairline bg-warm px-3 py-1.5 text-[13px] text-ink outline-none focus:border-cobalt"
              >
                {MONTHS.map((m, i) => (
                  <option key={m} value={i}>
                    {m}
                  </option>
                ))}
              </select>
              <select
                aria-label="Year"
                value={view.getFullYear()}
                onChange={(e) =>
                  setView(
                    clampView(
                      new Date(Number(e.target.value), view.getMonth(), 1),
                      minDate,
                      maxDate,
                    ),
                  )
                }
                className="rounded-full border border-hairline bg-warm px-3 py-1.5 text-[13px] text-ink outline-none focus:border-cobalt"
              >
                {yearOptions.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              aria-label="Next month"
              disabled={!canNext}
              onClick={() =>
                setView((v) =>
                  clampView(new Date(v.getFullYear(), v.getMonth() + 1, 1), minDate, maxDate),
                )
              }
              className="rounded-full px-3 py-1 text-[14px] text-neutral transition-colors hover:bg-warm disabled:opacity-30"
            >
              ›
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 px-3 pt-3 text-center text-[11px] tracking-wide text-muted uppercase">
            {WEEKDAYS.map((d) => (
              <div key={d} className="py-1">
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 px-3 pb-3">
            {cells.map((cell, i) =>
              cell ? (
                <button
                  key={cell.iso}
                  type="button"
                  disabled={cell.disabled}
                  onClick={() => {
                    setValue(cell.iso);
                    setOpen(false);
                  }}
                  className={cn(
                    "aspect-square rounded-full text-[14px] transition-colors",
                    cell.disabled && "cursor-not-allowed text-muted/40",
                    !cell.disabled && "text-ink hover:bg-warm",
                    value === cell.iso && "bg-cobalt text-white hover:bg-cobalt",
                  )}
                >
                  {cell.day}
                </button>
              ) : (
                <div key={`e-${i}`} className="aspect-square" />
              ),
            )}
          </div>

          <div className="flex items-center justify-between border-t border-hairline bg-warm/60 px-4 py-2.5">
            <button
              type="button"
              className="text-[13px] text-neutral underline-offset-2 hover:text-ink hover:underline"
              onClick={() => {
                setValue("");
              }}
            >
              Clear
            </button>
            <button
              type="button"
              className="rounded-full px-3 py-1 text-[13px] font-medium text-cobalt hover:bg-paper"
              onClick={() => setOpen(false)}
            >
              Done
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

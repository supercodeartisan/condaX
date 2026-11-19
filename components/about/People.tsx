import Image from "next/image";
import { people, type Person, type PersonLink } from "@/lib/people";
import { cn } from "@/lib/cn";

export function People() {
  return (
    <section className="paddings mx-auto max-w-[1720px] py-16 md:py-24">
      <h2 className="font-display text-[36px] font-light tracking-tight text-ink md:text-[48px]">
        Who leads the work
      </h2>

      <ul className="mt-10 grid max-w-[52rem] grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
        {people.map((person) => (
          <li key={person.name} className="min-w-0">
            <PersonCard person={person} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function PersonCard({ person }: { person: Person }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[24px] border border-hairline bg-surface shadow-[0_12px_40px_rgba(17,17,16,0.04)]">
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="relative mx-auto size-44 overflow-hidden rounded-[22px] bg-warm ring-1 ring-hairline sm:size-48">
          <Image
            src={person.photo}
            alt={`${person.name}, ${person.role}`}
            fill
            className="object-cover object-top"
            sizes="192px"
          />
        </div>

        <div className="mt-5 flex flex-1 flex-col">
          <h3 className="font-display text-[20px] font-medium tracking-tight text-ink md:text-[22px]">
            {person.name}
          </h3>
          <p className="mt-1 text-[11px] font-semibold tracking-[0.08em] text-cobalt uppercase">
            {person.role}
          </p>

          <p className="mt-3 text-[13px] leading-relaxed text-neutral sm:text-[14px]">{person.bio}</p>

          <ul className="mt-4 space-y-1.5 border-t border-hairline pt-4">
            {person.focus.map((item) => (
              <li key={item} className="flex items-start gap-2 text-[12px] text-charcoal">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cobalt" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {person.links && person.links.length > 0 ? (
            <div className="mt-5 flex items-center gap-2">
              {person.links.map((link) => (
                <SocialIconLink key={link.href} link={link} />
              ))}
            </div>
          ) : (
            <div className="mt-5" />
          )}
        </div>
      </div>
    </article>
  );
}

function SocialIconLink({ link }: { link: PersonLink }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-full border border-hairline bg-paper text-ink transition-colors",
        "hover:border-cobalt hover:text-cobalt",
      )}
    >
      {link.network === "linkedin" ? <LinkedInIcon /> : <XIcon />}
    </a>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.995-9.142L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

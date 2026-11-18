import Image from "next/image";
import { people, type Person } from "@/lib/people";
import { cn } from "@/lib/cn";

export function People() {
  const lead = people.find((p) => p.featured) ?? people[0];
  const others = people.filter((p) => p.name !== lead.name);

  return (
    <section className="paddings mx-auto max-w-[1720px] py-16 md:py-24">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[13px] tracking-[0.14em] text-muted uppercase">Who you’ll work with</p>
          <h2 className="font-display mt-3 text-[36px] font-light md:text-[48px]">Leadership & practitioners</h2>
        </div>
        <p className="max-w-[40ch] text-[15px] leading-relaxed text-neutral md:text-right">
          A small senior group. Named owners on every engagement — not a large delivery bench.
        </p>
      </div>

      <div className="mt-12 space-y-8">
        <PersonCard person={lead} featured />
        {others.length > 0 ? (
          <div
            className={cn(
              "grid gap-6",
              others.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1 max-w-[720px]",
            )}
          >
            {others.map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

function PersonCard({ person, featured = false }: { person: Person; featured?: boolean }) {
  return (
    <article
      className={cn(
        "rounded-[24px] border border-hairline bg-surface p-6 md:p-8",
        featured && "md:grid md:grid-cols-[auto_1fr] md:items-start md:gap-10",
      )}
    >
      <Avatar person={person} size={featured ? "lg" : "md"} />
      <div className={cn(!featured && "mt-5")}>
        <h3 className="font-display text-[24px] font-medium tracking-tight text-ink md:text-[28px]">
          {person.name}
        </h3>
        <p className="mt-1 text-[14px] font-medium text-cobalt">{person.role}</p>
        <p className="mt-4 max-w-[54ch] text-[15px] leading-relaxed text-neutral">{person.bio}</p>
        {person.links && person.links.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-4">
            {person.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-medium text-ink underline-offset-4 hover:text-cobalt hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : (
          <p className="mt-5 text-[13px] text-muted">LinkedIn profile coming soon</p>
        )}
      </div>
    </article>
  );
}

function Avatar({ person, size }: { person: Person; size: "md" | "lg" }) {
  const dim = size === "lg" ? 128 : 80;
  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-full ring-1 ring-hairline",
        size === "lg" ? "size-28 md:size-32" : "size-20",
      )}
    >
      <Image
        src={person.photo}
        alt={`${person.name}, ${person.role}`}
        width={dim === 128 ? 256 : 160}
        height={dim === 128 ? 256 : 160}
        className="h-full w-full object-cover object-top"
        sizes={size === "lg" ? "128px" : "80px"}
      />
    </div>
  );
}

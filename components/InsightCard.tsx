import Link from "next/link";

export function InsightCard({
  item,
}: {
  item: {
    slug: string;
    type: string;
    topic: string;
    date: string;
    title: string;
    dek: string;
    author: string;
    role: string;
  };
}) {
  return (
    <Link
      href={`/insights/${item.slug}`}
      className="group flex flex-col border-t border-px-white-12 py-8 transition-colors hover:border-px-lime"
    >
      <div className="mb-4 flex flex-wrap gap-3 text-[13px] text-px-white-48">
        <span>{item.type}</span>
        <span>{item.topic}</span>
        <span>{item.date}</span>
      </div>
      <h3 className="font-display text-[28px] leading-[120%] font-light group-hover:text-px-lime md:text-[32px]">
        {item.title}
      </h3>
      <p className="mt-3 max-w-[52ch] text-[15px] text-px-white-48">{item.dek}</p>
      <div className="mt-6 text-[14px]">
        {item.author}
        <span className="mt-0.5 block text-px-white-48">{item.role}</span>
      </div>
    </Link>
  );
}

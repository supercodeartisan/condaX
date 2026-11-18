import Link from "next/link";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { images, type InsightSlug } from "@/lib/images";

export function InsightCard({
  item,
  showCover = false,
  showTopicChip = false,
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
  showCover?: boolean;
  showTopicChip?: boolean;
}) {
  const cover = images.insights[item.slug as InsightSlug];

  return (
    <Link
      href={`/insights/${item.slug}`}
      className="group flex flex-col border-t border-px-white-12 py-8 transition-colors hover:border-px-lime"
    >
      {showCover && cover ? (
        <EditorialImage
          asset={cover}
          className="mb-6 aspect-[16/10] w-full rounded-[16px]"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      ) : null}
      <div className="mb-4 flex flex-wrap items-center gap-3 text-[13px] text-px-white-48">
        <span>{item.type}</span>
        {showTopicChip ? (
          <span className="rounded-full border border-px-white-12 px-2.5 py-0.5 text-[12px] text-px-white-48">
            {item.topic}
          </span>
        ) : (
          <span>{item.topic}</span>
        )}
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

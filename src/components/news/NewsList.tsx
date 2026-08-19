"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Reveal from "@/components/Reveal";
import { news } from "@/lib/news";

const tags = ["全部", "公司新闻", "行业动态"] as const;

type NewsTag = (typeof tags)[number];

function isNewsTag(value: string | null): value is NewsTag {
  return tags.some((tag) => tag === value);
}

export function NewsCatalog({ active = "全部" }: { active?: NewsTag }) {
  const list = active === "全部" ? news : news.filter((item) => item.tag === active);

  return (
    <section className="bg-paper py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-5 lg:px-10">
        <Reveal>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={tag === "全部" ? "/news" : `/news?tag=${encodeURIComponent(tag)}`}
                aria-current={active === tag ? "true" : undefined}
                className={`rounded-full px-5 py-2.5 text-sm transition-all duration-300 ${
                  active === tag
                    ? "bg-gold font-medium text-ink"
                    : "bg-white text-ink/65 hover:text-gold"
                }`}
              >
                {tag}
              </Link>
            ))}
          </div>
        </Reveal>

        {list.length === 0 ? (
          <p className="mt-14 text-sm text-muted">该分类暂无内容。</p>
        ) : (
          <div className="mt-10 space-y-6">
            {list.map((item, index) => (
              <Reveal key={item.slug} delay={index * 80}>
                <Link
                  href={`/news/${item.slug}`}
                  className="group grid overflow-hidden rounded-3xl bg-white shadow-[0_8px_30px_rgba(15,27,46,0.05)] transition-all duration-500 hover:shadow-[0_18px_46px_rgba(15,27,46,0.12)] md:grid-cols-[360px_1fr]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col justify-center p-7 lg:p-9">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-gold/15 px-3 py-1 text-[11px] font-medium text-gold-deep">
                        {item.tag}
                      </span>
                      <time className="text-sm text-muted">{item.date}</time>
                    </div>

                    <h2 className="mt-4 text-lg font-bold leading-snug text-ink transition-colors group-hover:text-gold lg:text-xl">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-[1.9] text-ink/60">
                      {item.summary}
                    </p>

                    <span className="mt-6 flex items-center gap-1.5 text-sm text-gold">
                      阅读全文
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default function NewsList() {
  const searchParams = useSearchParams();
  const requestedTag = searchParams.get("tag");
  const active = isNewsTag(requestedTag) ? requestedTag : "全部";

  return <NewsCatalog active={active} />;
}

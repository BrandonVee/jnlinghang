import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { getNews, news } from "@/lib/news";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata(
  props: PageProps<"/news/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const item = getNews(slug);
  if (!item) return { title: "文章未找到" };
  return { title: item.title, description: item.summary };
}

export default async function NewsDetail(props: PageProps<"/news/[slug]">) {
  const { slug } = await props.params;
  const item = getNews(slug);
  if (!item) notFound();

  const idx = news.findIndex((n) => n.slug === slug);
  const prev = idx > 0 ? news[idx - 1] : null;
  const next = idx < news.length - 1 ? news[idx + 1] : null;

  return (
    <>
      <PageHero
        title={item.title}
        subtitle={item.tag}
        image="/assets/hero-news.svg"
        crumbs={[
          { label: "首页", href: "/" },
          { label: "新闻资讯", href: "/news" },
          { label: item.title },
        ]}
      />

      <article className="bg-white py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[820px] px-5 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-3 border-b border-black/5 pb-6">
              <span className="rounded-full bg-gold/15 px-3 py-1 text-[11px] font-medium text-gold-deep">
                {item.tag}
              </span>
              <time className="text-sm text-muted">{item.date}</time>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority
                unoptimized
                sizes="(max-width: 820px) 100vw, 780px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 space-y-6">
              {item.body.map((para, i) => (
                <p key={i} className="text-[15px] leading-[2] text-ink/70">
                  {para}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-10 rounded-xl bg-paper px-5 py-4 text-xs leading-relaxed text-muted">
              本栏目内容为示例文稿，用于展示页面结构；正式上线前请替换为真实文章。
            </p>
          </Reveal>

          {/* 上一篇 / 下一篇 */}
          <Reveal delay={180}>
            <nav
              aria-label="文章导航"
              className="mt-12 grid gap-4 border-t border-black/5 pt-8 sm:grid-cols-2"
            >
              {prev ? (
                <Link
                  href={`/news/${prev.slug}`}
                  className="group rounded-2xl bg-paper p-5 transition-colors hover:bg-gold/10"
                >
                  <span className="text-xs text-muted">上一篇</span>
                  <p className="mt-2 text-sm leading-snug text-ink/75 transition-colors group-hover:text-gold">
                    {prev.title}
                  </p>
                </Link>
              ) : (
                <span />
              )}

              {next && (
                <Link
                  href={`/news/${next.slug}`}
                  className="group rounded-2xl bg-paper p-5 transition-colors hover:bg-gold/10 sm:text-right"
                >
                  <span className="text-xs text-muted">下一篇</span>
                  <p className="mt-2 text-sm leading-snug text-ink/75 transition-colors group-hover:text-gold">
                    {next.title}
                  </p>
                </Link>
              )}
            </nav>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex justify-center">
              <Link
                href="/news"
                className="rounded-full border-2 border-gold px-8 py-3 text-sm text-gold transition-all duration-300 hover:bg-gold hover:text-ink"
              >
                返回新闻列表
              </Link>
            </div>
          </Reveal>
        </div>
      </article>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import Reveal from "../Reveal";
import { news } from "@/lib/news";

export default function News() {
  return (
    <section id="news" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-5 lg:px-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.32em] text-gold lg:text-[13px]">
                NEWS
              </p>
              <h2 className="mt-4 text-[26px] font-bold text-ink/85 sm:text-3xl">
                <span className="text-gold text-[30px] sm:text-4xl">
                  新闻资讯
                </span>
              </h2>
            </div>
            <Link
              href="/news"
              className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-gold"
            >
              更多新闻
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-7 md:grid-cols-3 lg:gap-11">
          {news.map((item, i) => (
            <Reveal key={item.title} delay={i * 110} className="h-full">
              <Link
                href={`/news/${item.slug}`}
                className="group block h-full overflow-hidden rounded-[20px] bg-white shadow-[5px_5px_22px_7px_rgba(48,48,48,0.05)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[8px_10px_34px_10px_rgba(48,48,48,0.09)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 440px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[11px] font-medium text-ink">
                    {item.tag}
                  </span>
                </div>

                <div className="p-6 lg:p-7">
                  <h3 className="line-clamp-2 min-h-[3.4rem] text-base font-medium leading-[1.7] text-ink/85 transition-colors duration-300 group-hover:text-gold">
                    {item.title}
                  </h3>

                  <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-4">
                    <time className="text-sm text-muted">{item.date}</time>
                    <span className="flex items-center gap-1.5 text-sm text-muted transition-colors duration-300 group-hover:text-gold">
                      更多
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

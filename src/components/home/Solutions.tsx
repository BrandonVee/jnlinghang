import Image from "next/image";
import Link from "next/link";
import Reveal from "../Reveal";
import { solutions } from "@/lib/solutions";

function Card({
  item,
  delay,
}: {
  item: (typeof solutions)[number];
  delay: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <Link
        href={`/solutions/${item.slug}`}
        className="group block h-full overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:shadow-[0_18px_46px_rgba(15,27,46,0.18)]"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            unoptimized
            sizes="(max-width: 768px) 50vw, 300px"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-x-0 bottom-0 flex h-20 items-center justify-center bg-gradient-to-br from-ink/95 to-ink-soft/90 px-4 transition-colors duration-300 group-hover:from-gold group-hover:to-gold-deep">
            <h3 className="text-center text-[15px] font-semibold leading-tight tracking-wide text-white transition-colors duration-300 group-hover:text-ink">
              {item.title}
            </h3>
          </div>
        </div>
        <p className="px-5 py-5 text-[13px] leading-relaxed text-ink/55">
          {item.desc}
        </p>
      </Link>
    </Reveal>
  );
}

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-0">
          {/* 左侧标题 */}
          <div className="lg:w-[38%] lg:shrink-0 lg:pr-16 xl:pr-24">
            <Reveal>
              <h2 className="text-[26px] font-bold leading-[1.6] text-ink/85 sm:text-3xl">
                <span className="text-gold text-[30px] sm:text-4xl">
                  航空行业
                </span>
                <br />
                解决方案全景
              </h2>
              <p className="mt-5 text-base text-ink/70">
                翱翔蓝天，掌控未来 —— 让专业航空能力服务千行百业
              </p>
              <p className="mt-6 text-sm leading-[1.9] text-ink/55">
                航空技术已深入应急、医疗、测绘、影视、生态与农林等多个行业，带来高效、精准、低成本的作业方式。
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  { k: "降本增效", v: "减少人工依赖，作业效率显著提升" },
                  { k: "数据驱动", v: "采集高精度数据，助力智能决策" },
                  { k: "安全可靠", v: "规避高危环境的人工作业风险" },
                  { k: "定制化服务", v: "按行业需求匹配装备与培训一体化方案" },
                ].map((row) => (
                  <li key={row.k} className="flex gap-3">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <p className="text-sm text-ink/60">
                      <span className="font-semibold text-ink/80">
                        {row.k}：
                      </span>
                      {row.v}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* 右侧卡片：桌面 4+3，移动 2 列 */}
          <div className="lg:flex-1">
            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
              {solutions.slice(0, 4).map((item, i) => (
                <Card key={item.title} item={item} delay={i * 90} />
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:gap-5 lg:mt-5 lg:grid-cols-3">
              {solutions.slice(4).map((item, i) => (
                <Card key={item.title} item={item} delay={i * 90} />
              ))}
            </div>

            <Reveal delay={120}>
              <div className="mt-9 flex justify-center lg:justify-start">
                <Link
                  href="/solutions"
                  className="group flex items-center gap-2 rounded-full border-2 border-gold px-8 py-3 text-sm text-gold transition-all duration-300 hover:bg-gold hover:text-ink"
                >
                  查看全部解决方案
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

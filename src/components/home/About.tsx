import Image from "next/image";
import Reveal from "../Reveal";
import { company } from "@/lib/company";
import { stats } from "@/lib/home";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-paper py-20 lg:py-28"
    >
      {/* 背景装饰 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 lg:px-10">
        <Reveal>
          <div className="text-center">
            <p className="text-xs tracking-[0.32em] text-gold lg:text-[13px]">
              OUR STORY
            </p>
            <h2 className="mt-4 text-[26px] font-bold leading-[1.6] text-ink/85 sm:text-3xl">
              <span className="text-gold text-[30px] sm:text-4xl">
                我们的故事
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-sm leading-[1.9] text-ink/60 sm:text-base">
              {company.name}成立于 {company.foundedAt}
              ，坐落于山东省济南市章丘区，是一家以通用航空服务为核心的科技企业。公司业务覆盖民用航空器驾驶员培训、民用航空维修人员培训与飞行训练，同时提供紧急救援、非急救转运、公共航空运输等通航服务，并在测绘建模、影视航拍、生态资源监测、气象信息服务等领域为客户提供一体化的低空应用方案。
            </p>
          </div>
        </Reveal>

        {/* 数据条 */}
        <Reveal delay={120}>
          <div className="mt-14 grid grid-cols-2 gap-y-10 rounded-3xl border border-black/5 bg-white px-6 py-10 shadow-[0_10px_40px_rgba(15,27,46,0.05)] sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-4xl font-bold text-ink lg:text-[42px]">
                  {s.value}
                  <span className="ml-1 text-lg text-gold">{s.suffix}</span>
                </p>
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* 公司形象图 */}
        <Reveal delay={200}>
          <div className="relative mt-14 aspect-[21/9] overflow-hidden rounded-3xl">
            <Image
              src="/assets/photos/intro.jpg"
              alt={`${company.shortName}低空航拍应用场景`}
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

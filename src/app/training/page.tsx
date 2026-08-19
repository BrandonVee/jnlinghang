import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { courses } from "@/lib/training";

export const metadata: Metadata = {
  title: "飞行培训",
  description:
    "民用航空器驾驶员培训、无人机飞手培训、民用航空维修人员培训与飞行训练复训，理论、模拟与实操分阶段推进。",
};

export default function TrainingPage() {
  return (
    <>
      <PageHero
        title="飞行培训"
        subtitle="TRAINING"
        desc="围绕许可经营范围开设飞行与机务方向课程，理论、模拟与实操分阶段推进，帮助学员完成从入门到持证上岗的能力建设。"
        image="/assets/hero-training.svg"
        crumbs={[{ label: "首页", href: "/" }, { label: "飞行培训" }]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-5 lg:px-10">
          <div className="space-y-8">
            {courses.map((course, i) => (
              <Reveal key={course.slug} delay={i * 80}>
                <article className="group grid overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_8px_30px_rgba(15,27,46,0.06)] transition-all duration-500 hover:shadow-[0_18px_46px_rgba(15,27,46,0.12)] md:grid-cols-[320px_1fr]">
                  <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 320px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-5 top-5 text-3xl font-bold text-white/25">
                      {course.code}
                    </span>
                  </div>

                  <div className="p-7 lg:p-9">
                    <p className="text-[11px] tracking-[0.28em] text-gold">
                      {course.subtitle}
                    </p>
                    <h2 className="mt-3 text-xl font-bold text-ink lg:text-2xl">
                      {course.title}
                    </h2>
                    <p className="mt-4 text-sm leading-[1.9] text-ink/60">
                      {course.desc}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {course.points.map((p) => (
                        <span
                          key={p}
                          className="rounded-full bg-paper px-3 py-1 text-xs text-ink/65"
                        >
                          {p}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/training/${course.slug}`}
                      className="mt-7 inline-flex items-center gap-2 text-sm text-gold transition-colors hover:text-gold-deep"
                    >
                      查看课程详情
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="想了解开班计划？"
        desc="课程周期与资质详情会根据实际情况说明，欢迎电话咨询。"
      />
    </>
  );
}

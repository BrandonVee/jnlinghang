import Link from "next/link";
import Reveal from "../Reveal";
import { courses } from "@/lib/training";

export default function Courses() {
  return (
    <section
      id="courses"
      className="relative overflow-hidden bg-ink py-20 lg:py-28"
    >
      {/* 背景网格 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-[380px] w-[380px] rounded-full bg-gold/15 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 lg:px-10">
        <Reveal>
          <div className="text-center">
            <p className="text-xs tracking-[0.32em] text-gold">TRAINING</p>
            <h2 className="mt-4 text-[26px] font-bold leading-[1.6] text-white sm:text-3xl">
              培训课程体系
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-[1.9] text-white/55">
              围绕许可经营范围开设飞行与机务方向课程，理论与实操结合，帮助学员完成从入门到持证上岗的能力建设。
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {courses.map((course, i) => (
            <Reveal key={course.code} delay={i * 100} className="h-full">
              <Link
                href={`/training/${course.slug}`}
                className="group relative block h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 hover:border-gold/50 hover:bg-white/[0.07] lg:p-9"
              >
                <span className="absolute right-6 top-5 text-[56px] font-bold leading-none text-white/[0.06] transition-colors duration-500 group-hover:text-gold/20">
                  {course.code}
                </span>

                <h3 className="relative text-lg font-semibold text-white lg:text-xl">
                  {course.title}
                </h3>
                <p className="relative mt-4 text-sm leading-[1.85] text-white/55">
                  {course.desc}
                </p>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {course.points.map((p) => (
                    <span
                      key={p}
                      className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70 transition-colors duration-300 group-hover:border-gold/40 group-hover:text-gold"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-col items-center gap-4">
            <Link
              href="/training"
              className="group flex items-center gap-2 rounded-full border-2 border-gold px-8 py-3 text-sm text-gold transition-all duration-300 hover:bg-gold hover:text-ink"
            >
              查看全部课程
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <p className="text-center text-xs text-white/35">
              课程开班计划与资质详情请电话咨询，我们会据实说明当前可提供的培训内容。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

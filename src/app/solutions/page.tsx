import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { solutions } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "行业应用",
  description:
    "紧急救援、医疗转运、测绘建模、影视航拍、生态监测、气象与辐射监测、农林作业七大行业解决方案。",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        title="行业应用"
        subtitle="SOLUTIONS"
        desc="航空技术已深入应急、医疗、测绘、影视、生态与农林等多个行业，带来高效、精准、低成本的作业方式。"
        image="/assets/photos/banner4.jpg"
        crumbs={[{ label: "首页", href: "/" }, { label: "行业应用" }]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-5 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((sol, i) => (
              <Reveal key={sol.slug} delay={i * 70} className="h-full">
                <Link
                  href={`/solutions/${sol.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-[400ms] hover:-translate-y-2 hover:shadow-[0_18px_46px_rgba(15,27,46,0.16)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={sol.image}
                      alt={sol.title}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 100vw, 380px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex h-[72px] items-center justify-center bg-gradient-to-br from-ink/95 to-ink-soft/90 px-4 transition-colors duration-300 group-hover:from-gold group-hover:to-gold-deep">
                      <h2 className="text-center text-[15px] font-semibold text-white transition-colors duration-300 group-hover:text-ink">
                        {sol.title}
                      </h2>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[13px] leading-[1.85] text-ink/55">
                      {sol.desc}
                    </p>
                    <span className="mt-5 flex items-center gap-1.5 text-[13px] text-gold">
                      查看详情
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

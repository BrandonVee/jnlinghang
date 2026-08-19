import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "通航服务",
  description:
    "通用航空服务、紧急救援服务、非急救转运服务与公共航空运输，覆盖作业飞行、空地保障与运输组织。",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="通航服务"
        subtitle="SERVICES"
        desc="以通用航空运营为核心，围绕作业飞行、应急救援、医疗转运与航空运输构建服务能力，为政企客户提供可落地的低空作业支持。"
        image="/assets/hero-services.svg"
        crumbs={[{ label: "首页", href: "/" }, { label: "通航服务" }]}
      />

      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-5 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((svc, i) => (
              <Reveal key={svc.slug} delay={i * 90} className="h-full">
                <Link
                  href={`/services/${svc.slug}`}
                  className="group block h-full overflow-hidden rounded-3xl bg-white shadow-[0_8px_30px_rgba(15,27,46,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_46px_rgba(15,27,46,0.13)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 100vw, 560px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute right-6 top-5 text-4xl font-bold text-white/20">
                      {svc.code}
                    </span>
                  </div>

                  <div className="p-7 lg:p-8">
                    <p className="text-[11px] tracking-[0.28em] text-gold">
                      {svc.subtitle}
                    </p>
                    <h2 className="mt-3 text-lg font-bold text-ink transition-colors group-hover:text-gold lg:text-xl">
                      {svc.title}
                    </h2>
                    <p className="mt-4 text-sm leading-[1.9] text-ink/60">
                      {svc.desc}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {svc.scenarios.slice(0, 3).map((sc) => (
                        <span
                          key={sc}
                          className="rounded-full bg-paper px-3 py-1 text-xs text-ink/60"
                        >
                          {sc}
                        </span>
                      ))}
                    </div>
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

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { getService, services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const svc = getService(slug);
  if (!svc) return { title: "服务未找到" };
  return { title: svc.title, description: svc.desc };
}

export default async function ServiceDetail(
  props: PageProps<"/services/[slug]">,
) {
  const { slug } = await props.params;
  const svc = getService(slug);
  if (!svc) notFound();

  return (
    <>
      <PageHero
        title={svc.title}
        subtitle={svc.subtitle}
        desc={svc.desc}
        image="/assets/photos/svc-general.jpg"
        crumbs={[
          { label: "首页", href: "/" },
          { label: "通航服务", href: "/services" },
          { label: svc.title },
        ]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-5 lg:px-10">
          <Reveal>
            <div className="relative aspect-[16/7] overflow-hidden rounded-3xl">
              <Image
                src={svc.image}
                alt={svc.title}
                fill
                priority
                unoptimized
                sizes="(max-width: 1200px) 100vw, 1120px"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* 服务内容 */}
          <Reveal delay={80}>
            <h2 className="mt-14 text-xl font-bold text-ink lg:text-2xl">
              服务内容
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {svc.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 80} className="h-full">
                <div className="group h-full rounded-2xl border border-black/5 bg-paper p-7 transition-all duration-500 hover:border-gold/40 hover:bg-white hover:shadow-[0_12px_34px_rgba(15,27,46,0.08)]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-sm font-bold text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.85] text-ink/60">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* 适用场景 */}
          <Reveal delay={100}>
            <h2 className="mt-16 text-xl font-bold text-ink lg:text-2xl">
              适用场景
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {svc.scenarios.map((sc) => (
                <span
                  key={sc}
                  className="rounded-full border border-gold/40 bg-gold/8 px-5 py-2.5 text-sm text-ink/75"
                >
                  {sc}
                </span>
              ))}
            </div>
          </Reveal>

          {/* 其他服务 */}
          <Reveal delay={140}>
            <div className="mt-16 border-t border-black/5 pt-10">
              <h2 className="text-base font-semibold text-ink">其他服务</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {services
                  .filter((s) => s.slug !== svc.slug)
                  .map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="rounded-full bg-paper px-5 py-2.5 text-sm text-ink/70 transition-colors hover:bg-gold hover:text-ink"
                    >
                      {s.title}
                    </Link>
                  ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { getSolution, solutions } from "@/lib/solutions";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  props: PageProps<"/solutions/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const sol = getSolution(slug);
  if (!sol) return { title: "方案未找到" };
  return { title: sol.title, description: sol.desc };
}

export default async function SolutionDetail(
  props: PageProps<"/solutions/[slug]">,
) {
  const { slug } = await props.params;
  const sol = getSolution(slug);
  if (!sol) notFound();

  return (
    <>
      <PageHero
        title={sol.title}
        subtitle={sol.subtitle}
        desc={sol.desc}
        image="/assets/hero-solutions.svg"
        crumbs={[
          { label: "首页", href: "/" },
          { label: "行业应用", href: "/solutions" },
          { label: sol.title },
        ]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-5 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[420px_1fr] lg:gap-14">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src={sol.image}
                  alt={sol.title}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
              </div>
            </Reveal>

            {/* 核心价值 */}
            <Reveal delay={80}>
              <h2 className="text-xl font-bold text-ink lg:text-2xl">核心价值</h2>
              <div className="mt-7 space-y-5">
                {sol.value.map((v, i) => (
                  <div key={v.title} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[15px] font-semibold text-ink">
                        {v.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-[1.85] text-ink/60">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* 能力项 + 适用行业 */}
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <Reveal delay={100}>
              <div className="h-full rounded-2xl border border-black/5 bg-paper p-7 lg:p-8">
                <h2 className="text-base font-semibold text-ink">能力项</h2>
                <ul className="mt-5 space-y-3">
                  {sol.capabilities.map((c) => (
                    <li key={c} className="flex gap-2.5 text-sm text-ink/65">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="h-full rounded-2xl bg-ink p-7 lg:p-8">
                <h2 className="text-base font-semibold text-white">适用行业</h2>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {sol.industries.map((ind) => (
                    <span
                      key={ind}
                      className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* 其他方案 */}
          <Reveal delay={200}>
            <div className="mt-16 border-t border-black/5 pt-10">
              <h2 className="text-base font-semibold text-ink">其他解决方案</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {solutions
                  .filter((s) => s.slug !== sol.slug)
                  .map((s) => (
                    <Link
                      key={s.slug}
                      href={`/solutions/${s.slug}`}
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

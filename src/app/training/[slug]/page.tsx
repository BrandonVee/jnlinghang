import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { company } from "@/lib/company";
import { courses, getCourse } from "@/lib/training";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  props: PageProps<"/training/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const course = getCourse(slug);
  if (!course) return { title: "课程未找到" };
  return { title: course.title, description: course.desc };
}

export default async function CourseDetail(
  props: PageProps<"/training/[slug]">,
) {
  const { slug } = await props.params;
  const course = getCourse(slug);
  if (!course) notFound();

  const others = courses.filter((c) => c.slug !== course.slug);

  return (
    <>
      <PageHero
        title={course.title}
        subtitle={course.subtitle}
        desc={course.desc}
        image="/assets/photos/banner2.jpg"
        crumbs={[
          { label: "首页", href: "/" },
          { label: "飞行培训", href: "/training" },
          { label: course.title },
        ]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            {/* 主体：课程大纲 */}
            <div>
              <Reveal>
                <div className="relative aspect-[16/9] overflow-hidden rounded-3xl">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 780px"
                    className="object-cover"
                  />
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h2 className="mt-12 text-xl font-bold text-ink lg:text-2xl">
                  课程大纲
                </h2>
              </Reveal>

              <div className="mt-8 space-y-6">
                {course.outline.map((block, i) => (
                  <Reveal key={block.stage} delay={i * 90}>
                    <div className="rounded-2xl border border-black/5 bg-paper p-6 lg:p-8">
                      <h3 className="flex items-center gap-3 text-base font-semibold text-ink">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-xs font-bold text-ink">
                          {i + 1}
                        </span>
                        {block.stage}
                      </h3>
                      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                        {block.items.map((it) => (
                          <li key={it} className="flex gap-2.5 text-sm text-ink/65">
                            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* 侧栏 */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <Reveal delay={120}>
                <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_8px_30px_rgba(15,27,46,0.06)]">
                  <h2 className="text-base font-semibold text-ink">课程信息</h2>

                  <dl className="mt-5 space-y-5 text-sm">
                    <div>
                      <dt className="text-xs text-muted">适合人群</dt>
                      <dd className="mt-2 space-y-1.5">
                        {course.audience.map((a) => (
                          <p key={a} className="text-ink/70">
                            · {a}
                          </p>
                        ))}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-muted">课时安排</dt>
                      <dd className="mt-2 leading-relaxed text-ink/70">
                        {course.duration}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-muted">训练重点</dt>
                      <dd className="mt-2 flex flex-wrap gap-2">
                        {course.points.map((p) => (
                          <span
                            key={p}
                            className="rounded-full bg-paper px-2.5 py-1 text-xs text-ink/65"
                          >
                            {p}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </dl>

                  <a
                    href={`tel:${company.phone}`}
                    className="mt-7 flex items-center justify-center rounded-full bg-gold py-3 text-sm font-medium text-ink transition-colors hover:bg-gold-deep"
                  >
                    咨询课程 {company.phone}
                  </a>
                </div>
              </Reveal>

              {/* 其他课程 */}
              <Reveal delay={180}>
                <div className="mt-6 rounded-2xl border border-black/5 bg-white p-6">
                  <h2 className="text-base font-semibold text-ink">其他课程</h2>
                  <ul className="mt-4 space-y-3">
                    {others.map((o) => (
                      <li key={o.slug}>
                        <Link
                          href={`/training/${o.slug}`}
                          className="group flex items-start gap-2 text-sm text-ink/65 transition-colors hover:text-gold"
                        >
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold/60" />
                          {o.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

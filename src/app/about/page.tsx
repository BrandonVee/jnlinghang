import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Honors from "@/components/home/Honors";
import { businessScope, company, staff } from "@/lib/company";

export const metadata: Metadata = {
  title: "关于我们",
  description:
    "济南领航航空科技有限公司成立于2024年12月11日，位于山东省济南市章丘区，主营通用航空服务、飞行培训与低空行业应用。",
};

const profile: { label: string; value: string }[] = [
  { label: "公司全称", value: company.name },
  { label: "英文名称", value: company.nameEn },
  { label: "统一社会信用代码", value: company.creditCode },
  { label: "注册号", value: company.regNumber },
  { label: "法定代表人", value: company.legalPerson },
  { label: "注册资本", value: company.registeredCapital },
  { label: "成立日期", value: company.foundedAt },
  { label: "经营状态", value: company.status },
  { label: "公司类型", value: company.companyType },
  { label: "所属行业", value: company.industry },
  { label: "登记机关", value: company.registrar },
  { label: "注册地址", value: company.address },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="关于我们"
        subtitle="ABOUT US"
        desc={`${company.name}成立于 ${company.foundedAt}，是一家以通用航空服务为核心的科技企业。`}
        image="/assets/photos/banner1.jpg"
        crumbs={[{ label: "首页", href: "/" }, { label: "关于我们" }]}
      />

      {/* 公司简介 */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <p className="text-xs tracking-[0.32em] text-gold">PROFILE</p>
              <h2 className="mt-4 text-2xl font-bold text-ink lg:text-3xl">
                公司简介
              </h2>
              <div className="mt-7 space-y-5 text-sm leading-[1.95] text-ink/65">
                <p>
                  {company.name}（{company.nameEn}）成立于 {company.foundedAt}
                  ，坐落于{company.address}，由{company.registrar}登记设立，注册资本
                  {company.registeredCapital}，目前经营状态为{company.status}。
                </p>
                <p>
                  公司业务以通用航空服务为核心，覆盖民用航空器驾驶员培训、民用航空维修人员培训与飞行训练，同时提供紧急救援、非急救转运、公共航空运输等通航服务。
                </p>
                <p>
                  在行业应用方向，我们围绕测绘建模、影视航拍、生态资源监测、气象信息服务与农林作业等场景，为客户提供从方案设计到成果交付的一体化支持。
                </p>
                <p>
                  作为一家新成立的小微企业，我们把安全与规范放在能力建设的首位，据实说明可提供的服务范围，用可交付、可验证的成果积累客户信任。
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src="/assets/photos/intro.jpg"
                  alt={`${company.shortName}低空航拍应用场景`}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 工商信息 */}
      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-5 lg:px-10">
          <Reveal>
            <p className="text-xs tracking-[0.32em] text-gold">INFORMATION</p>
            <h2 className="mt-4 text-2xl font-bold text-ink lg:text-3xl">
              工商信息
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <dl className="mt-9 grid gap-x-10 gap-y-0 overflow-hidden rounded-3xl border border-black/5 bg-white sm:grid-cols-2">
              {profile.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col gap-1.5 border-b border-black/5 px-7 py-5 sm:flex-row sm:gap-4"
                >
                  <dt className="shrink-0 text-sm text-muted sm:w-36">
                    {row.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-ink/80">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* 主要人员 */}
          <Reveal delay={140}>
            <div className="mt-8 rounded-3xl border border-black/5 bg-white px-7 py-6">
              <h3 className="text-base font-semibold text-ink">主要人员</h3>
              <ul className="mt-4 space-y-2">
                {staff.map((s) => (
                  <li key={s.name} className="text-sm text-ink/70">
                    <span className="font-medium text-ink">{s.name}</span>
                    <span className="mx-2 text-muted">—</span>
                    {s.roles}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 荣誉资质 */}
      <section id="honors" className="bg-white py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 lg:px-10">
          <SectionHeading
            kicker="OUR HONORS"
            title="荣誉资质"
            desc="公司信用管理体系经审查符合 Q/GYSD1113-2023 要求，获评系列 AAA 级信用荣誉，点击证书可查看大图。"
          />
          <div className="mt-12">
            <Honors />
          </div>
        </div>
      </section>

      {/* 经营范围 */}
      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-5 lg:px-10">
          <Reveal>
            <p className="text-xs tracking-[0.32em] text-gold">SCOPE</p>
            <h2 className="mt-4 text-2xl font-bold text-ink lg:text-3xl">
              经营范围
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal delay={80}>
              <div className="h-full rounded-3xl bg-ink p-8 lg:p-10">
                <h3 className="text-base font-semibold text-white">许可项目</h3>
                <p className="mt-2 text-xs text-white/40">
                  依法须经批准的项目，经相关部门批准后方可开展经营活动
                </p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {businessScope.licensed.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-gold/40 px-4 py-2 text-sm text-gold"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="h-full rounded-3xl border border-black/5 bg-paper p-8 lg:p-10">
                <h3 className="text-base font-semibold text-ink">一般项目</h3>
                <p className="mt-2 text-xs text-muted">
                  除依法须经批准的项目外，凭营业执照依法自主开展经营活动
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {businessScope.general.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-white px-3.5 py-1.5 text-[13px] text-ink/65"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

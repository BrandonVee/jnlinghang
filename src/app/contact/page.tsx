import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "联系我们",
  description: `联系${company.name}：电话 ${company.phone}，邮箱 ${company.email}，地址 ${company.address}。`,
};

const channels = [
  {
    label: "咨询电话",
    value: company.phone,
    href: `tel:${company.phone}`,
    note: "工作时间内可直接致电，我们会尽快回复",
    icon: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.7 2.1z",
  },
  {
    label: "电子邮箱",
    value: company.email,
    href: `mailto:${company.email}`,
    note: "适合发送详细需求、附件与合作资料",
    icon: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm18 4-10 6L2 8",
  },
  {
    label: "公司地址",
    value: company.address,
    note: "到访前建议先电话联系，便于安排接待",
    icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zm-9 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  },
];

const topics = [
  { title: "培训咨询", desc: "课程内容、开班计划、适合人群与费用问题" },
  { title: "服务合作", desc: "通航作业、应急救援、医疗转运等服务需求对接" },
  { title: "方案定制", desc: "测绘建模、生态监测、影视航拍等场景方案设计" },
  { title: "商务往来", desc: "供应商合作、渠道合作与其他商务事项" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="联系我们"
        subtitle="CONTACT"
        desc="告诉我们您的场景与目标，我们会结合实际情况给出可执行的建议。"
        image="/assets/photos/intro.jpg"
        crumbs={[{ label: "首页", href: "/" }, { label: "联系我们" }]}
      />

      {/* 联系方式 */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-5 lg:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            {channels.map((ch, i) => {
              const inner = (
                <>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        d={ch.icon}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <h2 className="mt-6 text-sm text-muted">{ch.label}</h2>
                  <p className="mt-2 break-words text-base font-medium leading-relaxed text-ink">
                    {ch.value}
                  </p>
                  <p className="mt-3 text-[13px] leading-relaxed text-ink/50">
                    {ch.note}
                  </p>
                </>
              );

              const cls =
                "group flex h-full flex-col rounded-3xl border border-black/5 bg-white p-8 shadow-[0_8px_30px_rgba(15,27,46,0.05)] transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_18px_46px_rgba(15,27,46,0.1)]";

              return (
                <Reveal key={ch.label} delay={i * 90} className="h-full">
                  {ch.href ? (
                    <a href={ch.href} className={cls}>
                      {inner}
                    </a>
                  ) : (
                    <div className={cls}>{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 咨询方向 */}
      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-5 lg:px-10">
          <Reveal>
            <p className="text-xs tracking-[0.32em] text-gold">TOPICS</p>
            <h2 className="mt-4 text-2xl font-bold text-ink lg:text-3xl">
              您可以咨询什么
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-[1.9] text-ink/60">
              为便于快速对接，建议在联系时简要说明需求方向、时间要求与所在区域。
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {topics.map((t, i) => (
              <Reveal key={t.title} delay={i * 80} className="h-full">
                <div className="h-full rounded-2xl border border-black/5 bg-white p-7">
                  <h3 className="flex items-center gap-3 text-base font-semibold text-ink">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {t.title}
                  </h3>
                  <p className="mt-3 pl-[18px] text-sm leading-[1.85] text-ink/60">
                    {t.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 公司信息 */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-5 lg:px-10">
          <Reveal>
            <div className="overflow-hidden rounded-3xl bg-ink px-8 py-12 lg:px-14">
              <h2 className="text-xl font-bold text-white lg:text-2xl">
                {company.name}
              </h2>
              <p className="mt-2 text-sm text-white/45">{company.nameEn}</p>

              <dl className="mt-9 grid gap-x-12 gap-y-6 sm:grid-cols-2">
                {[
                  { label: "法定代表人", value: company.legalPerson },
                  { label: "成立日期", value: company.foundedAt },
                  { label: "统一社会信用代码", value: company.creditCode },
                  { label: "所属行业", value: company.industry },
                  { label: "注册地址", value: company.address },
                  { label: "登记机关", value: company.registrar },
                ].map((row) => (
                  <div key={row.label}>
                    <dt className="text-xs text-white/40">{row.label}</dt>
                    <dd className="mt-1.5 break-words text-sm leading-relaxed text-white/85">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={`tel:${company.phone}`}
                  className="rounded-full bg-gold px-7 py-3 text-sm font-medium text-ink transition-colors hover:bg-gold-deep"
                >
                  致电 {company.phone}
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="rounded-full border-2 border-white/35 px-7 py-3 text-sm text-white transition-all hover:border-gold hover:text-gold"
                >
                  发送邮件
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

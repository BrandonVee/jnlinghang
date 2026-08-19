import Image from "next/image";
import Reveal from "../Reveal";
import { company } from "@/lib/company";

const items = [
  {
    label: "咨询电话",
    value: company.phone,
    href: `tel:${company.phone}`,
    icon: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.7 2.1z",
  },
  {
    label: "电子邮箱",
    value: company.email,
    href: `mailto:${company.email}`,
    icon: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm18 4-10 6L2 8",
  },
  {
    label: "公司地址",
    value: company.address,
    icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zm-9 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <Image
        src="/assets/cta-bg.svg"
        alt=""
        fill
        unoptimized
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <div className="text-center">
            <h2 className="text-[24px] font-bold leading-[1.6] text-white sm:text-3xl">
              期待与您携手共创航空领域新未来
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-[1.9] text-white/60 sm:text-base">
              如果您对我们的服务感兴趣，或希望成为合作伙伴，欢迎随时咨询，我们会第一时间与您联系。
            </p>
            <div className="mt-9 flex justify-center">
              <a
                href={`tel:${company.phone}`}
                className="group flex items-center gap-2 rounded-[57px] border-2 border-gold px-9 py-3 text-sm text-gold transition-all duration-[360ms] hover:bg-gold hover:text-ink"
              >
                立即咨询
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {items.map((item, i) => {
            const inner = (
              <>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      d={item.icon}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-xs tracking-wider text-white/45">
                    {item.label}
                  </span>
                  <span className="mt-1.5 block break-words text-sm leading-relaxed text-white/90">
                    {item.value}
                  </span>
                </span>
              </>
            );

            return (
              <Reveal key={item.label} delay={i * 100} className="h-full">
                {item.href ? (
                  <a
                    href={item.href}
                    className="group flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm transition-all duration-500 hover:border-gold/40 hover:bg-white/[0.09]"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="group flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm transition-all duration-500 hover:border-gold/40 hover:bg-white/[0.09]">
                    {inner}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

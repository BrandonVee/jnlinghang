import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { company } from "@/lib/company";
import { nav } from "@/lib/nav";

const columns = nav.filter((item) => item.children);

export default function Footer() {
  return (
    <footer className="bg-[#0a1220] pt-16 text-white/60">
      <div className="mx-auto w-full max-w-[1440px] px-5 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* 品牌信息 */}
          <div className="lg:max-w-xs">
            <Link href="/" aria-label={company.name}>
              <BrandLogo inverse className="h-12" />
            </Link>
            <p className="mt-6 text-sm leading-[1.9]">
              以通用航空服务为核心，提供飞行培训、应急救援与低空行业应用的一体化能力。
            </p>
            <dl className="mt-6 space-y-2 text-[13px]">
              <div className="flex gap-2">
                <dt className="shrink-0 text-white/40">法定代表人</dt>
                <dd>{company.legalPerson}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="shrink-0 text-white/40">成立日期</dt>
                <dd>{company.foundedAt}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="shrink-0 text-white/40">信用代码</dt>
                <dd className="break-all">{company.creditCode}</dd>
              </div>
            </dl>
          </div>

          {/* 导航列 */}
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4 lg:max-w-2xl lg:pl-8">
            {columns.map((col) => (
              <div key={col.label}>
                <h2 className="text-sm font-medium text-white">
                  <Link href={col.href} className="transition-colors hover:text-gold">
                    {col.label}
                  </Link>
                </h2>
                <ul className="mt-5 space-y-3">
                  {col.children?.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="text-[13px] leading-relaxed transition-colors hover:text-gold"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 联系方式 */}
          <div className="lg:w-60 lg:shrink-0">
            <h2 className="text-sm font-medium text-white">联系我们</h2>
            <a
              href={`tel:${company.phone}`}
              className="mt-5 block text-2xl font-bold text-gold transition-opacity hover:opacity-80"
            >
              {company.phone}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="mt-3 block break-all text-[13px] transition-colors hover:text-gold"
            >
              {company.email}
            </a>
            <p className="mt-3 text-[13px] leading-relaxed">{company.address}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 py-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright © {new Date().getFullYear()} {company.name} 版权所有
          </p>
          <p>{company.nameEn}</p>
        </div>
      </div>
    </footer>
  );
}

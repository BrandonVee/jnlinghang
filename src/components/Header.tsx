"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company } from "@/lib/company";
import { nav } from "@/lib/nav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  // 仅首页有深色全屏 hero，头部可透明起始；其余页面始终为浅色
  const transparentStart = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 路由变化时收起移动端菜单（渲染期调整，避免 effect 内 setState 造成级联渲染）
  const [seenPath, setSeenPath] = useState(pathname);
  if (seenPath !== pathname) {
    setSeenPath(pathname);
    setOpen(false);
    setExpanded(null);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const light = !transparentStart || scrolled || open;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        light
          ? "bg-white/95 shadow-[0_4px_24px_rgba(15,27,46,0.08)] backdrop-blur"
          : "bg-gradient-to-b from-black/45 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between px-5 lg:h-20 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center" aria-label={company.name}>
          <Image
            src={light ? "/assets/logo.svg" : "/assets/logo-light.svg"}
            alt={company.name}
            width={360}
            height={64}
            priority
            unoptimized
            className="h-9 w-auto lg:h-11"
          />
        </Link>

        {/* 桌面端导航 */}
        <nav className="hidden items-center lg:flex">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex h-20 items-center px-3.5 text-[15px] transition-colors xl:px-5 ${
                    light
                      ? active
                        ? "text-gold"
                        : "text-ink hover:text-gold"
                      : active
                        ? "text-gold"
                        : "text-white/90 hover:text-gold"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-3.5 bottom-6 h-0.5 origin-left bg-gold transition-transform duration-300 xl:inset-x-5 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>

                {item.children && (
                  <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-2 rounded-2xl border border-black/5 bg-white p-2 opacity-0 shadow-[0_18px_50px_rgba(15,27,46,0.14)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-4 py-2.5 text-sm text-ink/75 transition-colors hover:bg-paper hover:text-gold"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <a
          href={`tel:${company.phone}`}
          className={`ml-5 hidden shrink-0 items-center gap-2 rounded-full border-2 px-5 py-2 text-sm transition-all duration-300 xl:flex ${
            light
              ? "border-gold text-gold hover:bg-gold hover:text-ink"
              : "border-white/50 text-white hover:border-gold hover:text-gold"
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path
              d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.7 2.1z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {company.phone}
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "关闭菜单" : "打开菜单"}
          aria-expanded={open}
          className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block h-0.5 w-6 transition-all duration-300 ${
                light ? "bg-ink" : "bg-white"
              } ${
                open && i === 0
                  ? "translate-y-2 rotate-45"
                  : open && i === 1
                    ? "opacity-0"
                    : open && i === 2
                      ? "-translate-y-2 -rotate-45"
                      : ""
              }`}
            />
          ))}
        </button>
      </div>

      {/* 移动端抽屉 */}
      <div
        className={`border-t border-black/5 bg-white transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[calc(100vh-72px)] overflow-y-auto" : "max-h-0 overflow-hidden"
        }`}
      >
        <nav className="px-5 py-3">
          {nav.map((item) => (
            <div key={item.label} className="border-b border-black/5 last:border-0">
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  className={`flex-1 py-4 text-[15px] ${
                    isActive(item.href) ? "text-gold" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    type="button"
                    aria-label={`展开${item.label}`}
                    aria-expanded={expanded === item.label}
                    onClick={() =>
                      setExpanded((v) => (v === item.label ? null : item.label))
                    }
                    className="flex h-11 w-11 items-center justify-center text-muted"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className={`h-5 w-5 transition-transform duration-300 ${
                        expanded === item.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                )}
              </div>

              {item.children && (
                <div
                  className={`overflow-hidden transition-[max-height] duration-500 ${
                    expanded === item.label ? "max-h-80" : "max-h-0"
                  }`}
                >
                  <div className="pb-2 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-3 text-sm text-ink/65"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <a
            href={`tel:${company.phone}`}
            className="my-4 flex items-center justify-center rounded-full bg-gold py-3 text-sm font-medium text-ink"
          >
            咨询电话 {company.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}

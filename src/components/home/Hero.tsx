"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { slides } from "@/lib/home";

const INTERVAL = 5500;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  // 手动切换时自增，用于重置自动播放计时，避免刚点完就立即跳张
  const [nudge, setNudge] = useState(0);

  const go = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
    setNudge((n) => n + 1);
  }, []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, INTERVAL);

    return () => clearInterval(id);
  }, [paused, nudge]);

  return (
    <section
      id="top"
      className="relative h-[86vh] min-h-[520px] w-full overflow-hidden bg-ink lg:h-screen"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="首页主视觉"
    >
      {/* 页面唯一 h1：轮播标题会随播放切换，不适合承担 h1 语义 */}
      <h1 className="sr-only">
        济南领航航空科技有限公司 —— 通用航空服务、飞行培训与低空行业解决方案
      </h1>

      {slides.map((slide, i) => (
        <div
          key={slide.title}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={i === 0}
            unoptimized
            sizes="100vw"
            className={`object-cover transition-transform duration-[7000ms] ease-out ${
              i === index ? "scale-105" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/45 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-[1440px] px-5 lg:px-10">
              <div
                className={`max-w-2xl transition-all duration-1000 ${
                  i === index
                    ? "translate-y-0 opacity-100 delay-200"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <p className="mb-4 text-xs tracking-[0.32em] text-gold lg:text-sm">
                  {slide.kicker}
                </p>
                <p className="text-[32px] font-bold leading-[1.25] text-white sm:text-5xl lg:text-[56px]">
                  {slide.title}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-white/75 sm:text-base lg:text-lg">
                  {slide.desc}
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Link
                    href="/solutions"
                    className="group flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-medium text-ink transition-all duration-300 hover:bg-gold-deep"
                  >
                    了解解决方案
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-full border-2 border-white/45 px-7 py-3 text-sm text-white transition-all duration-300 hover:border-gold hover:text-gold"
                  >
                    联系我们
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* 左右箭头：置于内容区两侧，避免压住文案（<xl 隐藏，改用指示点操作） */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 mx-auto flex max-w-[1680px] -translate-y-1/2 items-center justify-between px-6">
        {[
          { dir: -1, label: "上一张", path: "m15 18-6-6 6-6" },
          { dir: 1, label: "下一张", path: "m9 18 6-6-6-6" },
        ].map((btn) => (
          <button
            key={btn.label}
            type="button"
            aria-label={btn.label}
            onClick={() => go(index + btn.dir)}
            className="pointer-events-auto hidden h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink xl:flex"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d={btn.path} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ))}
      </div>

      {/* 指示点 */}
      <div className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 gap-3 lg:bottom-28 lg:left-10 lg:translate-x-0">
        {slides.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`切换到第 ${i + 1} 张`}
            aria-current={i === index}
            onClick={() => go(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === index ? "w-12 bg-gold" : "w-6 bg-white/35 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* 底部滚动提示 */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/55 transition-colors hover:text-gold"
        aria-label="向下浏览"
      >
        <span className="text-[11px] tracking-[0.2em]">SCROLL</span>
        <span className="relative h-10 w-px overflow-hidden bg-white/25">
          <span className="absolute inset-x-0 top-0 h-4 animate-bounce bg-gold" />
        </span>
      </a>
    </section>
  );
}

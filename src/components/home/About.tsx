"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Reveal from "../Reveal";
import { company } from "@/lib/company";
import { stats } from "@/lib/home";

export default function About() {
  const [playing, setPlaying] = useState(false);

  // 弹窗打开时支持 Esc 关闭
  useEffect(() => {
    if (!playing) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPlaying(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [playing]);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-paper py-20 lg:py-28"
    >
      {/* 背景装饰 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 lg:px-10">
        <Reveal>
          <div className="text-center">
            <h2 className="text-[26px] font-bold leading-[1.6] text-ink/85 sm:text-3xl">
              <span className="text-gold text-[30px] sm:text-4xl">
                深耕通航服务
              </span>{" "}
              培育飞行人才
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-sm leading-[1.9] text-ink/60 sm:text-base">
              {company.name}成立于 {company.foundedAt}
              ，坐落于山东省济南市章丘区，是一家以通用航空服务为核心的科技企业。公司业务覆盖民用航空器驾驶员培训、民用航空维修人员培训与飞行训练，同时提供紧急救援、非急救转运、公共航空运输等通航服务，并在测绘建模、影视航拍、生态资源监测、气象信息服务等领域为客户提供一体化的低空应用方案。
            </p>
          </div>
        </Reveal>

        {/* 数据条 */}
        <Reveal delay={120}>
          <div className="mt-14 grid grid-cols-2 gap-y-10 rounded-3xl border border-black/5 bg-white px-6 py-10 shadow-[0_10px_40px_rgba(15,27,46,0.05)] sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-4xl font-bold text-ink lg:text-[42px]">
                  {s.value}
                  <span className="ml-1 text-lg text-gold">{s.suffix}</span>
                </p>
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* 图片 + 播放按钮 */}
        <Reveal delay={200}>
          <div className="relative mt-14 overflow-hidden rounded-3xl">
            <Image
              src="/assets/intro.svg"
              alt={`${company.shortName}训练基地`}
              width={1200}
              height={700}
              unoptimized
              className="h-auto w-full"
            />
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label="播放公司宣传片"
              className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-transform duration-300 hover:scale-110"
            >
              <Image
                src="/assets/play.svg"
                alt=""
                width={80}
                height={80}
                unoptimized
                className="h-full w-full"
              />
            </button>
          </div>
        </Reveal>
      </div>

      {/* 视频弹窗：暂无片源时给出占位说明 */}
      {playing && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="公司宣传片"
          onClick={() => setPlaying(false)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-5 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative aspect-video w-full max-w-3xl overflow-hidden rounded-2xl bg-ink"
          >
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <p className="text-lg text-white/85">宣传片待上传</p>
              <p className="max-w-sm text-sm text-white/45">
                将视频文件放入 public/assets/ 后，替换本组件中的占位内容为 video
                标签即可。
              </p>
            </div>
            <button
              type="button"
              onClick={() => setPlaying(false)}
              aria-label="关闭"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold hover:text-ink"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { certificates } from "@/lib/certificates";
import Reveal from "../Reveal";

export default function Honors({
  limit,
  showAllLink = false,
  dark = false,
}: {
  /** 只展示前 N 项，不传则展示全部 */
  limit?: number;
  showAllLink?: boolean;
  /** 深色背景下使用 */
  dark?: boolean;
}) {
  const [active, setActive] = useState<number | null>(null);
  const list = limit ? certificates.slice(0, limit) : certificates;

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5">
        {list.map((cert, i) => (
          <Reveal key={cert.title} delay={i * 60} className="h-full">
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`查看${cert.title}大图`}
              className={`group block h-full w-full overflow-hidden rounded-2xl p-3 text-left transition-all duration-400 ${
                dark
                  ? "border border-white/10 bg-white/[0.04] hover:border-gold/50"
                  : "border border-black/5 bg-white shadow-[0_6px_24px_rgba(15,27,46,0.06)] hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(15,27,46,0.12)]"
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-paper">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 45vw, 220px"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p
                className={`mt-3 line-clamp-2 px-1 pb-1 text-[13px] leading-snug ${
                  dark ? "text-white/70 group-hover:text-gold" : "text-ink/75"
                }`}
              >
                {cert.title}
              </p>
            </button>
          </Reveal>
        ))}
      </div>

      {showAllLink && (
        <Reveal delay={120}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/about#honors"
              className="group flex items-center gap-2 rounded-full border-2 border-gold px-8 py-3 text-sm text-gold transition-all duration-300 hover:bg-gold hover:text-ink"
            >
              查看全部资质证书
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Reveal>
      )}

      {/* 大图预览 */}
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={list[active].title}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-5 backdrop-blur-sm"
        >
          <figure
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[88vh] w-full max-w-2xl"
          >
            <Image
              src={list[active].image}
              alt={list[active].title}
              width={1240}
              height={1754}
              unoptimized
              className="mx-auto max-h-[80vh] w-auto rounded-lg bg-white object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-sm text-white/85">
              {list[active].title}
              {list[active].meta && (
                <span className="ml-3 text-xs text-white/45">
                  {list[active].meta}
                </span>
              )}
            </figcaption>
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="关闭"
              className="absolute -top-2 right-0 flex h-10 w-10 translate-y-[-100%] items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold hover:text-ink"
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
          </figure>
        </div>
      )}
    </div>
  );
}

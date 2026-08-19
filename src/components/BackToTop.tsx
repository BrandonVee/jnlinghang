"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="返回顶部"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-8 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-gold text-ink shadow-[0_8px_24px_rgba(15,27,46,0.22)] transition-all duration-300 hover:bg-gold-deep lg:right-8 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m18 15-6-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

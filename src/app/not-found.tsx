import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-paper px-5 pt-[72px] lg:pt-20">
      <div className="text-center">
        <p className="text-[80px] font-bold leading-none text-gold lg:text-[110px]">
          404
        </p>
        <h1 className="mt-4 text-xl font-bold text-ink lg:text-2xl">
          页面不存在
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-ink/55">
          您访问的页面可能已被移动或删除，请从下方入口继续浏览。
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-gold px-7 py-3 text-sm font-medium text-ink transition-colors hover:bg-gold-deep"
          >
            返回首页
          </Link>
          <Link
            href="/contact"
            className="rounded-full border-2 border-ink/15 px-7 py-3 text-sm text-ink/70 transition-all hover:border-gold hover:text-gold"
          >
            联系我们
          </Link>
        </div>
      </div>
    </section>
  );
}

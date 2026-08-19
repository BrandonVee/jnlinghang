import Image from "next/image";
import Link from "next/link";

type Crumb = { label: string; href?: string };

type Props = {
  title: string;
  subtitle?: string;
  desc?: string;
  image: string;
  crumbs: Crumb[];
};

export default function PageHero({
  title,
  subtitle,
  desc,
  image,
  crumbs,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-ink pt-[72px] lg:pt-20">
      <Image
        src={image}
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/25" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24">
        {subtitle && (
          <p className="mb-3 text-xs tracking-[0.32em] text-gold lg:text-sm">
            {subtitle}
          </p>
        )}
        <h1 className="text-[28px] font-bold leading-tight text-white sm:text-4xl lg:text-[44px]">
          {title}
        </h1>
        {desc && (
          <p className="mt-5 max-w-3xl text-sm leading-[1.9] text-white/70 lg:text-base">
            {desc}
          </p>
        )}

        <nav aria-label="面包屑" className="mt-8">
          <ol className="flex flex-wrap items-center gap-2 text-[13px] text-white/50">
            {crumbs.map((c, i) => (
              <li key={`${c.label}-${i}`} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden>/</span>}
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-gold">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}

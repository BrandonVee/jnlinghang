import Link from "next/link";
import Reveal from "./Reveal";
import { company } from "@/lib/company";

type Props = {
  title?: string;
  desc?: string;
};

export default function CtaBand({
  title = "需要更详细的方案或报价？",
  desc = "告诉我们您的场景与目标，我们会结合实际情况给出可执行的建议。",
}: Props) {
  return (
    <section className="bg-paper py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-5 lg:px-10">
        <Reveal>
          <div className="flex flex-col items-center gap-8 rounded-3xl bg-ink px-8 py-12 text-center lg:flex-row lg:justify-between lg:px-14 lg:text-left">
            <div>
              <h2 className="text-xl font-bold text-white lg:text-2xl">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{desc}</p>
            </div>
            <div className="flex shrink-0 flex-wrap justify-center gap-4">
              <a
                href={`tel:${company.phone}`}
                className="rounded-full bg-gold px-7 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:bg-gold-deep"
              >
                {company.phone}
              </a>
              <Link
                href="/contact"
                className="rounded-full border-2 border-white/35 px-7 py-3 text-sm text-white transition-all duration-300 hover:border-gold hover:text-gold"
              >
                联系我们
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

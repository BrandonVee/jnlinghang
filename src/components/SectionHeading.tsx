import Reveal from "./Reveal";

/**
 * 双语栏目标题：英文 kicker + 中文标题，参考站风格的统一栏头。
 * align: left | center
 */
export default function SectionHeading({
  kicker,
  title,
  desc,
  align = "center",
  dark = false,
}: {
  kicker: string;
  title: React.ReactNode;
  desc?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  const centered = align === "center";
  return (
    <Reveal>
      <div className={centered ? "text-center" : ""}>
        <p className="text-xs tracking-[0.32em] text-gold lg:text-[13px]">
          {kicker}
        </p>
        <h2
          className={`mt-4 text-[26px] font-bold leading-[1.5] sm:text-3xl ${
            dark ? "text-white" : "text-ink/85"
          }`}
        >
          {title}
        </h2>
        {desc && (
          <p
            className={`mt-5 text-sm leading-[1.9] ${
              centered ? "mx-auto max-w-2xl" : ""
            } ${dark ? "text-white/55" : "text-ink/55"}`}
          >
            {desc}
          </p>
        )}
      </div>
    </Reveal>
  );
}

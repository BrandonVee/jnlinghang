import Image from "next/image";

type BrandLogoProps = {
  inverse?: boolean;
  className?: string;
};

export default function BrandLogo({ inverse = false, className = "" }: BrandLogoProps) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/assets/logo-mark.png"
        alt=""
        width={512}
        height={512}
        priority
        className="h-full w-auto shrink-0"
      />
      <span className="flex min-w-0 flex-col justify-center leading-none">
        <span
          className={`whitespace-nowrap text-[17px] font-bold sm:text-xl ${
            inverse ? "text-white" : "text-ink"
          }`}
        >
          济南领航航空
        </span>
        <span
          className={`mt-1 whitespace-nowrap text-[7px] sm:text-[8px] ${
            inverse ? "text-white/65" : "text-muted"
          }`}
        >
          JINAN NAVIGATION AVIATION TECH
        </span>
      </span>
    </span>
  );
}

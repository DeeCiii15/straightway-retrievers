import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

type LogoCircleProps = {
  size?: "sm" | "md";
  className?: string;
  priority?: boolean;
};

const ringClasses = {
  sm: "size-10",
  md: "size-12 sm:size-14",
} as const;

/** Tuned so the logo's black outer ring meets the circular clip. */
const LOGO_FOCUS_X = "50%";
const LOGO_FOCUS_Y = "17%";
const LOGO_SCALE = 1.2;

/** Crop aligns the logo's black outer ring with the circular frame edge. */
export function LogoCircle({ size = "md", className = "", priority }: LogoCircleProps) {
  const origin = `${LOGO_FOCUS_X} ${LOGO_FOCUS_Y}`;

  return (
    <span
      className={`relative inline-block shrink-0 overflow-hidden rounded-full ${ringClasses[size]} ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{
          transform: `scale(${LOGO_SCALE})`,
          transformOrigin: origin,
        }}
      >
        <Image
          src={siteConfig.logo}
          alt=""
          fill
          priority={priority}
          sizes="56px"
          className="object-cover"
          style={{ objectPosition: origin }}
        />
      </div>
    </span>
  );
}

import {
  FLORENCE_MAP_POINT,
  MAP_PIN_TIP_OFFSET,
  SC_MAP_VIEWBOX,
  SC_STATE_PATH,
} from "@/lib/southCarolinaMapPath";

type PeeDeeRegionIconProps = {
  className?: string;
  /** `card` = cream frame for inline use; `onDark` = for dark panels, no wrapper */
  variant?: "card" | "onDark";
};

function MapGraphic({
  className,
  onDark,
}: {
  className?: string;
  onDark: boolean;
}) {
  const pinX = FLORENCE_MAP_POINT.x;
  const pinY = FLORENCE_MAP_POINT.y - MAP_PIN_TIP_OFFSET;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={SC_MAP_VIEWBOX}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-labelledby="sc-florence-map-title"
      className={className}
    >
      <title id="sc-florence-map-title">South Carolina with Florence marked</title>
      <path
        d={SC_STATE_PATH}
        fill={onDark ? "var(--color-sand)" : "var(--color-surface)"}
        stroke={onDark ? "var(--color-on-dark)" : "var(--color-dark)"}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity={onDark ? 0.95 : 1}
      />
      <g transform={`translate(${pinX} ${pinY})`} aria-hidden>
        <path
          d="M0 -10C-4.5 -10 -8.25 -6.25 -8.25 -1.75C-8.25 3.75 0 14 0 14C0 14 8.25 3.75 8.25 -1.75C8.25 -6.25 4.5 -10 0 -10Z"
          fill="var(--color-rust)"
          stroke={onDark ? "var(--color-on-dark)" : "var(--color-dark)"}
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
        <circle
          cx="0"
          cy="-2"
          r="2.75"
          fill={onDark ? "var(--color-cream)" : "var(--color-cream)"}
          stroke={onDark ? "var(--color-on-dark)" : "var(--color-dark)"}
          strokeWidth="0.75"
        />
      </g>
    </svg>
  );
}

/**
 * South Carolina state outline with a map pin at Florence.
 */
export function PeeDeeRegionIcon({ className = "", variant = "card" }: PeeDeeRegionIconProps) {
  if (variant === "onDark") {
    return <MapGraphic className={className} onDark />;
  }

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-md border border-[var(--color-dark)]/12 bg-[var(--color-cream)] px-2.5 py-2 shadow-[0_2px_10px_rgba(18,26,23,0.1)] sm:rounded-lg sm:px-3.5 sm:py-2.5 ${className}`}
    >
      <MapGraphic className="block h-full w-full" onDark={false} />
    </span>
  );
}

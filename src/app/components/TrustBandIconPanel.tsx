import type { ReactNode } from "react";

type TrustBandIconPanelProps = {
  children: ReactNode;
  className?: string;
};

/** Dark grid panel used for trust-band icons (SC map, locally rooted, etc.). */
export function TrustBandIconPanel({ children, className = "" }: TrustBandIconPanelProps) {
  return (
    <div
      className={`relative flex shrink-0 items-center justify-center rounded-sm bg-[var(--color-dark)] px-2 py-2.5 sm:px-2.5 sm:py-3 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-sm opacity-[0.06]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(var(--color-on-dark) 1px, transparent 1px), linear-gradient(90deg, var(--color-on-dark) 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

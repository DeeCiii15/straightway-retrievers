"use client";

import { ContactTrigger } from "./ContactTrigger";
import { siteConfig } from "@/lib/siteConfig";

const phoneDigits = siteConfig.phone.replace(/\D/g, "");

const ribbonClass =
  "flex items-center gap-2.5 rounded-full bg-[var(--color-rust)] px-4 py-3.5 text-[var(--color-on-dark)] shadow-[0_4px_24px_rgba(0,0,0,0.28)] transition hover:bg-[var(--color-rust-hover)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.32)] active:scale-[0.97] motion-reduce:active:scale-100 sm:gap-3 sm:px-5 sm:py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dark)] focus-visible:ring-offset-2";

const labelClass =
  "font-[family-name:var(--font-display-face)] text-sm uppercase tracking-wider sm:text-base";

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5 shrink-0"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function ContactRibbon() {
  return (
    <aside
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] right-4 z-50 sm:bottom-6 sm:right-6"
      aria-label="Call us"
    >
      {/* Mobile: dial phone */}
      <a
        href={`tel:${phoneDigits}`}
        className={`${ribbonClass} md:hidden`}
      >
        <PhoneIcon />
        <span className={labelClass}>Call</span>
        <span className="sr-only">{siteConfig.phone}</span>
      </a>

      {/* Desktop: open contact modal */}
      <ContactTrigger className={`${ribbonClass} hidden md:flex`}>
        <PhoneIcon />
        <span className={labelClass}>Call</span>
      </ContactTrigger>
    </aside>
  );
}

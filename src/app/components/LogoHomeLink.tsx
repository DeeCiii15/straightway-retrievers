"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoCircle } from "./LogoCircle";
import { siteConfig } from "@/lib/siteConfig";
import { scrollToTop } from "@/lib/scroll";

export function LogoHomeLink() {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;

    e.preventDefault();
    scrollToTop();
    window.history.pushState(null, "", "/");
  };

  return (
    <Link
      href="/"
      onClick={handleClick}
      aria-label={`${siteConfig.name} — home`}
      className="flex min-w-0 items-center gap-3 rounded-sm font-[family-name:var(--font-display-face)] text-lg uppercase tracking-widest text-[var(--color-on-dark)] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-rust)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-dark)] sm:gap-3.5 sm:text-xl"
    >
      <LogoCircle priority />
      <span className="hidden truncate sm:inline">{siteConfig.name}</span>
    </Link>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HEADER_OFFSET, navLinkClass } from "@/lib/nav";
import { scrollToElement } from "@/lib/scroll";
import { useHomeSection } from "./HomeSectionContext";

const ABOUT_ID = "about";

type AboutNavLinkProps = {
  className?: string;
  children?: React.ReactNode;
  onNavigate?: () => void;
};

export function AboutNavLink({ className, children = "About us", onNavigate }: AboutNavLinkProps) {
  const pathname = usePathname();
  const { aboutInView } = useHomeSection();

  const isActive = pathname === "/" && aboutInView;

  const scrollToAbout = () => {
    const el = document.getElementById(ABOUT_ID);
    if (!el) return;
    scrollToElement(el, HEADER_OFFSET);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      scrollToAbout();
      window.history.pushState(null, "", `/#${ABOUT_ID}`);
    }
    onNavigate?.();
  };

  return (
    <Link
      href="/#about"
      className={className ?? navLinkClass(isActive)}
      onClick={handleClick}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

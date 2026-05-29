"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinkClass } from "@/lib/nav";
import { scrollToTop } from "@/lib/scroll";
import { useHomeSection } from "./HomeSectionContext";

type HomeNavLinkProps = {
  className?: string;
  children?: React.ReactNode;
  onNavigate?: () => void;
};

export function HomeNavLink({ className, children = "Home", onNavigate }: HomeNavLinkProps) {
  const pathname = usePathname();
  const { aboutInView } = useHomeSection();

  const isActive = pathname === "/" && !aboutInView;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      scrollToTop();
      window.history.pushState(null, "", "/");
    }
    onNavigate?.();
  };

  return (
    <Link
      href="/"
      className={className ?? navLinkClass(isActive)}
      onClick={handleClick}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AboutNavLink } from "./AboutNavLink";
import { ContactTrigger } from "./ContactTrigger";
import { HomeNavLink } from "./HomeNavLink";
import { LogoHomeLink } from "./LogoHomeLink";
import { navLinkClass } from "@/lib/nav";
import { siteConfig } from "@/lib/siteConfig";

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6" aria-hidden>
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6" aria-hidden>
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

const mobileLinkClass =
  "flex min-h-12 items-center font-[family-name:var(--font-display-face)] text-lg uppercase tracking-widest text-[var(--color-on-dark)]";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-dark)] shadow-md shadow-black/20">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-[4.25rem] lg:px-10">
        <LogoHomeLink />

        <div className="hidden items-center gap-3 md:flex lg:gap-6">
          <nav className="flex items-center gap-1 lg:gap-2" aria-label="Main">
            <HomeNavLink />
            <Link
              href="/services"
              className={navLinkClass(pathname === "/services")}
              aria-current={pathname === "/services" ? "page" : undefined}
            >
              Services
            </Link>
            <AboutNavLink />
          </nav>

          <ContactTrigger className="btn-rust py-2 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-on-dark)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-dark)] lg:px-4 lg:py-2">
            Contact
          </ContactTrigger>

          <a
            href={siteConfig.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${siteConfig.name} on Facebook (opens in new tab)`}
            className="rounded-sm border-l border-[var(--color-on-dark)]/20 p-2 pl-3 text-[var(--color-on-dark-muted)] transition hover:text-[var(--color-rust)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-rust)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-dark)]"
          >
            <FacebookIcon />
          </a>
        </div>

        <button
          type="button"
          className="flex size-11 items-center justify-center text-[var(--color-on-dark)] md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-nav" className="fixed inset-0 z-[60] md:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <button
            type="button"
            className="absolute inset-0 bg-[var(--color-dark)]/80"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <nav
            className="absolute inset-y-0 right-0 flex w-[min(100%,20rem)] flex-col bg-[var(--color-dark)] px-6 pb-8 pt-20 shadow-2xl"
            aria-label="Mobile"
          >
            <ul className="flex flex-col gap-1">
              <li>
                <HomeNavLink className={mobileLinkClass} onNavigate={() => setMenuOpen(false)}>
                  Home
                </HomeNavLink>
              </li>
              <li>
                <Link
                  href="/services"
                  className={mobileLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <AboutNavLink className={mobileLinkClass} onNavigate={() => setMenuOpen(false)}>
                  About us
                </AboutNavLink>
              </li>
              <li className="pt-2">
                <ContactTrigger
                  className="btn-rust w-full py-3.5 text-sm"
                  onNavigate={() => setMenuOpen(false)}
                >
                  Contact
                </ContactTrigger>
              </li>
            </ul>

            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mobileLinkClass} mt-6 gap-3 text-[var(--color-on-dark-muted)]`}
            >
              <FacebookIcon />
              Facebook
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

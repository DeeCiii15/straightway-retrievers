"use client";

import Link from "next/link";
import { LogoCircle } from "./LogoCircle";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-5"
      aria-hidden
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-5"
      aria-hidden
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

const socialLinks = [
  { href: siteConfig.facebookUrl, label: "Facebook", icon: FacebookIcon },
  { href: siteConfig.instagramUrl, label: "Instagram", icon: InstagramIcon },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [solid, setSolid] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setSolid(true);
      return;
    }

    const update = () => setSolid(window.scrollY > 40);

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [isHome]);

  const overlay = isHome && !solid;

  return (
    <header
      data-site-header
      data-overlay={overlay ? "" : undefined}
      className={
        overlay
          ? "fixed inset-x-0 top-0 z-50 border-b border-transparent bg-transparent transition-[background-color,border-color,box-shadow] duration-300"
          : "fixed inset-x-0 top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 shadow-sm backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300"
      }
    >
      <div className="mx-auto flex h-20 max-w-5xl flex-wrap items-center justify-between gap-4 px-4 sm:h-[5.25rem] sm:px-6">
        <Link
          href="/"
          className={
            overlay
              ? "flex min-w-0 items-center gap-3 font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--color-primary-fg)] sm:gap-3.5 sm:text-2xl"
              : "flex min-w-0 items-center gap-3 font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--color-primary)] sm:gap-3.5 sm:text-2xl"
          }
        >
          <LogoCircle priority />
          <span className="truncate">{siteConfig.name}</span>
        </Link>

        <div className="flex flex-wrap items-center gap-3 sm:gap-5">
          <nav className="flex items-center gap-0.5 text-base font-semibold sm:gap-1 sm:text-lg">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  overlay
                    ? "rounded-md px-2.5 py-2 text-[var(--color-primary-fg)] transition-colors hover:bg-white/15 hover:text-white sm:px-3.5"
                    : "rounded-md px-2.5 py-2 text-[var(--color-primary)] transition-colors hover:bg-[var(--color-muted-bg)] hover:text-[var(--color-primary-hover)] sm:px-3.5"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div
            className={
              overlay
                ? "flex items-center gap-1 border-l border-white/20 pl-3 sm:gap-1.5 sm:pl-5"
                : "flex items-center gap-1 border-l border-[var(--color-border)] pl-3 sm:gap-1.5 sm:pl-5"
            }
          >
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${siteConfig.name} on ${label}`}
                className={
                  overlay
                    ? "rounded-md p-2 text-[var(--color-primary-fg)] transition-colors hover:bg-white/15 hover:text-white"
                    : "rounded-md p-2 text-[var(--color-primary)] transition-colors hover:bg-[var(--color-muted-bg)] hover:text-[var(--color-primary-hover)]"
                }
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

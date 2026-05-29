"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { useContactModal } from "./ContactModalContext";

const phoneDigits = siteConfig.phone.replace(/\D/g, "");

export function ContactModal() {
  const { isOpen, closeContact } = useContactModal();
  const panelRef = useRef<HTMLDivElement>(null);
  const phoneLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeContact();
    };
    window.addEventListener("keydown", onKeyDown);

    const focusTimer = window.setTimeout(() => {
      phoneLinkRef.current?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [isOpen, closeContact]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop-in fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-[var(--color-dark)]/70 backdrop-blur-sm"
        aria-label="Close contact dialog"
        onClick={closeContact}
      />

      <div
        ref={panelRef}
        className="modal-panel-in relative z-10 flex max-h-[min(92vh,40rem)] w-full max-w-3xl flex-col overflow-y-auto shadow-2xl sm:max-h-[min(90vh,40rem)] sm:overflow-hidden lg:max-w-4xl lg:flex-row"
      >
        <button
          type="button"
          onClick={closeContact}
          className="absolute right-3 top-3 z-20 flex size-10 items-center justify-center bg-[var(--color-dark)]/80 text-[var(--color-on-dark)] transition hover:bg-[var(--color-rust)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-on-dark)]"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5" aria-hidden>
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="flex flex-col justify-center bg-[var(--color-dark)] px-6 py-10 sm:px-8 sm:py-12 lg:w-1/2 lg:py-14">
          <p className="label-caps text-[var(--color-rust)]">Get in touch</p>
          <h2 id="contact-modal-title" className="heading-display mt-3 text-3xl text-[var(--color-on-dark)] sm:text-4xl">
            Contact
          </h2>
          <p className="mt-4 text-base normal-case leading-relaxed tracking-normal text-[var(--color-on-dark-muted)]">
            Give us a call to talk about your dog, training goals, and availability.
          </p>
        </div>

        <div className="flex flex-col justify-center bg-[var(--color-sand)] px-6 py-10 sm:px-8 sm:py-12 lg:w-1/2 lg:py-14">
          <p className="label-caps">Phone</p>
          <a
            ref={phoneLinkRef}
            href={`tel:${phoneDigits}`}
            className="mt-3 block break-all rounded-sm font-[family-name:var(--font-display-face)] text-2xl uppercase tracking-wide text-[var(--color-dark)] transition hover:text-[var(--color-rust)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-rust)] sm:break-normal sm:text-4xl"
          >
            {siteConfig.phone}
          </a>
          <p className="label-caps mt-10">Location</p>
          <p className="mt-2 text-base normal-case tracking-normal text-[var(--color-muted)]">
            {siteConfig.location}
          </p>
          <p className="mt-1 text-sm normal-case tracking-normal text-[var(--color-muted)]">
            {siteConfig.serviceArea}
          </p>
        </div>
      </div>
    </div>
  );
}

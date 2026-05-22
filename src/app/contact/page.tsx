import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

const phoneDigits = siteConfig.phone.replace(/\D/g, "");

export const metadata: Metadata = {
  title: "Contact",
  description: `Call ${siteConfig.name} at ${siteConfig.phone}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-[var(--color-primary)] sm:text-5xl">
        Contact
      </h1>
      <p className="mt-4 text-lg text-[var(--color-muted)]">
        Give us a call to talk about your dog, training goals, and availability.
      </p>

      <div className="mt-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center sm:p-10">
        <p className="text-sm font-medium tracking-wide text-[var(--color-accent)]">Call</p>
        <a
          href={`tel:${phoneDigits}`}
          className="mt-3 inline-block font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--color-primary)] underline-offset-4 transition hover:text-[var(--color-primary-hover)] hover:underline sm:text-4xl"
        >
          {siteConfig.phone}
        </a>
      </div>
    </div>
  );
}

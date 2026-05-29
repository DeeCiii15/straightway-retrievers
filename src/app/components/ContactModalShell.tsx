"use client";

import { Suspense, type ReactNode } from "react";
import { ContactModal } from "./ContactModal";
import { ContactModalProvider } from "./ContactModalContext";
import { HomeSectionProvider } from "./HomeSectionContext";

export function ContactModalShell({ children }: { children: ReactNode }) {
  return (
    <ContactModalProvider>
      <HomeSectionProvider>
        {children}
        <ContactModal />
      </HomeSectionProvider>
    </ContactModalProvider>
  );
}

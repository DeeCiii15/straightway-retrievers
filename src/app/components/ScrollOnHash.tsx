"use client";

import { useEffect } from "react";
import { HEADER_OFFSET } from "@/lib/nav";
import { scrollToElement } from "@/lib/scroll";

export function ScrollOnHash() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.slice(1);
      if (!hash) return;

      const el = document.getElementById(hash);
      if (!el) return;

      scrollToElement(el, HEADER_OFFSET);
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return null;
}

"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { HEADER_OFFSET } from "@/lib/nav";

const ABOUT_ID = "about";

type HomeSectionContextValue = {
  aboutInView: boolean;
};

const HomeSectionContext = createContext<HomeSectionContextValue>({
  aboutInView: false,
});

export function HomeSectionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [aboutInView, setAboutInView] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setAboutInView(false);
      return;
    }

    const el = document.getElementById(ABOUT_ID);
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setAboutInView(entry.isIntersecting);
      },
      {
        rootMargin: `-${HEADER_OFFSET}px 0px -50% 0px`,
        threshold: 0.15,
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <HomeSectionContext.Provider value={{ aboutInView }}>
      {children}
    </HomeSectionContext.Provider>
  );
}

export function useHomeSection() {
  return useContext(HomeSectionContext);
}

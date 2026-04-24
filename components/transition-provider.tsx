"use client";

import { createContext, useContext, useRef } from "react";
import gsap from "gsap";

type TransitionContextType = {
  startTransition: (callback: () => void) => void;
};

const TransitionContext = createContext<TransitionContextType | null>(null);

const READY_EVENT = "page-transition-ready";

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const isTransitioningRef = useRef(false);

  const startTransition = (callback: () => void) => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    if (timelineRef.current) timelineRef.current.kill();

    const cols = document.querySelectorAll<HTMLDivElement>(".col-wipe");

    if (!cols.length) {
      callback();
      isTransitioningRef.current = false;
      return;
    }

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const AXIS = isMobile ? "scaleX" : "scaleY";
    const ORIGIN_IN = isMobile ? "left center" : "top center";
    const ORIGIN_OUT = isMobile ? "right center" : "bottom center";
    const DURATION = 0.5;
    const STAGGER = 0.08;

    const tl = gsap.timeline();
    timelineRef.current = tl;

    gsap.set(cols, { [AXIS]: 0, transformOrigin: ORIGIN_IN });

    // FASE 1 — cobre a tela
    tl.to(cols, {
      [AXIS]: 1,
      duration: DURATION,
      ease: "power3.inOut",
      stagger: STAGGER,
    });

    // Navega + aguarda a nova página sinalizar que está pronta
    tl.add(() => {
      callback(); // router.push()

      // Pausa a timeline até receber o evento da nova página
      tl.pause();

      const timeout = setTimeout(() => {
        // fallback: se demorar demais, revela mesmo assim
        proceed();
      }, 1000);

      function proceed() {
        clearTimeout(timeout);
        window.removeEventListener(READY_EVENT, proceed);
        tl.resume();
      }

      window.addEventListener(READY_EVENT, proceed, { once: true });
    });

    // FASE 2 — revela nova página
    tl.to(cols, {
      [AXIS]: 0,
      transformOrigin: ORIGIN_OUT,
      duration: DURATION,
      ease: "power3.inOut",
      stagger: STAGGER,
    });

    tl.eventCallback("onComplete", () => {
      isTransitioningRef.current = false;
    });
  };

  return (
    <TransitionContext.Provider value={{ startTransition }}>
      {children}
    </TransitionContext.Provider>
  );
}

export function usePageTransition() {
  const ctx = useContext(TransitionContext);
  if (!ctx) throw new Error("usePageTransition precisa do provider");
  return ctx;
}

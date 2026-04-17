"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const COLS = 12;
const ROWS = 8;
const COLOR = "#0a0a0a";

interface CustomWindow extends Window {
  __pixelTransitionIn?: (onComplete: () => void) => void;
  __pixelTransitionOut?: () => void;
}

export default function PixelTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    // Cobre a tela: quadrados aparecem aleatoriamente até cobrir tudo
    (window as CustomWindow).__pixelTransitionIn = (onComplete: () => void) => {
      if (!containerRef.current || isAnimating.current) return;
      isAnimating.current = true;

      const container = containerRef.current;
      container.style.pointerEvents = "all";

      const cells = Array.from(
        container.querySelectorAll<HTMLDivElement>(".pixel-cell")
      );

      // Embaralha para ordem verdadeiramente aleatória
      const shuffled = [...cells].sort(() => Math.random() - 0.5);

      gsap.killTweensOf(cells);
      gsap.set(cells, { scale: 0 });

      gsap.to(shuffled, {
        scale: 1,
        duration: 0.15,
        ease: "power1.in",
        stagger: {
          each: 0.005,
          from: "random",
        },
        onComplete,
      });
    };

    // Revela a tela: quadrados somem aleatoriamente
    (window as CustomWindow).__pixelTransitionOut = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const cells = Array.from(
        container.querySelectorAll<HTMLDivElement>(".pixel-cell")
      );

      const shuffled = [...cells].sort(() => Math.random() - 0.5);

      gsap.killTweensOf(cells);

      gsap.to(shuffled, {
        scale: 0,
        duration: 0.15,
        ease: "power1.out",
        stagger: {
          each: 0.005,
          from: "random",
        },
        onComplete: () => {
          container.style.pointerEvents = "none";
          isAnimating.current = false;
        },
      });
    };
  }, []);

  // Quando pathname muda (nova página renderizou), dispara a saída
  useEffect(() => {
    const out = (window as CustomWindow).__pixelTransitionOut;
    if (out) {
      const t = setTimeout(() => out(), 80);
      return () => clearTimeout(t);
    }
  }, [pathname]);

  const cells = Array.from({ length: ROWS * COLS });

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
        display: "grid",
        gridTemplateColumns: `repeat(${COLS}, 1fr)`,
        gridTemplateRows: `repeat(${ROWS}, 1fr)`,
        overflow: "hidden",
      }}
    >
      {cells.map((_, i) => (
        <div
          key={i}
          className="pixel-cell"
          style={{
            backgroundColor: COLOR,
            transform: "scale(0)",
            transformOrigin: "center center",
          }}
        />
      ))}
    </div>
  );
}
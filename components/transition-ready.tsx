// components/transition-ready.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function TransitionReady() {
  const pathname = usePathname();

  useEffect(() => {
    window.dispatchEvent(new Event("page-transition-ready"));
  }, [pathname]); // ← dispara toda vez que a rota muda

  return null;
}
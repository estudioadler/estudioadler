"use client";

import { useRouter } from "next/navigation";
import { usePageTransition } from "@/components/transition-provider";

export function useTransitionRouter() {
  const router = useRouter();
  const { startTransition } = usePageTransition();

  const push = (href: string) => {
    startTransition(() => {
      router.push(href);
    });
  };

  return { push };
}
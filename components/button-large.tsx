// button-large.tsx
"use client"

import { useRef, useEffect } from "react"
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr"
import gsap from "gsap"

interface ButtonLargeProps {
  text: string
  variant?: "dark" | "light" | "blue"
  animateIn?: boolean
}

export function ButtonLarge({
  text,
  variant = "blue",
  animateIn = false,
}: ButtonLargeProps) {
  const styles = {
    dark: "bg-neutral-950 text-neutral-50",
    light: "bg-neutral-50 text-neutral-950",
    blue: "bg-blue-600 text-neutral-50",
  }

  const ref = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!animateIn || !ref.current) return
    gsap.fromTo(
      ref.current,
      { scale: 0.85, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.35, ease: "power3.out" }
    )
  }, [animateIn])

  return (
    <button
      ref={ref}
      className={`
        ${styles[variant]}
        relative w-48 h-48
        overflow-hidden
        hover:brightness-110
        will-change-transform
        cursor-pointer
      `}
    >
      <p className="absolute bottom-4 left-4 font-medium text-2xl leading-none text-left">
        {text}
      </p>
      <ArrowUpRightIcon
        weight="light"
        className="absolute top-2 right-2 h-12 w-12 pointer-events-none"
      />
    </button>
  )
}
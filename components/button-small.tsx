"use client"

import { useRef, useEffect } from "react"
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr"
import gsap from "gsap"

interface ButtonSmallProps {
  text: string
  variant?: "dark" | "light" | "blue"
  animateIn?: boolean
  "data-btn"?: boolean
}

export function ButtonSmall({
  text,
  variant = "blue",
  animateIn = false,
}: ButtonSmallProps) {
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
        h-12 pr-2 pl-4 w-fit
        flex items-center gap-2
        hover:brightness-110 transition-all
        will-change-transform
        cursor-pointer
      `}
    >
      <span className="font-bold text-sm uppercase whitespace-nowrap leading-none">
        {text}
      </span>
      <ArrowUpRightIcon weight="light" className="size-8" />
    </button>
  )
}
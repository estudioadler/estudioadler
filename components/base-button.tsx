// base-button.tsx
"use client"

import { useRef, useEffect, useState } from "react"
import { LinkHoverCard } from "./link-hover-card"
import CustomLink from "./custom-link"
import { ButtonLarge } from "./button-large"
import { ButtonSmall } from "./button-small"
import gsap from "gsap"

interface BaseButtonProps {
  text: string
  label?: string
  variant?: "dark" | "light" | "blue"
  href?: string
  onClickDelay?: number
  compact?: boolean
}

export function BaseButton({
  text,
  label = "Quero uma proposta",
  variant = "blue",
  href,
  onClickDelay,
  compact = false,
}: BaseButtonProps) {
  const activeVariantRef = useRef<"large" | "small">(compact ? "small" : "large")
  const [activeVariant, setActiveVariant] = useState<"large" | "small">(
    compact ? "small" : "large"
  )
  const [animateIn, setAnimateIn] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    const target = compact ? "small" : "large"
    if (target === activeVariantRef.current) return

    const currentEl = containerRef.current?.querySelector("[data-btn]")
    if (currentEl) {
      gsap.to(currentEl, {
        scale: 0.85,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          activeVariantRef.current = target
          setActiveVariant(target)
          setAnimateIn((v) => !v)
        },
      })
    } else {
      activeVariantRef.current = target
      setActiveVariant(target)
    }
  }, [compact])

  const button =
    activeVariant === "large" ? (
      <ButtonLarge
        data-btn
        text={text}
        variant={variant}
        animateIn={animateIn}
      />
    ) : (
      <ButtonSmall
        data-btn
        text={text}
        variant={variant}
        animateIn={animateIn}
      />
    )

  return (
    <LinkHoverCard label={label} icon="arrow-diagonal">
      <CustomLink href={href ?? "#"} onClickDelay={onClickDelay}>
        <div ref={containerRef}>
          {button}
        </div>
      </CustomLink>
    </LinkHoverCard>
  )
}
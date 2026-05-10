"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { BaseButton } from "./base-button"
import { LinkHoverCard } from "./link-hover-card"
import { ScrollToTopButton } from "./scroll-to-top-button"

export function FloatingActions() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  if (pathname === "/orcamento") return (
  <div className="fixed right-6 bottom-6 z-55 flex items-end md:right-12 md:bottom-12">
    <div
      className={`flex justify-end overflow-hidden transition-all duration-300 ${
        visible
          ? "w-14 opacity-100"
          : "pointer-events-none ml-0 w-0 opacity-0"
      }`}
    >
      <LinkHoverCard label="Voltar ao topo" icon="arrow-right">
        <ScrollToTopButton onClick={scrollToTop} variant="dark" />
      </LinkHoverCard>
    </div>
  </div>
)

  return (
    <div className="fixed right-6 bottom-6 z-55 flex items-end md:right-12 md:bottom-12">
      <BaseButton
        variant="blue"
        text="Quero um orçamento"
        href="/orcamento"
        compact={visible}
      />

      <div
        className={`flex justify-end overflow-hidden transition-all duration-300 ${
          visible
            ? "w-14 opacity-100"
            : "pointer-events-none ml-0 w-0 opacity-0"
        }`}
      >
        <LinkHoverCard label="Voltar ao topo" icon="arrow-right">
          <ScrollToTopButton onClick={scrollToTop} variant="dark" />
        </LinkHoverCard>
      </div>
    </div>
  )
}
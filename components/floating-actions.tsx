"use client"

import { useState, useEffect } from "react"
import { BaseButton } from "./base-button"
import { LinkHoverCard } from "./link-hover-card"
import { ScrollToTopButton } from "./scroll-to-top-button"

export function FloatingActions() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <div className="fixed right-6 bottom-6 z-30 flex items-center md:right-14 md:bottom-14">
      {/* BOTÃO PRINCIPAL — empurrado pelo scroll quando ele surge */}
      <BaseButton variant="dark" text="Quero uma proposta" href="/orcamento" />

      {/* SCROLL TO TOP — surge da direita e empurra o botão */}
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

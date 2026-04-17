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
    <div className="fixed bottom-6 right-6 z-30 flex items-center">

      {/* BOTÃO PRINCIPAL — empurrado pelo scroll quando ele surge */}
      <BaseButton
        variant="dark"
        text="Quero uma proposta"
        onClick={() => (window.location.href = "/orcamento")}
      />

      {/* SCROLL TO TOP — surge da direita e empurra o botão */}
      <div
        className={`transition-all duration-300 overflow-hidden flex justify-end ${
          visible
            ? "w-14 opacity-100"
            : "w-0 opacity-0 ml-0 pointer-events-none"
        }`}
      >
        <LinkHoverCard label="Voltar ao topo" icon="arrow-right">
          <ScrollToTopButton onClick={scrollToTop} variant="dark" />
        </LinkHoverCard>
      </div>

    </div>
  )
}
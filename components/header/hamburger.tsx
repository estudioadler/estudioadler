"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { LinkHoverCard } from "@/components/link-hover-card"

interface HamburgerProps {
  menuOpen: boolean
  isLight: boolean
  onClick: () => void
}

export const Hamburger = ({ menuOpen, isLight, onClick }: HamburgerProps) => {
  const lineTopRef = useRef<HTMLSpanElement>(null)
  const lineBotRef = useRef<HTMLSpanElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const lastScrollY = useRef(0)
  const visible = useRef(true)

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY
      const goingDown = current > lastScrollY.current
      lastScrollY.current = current

      if (menuOpen) return

      if (goingDown && visible.current) {
        visible.current = false
        gsap.to(btnRef.current, {
          y: -24,
          opacity: 0,
          duration: 0.35,
          ease: "power2.in",
        })
      } else if (!goingDown && !visible.current) {
        visible.current = true
        gsap.to(btnRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        })
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [menuOpen])

  const animate = (opening: boolean) => {
    gsap.to(lineTopRef.current, {
      top: opening ? "7px" : "4px",
      rotate: opening ? 45 : 0,
      duration: 0.4,
      ease: "power3.inOut",
    })
    gsap.to(lineBotRef.current, {
      top: opening ? "7px" : "10px",
      rotate: opening ? -45 : 0,
      duration: 0.4,
      ease: "power3.inOut",
    })
  }
  useEffect(() => {
  animate(menuOpen)
}, [menuOpen])

  const handleClick = () => {
  onClick()
}

  return (
  <button
    ref={btnRef}
    onClick={handleClick}
    aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
    className={[
      "fixed z-80 flex h-10 w-10 cursor-pointer items-center justify-center",
      "top-3 right-5 md:top-5 md:right-12",   // alinhado com o header
      menuOpen ? "text-white" : isLight ? "text-neutral-950" : "text-white",
    ].join(" ")}
  >
    <LinkHoverCard label={menuOpen ? "Fechar" : "Menu"} icon="none">
      <div className="relative h-4 w-6">
        <span
          ref={lineTopRef}
          className="absolute left-0 h-0.5 w-full rounded-full bg-current"
          style={{ top: "4px" }}
        />
        <span
          ref={lineBotRef}
          className="absolute left-0 h-0.5 w-full rounded-full bg-current"
          style={{ top: "10px" }}
        />
      </div>
    </LinkHoverCard>
  </button>
)
}

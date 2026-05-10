"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { useHeaderTheme } from "@/hooks/useHeaderTheme"
import CustomLink from "@/components/custom-link"
import { LinkHoverCard } from "@/components/link-hover-card"
import { Hamburger } from "./hamburger"
import { HeaderNav } from "./header-nav"
import { ButtonSmall } from "../button-small"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [headerBehind, setHeaderBehind] = useState(false)
  const [frozenTheme, setFrozenTheme] = useState<"light" | "dark" | null>(null)
  const headerRef = useRef<HTMLElement>(null)
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
        gsap.to(headerRef.current, {
          y: -24,
          opacity: 0,
          duration: 0.35,
          ease: "power2.in",
        })
      } else if (!goingDown && !visible.current) {
        visible.current = true
        gsap.to(headerRef.current, {
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

  const theme = useHeaderTheme(72)
  const effectiveTheme = menuOpen && frozenTheme ? frozenTheme : theme
  const isLight = effectiveTheme === "light"

  const toggleMenu = () => {
    const opening = !menuOpen
    if (opening) {
      setFrozenTheme(theme)
      setHeaderBehind(true)
    } else {
      setFrozenTheme(null)
    }
    setMenuOpen(opening)

    const isMobile = window.innerWidth < 768
    if (isMobile) {
      document.body.style.overflow = opening ? "hidden" : ""
    }
  }

  return (
    <>
      <header
        ref={headerRef}
        data-header
        className={[
          "fixed top-0 right-0 left-0 border-b border-neutral-500/15",
          "flex items-center justify-between px-6 py-4 md:px-12 md:py-5",
          headerBehind ? "z-40" : "z-70", // apenas aqui
          isLight
            ? "bg-neutral-50 text-neutral-950"
            : "bg-neutral-950 text-neutral-50",
        ].join(" ")}
      >
        {/* Logo — esquerda */}
        <CustomLink href="/" className="flex items-center gap-2.5">
          <LinkHoverCard label="Home" icon="arrow-diagonal">
            <Image
              src="/logo-symbol-2.png"
              alt="Logo"
              width={90}
              height={90}
              className={`w-8 md:w-10 ${isLight ? "" : "invert"}`}
            />
          </LinkHoverCard>
        </CustomLink>
      </header>

      {/* Hamburger */}
      <Hamburger menuOpen={menuOpen} isLight={isLight} onClick={toggleMenu} />
      <HeaderNav
        menuOpen={menuOpen}
        onToggle={toggleMenu}
        onOpen={() => {}}
        onClose={(tl) => {
          tl.eventCallback("onComplete", () => setHeaderBehind(false))
        }}
      />
    </>
  )
}

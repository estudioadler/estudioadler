"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { usePathname } from "next/navigation"

export type HeaderTheme = "light" | "dark"

function getThemeAtPoint(x: number, y: number): HeaderTheme {
  const elements = document.elementsFromPoint(x, y)

  for (const el of elements) {
    if (el.closest("[data-header]")) continue

    const theme = el.closest("[data-header-theme]")
      ?.getAttribute("data-header-theme") as HeaderTheme | null

    if (theme === "light" || theme === "dark") return theme
  }

  return "dark"
}

export function useHeaderTheme(headerHeight = 72): HeaderTheme {
  const pathname = usePathname()
  const [theme, setTheme] = useState<HeaderTheme>("dark")
  const rafRef = useRef<number | undefined>(undefined)

  const update = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    
    rafRef.current = requestAnimationFrame(() => {
      const x = window.innerWidth / 2
      const y = headerHeight / 2
      const next = getThemeAtPoint(x, y)
      setTheme(next)  // ✅ Remove comparação, sempre atualiza
    })
  }, [headerHeight])

  // ✅ UPDATE IMEDIATO na mudança de rota (sem delay)
  useEffect(() => {
    update()
  }, [pathname, update])

  // ✅ Scroll/resize com throttle
  useEffect(() => {
    let ticking = false

    const handleScrollOrResize = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          update()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScrollOrResize, { passive: true })
    window.addEventListener("resize", handleScrollOrResize, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScrollOrResize)
      window.removeEventListener("resize", handleScrollOrResize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [update])

  return theme
}
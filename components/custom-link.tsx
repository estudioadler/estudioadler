"use client"

import { usePathname } from "next/navigation"
import { useTransitionRouter } from "@/hooks/useTransitionRouter"
import { useEffect, useRef } from "react"

type CustomLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
  onClickDelay?: number // opcional
}

export default function CustomLink({
  href,
  children,
  className,
  onClick,
  onClickDelay = 0,
}: CustomLinkProps) {
  const pathname = usePathname()
  const { push } = useTransitionRouter()

  const isNavigatingRef = useRef(false)

  const normalize = (path: string) => path.replace(/\/$/, "")

  const isExternal = href.startsWith("http")

  // 🔥 RESET AUTOMÁTICO QUANDO A ROTA MUDA
  useEffect(() => {
    isNavigatingRef.current = false
  }, [pathname])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isExternal) return

    e.preventDefault()

    // evita spam de clique
    if (isNavigatingRef.current) return

    const current = normalize(pathname)
    const target = normalize(href)

    // 🧠 mesma rota → scroll suave
    if (current === target) {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    isNavigatingRef.current = true

    // executa ação externa (ex: fechar menu)
    if (onClick) onClick()

    if (onClickDelay > 0) {
      setTimeout(() => {
        push(href)
      }, onClickDelay)
    } else {
      push(href)
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}

"use client"

import {
  ArrowRightIcon,
  ArrowsLeftRightIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react/dist/ssr"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
// ─── Constantes internas ──────────────────────────────────────────────────────

const OFFSET_X = 14
const OFFSET_Y = 16
const OPEN_DELAY = 0
const CLOSE_DELAY = 0

// ─── Tipos ───────────────────────────────────────────────────────────────────

type IconVariant = "arrow-right" | "arrow-diagonal" | "arrow-bilateral" | "none"

interface LinkHoverCardProps {
  children: React.ReactNode
  label?: string
  icon?: IconVariant
}

// ─── Mapa de ícones ───────────────────────────────────────────────────────────

const ICON_MAP: Record<Exclude<IconVariant, "none">, typeof ArrowRightIcon> = {
  "arrow-right": ArrowRightIcon,
  "arrow-diagonal": ArrowUpRightIcon,
  "arrow-bilateral": ArrowsLeftRightIcon,
}

// ─── Componente ───────────────────────────────────────────────────────────────

const isDesktop = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: fine)").matches

export function LinkHoverCard({
  children,
  label,
  icon = "none",
}: LinkHoverCardProps) {
  const [visible, setVisible] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const triggerRef = useRef<HTMLSpanElement>(null)
  const [mounted, setMounted] = useState(false)
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const clearTimers = () => {
    if (openTimer.current) clearTimeout(openTimer.current)
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  const handleMouseMove = (e: MouseEvent) => {
    setPos({ x: e.clientX + OFFSET_X, y: e.clientY + OFFSET_Y })
  }

  const handleMouseEnter = (e: MouseEvent) => {
    if (!isDesktop()) return   // ← única mudança
    clearTimers()
    setPos({ x: e.clientX + OFFSET_X, y: e.clientY + OFFSET_Y })
    window.addEventListener("mousemove", handleMouseMove)
    openTimer.current = setTimeout(() => setVisible(true), OPEN_DELAY)
  }

  const handleMouseLeave = () => {
    clearTimers()
    closeTimer.current = setTimeout(() => {
      setVisible(false)
      window.removeEventListener("mousemove", handleMouseMove)
    }, CLOSE_DELAY)
  }

  useEffect(() => {
    const el = triggerRef.current
    if (!el) return
    el.addEventListener("mouseenter", handleMouseEnter)
    el.addEventListener("mouseleave", handleMouseLeave)
    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter)
      el.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("mousemove", handleMouseMove)
      clearTimers()
    }
  }, [])

  const Icon = icon !== "none" ? ICON_MAP[icon] : null

  const card =
    visible && label ? (
      <div
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          pointerEvents: "none",
          zIndex: 9999,
        }}
      >
        <div className="flex animate-in items-center gap-1 outline bg-neutral-950 px-2 py-1.5 text-xs font-light whitespace-nowrap text-neutral-50 duration-100 fade-in-0 zoom-in-95">
          <span>{label}</span>
          {Icon && (
            <Icon
              size={12}
              className="shrink-0 text-neutral-50"
              strokeWidth={2.5}
            />
          )}
        </div>
      </div>
    ) : null

  return (
    <>
      <span ref={triggerRef} style={{ display: "contents" }}>
        {children}
      </span>
      {mounted && card ? createPortal(card, document.body) : null}
    </>
  )
}

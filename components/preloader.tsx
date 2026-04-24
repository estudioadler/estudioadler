"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

// ⚙️ ajuste aqui
const REVEAL_DELAY = 0.4 // segundos antes de começar o reveal
const REVEAL_DURATION = 3 // velocidade do efeito esquerda → direita
const HOLD_AFTER = 0.3 // quanto tempo fica visível após o reveal

export default function Preloader() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const clipRectRef = useRef<SVGRectElement>(null)
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const clipRect = clipRectRef.current
    if (!wrapper || !clipRect) return

    // aguarda o conteúdo da página carregar
    const startAnimation = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(wrapper, {
            yPercent: -100,
            duration: 0.8,
            delay: HOLD_AFTER,
            ease: "power3.inOut",
            onComplete: () => setMounted(false),
          })
        },
      })

      tl.fromTo(
        clipRect,
        { attr: { width: 0 } },
        {
          attr: { width: "100%" },
          duration: REVEAL_DURATION,
          delay: REVEAL_DELAY,
          ease: "power2.inOut",
        }
      )
    }

    if (document.readyState === "complete") {
      startAnimation()
    } else {
      window.addEventListener("load", startAnimation, { once: true })
    }

    return () => window.removeEventListener("load", startAnimation)
  }, [])

  if (!mounted) return null

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-neutral-950"
    >
      <svg
        viewBox="0 0 300 80"
        width="150"
        height="64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="logo-reveal">
            <rect ref={clipRectRef} x="0" y="0" width="0" height="80" />
          </clipPath>
        </defs>
        <image
          className="invert"
          href="/logo-symbol-2.png"
          x="0"
          y="0"
          width="300"
          height="80"
          style={{ opacity: 0.08 }}
        />
        <image
          className="invert"
          href="/logo-symbol-2.png"
          x="0"
          y="0"
          width="300"
          height="80"
          clipPath="url(#logo-reveal)"
        />
      </svg>
    </div>
  )
}

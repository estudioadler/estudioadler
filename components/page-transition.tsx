"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface PageTransitionProps {
  isTransitioning: boolean
}

export default function PageTransition({ isTransitioning }: PageTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const blocksRef = useRef<HTMLDivElement[]>([])
  const tlRef = useRef<gsap.core.Timeline | undefined>(undefined)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const blocks = blocksRef.current
    const numBlocks = window.innerWidth >= 768 ? 10 : 5
    const blockHeight = 100 / numBlocks

    // ✅ Configura blocos uma vez
    blocks.slice(0, numBlocks).forEach((block, i) => {
      if (block) {
        gsap.set(block, {
          height: `${blockHeight}%`,
          top: `${i * blockHeight}%`,
          x: "-100%",  // ✅ RESET POSIÇÃO INICIAL
        })
      }
    })

    // ✅ Mata timeline anterior
    if (tlRef.current) {
      tlRef.current.kill()
    }

    const tl = gsap.timeline()
    tlRef.current = tl

    if (isTransitioning) {
      // ✅ ENTRADA: surge da ESQUERDA
      tl.to(blocks.slice(0, numBlocks), {
        x: "0%",
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
      }).to(blocks.slice(0, numBlocks), {
        x: "100%",
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.in",
        delay: 0.1,  // Pequeno delay antes da saída
      }, "+=0.2")
    }

    return () => {
      if (tlRef.current) {
        tlRef.current.kill()
        tlRef.current = undefined
      }
    }
  }, [isTransitioning])

  // ✅ RESET quando componente desmonta
  useEffect(() => {
    return () => {
      blocksRef.current.forEach(block => {
        if (block) {
          gsap.set(block, { x: "-100%" })
        }
      })
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 pointer-events-none bg-neutral-950 overflow-hidden"
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) blocksRef.current[i] = el
          }}
          className="absolute left-0 top-0 w-full bg-neutral-950"
        />
      ))}
    </div>
  )
}
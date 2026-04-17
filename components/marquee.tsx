"use client"

import { useEffect, useRef } from "react"

const ROW_1 = [
  "Estratégia",
  "Marca",
  "Posicionamento",
  "Performance",
  "Crescimento",
  "Presença Digital",
  "Autoridade",
  "Conversão",
  "Experiência",
  "Design Inteligente",
  "Comunicação",
]

// Repete os itens para garantir loop contínuo
function buildItems(items: string[], repeat = 4) {
  return Array.from({ length: repeat }, () => items).flat()
}

export function Marquee() {
  const track2Ref = useRef<HTMLDivElement>(null)

 useEffect(() => {
  const track = track2Ref.current
  if (!track) return

  const half = track.scrollWidth / 4

  let x = -(half * 0.3)
  let speed = 0
  let targetSpeed = 0.8
  let lastScrollY = window.scrollY
  let rafId: number
  let lastTime = performance.now()
  let scrollTimeout: ReturnType<typeof setTimeout>

  function lerp(a: number, b: number, t: number) {
    return a + (b - a) * t
  }

  function tick(now: number) {
    const dt = Math.min((now - lastTime) / 16.67, 3)
    lastTime = now

    speed = lerp(speed, targetSpeed, 0.06 * dt)

    x -= speed * dt

    if (x > 0) x -= half
    if (x < -half) x += half

    if (track) track.style.transform = `translateX(${x}px)`

    rafId = requestAnimationFrame(tick)
  }

  function onScroll() {
    const scrollY = window.scrollY
    const delta = scrollY - lastScrollY
    lastScrollY = scrollY

    targetSpeed = delta > 0 ? 3.5 : -3.5

    clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(() => {
      targetSpeed = speed > 0 ? 0.8 : -0.8
    }, 150)
  }

  window.addEventListener("scroll", onScroll, { passive: true })
  rafId = requestAnimationFrame(tick)

  return () => {
    window.removeEventListener("scroll", onScroll)
    cancelAnimationFrame(rafId)
    clearTimeout(scrollTimeout)
  }
}, [])

  return (
    <section className="w-full bg-blue-950 text-white">
      <div className="overflow-hidden">
        <div
          ref={track2Ref}
          className="flex w-max translate-y-[38%] will-change-transform select-none"
          draggable="false"
        >
          {buildItems(ROW_1).map((text, i) => (
            <div key={i} className="flex items-center px-4 gap-6">
              <span className="font-monumental text-4xl whitespace-nowrap uppercase">
                {text}
              </span>

              <div className="w-8 h-1.5 bg-white" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

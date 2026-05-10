"use client"

import { useEffect, useRef } from "react"

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const size = 12
    const gap = 1
    const step = size + gap
    const fills = ["#141414"]

    function draw() {
      const W = canvas!.offsetWidth
      const H = canvas!.offsetHeight
      canvas!.width = W
      canvas!.height = H

      const cols = Math.ceil(W / step) + 1
      const rows = Math.ceil(H / step) + 1

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * step
          const y = r * step
          const yRatio = y / H
          const threshold = 0.2 + yRatio * 0.7

          if (Math.random() < threshold) {
            const fi = Math.floor(Math.random() * fills.length)
            ctx!.fillStyle = fills[fi]
            ctx!.fillRect(x, y, size, size)
          }

          ctx!.strokeStyle = "rgba(255,255,255,0.02)"
          ctx!.lineWidth = 0.5
          ctx!.strokeRect(x + 0.25, y + 0.25, size - 0.5, size - 0.5)
        }
      }
    }

    draw()

    const ro = new ResizeObserver(() => draw())
    ro.observe(canvas)
    return () => ro.disconnect()
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />
      {/* fade topo */}
      <div className="absolute inset-0 bg-linear-to-b from-neutral-950 via-neutral-950/70 to-transparent" />
    </>
  )
}
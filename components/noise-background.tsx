"use client"

import { useEffect, useRef } from "react"

export function NoiseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId: number
    let frame = 0

    function drawNoise() {
      const W = canvas!.width
      const H = canvas!.height
      const imageData = ctx!.createImageData(W, H)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255
        data[i] = value
        data[i + 1] = value
        data[i + 2] = value
        data[i + 3] = 225 // opacidade do noise — ajuste aqui (0-255)
      }

      ctx!.putImageData(imageData, 0, 0)
      frame++
      animId = requestAnimationFrame(drawNoise)
    }

    function resize() {
      canvas!.width = window.innerWidth
      canvas!.height = window.innerHeight
    }

    resize()
    drawNoise()

    window.addEventListener("resize", resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-9999 opacity-[0.04]"
    />
  )
}
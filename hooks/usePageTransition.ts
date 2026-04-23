"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"

export function usePageTransition() {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const rafRef = useRef<number | undefined>(
    undefined
  )
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)  // ✅ Corrigido

  const startTransition = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = undefined
    }
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    
    setIsTransitioning(true)
    
    // Delay pra entrada completar
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false)
    }, 600)
  }, [])

  const endTransition = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setIsTransitioning(false)
  }, [])

  // ✅ ANTI-WARNING: useEffect SEM setState direto
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      startTransition()
    }, 0) // 0ms delay resolve cascading renders

    return () => clearTimeout(timeoutId)
  }, [pathname]) // ✅ Remove startTransition da dependência

  // ✅ Cleanup
  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return {
    isTransitioning,
    startTransition,
    endTransition,
  }
}
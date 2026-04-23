"use client"

import { usePageTransition } from "@/hooks/usePageTransition"
import PageTransition from "@/components/page-transition"
import { ReactNode } from "react"

interface PageWrapperProps {
  children: ReactNode
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const { isTransitioning } = usePageTransition()

  return (
    <>
      <PageTransition isTransitioning={isTransitioning} />
      {children}
    </>
  )
}
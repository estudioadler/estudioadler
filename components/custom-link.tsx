"use client"

import { usePageTransition } from "@/hooks/usePageTransition"
import Link from "next/link"
import { ReactNode } from "react"

interface CustomLinkProps {
  children: ReactNode
  href: string
  className?: string
  onClick?: () => void
}

export default function CustomLink({ 
  children, 
  href, 
  className,
  onClick,
}: CustomLinkProps) {
  const { startTransition } = usePageTransition()

  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        onClick?.()
        startTransition()
      }}
    >
      {children}
    </Link>
  )
}
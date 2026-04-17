"use client"

import { ArrowDownIcon } from "@phosphor-icons/react/dist/ssr"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    if (isOpen) {
      gsap.fromTo(
        el,
        { height: 0, opacity: 0, y: -10 },
        {
          height: "auto",
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        }
      )
    } else {
      gsap.to(el, {
        height: 0,
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: "power2.in",
      })
    }
  }, [isOpen])

  return (
    <div
      className={`px-6 border-b border-border last:border-b-0 transition-colors ${
        isOpen ? "bg-neutral-950" : ""
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span
          className={`text-base transition-colors ${
            isOpen ? "text-neutral-50" : ""
          }`}
        >
          {question}
        </span>

        <ArrowDownIcon
          className={`h-4 w-4 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-neutral-50" : "text-muted-foreground"
          }`}
        />
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden text-sm text-muted-foreground"
        style={{ height: 0 }}
      >
        <p className="pb-5">{answer}</p>
      </div>
    </div>
  )
}
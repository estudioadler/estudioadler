"use client"

import { useEffect, useRef } from "react"
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react/dist/ssr"
import { gsap } from "gsap"
import CustomLink from "@/components/custom-link"
import { LinkHoverCard } from "@/components/link-hover-card"
import { navigationLinks, servicesLinks, socialLinks } from "./constants"

interface HeaderNavProps {
  menuOpen: boolean
  onToggle: () => void
  onOpen: (tl: gsap.core.Timeline) => void
  onClose: (tl: gsap.core.Timeline) => void
}

export const HeaderNav = ({
  menuOpen,
  onToggle,
  onOpen,
  onClose,
}: HeaderNavProps) => {
  const overlayRef = useRef<HTMLDivElement>(null)
  const socialRef = useRef<HTMLElement>(null)
  const menuViewRef = useRef<HTMLDivElement>(null)
  const servicosViewRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
  if (servicosViewRef.current)
    gsap.set(servicosViewRef.current, { x: 40, pointerEvents: "none" })
  if (menuViewRef.current)
    gsap.set(menuViewRef.current, { pointerEvents: "none" })
}, [])

  useEffect(() => {
    const overlay = overlayRef.current
    const social = socialRef.current
    const menuView = menuViewRef.current
    if (!overlay || !social || !menuView) return

    if (menuOpen) {
  gsap.set(overlay, { visibility: "visible", pointerEvents: "auto" })
  gsap.set(menuView, { autoAlpha: 1, x: 0, pointerEvents: "auto" })
      gsap.set(menuView, { opacity: 1, x: 0, pointerEvents: "auto" })
      if (servicosViewRef.current)
        gsap.set(servicosViewRef.current, {
          opacity: 0,
          x: 40,
          pointerEvents: "none",
        })
      gsap.set(overlay, { pointerEvents: "auto", visibility: "visible" })

      const tl = gsap.timeline()
      tl.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.3 })
        .fromTo(
          menuView.children,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.06 },
          "-=0.1"
        )
        .fromTo(
          social.children,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.3, stagger: 0.05 },
          "-=0.2"
        )
      onOpen(tl)
    } else {
      const tl = gsap.timeline({
  onComplete: () => {
    gsap.set(overlay, { visibility: "hidden", pointerEvents: "none" })
  },
})
tl.to([menuView.children, social.children], { opacity: 0, y: -10, duration: 0.2, stagger: 0.03 })
  .to(overlay, { autoAlpha: 0, duration: 0.25 }, "-=0.1")
onClose(tl)
    }
  },)

  const goToServicos = () => {
    const menuView = menuViewRef.current
    const servicosView = servicosViewRef.current
    if (!menuView || !servicosView) return
    gsap.to(menuView, {
      opacity: 0,
      x: -40,
      duration: 0.25,
      onComplete: () => gsap.set(menuView, { pointerEvents: "none" }),
    })
    gsap.fromTo(
      servicosView,
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.3,
        delay: 0.2,
        onStart: () => gsap.set(servicosView, { pointerEvents: "auto" }),
      }
    )
  }

  const goToMenu = () => {
    const menuView = menuViewRef.current
    const servicosView = servicosViewRef.current
    if (!menuView || !servicosView) return
    gsap.to(servicosView, {
      opacity: 0,
      x: 40,
      duration: 0.25,
      onComplete: () => gsap.set(servicosView, { pointerEvents: "none" }),
    })
    gsap.fromTo(
      menuView,
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.3,
        delay: 0.2,
        onStart: () => gsap.set(menuView, { pointerEvents: "auto" }),
      }
    )
  }

  return (
    <>
      {/* Backdrop desktop */}

      <div
        onClick={onToggle}
        className="fixed inset-0 z-50 hidden bg-black/40 backdrop-blur-md md:block"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          visibility: menuOpen ? "visible" : "hidden", // ← adicione isso
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Painel */}
      <div
        ref={overlayRef}
        onClick={(e) => e.stopPropagation()}
        className="pointer-events-none invisible fixed inset-0 z-60 bg-neutral-900 opacity-0 md:inset-2 md:right-8 md:left-auto md:w-[32%]"
        // className já define o estado inicial — GSAP sobrescreve quando abre
      >
        <div className="relative flex h-full flex-col justify-between overflow-hidden px-6 pt-24 pb-10 md:px-12 md:pt-32">
          <nav className="relative flex-1 py-12">
            <div
              ref={menuViewRef}
              className="absolute inset-0 flex flex-col pt-12"
            >
              {navigationLinks.map((link) => {
                if (link.label === "Serviços") {
                  return (
                    <button
                      key={link.href}
                      onClick={goToServicos}
                      className="group flex cursor-pointer items-center font-unbounded text-[32px] font-light tracking-[-0.04em] text-white uppercase"
                    >
                      <LinkHoverCard label="Serviços" icon="arrow-right">
                        {link.label}
                        <ArrowRightIcon
                          weight="thin"
                          className="size-10 opacity-50 group-hover:opacity-100"
                        />
                      </LinkHoverCard>
                    </button>
                  )
                }
                return (
                  <CustomLink
                    onClickDelay={200}
                    key={link.href}
                    href={link.href}
                    onClick={onToggle}
                    className="group flex cursor-pointer items-center font-unbounded text-[32px] font-light tracking-[-0.04em] text-white uppercase"
                  >
                    <LinkHoverCard
                      label={link.label}
                      icon={link.external ? "arrow-diagonal" : "arrow-right"}
                    >
                      {link.label}
                      {link.external && (
                        <ArrowUpRightIcon
                          weight="thin"
                          className="size-10 opacity-50 group-hover:opacity-100"
                        />
                      )}
                    </LinkHoverCard>
                  </CustomLink>
                )
              })}
            </div>

            <div
              ref={servicosViewRef}
              className="absolute inset-0 flex flex-col gap-2 pt-12"
            >
              <button
                onClick={goToMenu}
                className="mb-6 flex cursor-pointer items-center gap-2 text-sm text-neutral-400"
              >
                <LinkHoverCard label="Voltar" icon="arrow-right">
                  <ArrowLeftIcon className="h-3.5 w-3.5" />
                  Voltar
                </LinkHoverCard>
              </button>
              {servicesLinks.map((service) => (
                <CustomLink
                  onClickDelay={200}
                  key={service.href}
                  href={service.href}
                  onClick={onToggle}
                  className="font-unbounded text-[32px] leading-[1.1] font-light tracking-[-0.04em] text-white uppercase"
                >
                  <LinkHoverCard label={service.label} icon="arrow-right">
                    {service.label}
                  </LinkHoverCard>
                </CustomLink>
              ))}
            </div>
          </nav>

          <nav ref={socialRef} className="flex flex-col gap-2">
            {socialLinks.map((link) => (
              <CustomLink
                onClickDelay={200}
                key={link.href}
                href={link.href}
                onClick={onToggle}
                className="group flex w-fit items-center gap-1.5 text-sm text-neutral-400 hover:text-white"
              >
                <LinkHoverCard label={link.label} icon="arrow-diagonal">
                  {link.label}
                  <ArrowUpRightIcon className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100" />
                </LinkHoverCard>
              </CustomLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}

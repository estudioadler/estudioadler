"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react/dist/ssr"
import { gsap } from "gsap"
import { useHeaderTheme } from "@/hooks/useHeaderTheme"
import CustomLink from "./custom-link"
import { LinkHoverCard } from "./link-hover-card"

const navigationLinks = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Sobre", href: "/sobre" },
  { label: "Orçamento", href: "/orcamento", external: true },
]

const servicesLinks = [
  { label: "Sites Institucionais", href: "/servicos/sites-institucionais" },
  { label: "Landing Pages", href: "/servicos/landing-pages" },
  { label: "E-commerces", href: "/servicos/ecommerce" },
]

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "Facebook", href: "https://facebook.com" },
]

export default function Header() {
  const lineTopRef = useRef<HTMLSpanElement>(null)
  const lineBotRef = useRef<HTMLSpanElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const socialRef = useRef<HTMLElement>(null)
  const menuViewRef = useRef<HTMLDivElement>(null)
  const servicosViewRef = useRef<HTMLDivElement>(null)
  const [headerBehind, setHeaderBehind] = useState(false) // ← adicionar

  const isOpenRef = useRef(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Congela o tema no momento em que o menu abre — useState
  // para poder ser lido durante o render sem erro.
  const [frozenTheme, setFrozenTheme] = useState<"light" | "dark" | null>(null)

  const theme = useHeaderTheme(72)
  const effectiveTheme = menuOpen && frozenTheme ? frozenTheme : theme
  const isLight = effectiveTheme === "light"

  useEffect(() => {
    if (servicosViewRef.current)
      gsap.set(servicosViewRef.current, {
        opacity: 0,
        x: 40,
        pointerEvents: "none",
      })

    if (menuViewRef.current)
      gsap.set(menuViewRef.current, {
        opacity: 1,
        x: 0,
        pointerEvents: "auto",
      })
  }, [])

  const toggleMenu = () => {
    const top = lineTopRef.current
    const bot = lineBotRef.current
    const overlay = overlayRef.current
    const social = socialRef.current
    const menuView = menuViewRef.current

    if (!top || !bot || !overlay || !social || !menuView) return

    isOpenRef.current = !isOpenRef.current
    const opening = isOpenRef.current

    if (opening) {
      setFrozenTheme(theme)
      setHeaderBehind(true)
    } else {
      setFrozenTheme(null)
    }

    setMenuOpen(opening)

    gsap.to(top, {
      top: opening ? "7px" : "4px",
      rotate: opening ? 45 : 0,
      duration: 0.4,
      ease: "power3.inOut",
    })

    gsap.to(bot, {
      top: opening ? "7px" : "10px",
      rotate: opening ? -45 : 0,
      duration: 0.4,
      ease: "power3.inOut",
    })

    if (opening) {
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
    } else {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(overlay, { pointerEvents: "none", visibility: "hidden" })
          setHeaderBehind(false) // ← só aqui, depois da animação
        },
      })

      tl.to([menuView.children, social.children], {
        opacity: 0,
        y: -10,
        duration: 0.2,
        stagger: 0.03,
      }).to(overlay, { opacity: 0, duration: 0.25 }, "-=0.1")
    }

    const isMobile = window.innerWidth < 768
    if (isMobile) {
      document.body.style.overflow = opening ? "hidden" : ""
    }
  }

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
      <header
        className={[
          "fixed top-2 right-2 left-2 flex items-center justify-between px-4 py-2 md:top-6 md:right-6 md:left-6 md:px-8 md:py-4",
          headerBehind ? "z-40" : "z-70",
          isLight
            ? "bg-neutral-50/80 text-neutral-950 backdrop-blur-sm"
            : "bg-neutral-950/40 text-neutral-50 backdrop-blur-sm",
        ].join(" ")}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <LinkHoverCard label="Home" icon="arrow-diagonal">
            <Image
              src="/logo-symbol-2.png"
              alt="Logo"
              width={90}
              height={90}
              className={`w-8 md:w-10 ${isLight ? "" : "invert"}`}
            />
          </LinkHoverCard>
        </Link>

        <div className="h-10 w-10" />
      </header>

      <button
        onClick={toggleMenu}
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        className={[
          "fixed z-80 flex h-10 w-10 cursor-pointer items-center justify-center",
          "top-4 right-4 md:top-10 md:right-12",
          menuOpen ? "text-white" : isLight ? "text-neutral-950" : "text-white",
        ].join(" ")}
      >
        <LinkHoverCard label={menuOpen ? "Fechar" : "Menu"} icon="none">
          <div className="relative h-4 w-6">
            <span
              ref={lineTopRef}
              className="absolute left-0 h-0.5 w-full rounded-full bg-current"
              style={{ top: "4px" }}
            />
            <span
              ref={lineBotRef}
              className="absolute left-0 h-0.5 w-full rounded-full bg-current"
              style={{ top: "10px" }}
            />
          </div>
        </LinkHoverCard>
      </button>

      {/* Backdrop desktop */}
      <div
        onClick={toggleMenu}
        className="fixed inset-0 z-50 hidden bg-black/40 backdrop-blur-md md:block"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Painel do menu */}
      <div
        ref={overlayRef}
        onClick={(e) => e.stopPropagation()}
        className="fixed inset-2 z-60 bg-neutral-900 md:inset-2 md:right-2 md:left-auto md:w-[32%]"
        style={{ opacity: 0, pointerEvents: "none", visibility: "hidden" }}
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
                      className=" cursor-pointer group flex items-center font-unbounded text-[32px] font-light tracking-[-0.04em] text-white uppercase"
                    >
                      <LinkHoverCard label="Serviços" icon="arrow-right">
                        {link.label}
                        <ArrowRightIcon className="size-10 opacity-50 group-hover:opacity-100" />
                      </LinkHoverCard>
                    </button>
                  )
                }

                return (
                  <CustomLink
                    key={link.href}
                    href={link.href}
                    onClick={toggleMenu}
                    className="cursor-pointer group flex items-center font-unbounded text-[32px] font-light tracking-[-0.04em] text-white uppercase"
                  >
                    <LinkHoverCard
                      label={link.label}
                      icon={link.external ? "arrow-diagonal" : "arrow-right"}
                    >
                      {link.label}
                      {link.external && (
                        <ArrowUpRightIcon className="size-10 opacity-50 group-hover:opacity-100" />
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

              {/* ← isso estava faltando */}
              {servicesLinks.map((service) => (
                <CustomLink
                  key={service.href}
                  href={service.href}
                  onClick={toggleMenu}
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
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
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

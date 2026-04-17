"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr"

const navigationLinks = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Sobre", href: "/sobre" },
  { label: "Orçamento", href: "/orcamento", external: true },
]

const servicesLinks = [
  { label: "Criação de Sites", href: "/servicos/sites" },
  { label: "Identidades Visuais", href: "/servicos/identidade-visual" },
  { label: "Marketing Digital", href: "/servicos/marketing" },
  { label: "E-commerce", href: "/servicos/ecommerce" },
]

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "Facebook", href: "https://facebook.com" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [activeView, setActiveView] = useState<"menu" | "servicos">("menu")

  // Trava o scroll do body quando o menu está aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <header className="fixed top-4 right-0 left-0 z-50 flex items-center justify-between px-6 py-2.5 text-white md:px-12 md:py-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <Image
            src="/logo-symbol.png"
            alt="Logo"
            width={90}
            height={90}
            className="h-auto w-8 invert md:w-12"
          />
        </Link>

        {/* Botão hambúrguer — só aparece no mobile */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-white/10 md:hidden"
        >
          <div className="relative h-4 w-7">
            <span
              className={`absolute left-0 h-0.5 w-full rounded-sm bg-neutral-100 transition-all duration-300 ease-in-out ${
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-1"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-full rounded-sm bg-neutral-100 transition-all duration-300 ease-in-out ${
                open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </div>
        </button>
      </header>

      {/* Overlay + Nav Mobile */}
      <div
        className={`fixed inset-0 z-40 m-2 bg-neutral-900 transition-opacity duration-300 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`flex h-full flex-col justify-between px-6 pt-24 pb-10 transition-transform duration-300 ease-in-out ${
            open ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          {/* Links de navegação */}
          <nav className="flex flex-col gap-1 py-12">
            {activeView === "menu" && (
              <>
                {navigationLinks.map((link) => {
                  if (link.label === "Serviços") {
                    return (
                      <button
                        key={link.href}
                        onClick={() => setActiveView("servicos")}
                        className="group flex items-center gap-1 py-1 font-unbounded text-[32px] leading-none font-light tracking-[-0.04em] text-white uppercase"
                      >
                        {link.label}
                        <span className="text-xl">
                          <ArrowRightIcon className="size-10 opacity-50 transition-opacity group-hover:opacity-100" />
                        </span>
                      </button>
                    )
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-1 py-1 font-unbounded text-[32px] leading-none font-light tracking-[-0.04em] text-white uppercase"
                    >
                      {link.label}
                      {link.external && (
                        <ArrowUpRightIcon className="size-10 opacity-50 transition-opacity group-hover:opacity-100" />
                      )}
                    </Link>
                  )
                })}
              </>
            )}

            {activeView === "servicos" && (
              <>
                {/* VOLTAR */}
                <button
                  onClick={() => setActiveView("menu")}
                  className="flex items-center gap-2 mb-6 text-sm text-neutral-400"
                >
                  <ArrowLeftIcon className="h-3.5 w-3.5" />
                  Voltar
                </button>

                {/* LISTA DE SERVIÇOS */}
                {servicesLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setOpen(false)}
                    className="py-1 font-unbounded text-[32px] leading-none font-light tracking-[-0.04em] text-white uppercase"
                  >
                    {service.label}
                  </Link>
                ))}
              </>
            )}
          </nav>

          {/* Redes sociais */}
          <nav className="mt-8 flex flex-col gap-2">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="group flex w-fit items-center gap-1.5 text-sm text-neutral-400 transition-colors hover:text-white"
              >
                {link.label}
                <ArrowUpRightIcon className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}

"use client"

import Link from "next/link"
import { LinkHoverCard } from "@/components/link-hover-card"
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"

const navigationLinks = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Sobre", href: "/sobre" },
  { label: "Orçamento", href: "/orcamento", external: true },
]

const legalLinks = [
  { label: "Termos e Condições", href: "/terms" },
  { label: "Política de Privacidade", href: "/privacy" },
  { label: "Política de Cookies", href: "/cookies" },
]

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "Facebook", href: "https://facebook.com" },
]

export function Footer() {
  return (
    <footer
      data-header-theme="dark"
      className="relative bg-neutral-950 text-white"
    >
      {/* Linhas verticais */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-7xl -translate-x-1/2 md:grid md:grid-cols-4">
        <div className="border-r border-neutral-500/15" />
        <div className="border-r border-neutral-500/15" />
        <div className="border-r border-neutral-500/15" />
        <div />
      </div>

      <div className="mx-auto w-full max-w-7xl">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4">
          {/* Logo */}
          <div className="flex flex-col gap-6 border-b border-neutral-500/15 px-8 py-12 md:border-b-0">
            <LinkHoverCard label="Home" icon="arrow-right">
              <Link href="/" aria-label="Home">
                <Image
                  src="/logo-symbol-2.png"
                  alt="Estúdio Adler"
                  width={90}
                  height={90}
                  className="h-auto w-8 invert md:w-10"
                />
              </Link>
            </LinkHoverCard>

            <nav className="flex flex-col gap-1.5">
              <LinkHoverCard label="Enviar email" icon="arrow-diagonal">
                <Link
                  href="mailto:contato@estudioadler.com.br"
                  className="relative w-fit text-sm text-neutral-300 transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100"
                >
                  contato@estudioadler.com.br
                </Link>
              </LinkHoverCard>
              <LinkHoverCard label="Fale pelo WhatsApp" icon="arrow-diagonal">
                <Link
                  href="https://wa.me/5531999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-fit text-sm text-neutral-300 transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100"
                >
                  WhatsApp
                </Link>
              </LinkHoverCard>
            </nav>
          </div>

          {/* Vazio */}
          <div className="hidden px-8 py-12 md:block" />

          {/* Navigation */}
          <div className="border-b border-neutral-500/15 px-8 py-12 md:border-b-0">
            <nav className="flex flex-col gap-1">
              {navigationLinks.map((link) => (
                <LinkHoverCard
                  key={link.href}
                  label={link.label}
                  icon={link.external ? "arrow-diagonal" : "arrow-right"}
                >
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="group relative flex w-fit items-center gap-1 text-xl font-medium text-white transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:text-neutral-300 hover:after:scale-x-100 md:text-2xl"
                  >
                    {link.label}
                    {link.external && (
                      <ArrowUpRightIcon className="h-5 w-5 opacity-60 transition-opacity group-hover:opacity-100" />
                    )}
                  </Link>
                </LinkHoverCard>
              ))}
            </nav>
          </div>

          {/* Legal & Social */}
          <div className="px-8 py-12">
            <nav className="mb-8 flex flex-col gap-1.5">
              {legalLinks.map((link) => (
                <LinkHoverCard
                  key={link.href}
                  label={link.label}
                  icon="arrow-right"
                >
                  <Link
                    href={link.href}
                    className="relative w-fit text-sm text-neutral-300 transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100"
                  >
                    {link.label}
                  </Link>
                </LinkHoverCard>
              ))}
            </nav>
            <nav className="flex flex-col gap-1.5">
              {socialLinks.map((link) => (
                <LinkHoverCard
                  key={link.href}
                  label={link.label}
                  icon="arrow-diagonal"
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-fit text-sm text-neutral-300 transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100"
                  >
                    {link.label}
                  </Link>
                </LinkHoverCard>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Linha divisória — full width */}
      <div className="w-full border-t border-neutral-500/15" />

      {/* Bottom Bar */}
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-center text-sm text-neutral-500 md:grid-cols-4">
          <div className="border-b border-neutral-500/15 px-8 py-6 md:border-b-0">
            <LinkHoverCard label="Abrir link externo" icon="arrow-diagonal">
              <Link
                href="https://instagram.com/estudioadler"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-fit transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100"
              >
                @estudioadler
              </Link>
            </LinkHoverCard>
          </div>

          <div className="border-b border-neutral-500/15 px-8 py-6 md:col-span-2 md:border-b-0 md:text-center">
            <span>© Estúdio Adler. Todos os direitos reservados.</span>
          </div>

          <div className="px-8 py-6 md:text-right">
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

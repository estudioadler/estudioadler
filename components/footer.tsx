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
    <footer className="bg-neutral-950 text-white">
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-4">
        {/* Logo Section */}
        <div className="p-6 md:p-12 border-b md:border-b-0 md:border-r border-neutral-800">
          <LinkHoverCard label="Home" icon="arrow-right">
            <Link href="/" aria-label="Home">
              <Image
                src="/logo.png"
                alt="Estúdio Adler"
                width={100}
                height={100}
                className="invert"
              />
            </Link>
          </LinkHoverCard>
        </div>

        {/* Empty Section (for layout) */}
        <div className="hidden md:block p-8 md:p-12 border-r border-neutral-800" />

        {/* Navigation Links */}
        <div className="p-6 md:p-12 border-b md:border-b-0 md:border-r border-neutral-800">
          <nav className="flex flex-col gap-2">
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
                  className="
                    group relative flex items-center gap-2
                    text-xl md:text-2xl font-medium text-white
                    hover:text-neutral-300 transition-colors w-fit
                    after:absolute after:bottom-0 after:left-0
                    after:h-px after:w-full after:bg-current
                    after:scale-x-0 after:origin-left
                    after:transition-transform after:duration-300
                    hover:after:scale-x-100
                  "
                >
                  {link.label}
                  {link.external && (
                    <ArrowUpRightIcon className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  )}
                </Link>
              </LinkHoverCard>
            ))}
          </nav>
        </div>

        {/* Legal & Social Links */}
        <div className="p-6 md:p-12">
          <nav className="flex flex-col gap-1.5 mb-8">
            {legalLinks.map((link) => (
              <LinkHoverCard key={link.href} label={link.label} icon="arrow-right">
                <Link
                  href={link.href}
                  className="
                    relative text-sm text-neutral-300 hover:text-white
                    transition-colors w-fit
                    after:absolute after:bottom-0 after:left-0
                    after:h-px after:w-full after:bg-current
                    after:scale-x-0 after:origin-left
                    after:transition-transform after:duration-300
                    hover:after:scale-x-100
                  "
                >
                  {link.label}
                </Link>
              </LinkHoverCard>
            ))}
          </nav>

          <nav className="flex flex-col gap-1.5">
            {socialLinks.map((link) => (
              <LinkHoverCard key={link.href} label={link.label} icon="arrow-diagonal">
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    relative text-sm text-neutral-300 hover:text-white
                    transition-colors w-fit
                    after:absolute after:bottom-0 after:left-0
                    after:h-px after:w-full after:bg-current
                    after:scale-x-0 after:origin-left
                    after:transition-transform after:duration-300
                    hover:after:scale-x-100
                  "
                >
                  {link.label}
                </Link>
              </LinkHoverCard>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center border-t border-neutral-800 text-sm text-neutral-500">
        <div className="p-6 md:p-12 border-b md:border-b-0 md:border-r border-neutral-800">
          <LinkHoverCard label="Abrir link externo" icon="arrow-diagonal">
            <Link
              href="https://instagram.com/estudioadler"
              target="_blank"
              rel="noopener noreferrer"
              className="
                relative hover:text-white transition-colors w-fit
                after:absolute after:bottom-0 after:left-0
                after:h-px after:w-full after:bg-current
                after:scale-x-0 after:origin-left
                after:transition-transform after:duration-300
                hover:after:scale-x-100
              "
            >
              @estudioadler
            </Link>
          </LinkHoverCard>
        </div>
        <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-neutral-800 text-center">
          <span>© Estúdio Adler. All Rights Reserved.</span>
        </div>
        <div className="p-6 md:p-8 text-right">
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
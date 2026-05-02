import { ReactNode } from "react"
import { BaseButton } from "./base-button"

interface PageHeroProps {
  title: ReactNode
  subtitle?: string
  eyebrow?: string
  buttontext?: string
}

export function PageHero({ title, subtitle, eyebrow, buttontext }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[60vh] flex-col justify-center overflow-hidden">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.avif')" }}
      />

      
{/* Overlay com gradiente (topo mais escuro) */}
      <div className="absolute inset-0 bg-linear-to-b from-neutral-950/60 via-neutral-950/50 to-neutral-950/30" />

      {/* Conteúdo */}
      <div className="container mx-auto flex w-full flex-col items-start gap-4 px-6 py-40 relative z-10">

        {eyebrow && (
          <span className="font-mono text-xs tracking-[0.2em] text-neutral-400 uppercase">
            {eyebrow}
          </span>
        )}

        <h1 className="w-full max-w-sm font-unbounded text-3xl leading-[1.1] font-normal tracking-[-0.03em] text-white uppercase md:max-w-2xl md:text-5xl">
          {title}
        </h1>

        {subtitle && (
          <p className="max-w-xs text-sm leading-relaxed text-neutral-400 md:text-base">
            {subtitle}
          </p>
        )}

        {buttontext && (
          <BaseButton text={buttontext} variant="light" href="/orcamento" />
        )}
      </div>
    </section>
  )
}
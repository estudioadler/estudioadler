import { ReactNode } from "react"

interface PageHeroProps {
  /** Título principal — pode receber JSX para quebras de linha customizadas */
  title: ReactNode
  /** Subtítulo ou descrição curta abaixo do título */
  subtitle?: string
  /** Rótulo pequeno acima do título (ex: "Serviços", "Portfólio") */
  eyebrow?: string
}

/**
 * Hero reutilizável para páginas internas.
 *
 * Uso:
 *
 * <PageHero
 *   eyebrow="Portfólio"
 *   title={<>Trabalhos que<br />falam por si.</>}
 *   subtitle="Uma seleção dos projetos que mais nos orgulhamos."
 * />
 */
export function PageHero({ title, subtitle, eyebrow }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[40vh] flex-col justify-center overflow-hidden md:min-h-[60vh]">
      <div className="container mx-auto flex w-full flex-col items-start gap-4 px-6 py-40">

        {/* Eyebrow */}
        {eyebrow && (
          <span className="font-mono text-xs tracking-[0.2em] text-neutral-400 uppercase">
            {eyebrow}
          </span>
        )}

        {/* Título */}
        <h1 className="w-full max-w-sm font-unbounded text-4xl leading-[1.1] font-normal tracking-[-0.03em] text-white uppercase md:max-w-2xl md:text-5xl">
          {title}
        </h1>

        {/* Subtítulo */}
        {subtitle && (
          <p className="max-w-md text-sm leading-relaxed text-neutral-400 md:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
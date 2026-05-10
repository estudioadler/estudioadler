import { ReactNode } from "react"
import HeadingTitle from "./heading-title"
import Link from "next/link"
import Image from "next/image"
import { LinkHoverCard } from "./link-hover-card"
import { BaseButton } from "./base-button"

interface RecentProjectsProps {
  eyebrow?: string
  title?: ReactNode
  subtitle?: string
  hideButton?: boolean
}

const PROJECTS = [
  {
    slug: "expovet-online",
    title: "ExpovetOnline",
    category: "E-commerce",
    image: "/projects/expovet.png",
  },
  {
    slug: "parador7praia",
    title: "parador7praia",
    category: "Site Institucional",
    image: "/projects/parador.png",
  },
  {
    slug: "mendes-advocacia",
    title: "Mendes Advocacia",
    category: "Landing Page",
    image: "/projects/mendes.png",
  },
  {
    slug: "analu-store",
    title: "Analu Store",
    category: "E-commerce",
    image: "/projects/analu.png",
  },
]

export function RecentProjects({
  eyebrow,
  title,
  subtitle,
  hideButton = false,
}: RecentProjectsProps) {
  return (
    <section
      data-header-theme="light"
      id="recent-projects"
      className="relative w-full bg-neutral-100"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Linhas verticais */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-7xl -translate-x-1/2 md:grid md:grid-cols-4">
          <div className="border-r border-neutral-500/15" />
          <div className="border-r border-neutral-500/15" />
          <div className="border-r border-neutral-500/15" />
          <div />
        </div>

        {/* Header */}
        <div className="relative grid grid-cols-1 pt-24 pb-12 md:grid-cols-4 md:pt-24 md:pb-0">
          <div className="col-span-2 flex flex-col gap-4 px-8 pb-8 md:px-8">
            {eyebrow && (
              <span className="font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase">
                {eyebrow}
              </span>
            )}
            <HeadingTitle className="text-neutral-950">
              {title ?? (
                <>
                  Projetos <br />recentes
                </>
              )}
            </HeadingTitle>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {subtitle ?? "Uma seleção dos trabalhos que entregamos — cada um com um desafio diferente e resultado mensurável para o cliente."}
            </p>
          </div>

          {!hideButton && (
            <div className="col-start-1 flex items-start justify-start px-8 pb-8">
              <BaseButton
                text="Todos os projetos"
                variant="dark"
                href="/portfolio"
                compact
                
              />
            </div>
          )}
        </div>
      </div>

      {/* Linha topo — full width */}
      <div className="w-full border-t border-neutral-500/15" />

      <div className="mx-auto w-full max-w-7xl">
        <div className="relative grid grid-cols-1 md:grid-cols-4">
          {PROJECTS.map((project) => (
            <LinkHoverCard
              key={project.slug}
              label="Ver projeto"
              icon="arrow-diagonal"
            >
              <div className="px-5 py-0.5 md:p-1">
                <Link
                  href={`/projetos/${project.slug}`}
                  className="group relative block aspect-square overflow-hidden border-b border-neutral-500/15 bg-neutral-200 md:bg-transparent"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </Link>
              </div>
            </LinkHoverCard>
          ))}
        </div>
      </div>

      {/* Linha fim — full width */}
      <div className="w-full border-t border-neutral-500/15" />

      <div className="pb-28 md:pb-44" />
    </section>
  )
}
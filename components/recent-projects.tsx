import HeadingTitle from "./heading-title"
import Link from "next/link"
import Image from "next/image"
import { LinkHoverCard } from "./link-hover-card"
import { BaseButton } from "./base-button"

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

export function RecentProjects() {
  return (
    <section
      data-header-theme="light"
      id="recent-projects"
      className="flex w-full bg-neutral-100"
    >
      <div className="container mx-auto flex w-full flex-col gap-12 px-6 py-28 md:py-36">

        {/* Header */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-2xl flex-col gap-3">
            <HeadingTitle>
              Projetos <br />
              recentes
            </HeadingTitle>
            <p className="text-base leading-relaxed text-muted-foreground">
              Uma seleção dos trabalhos que entregamos — cada um com um
              desafio diferente e resultado mensurável para o cliente.
            </p>
          </div>

          <BaseButton text="Todos os projetos" variant="dark" href="/portfolio" />
        </div>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <LinkHoverCard key={project.slug} label="Ver projeto" icon="arrow-diagonal">
              <Link
                href={`/projetos/${project.slug}`}
                className="group flex flex-col gap-3"
              >
                {/* Card sem padding e sem cor de fundo */}
                <div className="relative overflow-hidden aspect-square outline outline-neutral-400">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover "
                  />
                </div>

                {/* Título e categoria fora do card */}
                <div className="flex flex-col gap-0.5 px-1">
                  <span className="text-xs font-medium text-muted-foreground tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-md uppercase font-unbounded font-normal text-foreground leading-tight">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </LinkHoverCard>
          ))}
        </div>

      </div>
    </section>
  )
}
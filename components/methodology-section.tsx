import HeadingTitle from "./heading-title"

type Step = {
  id: number
  title: string
  tags: string[]
}

const steps: Step[] = [
  {
    id: 1,
    title: "Início",
    tags: ["Escopo", "Planejamento", "Arquitetura", "Pesquisa", "Sitemap"],
  },
  {
    id: 2,
    title: "Design",
    tags: ["Direção visual", "Wireframe", "UI Design", "Protótipo"],
  },
  {
    id: 3,
    title: "Desenvolvimento",
    tags: ["Arquitetura front-end", "Codificação", "Otimização"],
  },
  {
    id: 4,
    title: "Entrega",
    tags: ["Validação", "Publicação"],
  },
]

export default function Methodology() {
  return (
    <section data-header-theme="dark" className="relative w-full bg-neutral-950">
      <div className="mx-auto w-full max-w-7xl">
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-7xl -translate-x-1/2 md:grid md:grid-cols-4">
          <div className="border-r border-neutral-500/15" />
          <div className="border-r border-neutral-500/15" />
          <div className="border-r border-neutral-500/15" />
          <div />
        </div>

        <div className="relative grid grid-cols-1 pt-24 pb-0 md:grid-cols-4 md:pt-24 md:pb-0">
          <div className="col-span-2 flex flex-col gap-3 px-8 pb-16 md:px-8">
            <HeadingTitle className="text-neutral-50">
              Como <br />trabalhamos
            </HeadingTitle>
            <p className="text-lg leading-relaxed text-neutral-400">
              Um processo estruturado para garantir clareza em cada etapa,
              evitar retrabalho e manter consistência do início ao fim.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-neutral-500/15" />

      <div className="mx-auto w-full max-w-7xl">
        <div className="relative flex flex-col">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group grid grid-cols-1 md:grid-cols-4 border-b border-neutral-500/15 transition-colors duration-300 hover:bg-neutral-900/40"
            >
              {/* Coluna esquerda */}
              <div className="hidden md:flex flex-col justify-between px-8 py-8 border-r border-neutral-500/15">
                <span className="font-mono text-xs text-neutral-600 group-hover:text-blue-500 transition-colors duration-300">
                  {String(step.id).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-neutral-50">
                  {step.title}
                </span>
              </div>

              {/* Coluna direita */}
              <div className="col-span-3 flex flex-col justify-center gap-6 px-8 py-8 mx-4 md:mx-0 bg-neutral-900 md:bg-transparent">
                {/* mobile: número + título */}
                <div className="flex items-center gap-3 md:hidden">
                  <span className="font-mono text-xs text-blue-500">
                    {String(step.id).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-neutral-50">
                    {step.title}
                  </span>
                </div>

                {/* tags */}
                <div className="flex flex-wrap items-center gap-0">
                  {step.tags.map((tag, j) => (
                    <div key={tag} className="flex items-center">
                      <span className="border border-neutral-500/15 px-3 py-1.5 text-xs font-mono text-neutral-400 group-hover:border-neutral-500/30 group-hover:text-neutral-300 transition-colors duration-300">
                        {tag}
                      </span>
                      {j < step.tags.length - 1 && (
                        <div className="h-px w-4 bg-neutral-500/20 group-hover:bg-blue-500/30 transition-colors duration-300" />
                      )}
                    </div>
                  ))}
                  <div className="h-px flex-1 bg-neutral-500/10 group-hover:bg-blue-500/20 transition-colors duration-300 min-w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full border-t border-neutral-500/15" />
      <div className="pb-28 md:pb-44" />
    </section>
  )
}
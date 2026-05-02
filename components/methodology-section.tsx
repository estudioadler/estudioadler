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
    <section data-header-theme="dark" className="w-full bg-neutral-950">
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">

          {/* Lado esquerdo — sticky */}
          <div className="flex flex-col gap-4 lg:top-32 lg:col-span-5 lg:self-start">
            <span className="font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase">
              Metodologia
            </span>
            <HeadingTitle className="text-neutral-50">
              Como <br /> trabalhamos
            </HeadingTitle>
          </div>

          {/* Lado direito */}
          <div className="flex flex-col gap-12 lg:col-span-6 lg:col-start-7 lg:self-start">
            <div className="flex flex-col gap-6">
              <p className="text-base leading-relaxed text-neutral-400 md:text-lg">
                Um processo estruturado para garantir clareza em cada etapa,
                evitar retrabalho e manter consistência do início ao fim.
              </p>
              <p className="text-base leading-relaxed text-neutral-400 md:text-lg">
                Nenhum projeto começa pelo código. Antes disso, o trabalho passa
                por uma etapa de UX/UI — entender o contexto, mapear o que
                precisa funcionar e só depois vem o desenvolvimento.
              </p>
            </div>

            <ol className="flex flex-col">
              {steps.map((step) => (
                <li
                  key={step.id}
                  className="group grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 border-t border-neutral-800 px-2 py-6 transition-colors last:border-b hover:bg-neutral-900/50"
                >
                  <span className="row-span-2 flex size-10 items-center justify-center rounded-full border border-neutral-800 font-mono text-xs text-neutral-500 transition-colors group-hover:border-blue-950 group-hover:text-neutral-50">
                    {String(step.id).padStart(2, "0")}
                  </span>
                  <span className="self-end text-sm font-medium text-neutral-50 md:text-base">
                    {step.title}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-neutral-800 px-2.5 py-0.5 font-mono text-[11px] text-neutral-500 transition-colors group-hover:border-neutral-700 group-hover:text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

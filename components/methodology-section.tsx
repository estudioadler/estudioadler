import HeadingTitle from "./heading-title"

type Step = {
  id: number
  title: string
  items: string[]
}

const steps: Step[] = [
  {
    id: 1,
    title: "Início",
    items: [
      "Definição do escopo",
      "Planejamento",
      "Arquitetura",
      "Pesquisa",
      "Sitemap",
    ],
  },
  {
    id: 2,
    title: "Design",
    items: ["Direção visual", "Wireframe", "UI Design", "Protótipo"],
  },
  {
    id: 3,
    title: "Desenvolvimento",
    items: ["Arquitetura front-end", "Codificação", "Otimização"],
  },
  {
    id: 4,
    title: "Entrega",
    items: ["Validação", "Publicação"],
  },
]

export default function Methodology() {
  return (
    <section
      data-header-theme="light"
      className="w-full bg-neutral-50"
    >
      <div className="container mx-auto flex flex-col gap-16 px-6 py-28 md:py-36">
        
        {/* HEADER */}
        <div className="flex max-w-2xl flex-col gap-3">
          <HeadingTitle>
            Como <br />
            trabalhamos
          </HeadingTitle>

          <p className="text-base leading-relaxed text-muted-foreground">
            Um processo estruturado para garantir clareza em cada etapa,
            evitar retrabalho e manter consistência do início ao fim.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0">
          {steps.map((step, ) => (
            <div
              key={step.id}
              className="
                flex flex-col gap-6 px-6 py-10
                border border-neutral-200/70
                bg-neutral-100
                md:-mt-px md:-ml-px
              "
            >
              {/* TOP */}
              <div className="flex items-center gap-4">
                <span className="font-unbounded text-xl tracking-widest text-muted-foreground">
                  {String(step.id).padStart(2, "0")}
                </span>

                <h3 className="text-lg font-medium text-foreground">
                  {step.title}
                </h3>
              </div>

              {/* LIST */}
              <ul className="flex flex-col gap-2">
                {step.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
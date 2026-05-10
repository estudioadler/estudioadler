import HeadingTitle from "./heading-title"

type Service = {
  number: string
  title: string
  description: string
  tags: string[]
  featured: boolean
  empty?: boolean
}

const SERVICES: Service[] = [
  {
    number: "01",
    title: "Sites Institucionais",
    description:
      "Porta de entrada com maior demanda do mercado. Desenvolvemos sites rápidos, responsivos e otimizados para converter visitantes em clientes.",
    tags: ["presença online", "credibilidade", "responsivo"],
    featured: false,
  },
  {
    number: "02",
    title: "Landing Pages",
    description:
      "Foco total em conversão — vendas e captação de leads. Cada elemento é pensado para guiar o visitante até a ação que você precisa.",
    tags: ["conversão", "leads", "campanhas"],
    featured: false,
  },
  {
    number: "03",
    title: "E-commerce",
    description:
      "Para quem está pronto para vender online em escala. Loja completa, segura e preparada para crescer junto com o seu negócio.",
    tags: ["vendas", "checkout", "pagamentos"],
    featured: false,
  },
  {
    number: "04",
    title: "SEO para Sites",
    description:
      "Crescimento orgânico e visibilidade nos mecanismos de busca. Seu site encontrado pelas pessoas certas, na hora certa.",
    tags: ["tráfego", "google", "orgânico"],
    featured: false,
  },
  {
    number: "05",
    title: "Otimização de Performance",
    description:
      "Velocidade e experiência como diferencial técnico. Sites lentos perdem clientes — nós garantimos que isso não aconteça com o seu.",
    tags: ["velocidade", "core web vitals", "ux"],
    featured: false,
  },
  {
    number: "06",
    title: "Suporte e Manutenção",
    description:
      "Acompanhamento contínuo após o lançamento para garantir evolução, segurança e recorrência. Não entregamos e abandonamos — ficamos ao seu lado.",
    tags: ["manutenção", "segurança", "suporte contínuo"],
    featured: true,
  },
]

const SERVICES_GRID: Service[] = [
  {
    number: "",
    title: "",
    description: "",
    tags: [],
    featured: false,
    empty: true,
  }, // linha 1 — vazio
  SERVICES[0], // 01
  SERVICES[1], // 02
  SERVICES[2], // 03
  {
    number: "",
    title: "",
    description: "",
    tags: [],
    featured: false,
    empty: true,
  }, // linha 2 — vazio
  SERVICES[3], // 04
  SERVICES[4], // 05
  SERVICES[5], // 06
]

export function Services() {
  return (
    <section
      data-header-theme="light"
      id="services-cards"
      className="relative w-full bg-neutral-50"
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
        <div className="relative grid grid-cols-1 pt-24 md:grid-cols-4 md:pt-24 md:pb-0">
          <div className="col-span-2 flex flex-col gap-3 px-8 pb-16 md:px-8">
            <HeadingTitle className="text-neutral-950">
              O que <br />
              fazemos
            </HeadingTitle>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Do primeiro site ao crescimento contínuo, cobrimos cada etapa do
              seu negócio digital — com estratégia, técnica e acompanhamento
              real.
            </p>
          </div>
        </div>
      </div>

      {/* Linha topo — full width */}
      <div className="w-full border-t border-neutral-500/15" />

      <div className="mx-auto w-full max-w-7xl">
        <div className="relative grid grid-cols-1 md:grid-cols-4">
          {SERVICES_GRID.slice(0, 4).map((service, i) => (
            <div
              key={service.number || `empty-row1-${i}`}
              className={[
                "flex min-h-80 flex-col gap-4 border-b border-neutral-500/15 px-8 py-8 md:border-none",
                "mx-4 md:mx-0", // respeita a borda lateral do layout no mobile
                service.empty
                  ? "hidden md:flex"
                  : "bg-neutral-100 transition-colors duration-200 hover:bg-neutral-100 md:bg-transparent",
              ].join(" ")}
            >
              {!service.empty && (
                <>
                  <span className="text-xs text-neutral-600">
                    {service.number}
                  </span>
                  <h3 className="text-xl font-semibold text-neutral-950">
                    {service.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-neutral-500/15 bg-background px-2 py-1 text-xs font-medium text-neutral-400"
                      >
                        + {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Linha meio — full width */}
      <div className="w-full border-t border-neutral-500/15" />

      <div className="mx-auto w-full max-w-7xl">
        <div className="relative grid grid-cols-1 md:grid-cols-4">
          {SERVICES_GRID.slice(4).map((service, i) => (
            <div
              key={service.number || `empty-row1-${i}`}
              className={[
                "flex min-h-80 flex-col gap-4 border-b border-neutral-500/15 px-8 py-8 md:border-none",
                "mx-4 md:mx-0", // respeita a borda lateral do layout no mobile
                service.empty
                  ? "hidden md:flex"
                  : "bg-neutral-100 transition-colors duration-200 hover:bg-neutral-100 md:bg-transparent",
              ].join(" ")}
            >
              {!service.empty && (
                <>
                  <span className="text-xs text-neutral-600">
                    {service.number}
                  </span>
                  <h3 className="text-xl font-semibold text-neutral-950">
                    {service.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-neutral-500/15 bg-background px-2 py-1 text-xs font-medium text-neutral-400"
                      >
                        + {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Linha fim — full width */}
      <div className="w-full border-t border-neutral-500/15" />

      <div className="pb-28 md:pb-44" />
    </section>
  )
}

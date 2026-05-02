import HeadingTitle from "./heading-title"

const SERVICES = [
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

const NUM_CARDS = SERVICES.length

export function Services() {
  return (
    <section
      data-header-theme="dark"
      id="services-cards"
      className="flex w-full bg-neutral-900"
    >
      <div className="container mx-auto flex w-full flex-col gap-12 px-6 py-28 md:py-36">
        {/* Header */}
        <div className="flex max-w-2xl flex-col gap-3">
          <HeadingTitle className="text-neutral-50">
            O que <br />
            fazemos
          </HeadingTitle>
          <p className="text-base leading-relaxed text-muted-foreground">
            Do primeiro site ao crescimento contínuo, cobrimos cada etapa do seu
            negócio digital — com estratégia, técnica e acompanhamento real.
          </p>
        </div>

        {/* Cards */}
        <div
          className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-0 lg:grid-cols-3"
          style={{ "--numcards": NUM_CARDS } as React.CSSProperties}
        >
          {SERVICES.map((service, i) => {
            const index = i + 1
            const index0 = index - 1
            const reverseIndex = NUM_CARDS - index0

            return (
              <div
                key={service.number}
                className="service-card-wrapper -mb-16 pt-20 md:mb-0 md:pt-0"
                style={
                  {
                    top: `${index0 * 24}px`,
                    "--index": index,
                    "--index0": index0,
                    "--reverse-index": reverseIndex,
                    "--range-start": `${(index0 / NUM_CARDS) * 100}%`,
                    "--range-end": `${(index / NUM_CARDS) * 100}%`,
                  } as React.CSSProperties
                }
              >
                <div
                  className="
                    group flex min-h-96 flex-col gap-4 px-6 py-8
                    transition-colors duration-200
                    border
                    md:-mt-px md:-ml-px md:min-h-96 md:rounded-none
                    border-neutral-700 bg-neutral-900 md:hover:bg-neutral-950"
                >
                  {/* Number
                  <span
                    className={`font-unbounded text-xl font-medium tracking-widest ${
                      service.featured
                        ? "text-neutral-50"
                        : "text-muted-foreground"
                    }`}
                  >
                    {service.number}
                  </span> */}

                  {/* Title */}
                  <h3
                    className="text-lg font-semibold text-neutral-50"
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`flex-1 text-sm leading-relaxed ${
                      service.featured ? "text-neutral-400" : "text-muted-foreground"
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`
                          border px-3 py-1 text-xs font-medium
                          flex items-center
                          ${service.featured
                            ? "border-neutral-600 text-neutral-400"
                            : "border-neutral-600 text-muted-foreground"
                          }
                        `}
                      >
                        + {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
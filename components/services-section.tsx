import HeadingTitle from "./heading-title"

const SERVICES = [
  {
    number: "01",
    title: "Sites Institucionais",
    description:
      "Porta de entrada com maior demanda do mercado. Desenvolvemos sites rápidos, responsivos e otimizados para converter visitantes em clientes.",
    tags: ["presença online", "credibilidade", "responsivo"],
  },
  {
    number: "02",
    title: "Landing Pages",
    description:
      "Foco total em conversão — vendas e captação de leads. Cada elemento é pensado para guiar o visitante até a ação que você precisa.",
    tags: ["conversão", "leads", "campanhas"],
  },
  {
    number: "03",
    title: "E-commerce",
    description:
      "Para quem está pronto para vender online em escala. Loja completa, segura e preparada para crescer junto com o seu negócio.",
    tags: ["vendas", "checkout", "pagamentos"],
  },
  {
    number: "04",
    title: "SEO para Sites",
    description:
      "Crescimento orgânico e visibilidade nos mecanismos de busca. Seu site encontrado pelas pessoas certas, na hora certa.",
    tags: ["tráfego", "google", "orgânico"],
  },
  {
    number: "05",
    title: "Otimização de Performance",
    description:
      "Velocidade e experiência como diferencial técnico. Sites lentos perdem clientes — nós garantimos que isso não aconteça com o seu.",
    tags: ["velocidade", "core web vitals", "ux"],
  },
  {
    number: "06",
    title: "Suporte e Manutenção",
    description:
      "Acompanhamento contínuo após o lançamento para garantir evolução, segurança e recorrência. Não entregamos e abandonamos — ficamos ao seu lado.",
    tags: ["manutenção", "segurança", "suporte contínuo"],
  },
]

const NUM_CARDS = SERVICES.length

export function Services() {
  return (
    <section
      data-header-theme="light"
      id="services-cards"
      className="flex w-full bg-neutral-50"
    >
      <div className="container mx-auto flex w-full flex-col gap-12 px-6 py-28 md:py-36">
        {/* Header */}
        <div className="flex max-w-2xl flex-col gap-3">
          <HeadingTitle>
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
                    border border-neutral-200/70
                    bg-neutral-50
                    md:-mt-px md:-ml-px md:min-h-96 md:rounded-none
                    hover:bg-neutral-100
                  "
                >
                  {/* Number */}
                  <span className="font-unbounded text-xl font-medium tracking-widest text-muted-foreground">
                    {service.number}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full border border-muted-foreground
                          px-3 py-1 text-xs font-medium
                          text-muted-foreground
                          flex items-center
                        "
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
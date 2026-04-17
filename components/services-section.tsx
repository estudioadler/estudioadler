import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr"
import HeadingTitle from "./heading-title"

const SERVICES = [
  {
    number: "01",
    title: "Sites Profissionais",
    description:
      "Porta de entrada com maior demanda do mercado. Desenvolvemos sites rápidos, responsivos e otimizados para converter visitantes em clientes.",
    tag: "+ presença online",
    highlight: false,
  },
  {
    number: "02",
    title: "Landing Pages",
    description:
      "Foco total em conversão — vendas e captação de leads. Cada elemento é pensado para guiar o visitante até a ação que você precisa.",
    tag: "+ conversão",
    highlight: false,
  },
  {
    number: "03",
    title: "E-commerce",
    description:
      "Para quem está pronto para vender online em escala. Loja completa, segura e preparada para crescer junto com o seu negócio.",
    tag: "+ vendas",
    highlight: false,
  },
  {
    number: "04",
    title: "Identidade Visual",
    description:
      "Logo, paleta de cores e tipografia que reforçam autoridade, coerência e reconhecimento de marca em todos os pontos de contato.",
    tag: "+ autoridade",
    highlight: false,
  },
  {
    number: "05",
    title: "SEO para Sites",
    description:
      "Crescimento orgânico e visibilidade nos mecanismos de busca. Seu site encontrado pelas pessoas certas, na hora certa.",
    tag: "+ tráfego",
    highlight: false,
  },
  {
    number: "06",
    title: "Otimização de Performance",
    description:
      "Velocidade e experiência como diferencial técnico. Sites lentos perdem clientes — nós garantimos que isso não aconteça com o seu.",
    tag: "+ velocidade",
    highlight: false,
  },
  {
    number: "07",
    title: "Suporte e Manutenção",
    description:
      "Acompanhamento contínuo após o lançamento para garantir evolução, segurança e recorrência. Não entregamos e abandonamos — ficamos ao seu lado.",
    tag: "serviço contínuo",
    highlight: true,
  },
]

const NUM_CARDS = SERVICES.length

export function Services() {
  return (
    <section id="services-cards" className="flex w-full bg-neutral-50">
      <div className="container mx-auto flex w-full flex-col gap-12 px-6 py-16 md:py-28">
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
          className="flex flex-col md:grid md:grid-cols-2 md:outline md:outline-secondary lg:grid-cols-3"
          style={{ "--numcards": NUM_CARDS } as React.CSSProperties}
        >
          {SERVICES.map((service, i) => {
            const index = i + 1
            const index0 = index - 1
            const reverseIndex = NUM_CARDS - index0

            return (
              <div
                key={service.number}
                className="service-card-wrapper pb-4 md:pb-0"
                style={
                  {
                    top: `${index0 * 24}px`,
                    "--index": index,
                    "--index0": index0, // <-- adiciona isso
                    "--reverse-index": reverseIndex,
                    "--range-start": `${(index0 / NUM_CARDS) * 100}%`,
                    "--range-end": `${(index / NUM_CARDS) * 100}%`,
                  } as React.CSSProperties
                }
              >
                <div
                  className={`service-card-inner group flex min-h-96 flex-col gap-4 px-6 py-8 transition-colors duration-200 md:min-h-65 md:rounded-none md:outline md:outline-secondary ${
                    service.highlight
                      ? "bg-foreground text-background hover:bg-foreground/90 md:col-span-2 lg:col-span-3"
                      : "bg-neutral-100 outline hover:bg-secondary/30"
                  } `}
                >
                  {/* Number */}
                  <span
                    className={`text-md font-unbounded font-medium tracking-widest ${
                      service.highlight
                        ? "text-background/50"
                        : "text-muted-foreground"
                    }`}
                  >
                    {service.number}
                  </span>

                  {/* Title */}
                  <h3
                    className={`text-xl font-normal font-unbounded ${
                      service.highlight ? "text-background" : ""
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`flex-1 text-sm leading-relaxed ${
                      service.highlight
                        ? "text-background/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-2 flex items-center justify-between">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${
                        service.highlight
                          ? "border-background/30 text-background/70"
                          : "border-secondary text-muted-foreground"
                      }`}
                    >
                      {service.tag}
                    </span>

                    <button
                      aria-label={`Saiba mais sobre ${service.title}`}
                      className={`flex size-11 items-center justify-center border transition-colors ${
                        service.highlight
                          ? "border-background/30 text-background hover:bg-background/10"
                          : "border-secondary hover:bg-secondary"
                      }`}
                    >
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </button>
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

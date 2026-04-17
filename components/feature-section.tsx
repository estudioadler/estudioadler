
import { ArrowUpRightIcon, InfoIcon, LightningIcon, MagnifyingGlassIcon, PenIcon, ResizeIcon, ShieldCheckIcon, TargetIcon } from "@phosphor-icons/react/dist/ssr"
import HeadingTitle from "./heading-title"

const FEATURES = [
  {
    icon: <ResizeIcon size={24} weight="fill" />,
    title: "Tecnologia responsiva",
    description:
      "Garantindo segurança, velocidade e responsividade para todos os dispositivos.",
  },
  {
    icon: <MagnifyingGlassIcon size={24} weight="fill" />,
    title: "SEO Otimizado",
    description:
      "Ajude seu site a ser encontrado mais rapidamente com avançadas ferramentas de SEO integradas.",
  },
  {
    icon: <ShieldCheckIcon size={24} weight="fill" />,
    title: "Segurança",
    description:
      "Uma plataforma segura, desde arquitetura até codificação em tecnologias avançadas.",
  },
  {
    icon: <ArrowUpRightIcon size={24} weight="fill" />,
    title: "Exclusividade",
    description:
      "Layout desenvolvido e personalizado para sua marca, tudo nos mínimos detalhes, especialmente para você.",
  },
  {
    icon: <TargetIcon size={24} weight="fill" />,
    title: "Experiência do usuário",
    description:
      "Construímos sites intuitivos, para garantir performance otimizada e uma experiência excepcional.",
  },
  {
    icon: <PenIcon size={24} weight="fill" />,
    title: "Design profissional",
    description:
      "Crie experiências visuais impactantes, combinando estética e usabilidade para entregar soluções inovadoras.",
  },
  {
    icon: <LightningIcon size={24} weight="fill" />,
    title: "Performance",
    description:
      "Tudo que seu site precisa para assegurar um melhor desempenho e carregamento rápido.",
  },
  {
    icon: <InfoIcon size={24} weight="fill" />,
    title: "Suporte contínuo",
    description:
      "Acompanhamento dedicado após o lançamento para garantir que seu site evolua junto com o seu negócio.",
  },
]

export function Features() {
  return (
    <section className="flex w-full bg-neutral-50">
      <div className="container mx-auto px-6 py-16 md:py-28 w-full flex flex-col gap-16">
        <HeadingTitle>Como entregamos resultados</HeadingTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-4 p-6 outline outline-secondary hover:bg-secondary min-h-70"
            >
              {/* Icon above title */}
              <span className="text-2xl">{feature.icon}</span>

              {/* Title */}
              <h3 className="font-heading text-lg font-medium">
                {feature.title}
              </h3>

              {/* Description — grows to fill space */}
              <p className="text-base text-muted-foreground flex-1">
                {feature.description}
              </p>

              {/* Arrow button aligned to the right at the bottom */}
              <div className="flex justify-end">
                <button
                  aria-label={`Saiba mais sobre ${feature.title}`}
                  className="flex items-center justify-center w-8 h-8 rounded-full outline outline-secondary hover:bg-secondary transition-colors"
                >
                  <ArrowUpRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
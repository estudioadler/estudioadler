"use client"

import { useState } from "react"
import {
  InfoIcon, LightningIcon, MagnifyingGlassIcon, PenIcon,
  ResizeIcon, ShieldCheckIcon, SparkleIcon, TargetIcon
} from "@phosphor-icons/react/dist/ssr"
import HeadingTitle from "./heading-title"
import { ArrowRightIcon } from "@phosphor-icons/react"

const FEATURES = [
  {
    icon: <ResizeIcon size={20} weight="fill" />,
    title: "Tecnologia responsiva",
    description:
      "Seu site funciona perfeitamente em qualquer tela — celular, tablet ou desktop. Desenvolvemos com abordagem mobile-first, garantindo que a experiência do usuário seja consistente e fluida independentemente do dispositivo. Velocidade, layout e usabilidade preservados em todos os contextos.",
  },
  {
    icon: <MagnifyingGlassIcon size={20} weight="fill" />,
    title: "SEO Otimizado",
    description:
      "Ser encontrado no Google não é sorte — é técnica. Implementamos SEO desde a estrutura do código: URLs semânticas, meta tags, dados estruturados, sitemap e performance otimizada. Seu site preparado para ranquear bem e atrair o tráfego certo de forma orgânica e sustentável.",
  },
  {
    icon: <ShieldCheckIcon size={20} weight="fill" />,
    title: "Segurança",
    description:
      "Segurança não é um recurso extra — é a base. Arquitetamos cada projeto com boas práticas desde o início: HTTPS, proteção contra vulnerabilidades comuns, atualizações controladas e monitoramento contínuo. Seu site e os dados dos seus clientes protegidos em todas as camadas.",
  },
  {
    icon: <SparkleIcon size={20} weight="fill" />,
    title: "Exclusividade",
    description:
      "Nada de templates genéricos. Cada projeto começa do zero, pensado para a sua marca, seu público e seus objetivos. Do layout à tipografia, cada detalhe é escolhido com intenção — para que seu site reflita exatamente quem você é e se diferencie no mercado.",
  },
  {
    icon: <TargetIcon size={20} weight="fill" />,
    title: "Experiência do usuário",
    description:
      "Um site bonito que confunde o visitante não converte. Projetamos jornadas claras e intuitivas — do primeiro clique à ação final. Hierarquia visual, fluxo de navegação e micros interações pensados para que o usuário encontre o que precisa e se sinta bem fazendo isso.",
  },
  {
    icon: <PenIcon size={20} weight="fill" />,
    title: "Design profissional",
    description:
      "Design é a primeira impressão que não se repete. Criamos interfaces com identidade visual forte, tipografia cuidadosa e paleta coerente com a sua marca. Estética e funcionalidade trabalhadas juntas para transmitir credibilidade e gerar conexão real com quem visita.",
  },
  {
    icon: <LightningIcon size={20} weight="fill" />,
    title: "Performance",
    description:
      "Sites lentos afastam clientes antes mesmo de você dizer olá. Otimizamos cada detalhe técnico — imagens, scripts, fontes, cache e renderização — para garantir carregamento rápido e pontuações altas no Core Web Vitals. Velocidade como vantagem competitiva real.",
  },
  {
    icon: <InfoIcon size={20} weight="fill" />,
    title: "Suporte contínuo",
    description:
      "O lançamento é o começo, não o fim. Ficamos ao lado do seu projeto com acompanhamento dedicado: atualizações, correções, melhorias e evolução constante. Você nunca fica sozinho com um problema — temos planos de suporte pensados para cada fase do crescimento do seu negócio.",
  },
]

export function Features() {
  const [active, setActive] = useState(0)

  return (
    <section data-header-theme="dark" className="relative w-full bg-neutral-950">
      <div className="mx-auto w-full max-w-7xl">
        {/* Linhas verticais desktop */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-7xl -translate-x-1/2 md:grid md:grid-cols-4">
          <div className="border-r border-neutral-500/15" />
          <div className="border-r border-neutral-500/15" />
          <div className="border-r border-neutral-500/15" />
          <div />
        </div>

        {/* Header */}
        <div className="relative grid grid-cols-1 pt-24 pb-0 md:grid-cols-4 md:pt-24 md:pb-0">
          <div className="col-span-2 flex flex-col gap-3 px-8 pb-16 md:px-8">
            <HeadingTitle className="text-neutral-50">
              Como entregamos <br />resultados
            </HeadingTitle>
            <p className="text-lg leading-relaxed text-neutral-400">
              Cada projeto é construído com camadas de cuidado técnico e estratégico
              — para que o resultado final seja mais do que bonito: seja eficiente,
              seguro e preparado para crescer.
            </p>
          </div>
        </div>
      </div>

      {/* Linha topo — full width */}
      <div className="w-full border-t border-neutral-500/15" />

      <div className="mx-auto w-full max-w-7xl">
        {/* Desktop: two-column */}
        <div className="hidden md:grid md:grid-cols-4">
          {/* Left — lista */}
          <div className="border-r border-neutral-500/15">
            {FEATURES.map((feature, i) => (
              <button
                key={feature.title}
                onClick={() => setActive(i)}
                className={[
                  "w-full flex items-center gap-3 px-8 py-4 border-b border-neutral-500/15 text-left transition-colors duration-150 cursor-pointer group",
                  active === i
                    ? "text-neutral-50"
                    : "text-neutral-500 hover:text-neutral-300 hover:bg-neutral-900",
                ].join(" ")}
              >
                <span className={[
                  "transition-colors duration-150 shrink-0",
                  active === i ? "text-neutral-50" : "text-neutral-600 group-hover:text-neutral-400",
                ].join(" ")}>
                  {feature.icon}
                </span>
                <span className="font-medium text-sm">{feature.title}</span>
                {active === i && (
                  <ArrowRightIcon size={16} weight="bold" className="ml-auto text-neutral-50" />
                )}
              </button>
            ))}
          </div>

          {/* Right — descrição expandida */}
          <div className="bg-neutral-900 col-span-3 px-12 py-16 flex flex-col justify-center min-h-96">
            <div
              key={active}
              className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-2 duration-300"
            >
              <span className="inline-flex text-neutral-400 [&>svg]:size-8">
                {FEATURES[active].icon}
              </span>
              <h3 className="font-heading text-4xl font-medium text-neutral-50 leading-tight">
                {FEATURES[active].title}
              </h3>
              <p className="text-base text-neutral-400 leading-relaxed max-w-md">
                {FEATURES[active].description}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile: stacked */}
        <div className="flex flex-col md:hidden">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex gap-4 mx-4 py-5 border-b border-neutral-500/15 bg-neutral-900"
            >
              <span className="text-neutral-400 shrink-0 mt-0.5 pl-4">{feature.icon}</span>
              <div className="flex flex-col gap-1 pr-4">
                <h3 className="text-sm font-medium text-neutral-50">{feature.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{feature.description}</p>
              </div>
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
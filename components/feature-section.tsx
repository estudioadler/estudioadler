"use client"

import { useState } from "react"
import { InfoIcon, LightningIcon, MagnifyingGlassIcon, PenIcon, ResizeIcon, ShieldCheckIcon, SparkleIcon, TargetIcon } from "@phosphor-icons/react/dist/ssr"
import HeadingTitle from "./heading-title"
import { ArrowRightIcon } from "@phosphor-icons/react"

const FEATURES = [
  {
    icon: <ResizeIcon size={20} weight="fill" />,
    title: "Tecnologia responsiva",
    description:
      "Garantindo segurança, velocidade e responsividade para todos os dispositivos.",
  },
  {
    icon: <MagnifyingGlassIcon size={20} weight="fill" />,
    title: "SEO Otimizado",
    description:
      "Ajude seu site a ser encontrado mais rapidamente com avançadas ferramentas de SEO integradas.",
  },
  {
    icon: <ShieldCheckIcon size={20} weight="fill" />,
    title: "Segurança",
    description:
      "Uma plataforma segura, desde arquitetura até codificação em tecnologias avançadas.",
  },
  {
    icon: <SparkleIcon size={20} weight="fill" />,
    title: "Exclusividade",
    description:
      "Layout desenvolvido e personalizado para sua marca, tudo nos mínimos detalhes, especialmente para você.",
  },
  {
    icon: <TargetIcon size={20} weight="fill" />,
    title: "Experiência do usuário",
    description:
      "Construímos sites intuitivos, para garantir performance otimizada e uma experiência excepcional.",
  },
  {
    icon: <PenIcon size={20} weight="fill" />,
    title: "Design profissional",
    description:
      "Crie experiências visuais impactantes, combinando estética e usabilidade para entregar soluções inovadoras.",
  },
  {
    icon: <LightningIcon size={20} weight="fill" />,
    title: "Performance",
    description:
      "Tudo que seu site precisa para assegurar um melhor desempenho e carregamento rápido.",
  },
  {
    icon: <InfoIcon size={20} weight="fill" />,
    title: "Suporte contínuo",
    description:
      "Acompanhamento dedicado após o lançamento para garantir que seu site evolua junto com o seu negócio.",
  },
]

export function Features() {
  const [active, setActive] = useState(0)

  return (
    <section data-header-theme="dark" className="flex w-full bg-neutral-950">
      <div className="container mx-auto px-6 py-28 md:py-36 w-full flex flex-col gap-16">
        <HeadingTitle className="text-neutral-50">Como entregamos resultados</HeadingTitle>

        {/* Desktop: two-column asymmetric */}
        <div className="hidden md:grid md:grid-cols-[1fr_1.8fr] border-t border-neutral-800">

          {/* Left — list of titles */}
          <div className="border-r border-neutral-800">
            {FEATURES.map((feature, i) => (
              <button
                key={feature.title}
                onClick={() => setActive(i)}
                className={[
                  "w-full flex items-center gap-3 px-0 py-4 pr-8 border-b border-neutral-800 text-left transition-colors duration-150 cursor-pointer group",
                  active === i
                    ? "text-neutral-50"
                    : "text-neutral-500 hover:text-neutral-300 hover:bg-neutral-900",
                ].join(" ")}
              >
                <span
                  className={[
                    "transition-colors duration-150 shrink-0",
                    active === i ? "text-neutral-50" : "text-neutral-600 group-hover:text-neutral-400",
                  ].join(" ")}
                >
                  {feature.icon}
                </span>
                <span className="font-medium text-sm">{feature.title}</span>
                {active === i && (
                  <ArrowRightIcon size={16} weight="bold" className="ml-auto text-neutral-50" />
                )}
              </button>
            ))}
          </div>

          {/* Right — expanded description */}
          <div className="pl-12 pt-8 pb-8 flex flex-col justify-center min-h-96">
            <div
              key={active}
              className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-2 duration-300"
            >
              <span className="text-neutral-400">
                {FEATURES[active].icon && (
                  <span className="inline-flex text-neutral-400 [&>svg]:size-8">
                    {FEATURES[active].icon}
                  </span>
                )}
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

        {/* Mobile: stacked list */}
        <div className="flex flex-col md:hidden divide-y divide-neutral-800 border-t border-neutral-800">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="flex gap-4 py-5">
              <span className="text-neutral-400 shrink-0 mt-0.5">{feature.icon}</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-medium text-neutral-50">{feature.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
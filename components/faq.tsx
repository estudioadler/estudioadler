"use client"
import { useState } from "react"
import HeadingTitle from "./heading-title"
import { BaseButton } from "./base-button"
import AccordionItem from "./accordion-item"

const faqs = [
  {
    question: "Quanto tempo leva para desenvolver um site?",
    answer:
      "O prazo varia conforme a complexidade do projeto. Sites institucionais simples podem ser entregues em 2 a 4 semanas, enquanto projetos mais robustos podem levar de 6 a 12 semanas.",
  },
  {
    question: "O site é responsivo?",
    answer:
      "Todos os nossos sites são desenvolvidos com design responsivo, garantindo uma experiência excelente em dispositivos móveis, tablets e desktops.",
  },
  {
    question: "O site é otimizado para SEO?",
    answer:
      "Sim. Aplicamos boas práticas de SEO técnico desde o início do desenvolvimento, incluindo estrutura semântica, velocidade de carregamento e metadados otimizados.",
  },
  {
    question: "O site será seguro?",
    answer:
      "Absolutamente. Implementamos certificados SSL, boas práticas de segurança e atualizações regulares para manter seu site protegido contra vulnerabilidades.",
  },
  {
    question: "Existe suporte após o lançamento do site?",
    answer:
      "Oferecemos planos de manutenção opcionais que incluem atualizações de segurança, backups e suporte técnico. Você escolhe o plano que melhor se adapta à sua necessidade.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section data-header-theme="light" className="relative w-full bg-background">
      <div className="mx-auto w-full max-w-7xl">
        {/* Apenas a linha do meio — col 2 de 4 */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-7xl -translate-x-1/2 md:grid md:grid-cols-4">
          <div />
          <div className="border-r border-neutral-500/15" />
          <div />
          <div />
        </div>

        {/* Header */}
        <div className="relative grid grid-cols-1 pt-24 pb-0 md:grid-cols-4 md:pt-24 md:pb-0">
          <div className="col-span-2 flex flex-col gap-3 px-8 pb-16 md:px-8">
            <HeadingTitle className="text-neutral-950">
              Perguntas <br />frequentes
            </HeadingTitle>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Descubra e entenda as principais dúvidas sobre o desenvolvimento
              de sites, e-commerces e landing pages.
            </p>
          </div>
        </div>
      </div>

      {/* Linha topo — full width */}
      <div className="w-full border-t border-neutral-500/15" />

      <div className="mx-auto w-full max-w-7xl">
        <div className="relative grid grid-cols-1 md:grid-cols-2">

          {/* Coluna esquerda */}
          <div className="order-2 md:order-1 flex flex-col justify-start gap-6 px-8 py-8 md:border-r border-t md:border-t-0 border-neutral-500/15">
            <p className="text-base leading-relaxed text-muted-foreground">
              Esclareça suas perguntas e tome decisões informadas para o
              sucesso do seu projeto digital.
            </p>
            <BaseButton text="Tire suas dúvidas" href="/orcamento" />
          </div>

          {/* Coluna direita — Accordion */}
          <div className="order-1 md:order-2 flex flex-col divide-y divide-neutral-500/15 px-5 py-1 md:px-0 md:py-0">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(index)}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Linha fim — full width */}
      <div className="w-full border-t border-neutral-500/15" />

      <div className="pb-28 md:pb-44" />
    </section>
  )
}
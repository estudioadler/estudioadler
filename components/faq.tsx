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
    question: "Existe algum tipo de manutenção que devo pagar para a agência?",
    answer:
      "Oferecemos planos de manutenção opcionais que incluem atualizações de segurança, backups e suporte técnico. Você escolhe o plano que melhor se adapta à sua necessidade.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(index)
  }

  return (
    <section data-header-theme="light" className="w-full bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left column */}
        <div className="p-6 md:p-12 flex flex-col justify-start gap-6 lg:border-r border-border">
          <HeadingTitle>Perguntas frequentes</HeadingTitle>
          <div className="flex max-w-md flex-col gap-6">
            <p>
              Descubra e entenda as principais dúvidas sobre o desenvolvimento
              de sites, e-commerce e identidade visual. Esclareça suas perguntas
              e tome decisões informadas para o sucesso do seu projeto digital.
            </p>
            <BaseButton text="Quero uma proposta" />
          </div>
        </div>

        {/* Right column — Accordion */}
        <div className=" p-6 md:p-12 flex flex-col gap-6 border-t lg:border-t-0 border-border divide-y divide-border">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
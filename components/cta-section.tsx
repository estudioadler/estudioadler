"use client"

import Head from "next/head"
import { BaseButton } from "./base-button"
import HeadingTitle from "./heading-title"

export function CTA() {
  return (
    <section className="w-full border-t bg-neutral-950 text-neutral-50">
      <div className="container mx-auto flex  flex-col gap-10 px-6 py-24 md:flex-row md:items-center md:justify-between">
        
        {/* LEFT */}
        <HeadingTitle>
          Projetos que transformam empresas.
        </HeadingTitle>

        {/* RIGHT */}
        <div className="flex max-w-md flex-col gap-6">
          <p className="text-base leading-relaxed">
            Seu projeto merece ficar em boas mãos. Conte com a nossa agência
            alcançar o sucesso. Vamos começar agora mesmo!
          </p>

          <BaseButton text="Quero uma proposta" />
        </div>
      </div>
    </section>
  )
}
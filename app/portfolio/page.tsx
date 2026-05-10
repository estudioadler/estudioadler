import type { Metadata } from "next"
import HeadingTitle from "@/components/heading-title"
import { RecentProjects } from "@/components/recent-projects"
import { ButtonSmall } from "@/components/button-small"

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Conheça os projetos desenvolvidos pelo Estúdio Adler — sites institucionais, e-commerces e landing pages com design e código feitos à mão.",
  alternates: { canonical: "https://estudioadler.com.br/portfolio" },
  openGraph: {
    title: "Portfólio | Estúdio Adler",
    description:
      "Projetos reais entregues com design e desenvolvimento integrados. Veja o trabalho do Estúdio Adler.",
    url: "https://estudioadler.com.br/portfolio",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Portfólio",
  provider: {
    "@type": "LocalBusiness",
    name: "Estúdio Adler",
    url: "https://estudioadler.com.br",
  },
  description:
    "Seleção de projetos desenvolvidos pelo Estúdio Adler — sites, e-commerces e landing pages com design e código integrados.",
  url: "https://estudioadler.com.br/portfolio",
}

const segmentos = [
  { numero: "01", label: "Advocacia" },
  { numero: "02", label: "Imobiliária" },
  { numero: "03", label: "Alimentação" },
  { numero: "04", label: "Petshop" },
]

export default function PortfolioPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        data-header-theme="dark"
        className="relative w-full bg-neutral-950"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-7xl -translate-x-1/2 md:grid md:grid-cols-4">
            <div className="border-r border-neutral-500/15" />
            <div className="border-r border-neutral-500/15" />
            <div className="border-r border-neutral-500/15" />
            <div />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-4">
            <div className="col-span-3 flex flex-col gap-4 px-8 pt-48 pb-28 md:pb-36">
              <span className="font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase">
                Portfólio
              </span>
              <HeadingTitle className="text-neutral-50">
                Projetos reais.
                <br />
                Resultados reais.
              </HeadingTitle>
              <p className="max-w-sm text-lg leading-relaxed text-neutral-400">
                Cada entrega aqui foi construída com intenção — do design ao código.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOCO 1: O trabalho — fundo escuro ───────────── */}
      <section
        data-header-theme="dark"
        className="relative w-full bg-neutral-950"
      >
        <div className="w-full border-t border-neutral-500/15" />
        <div className="mx-auto w-full max-w-7xl">
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-7xl -translate-x-1/2 md:grid md:grid-cols-4">
            <div className="border-r border-neutral-500/15" />
            <div className="border-r border-neutral-500/15" />
            <div className="border-r border-neutral-500/15" />
            <div />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="flex flex-col gap-4 px-8 py-16 md:border-r border-neutral-500/15">
              <h2 className="font-unbounded text-3xl font-normal leading-[1.1] tracking-[-0.03em] text-white uppercase md:text-4xl">
                Feito à mão.
                <br />
                Entregue
                <br />
                com propósito.
              </h2>
            </div>
            <div className="flex flex-col gap-6 px-8 py-16 text-neutral-400">
              <p className="text-base leading-relaxed">
                Cada projeto aqui tem uma história: um cliente com um problema
                real, um objetivo claro e uma solução construída do zero — sem
                template, sem atalho.
              </p>
              <p className="text-base leading-relaxed">
                O que você vai ver nessa página não é uma vitrine. É um
                registro do que foi entregue, de como foi feito e do que
                mudou para quem contratou.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-neutral-500/15" />
      </section>

      {/* ── BLOCO 2: Como é feito — fundo claro ──────────── */}
      <section
        data-header-theme="light"
        className="relative w-full bg-neutral-50"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-7xl -translate-x-1/2 md:grid md:grid-cols-4">
            <div className="border-r border-neutral-500/15" />
            <div className="border-r border-neutral-500/15" />
            <div className="border-r border-neutral-500/15" />
            <div />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="flex flex-col gap-4 px-8 py-16 md:border-r border-neutral-500/15">
              <h2 className="font-unbounded text-3xl font-normal leading-[1.1] tracking-[-0.03em] text-neutral-950 uppercase md:text-4xl">
                Design e código
                <br />
                no mesmo
                <br />
                processo.
              </h2>
            </div>
            <div className="flex flex-col gap-6 px-8 py-16 text-muted-foreground">
              <p className="text-base leading-relaxed">
                Nenhum projeto começa pelo desenvolvimento. Antes disso,
                existe uma etapa de UX/UI — definir estrutura, hierarquia
                e como o usuário vai navegar. Só depois o código entra.
              </p>
              <p className="text-base leading-relaxed">
                Essa integração entre as duas etapas é o que garante
                consistência entre o que foi desenhado e o que foi
                entregue. Sem perda de qualidade no meio do caminho.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-neutral-500/15" />
      </section>

      {/* ── BLOCO 3: Segmentos — fundo claro ─────────────── */}
      <section
        data-header-theme="light"
        className="relative w-full bg-neutral-50"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-7xl -translate-x-1/2 md:grid md:grid-cols-4">
            <div className="border-r border-neutral-500/15" />
            <div className="border-r border-neutral-500/15" />
            <div className="border-r border-neutral-500/15" />
            <div />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="flex flex-col gap-4 px-8 py-16 md:border-r border-neutral-500/15">
              <h2 className="font-unbounded text-3xl font-normal leading-[1.1] tracking-[-0.03em] text-neutral-950 uppercase md:text-4xl">
                Clientes de
                <br />
                mercados
                <br />
                diferentes.
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                O Estúdio Adler atende negócios de segmentos variados — o que
                muda é o contexto, não o cuidado com a entrega.
              </p>
            </div>

            <div className="flex flex-col justify-center px-8 py-16">
              <ol className="flex flex-col">
                {segmentos.map((s) => (
                  <li
                    key={s.numero}
                    className="flex items-center gap-4 border-b border-neutral-500/15 py-5 first:border-t"
                  >
                    <span className="font-mono text-xs text-neutral-400">
                      {s.numero}
                    </span>
                    <span className="text-base text-neutral-950">
                      {s.label}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-neutral-500/15" />
      </section>

      {/* ── PROJETOS ─────────────────────────────────────── */}
      <RecentProjects
        eyebrow="Projetos"
        title={<>Os trabalhos.</>}
        subtitle="Uma seleção completa — cada projeto com um desafio diferente e resultado mensurável."
        hideButton
      />
    </main>
  )
}
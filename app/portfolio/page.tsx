import { PageHero } from "@/components/page-hero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Conheça os projetos desenvolvidos pelo Estúdio Adler — sites institucionais, e-commerces e landing pages com design e código feitos à mão.",
  alternates: { canonical: "/portfolio" },
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
      <PageHero
        eyebrow="Portfólio"
        title={
          <>
            Projetos reais.
            <br />
            Resultados reais.
          </>
        }
        subtitle="Cada entrega aqui foi construída com intenção — do design ao código."
      />

      {/* ── BLOCO 1: O que você vai encontrar ───────────── */}
      <section className="container mx-auto px-6 py-24 md:px-12 md:py-32">
        <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3 md:w-1/2">
            <span className="font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase">
              O trabalho
            </span>
            <h2 className="font-unbounded text-3xl font-normal leading-[1.1] tracking-[-0.03em] text-white uppercase md:text-4xl">
              Feito à mão.
              <br />
              Entregue
              <br />
              com propósito.
            </h2>
          </div>

          <div className="flex flex-col gap-6 text-neutral-400 md:w-1/2 md:pt-1">
            <p className="text-sm leading-relaxed md:text-base">
              Cada projeto aqui tem uma história: um cliente com um problema
              real, um objetivo claro e uma solução construída do zero — sem
              template, sem atalho.
            </p>
            <p className="text-sm leading-relaxed md:text-base">
              O que você vai ver nessa página não é uma vitrine. É um
              registro do que foi entregue, de como foi feito e do que
              mudou para quem contratou.
            </p>
          </div>
        </div>
      </section>

      {/* ── DIVISOR ──────────────────────────────────────── */}
      <div className="container mx-auto px-6 md:px-12">
        <hr className="border-neutral-800" />
      </div>

      {/* ── BLOCO 2: Como os projetos são construídos ────── */}
      <section className="container mx-auto px-6 py-24 md:px-12 md:py-32">
        <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3 md:w-1/2">
            <span className="font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase">
              Como é feito
            </span>
            <h2 className="font-unbounded text-3xl font-normal leading-[1.1] tracking-[-0.03em] text-white uppercase md:text-4xl">
              Design e código
              <br />
              no mesmo
              <br />
              processo.
            </h2>
          </div>

          <div className="flex flex-col gap-10 md:w-1/2 md:pt-1">
            <div className="flex flex-col gap-6 text-neutral-400">
              <p className="text-sm leading-relaxed md:text-base">
                Nenhum projeto começa pelo desenvolvimento. Antes disso,
                existe uma etapa de UX/UI — definir estrutura, hierarquia
                e como o usuário vai navegar. Só depois o código entra.
              </p>
              <p className="text-sm leading-relaxed md:text-base">
                Essa integração entre as duas etapas é o que garante
                consistência entre o que foi desenhado e o que foi
                entregue. Sem perda de qualidade no meio do caminho.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVISOR ──────────────────────────────────────── */}
      <div className="container mx-auto px-6 md:px-12">
        <hr className="border-neutral-800" />
      </div>

      {/* ── BLOCO 3: Segmentos ───────────────────────────── */}
      <section className="container mx-auto px-6 py-24 md:px-12 md:py-32">
        <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3 md:w-1/2">
            <span className="font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase">
              Segmentos
            </span>
            <h2 className="font-unbounded text-3xl font-normal leading-[1.1] tracking-[-0.03em] text-white uppercase md:text-4xl">
              Clientes de
              <br />
              mercados
              <br />
              diferentes.
            </h2>
          </div>

          <div className="flex flex-col gap-10 md:w-1/2 md:pt-1">
            <p className="text-sm leading-relaxed text-neutral-400 md:text-base">
              O Estúdio Adler atende negócios de segmentos variados — o que
              muda é o contexto, não o cuidado com a entrega.
            </p>

            <ol className="flex flex-col">
              {segmentos.map((s) => (
                <li
                  key={s.numero}
                  className="flex items-center gap-4 border-t border-neutral-800 py-4 last:border-b"
                >
                  <span className="font-mono text-xs text-neutral-600">
                    {s.numero}
                  </span>
                  <span className="text-sm text-neutral-300 md:text-base">
                    {s.label}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── DIVISOR ──────────────────────────────────────── */}
      <div className="container mx-auto px-6 md:px-12">
        <hr className="border-neutral-800" />
      </div>

      {/* ── BLOCO 4: PROJETOS (slot para os cards) ───────── */}
      <section className="container mx-auto px-6 py-24 md:px-12 md:py-32">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase">
              Projetos
            </span>
            <h2 className="font-unbounded text-3xl font-normal leading-[1.1] tracking-[-0.03em] text-white uppercase md:text-4xl">
              Os trabalhos.
            </h2>
          </div>

          {/* Slot para os cards de projeto — adicionar aqui */}
          {/* <ProjectsGrid /> */}
        </div>
      </section>
    </main>
  )
}
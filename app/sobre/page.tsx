import { PageHero } from "@/components/page-hero"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "O Estúdio Adler une design gráfico e desenvolvimento fullstack em um único lugar. Conheça a história e a abordagem por trás de cada projeto.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: "Sobre | Estúdio Adler",
    description:
      "Design e código no mesmo lugar, desde o início. Conheça o Estúdio Adler.",
    url: "https://estudioadler.com.br/sobre",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Sobre o Estúdio Adler",
  provider: {
    "@type": "LocalBusiness",
    name: "Estúdio Adler",
    url: "https://estudioadler.com.br",
  },
  description:
    "O Estúdio Adler nasceu da união entre design gráfico e desenvolvimento fullstack — duas disciplinas que a maioria separa, aqui integradas desde o primeiro traço.",
  url: "https://estudioadler.com.br/sobre",
  areaServed: "BR",
}

const etapas = [
  { numero: "01", label: "Briefing e diagnóstico" },
  { numero: "02", label: "UX/UI — estrutura e visual" },
  { numero: "03", label: "Desenvolvimento" },
  { numero: "04", label: "Revisão e entrega" },
  { numero: "05", label: "Suporte pós-lançamento" },
]

const numeros = [
  { valor: "8+", label: "anos em design gráfico" },
  { valor: "Full", label: "stack — design e dev no mesmo lugar" },
  { valor: "4", label: "segmentos atendidos e contando" },
]

export default function SobrePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <PageHero
        eyebrow="Sobre"
        title={
          <>
            Design e
            <br />
            código.
          </>
        }
        subtitle="O estúdio que une as duas disciplinas que a maioria separa."
      />

      {/* ── BLOCO 1: O estúdio ───────────────────────────── */}
      <section className="container mx-auto px-6 py-24 md:px-12 md:py-32">
        <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
          {/* Lado esquerdo — eyebrow + título */}
          <div className="flex flex-col gap-3 md:w-1/2">
            <span className="font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase">
              O estúdio
            </span>
            <h2 className="font-unbounded text-3xl font-normal leading-[1.1] tracking-[-0.03em] text-white uppercase md:text-4xl">
              Criado para
              <br />
              fazer diferente.
            </h2>
          </div>

          {/* Lado direito — texto */}
          <div className="flex flex-col gap-6 text-neutral-400 md:w-1/2 md:pt-1">
            <p className="text-sm leading-relaxed md:text-base">
              O Estúdio Adler nasceu da convicção de que um site bem feito
              precisa de dois olhares ao mesmo tempo: o do designer, que
              entende de forma, hierarquia e percepção; e o do desenvolvedor,
              que sabe transformar isso em algo que funciona de verdade.
            </p>
            <p className="text-sm leading-relaxed md:text-base">
              A maioria dos projetos passa por mãos separadas — design de um
              lado, código do outro. Aqui, os dois acontecem juntos, desde o
              início. Isso muda o resultado.
            </p>
          </div>
        </div>
      </section>

      {/* ── DIVISOR ──────────────────────────────────────── */}
      <div className="container mx-auto px-6 md:px-12">
        <hr className="border-neutral-800" />
      </div>

      {/* ── BLOCO 2: Como trabalhamos ────────────────────── */}
      <section className="container mx-auto px-6 py-24 md:px-12 md:py-32">
        <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
          {/* Lado esquerdo */}
          <div className="flex flex-col gap-3 md:w-1/2">
            <span className="font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase">
              Como trabalhamos
            </span>
            <h2 className="font-unbounded text-3xl font-normal leading-[1.1] tracking-[-0.03em] text-white uppercase md:text-4xl">
              Cada projeto tem
              <br />
              começo, meio
              <br />e entrega.
            </h2>
          </div>

          {/* Lado direito */}
          <div className="flex flex-col gap-10 md:w-1/2 md:pt-1">
            <div className="flex flex-col gap-6 text-neutral-400">
              <p className="text-sm leading-relaxed md:text-base">
                Nenhum projeto começa pelo código. Antes disso, o trabalho
                passa por uma etapa de UX/UI — entender o contexto, mapear o
                que precisa funcionar e definir como isso vai ser apresentado.
                Só depois vem o desenvolvimento.
              </p>
              <p className="text-sm leading-relaxed md:text-base">
                Esse processo evita retrabalho, reduz surpresas e garante que
                o que foi entregue faz sentido para quem vai usar.
              </p>
            </div>

            {/* Etapas */}
            <ol className="flex flex-col">
              {etapas.map((etapa,) => (
                <li
                  key={etapa.numero}
                  className="flex items-center gap-4 border-t border-neutral-800 py-4 last:border-b"
                >
                  <span className="font-mono text-xs text-neutral-600">
                    {etapa.numero}
                  </span>
                  <span className="text-sm text-neutral-300 md:text-base">
                    {etapa.label}
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

      {/* ── BLOCO 3: Números ─────────────────────────────── */}
      <section className="container mx-auto px-6 py-24 md:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {numeros.map((item) => (
            <div key={item.valor} className="flex flex-col gap-2">
              <span className="font-unbounded text-5xl font-normal tracking-[-0.04em] text-white md:text-6xl">
                {item.valor}
              </span>
              <span className="text-sm text-neutral-500">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIVISOR ──────────────────────────────────────── */}
      <div className="container mx-auto px-6 md:px-12">
        <hr className="border-neutral-800" />
      </div>

      {/* ── BLOCO 4: O que entregamos ────────────────────── */}
      <section className="container mx-auto px-6 py-24 md:px-12 md:py-32">
        <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
          {/* Lado esquerdo */}
          <div className="flex flex-col gap-3 md:w-1/2">
            <span className="font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase">
              O que entregamos
            </span>
            <h2 className="font-unbounded text-3xl font-normal leading-[1.1] tracking-[-0.03em] text-white uppercase md:text-4xl">
              Sites.
              <br />
              De todos
              <br />
              os tipos.
            </h2>
          </div>

          {/* Lado direito */}
          <div className="flex flex-col gap-8 md:w-1/2 md:pt-1">
            <div className="flex flex-col gap-6 text-neutral-400">
              <p className="text-sm leading-relaxed md:text-base">
                Sites institucionais, e-commerces, landing pages e páginas de
                vendas — com design pensado e código feito à mão. Sem
                templates prontos, sem atalhos que comprometem o resultado.
              </p>
              <p className="text-sm leading-relaxed md:text-base">
                Para cada tipo de projeto, existe um processo adequado. O que
                não muda é o padrão de entrega.
              </p>
            </div>

            <Link
              href="/servicos"
              className="group inline-flex w-fit items-center gap-2 text-sm text-white underline-offset-4 hover:underline"
            >
              Ver serviços
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <section className="container mx-auto px-6 pb-32 md:px-12">
        <div className="flex flex-col gap-6 rounded-none border border-neutral-800 p-10 md:flex-row md:items-end md:justify-between md:p-16">
          <div className="flex flex-col gap-3">
            <h2 className="font-unbounded text-3xl font-normal leading-[1.1] tracking-[-0.03em] text-white uppercase md:text-4xl">
              Tem um projeto
              <br />
              em mente?
            </h2>
            <p className="max-w-sm text-sm text-neutral-400 md:text-base">
              Conta o que você precisa. A conversa não compromete nada.
            </p>
          </div>

          <Link
            href="/orcamento"
            className="inline-flex w-fit items-center border border-white px-8 py-4 font-unbounded text-xs tracking-widest text-white uppercase transition-colors hover:bg-white hover:text-neutral-950"
          >
            Solicitar orçamento
          </Link>
        </div>
      </section>
    </main>
  )
}
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
  { numero: "01", label: "Briefing e diagnóstico", desc: "Entendemos o contexto e os objetivos" },
  { numero: "02", label: "UX/UI — estrutura e visual", desc: "Desenhamos a experiência completa" },
  { numero: "03", label: "Desenvolvimento", desc: "Transformamos design em código" },
  { numero: "04", label: "Revisão e entrega", desc: "Ajustes finais e publicação" },
  { numero: "05", label: "Suporte pós-lançamento", desc: "Acompanhamento contínuo" },
]

export default function SobrePage() {
  return (
    <main className="bg-neutral-950">
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
      <section className="bg-neutral-100 container mx-auto px-6 py-24 md:px-12 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          {/* Lado esquerdo — eyebrow + título */}
          <div className="flex flex-col gap-4 lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <span className="font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase">
              O estúdio
            </span>
            <h2 className="font-unbounded text-3xl font-normal leading-[1.1] tracking-[-0.03em] text-neutral-950 uppercase md:text-4xl lg:text-5xl">
              Criado para
              <br />
              fazer diferente.
            </h2>
          </div>

          {/* Lado direito — texto */}
          <div className="flex flex-col gap-8 lg:col-span-6 lg:col-start-7">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              O Estúdio Adler nasceu da convicção de que um site bem feito
              precisa de dois olhares ao mesmo tempo: o do designer, que
              entende de forma, hierarquia e percepção; e o do desenvolvedor,
              que sabe transformar isso em algo que funciona de verdade.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
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
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          {/* Lado esquerdo */}
          <div className="flex flex-col gap-4 lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <span className="font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase">
              Como trabalhamos
            </span>
            <h2 className="font-unbounded text-3xl font-normal leading-[1.1] tracking-[-0.03em] text-neutral-50 uppercase md:text-4xl lg:text-5xl">
              Cada projeto tem
              <br />
              começo, meio
              <br />e entrega.
            </h2>
          </div>

          {/* Lado direito */}
          <div className="flex flex-col gap-12 lg:col-span-6 lg:col-start-7">
            <div className="flex flex-col gap-6">
              <p className="text-base leading-relaxed text-neutral-400 md:text-lg">
                Nenhum projeto começa pelo código. Antes disso, o trabalho
                passa por uma etapa de UX/UI — entender o contexto, mapear o
                que precisa funcionar e definir como isso vai ser apresentado.
                Só depois vem o desenvolvimento.
              </p>
              <p className="text-base leading-relaxed text-neutral-400 md:text-lg">
                Esse processo evita retrabalho, reduz surpresas e garante que
                o que foi entregue faz sentido para quem vai usar.
              </p>
            </div>

            {/* Etapas */}
            <ol className="flex flex-col">
              {etapas.map((etapa) => (
                <li
                  key={etapa.numero}
                  className="group grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 border-t border-neutral-800 py-6 transition-colors last:border-b hover:bg-neutral-900/50"
                >
                  <span className="row-span-2 flex size-10 items-center justify-center rounded-full border border-neutral-800 font-mono text-xs text-neutral-500 transition-colors group-hover:border-blue-950 group-hover:text-neutral-50">
                    {etapa.numero}
                  </span>
                  <span className="self-end text-sm font-medium text-neutral-50 md:text-base">
                    {etapa.label}
                  </span>
                  <span className="self-start text-sm text-neutral-500">
                    {etapa.desc}
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

      {/* ── BLOCO 3: O que entregamos ────────────────────── */}
      <section className="bg-blue-950 container mx-auto px-6 py-24 md:px-12 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          {/* Lado esquerdo */}
          <div className="flex flex-col gap-4 lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <span className="font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase">
              O que entregamos
            </span>
            <h2 className="font-unbounded text-3xl font-normal leading-[1.1] tracking-[-0.03em] text-neutral-50 uppercase md:text-4xl lg:text-5xl">
              Sites.
              <br />
              De todos
              <br />
              os tipos.
            </h2>
          </div>

          {/* Lado direito */}
          <div className="flex flex-col gap-10 lg:col-span-6 lg:col-start-7">
            <div className="flex flex-col gap-6">
              <p className="text-base leading-relaxed text-neutral-400 md:text-lg">
                Sites institucionais, e-commerces, landing pages e páginas de
                vendas — com design pensado e código feito à mão. Sem
                templates prontos, sem atalhos que comprometem o resultado.
              </p>
              <p className="text-base leading-relaxed text-neutral-400 md:text-lg">
                Para cada tipo de projeto, existe um processo adequado. O que
                não muda é o padrão de entrega.
              </p>
            </div>

            <Link
              href="/servicos"
              className="group inline-flex w-fit items-center gap-3 border border-neutral-800 px-6 py-3 text-sm font-medium text-neutral-50 transition-all hover:border-blue-950 hover:bg-blue-950/10"
            >
              Ver serviços
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

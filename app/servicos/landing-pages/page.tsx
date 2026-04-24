import { PageHero } from "@/components/page-hero"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Landing Pages",
  description:
    "O Estúdio Adler cria landing pages e páginas de vendas diretas ao ponto — desenvolvidas para transformar visitantes em clientes.",
  alternates: { canonical: "/servicos/landing-pages" },
  openGraph: {
    title: "Criação de Landing Pages | Estúdio Adler",
    description:
      "Landing pages e páginas de vendas com foco em conversão. Uma página, um objetivo.",
    url: "https://estudioadler.com.br/servicos/landing-pages",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Landing Pages",
  provider: {
    "@type": "LocalBusiness",
    name: "Estúdio Adler",
    url: "https://estudioadler.com.br",
  },
  description:
    "Criação de landing pages e páginas de vendas com foco em conversão — diretas ao ponto, desenvolvidas para transformar visitantes em clientes.",
  url: "https://estudioadler.com.br/servicos/landing-pages",
  areaServed: "BR",
  serviceType: "Desenvolvimento de Landing Pages",
}

const etapas = [
  { numero: "01", label: "Definição de objetivo e oferta" },
  { numero: "02", label: "Estrutura de copy e hierarquia" },
  { numero: "03", label: "Design focado em conversão" },
  { numero: "04", label: "Desenvolvimento e integrações" },
  { numero: "05", label: "Testes e ajustes finais" },
  { numero: "06", label: "Publicação e acompanhamento" },
]

const entregas = [
  {
    titulo: "Estrutura estratégica",
    descricao:
      "Cada seção tem um papel claro: conduzir o visitante até a ação.",
  },
  {
    titulo: "Design orientado a conversão",
    descricao:
      "Visual pensado para guiar o olhar e reduzir distrações.",
  },
  {
    titulo: "Carregamento rápido",
    descricao:
      "Performance otimizada para não perder visitantes por lentidão.",
  },
  {
    titulo: "Integrações essenciais",
    descricao:
      "Formulários, WhatsApp, pixel e ferramentas de marketing conectadas.",
  },
]

const numeros = [
  { valor: "1", label: "objetivo por página" },
  { valor: "0", label: "elementos desnecessários" },
  { valor: "100%", label: "foco em conversão" },
]

export default function LandingPagesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="Serviços / Landing Pages"
        title={
          <>
            Uma página.
            <br />
            Um objetivo.
          </>
        }
        subtitle="Landing pages diretas ao ponto, criadas para transformar visitante em cliente."
      />

      {/* O QUE É */}
      <section className="container mx-auto px-6 py-24 md:px-12 md:py-32">
        <div className="flex flex-col gap-16 md:flex-row md:justify-between">
          <div className="md:w-1/2">
            <span className="font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase">
              O que é
            </span>
            <h2 className="font-unbounded text-3xl text-white uppercase md:text-4xl">
              Menos páginas.
              <br />
              Mais resultado.
            </h2>
          </div>

          <div className="md:w-1/2 text-neutral-400">
            <p>
              Uma landing page não é um site completo. É uma página construída
              com um único objetivo: fazer o visitante tomar uma ação.
            </p>
            <p>
              Sem distrações, sem caminhos paralelos. Tudo é pensado para
              conduzir a decisão — do primeiro scroll até o clique final.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 md:px-12">
        <hr className="border-neutral-800" />
      </div>

      {/* COMO FUNCIONA */}
      <section className="container mx-auto px-6 py-24 md:px-12 md:py-32">
        <div className="flex flex-col gap-16 md:flex-row md:justify-between">
          <div className="md:w-1/2">
            <span className="font-mono text-xs text-neutral-500 uppercase">
              Como funciona
            </span>
            <h2 className="font-unbounded text-3xl text-white uppercase md:text-4xl">
              Cada bloco
              <br />
              tem um papel.
            </h2>
          </div>

          <div className="md:w-1/2">
            <p className="text-neutral-400">
              A estrutura não é aleatória. Existe uma lógica por trás de cada
              seção: captar atenção, gerar interesse, construir confiança e
              levar à ação.
            </p>

            <ol className="mt-10">
              {etapas.map((etapa) => (
                <li
                  key={etapa.numero}
                  className="flex gap-4 border-t border-neutral-800 py-4"
                >
                  <span className="text-neutral-600">
                    {etapa.numero}
                  </span>
                  <span className="text-neutral-300">
                    {etapa.label}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="container mx-auto px-6 py-24 md:px-12 md:py-32">
        <div className="grid md:grid-cols-3 gap-12">
          {numeros.map((item) => (
            <div key={item.valor}>
              <span className="text-5xl text-white">
                {item.valor}
              </span>
              <p className="text-neutral-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ENTREGAS */}
      <section className="container mx-auto px-6 py-24 md:px-12 md:py-32">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl text-white uppercase">
              O que está incluído
            </h2>
          </div>

          <div className="md:w-1/2">
            {entregas.map((item) => (
              <div key={item.titulo} className="border-t py-6 border-neutral-800">
                <p className="text-white">{item.titulo}</p>
                <p className="text-neutral-500">{item.descricao}</p>
              </div>
            ))}

            <Link href="/servicos" className="mt-8 inline-block text-white underline">
              Ver todos os serviços →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-32 md:px-12">
        <div className="border border-neutral-800 p-10 md:p-16">
          <h2 className="text-3xl text-white uppercase">
            Quer uma página
            <br />
            que converte?
          </h2>
          <Link href="/orcamento" className="mt-6 inline-block border px-8 py-4">
            Solicitar orçamento
          </Link>
        </div>
      </section>
    </main>
  )
}
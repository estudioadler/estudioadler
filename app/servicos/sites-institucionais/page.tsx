import { BaseButton } from "@/components/base-button"
import { PageHero } from "@/components/page-hero"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sites Institucionais",
  description:
    "O Estúdio Adler cria sites institucionais com design profissional e código robusto — presença digital que transmite credibilidade desde o primeiro acesso.",
  alternates: { canonical: "https://estudioadler.com.br/servicos/sites-institucionais" },
  openGraph: {
    title: "Criação de Sites Institucionais | Estúdio Adler",
    description:
      "Sites institucionais desenvolvidos para transmitir credibilidade e representar sua marca com precisão.",
    url: "https://estudioadler.com.br/servicos/sites-institucionais",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sites Institucionais",
  provider: {
    "@type": "LocalBusiness",
    name: "Estúdio Adler",
    url: "https://estudioadler.com.br",
  },
  description:
    "Criação de sites institucionais com design profissional e desenvolvimento fullstack — presença digital que transmite credibilidade desde o primeiro acesso.",
  url: "https://estudioadler.com.br/servicos/sites-institucionais",
  areaServed: "BR",
  serviceType: "Desenvolvimento de Sites Institucionais",
}

const etapas = [
  { numero: "01", label: "Briefing e levantamento de requisitos" },
  { numero: "02", label: "Arquitetura da informação e UX" },
  { numero: "03", label: "Design de interface (UI)" },
  { numero: "04", label: "Desenvolvimento e integração" },
  { numero: "05", label: "Testes, revisão e entrega" },
  { numero: "06", label: "Suporte pós-lançamento" },
]

const entregas = [
  {
    tag: "Design",
    titulo: "Design exclusivo",
    descricao:
      "Nenhum template. O layout é criado do zero para refletir a identidade da sua marca.",
  },
  {
    tag: "Dev",
    titulo: "Código feito à mão",
    descricao:
      "Desenvolvido com Next.js e boas práticas de performance, SEO e acessibilidade.",
  },
  {
    tag: "UX",
    titulo: "Responsivo de verdade",
    descricao:
      "Funciona em qualquer dispositivo — não só adapta, mas foi pensado para cada tela.",
  },
  {
    tag: "SEO",
    titulo: "Otimizado para busca",
    descricao:
      "Estrutura semântica, meta tags e dados estruturados para aparecer bem nos resultados.",
  },
]

const numeros = [
  { valor: "100%", label: "design exclusivo, sem templates" },
  { valor: "6", label: "etapas com entregável definido" },
  { valor: "0", label: "surpresas no meio do projeto" },
]

export default function SitesInstitucionaisPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO — neutral-950 ────────────────────────────── */}
      <PageHero
        title={
          <>
            Presença <br />
            digital que <br />
            representa.
          </>
        }
        subtitle="Sites institucionais construídos para transmitir credibilidade desde o primeiro acesso."
        buttontext="Solicitar orçamento"
      />

      {/* ── NÚMEROS — neutral-100 (claro) ────────────────── */}
      <section className="bg-neutral-100">
        <div className="container mx-auto px-6 py-16 md:px-12">
          <div className="grid grid-cols-1 divide-y divide-neutral-300 md:grid-cols-3 md:divide-x md:divide-y-0">
            {numeros.map((item) => (
              <div
                key={item.valor}
                className="flex flex-col gap-1 py-8 md:px-10 md:py-0 first:md:pl-0 last:md:pr-0"
              >
                <span className="font-unbounded text-4xl font-normal tracking-[-0.04em] text-neutral-900">
                  {item.valor}
                </span>
                <span className="text-sm text-neutral-500">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOCO 1: O que é — branco ────────────────────── */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-24 md:px-12 md:py-32">
          <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
            {/* Lado esquerdo */}
            <div className="flex flex-col gap-3 md:w-1/2">
              <span className="font-mono text-xs tracking-[0.2em] text-neutral-400 uppercase">
                O que é
              </span>
              <h2 className="font-unbounded text-3xl font-normal leading-[1.1] tracking-[-0.03em] text-neutral-900 uppercase md:text-4xl">
                Sua empresa
                <br />
                no digital.
                <br />
                Do jeito certo.
              </h2>
            </div>

            {/* Lado direito */}
            <div className="flex flex-col gap-6 text-neutral-600 md:w-1/2 md:pt-1">
              <p className="text-sm leading-relaxed md:text-base">
                Um site institucional é o primeiro lugar onde alguém vai checar
                se a sua empresa é de confiança. É onde o cliente decide se
                continua ou fecha a aba.
              </p>
              <p className="text-sm leading-relaxed md:text-base">
                Aqui, cada site é pensado como uma extensão da marca — com
                design que comunica antes mesmo de alguém ler uma linha de texto,
                e código que garante que essa experiência funcione bem em
                qualquer dispositivo.
              </p>
              <BaseButton text="Quero uma proposta" href="/orcamento" />
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOCO 2: Como funciona — neutral-950 (escuro) ─── */}
      <section className="bg-neutral-950">
        <div className="container mx-auto px-6 py-24 md:px-12 md:py-32">
          <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
            {/* Lado esquerdo */}
            <div className="flex flex-col gap-3 md:w-1/2">
              <span className="font-mono text-xs tracking-[0.2em] text-neutral-600 uppercase">
                Como funciona
              </span>
              <h2 className="font-unbounded text-3xl font-normal leading-[1.1] tracking-[-0.03em] text-white uppercase md:text-4xl">
                Um processo
                <br />
                sem surpresas
                <br />
                no meio.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-500 md:text-base">
                Cada etapa tem entregável definido. Nada vai para frente sem
                aprovação. O desenvolvimento só começa quando o visual está
                fechado — sem retrabalho.
              </p>
            </div>

            {/* Etapas */}
            <div className="md:w-1/2 md:pt-1">
              <ol className="flex flex-col">
                {etapas.map((etapa, index) => (
                  <li
                    key={etapa.numero}
                    className="group flex items-center gap-6 border-t border-neutral-800 py-5 last:border-b"
                  >
                    <span
                      className="font-mono text-xs tabular-nums text-neutral-700 transition-colors group-hover:text-neutral-500"
                      style={{ opacity: 0.4 + index * 0.12 }}
                    >
                      {etapa.numero}
                    </span>
                    <span className="text-sm text-neutral-300 transition-colors group-hover:text-white md:text-base">
                      {etapa.label}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOCO 3: O que está incluído — neutral-100 ───── */}
      <section className="bg-neutral-100">
        <div className="container mx-auto px-6 py-24 md:px-12 md:py-32">
          <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
            {/* Lado esquerdo */}
            <div className="flex flex-col gap-3 md:w-1/2">
              <span className="font-mono text-xs tracking-[0.2em] text-neutral-400 uppercase">
                O que está incluído
              </span>
              <h2 className="font-unbounded text-3xl font-normal leading-[1.1] tracking-[-0.03em] text-neutral-900 uppercase md:text-4xl">
                Tudo o que
                <br />
                um site sério
                <br />
                precisa ter.
              </h2>
            </div>

            {/* Cards de entrega */}
            <div className="flex flex-col md:w-1/2 md:pt-1">
              {entregas.map((item, index) => (
                <div
                  key={item.titulo}
                  className={`flex flex-col gap-2 border-t border-neutral-300 py-6 ${
                    index === entregas.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-neutral-900 md:text-base">
                      {item.titulo}
                    </span>
                    <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase border border-neutral-300 px-2 py-0.5">
                      {item.tag}
                    </span>
                  </div>
                  <span className="text-sm leading-relaxed text-neutral-500 md:text-base">
                    {item.descricao}
                  </span>
                </div>
              ))}

              <Link
                href="/servicos"
                className="group mt-8 inline-flex w-fit items-center gap-2 text-sm text-neutral-900 underline-offset-4 hover:underline"
              >
                Ver todos os serviços
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
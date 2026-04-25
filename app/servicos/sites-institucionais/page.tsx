import { PageHero } from "@/components/page-hero"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sites Institucionais",
  description:
    "O Estúdio Adler cria sites institucionais com design profissional e código robusto — presença digital que transmite credibilidade desde o primeiro acesso.",
  alternates: { canonical: "/servicos/sites-institucionais" },
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
    titulo: "Design exclusivo",
    descricao:
      "Nenhum template. O layout é criado do zero para refletir a identidade da sua marca.",
  },
  {
    titulo: "Código feito à mão",
    descricao:
      "Desenvolvido com Next.js e boas práticas de performance, SEO e acessibilidade.",
  },
  {
    titulo: "Responsivo de verdade",
    descricao:
      "Funciona em qualquer dispositivo — não só adapta, mas foi pensado para cada tela.",
  },
  {
    titulo: "Otimizado para busca",
    descricao:
      "Estrutura semântica, meta tags e dados estruturados para aparecer bem nos resultados.",
  },
]


export default function SitesInstitucionaisPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <PageHero
        eyebrow="Serviços / Sites Institucionais"
        title={
          <>
            Presença digital
            <br />
            que representa.
          </>
        }
        subtitle="Sites institucionais construídos para transmitir credibilidade desde o primeiro acesso."
      />

      {/* ── BLOCO 1: O que é ─────────────────────────────── */}
      <section className="container mx-auto px-6 py-24 md:px-12 md:py-32">
        <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
          {/* Lado esquerdo */}
          <div className="flex flex-col gap-3 md:w-1/2">
            <span className="font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase">
              O que é
            </span>
            <h2 className="font-unbounded text-3xl font-normal leading-[1.1] tracking-[-0.03em] text-white uppercase md:text-4xl">
              Sua empresa
              <br />
              no digital.
              <br />
              Do jeito certo.
            </h2>
          </div>

          {/* Lado direito */}
          <div className="flex flex-col gap-6 text-neutral-400 md:w-1/2 md:pt-1">
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
          </div>
        </div>
      </section>

      {/* ── DIVISOR ──────────────────────────────────────── */}
      <div className="container mx-auto px-6 md:px-12">
        <hr className="border-neutral-800" />
      </div>

      {/* ── BLOCO 2: Como funciona ───────────────────────── */}
      <section className="container mx-auto px-6 py-24 md:px-12 md:py-32">
        <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
          {/* Lado esquerdo */}
          <div className="flex flex-col gap-3 md:w-1/2">
            <span className="font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase">
              Como funciona
            </span>
            <h2 className="font-unbounded text-3xl font-normal leading-[1.1] tracking-[-0.03em] text-white uppercase md:text-4xl">
              Um processo
              <br />
              sem surpresas
              <br />
              no meio.
            </h2>
          </div>

          {/* Lado direito */}
          <div className="flex flex-col gap-10 md:w-1/2 md:pt-1">
            <div className="flex flex-col gap-6 text-neutral-400">
              <p className="text-sm leading-relaxed md:text-base">
                O projeto começa pelo entendimento — quem é a empresa, para
                quem ela fala e o que precisa estar claro no site. Só depois
                disso o design começa.
              </p>
              <p className="text-sm leading-relaxed md:text-base">
                Cada etapa tem entregável definido. Nada vai para frente sem
                aprovação. E o desenvolvimento só começa quando o visual está
                fechado — o que evita retrabalho e garante consistência.
              </p>
            </div>

            {/* Etapas */}
            <ol className="flex flex-col">
              {etapas.map((etapa) => (
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


      {/* ── DIVISOR ──────────────────────────────────────── */}
      <div className="container mx-auto px-6 md:px-12">
        <hr className="border-neutral-800" />
      </div>

      {/* ── BLOCO 4: O que está incluído ─────────────────── */}
      <section className="container mx-auto px-6 py-24 md:px-12 md:py-32">
        <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
          {/* Lado esquerdo */}
          <div className="flex flex-col gap-3 md:w-1/2">
            <span className="font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase">
              O que está incluído
            </span>
            <h2 className="font-unbounded text-3xl font-normal leading-[1.1] tracking-[-0.03em] text-white uppercase md:text-4xl">
              Tudo o que
              <br />
              um site sério
              <br />
              precisa ter.
            </h2>
          </div>

          {/* Lado direito — cards de entrega */}
          <div className="flex flex-col gap-0 md:w-1/2 md:pt-1">
            {entregas.map((item, index) => (
              <div
                key={item.titulo}
                className={`flex flex-col gap-2 border-t border-neutral-800 py-6 ${
                  index === entregas.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="text-sm font-medium text-white md:text-base">
                  {item.titulo}
                </span>
                <span className="text-sm leading-relaxed text-neutral-500 md:text-base">
                  {item.descricao}
                </span>
              </div>
            ))}

            <Link
              href="/servicos"
              className="group mt-8 inline-flex w-fit items-center gap-2 text-sm text-white underline-offset-4 hover:underline"
            >
              Ver todos os serviços
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
              Pronto para
              <br />
              ter um site
              <br />
              de verdade?
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
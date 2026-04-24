import { PageHero } from "@/components/page-hero"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "E-commerce",
  description:
    "O Estúdio Adler desenvolve lojas virtuais completas, seguras e otimizadas para converter visitantes em clientes.",
  alternates: { canonical: "/servicos/ecommerce" },
  openGraph: {
    title: "Criação de E-commerce | Estúdio Adler",
    description:
      "Lojas virtuais completas, seguras e prontas para vender.",
    url: "https://estudioadler.com.br/servicos/ecommerce",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "E-commerce",
  provider: {
    "@type": "LocalBusiness",
    name: "Estúdio Adler",
    url: "https://estudioadler.com.br",
  },
  description:
    "Criação de lojas virtuais completas, seguras e otimizadas para conversão.",
  url: "https://estudioadler.com.br/servicos/ecommerce",
  areaServed: "BR",
  serviceType: "Desenvolvimento de E-commerce",
}

const etapas = [
  { numero: "01", label: "Mapeamento do negócio e operação" },
  { numero: "02", label: "Arquitetura da loja e experiência de compra" },
  { numero: "03", label: "Design da interface" },
  { numero: "04", label: "Desenvolvimento e integrações" },
  { numero: "05", label: "Testes de fluxo e pagamento" },
  { numero: "06", label: "Publicação e suporte inicial" },
]

const entregas = [
  {
    titulo: "Checkout funcional",
    descricao:
      "Fluxo de compra simples e confiável para reduzir abandono.",
  },
  {
    titulo: "Integração com pagamentos",
    descricao:
      "PIX, cartão e gateways integrados de forma segura.",
  },
  {
    titulo: "Gestão de produtos",
    descricao:
      "Estrutura preparada para cadastro e organização do catálogo.",
  },
  {
    titulo: "Performance e SEO",
    descricao:
      "Carregamento rápido e estrutura otimizada para busca.",
  },
]

const numeros = [
  { valor: "24/7", label: "vendendo sem parar" },
  { valor: "0", label: "dependência de plataforma engessada" },
  { valor: "100%", label: "controle do projeto" },
]

export default function EcommercePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="Serviços / E-commerce"
        title={
          <>
            Sua loja.
            <br />
            Do jeito certo.
          </>
        }
        subtitle="E-commerces desenvolvidos para vender — não só para existir."
      />

      {/* O QUE É */}
      <section className="container mx-auto px-6 py-24 md:px-12 md:py-32">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl text-white uppercase">
              Vender online
              <br />
              exige estrutura.
            </h2>
          </div>

          <div className="md:w-1/2 text-neutral-400">
            <p>
              Um e-commerce não é só um site com produtos. É um sistema que
              precisa funcionar do início ao fim — da navegação ao pagamento.
            </p>
            <p>
              Cada detalhe impacta a venda: velocidade, clareza, confiança e
              simplicidade no processo de compra.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 md:px-12">
        <hr className="border-neutral-800" />
      </div>

      {/* COMO FUNCIONA */}
      <section className="container mx-auto px-6 py-24 md:px-12 md:py-32">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl text-white uppercase">
              Do catálogo
              <br />
              até o pagamento.
            </h2>
          </div>

          <div className="md:w-1/2">
            <ol>
              {etapas.map((etapa) => (
                <li key={etapa.numero} className="border-t py-4 border-neutral-800">
                  <span className="text-neutral-600 mr-4">
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
            Pronto para
            <br />
            vender online?
          </h2>
          <Link href="/orcamento" className="mt-6 inline-block border px-8 py-4">
            Solicitar orçamento
          </Link>
        </div>
      </section>
    </main>
  )
}
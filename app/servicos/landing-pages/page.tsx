import { PageHero } from "@/components/page-hero"
import type { Metadata } from "next"

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

export default function LandingPagesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="Serviços"
        title={
          <>
            Uma página.
            <br />
            Um objetivo.
          </>
        }
        subtitle="Landing pages diretas ao ponto, criadas para transformar visitante em cliente."
      />
    </main>
  )
}
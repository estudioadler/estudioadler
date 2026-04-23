import { PageHero } from "@/components/page-hero"
import type { Metadata } from "next"

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

export default function SitesInstitucionaisPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="Serviços/Sites-Institucionais"
        title={
          <>
            Presença digital que
            <br className="md:hidden" />
            representa.
          </>
        }
        subtitle="Sites institucionais construídos para transmitir credibilidade desde o primeiro acesso."
      />
    </main>
  )
}

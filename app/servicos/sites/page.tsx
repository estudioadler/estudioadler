import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Criação de Sites",
  description:
    "O Estúdio Adler cria sites profissionais, rápidos, responsivos e otimizados para SEO. Tenha uma presença digital que representa de verdade a sua marca.",
  alternates: { canonical: "/servicos/criacao-de-sites" },
  openGraph: {
    title: "Criação de Sites Profissionais | Estúdio Adler",
    description:
      "Sites rápidos, responsivos e otimizados para SEO. Presença digital que representa sua marca.",
    url: "https://estudioadler.com.br/servicos/criacao-de-sites",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Criação de Sites",
  provider: {
    "@type": "LocalBusiness",
    name: "Estúdio Adler",
    url: "https://estudioadler.com.br",
  },
  description:
    "Desenvolvimento de sites profissionais, rápidos, responsivos e otimizados para SEO.",
  url: "https://estudioadler.com.br/servicos/criacao-de-sites",
  areaServed: "BR",
  serviceType: "Desenvolvimento Web",
};

export default function SitesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section>
        <h1>Criação de Sites Profissionais</h1>
        <p>
          Um site que representa de verdade a sua marca — rápido, responsivo e
          encontrado no Google.
        </p>
      </section>
    </main>
  );
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Identidade Visual",
  description:
    "O Estúdio Adler cria identidades visuais completas: logo, paleta de cores, tipografia e branding para sua marca se destacar e ser lembrada.",
  alternates: { canonical: "/servicos/identidade-visual" },
  openGraph: {
    title: "Identidade Visual | Estúdio Adler",
    description:
      "Logo, paleta de cores e branding completo. Faça sua marca ser reconhecida e lembrada.",
    url: "https://estudioadler.com.br/servicos/identidade-visual",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Identidade Visual",
  provider: {
    "@type": "LocalBusiness",
    name: "Estúdio Adler",
    url: "https://estudioadler.com.br",
  },
  description:
    "Criação de identidade visual completa: logo, paleta de cores, tipografia e branding.",
  url: "https://estudioadler.com.br/servicos/identidade-visual",
  areaServed: "BR",
  serviceType: "Design Gráfico e Branding",
};

export default function IdentidadeVisualPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section>
        <h1>Identidade Visual</h1>
        <p>
          Uma marca que as pessoas reconhecem e lembram. Logo, cores, tipografia
          e muito mais.
        </p>
      </section>
    </main>
  );
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce",
  description:
    "O Estúdio Adler desenvolve lojas virtuais completas, seguras e otimizadas para converter visitantes em clientes. Venda online do jeito certo.",
  alternates: { canonical: "/servicos/ecommerce" },
  openGraph: {
    title: "Criação de E-commerce | Estúdio Adler",
    description:
      "Lojas virtuais completas, seguras e prontas para vender. Converta visitantes em clientes.",
    url: "https://estudioadler.com.br/servicos/ecommerce",
  },
};

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
    "Criação de lojas virtuais completas, seguras e otimizadas para converter visitantes em clientes.",
  url: "https://estudioadler.com.br/servicos/ecommerce",
  areaServed: "BR",
  serviceType: "Desenvolvimento de E-commerce",
};

export default function EcommercePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section>
        <h1>E-commerce</h1>
        <p>
          Sua loja virtual do jeito certo: segura, fácil de gerenciar e
          otimizada para vender.
        </p>
      </section>
    </main>
  );
}
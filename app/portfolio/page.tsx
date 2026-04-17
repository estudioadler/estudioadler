import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Veja os projetos criados pelo Estúdio Adler: sites, lojas virtuais e identidades visuais que transformaram marcas no digital.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfólio | Estúdio Adler",
    description:
      "Projetos de sites, e-commerce e identidade visual desenvolvidos pelo Estúdio Adler.",
    url: "https://estudioadler.com.br/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <main>
      <section>
        <h1>Portfólio</h1>
        <p>
          Conheça os projetos que já desenvolvemos e inspire-se para o seu.
        </p>
      </section>
    </main>
  );
}
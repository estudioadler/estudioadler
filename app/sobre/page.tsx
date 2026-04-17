import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça o Estúdio Adler: um estúdio criativo especializado em design e desenvolvimento web. Saiba quem somos, nossa missão e como trabalhamos.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: "Sobre o Estúdio Adler",
    description:
      "Conheça o Estúdio Adler: um estúdio criativo especializado em design e desenvolvimento web.",
    url: "https://estudioadler.com.br/sobre",
  },
};

export default function SobrePage() {
  return (
    <main>
      <section>
        <h1>Sobre o Estúdio Adler</h1>
        <p>
          Somos um estúdio criativo especializado em transformar ideias em
          experiências digitais memoráveis.
        </p>
      </section>
    </main>
  );
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com o Estúdio Adler. Vamos conversar sobre o seu projeto de site, e-commerce ou landing page.",
  alternates: { canonical: "/contato" },
  openGraph: {
    title: "Fale com o Estúdio Adler",
    description:
      "Entre em contato e vamos conversar sobre o seu projeto de site, e-commerce ou landing page.",
    url: "https://estudioadler.com.br/contato",
  },
};

export default function ContatoPage() {
  return (
    <main>
      <section>
        <h1>Fale com a gente</h1>
        <p>
          Tem um projeto em mente? Conta pra gente. Vamos transformar sua ideia
          em realidade.
        </p>
      </section>
    </main>
  );
}
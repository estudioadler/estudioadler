import { OrcamentoForm } from "@/components/orcamento-form";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Orçamento",
  description:
    "Solicite um orçamento para criação de site, e-commerce ou identidade visual. Preencha o formulário e nossa equipe entrará em contato.",
  alternates: { canonical: "/orcamento" },
  openGraph: {
    title: "Solicitar Orçamento | Estúdio Adler",
    description:
      "Preencha o formulário e vamos conversar sobre o seu projeto digital.",
    url: "https://estudioadler.com.br/orcamento",
  },
};

export default function OrcamentoPage() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto px-6 py-28 sm:py-44">

        {/* Header */}
        <div className="max-w-lg">
          <h1 className="font-unbounded text-3xl sm:text-4xl md:text-5xl leading-none tracking-[-0.04em] font-medium uppercase">
            Vamos falar sobre o seu projeto?
          </h1>
          <p className="mt-4 max-w-md">
            Preencha o formulário e aguarde nossa equipe entrar em contato com você.
          </p>
        </div>

        {/* Card do formulário */}
        <div className="">
          <OrcamentoForm />
        </div>

      </div>
    </main>
  );
}
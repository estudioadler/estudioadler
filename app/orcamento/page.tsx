import { OrcamentoForm } from "@/components/orcamento-form";
import type { Metadata } from "next";

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
    <main data-header-theme="light" className="min-h-screen bg-zinc-50">
      <div className="container mx-auto px-6 py-28 md:py-0">

        {/* Mobile: empilhado | Desktop: duas colunas com sticky à esquerda */}
        <div className="flex flex-col gap-16 md:flex-row md:gap-0">

          {/* ── Coluna esquerda: sticky no desktop ── */}
          <div className="md:w-1/2">
            <div className="md:sticky md:top-0 md:h-screen md:flex md:flex-col md:justify-center">
              <div className="max-w-lg">
                <h1 className="font-unbounded text-3xl sm:text-4xl md:text-5xl leading-none tracking-[-0.04em] font-medium uppercase">
                  Vamos falar sobre o seu projeto?
                </h1>
                <p className="mt-4 max-w-md text-zinc-600">
                  Preencha o formulário e entraremos em contato com você.
                </p>
              </div>
            </div>
          </div>

          {/* ── Coluna direita: formulário rola normalmente ── */}
          <div className="pb-28 md:w-1/2 md:pt-44 md:pb-44">
            <OrcamentoForm />
          </div>

        </div>
      </div>
    </main>
  );
}
"use client";

import { useRef } from "react";

type Step = {
  id: number;
  title: string;
  items: string[];
};

const steps: Step[] = [
  {
    id: 1,
    title: "Start",
    items: [
      "Definição do escopo",
      "Planejamento",
      "Arquitetura",
      "Pesquisas",
      "Sitemap",
    ],
  },
  {
    id: 2,
    title: "Design",
    items: ["Key Visual", "Wireframe", "UI Design", "Protótipo"],
  },
  {
    id: 3,
    title: "Front-end",
    items: ["Arquitetura Front-end", "Codificação", "Otimização"],
  },
  {
    id: 4,
    title: "Entrega",
    items: ["Validações", "Lançamento"],
  },
];

export default function MethodologyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section data-header-theme="light" className="w-full bg-zinc-50 py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <span className="text-sm uppercase tracking-widest text-zinc-500">
          Metodologia
        </span>

        <h2 className="text-3xl md:text-5xl font-bold mt-4">
          Do briefing ao lançamento
        </h2>

        <p className="text-zinc-600 mt-6 max-w-2xl">
          Um fluxo estruturado que organiza cada etapa do projeto e garante um
          desenvolvimento eficiente, previsível e profissional.
        </p>
      </div>

      {/* Timeline */}
      <div
        ref={containerRef}
        className="relative w-full overflow-x-auto scrollbar-hide"
      >
        <div className="flex gap-20 px-10 min-w-max items-center">
          
          {/* Linha central */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-zinc-200 -translate-y-1/2" />

          {steps.map((step, index) => {
            const isTop = index % 2 === 0;

            return (
              <div
                key={step.id}
                className="relative flex flex-col items-center min-w-70"
              >
                {/* Card */}
                <div
                  className={`w-full bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm transition hover:shadow-xl
                  ${isTop ? "mb-16" : "mt-16"}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-zinc-300 font-bold text-xl">
                      {String(step.id).padStart(2, "0")}
                    </span>
                    <h3 className="font-semibold text-lg">
                      {step.title}
                    </h3>
                  </div>

                  <ul className="space-y-2">
                    {step.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-zinc-600 text-sm flex gap-2 items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ponto na linha */}
                <div className="w-4 h-4 bg-black rounded-full z-10 border-4 border-white shadow" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
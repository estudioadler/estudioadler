import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça os serviços do Estúdio Adler: criação de sites profissionais, desenvolvimento de e-commerce e criação de identidade visual completa.",
  alternates: { canonical: "/servicos" },
  openGraph: {
    title: "Serviços | Estúdio Adler",
    description:
      "Criação de sites, e-commerce e identidade visual para marcas que querem crescer no digital.",
    url: "https://estudioadler.com.br/servicos",
  },
};

export default function ServicosPage() {
  return (
    <main>
      <section>
        <h1>Nossos Serviços</h1>
        <p>
          Tudo que sua marca precisa para crescer no digital, em um só lugar.
        </p>

        <ul>
          <li>
            <a href="/servicos/criacao-de-sites">
              <h2>Criação de Sites</h2>
              <p>Sites profissionais, rápidos e responsivos.</p>
            </a>
          </li>
          <li>
            <a href="/servicos/ecommerce">
              <h2>E-commerce</h2>
              <p>Lojas virtuais completas e prontas para vender.</p>
            </a>
          </li>
          <li>
            <a href="/servicos/identidade-visual">
              <h2>Identidade Visual</h2>
              <p>Logo, paleta de cores e branding completo para sua marca.</p>
            </a>
          </li>
          <li>
            <a href="/servicos/social-media">
              <h2>Manutenção e Gestão de Sites</h2>
              <p>Manutenção e gestão de sites profissionais.</p>
            </a>
          </li>
          <li>
            <a href="/servicos/seo">
              <h2>Otimização SEO</h2>
              <p>Melhore seu posicionamento no Google e atraia mais clientes.</p>
            </a>
          </li>
          <li>
            <a href="/servicos/landing-pages">
              <h2>Landing Pages de Conversão</h2>
              <p>Páginas focadas em gerar leads e vendas para sua empresa.</p>
            </a>
          </li>
          <li>
            <a href="/servicos/performance">
              <h2>Performance e Otimização</h2>
              <p>Melhoramos a velocidade, SEO técnico e experiência do usuário do seu site.</p>
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}


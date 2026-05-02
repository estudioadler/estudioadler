export function Hero() {
  return (
    <section
      data-header-theme="dark"
      className="relative flex min-h-screen flex-col overflow-hidden justify-end"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.avif')" }}
      />

{/* Overlay com gradiente (topo mais escuro) */}
      <div className="absolute inset-0 bg-linear-to-b from-neutral-950/60 via-neutral-950/50 to-neutral-950/30" />

      {/* Conteúdo */}
      <div className="container mx-auto flex w-full flex-col items-start gap-6 px-6 pb-44 md:pb-24 relative z-10">
        <h1 className="w-full max-w-sm font-unbounded text-[2.5rem] leading-none font-normal tracking-[-0.03em] text-white uppercase md:max-w-2xl md:text-5xl">
          Criando <br className="md:hidden" />
          sites que mudam <br className="md:hidden" />o jogo{" "}
          <br className="md:hidden" />
          do seu negócio.
        </h1>

        <p className="w-full max-w-sm text-neutral-400 text-base leading-relaxed md:max-w-lg">
          Transformamos ideias em experiências digitais de alto impacto. Do conceito ao código, construímos sites rápidos, modernos e feitos para converter.
        </p>
      </div>
    </section>
  )
}
export function Hero() {
  return (
    <section
      data-header-theme="dark"
      className="relative flex min-h-screen flex-col overflow-hidden justify-center md:justify-end bg-neutral-950 border-b border-neutral-500/15"
    >
      {/* Vídeo de fundo */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/hero-poster.jpg"
          className="h-full w-full object-cover opacity-40"
        >
          <source src="/hero-video.webm" type="video/webm" />
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* overlay para garantir legibilidade do texto */}
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/30" />
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto flex w-full flex-col items-start gap-6 px-6 pb-44 md:pb-24 relative z-10">
        <h1 className="w-full max-w-sm font-unbounded text-[2.5rem] leading-none font-normal tracking-[-0.03em] text-neutral-50 uppercase md:max-w-2xl md:text-5xl">
          Criando <br className="md:hidden" />
          sites que mudam <br className="md:hidden" />o jogo{" "}
          <br className="md:hidden" />
          do seu negócio.
        </h1>

        <p className="w-full max-w-sm text-muted-foreground text-lg leading-relaxed md:max-w-lg">
          Transformamos ideias em experiências digitais de alto impacto. Do
          conceito ao código, construímos sites rápidos, modernos e feitos para
          converter.
        </p>
      </div>
    </section>
  )
}
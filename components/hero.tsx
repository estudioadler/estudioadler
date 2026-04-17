import { BaseButton } from "./base-button"

export function Hero() {
  return (
    <section className="relative flex gap-6 min-h-screen flex-col overflow-hidden md:justify-end">
      <div className="container mx-auto flex w-full flex-col items-start gap-6 px-6 pt-48 md:flex-row md:items-end md:justify-between md:pt-0">
        <h1 className="w-full max-w-sm font-unbounded text-[2.5rem] leading-[1.1] font-normal tracking-[-0.03em] text-white uppercase md:max-w-2xl md:text-5xl">
          Criando <br className="md:hidden" />
          sites que mudam <br className="md:hidden" />o jogo{" "}
          <br className="md:hidden" />
          do seu negócio.
        </h1>
      </div>
    </section>
  )
}

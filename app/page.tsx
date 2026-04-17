import FAQ from "@/components/faq"
import { Features } from "@/components/feature-section"
import {Hero} from "@/components/hero"
import {Services} from "@/components/services-section"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Estúdio Adler | Criação de Sites, E-commerce e Identidade Visual",
  description:
    "Transformamos sua ideia em presença digital. Sites profissionais, lojas virtuais e identidade visual para marcas que querem se destacar.",
  alternates: { canonical: "/" },
}

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      
      <FAQ />
    </>
  )
}

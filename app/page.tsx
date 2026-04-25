import FAQ from "@/components/faq"
import { Features } from "@/components/feature-section"
import {Hero} from "@/components/hero"
import MethodologySection from "@/components/methodology-section"
import {Services} from "@/components/services-section"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Estúdio Adler | Estúdio de Criação de Sites, E-commerces, Landing Pages e Sites Institucionais",
  description:
    "Transformamos sua ideia em presença digital. Estúdio de Criação de Sites, E-commerces, Landing Pages e Sites Institucionais.",
  alternates: { canonical: "/" },
}

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <MethodologySection />
      <FAQ />
    </>
  )
}

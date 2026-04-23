import { Manrope, Unbounded } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import Header from "@/components/header"
import { Footer } from "@/components/footer"
import { Marquee } from "@/components/marquee"
import { CTA } from "@/components/cta-section"
import { FloatingActions } from "@/components/floating-actions"
const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" })

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-display",
})

const siteUrl = "https://estudioadler.com.br"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Estúdio Adler | Estúdio de Criação de Sites, E-commerce e Identidade Visual",
    template: "%s | Estúdio Adler",
  },

  description:
    "Estúdio Adler: criação de sites profissionais, lojas virtuais e identidade visual para marcas que querem se destacar. Transformamos sua ideia em presença digital.",

  keywords: [
    "criação de sites",
    "desenvolvimento web",
    "e-commerce",
    "loja virtual",
    "identidade visual",
    "design gráfico",
    "logo",
    "branding",
    "estúdio digital",
    "Estúdio Adler",
  ],

  authors: [{ name: "Estúdio Adler", url: siteUrl }],
  creator: "Estúdio Adler",
  publisher: "Estúdio Adler",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Estúdio Adler",
    title:
      "Estúdio Adler | Estúdio de Criação de Sites, E-commerce e Identidade Visual",
    description:
      "Sites profissionais, lojas virtuais e identidade visual para marcas que querem crescer no digital.",
    images: [
      {
        url: "/og-image.jpg", // adicione uma imagem 1200x630px em /public
        width: 1200,
        height: 630,
        alt: "Estúdio Adler - Design e Desenvolvimento Web",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Estúdio Adler | Estúdio de Criação de Sites, E-commerce e Identidade Visual",
    description:
      "Sites profissionais, lojas virtuais e identidade visual para marcas que querem crescer no digital.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    // Adicionando os ícones para Android/Chrome aqui:
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  // Certifique-se de que esta linha também existe:
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        "font-sans",
        manrope.variable,
        unbounded.variable,
        "scroll-smooth"
      )}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": `${siteUrl}/#business`,
                  name: "Estúdio Adler",
                  url: siteUrl,
                  description:
                    "Criação de sites profissionais, e-commerce e identidade visual para marcas que querem se destacar no digital.",
                  "@context": "https://schema.org",
                  priceRange: "$$",
                  image: `${siteUrl}/og-image.jpg`,
                  logo: `${siteUrl}/logo.png`,
                  sameAs: ["https://instagram.com/estudioadler"],
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Serviços do Estúdio Adler",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Criação de Sites",
                          description:
                            "Desenvolvimento de sites profissionais, rápidos e responsivos.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "E-commerce",
                          description:
                            "Criação de lojas virtuais completas e prontas para vender.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Identidade Visual",
                          description:
                            "Criação de logo, paleta de cores e branding completo para sua marca.",
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteUrl}/#website`,
                  url: siteUrl,
                  name: "Estúdio Adler",
                  description:
                    "Sites, e-commerce e identidade visual para marcas que querem crescer.",
                  inLanguage: "pt-BR",
                  publisher: {
                    "@id": `${siteUrl}/#business`,
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-neutral-950 selection:bg-blue-950 selection:text-white"
      >
        <Header />
        {children}
        <div className="flex flex-col">
          <CTA />
          <Marquee />
          <Footer />
        </div>
        <FloatingActions  />
      </body>
    </html>
  )
}

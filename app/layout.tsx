import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageSwitcher } from "@/components/language-switcher"

import { Analytics } from "@vercel/analytics/next"
import { locales, defaultLocale, type Locale } from "./i18n"
import { I18nProvider } from "./i18n-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vistacampo - Centro de Rehabilitación de Adicciones en Colonia Tovar",
  icons: {
    icon: "/vistacampo-favicon.png",
  },
  description:
    "Centro especializado en tratamiento de adicciones en Colonia Tovar, Venezuela. Ofrecemos desintoxicación médica, terapia individual y grupal en un ambiente seguro y confidencial.",
  keywords:
    "rehabilitación, adicciones, desintoxicación, Colonia Tovar, Venezuela, tratamiento, terapia, centro de rehabilitación",
  authors: [{ name: "Vistacampo" }],
  openGraph: {
    title: "Vistacampo - Centro de Rehabilitación de Adicciones",
    description:
      "Tu recuperación es nuestra misión. Centro especializado en tratamiento integral de adicciones en Colonia Tovar, Venezuela.",
    url: "https://vistacampo.com",
    siteName: "Vistacampo",
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vistacampo - Centro de Rehabilitación de Adicciones",
    description:
      "Tu recuperación es nuestra misión. Centro especializado en tratamiento integral de adicciones en Colonia Tovar, Venezuela.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

// Locale-aware root layout using dynamic segment [lng] handled by middleware redirects
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Derive locale from pathname prefix set by middleware; default to 'es'
  const pathname = typeof window === "undefined" ? "" : window.location.pathname
  const firstSeg = (pathname.split("/")[1] as Locale) || defaultLocale
  const lng: Locale = (locales as readonly string[]).includes(firstSeg) ? (firstSeg as Locale) : defaultLocale

  return (
    <html lang={lng} suppressHydrationWarning>
      <head>
        {/* SEO: locale alternates (hreflang). Use static base to avoid runtime template parsing issues */}
        <link rel="alternate" hrefLang="es" href="https://vistacampo.com/es/" />
        <link rel="alternate" hrefLang="en" href="https://vistacampo.com/en/" />
        <link rel="alternate" hrefLang="x-default" href="https://vistacampo.com/" />
      </head>
      <body className={inter.className}>
        <I18nProvider lng={lng}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {/* Removed floating LanguageSwitcher to avoid altering visual layout */}
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
          <Analytics />
        </I18nProvider>
      </body>
    </html>
  )
}

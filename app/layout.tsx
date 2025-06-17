import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vistacampo - Centro de Rehabilitación de Adicciones en Caracas",
  icons: {
    icon: "/vistacampo-favicon.png",
  },
  description:
    "Centro especializado en tratamiento de adicciones en Caracas, Venezuela. Ofrecemos desintoxicación médica, terapia individual y grupal en un ambiente seguro y confidencial.",
  keywords:
    "rehabilitación, adicciones, desintoxicación, Caracas, Venezuela, tratamiento, terapia, centro de rehabilitación",
  authors: [{ name: "Vistacampo" }],
  openGraph: {
    title: "Vistacampo - Centro de Rehabilitación de Adicciones",
    description:
      "Tu recuperación es nuestra misión. Centro especializado en tratamiento integral de adicciones en Caracas, Venezuela.",
    url: "https://vistacampo.com",
    siteName: "Vistacampo",
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vistacampo - Centro de Rehabilitación de Adicciones",
    description:
      "Tu recuperación es nuestra misión. Centro especializado en tratamiento integral de adicciones en Caracas, Venezuela.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

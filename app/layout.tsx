import type React from "react"
import type { Metadata } from "next"
import { League_Spartan, Montserrat } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/hooks/useLanguage"

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-title",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Isaac El Baze - Développeur Fullstack & Studio Créatif",
  description: "Portfolio d'Isaac El Baze, développeur fullstack passionné et consultant digital créatif basé à Paris",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${leagueSpartan.variable} ${montserrat.variable} dark`}>
      <body className="font-body bg-background text-text antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}

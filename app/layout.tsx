import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "@/hooks/useLanguage"

export const metadata: Metadata = {
  title: "Isaac EL BAZE - Portfolio",
  description: "Created with love.",
  generator: "Isaacorp", 
  icons: {
    icon: "Isacorp.png",
  },
}

<head>
  <link rel="icon" href="Isacorp.png" type="image/png" />
</head>


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}

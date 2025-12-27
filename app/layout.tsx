import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Djamel Rebiai - Portfolio",
  description: "Computer Science Master Student | Web & Mobile Developer | Cybersecurity & AI Agent Enthusiast",
  generator: "v0.app",
  keywords: ["Djamel Rebiai", "Web Developer", "Mobile Developer", "Cybersecurity", "AI Agent", "Portfolio"],
  authors: [{ name: "Djamel Rebiai" }],
  openGraph: {
    title: "Djamel Rebiai - Portfolio",
    description: "Computer Science Master Student | Web & Mobile Developer | Cybersecurity & AI Agent Enthusiast",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>
            <LanguageProvider>{children}</LanguageProvider>
          </Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

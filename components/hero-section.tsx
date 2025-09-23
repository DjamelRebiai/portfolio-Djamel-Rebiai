"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, Github, Linkedin, ArrowDown } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"

export function HeroSection() {
  const { t } = useLanguage()

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/60 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <Image
                  src="/professional-headshot-of-a-young-computer-science-.jpg"
                  alt="Djamel Rebiai"
                  width={224}
                  height={224}
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                {t("hero.name")}
              </span>
            </h1>

            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty font-light">
                {t("hero.tagline")}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              asChild
            >
              <a href="/Djamel-Rebiai-CV.pdf" download>
                <Download className="mr-3 h-5 w-5" />
                {t("hero.downloadCV")}
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold bg-transparent hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={scrollToContact}
            >
              <Mail className="mr-3 h-5 w-5" />
              {t("hero.contactMe")}
            </Button>
          </div>

          <div className="flex justify-center space-x-8 mb-16">
            <Button
              variant="ghost"
              size="lg"
              asChild
              className="hover:bg-primary/10 hover:scale-110 transition-all duration-300 p-4"
            >
              <a href="https://github.com/djamelrebiai4" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              asChild
              className="hover:bg-primary/10 hover:scale-110 transition-all duration-300 p-4"
            >
              <a href="https://linkedin.com/in/djamel-rebiai" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
          </div>

          <div className="flex justify-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToAbout}
              className="animate-bounce hover:bg-primary/10 transition-colors"
            >
              <ArrowDown className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

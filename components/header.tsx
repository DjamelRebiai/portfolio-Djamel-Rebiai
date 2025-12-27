"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-provider"

const languages = [
  { code: "en", name: "EN", fullName: "English" },
  { code: "ar", name: "ع", fullName: "العربية" },
  { code: "fr", name: "FR", fullName: "Français" },
  { code: "de", name: "DE", fullName: "Deutsch" },
  { code: "ru", name: "RU", fullName: "Русский" },
]

export function Header() {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { href: "#about", label: t("nav.about") },
    { href: "#education", label: t("nav.education") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#languages", label: t("nav.languages") },
    { href: "#contact", label: t("nav.contact") },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as any)
    setIsLangMenuOpen(false)
  }

  if (!mounted) return null

  const currentLang = languages.find((lang) => lang.code === language)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            {t("hero.name")}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="font-medium min-w-[50px] hover:bg-primary/10"
              >
                {currentLang?.name}
              </Button>

              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-background border border-border rounded-lg shadow-lg py-2 min-w-[120px] z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full px-4 py-2 text-left hover:bg-muted transition-colors ${
                        language === lang.code ? "bg-primary/10 text-primary" : "text-foreground"
                      }`}
                    >
                      <span className="font-medium mr-2">{lang.name}</span>
                      <span className="text-sm text-muted-foreground">{lang.fullName}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:bg-primary/10"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-primary/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 border-t border-border pt-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground/80 hover:text-primary transition-colors duration-200 py-3 px-2 rounded-lg hover:bg-muted font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>

      {isLangMenuOpen && <div className="fixed inset-0 z-40" onClick={() => setIsLangMenuOpen(false)} />}
    </header>
  )
}

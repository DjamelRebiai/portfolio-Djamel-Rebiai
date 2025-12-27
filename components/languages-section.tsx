"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useLanguage } from "@/components/language-provider"

export function LanguagesSection() {
  const { t } = useLanguage()

  const languages = [
    {
      name: "Arabic",
      flag: "🇩🇿",
      level: t("languages.native"),
      percentage: 100,
    },
    {
      name: "Kabyle ⵣ",
      flag: "🏔️",
      level: t("languages.native"),
      percentage: 100,
    },
    {
      name: "French",
      flag: "🇫🇷",
      level: t("languages.advanced"),
      percentage: 70,
    },
    {
      name: "English",
      flag: "🇺🇸",
      level: t("languages.intermediate"),
      percentage: 50,
    },
    {
      name: "German",
      flag: "🇩🇪",
      level: t("languages.intermediate"),
      percentage: 40,
    },
    {
      name: "Russian",
      flag: "🇷🇺",
      level: t("languages.basic"),
      percentage: 30,
    },
  ]

  return (
    <section id="languages" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">{t("languages.title")}</h2>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Language Proficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {languages.map((language, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{language.flag}</span>
                        <div>
                          <h3 className="font-semibold">{language.name}</h3>
                          <p className="text-sm text-muted-foreground">{language.level}</p>
                        </div>
                      </div>
                      <span className="text-sm font-medium">{language.percentage}%</span>
                    </div>
                    <Progress value={language.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

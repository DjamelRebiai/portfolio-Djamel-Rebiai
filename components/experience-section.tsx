"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function ExperienceSection() {
  const { t } = useLanguage()

  const experiences = [
    {
      title: t("experience.freelance"),
      description: t("experience.freelanceDesc"),
      period: "2022 - Present",
      type: "Freelance",
    },
    {
      title: t("experience.network"),
      description: t("experience.networkDesc"),
      period: "2023",
      type: "Training",
    },
    {
      title: t("experience.diagnostics"),
      description: t("experience.diagnosticsDesc"),
      period: "2023",
      type: "Internship",
    },
    {
      title: t("experience.arduino"),
      description: t("experience.arduinoDesc"),
      period: "2022",
      type: "Training",
    },
    {
      title: t("experience.english"),
      description: t("experience.englishDesc"),
      period: "2022",
      type: "Course",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">{t("experience.title")}</h2>

          <div className="space-y-6">
            {experiences.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{item.period}</span>
                          <span className="px-2 py-1 bg-accent/20 text-accent-foreground rounded-full text-xs">
                            {item.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function EducationSection() {
  const { t } = useLanguage()

  const education = [
    {
      title: t("education.masters"),
      description: t("education.mastersDesc"),
      period: "2025 - Present",
      status: "In Progress",
    },
    {
      title: t("education.bachelors"),
      description: t("education.bachelorsDesc"),
      period: "2022 - 2025",
      status: "Completed",
    },
    {
      title: t("education.baccalaureate"),
      description: t("education.baccalaureateDesc"),
      period: "2019 - 2022",
      status: "Completed",
    },
  ]

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">{t("education.title")}</h2>

          <div className="space-y-6">
            {education.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{item.period}</span>
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              item.status === "In Progress"
                                ? "bg-accent/20 text-accent-foreground"
                                : "bg-primary/20 text-primary"
                            }`}
                          >
                            {item.status}
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

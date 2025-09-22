"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Globe, Smartphone, Database, Shield, Bot, Wrench, Users } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function SkillsSection() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t("skills.programming"),
      icon: Code,
      skills: ["JavaScript", "Python", "Java", "C", "PHP", "Kotlin"],
    },
    {
      title: t("skills.web"),
      icon: Globe,
      skills: ["HTML/CSS", "Node.js", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: t("skills.mobile"),
      icon: Smartphone,
      skills: ["Android (Java/Kotlin)", "SQLite", "Mobile UI/UX"],
    },
    {
      title: t("skills.databases"),
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"],
    },
    {
      title: t("skills.cybersecurity"),
      icon: Shield,
      skills: ["Wireshark", "MITM", "PenTesting", "Network Security"],
    },
    {
      title: t("skills.ai"),
      icon: Bot,
      skills: ["n8n", "Make", "AI Integrations", "Automation Workflows"],
    },
    {
      title: t("skills.tools"),
      icon: Wrench,
      skills: ["Git/GitHub", "VS Code", "Android Studio", "Docker"],
    },
    {
      title: t("skills.soft"),
      icon: Users,
      skills: ["Teamwork", "Problem Solving", "Creativity", "Communication"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">{t("skills.title")}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit mb-3">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { Code, Shield, Brain, Smartphone } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const { t } = useLanguage()

  const expertiseAreas = [
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack development with modern frameworks",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Security-focused development practices",
    },
    {
      icon: Brain,
      title: "AI Automation",
      description: "Intelligent agent systems and automation",
    },
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {t("about.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating innovative solutions and exploring cutting-edge technologies
            </p>
          </div>

          <Card className="overflow-hidden border-0 shadow-2xl bg-card/50 backdrop-blur-sm mb-12">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <p className="text-xl text-muted-foreground leading-relaxed text-pretty font-light">
                    {t("about.description")}
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-foreground font-medium">Master's Student in Computer Science</span>
                    </div>
                    <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-foreground font-medium">Web & Mobile Development Expert</span>
                    </div>
                    <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-foreground font-medium">Cybersecurity Enthusiast</span>
                    </div>
                    <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-foreground font-medium">AI Agent Automation Specialist</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/60 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src="/professional-portrait-of-computer-science-student-.jpg"
                        alt="Djamel Rebiai - About"
                        width={320}
                        height={384}
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-2xl">
                      <area.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{area.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

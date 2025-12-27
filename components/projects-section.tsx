"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"

export function ProjectsSection() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t("projects.chatflowTitle"),
      description: t("projects.chatflowDesc"),
      image: "/chatflow-app.png",
      technologies: t("projects.chatflowTechStack").split(/,|،/),
      techLabel: t("projects.chatflowTech"),
      featuresLabel: t("projects.chatflowFeatures"),
      features: [
        t("projects.chatflowFeature1"),
        t("projects.chatflowFeature2"),
        t("projects.chatflowFeature3"),
        t("projects.chatflowFeature4")
      ],
      github: null,
      live: "https://chat-eta-liard-14.vercel.app/chat",
    },
    {
      title: t("projects.deutschLernTitle"),
      description: t("projects.deutschLernDesc"),
      image: "/deutsch-lern.png",
      technologies: t("projects.deutschLernTechStack").split(/,|،/),
      techLabel: t("projects.deutschLernTech"),
      featuresLabel: t("projects.deutschLernFeatures"),
      features: [
        t("projects.deutschLernFeature1"),
        t("projects.deutschLernFeature2"),
        t("projects.deutschLernFeature3"),
        t("projects.deutschLernFeature4")
      ],
      github: null,
      live: "https://wort-deutsch.vercel.app/",
    },
    {
      title: t("projects.germanTitle"),
      description: t("projects.germanDesc"),
      image: "/german-learning-app.png",
      technologies: t("projects.germanTechStack").split(/,|،/),
      techLabel: t("projects.germanTech"),
      featuresLabel: t("projects.germanFeatures"),
      features: [
        t("projects.germanFeature1"),
        t("projects.germanFeature2"),
        t("projects.germanFeature3"),
        t("projects.germanFeature4")
      ],
      github: null,
      live: "https://deutsch-schreiben.vercel.app/",
    },
    {
      title: t("projects.autorentTitle"),
      description: t("projects.autorentDesc"),
      image: "/auto-rent-management-system.png",
      technologies: t("projects.autorentTechStack").split(/,|،/),
      techLabel: t("projects.autorentTech"),
      featuresLabel: t("projects.autorentFeatures"),
      features: [
        t("projects.autorentFeature1"),
        t("projects.autorentFeature2"),
        t("projects.autorentFeature3"),
        t("projects.autorentFeature4")
      ],
      github: null,
      live: "https://project-bdd-auto-rent-management-fr.vercel.app/",
    },
    {
      title: t("projects.hajjTitle"),
      description: t("projects.hajjDesc"),
      image: "/modern-web-platform-interface-for-travel-booking-w.png",
      technologies: t("projects.hajjTechStack").split(/,|،/),
      techLabel: t("projects.hajjTech"),
      featuresLabel: t("projects.hajjFeatures"),
      features: [
        t("projects.hajjFeature1"),
        t("projects.hajjFeature2"),
        t("projects.hajjFeature3"),
        t("projects.hajjFeature4")
      ],
      github: null, // Private repository
      live: "https://www.almanassikalarabi.com",
    },
    {
      title: t("projects.lexicalTitle"),
      description: t("projects.lexicalDesc"),
      image: "/lexical-analyzer-c-programming-tokenization.jpg",
      technologies: t("projects.lexicalTechStack").split(/,|،/),
      techLabel: t("projects.lexicalTech"),
      featuresLabel: t("projects.lexicalFeatures"),
      features: [
        t("projects.lexicalFeature1"),
        t("projects.lexicalFeature2"),
        t("projects.lexicalFeature3"),
        t("projects.lexicalFeature4")
      ],
      github: "https://github.com/DjamelRebiai/programatoin---C--.git",
      live: null,
    },
    {
      title: t("projects.campingTitle"),
      description: t("projects.campingDesc"),
      image: "/camping-website-interface-with-nature-background-a.jpg",
      technologies: t("projects.campingTechStack").split(/,|،/),
      techLabel: t("projects.campingTech"),
      featuresLabel: t("projects.campingFeatures"),
      features: [
        t("projects.campingFeature1"),
        t("projects.campingFeature2"),
        t("projects.campingFeature3"),
        t("projects.campingFeature4")
      ],
      github: "https://github.com/DjamelRebiai/project_djm_aber.git",
      live: null,
    },
    {
      title: t("projects.paintTitle"),
      description: t("projects.paintDesc"),
      image: "/digital-paint-application-interface-with-drawing-t.jpg",
      technologies: ["Java"],
      techLabel: t("projects.paintTech"),
      featuresLabel: t("projects.paintFeatures"),
      features: [
        t("projects.paintFeature1"),
        t("projects.paintFeature2"),
        t("projects.paintFeature3"),
        t("projects.paintFeature4")
      ],
      github: "https://github.com/DjamelRebiai/Simple_Paint_Application_java.git",
      live: null,
    },
    {
      title: t("projects.examTitle"),
      description: t("projects.examDesc"),
      image: "/secure-exam-monitoring-interface-with-webcam-feed-.png",
      technologies: ["Java"],
      techLabel: t("projects.examTech"),
      featuresLabel: t("projects.examFeatures"),
      features: [
        t("projects.examFeature1"),
        t("projects.examFeature2"),
        t("projects.examFeature3"),
        t("projects.examFeature4")
      ],
      github: "https://github.com/DjamelRebiai/Anti-Cheating_University_Exam_AppMOBILE_java.git",
      live: null,
    },
    {
      title: t("projects.medicineTitle"),
      description: t("projects.medicineDesc"),
      image: "/medical-management-system-interface-with-medicine-.png",
      technologies: t("projects.campingTechStack").split(/,|،/),
      techLabel: t("projects.medicineTech"),
      featuresLabel: t("projects.medicineFeatures"),
      features: [
        t("projects.medicineFeature1"),
        t("projects.medicineFeature2"),
        t("projects.medicineFeature3"),
        t("projects.medicineFeature4")
      ],
      github: "https://github.com/DjamelRebiai/Rare_Medicine_Management_System.git",
      live: null,
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">{t("projects.title")}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground text-pretty">{project.description}</p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold mb-2">{project.techLabel}</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech.trim()}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold mb-2">{project.featuresLabel}</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1 h-3 w-3" />
                          {t("projects.viewGithub")}
                        </a>
                      </Button>
                    )}
                    {project.live && (
                      <Button size="sm" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1 h-3 w-3" />
                          {t("projects.viewLive")}
                        </a>
                      </Button>
                    )}
                    {!project.github && (
                      <Badge variant="secondary" className="text-xs">
                        {t("projects.privateRepo")}
                      </Badge>
                    )}
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

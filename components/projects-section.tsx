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
      title: "Hajj & Umrah Web Platform",
      description:
        "Comprehensive web platform for managing Hajj and Umrah services with booking system, user management, and payment integration.",
      image: "/modern-web-platform-interface-for-travel-booking-w.png",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "SQL"],
      features: ["User Authentication", "Booking System", "Payment Gateway", "Admin Dashboard"],
      github: null, // Private repository
      live: "https://www.almanassikalarabi.com",
    },
    {
      title: "Lexical Analyzer in C",
      description:
        "A comprehensive lexical analyzer built in C for parsing and tokenizing source code, supporting multiple programming languages.",
      image: "/lexical-analyzer-c-programming-tokenization.jpg",
      technologies: ["C"],
      features: ["Multi-language Support", "Token Recognition", "Error Handling", "Symbol Table"],
      github: "https://github.com/DjamelRebiai/programatoin---C--.git",
      live: null,
    },
    {
      title: "Camping Platform",
      description:
        "Web platform for camping site reservations with interactive maps, booking management, and user reviews.",
      image: "/camping-website-interface-with-nature-background-a.jpg",
      technologies: ["HTML", "CSS", "PHP", "SQL"],
      features: ["Interactive Maps", "Reservation System", "User Reviews", "Payment Processing"],
      github: "https://github.com/DjamelRebiai/project_djm_aber.git",
      live: null,
    },
    {
      title: "Simple Paint Application",
      description:
        "Java-based paint application with drawing tools, color palette, and file operations for creating digital artwork.",
      image: "/digital-paint-application-interface-with-drawing-t.jpg",
      technologies: ["Java"],
      features: ["Drawing Tools", "Color Palette", "File Operations", "Layer Support"],
      github: "https://github.com/DjamelRebiai/Simple_Paint_Application_java.git",
      live: null,
    },
    {
      title: "Anti-Cheating University Exam App",
      description:
        "Mobile application for monitoring and preventing cheating during online university examinations with real-time surveillance.",
      image: "/secure-exam-monitoring-interface-with-webcam-feed-.png",
      technologies: ["Java"],
      features: ["Real-time Monitoring", "Face Detection", "Screen Recording", "Secure Environment"],
      github: "https://github.com/DjamelRebiai/Anti-Cheating_University_Exam_AppMOBILE_java.git",
      live: null,
    },
    {
      title: "Rare Medicine Management System",
      description:
        "Healthcare management system for tracking and managing rare medicines with inventory control and patient records.",
      image: "/medical-management-system-interface-with-medicine-.png",
      technologies: ["HTML", "CSS", "PHP", "SQL"],
      features: ["Inventory Management", "Patient Records", "Medicine Tracking", "Report Generation"],
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
                      <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
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
                        Private Repository
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

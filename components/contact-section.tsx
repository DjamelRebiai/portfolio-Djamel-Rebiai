"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, MessageSquare, Send, CheckCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email (Personal)",
      value: "djamelrebiai4@gmail.com",
      href: "mailto:djamelrebiai4@gmail.com",
    },
    {
      icon: Mail,
      label: "Email (University)",
      value: "djamel.rebiai@univ-bouira.dz",
      href: "mailto:djamel.rebiai@univ-bouira.dz",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+213) 799 678 938",
      href: "tel:+213799678938",
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: "(+213) 799 678 938",
      href: "https://wa.me/213799678938",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Zone de parc Bellmehdi, Bouira, Algeria, 10110",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/djamelrebiai4",
      username: "@djamelrebiai4",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/djamel-rebiai",
      username: "Djamel Rebiai",
    },
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-muted/30 to-muted/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {t("contact.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's connect and discuss opportunities, projects, or just have a conversation about technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-semibold">Get In Touch</CardTitle>
                  <p className="text-muted-foreground">Feel free to reach out through any of these channels</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-muted-foreground mb-1">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-semibold">Connect Online</CardTitle>
                  <p className="text-muted-foreground">Follow my work and connect professionally</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-primary/10 rounded-xl">
                          <social.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold">{social.label}</p>
                          <p className="text-sm text-muted-foreground">{social.username}</p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="hover:bg-primary hover:text-primary-foreground bg-transparent"
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          Visit
                        </a>
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-semibold">Send Message</CardTitle>
                <p className="text-muted-foreground">I'll get back to you as soon as possible</p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6" />
                    <h3 className="text-xl font-semibold mb-3">{t("contact.form.success")}</h3>
                    <p className="text-muted-foreground">Thank you for reaching out! I'll respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        name="name"
                        placeholder={t("contact.form.name")}
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12 border-0 bg-muted/50 focus:bg-background transition-colors"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder={t("contact.form.email")}
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12 border-0 bg-muted/50 focus:bg-background transition-colors"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder={t("contact.form.message")}
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        required
                        className="border-0 bg-muted/50 focus:bg-background transition-colors resize-none"
                      />
                    </div>
                    <Button type="submit" className="w-full h-12 text-base font-semibold">
                      <Send className="mr-2 h-5 w-5" />
                      {t("contact.form.send")}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

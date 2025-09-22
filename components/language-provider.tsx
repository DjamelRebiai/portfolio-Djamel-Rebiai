"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ar" | "fr" | "de" | "ru"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.education": "Education",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.languages": "Languages",
    "nav.contact": "Contact",

    // Hero Section
    "hero.name": "Djamel Rebiai",
    "hero.tagline": "Computer Science Master Student | Web & Mobile Developer | Cybersecurity & AI Agent Enthusiast",
    "hero.downloadCV": "Download CV",
    "hero.contactMe": "Contact Me",

    // About Section
    "about.title": "About Me",
    "about.description":
      "I am a passionate Computer Science Master's student with expertise in web and mobile development, cybersecurity, and AI agent automation. I enjoy creating innovative solutions and exploring cutting-edge technologies to solve real-world problems.",

    // Education Section
    "education.title": "Education",
    "education.masters": "Master's Degree in Computer Science",
    "education.mastersDesc": "Currently pursuing advanced studies in computer science",
    "education.bachelors": "Bachelor's Degree in Computer Science",
    "education.bachelorsDesc": "Completed undergraduate studies with focus on software development",
    "education.baccalaureate": "Scientific Baccalaureate",
    "education.baccalaureateDesc": "High school diploma with scientific specialization",

    // Experience Section
    "experience.title": "Experience",
    "experience.freelance": "Freelance Web & Mobile Developer",
    "experience.freelanceDesc": "Developed comprehensive web and mobile solutions for Hajj & Umrah services",
    "experience.network": "Network & Telecommunications Training",
    "experience.networkDesc": "Gained expertise in network infrastructure and telecommunications systems",
    "experience.diagnostics": "Vehicle Diagnostics Intern",
    "experience.diagnosticsDesc": "Worked on automotive diagnostic systems and troubleshooting",
    "experience.arduino": "Arduino Training",
    "experience.arduinoDesc": "Learned embedded systems programming and IoT development",
    "experience.english": "English Language Course",
    "experience.englishDesc": "Enhanced English communication skills for international collaboration",

    // Projects Section
    "projects.title": "Projects",
    "projects.viewGithub": "View on GitHub",
    "projects.viewLive": "View Live",

    // Skills Section
    "skills.title": "Skills",
    "skills.programming": "Programming Languages",
    "skills.web": "Web Development",
    "skills.mobile": "Mobile Development",
    "skills.databases": "Databases",
    "skills.cybersecurity": "Cybersecurity",
    "skills.ai": "AI Agents & Automation",
    "skills.tools": "Tools",
    "skills.soft": "Soft Skills",

    // Languages Section
    "languages.title": "Languages",
    "languages.native": "Native",
    "languages.advanced": "Advanced",
    "languages.intermediate": "Intermediate",
    "languages.basic": "Basic",

    // Contact Section
    "contact.title": "Contact",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",
    "contact.form.success": "Message sent successfully!",

    // Footer
    "footer.built": "Built with Next.js & Tailwind CSS",
    "footer.rights": "© 2025 Djamel Rebiai – All Rights Reserved",
  },
  ar: {
    // Navigation
    "nav.about": "نبذة عني",
    "nav.education": "التعليم",
    "nav.experience": "الخبرة",
    "nav.projects": "المشاريع",
    "nav.skills": "المهارات",
    "nav.languages": "اللغات",
    "nav.contact": "التواصل",

    // Hero Section
    "hero.name": "جمال ربياعي",
    "hero.tagline": "طالب ماجستير علوم الحاسوب | مطور ويب وتطبيقات | متخصص في الأمن السيبراني والذكاء الاصطناعي",
    "hero.downloadCV": "تحميل السيرة الذاتية",
    "hero.contactMe": "تواصل معي",

    // About Section
    "about.title": "نبذة عني",
    "about.description":
      "أنا طالب ماجستير شغوف في علوم الحاسوب مع خبرة في تطوير الويب والتطبيقات المحمولة والأمن السيبراني وأتمتة الذكاء الاصطناعي. أستمتع بإنشاء حلول مبتكرة واستكشاف التقنيات المتطورة لحل المشاكل الحقيقية.",

    // Education Section
    "education.title": "التعليم",
    "education.masters": "درجة الماجستير في علوم الحاسوب",
    "education.mastersDesc": "أتابع حالياً دراسات متقدمة في علوم الحاسوب",
    "education.bachelors": "درجة البكالوريوس في علوم الحاسوب",
    "education.bachelorsDesc": "أكملت الدراسات الجامعية مع التركيز على تطوير البرمجيات",
    "education.baccalaureate": "البكالوريا العلمية",
    "education.baccalaureateDesc": "شهادة الثانوية العامة بتخصص علمي",

    // Experience Section
    "experience.title": "الخبرة",
    "experience.freelance": "مطور ويب وتطبيقات مستقل",
    "experience.freelanceDesc": "طورت حلول ويب وتطبيقات شاملة لخدمات الحج والعمرة",
    "experience.network": "تدريب الشبكات والاتصالات",
    "experience.networkDesc": "اكتسبت خبرة في البنية التحتية للشبكات وأنظمة الاتصالات",
    "experience.diagnostics": "متدرب تشخيص المركبات",
    "experience.diagnosticsDesc": "عملت على أنظمة تشخيص السيارات واستكشاف الأخطاء",
    "experience.arduino": "تدريب أردوينو",
    "experience.arduinoDesc": "تعلمت برمجة الأنظمة المدمجة وتطوير إنترنت الأشياء",
    "experience.english": "دورة اللغة الإنجليزية",
    "experience.englishDesc": "حسنت مهارات التواصل باللغة الإنجليزية للتعاون الدولي",

    // Projects Section
    "projects.title": "المشاريع",
    "projects.viewGithub": "عرض على GitHub",
    "projects.viewLive": "عرض مباشر",

    // Skills Section
    "skills.title": "المهارات",
    "skills.programming": "لغات البرمجة",
    "skills.web": "تطوير الويب",
    "skills.mobile": "تطوير التطبيقات المحمولة",
    "skills.databases": "قواعد البيانات",
    "skills.cybersecurity": "الأمن السيبراني",
    "skills.ai": "الذكاء الاصطناعي والأتمتة",
    "skills.tools": "الأدوات",
    "skills.soft": "المهارات الناعمة",

    // Languages Section
    "languages.title": "اللغات",
    "languages.native": "لغة أم",
    "languages.advanced": "متقدم",
    "languages.intermediate": "متوسط",
    "languages.basic": "أساسي",

    // Contact Section
    "contact.title": "التواصل",
    "contact.form.name": "الاسم",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.message": "الرسالة",
    "contact.form.send": "إرسال الرسالة",
    "contact.form.success": "تم إرسال الرسالة بنجاح!",

    // Footer
    "footer.built": "تم البناء باستخدام Next.js و Tailwind CSS",
    "footer.rights": "© 2025 جمال ربياعي – جميع الحقوق محفوظة",
  },
  fr: {
    // Navigation
    "nav.about": "À propos",
    "nav.education": "Éducation",
    "nav.experience": "Expérience",
    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.languages": "Langues",
    "nav.contact": "Contact",

    // Hero Section
    "hero.name": "Djamel Rebiai",
    "hero.tagline": "Étudiant en Master Informatique | Développeur Web & Mobile | Passionné de Cybersécurité & IA",
    "hero.downloadCV": "Télécharger CV",
    "hero.contactMe": "Me Contacter",

    // About Section
    "about.title": "À Propos de Moi",
    "about.description":
      "Je suis un étudiant passionné en Master d'Informatique avec une expertise en développement web et mobile, cybersécurité et automatisation d'agents IA. J'aime créer des solutions innovantes et explorer les technologies de pointe pour résoudre des problèmes du monde réel.",

    // Education Section
    "education.title": "Éducation",
    "education.masters": "Master en Informatique",
    "education.mastersDesc": "Actuellement en cours d'études avancées en informatique",
    "education.bachelors": "Licence en Informatique",
    "education.bachelorsDesc": "Études de premier cycle terminées avec focus sur le développement logiciel",
    "education.baccalaureate": "Baccalauréat Scientifique",
    "education.baccalaureateDesc": "Diplôme d'études secondaires avec spécialisation scientifique",

    // Experience Section
    "experience.title": "Expérience",
    "experience.freelance": "Développeur Web & Mobile Freelance",
    "experience.freelanceDesc": "Développement de solutions web et mobiles complètes pour les services Hajj & Umrah",
    "experience.network": "Formation Réseaux & Télécommunications",
    "experience.networkDesc": "Expertise acquise en infrastructure réseau et systèmes de télécommunications",
    "experience.diagnostics": "Stagiaire Diagnostic Véhicules",
    "experience.diagnosticsDesc": "Travail sur les systèmes de diagnostic automobile et dépannage",
    "experience.arduino": "Formation Arduino",
    "experience.arduinoDesc": "Apprentissage de la programmation de systèmes embarqués et développement IoT",
    "experience.english": "Cours d'Anglais",
    "experience.englishDesc":
      "Amélioration des compétences de communication en anglais pour la collaboration internationale",

    // Projects Section
    "projects.title": "Projets",
    "projects.viewGithub": "Voir sur GitHub",
    "projects.viewLive": "Voir en Direct",

    // Skills Section
    "skills.title": "Compétences",
    "skills.programming": "Langages de Programmation",
    "skills.web": "Développement Web",
    "skills.mobile": "Développement Mobile",
    "skills.databases": "Bases de Données",
    "skills.cybersecurity": "Cybersécurité",
    "skills.ai": "Agents IA & Automatisation",
    "skills.tools": "Outils",
    "skills.soft": "Compétences Relationnelles",

    // Languages Section
    "languages.title": "Langues",
    "languages.native": "Langue Maternelle",
    "languages.advanced": "Avancé",
    "languages.intermediate": "Intermédiaire",
    "languages.basic": "Basique",

    // Contact Section
    "contact.title": "Contact",
    "contact.form.name": "Nom",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.send": "Envoyer le Message",
    "contact.form.success": "Message envoyé avec succès!",

    // Footer
    "footer.built": "Construit avec Next.js & Tailwind CSS",
    "footer.rights": "© 2025 Djamel Rebiai – Tous Droits Réservés",
  },
  de: {
    // Navigation
    "nav.about": "Über mich",
    "nav.education": "Bildung",
    "nav.experience": "Erfahrung",
    "nav.projects": "Projekte",
    "nav.skills": "Fähigkeiten",
    "nav.languages": "Sprachen",
    "nav.contact": "Kontakt",

    // Hero Section
    "hero.name": "Djamel Rebiai",
    "hero.tagline": "Informatik-Master-Student | Web- & Mobile-Entwickler | Cybersicherheit & KI-Agent Enthusiast",
    "hero.downloadCV": "Lebenslauf Herunterladen",
    "hero.contactMe": "Kontaktiere Mich",

    // About Section
    "about.title": "Über Mich",
    "about.description":
      "Ich bin ein leidenschaftlicher Informatik-Master-Student mit Expertise in Web- und Mobile-Entwicklung, Cybersicherheit und KI-Agent-Automatisierung. Ich liebe es, innovative Lösungen zu schaffen und modernste Technologien zu erkunden, um echte Weltprobleme zu lösen.",

    // Education Section
    "education.title": "Bildung",
    "education.masters": "Master-Abschluss in Informatik",
    "education.mastersDesc": "Derzeit fortgeschrittene Studien in Informatik",
    "education.bachelors": "Bachelor-Abschluss in Informatik",
    "education.bachelorsDesc": "Grundstudium mit Fokus auf Softwareentwicklung abgeschlossen",
    "education.baccalaureate": "Wissenschaftliches Abitur",
    "education.baccalaureateDesc": "Abitur mit wissenschaftlicher Spezialisierung",

    // Experience Section
    "experience.title": "Erfahrung",
    "experience.freelance": "Freiberuflicher Web- & Mobile-Entwickler",
    "experience.freelanceDesc": "Entwicklung umfassender Web- und Mobile-Lösungen für Hajj & Umrah Services",
    "experience.network": "Netzwerk & Telekommunikations-Training",
    "experience.networkDesc": "Expertise in Netzwerkinfrastruktur und Telekommunikationssystemen erworben",
    "experience.diagnostics": "Fahrzeugdiagnose-Praktikant",
    "experience.diagnosticsDesc": "Arbeit an Fahrzeugdiagnosesystemen und Fehlerbehebung",
    "experience.arduino": "Arduino-Training",
    "experience.arduinoDesc": "Programmierung eingebetteter Systeme und IoT-Entwicklung gelernt",
    "experience.english": "Englisch-Sprachkurs",
    "experience.englishDesc": "Verbesserung der englischen Kommunikationsfähigkeiten für internationale Zusammenarbeit",

    // Projects Section
    "projects.title": "Projekte",
    "projects.viewGithub": "Auf GitHub Ansehen",
    "projects.viewLive": "Live Ansehen",

    // Skills Section
    "skills.title": "Fähigkeiten",
    "skills.programming": "Programmiersprachen",
    "skills.web": "Web-Entwicklung",
    "skills.mobile": "Mobile-Entwicklung",
    "skills.databases": "Datenbanken",
    "skills.cybersecurity": "Cybersicherheit",
    "skills.ai": "KI-Agenten & Automatisierung",
    "skills.tools": "Werkzeuge",
    "skills.soft": "Soft Skills",

    // Languages Section
    "languages.title": "Sprachen",
    "languages.native": "Muttersprache",
    "languages.advanced": "Fortgeschritten",
    "languages.intermediate": "Mittelstufe",
    "languages.basic": "Grundlagen",

    // Contact Section
    "contact.title": "Kontakt",
    "contact.form.name": "Name",
    "contact.form.email": "E-Mail",
    "contact.form.message": "Nachricht",
    "contact.form.send": "Nachricht Senden",
    "contact.form.success": "Nachricht erfolgreich gesendet!",

    // Footer
    "footer.built": "Erstellt mit Next.js & Tailwind CSS",
    "footer.rights": "© 2025 Djamel Rebiai – Alle Rechte Vorbehalten",
  },
  ru: {
    // Navigation
    "nav.about": "Обо мне",
    "nav.education": "Образование",
    "nav.experience": "Опыт",
    "nav.projects": "Проекты",
    "nav.skills": "Навыки",
    "nav.languages": "Языки",
    "nav.contact": "Контакты",

    // Hero Section
    "hero.name": "Джамель Ребиаи",
    "hero.tagline": "Магистр Компьютерных Наук | Веб и Мобильный Разработчик | Энтузиаст Кибербезопасности и ИИ",
    "hero.downloadCV": "Скачать Резюме",
    "hero.contactMe": "Связаться со Мной",

    // About Section
    "about.title": "Обо Мне",
    "about.description":
      "Я увлеченный студент магистратуры по компьютерным наукам с опытом в веб и мобильной разработке, кибербезопасности и автоматизации ИИ-агентов. Мне нравится создавать инновационные решения и изучать передовые технологии для решения реальных проблем.",

    // Education Section
    "education.title": "Образование",
    "education.masters": "Магистр Компьютерных Наук",
    "education.mastersDesc": "В настоящее время изучаю продвинутые компьютерные науки",
    "education.bachelors": "Бакалавр Компьютерных Наук",
    "education.bachelorsDesc": "Завершил бакалавриат с фокусом на разработку программного обеспечения",
    "education.baccalaureate": "Научный Бакалавриат",
    "education.baccalaureateDesc": "Диплом средней школы с научной специализацией",

    // Experience Section
    "experience.title": "Опыт",
    "experience.freelance": "Фрилансер Веб и Мобильной Разработки",
    "experience.freelanceDesc": "Разработка комплексных веб и мобильных решений для услуг Хаджа и Умры",
    "experience.network": "Обучение Сетям и Телекоммуникациям",
    "experience.networkDesc": "Получил опыт в сетевой инфраструктуре и телекоммуникационных системах",
    "experience.diagnostics": "Стажер по Диагностике Транспорта",
    "experience.diagnosticsDesc": "Работал с системами диагностики автомобилей и устранением неисправностей",
    "experience.arduino": "Обучение Arduino",
    "experience.arduinoDesc": "Изучил программирование встроенных систем и разработку IoT",
    "experience.english": "Курс Английского Языка",
    "experience.englishDesc": "Улучшил навыки общения на английском для международного сотрудничества",

    // Projects Section
    "projects.title": "Проекты",
    "projects.viewGithub": "Посмотреть на GitHub",
    "projects.viewLive": "Посмотреть Вживую",

    // Skills Section
    "skills.title": "Навыки",
    "skills.programming": "Языки Программирования",
    "skills.web": "Веб-Разработка",
    "skills.mobile": "Мобильная Разработка",
    "skills.databases": "Базы Данных",
    "skills.cybersecurity": "Кибербезопасность",
    "skills.ai": "ИИ-Агенты и Автоматизация",
    "skills.tools": "Инструменты",
    "skills.soft": "Мягкие Навыки",

    // Languages Section
    "languages.title": "Языки",
    "languages.native": "Родной",
    "languages.advanced": "Продвинутый",
    "languages.intermediate": "Средний",
    "languages.basic": "Базовый",

    // Contact Section
    "contact.title": "Контакты",
    "contact.form.name": "Имя",
    "contact.form.email": "Электронная Почта",
    "contact.form.message": "Сообщение",
    "contact.form.send": "Отправить Сообщение",
    "contact.form.success": "Сообщение успешно отправлено!",

    // Footer
    "footer.built": "Создано с Next.js и Tailwind CSS",
    "footer.rights": "© 2025 Джамель Ребиаи – Все Права Защищены",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
    document.documentElement.lang = language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

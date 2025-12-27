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
    // About Section (Expertise)
    "about.masterStudent": "Master's Student in Computer Science",
    "about.webExpert": "Web & Mobile Development Expert",
    "about.cyberExpert": "Cybersecurity Enthusiast",
    "about.aiExpert": "AI Agent Automation Specialist",
    "about.passion": "Passionate about creating innovative solutions and exploring cutting-edge technologies",
    // About Section (Expertise Cards)
    "about.webTitle": "Web Development",
    "about.webDesc": "Full-stack development with modern frameworks",
    "about.mobileTitle": "Mobile Development",
    "about.mobileDesc": "Cross-platform mobile applications",
    "about.cyberTitle": "Cybersecurity",
    "about.cyberDesc": "Security-focused development practices",
    "about.aiTitle": "AI Automation",
    "about.aiDesc": "Intelligent agent systems and automation",

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
    // Projects Section
    "projects.hajjTitle": "Hajj & Umrah Web Platform",
    "projects.hajjDesc": "Comprehensive web platform for managing Hajj and Umrah services with booking system, user management, and payment integration.",
    "projects.hajjTech": "Technologies:",
    "projects.hajjFeatures": "Key Features:",
    "projects.hajjTechStack": "HTML, CSS, JavaScript, Node.js, SQL",
    "projects.hajjFeature1": "Booking System",
    "projects.hajjFeature2": "User Management",
    "projects.hajjFeature3": "Payment Integration",
    "projects.hajjFeature4": "Admin Dashboard",
    "projects.lexicalTitle": "Lexical Analyzer in C",
    "projects.lexicalDesc": "A comprehensive lexical analyzer built in C for parsing and tokenizing source code, supporting multiple programming languages.",
    "projects.lexicalTech": "Technologies:",
    "projects.lexicalFeatures": "Key Features:",
    "projects.lexicalTechStack": "C",
    "projects.lexicalFeature1": "Multi-language Support",
    "projects.lexicalFeature2": "Tokenization",
    "projects.lexicalFeature3": "Error Reporting",
    "projects.lexicalFeature4": "Performance Optimized",
    "projects.campingTitle": "Camping Platform",
    "projects.campingDesc": "Web platform for camping site reservations with interactive maps, booking management, and user reviews.",
    "projects.campingTech": "Technologies:",
    "projects.campingFeatures": "Key Features:",
    "projects.campingTechStack": "HTML, CSS, PHP, SQL",
    "projects.campingFeature1": "Interactive Maps",
    "projects.campingFeature2": "Booking Management",
    "projects.campingFeature3": "User Reviews",
    "projects.campingFeature4": "Mobile Friendly",
    // Paint Project
    "projects.paintTitle": "Digital Paint Application",
    "projects.paintDesc": "A digital painting app with drawing tools, layers, and export options.",
    "projects.paintTech": "Technologies:",
    "projects.paintFeatures": "Key Features:",
    "projects.paintFeature1": "Drawing Tools",
    "projects.paintFeature2": "Layer Support",
    "projects.paintFeature3": "Export Options",
    "projects.paintFeature4": "Color Picker",
    // Exam Project
    "projects.examTitle": "Secure Exam Monitoring Mobile App",
    "projects.examDesc": "A mobile app for secure online exams with monitoring of incoming alerts (calls, notifications) and cheating prevention.",
    "projects.examTech": "Technologies:",
    "projects.examFeatures": "Key Features:",
    "projects.examFeature1": "Incoming Alerts Monitoring (calls, notifications)",
    "projects.examFeature2": "Cheating Prevention",
    "projects.examFeature3": "Live Alerts",
    "projects.examFeature4": "Exam Analytics",
    // Medicine Project
    "projects.medicineTitle": "Medical Management System",
    "projects.medicineDesc": "A management system for clinics and pharmacies with patient records and medicine inventory.",
    "projects.medicineTech": "Technologies:",
    "projects.medicineFeatures": "Key Features:",
    "projects.medicineFeature1": "Patient Records",
    "projects.medicineFeature2": "Medicine Inventory",
    "projects.medicineFeature3": "Appointment Scheduling",
    "projects.medicineFeature4": "Billing & Reports",
    // AutoRent Project
    "projects.autorentTitle": "AutoRent Management System",
    "projects.autorentDesc": "A comprehensive vehicle rental management system using PL/SQL on Oracle Database. Features automated rental cycles, penalty calculations, and full data integrity.",
    "projects.autorentTech": "Technologies:",
    "projects.autorentFeatures": "Key Features:",
    "projects.autorentTechStack": "PL/SQL, Oracle Database, SQL Developer",
    "projects.autorentFeature1": "Inventory Management",
    "projects.autorentFeature2": "Automated Rentals",
    "projects.autorentFeature3": "Penalty Calculation",
    "projects.autorentFeature4": "Advanced PL/SQL",
    // German Learning App
    "projects.germanTitle": "German Learning App",
    "projects.germanDesc": "An interactive React application for learning German writing skills. Users receive Arabic prompts and write the corresponding German sentences with instant feedback.",
    "projects.germanTech": "Technologies:",
    "projects.germanFeatures": "Key Features:",
    "projects.germanTechStack": "React, Tailwind CSS, Vercel",
    "projects.germanFeature1": "Sentence Practice",
    "projects.germanFeature2": "Instant Feedback",
    "projects.germanFeature3": "Arabic Support",
    "projects.germanFeature4": "Interactive UI",
    // DeutschLern Vocabulary App
    "projects.deutschLernTitle": "DeutschLern Vocabulary App",
    "projects.deutschLernDesc": "An advanced German vocabulary learning tool built with React. Features word storage, AI-powered text generation using stored words, and comprehensive vocabulary management for contextual learning.",
    "projects.deutschLernTech": "Technologies:",
    "projects.deutschLernFeatures": "Key Features:",
    "projects.deutschLernTechStack": "React, Tailwind CSS, AI Integration, Vercel",
    "projects.deutschLernFeature1": "Vocabulary Storage",
    "projects.deutschLernFeature2": "AI Text Generation",
    "projects.deutschLernFeature3": "Contextual Learning",
    "projects.deutschLernFeature4": "Word Management",
    // ChatFlow Messaging App
    "projects.chatflowTitle": "ChatFlow Messaging App",
    "projects.chatflowDesc": "A comprehensive real-time messaging application with text chat, voice and video calls, voice messages, and friend search by email. Built for fast and secure communication.",
    "projects.chatflowTech": "Technologies:",
    "projects.chatflowFeatures": "Key Features:",
    "projects.chatflowTechStack": "React, WebRTC, Real-time Communication, Vercel",
    "projects.chatflowFeature1": "Real-time Messaging",
    "projects.chatflowFeature2": "Voice & Video Calls",
    "projects.chatflowFeature3": "Voice Messages",
    "projects.chatflowFeature4": "Friend Search",
    "projects.privateRepo": "Private Repository",

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
    // Contact Section
    "contact.connect": "Let's connect and discuss opportunities, projects, or just have a conversation about technology.",
    "contact.getInTouch": "Get In Touch",
    "contact.feelFree": "Feel free to reach out through any of these channels",
    "contact.sendMessage": "Send Message",
    "contact.getBack": "I'll get back to you as soon as possible",

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
    "hero.name": "جمال ربيعي",
    "hero.tagline": "طالب ماجستير علوم الحاسوب | مطور ويب وتطبيقات | متخصص في الأمن السيبراني والذكاء الاصطناعي",
    "hero.downloadCV": "تحميل السيرة الذاتية",
    "hero.contactMe": "تواصل معي",

    // About Section
    "about.title": "نبذة عني",
    "about.description":
      "أنا طالب ماجستير شغوف في علوم الحاسوب مع خبرة في تطوير الويب والتطبيقات المحمولة والأمن السيبراني وأتمتة الذكاء الاصطناعي. أستمتع بإنشاء حلول مبتكرة واستكشاف التقنيات المتطورة لحل المشاكل الحقيقية.",
    // About Section (Expertise)
    "about.masterStudent": "طالب ماجستير في علوم الحاسوب",
    "about.webExpert": "خبير تطوير ويب وتطبيقات",
    "about.cyberExpert": "مهتم بالأمن السيبراني",
    "about.aiExpert": "متخصص في أتمتة وكلاء الذكاء الاصطناعي",
    "about.passion": "شغوف بإنشاء حلول مبتكرة واستكشاف التقنيات المتطورة",
    // About Section (Expertise Cards)
    "about.webTitle": "تطوير الويب",
    "about.webDesc": "تطوير متكامل باستخدام أحدث الأطر",
    "about.mobileTitle": "تطوير التطبيقات المحمولة",
    "about.mobileDesc": "تطبيقات محمولة متعددة المنصات",
    "about.cyberTitle": "الأمن السيبراني",
    "about.cyberDesc": "ممارسات تطوير تركز على الأمان",
    "about.aiTitle": "أتمتة الذكاء الاصطناعي",
    "about.aiDesc": "أنظمة وكلاء ذكية وأتمتة",

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
    // Projects Section
    "projects.hajjTitle": "منصة الحج والعمرة",
    "projects.hajjDesc": "منصة ويب شاملة لإدارة خدمات الحج والعمرة مع نظام الحجز وإدارة المستخدمين ودمج الدفع.",
    "projects.hajjTech": ":التقنيات",
    "projects.hajjFeatures": ":المميزات الرئيسية",
    "projects.hajjTechStack": "HTML، CSS، JavaScript، Node.js، SQL",
    "projects.hajjFeature1": "نظام الحجز",
    "projects.hajjFeature2": "إدارة المستخدمين",
    "projects.hajjFeature3": "دمج الدفع",
    "projects.hajjFeature4": "لوحة تحكم المسؤول",
    "projects.lexicalTitle": "محلل لغوي بلغة C",
    "projects.lexicalDesc": "محلل لغوي شامل بلغة C لتحليل وترميز الشيفرة المصدرية ودعم لغات متعددة.",
    "projects.lexicalTech": ":التقنيات",
    "projects.lexicalFeatures": ":المميزات الرئيسية",
    "projects.lexicalTechStack": "C",
    "projects.lexicalFeature1": "دعم لغات متعددة",
    "projects.lexicalFeature2": "تحليل الشيفرة",
    "projects.lexicalFeature3": "تقارير الأخطاء",
    "projects.lexicalFeature4": "تحسين الأداء",
    "projects.campingTitle": "منصة التخييم",
    "projects.campingDesc": "منصة ويب لحجوزات مواقع التخييم مع خرائط تفاعلية وإدارة الحجز وتقييمات المستخدمين.",
    "projects.campingTech": ":التقنيات",
    "projects.campingFeatures": ":المميزات الرئيسية",
    "projects.campingTechStack": "HTML، CSS، PHP، SQL",
    "projects.campingFeature1": "خرائط تفاعلية",
    "projects.campingFeature2": "إدارة الحجز",
    "projects.campingFeature3": "تقييمات المستخدمين",
    "projects.campingFeature4": "متوافق مع الهواتف المحمولة",
    // Paint Project
    "projects.paintTitle": "تطبيق الرسم الرقمي",
    "projects.paintDesc": "تطبيق للرسم الرقمي مع أدوات رسم وطبقات وخيارات تصدير.",
    "projects.paintTech": ":التقنيات",
    "projects.paintFeatures": ":المميزات الرئيسية",
    "projects.paintFeature1": "أدوات الرسم",
    "projects.paintFeature2": "دعم الطبقات",
    "projects.paintFeature3": "خيارات التصدير",
    "projects.paintFeature4": "منتقي الألوان",
    // Exam Project
    "projects.examTitle": "تطبيق مراقبة الامتحانات الآمنة",
    "projects.examDesc": "تطبيق للهاتف للامتحانات الآمنة مع مراقبة التنبيهات الدخيلة (المكالمات، الإشعارات) ومنع الغش.",
    "projects.examTech": ":التقنيات",
    "projects.examFeatures": ":المميزات الرئيسية",
    "projects.examFeature1": "مراقبة التنبيهات الدخيلة مثل المكالمات والإشعارات",
    "projects.examFeature2": "منع الغش",
    "projects.examFeature3": "تنبيهات مباشرة",
    "projects.examFeature4": "تحليلات الامتحان",
    // Medicine Project
    "projects.medicineTitle": "نظام إدارة العيادات والصيدليات",
    "projects.medicineDesc": "نظام لإدارة العيادات والصيدليات مع سجلات المرضى ومخزون الأدوية.",
    "projects.medicineTech": ":التقنيات",
    "projects.medicineFeatures": ":المميزات الرئيسية",
    "projects.medicineFeature1": "سجلات المرضى",
    "projects.medicineFeature2": "مخزون الأدوية",
    "projects.medicineFeature3": "جدولة المواعيد",
    "projects.medicineFeature4": "الفواتير والتقارير",
    // AutoRent Project
    "projects.autorentTitle": "نظام إدارة تأجير السيارات",
    "projects.autorentDesc": "نظام شامل لإدارة تأجير السيارات باستخدام PL/SQL وقاعدة بيانات Oracle. يتميز بدورات تأجير آلية وحساب الغرامات.",
    "projects.autorentTech": ":التقنيات",
    "projects.autorentFeatures": ":المميزات الرئيسية",
    "projects.autorentTechStack": "PL/SQL، Oracle Database، SQL Developer",
    "projects.autorentFeature1": "إدارة المخزون",
    "projects.autorentFeature2": "إدارة التأجير الآلي",
    "projects.autorentFeature3": "حساب الغرامات",
    "projects.autorentFeature4": "PL/SQL متقدم",
    // German Learning App
    "projects.germanTitle": "تطبيق تعلم الألمانية",
    "projects.germanDesc": "تطبيق تفاعلي بـ React لتعلم مهارات الكتابة بالألمانية. يتلقى المستخدمون جملاً بالعربية ويكتبون المقابل بالألمانية مع تصحيح فوري.",
    "projects.germanTech": ":التقنيات",
    "projects.germanFeatures": ":المميزات الرئيسية",
    "projects.germanTechStack": "React، Tailwind CSS، Vercel",
    "projects.germanFeature1": "ممارسة الجمل",
    "projects.germanFeature2": "تصحيح فوري",
    "projects.germanFeature3": "دعم اللغة العربية",
    "projects.germanFeature4": "واجهة تفاعلية",
    // DeutschLern Vocabulary App
    "projects.deutschLernTitle": "تطبيق DeutschLern للمفردات",
    "projects.deutschLernDesc": "أداة متقدمة لتعلم المفردات الألمانية بنيت بـ React. يتضمن تخزين الكلمات، توليد نصوص بالذكاء الاصطناعي باستخدام الكلمات المخزنة، وإدارة شاملة للمفردات للتعلم السياقي.",
    "projects.deutschLernTech": ":التقنيات",
    "projects.deutschLernFeatures": ":المميزات الرئيسية",
    "projects.deutschLernTechStack": "React، Tailwind CSS، تكامل الذكاء الاصطناعي، Vercel",
    "projects.deutschLernFeature1": "تخزين المفردات",
    "projects.deutschLernFeature2": "توليد النصوص بالذكاء الاصطناعي",
    "projects.deutschLernFeature3": "التعلم السياقي",
    "projects.deutschLernFeature4": "إدارة الكلمات",
    // ChatFlow Messaging App
    "projects.chatflowTitle": "تطبيق ChatFlow للدردشة",
    "projects.chatflowDesc": "تطبيق دردشة شامل في الوقت الفعلي مع الرسائل النصية والمكالمات الصوتية والفيديو والرسائل الصوتية والبحث عن الأصدقاء بالبريد الإلكتروني. مبني للتواصل السريع والآمن.",
    "projects.chatflowTech": ":التقنيات",
    "projects.chatflowFeatures": ":المميزات الرئيسية",
    "projects.chatflowTechStack": "React، WebRTC، التواصل الفوري، Vercel",
    "projects.chatflowFeature1": "رسائل فورية",
    "projects.chatflowFeature2": "مكالمات صوتية وفيديو",
    "projects.chatflowFeature3": "رسائل صوتية",
    "projects.chatflowFeature4": "البحث عن الأصدقاء",
    "projects.privateRepo": "مستودع خاص",

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
    // Contact Section
    "contact.connect": "لنتواصل ونناقش الفرص أو المشاريع أو نتحدث عن التقنية.",
    "contact.getInTouch": "تواصل معي",
    "contact.feelFree": "لا تتردد في التواصل عبر أي من هذه القنوات",
    "contact.sendMessage": "إرسال الرسالة",
    "contact.getBack": "سأرد عليك في أقرب وقت ممكن",

    // Footer
    "footer.built": "تم البناء باستخدام Next.js و Tailwind CSS",
    "footer.rights": "© 2025 جمال ربيعي – جميع الحقوق محفوظة",
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
    // About Section (Expertise)
    "about.masterStudent": "Étudiant en Master Informatique",
    "about.webExpert": "Expert en Développement Web & Mobile",
    "about.cyberExpert": "Passionné de Cybersécurité",
    "about.aiExpert": "Spécialiste en Automatisation IA",
    "about.passion": "Passionné par la création de solutions innovantes et l'exploration des technologies de pointe",
    // About Section (Expertise Cards)
    "about.webTitle": "Développement Web",
    "about.webDesc": "Développement full-stack avec des frameworks modernes",
    "about.mobileTitle": "Développement Mobile",
    "about.mobileDesc": "Applications mobiles multiplateformes",
    "about.cyberTitle": "Cybersécurité",
    "about.cyberDesc": "Pratiques de développement axées sur la sécurité",
    "about.aiTitle": "Automatisation IA",
    "about.aiDesc": "Systèmes d'agents intelligents et automatisation",

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
    // Projects Section
    "projects.hajjTitle": "Plateforme Hajj & Omra",
    "projects.hajjDesc": "Plateforme web complète pour la gestion des services Hajj et Omra avec système de réservation, gestion des utilisateurs et intégration du paiement.",
    "projects.hajjTech": "Technologies :",
    "projects.hajjFeatures": "Principales fonctionnalités :",
    "projects.hajjTechStack": "HTML, CSS, JavaScript, Node.js, SQL",
    "projects.hajjFeature1": "Système de réservation",
    "projects.hajjFeature2": "Gestion des utilisateurs",
    "projects.hajjFeature3": "Intégration du paiement",
    "projects.hajjFeature4": "Tableau de bord administrateur",
    "projects.lexicalTitle": "Analyseur Lexical en C",
    "projects.lexicalDesc": "Analyseur lexical complet en C pour l'analyse et la tokenisation du code source, prenant en charge plusieurs langages.",
    "projects.lexicalTech": "Technologies :",
    "projects.lexicalFeatures": "Principales fonctionnalités :",
    "projects.lexicalTechStack": "C",
    "projects.lexicalFeature1": "Support multilingue",
    "projects.lexicalFeature2": "Tokenisation",
    "projects.lexicalFeature3": "Rapport d'erreurs",
    "projects.lexicalFeature4": "Optimisé pour la performance",
    "projects.campingTitle": "Plateforme de Camping",
    "projects.campingDesc": "Plateforme web pour la réservation de sites de camping avec cartes interactives, gestion des réservations et avis utilisateurs.",
    "projects.campingTech": "Technologies :",
    "projects.campingFeatures": "Principales fonctionnalités :",
    "projects.campingTechStack": "HTML, CSS, PHP, SQL",
    "projects.campingFeature1": "Cartes interactives",
    "projects.campingFeature2": "Gestion des réservations",
    "projects.campingFeature3": "Avis utilisateurs",
    "projects.campingFeature4": "Compatible mobile",
    // Paint Project
    "projects.paintTitle": "Application de peinture numérique",
    "projects.paintDesc": "Application de peinture numérique avec outils de dessin, calques et options d'export.",
    "projects.paintTech": "Technologies :",
    "projects.paintFeatures": "Principales fonctionnalités :",
    "projects.paintFeature1": "Outils de dessin",
    "projects.paintFeature2": "Support des calques",
    "projects.paintFeature3": "Options d'export",
    "projects.paintFeature4": "Sélecteur de couleurs",
    // Exam Project
    "projects.examTitle": "Application mobile de surveillance d'examen sécurisé",
    "projects.examDesc": "Application mobile pour examens en ligne sécurisés avec surveillance des alertes entrantes (appels, notifications) et prévention de la triche.",
    "projects.examTech": "Technologies :",
    "projects.examFeatures": "Principales fonctionnalités :",
    "projects.examFeature1": "Surveillance des alertes entrantes (appels, notifications)",
    "projects.examFeature2": "Prévention de la triche",
    "projects.examFeature3": "Alertes en direct",
    "projects.examFeature4": "Analytique des examens",
    // Medicine Project
    "projects.medicineTitle": "Système de gestion médicale",
    "projects.medicineDesc": "Système de gestion pour cliniques et pharmacies avec dossiers patients et inventaire des médicaments.",
    "projects.medicineTech": "Technologies :",
    "projects.medicineFeatures": "Principales fonctionnalités :",
    "projects.medicineFeature1": "Dossiers patients",
    "projects.medicineFeature2": "Inventaire des médicaments",
    "projects.medicineFeature3": "Planification des rendez-vous",
    "projects.medicineFeature4": "Facturation & rapports",
    // AutoRent Project
    "projects.autorentTitle": "Système de Gestion AutoRent",
    "projects.autorentDesc": "Conception et implémentation d’un système de location de véhicules utilisant PL/SQL sur Oracle Database. Gestion automatisée des locations et calcul des pénalités.",
    "projects.autorentTech": "Technologies :",
    "projects.autorentFeatures": "Principales fonctionnalités :",
    "projects.autorentTechStack": "PL/SQL, Oracle Database, SQL Developer",
    "projects.autorentFeature1": "Gestion de l’inventaire",
    "projects.autorentFeature2": "Gestion Automatisée des Locations",
    "projects.autorentFeature3": "Calcul des Pénalités",
    "projects.autorentFeature4": "Architecture PL/SQL Avancée",
    // German Learning App
    "projects.germanTitle": "Application d'Apprentissage de l'Allemand",
    "projects.germanDesc": "Une application interactive React pour apprendre l'écriture allemande. Les utilisateurs reçoivent des phrases en arabe et écrivent les phrases allemandes correspondantes avec un retour instantané.",
    "projects.germanTech": "Technologies :",
    "projects.germanFeatures": "Principales fonctionnalités :",
    "projects.germanTechStack": "React, Tailwind CSS, Vercel",
    "projects.germanFeature1": "Pratique de phrases",
    "projects.germanFeature2": "Retour instantané",
    "projects.germanFeature3": "Support Arabe",
    "projects.germanFeature4": "Interface Interactive",
    // DeutschLern Vocabulary App
    "projects.deutschLernTitle": "Application DeutschLern de Vocabulaire",
    "projects.deutschLernDesc": "Un outil avancé d'apprentissage du vocabulaire allemand construit avec React. Comprend le stockage de mots, la génération de textes IA utilisant les mots stockés, et une gestion complète du vocabulaire pour l'apprentissage contextuel.",
    "projects.deutschLernTech": "Technologies :",
    "projects.deutschLernFeatures": "Principales fonctionnalités :",
    "projects.deutschLernTechStack": "React, Tailwind CSS, Intégration IA, Vercel",
    "projects.deutschLernFeature1": "Stockage du vocabulaire",
    "projects.deutschLernFeature2": "Génération de texte IA",
    "projects.deutschLernFeature3": "Apprentissage contextuel",
    "projects.deutschLernFeature4": "Gestion des mots",
    // ChatFlow Messaging App
    "projects.chatflowTitle": "Application de Messagerie ChatFlow",
    "projects.chatflowDesc": "Une application de messagerie en temps réel complète avec chat textuel, appels vocaux et vidéo, messages vocaux et recherche d'amis par email. Conçue pour une communication rapide et sécurisée.",
    "projects.chatflowTech": "Technologies :",
    "projects.chatflowFeatures": "Principales fonctionnalités :",
    "projects.chatflowTechStack": "React, WebRTC, Communication en temps réel, Vercel",
    "projects.chatflowFeature1": "Messagerie en temps réel",
    "projects.chatflowFeature2": "Appels vocaux et vidéo",
    "projects.chatflowFeature3": "Messages vocaux",
    "projects.chatflowFeature4": "Recherche d'amis",
    "projects.privateRepo": "Dépôt privé",

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
    // Contact Section
    "contact.connect": "Connectons-nous et discutons d'opportunités, de projets ou simplement de technologie.",
    "contact.getInTouch": "Me Contacter",
    "contact.feelFree": "N'hésitez pas à me contacter via l'un de ces canaux",
    "contact.sendMessage": "Envoyer le Message",
    "contact.getBack": "Je vous répondrai dès que possible",

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
    // About Section (Expertise)
    "about.masterStudent": "Informatik-Master-Student",
    "about.webExpert": "Web- & Mobile-Entwicklungsexperte",
    "about.cyberExpert": "Cybersicherheit-Enthusiast",
    "about.aiExpert": "KI-Agenten-Automatisierungsspezialist",
    "about.passion": "Leidenschaftlich für innovative Lösungen und modernste Technologien",
    // About Section (Expertise Cards)
    "about.webTitle": "Web-Entwicklung",
    "about.webDesc": "Full-Stack-Entwicklung mit modernen Frameworks",
    "about.mobileTitle": "Mobile-Entwicklung",
    "about.mobileDesc": "Plattformübergreifende mobile Anwendungen",
    "about.cyberTitle": "Cybersicherheit",
    "about.cyberDesc": "Sicherheitsorientierte Entwicklungspraktiken",
    "about.aiTitle": "KI-Automatisierung",
    "about.aiDesc": "Intelligente Agentensysteme und Automatisierung",

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
    // Projects Section
    "projects.hajjTitle": "Hajj & Umrah Web-Plattform",
    "projects.hajjDesc": "Umfassende Web-Plattform zur Verwaltung von Hajj- und Umrah-Diensten mit Buchungssystem, Benutzerverwaltung und Zahlungsintegration.",
    "projects.hajjTech": "Technologien:",
    "projects.hajjFeatures": "Hauptfunktionen:",
    "projects.hajjTechStack": "HTML, CSS, JavaScript, Node.js, SQL",
    "projects.hajjFeature1": "Buchungssystem",
    "projects.hajjFeature2": "Benutzerverwaltung",
    "projects.hajjFeature3": "Zahlungsintegration",
    "projects.hajjFeature4": "Admin-Dashboard",
    "projects.lexicalTitle": "Lexikalischer Analysator in C",
    "projects.lexicalDesc": "Umfassender lexikalischer Analysator in C zum Parsen und Tokenisieren von Quellcode mit Unterstützung mehrerer Programmiersprachen.",
    "projects.lexicalTech": "Technologien:",
    "projects.lexicalFeatures": "Hauptfunktionen:",
    "projects.lexicalTechStack": "C",
    "projects.lexicalFeature1": "Mehrsprachige Unterstützung",
    "projects.lexicalFeature2": "Tokenisierung",
    "projects.lexicalFeature3": "Fehlerberichterstattung",
    "projects.lexicalFeature4": "Leistungsoptimiert",
    "projects.campingTitle": "Camping-Plattform",
    "projects.campingDesc": "Web-Plattform für Campingplatzreservierungen mit interaktiven Karten, Buchungsmanagement und Nutzerbewertungen.",
    "projects.campingTech": "Technologien:",
    "projects.campingFeatures": "Hauptfunktionen:",
    "projects.campingTechStack": "HTML, CSS, PHP, SQL",
    "projects.campingFeature1": "Interaktive Karten",
    "projects.campingFeature2": "Buchungsmanagement",
    "projects.campingFeature3": "Nutzerbewertungen",
    "projects.campingFeature4": "Mobilfreundlich",
    // Paint Project
    "projects.paintTitle": "Digitale Malanwendung",
    "projects.paintDesc": "Digitale Mal-App mit Zeichenwerkzeugen, Ebenen und Exportoptionen.",
    "projects.paintTech": "Technologien:",
    "projects.paintFeatures": "Hauptfunktionen:",
    "projects.paintFeature1": "Zeichenwerkzeuge",
    "projects.paintFeature2": "Ebenenunterstützung",
    "projects.paintFeature3": "Exportoptionen",
    "projects.paintFeature4": "Farbwähler",
    // Exam Project
    "projects.examTitle": "Sichere Prüfungsüberwachungs-App",
    "projects.examDesc": "Mobile App für sichere Online-Prüfungen mit Überwachung eingehender Benachrichtigungen (Anrufe, Mitteilungen) und Betrugsprävention.",
    "projects.examTech": "Technologien:",
    "projects.examFeatures": "Hauptfunktionen:",
    "projects.examFeature1": "Überwachung eingehender Benachrichtigungen (Anrufe, Mitteilungen)",
    "projects.examFeature2": "Betrugsprävention",
    "projects.examFeature3": "Live-Benachrichtigungen",
    "projects.examFeature4": "Prüfungsanalytik",
    // Medicine Project
    "projects.medicineTitle": "Medizinisches Verwaltungssystem",
    "projects.medicineDesc": "Verwaltungssystem für Kliniken und Apotheken mit Patientenakten und Medikamentenbestand.",
    "projects.medicineTech": "Technologien:",
    "projects.medicineFeatures": "Hauptfunktionen:",
    "projects.medicineFeature1": "Patientenakten",
    "projects.medicineFeature2": "Medikamentenbestand",
    "projects.medicineFeature3": "Terminplanung",
    "projects.medicineFeature4": "Abrechnung & Berichte",
    // AutoRent Project
    "projects.autorentTitle": "AutoRent Managementsystem",
    "projects.autorentDesc": "Ein umfassendes Fahrzeugvermietungssystem basierend auf PL/SQL und Oracle Database. Bietet automatisierte Mietzyklen und Strafberechnungen.",
    "projects.autorentTech": "Technologien:",
    "projects.autorentFeatures": "Hauptfunktionen:",
    "projects.autorentTechStack": "PL/SQL, Oracle Database, SQL Developer",
    "projects.autorentFeature1": "Bestandsverwaltung",
    "projects.autorentFeature2": "Automatisierte Vermietung",
    "projects.autorentFeature3": "Strafberechnung",
    "projects.autorentFeature4": "Fortgeschrittenes PL/SQL",
    // German Learning App
    "projects.germanTitle": "Deutsch-Lern-App",
    "projects.germanDesc": "Eine interaktive React-Anwendung zum Erlernen der deutschen Schreibfähigkeiten. Benutzer erhalten arabische Eingabeaufforderungen und schreiben die entsprechenden deutschen Sätze mit sofortigem Feedback.",
    "projects.germanTech": "Technologien:",
    "projects.germanFeatures": "Hauptfunktionen:",
    "projects.germanTechStack": "React, Tailwind CSS, Vercel",
    "projects.germanFeature1": "Satzübung",
    "projects.germanFeature2": "Sofortiges Feedback",
    "projects.germanFeature3": "Arabische Unterstützung",
    "projects.germanFeature4": "Interaktive UI",
    // DeutschLern Vocabulary App
    "projects.deutschLernTitle": "DeutschLern Vokabel-App",
    "projects.deutschLernDesc": "Ein fortschrittliches Tool zum Lernen deutscher Vokabeln, gebaut mit React. Enthält Wortspeicherung, KI-gesteuerte Textgenerierung mit gespeicherten Wörtern und umfassendes Vokabelmanagement für kontextuelles Lernen.",
    "projects.deutschLernTech": "Technologien:",
    "projects.deutschLernFeatures": "Hauptfunktionen:",
    "projects.deutschLernTechStack": "React, Tailwind CSS, KI-Integration, Vercel",
    "projects.deutschLernFeature1": "Vokabelspeicherung",
    "projects.deutschLernFeature2": "KI-Textgenerierung",
    "projects.deutschLernFeature3": "Kontextuelles Lernen",
    "projects.deutschLernFeature4": "Wortverwaltung",
    // ChatFlow Messaging App
    "projects.chatflowTitle": "ChatFlow Messaging-App",
    "projects.chatflowDesc": "Eine umfassende Echtzeit-Messaging-Anwendung mit Textchat, Sprach- und Videoanrufen, Sprachnachrichten und Freundessuche per E-Mail. Entwickelt für schnelle und sichere Kommunikation.",
    "projects.chatflowTech": "Technologien:",
    "projects.chatflowFeatures": "Hauptfunktionen:",
    "projects.chatflowTechStack": "React, WebRTC, Echtzeit-Kommunikation, Vercel",
    "projects.chatflowFeature1": "Echtzeit-Messaging",
    "projects.chatflowFeature2": "Sprach- & Videoanrufe",
    "projects.chatflowFeature3": "Sprachnachrichten",
    "projects.chatflowFeature4": "Freundessuche",
    "projects.privateRepo": "Privates Repository",

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
    // Contact Section
    "contact.connect": "Lassen Sie uns über Möglichkeiten, Projekte oder einfach über Technologie sprechen.",
    "contact.getInTouch": "Kontaktiere Mich",
    "contact.feelFree": "Kontaktieren Sie mich gerne über einen dieser Kanäle",
    "contact.sendMessage": "Nachricht Senden",
    "contact.getBack": "Ich melde mich so schnell wie möglich zurück",

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
    // About Section (Expertise)
    "about.masterStudent": "Магистр Компьютерных Наук",
    "about.webExpert": "Эксперт по Веб и Мобильной Разработке",
    "about.cyberExpert": "Энтузиаст Кибербезопасности",
    "about.aiExpert": "Специалист по Автоматизации ИИ-Агентов",
    "about.passion": "Увлечен созданием инновационных решений и изучением передовых технологий",
    // About Section (Expertise Cards)
    "about.webTitle": "Веб-Разработка",
    "about.webDesc": "Full-stack разработка с современными фреймворками",
    "about.mobileTitle": "Мобильная Разработка",
    "about.mobileDesc": "Кроссплатформенные мобильные приложения",
    "about.cyberTitle": "Кибербезопасность",
    "about.cyberDesc": "Ориентированные на безопасность методы разработки",
    "about.aiTitle": "Автоматизация ИИ",
    "about.aiDesc": "Интеллектуальные агентные системы и автоматизация",

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
    // Projects Section
    "projects.hajjTitle": "Веб-платформа для Хаджа и Умры",
    "projects.hajjDesc": "Комплексная веб-платформа для управления услугами Хаджа и Умры с системой бронирования, управлением пользователями и интеграцией платежей.",
    "projects.hajjTech": "Технологии:",
    "projects.hajjFeatures": "Ключевые функции:",
    "projects.hajjTechStack": "HTML, CSS, JavaScript, Node.js, SQL",
    "projects.hajjFeature1": "Система бронирования",
    "projects.hajjFeature2": "Управление пользователями",
    "projects.hajjFeature3": "Интеграция платежей",
    "projects.hajjFeature4": "Админ-панель",
    "projects.lexicalTitle": "Лексический анализатор на C",
    "projects.lexicalDesc": "Комплексный лексический анализатор на C для разбора и токенизации исходного кода с поддержкой нескольких языков программирования.",
    "projects.lexicalTech": "Технологии:",
    "projects.lexicalFeatures": "Ключевые функции:",
    "projects.lexicalTechStack": "C",
    "projects.lexicalFeature1": "Поддержка нескольких языков",
    "projects.lexicalFeature2": "Токенизация",
    "projects.lexicalFeature3": "Отчет об ошибках",
    "projects.lexicalFeature4": "Оптимизация производительности",
    "projects.campingTitle": "Платформа для кемпинга",
    "projects.campingDesc": "Веб-платформа для бронирования кемпингов с интерактивными картами, управлением бронированиями и отзывами пользователей.",
    "projects.campingTech": "Технологии:",
    "projects.campingFeatures": "Ключевые функции:",
    "projects.campingTechStack": "HTML, CSS, PHP, SQL",
    "projects.campingFeature1": "Интерактивные карты",
    "projects.campingFeature2": "Управление бронированиями",
    "projects.campingFeature3": "Отзывы пользователей",
    "projects.campingFeature4": "Адаптивный дизайн",
    // Paint Project
    "projects.paintTitle": "Приложение для цифрового рисования",
    "projects.paintDesc": "Приложение для рисования с инструментами, слоями и экспортом.",
    "projects.paintTech": "Технологии:",
    "projects.paintFeatures": "Ключевые функции:",
    "projects.paintFeature1": "Инструменты рисования",
    "projects.paintFeature2": "Поддержка слоев",
    "projects.paintFeature3": "Опции экспорта",
    "projects.paintFeature4": "Палитра цветов",
    // Exam Project
    "projects.examTitle": "Мобильное приложение для безопасного мониторинга экзаменов",
    "projects.examDesc": "Мобильное приложение для безопасных онлайн-экзаменов с мониторингом входящих оповещений (звонки, уведомления) и предотвращением мошенничества.",
    "projects.examTech": "Технологии:",
    "projects.examFeatures": "Ключевые функции:",
    "projects.examFeature1": "Мониторинг входящих оповещений (звонки, уведомления)",
    "projects.examFeature2": "Предотвращение мошенничества",
    "projects.examFeature3": "Мгновенные оповещения",
    "projects.examFeature4": "Аналитика экзаменов",
    // Medicine Project
    "projects.medicineTitle": "Медицинская система управления",
    "projects.medicineDesc": "Система управления для клиник и аптек с записями пациентов и инвентаризацией лекарств.",
    "projects.medicineTech": "Технологии:",
    "projects.medicineFeatures": "Ключевые функции:",
    "projects.medicineFeature1": "Записи пациентов",
    "projects.medicineFeature2": "Инвентарь лекарств",
    "projects.medicineFeature3": "Запись на прием",
    "projects.medicineFeature4": "Счета и отчеты",
    // AutoRent Project
    "projects.autorentTitle": "Система Управления AutoRent",
    "projects.autorentDesc": "Комплексная система управления прокатом автомобилей с использованием PL/SQL и Oracle Database. Автоматизированные циклы аренды и расчет штрафов.",
    "projects.autorentTech": "Технологии:",
    "projects.autorentFeatures": "Ключевые функции:",
    "projects.autorentTechStack": "PL/SQL, Oracle Database, SQL Developer",
    "projects.autorentFeature1": "Управление инвентарем",
    "projects.autorentFeature2": "Автоматизация аренды",
    "projects.autorentFeature3": "Расчет штрафов",
    "projects.autorentFeature4": "Продвинутый PL/SQL",
    // German Learning App
    "projects.germanTitle": "Приложение для Изучения Немецкого",
    "projects.germanDesc": "Интерактивное приложение React для обучения письму на немецком языке. Пользователи получают подсказки на арабском и пишут соответствующие немецкие предложения с мгновенной обратной связью.",
    "projects.germanTech": "Технологии:",
    "projects.germanFeatures": "Ключевые функции:",
    "projects.germanTechStack": "React, Tailwind CSS, Vercel",
    "projects.germanFeature1": "Практика предложений",
    "projects.germanFeature2": "Мгновенная обратная связь",
    "projects.germanFeature3": "Поддержка арабского",
    "projects.germanFeature4": "Интерактивный интерфейс",
    // DeutschLern Vocabulary App
    "projects.deutschLernTitle": "Приложение DeutschLern для Словарного Запаса",
    "projects.deutschLernDesc": "Продвинутый инструмент для изучения немецкого словарного запаса, построенный на React. Включает хранение слов, генерацию текста на основе ИИ с использованием сохраненных слов и полное управление словарным запасом для контекстного обучения.",
    "projects.deutschLernTech": "Технологии:",
    "projects.deutschLernFeatures": "Ключевые функции:",
    "projects.deutschLernTechStack": "React, Tailwind CSS, Интеграция ИИ, Vercel",
    "projects.deutschLernFeature1": "Хранение словарного запаса",
    "projects.deutschLernFeature2": "Генерация текста ИИ",
    "projects.deutschLernFeature3": "Контекстное обучение",
    "projects.deutschLernFeature4": "Управление словами",
    // ChatFlow Messaging App
    "projects.chatflowTitle": "Приложение для Обмена Сообщениями ChatFlow",
    "projects.chatflowDesc": "Комплексное приложение для обмена сообщениями в реальном времени с текстовым чатом, голосовыми и видеозвонками, голосовыми сообщениями и поиском друзей по электронной почте. Создано для быстрого и безопасного общения.",
    "projects.chatflowTech": "Технологии:",
    "projects.chatflowFeatures": "Ключевые функции:",
    "projects.chatflowTechStack": "React, WebRTC, Связь в реальном времени, Vercel",
    "projects.chatflowFeature1": "Обмен сообщениями в реальном времени",
    "projects.chatflowFeature2": "Голосовые и видеозвонки",
    "projects.chatflowFeature3": "Голосовые сообщения",
    "projects.chatflowFeature4": "Поиск друзей",
    "projects.privateRepo": "Частный репозиторий",

    // Skills Section
    "skills.title": "Навыки",
    "skills.programming": "Языки программирования",
    "skills.web": "Веб-Разработка",
    "skills.mobile": "Мобильная Разработка",
    "skills.databases": "Базы данных",
    "skills.cybersecurity": "Кибербезопасность",
    "skills.ai": "ИИ-агенты и автоматизация",
    "skills.tools": "Инструменты",
    "skills.soft": "Мягкие навыки",

    // Languages Section
    "languages.title": "Языки",
    "languages.native": "Родной",
    "languages.advanced": "Продвинутый",
    "languages.intermediate": "Средний",
    "languages.basic": "Базовый",

    // Contact Section
    "contact.title": "Контакты",
    "contact.form.name": "Имя",
    "contact.form.email": "Электронная почта",
    "contact.form.message": "Сообщение",
    "contact.form.send": "Отправить сообщение",
    "contact.form.success": "Сообщение успешно отправлено!",
    // Contact Section
    "contact.connect": "Давайте свяжемся и обсудим возможности, проекты или просто поговорим о технологиях.",
    "contact.getInTouch": "Связаться со Мной",
    "contact.feelFree": "Свяжитесь со мной через любой из этих каналов",
    "contact.sendMessage": "Отправить Сообщение",
    "contact.getBack": "Я свяжусь с вами как можно скорее",

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
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

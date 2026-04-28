// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          nav: {
            role: "Systems Analyst",
            about: "About me",
            projects: "Projects",
            experience: "Experience",
            certs: "Certifications",
            contact: "Contact",
            switch_lang: "Cambiar a Español",
          },
          hero: {
            roadmap_label: "My Journey",
            title_top: "Systems Analyst with",
            title_bottom: "hands on the code.",
            quote_start:
              "With over a decade of experience, I am constantly evolving from",
            quote_bold: "integral Full Stack development",
            quote_end:
              "towards microservices architecture and process automation.",
            description:
              "My approach combines a user-centric reactive Frontend with a high-availability Backend, ensuring resilient systems in high-demand environments.",
            btn_exp: "Explore Experience",
            btn_contact: "Contact Now",
            alt_text: "Federin Gutierrez - Systems Analyst & Architecture",
            tech_tagline: "Systems Analyst // Full Stack Core",
          },
          certs: {
            title: "Certifications",
            view_list: "View list",
            specialized_training: "Specialized Training",
            validate: "Validate Certificate",
          },
          contact: {
            title: "Let's build something",
            subtitle: "exceptional.",
            description:
              "I am currently open to new opportunities as a Senior Systems Analyst or Lead Developer. If you have a project or a position that fits my profile, let's talk.",
            name: "Full Name",
            email: "Email Address",
            message: "Message",
            send: "Send Message",
            placeholder: "Tell me about your project...",
            max_chars: "Professional brief",
            limit: "Limit: 500",
            email_error: "Please enter a valid email address",
          },
        },
      },
      es: {
        translation: {
          nav: {
            role: "Analista de Sistemas",
            about: "Acerca de mi",
            projects: "Proyectos",
            experience: "Experiencia",
            certs: "Certificaciones",
            contact: "Contacto",
            switch_lang: "Switch to English",
          },
          hero: {
            roadmap_label: "Mi Trayectoria",
            title_top: "Analista con las",
            title_bottom: "manos en el código.",
            quote_start:
              "Con más de una década de trayectoria, evoluciono constantemente desde el desarrollo",
            quote_bold: "Full Stack integral",
            quote_end:
              "hacia la arquitectura de microservicios y automatización de procesos.",
            description:
              "Mi enfoque combina un Frontend reactivo centrado en el usuario con un Backend de alta disponibilidad, garantizando sistemas resilientes en entornos de alta demanda.",
            btn_exp: "Explorar Experiencia",
            btn_contact: "Contactar Ahora",
            alt_text: "Federin Gutierrez - Analista de Sistemas y Arquitectura",
            tech_tagline: "Analista de Sistemas // Full Stack Core",
          },
          certs: {
            title: "Certificaciones",
            view_list: "Ver lista",
            specialized_training: "Formación Especializada",
            validate: "Validar Certificado",
          },
          contact: {
            title: "Construyamos algo",
            subtitle: "excepcional.",
            description:
              "Actualmente estoy abierto a nuevas oportunidades como Analista de Sistemas Senior o Lead Developer. Si tienes un proyecto o una vacante que encaje con mi perfil, hablemos.",
            name: "Nombre Completo",
            email: "Correo Electrónico",
            message: "Mensaje",
            send: "Enviar Mensaje",
            placeholder: "Cuéntame sobre tu proyecto...",
            max_chars: "Breve y profesional",
            limit: "Límite: 500",
            email_error: "Por favor, introduce un correo electrónico válido",
          },
        },
      },
    },
  });

export default i18n;

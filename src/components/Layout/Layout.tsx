
import React from "react";
import Head from "next/head";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  const { dir, language } = useLanguage();
  
  const fullTitle = title 
    ? `${title} | Outside Instalaciones` 
    : "Outside Instalaciones - Expertos en Carpintería de Madera";
  
  const metaDescription = description || 
    "Expertos en instalaciones y mantenimiento de carpintería de madera. Servicios de instalación, reparación y mantenimiento para proyectos residenciales e industriales.";

  return (
    <div dir={dir} className={language === "ar" ? "font-arabic" : "font-sans"}>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Language alternates for SEO */}
        <link rel="alternate" hrefLang="es" href={`https://outsideinstalaciones.com${language === "es" ? "" : "/es"}`} />
        <link rel="alternate" hrefLang="ca" href={`https://outsideinstalaciones.com${language === "ca" ? "" : "/ca"}`} />
        <link rel="alternate" hrefLang="en" href={`https://outsideinstalaciones.com${language === "en" ? "" : "/en"}`} />
        <link rel="alternate" hrefLang="ar" href={`https://outsideinstalaciones.com${language === "ar" ? "" : "/ar"}`} />
        <link rel="alternate" hrefLang="x-default" href="https://outsideinstalaciones.com" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

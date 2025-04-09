
import React from "react";
import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
  const { t, dir } = useLanguage();

  return (
    <Layout title={t("about")} description="Somos expertos en instalaciones y mantenimiento de carpintería de madera con años de experiencia en el sector.">
      <section className="py-12 bg-amber-50" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">{t("about")}</h1>
            <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-amber-900 mb-4">{t("aboutTitle")}</h2>
              <p className="text-gray-700 mb-4">{t("aboutDescription1")}</p>
              <p className="text-gray-700 mb-4">{t("aboutDescription2")}</p>
              <p className="text-gray-700 mb-4">{t("aboutDescription3")}</p>
              <p className="text-gray-700 mb-6">
                En Outside Instalaciones, nos dedicamos a ofrecer servicios de carpintería de la más alta calidad. Cada proyecto es abordado con atención meticulosa al detalle, asegurando resultados excepcionales que superan las expectativas de nuestros clientes.
              </p>
            </div>
            
            <div>
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1565766046621-5548ffdf30af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Carpentry workshop" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-amber-800 text-white" dir={dir}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">{t("passionTitle")}</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            {t("passionDescription")}
          </p>
          <Link href="/contact" className="inline-block bg-white text-amber-900 hover:bg-amber-100 px-6 py-3 rounded-md text-lg font-medium transition-colors">
            {t("requestQuote")}
          </Link>
        </div>
      </section>
    </Layout>
  );
}

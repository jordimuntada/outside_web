
import React from "react";
import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServicesPage() {
  const { t, dir } = useLanguage();

  const services = [
    {
      id: "installation",
      title: t("installationTitle"),
      description: t("installationDescription"),
      extendedDescription: "Nuestro servicio de instalación incluye el montaje profesional de todo tipo de elementos de carpintería de madera. Trabajamos con parquet y suelos de madera, puertas interiores y exteriores, armarios empotrados y vestidores, revestimientos y forrado de paredes, muebles de cocina a medida, y todo tipo de estructuras de madera. Cada instalación se realiza con precisión y atención al detalle, asegurando un acabado perfecto y duradero.",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "🔨"
    },
    {
      id: "repair",
      title: t("repairTitle"),
      description: t("repairDescription"),
      extendedDescription: "Nuestro servicio de reparación aborda cualquier tipo de avería o problema relacionado con elementos de carpintería de madera. Desde la reparación de puertas que no cierran correctamente, suelos dañados o con desgaste, hasta la restauración de muebles y estructuras de madera deterioradas. Diagnosticamos cada problema con precisión y ofrecemos soluciones eficientes y duraderas, devolviendo la funcionalidad y estética a sus elementos de madera.",
      image: "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "🔧"
    },
    {
      id: "maintenance",
      title: t("maintenanceTitle"),
      description: t("maintenanceDescription"),
      extendedDescription: "Nuestro servicio de mantenimiento está diseñado para preservar y prolongar la vida útil de todos los elementos de carpintería de madera en diferentes tipos de edificios. Ofrecemos programas de mantenimiento preventivo y correctivo para edificios residenciales, hoteles, edificios corporativos, hospitales, cadenas de retail y edificios industriales. El mantenimiento regular incluye inspección, ajuste, limpieza, tratamiento y protección de la madera, asegurando su durabilidad y buen aspecto a lo largo del tiempo.",
      image: "https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "🧰"
    }
  ];

  return (
    <Layout title={t("services")} description="Ofrecemos servicios profesionales de instalación, reparación y mantenimiento de carpintería de madera para proyectos residenciales e industriales.">
      <section className="py-12 bg-amber-50" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">{t("services")}</h1>
            <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">{t("servicesDescription")}</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white" dir={dir}>
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`py-12 ${index !== services.length - 1 ? "border-b border-gray-200" : ""}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 1 ? "order-1 md:order-2" : ""}`}>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h2 className="text-2xl font-bold text-amber-900 mb-4">{service.title}</h2>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <p className="text-gray-700 mb-6">{service.extendedDescription}</p>
                  <Link href="/contact" className="inline-block bg-amber-700 hover:bg-amber-600 text-white px-5 py-2 rounded-md font-medium transition-colors">
                    {t("requestQuote")}
                  </Link>
                </div>
                
                <div className={`${index % 2 === 1 ? "order-2 md:order-1" : ""}`}>
                  <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
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

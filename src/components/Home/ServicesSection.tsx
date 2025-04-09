
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServicesSection() {
  const { t, dir } = useLanguage();

  const services = [
    {
      id: "installation",
      title: t("installationTitle"),
      description: t("installationDescription"),
      icon: "🔨",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "repair",
      title: t("repairTitle"),
      description: t("repairDescription"),
      icon: "🔧",
      image: "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "maintenance",
      title: t("maintenanceTitle"),
      description: t("maintenanceDescription"),
      icon: "🧰",
      image: "https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-16 bg-amber-50" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">{t("servicesTitle")}</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-gray-700">{t("servicesDescription")}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <Link href={`/services#${service.id}`} className="text-amber-700 hover:text-amber-900 font-medium">
                  {t("services")} →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/services" className="inline-block bg-amber-800 hover:bg-amber-700 text-white px-5 py-2 rounded-md font-medium transition-colors">
            {t("services")}
          </Link>
        </div>
      </div>
    </section>
  );
}

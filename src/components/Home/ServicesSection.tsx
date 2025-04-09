
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
      image: "https://images.unsplash.com/photo-1621544140639-77a76594999e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "repair",
      title: t("repairTitle"),
      description: t("repairDescription"),
      image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "maintenance",
      title: t("maintenanceTitle"),
      description: t("maintenanceDescription"),
      image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" dir={dir}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-medium text-center mb-12">{t("servicesTitle")}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href={`/services#${service.id}`} className="text-primary font-medium hover:underline">
                  {t("services")} →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/services" className="tesla-button tesla-button-primary inline-block">
            {t("services")}
          </Link>
        </div>
      </div>
    </section>
  );
}

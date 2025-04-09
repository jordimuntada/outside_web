
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
      image: "https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: "repair",
      title: t("repairTitle"),
      description: t("repairDescription"),
      image: "https://images.pexels.com/photos/3846022/pexels-photo-3846022.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: "maintenance",
      title: t("maintenanceTitle"),
      description: t("maintenanceDescription"),
      image: "https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section className="py-20 bg-[#FEFAE0]" dir={dir}>
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
                <Link href={`/services#${service.id}`} className="text-[#D4A373] font-medium hover:underline">
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

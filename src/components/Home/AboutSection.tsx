
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
  const { t, dir } = useLanguage();

  return (
    <section className="py-16 bg-white" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">{t("aboutTitle")}</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-gray-700 mb-4">{t("aboutDescription1")}</p>
            <p className="text-gray-700 mb-4">{t("aboutDescription2")}</p>
            <p className="text-gray-700 mb-6">{t("aboutDescription3")}</p>
            <Link href="/about" className="inline-block bg-amber-800 hover:bg-amber-700 text-white px-5 py-2 rounded-md font-medium transition-colors">
              {t("about")}
            </Link>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Carpentry workshop" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

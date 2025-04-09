
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
  const { t, dir } = useLanguage();

  return (
    <section className="py-20 bg-white" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-medium text-center mb-12">{t("aboutTitle")}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6 text-lg">{t("aboutDescription1")}</p>
              <p className="text-gray-700 mb-6 text-lg">{t("aboutDescription2")}</p>
              <p className="text-gray-700 mb-8 text-lg">{t("aboutDescription3")}</p>
              <Link href="/about" className="tesla-button tesla-button-primary inline-block">
                {t("about")}
              </Link>
            </div>
            
            <div>
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Carpenter working on wooden furniture" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

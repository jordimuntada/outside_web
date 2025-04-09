import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t, dir } = useLanguage();

  return (
    <section 
      className="tesla-section bg-cover bg-center bg-no-repeat" 
      style={{ 
        backgroundImage: "url('https://images.pexels.com/photos/3637837/pexels-photo-3637837.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        backgroundPosition: "center 30%"
      }}
      dir={dir}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container relative z-10 text-center text-white">
        <h1 className="tesla-heading mb-4">
          {t("expertTitle")}
        </h1>
        <p className="tesla-subheading max-w-2xl mx-auto mb-8">
          {t("passionDescription")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link href="/contact" className="tesla-button tesla-button-primary">
            {t("requestQuote")}
          </Link>
          <Link href="/services" className="tesla-button tesla-button-secondary">
            {t("services")}
          </Link>
        </div>
      </div>
    </section>
  );
}
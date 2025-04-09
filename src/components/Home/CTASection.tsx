import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CTASection() {
  const { t, dir } = useLanguage();

  return (
    <section 
      className="py-24 bg-cover bg-center bg-no-repeat relative" 
      style={{ 
        backgroundImage: "url('https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg?auto=compress&cs=tinysrgb&w=1920')"
      }}
      dir={dir}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-medium mb-6">{t("passionTitle")}</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          {t("passionDescription")}
        </p>
        <Link href="/contact" className="tesla-button tesla-button-secondary inline-block">
          {t("requestQuote")}
        </Link>
      </div>
    </section>
  );
}
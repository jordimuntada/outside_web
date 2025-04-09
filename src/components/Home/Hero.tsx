
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t, dir } = useLanguage();

  return (
    <section className="relative bg-amber-900 text-white py-20" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {t("expertTitle")}
          </h1>
          <p className="text-lg md:text-xl mb-8">
            {t("passionDescription")}
          </p>
          <Link href="/contact" className="inline-block bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors">
            {t("requestQuote")}
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}></div>
    </section>
  );
}

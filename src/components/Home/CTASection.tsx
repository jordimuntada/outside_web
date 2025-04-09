
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CTASection() {
  const { t, dir } = useLanguage();

  return (
    <section className="py-16 bg-amber-800 text-white" dir={dir}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">{t("passionTitle")}</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          {t("passionDescription")}
        </p>
        <Link href="/contact" className="inline-block bg-white text-amber-900 hover:bg-amber-100 px-6 py-3 rounded-md text-lg font-medium transition-colors">
          {t("requestQuote")}
        </Link>
      </div>
    </section>
  );
}

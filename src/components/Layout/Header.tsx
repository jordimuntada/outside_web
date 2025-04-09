
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/lib/translations";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="bg-amber-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Link href="/">
            <span className="text-2xl font-bold text-amber-900">Outside Instalaciones</span>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
          <nav className="flex flex-wrap justify-center md:justify-end space-x-1 md:space-x-6 mr-0 md:mr-8">
            <Link href="/" className="px-2 py-1 text-amber-900 hover:text-amber-700 font-medium">
              {t("home")}
            </Link>
            <Link href="/about" className="px-2 py-1 text-amber-900 hover:text-amber-700 font-medium">
              {t("about")}
            </Link>
            <Link href="/services" className="px-2 py-1 text-amber-900 hover:text-amber-700 font-medium">
              {t("services")}
            </Link>
            <Link href="/contact" className="px-2 py-1 text-amber-900 hover:text-amber-700 font-medium">
              {t("contact")}
            </Link>
            <Link href="/legal" className="px-2 py-1 text-amber-900 hover:text-amber-700 font-medium">
              {t("legal")}
            </Link>
          </nav>
          
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}

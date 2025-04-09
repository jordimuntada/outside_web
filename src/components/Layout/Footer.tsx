import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t, dir } = useLanguage();

  return (
    <footer className="bg-[#D4A373] text-white py-8" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Think Outside</h3>
            <p className="mb-4">{t("passionTitle")}</p>
            <Link href="/contact" className="inline-block bg-[#CCD5AE] hover:bg-[#E9EDC9] text-[#D4A373] px-4 py-2 rounded-md transition-colors">
              {t("requestQuote")}
            </Link>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">{t("contactInfo")}</h3>
            <p className="mb-2">
              <span className="font-semibold">{t("phone")}:</span> {t("phone")}
            </p>
            <p className="mb-2">
              <span className="font-semibold">{t("email")}:</span> {t("email")}
            </p>
            <p className="mb-2">
              <span className="font-semibold">{t("address")}:</span> {t("address")}
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">{t("services")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#installation" className="hover:text-[#FEFAE0] transition-colors">
                  {t("installationTitle")}
                </Link>
              </li>
              <li>
                <Link href="/services#repair" className="hover:text-[#FEFAE0] transition-colors">
                  {t("repairTitle")}
                </Link>
              </li>
              <li>
                <Link href="/services#maintenance" className="hover:text-[#FEFAE0] transition-colors">
                  {t("maintenanceTitle")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#FAEDCD] mt-8 pt-6 text-center">
          <p>{t("copyright").replace("Outside Instalaciones y Técnicos S.L.", "Think Outside")}</p>
        </div>
      </div>
    </footer>
  );
}
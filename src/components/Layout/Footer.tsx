
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t, dir } = useLanguage();

  return (
    <footer className="bg-[#D4A373] text-white py-8" dir={dir}>
      <div className="container mx-auto px-4">
        {/* Simple footer with minimal content */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-medium hover:text-[#FEFAE0] transition-colors">
              Think Outside
            </Link>
          </div>
          
          <div className="flex space-x-8">
            <Link href="/contact" className="hover:text-[#FEFAE0] transition-colors">
              {t("contact")}
            </Link>
            <Link href="/legal" className="hover:text-[#FEFAE0] transition-colors">
              {t("legal")}
            </Link>
          </div>
        </div>
        
        {/* Contact info - minimal version */}
        <div className="flex flex-col md:flex-row justify-center items-center text-sm text-center mb-6 space-y-2 md:space-y-0 md:space-x-8">
          <a 
            href={`tel:${t("phone").replace(/\s+/g, '')}`} 
            className="hover:text-[#FEFAE0] transition-colors"
          >
            {t("phone")}
          </a>
          <a 
            href={`mailto:${t("email")}`} 
            className="hover:text-[#FEFAE0] transition-colors"
          >
            {t("email")}
          </a>
        </div>
        
        {/* Copyright - minimal version */}
        <div className="border-t border-[#FAEDCD] pt-4 text-center">
          <p className="text-xs text-[#FEFAE0]">
            © {new Date().getFullYear()} Think Outside
          </p>
        </div>
      </div>
    </footer>
  );
}

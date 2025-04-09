
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t, dir } = useLanguage();

  // Social media links
  const socialLinks = [
    { name: "Instagram", url: "https://instagram.com" },
    { name: "Facebook", url: "https://facebook.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Pinterest", url: "https://pinterest.com" }
  ];

  // Quick links for footer navigation
  const quickLinks = [
    { name: t("home"), url: "/" },
    { name: t("about"), url: "/about" },
    { name: t("services"), url: "/services" },
    { name: t("contact"), url: "/contact" },
    { name: t("legal"), url: "/legal" }
  ];

  return (
    <footer className="bg-[#D4A373] text-white py-12" dir={dir}>
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Think Outside</h3>
            <p className="mb-4 text-[#FEFAE0]">{t("passionTitle")}</p>
            <p className="mb-6 text-sm text-[#FEFAE0] opacity-90">
              {t("aboutDescription1").substring(0, 120)}...
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-[#CCD5AE] hover:bg-[#E9EDC9] text-[#5C4033] px-4 py-2 rounded-md transition-colors font-medium"
            >
              {t("requestQuote")}
            </Link>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t("services")}</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/services#installation" 
                  className="hover:text-[#FEFAE0] transition-colors flex items-center"
                >
                  <span className="mr-2">→</span>
                  {t("installationTitle")}
                </Link>
              </li>
              <li>
                <Link 
                  href="/services#repair" 
                  className="hover:text-[#FEFAE0] transition-colors flex items-center"
                >
                  <span className="mr-2">→</span>
                  {t("repairTitle")}
                </Link>
              </li>
              <li>
                <Link 
                  href="/services#maintenance" 
                  className="hover:text-[#FEFAE0] transition-colors flex items-center"
                >
                  <span className="mr-2">→</span>
                  {t("maintenanceTitle")}
                </Link>
              </li>
            </ul>
            
            {/* Quick links */}
            <h3 className="text-xl font-semibold mt-6 mb-4">{t("home")}</h3>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link.url}>
                  <Link 
                    href={link.url} 
                    className="hover:text-[#FEFAE0] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t("contactInfo")}</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-1">{t("phone")}</p>
                <a 
                  href={`tel:${t("phone").replace(/\s+/g, '')}`} 
                  className="hover:text-[#FEFAE0] transition-colors"
                >
                  {t("phone")}
                </a>
              </div>
              
              <div>
                <p className="font-semibold mb-1">{t("email")}</p>
                <a 
                  href={`mailto:${t("email")}`} 
                  className="hover:text-[#FEFAE0] transition-colors break-all"
                >
                  {t("email")}
                </a>
              </div>
              
              <div>
                <p className="font-semibold mb-1">{t("address")}</p>
                <a 
                  href="https://maps.google.com/?q=Carrer+Apol·lo+10,+08228+Terrassa,+Barcelona" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#FEFAE0] transition-colors"
                >
                  {t("address")}
                </a>
              </div>
            </div>
          </div>
          
          {/* Newsletter and social */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t("services")}</h3>
            <p className="mb-4 text-sm text-[#FEFAE0]">
              {t("passionDescription").substring(0, 100)}...
            </p>
            
            {/* Social media links */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">{t("services")}</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FAEDCD] text-[#5C4033] hover:bg-[#FEFAE0] w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                    aria-label={social.name}
                  >
                    {social.name.charAt(0)}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Business hours */}
            <div className="mt-6">
              <h4 className="font-semibold mb-2">{t("services")}</h4>
              <p className="text-sm text-[#FEFAE0]">
                Mon - Fri: 9:00 - 18:00<br />
                Sat: 10:00 - 14:00<br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="border-t border-[#FAEDCD] pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              {t("copyright").replace("Outside Instalaciones y Técnicos S.L.", "Think Outside")}
            </p>
            
            <div className="flex space-x-4 text-sm">
              <Link href="/legal" className="hover:text-[#FEFAE0] transition-colors">
                {t("legal")}
              </Link>
              <span>|</span>
              <Link href="/legal" className="hover:text-[#FEFAE0] transition-colors">
                {t("services")}
              </Link>
              <span>|</span>
              <Link href="/contact" className="hover:text-[#FEFAE0] transition-colors">
                {t("contact")}
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-6 text-xs text-[#FEFAE0] opacity-70">
            <p>© 2025 Think Outside. {t("services")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

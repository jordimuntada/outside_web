import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/lib/translations";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "ca", name: "Català", flag: "CA" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "ar", name: "العربية", flag: "🇸🇦" }
  ];

  return (
    <div className="relative inline-block text-left">
      <div className="flex space-x-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`flex items-center px-3 py-2 rounded-md transition-colors ${
              language === lang.code
                ? "bg-[#D4A373] text-white"
                : "bg-[#E9EDC9] text-[#D4A373] hover:bg-[#CCD5AE]"
            }`}
            aria-label={`Switch to ${lang.name}`}
          >
            <span className="mr-2">{lang.flag}</span>
            <span className="hidden md:inline">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

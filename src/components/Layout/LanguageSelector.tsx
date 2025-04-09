
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/lib/translations";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "ca", name: "Català", flag: "🏴󠁥󠁳󠁣󠁴󠁿" },
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
                ? "bg-amber-800 text-white"
                : "bg-amber-100 text-amber-900 hover:bg-amber-200"
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

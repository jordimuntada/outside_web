import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const { t, dir } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <section 
      className="tesla-section bg-cover bg-center bg-no-repeat" 
      style={{ 
        backgroundImage: "url('https://images.pexels.com/photos/3637837/pexels-photo-3637837.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        backgroundPosition: "center 30%"
      }}
      dir={dir}
    >
      <div className="hero-overlay"></div>
      <div className={`container relative z-10 text-center text-white ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        <div className="hero-content">
          <h1 className="tesla-heading mb-6 animate-fade-in-up">
            {t("expertTitle")}
          </h1>
          <p className="tesla-subheading max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200">
            {t("passionDescription")}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10 animate-fade-in-up animate-delay-400">
            <Link href="/contact" className="tesla-button tesla-button-primary">
              {t("requestQuote")}
            </Link>
            <Link href="/services" className="tesla-button tesla-button-secondary">
              {t("services")}
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-fade-in-up animate-delay-600">
          <button 
            onClick={scrollToNextSection}
            className="text-white hover:text-[#D4A373] transition-colors duration-300 focus:outline-none"
            aria-label="Scroll to next section"
          >
            <ChevronDown className="w-10 h-10 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
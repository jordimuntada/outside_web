import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CTASection() {
  const { t, dir } = useLanguage();

  return (
    <section 
      className='py-24 bg-cover bg-center bg-no-repeat relative' 
      style={{ 
        backgroundImage: 'url("https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg?auto=compress&cs=tinysrgb&w=1920")'
      }}
      dir={dir}
    >
      <div className='absolute inset-0 bg-primary/70'></div>
      <div className='container mx-auto px-4 relative z-10 text-center'>
        <h2 className='text-3xl md:text-4xl font-medium mb-6 text-white'>{t('passionTitle')}</h2>
        <p className='text-lg max-w-2xl mx-auto mb-8 text-white/90'>
          {t('passionDescription')}
        </p>
        <Link 
          href='/contact' 
          className='btn btn-outline bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 text-base rounded-md shadow-lg transition-all duration-300'
        >
          {t('requestQuote')}
        </Link>
      </div>
    </section>
  );
}
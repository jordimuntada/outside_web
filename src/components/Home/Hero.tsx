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
      behavior: 'smooth'
    });
  };

  return (
    <section 
      className='relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat' 
      style={{ 
        backgroundImage: 'url("https://images.pexels.com/photos/3637837/pexels-photo-3637837.jpeg?auto=compress&cs=tinysrgb&w=1920")',
        backgroundPosition: 'center 30%'
      }}
      dir={dir}
      id='main-content'
    >
      <div className='absolute inset-0 bg-primary/40'></div>
      <div className={`container relative z-10 text-center ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        <div className='max-w-4xl mx-auto px-4 py-16'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white animate-fade-in-up'>
            {t('expertTitle')}
          </h1>
          <div className='flex justify-center mt-10 animate-fade-in-up animate-delay-400'>
            <Link 
              href='/contact' 
              className='btn btn-primary px-6 py-3 text-base rounded-md shadow-lg hover:shadow-xl transition-all duration-300'
            >
              {t('requestQuote')}
            </Link>
          </div>
        </div>
        
        <div className='absolute bottom-10 left-0 right-0 flex justify-center animate-fade-in-up animate-delay-600'>
          <button 
            onClick={scrollToNextSection}
            className='text-white hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-transparent rounded-full p-2'
            aria-label='Scroll to next section'
          >
            <ChevronDown className='w-10 h-10 animate-bounce' />
          </button>
        </div>
      </div>
    </section>
  );
}
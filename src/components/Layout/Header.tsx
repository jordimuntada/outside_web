import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { t, dir } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  return (
    <header className='bg-white shadow-sm sticky top-0 z-50' dir={dir}>
      <a href='#main-content' className='skip-to-content'>
        {t('home')}
      </a>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-20'>
          <Link href='/' className='flex items-center'>
            <span className='text-xl font-bold text-primary'>Outside Instalaciones</span>
          </Link>

          <nav className='hidden md:flex items-center space-x-8'>
            <Link 
              href='/' 
              className={`text-foreground hover:text-accent transition-colors duration-300 ${isActive('/') ? 'font-medium text-accent' : ''}`}
            >
              {t('home')}
            </Link>
            <Link 
              href='/contact' 
              className={`text-foreground hover:text-accent transition-colors duration-300 ${isActive('/contact') ? 'font-medium text-accent' : ''}`}
            >
              {t('contact')}
            </Link>
            <Link 
              href='/legal' 
              className={`text-foreground hover:text-accent transition-colors duration-300 ${isActive('/legal') ? 'font-medium text-accent' : ''}`}
            >
              {t('legal')}
            </Link>
          </nav>

          <div className='flex items-center'>
            <div className='hidden md:block'>
              <LanguageSelector />
            </div>
            
            <button 
              className='md:hidden text-foreground focus:outline-none focus:ring-2 focus:ring-accent rounded-md p-1'
              onClick={toggleMenu}
              aria-label='Toggle menu'
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-white border-t border-border'>
          <div className='container mx-auto px-4 py-4'>
            <nav className='flex flex-col space-y-4'>
              <Link 
                href='/' 
                className={`text-foreground hover:text-accent transition-colors duration-300 ${isActive('/') ? 'font-medium text-accent' : ''}`}
                onClick={closeMenu}
              >
                {t('home')}
              </Link>
              <Link 
                href='/contact' 
                className={`text-foreground hover:text-accent transition-colors duration-300 ${isActive('/contact') ? 'font-medium text-accent' : ''}`}
                onClick={closeMenu}
              >
                {t('contact')}
              </Link>
              <Link 
                href='/legal' 
                className={`text-foreground hover:text-accent transition-colors duration-300 ${isActive('/legal') ? 'font-medium text-accent' : ''}`}
                onClick={closeMenu}
              >
                {t('legal')}
              </Link>
              <div className='pt-2'>
                <LanguageSelector />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
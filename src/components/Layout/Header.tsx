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
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-20'>
          <Link href='/' className='flex items-center'>
            <span className='text-xl font-bold text-[#5C4033]'>Outside Instalaciones</span>
          </Link>

          <nav className='hidden md:flex items-center space-x-8'>
            <Link 
              href='/' 
              className={`text-gray-700 hover:text-[#D4A373] transition-colors ${isActive('/') ? 'font-medium text-[#D4A373]' : ''}`}
            >
              {t('home')}
            </Link>
            <Link 
              href='/contact' 
              className={`text-gray-700 hover:text-[#D4A373] transition-colors ${isActive('/contact') ? 'font-medium text-[#D4A373]' : ''}`}
            >
              {t('contact')}
            </Link>
            <Link 
              href='/legal' 
              className={`text-gray-700 hover:text-[#D4A373] transition-colors ${isActive('/legal') ? 'font-medium text-[#D4A373]' : ''}`}
            >
              {t('legal')}
            </Link>
          </nav>

          <div className='flex items-center'>
            <div className='hidden md:block'>
              <LanguageSelector />
            </div>
            
            <button 
              className='md:hidden text-gray-700 focus:outline-none'
              onClick={toggleMenu}
              aria-label='Toggle menu'
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-white border-t border-gray-200'>
          <div className='container mx-auto px-4 py-4'>
            <nav className='flex flex-col space-y-4'>
              <Link 
                href='/' 
                className={`text-gray-700 hover:text-[#D4A373] transition-colors ${isActive('/') ? 'font-medium text-[#D4A373]' : ''}`}
                onClick={closeMenu}
              >
                {t('home')}
              </Link>
              <Link 
                href='/contact' 
                className={`text-gray-700 hover:text-[#D4A373] transition-colors ${isActive('/contact') ? 'font-medium text-[#D4A373]' : ''}`}
                onClick={closeMenu}
              >
                {t('contact')}
              </Link>
              <Link 
                href='/legal' 
                className={`text-gray-700 hover:text-[#D4A373] transition-colors ${isActive('/legal') ? 'font-medium text-[#D4A373]' : ''}`}
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
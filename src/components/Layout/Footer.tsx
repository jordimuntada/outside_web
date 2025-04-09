import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t, dir } = useLanguage();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='bg-[#5C4033] text-white' dir={dir}>
      <div className='container mx-auto px-4 py-12'>
        {/* Simple footer with minimal content */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h3 className='text-xl font-medium mb-4'>Outside Instalaciones</h3>
            <p className='text-gray-300 mb-4'>
              Expertos en instalaciones y mantenimiento de carpintería de madera.
            </p>
          </div>
          
          <div>
            <h3 className='text-xl font-medium mb-4'>{t('contactInfo')}</h3>
            <ul className='space-y-3'>
              <li className='flex items-start'>
                <Phone className='mr-2 h-5 w-5 text-[#D4A373] flex-shrink-0 mt-0.5' />
                <a 
                  href={`tel:${t('phone').replace(/\s+/g, '')}`} 
                  className='hover:text-[#FEFAE0] transition-colors'
                >
                  {t('phone')}
                </a>
              </li>
              <li className='flex items-start'>
                <Mail className='mr-2 h-5 w-5 text-[#D4A373] flex-shrink-0 mt-0.5' />
                <a 
                  href={`mailto:${t('email')}`} 
                  className='hover:text-[#FEFAE0] transition-colors'
                >
                  {t('email')}
                </a>
              </li>
              <li className='flex items-start'>
                <MapPin className='mr-2 h-5 w-5 text-[#D4A373] flex-shrink-0 mt-0.5' />
                <span>{t('address')}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className='text-xl font-medium mb-4'>Enlaces rápidos</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/' className='text-gray-300 hover:text-white transition-colors'>
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link href='/contact' className='text-gray-300 hover:text-white transition-colors'>
                  {t('contact')}
                </Link>
              </li>
              <li>
                <Link href='/legal' className='text-gray-300 hover:text-white transition-colors'>
                  {t('legal')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright - minimal version */}
        <div className='border-t border-gray-700 mt-10 pt-6 text-center text-gray-400'>
          <p>Outside Instalaciones y Técnicos S.L. © Copyright {currentYear} - Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
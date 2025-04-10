import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { dir } = useLanguage();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='bg-primary text-primary-foreground' dir={dir}>
      <div className='container mx-auto px-4 py-12'>
        {/* Simple footer with minimal content */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h3 className='text-xl font-medium mb-4 text-secondary'>Outside Instalaciones</h3>
            <p className='text-primary-foreground/80 mb-4'>
              Expertos en instalaciones y mantenimiento de carpintería de madera.
            </p>
          </div>
          
          <div>
            <h3 className='text-xl font-medium mb-4 text-secondary'>Información de contacto</h3>
            <ul className='space-y-3'>
              <li className='flex items-start'>
                <Phone className='mr-2 h-5 w-5 text-accent flex-shrink-0 mt-0.5' />
                <a 
                  href='tel:+34930129573' 
                  className='hover:text-accent transition-colors duration-300'
                  aria-label='Llamar por teléfono'
                >
                  +34 93 012 95 73
                </a>
              </li>
              <li className='flex items-start'>
                <Mail className='mr-2 h-5 w-5 text-accent flex-shrink-0 mt-0.5' />
                <a 
                  href='mailto:comercial@oitinstalaciones.com' 
                  className='hover:text-accent transition-colors duration-300'
                  aria-label='Enviar email'
                >
                  comercial@oitinstalaciones.com
                </a>
              </li>
              <li className='flex items-start'>
                <MapPin className='mr-2 h-5 w-5 text-accent flex-shrink-0 mt-0.5' />
                <span>Carrer Apol·lo 10 - 08228. Terrassa, Barcelona</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className='text-xl font-medium mb-4 text-secondary'>Enlaces rápidos</h3>
            <ul className='space-y-2'>
              <li>
                <Link 
                  href='/' 
                  className='text-primary-foreground/80 hover:text-accent transition-colors duration-300'
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  href='/contact' 
                  className='text-primary-foreground/80 hover:text-accent transition-colors duration-300'
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link 
                  href='/legal' 
                  className='text-primary-foreground/80 hover:text-accent transition-colors duration-300'
                >
                  Aviso legal
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright - minimal version */}
        <div className='border-t border-primary-foreground/20 mt-10 pt-6 text-center text-primary-foreground/60'>
          <p>Outside Instalaciones y Técnicos S.L. © Copyright {currentYear} - Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
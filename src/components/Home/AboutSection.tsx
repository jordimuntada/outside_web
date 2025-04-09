import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
  const { t, dir } = useLanguage();

  return (
    <section className='py-20 bg-white' dir={dir}>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-3xl font-medium text-center mb-12 text-[#5C4033]'>Sobre nosotros</h2>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div>
              <h3 className='text-xl font-medium mb-4 text-[#D4A373]'>Pasión por un trabajo bien hecho.</h3>
              <p className='text-gray-800 mb-6 text-lg'>
                Somos una empresa con amplia experiencia en el campo de instalaciones y mantenimiento de carpintería de madera, tanto residencial como industrial.
              </p>
              <p className='text-gray-800 mb-6 text-lg'>
                Nuestra principal motivación es la satisfacción de nuestros clientes, por lo que trabajamos cuidando al máximo los detalles y la calidad, adaptándonos a sus necesidades.
              </p>
              <p className='text-gray-800 mb-8 text-lg'>
                Nos avalan muchos años de experiencia en el sector, no dudes en contactarnos.
              </p>
              <Link 
                href='/contact' 
                className='tesla-button tesla-button-primary inline-block rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4A373] focus:ring-offset-2'
              >
                Solicita un presupuesto
              </Link>
            </div>
            
            <div>
              <div className='aspect-w-4 aspect-h-3 overflow-hidden shadow-md rounded-md'>
                <img 
                  src='https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=800' 
                  alt='Carpenter working on wooden furniture' 
                  className='object-cover w-full h-full'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
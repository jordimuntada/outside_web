import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
  const { t, dir } = useLanguage();

  return (
    <section className='py-20 bg-white' dir={dir}>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-3xl font-medium text-center mb-12 text-primary'>Sobre nosotros</h2>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div>
              <h3 className='text-xl font-medium mb-4 text-accent'>Pasión por un trabajo bien hecho</h3>
              <p className='text-foreground mb-6 text-lg'>
                Somos una empresa con amplia experiencia en el campo de instalaciones y mantenimiento de carpintería de madera, tanto residencial como industrial.
              </p>
              <p className='text-foreground mb-6 text-lg'>
                Nuestra principal motivación es la satisfacción de nuestros clientes, por lo que trabajamos cuidando al máximo los detalles y la calidad, adaptándonos a sus necesidades.
              </p>
              <p className='text-foreground mb-8 text-lg'>
                Nos avalan muchos años de experiencia en el sector, no dudes en contactarnos.
              </p>
              <Link 
                href='/contact' 
                className='btn btn-primary px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300'
              >
                Solicita un presupuesto
              </Link>
            </div>
            
            <div>
              <div className='overflow-hidden shadow-md rounded-md'>
                <img 
                  src='https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=800' 
                  alt='Carpintero trabajando en muebles de madera' 
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
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServicesSection() {
  const { t, dir } = useLanguage();

  const services = [
    {
      id: 'instalaciones',
      title: t('installationTitle'),
      description: t('installationDescription'),
      image: 'https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'reparacion',
      title: t('repairTitle'),
      description: t('repairDescription'),
      image: 'https://images.pexels.com/photos/3846022/pexels-photo-3846022.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'mantenimiento',
      title: t('maintenanceTitle'),
      description: t('maintenanceDescription'),
      image: 'https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section className='py-20 bg-secondary/30' dir={dir}>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-medium text-center mb-12 text-primary'>{t('servicesTitle')}</h2>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {services.map((service) => (
            <div key={service.id} className='bg-white overflow-hidden group shadow-md rounded-md hover:shadow-lg transition-all duration-300'>
              <div className='h-64 overflow-hidden'>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-medium mb-3 text-primary'>{service.title}</h3>
                <p className='text-foreground mb-4'>{service.description}</p>
                <Link 
                  href='/contact' 
                  className='text-accent font-medium hover:text-accent/80 hover:underline focus:outline-none focus:ring-2 focus:ring-accent rounded-sm transition-colors duration-300'
                >
                  {t('requestQuote')} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
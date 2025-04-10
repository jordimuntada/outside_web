import React from "react";
import Layout from "@/components/Layout/Layout";
import ContactForm from "@/components/Contact/ContactForm";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  const { t, dir } = useLanguage();

  return (
    <Layout title={t('contact')} description='Contacta con nosotros para solicitar un presupuesto o más información sobre nuestros servicios de carpintería.'>
      <section className='py-16 bg-secondary/30' dir={dir} id='main-content'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h1 className='text-3xl md:text-4xl font-bold text-center mb-12 text-primary'>{t('contact')}</h1>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
              <div>
                <h2 className='text-2xl font-medium mb-6 text-primary'>{t('contactInfo')}</h2>
                
                <div className='space-y-6'>
                  <div className='flex items-start'>
                    <Phone className='mr-3 h-6 w-6 text-accent flex-shrink-0 mt-0.5' />
                    <div>
                      <a href='tel:+34930129573' className='font-medium text-foreground hover:text-accent transition-colors duration-300'>
                        +34 93 012 95 73
                      </a>
                    </div>
                  </div>
                  
                  <div className='flex items-start'>
                    <Mail className='mr-3 h-6 w-6 text-accent flex-shrink-0 mt-0.5' />
                    <div>
                      <a href='mailto:comercial@oitinstalaciones.com' className='font-medium text-foreground hover:text-accent transition-colors duration-300'>
                        comercial@oitinstalaciones.com
                      </a>
                    </div>
                  </div>
                  
                  <div className='flex items-start'>
                    <MapPin className='mr-3 h-6 w-6 text-accent flex-shrink-0 mt-0.5' />
                    <div>
                      <span className='font-medium text-foreground'>
                        Carrer Apol·lo 10 - 08228. Terrassa, Barcelona
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className='mt-8'>
                  <h2 className='text-2xl font-medium mb-4 text-primary'>{t('schedule')}</h2>
                  <p className='text-foreground/80'>Lunes a Viernes: 9:00 - 18:00</p>
                  <p className='text-foreground/80'>Sábados: Cerrado</p>
                  <p className='text-foreground/80'>Domingos: Cerrado</p>
                </div>
              </div>
              
              <div>
                <h2 className='text-2xl font-medium mb-6 text-primary'>{t('requestQuote')}</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
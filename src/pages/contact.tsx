import React from "react";
import Layout from "@/components/Layout/Layout";
import ContactForm from "@/components/Contact/ContactForm";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  const { t, dir } = useLanguage();

  return (
    <Layout title={t('contact')} description='Contacta con nosotros para solicitar un presupuesto o más información sobre nuestros servicios de carpintería.'>
      <section className='py-16 bg-gray-50' dir={dir}>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h1 className='text-3xl md:text-4xl font-bold text-center mb-12 text-[#5C4033]'>{t('contact')}</h1>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
              <div>
                <h2 className='text-2xl font-medium mb-6 text-[#5C4033]'>{t('contactInfo')}</h2>
                
                <div className='space-y-6'>
                  <div className='flex items-start'>
                    <Phone className='mr-3 h-6 w-6 text-[#D4A373] flex-shrink-0 mt-0.5' />
                    <div>
                      <h3 className='font-medium text-gray-900'>{t('phone')}</h3>
                      <p className='text-gray-700'>{t('phone')}</p>
                    </div>
                  </div>
                  
                  <div className='flex items-start'>
                    <Mail className='mr-3 h-6 w-6 text-[#D4A373] flex-shrink-0 mt-0.5' />
                    <div>
                      <h3 className='font-medium text-gray-900'>{t('email')}</h3>
                      <p className='text-gray-700'>{t('email')}</p>
                    </div>
                  </div>
                  
                  <div className='flex items-start'>
                    <MapPin className='mr-3 h-6 w-6 text-[#D4A373] flex-shrink-0 mt-0.5' />
                    <div>
                      <h3 className='font-medium text-gray-900'>{t('address')}</h3>
                      <p className='text-gray-700'>{t('address')}</p>
                    </div>
                  </div>
                </div>
                
                <div className='mt-8'>
                  <h2 className='text-2xl font-medium mb-4 text-[#5C4033]'>{t('schedule')}</h2>
                  <p className='text-gray-700'>Lunes a Viernes: 9:00 - 18:00</p>
                  <p className='text-gray-700'>Sábados: Cerrado</p>
                  <p className='text-gray-700'>Domingos: Cerrado</p>
                </div>
              </div>
              
              <div>
                <h2 className='text-2xl font-medium mb-6 text-[#5C4033]'>{t('requestQuote')}</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
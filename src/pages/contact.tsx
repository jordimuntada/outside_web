import React from "react";
import Layout from "@/components/Layout/Layout";
import ContactForm from "@/components/Contact/ContactForm";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const { t, dir } = useLanguage();

  return (
    <Layout title={t('contact')} description='Contacta con nosotros para solicitar un presupuesto o más información sobre nuestros servicios de carpintería.'>
      <section className='py-12 bg-[#FAEDCD]' dir={dir}>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center'>
            <h1 className='text-3xl md:text-4xl font-bold text-[#5C4033] mb-6'>{t('contact')}</h1>
            <div className='w-20 h-1 bg-[#D4A373] mx-auto mb-6'></div>
          </div>
        </div>
      </section>

      <section className='py-12 bg-white' dir={dir}>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div>
              <h2 className='text-2xl font-bold text-[#5C4033] mb-6'>{t('contactInfo')}</h2>
              
              <div className='mb-6'>
                <h3 className='text-lg font-semibold text-[#D4A373] mb-2'>{t('phone')}</h3>
                <p className='text-gray-800 text-lg'>{t('phone')}</p>
              </div>
              
              <div className='mb-6'>
                <h3 className='text-lg font-semibold text-[#D4A373] mb-2'>{t('email')}</h3>
                <p className='text-gray-800 text-lg'>{t('email')}</p>
              </div>
              
              <div className='mb-6'>
                <h3 className='text-lg font-semibold text-[#D4A373] mb-2'>{t('address')}</h3>
                <p className='text-gray-800 text-lg'>{t('address')}</p>
              </div>
              
              <div className='mt-8'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.7882408086366!2d2.0119362!3d41.5606073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a492c2626b3a8b%3A0x1fb0a7a04f93a0!2sCarrer%20d&#39;Apol%C2%B7lo%2C%2010%2C%2008228%20Terrassa%2C%20Barcelona!5e0!3m2!1sen!2ses!4v1649252525252!5m2!1sen!2ses'
                  width='100%'
                  height='300'
                  style={{ border: 0 }}
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  title='Outside Instalaciones location'
                  className='rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4A373]'
                ></iframe>
              </div>
            </div>
            
            <div>
              <h2 className='text-2xl font-bold text-[#5C4033] mb-6'>{t('requestQuote')}</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
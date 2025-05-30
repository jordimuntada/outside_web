import React from "react";
import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Home/Hero";
import AboutSection from "@/components/Home/AboutSection";
import ServicesSection from "@/components/Home/ServicesSection";
import CTASection from "@/components/Home/CTASection";
import CareersSection from "@/components/Home/CareersSection";
import ContactForm from "@/components/Contact/ContactForm";
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <CareersSection />
      <CTASection />
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-medium text-center mb-12 text-primary'>{t('contact')}</h2>
          <div className='max-w-xl mx-auto'>
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}
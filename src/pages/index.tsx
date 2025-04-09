
import React from "react";
import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Home/Hero";
import AboutSection from "@/components/Home/AboutSection";
import ServicesSection from "@/components/Home/ServicesSection";
import CTASection from "@/components/Home/CTASection";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <Layout>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <CTASection />
    </Layout>
  );
}


import React from "react";
import Layout from "@/components/Layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, FileText } from "lucide-react";

export default function CareersPage() {
  const { t, dir } = useLanguage();
  
  return (
    <Layout>
      {/* Simple careers page with email application instructions */}
      <section className="py-24 bg-white" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
              {t('careersTitle')}
            </h1>
            
            <div className="bg-secondary/10 p-8 rounded-lg border border-secondary/20 mb-10 text-left">
              <p className="text-foreground/80 text-lg mb-6">
                {t('careersDescription')}
              </p>
              
              <p className="text-foreground/80 text-lg mb-6">
                {t('noOpenings')}
              </p>
              
              <div className="flex items-center justify-center my-8">
                <a 
                  href="mailto:comercial@oitinstalaciones.com" 
                  className="flex items-center text-accent font-medium text-xl hover:text-accent/80 hover:underline"
                >
                  <Mail className="h-6 w-6 mr-2" />
                  {t('email')}
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-border mt-8">
                <h3 className="text-xl font-medium mb-4 text-primary flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-accent" />
                  {t('formRequired')}
                </h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-accent mr-2">•</div>
                    <span>Incluye tu CV actualizado en formato PDF</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-accent mr-2">•</div>
                    <span>Adjunta una carta de presentación explicando tu interés en trabajar con nosotros</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-accent mr-2">•</div>
                    <span>Especifica en el asunto del correo la posición a la que aplicas</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6 text-primary">
                {t('joinOurTeam')}
              </h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
                <div className="bg-white p-6 rounded-lg border border-border">
                  <h3 className="font-medium mb-2 text-primary">Desarrollo profesional</h3>
                  <p className="text-foreground/80">Oportunidades de crecimiento y formación continua</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-border">
                  <h3 className="font-medium mb-2 text-primary">Ambiente colaborativo</h3>
                  <p className="text-foreground/80">Equipo dinámico y comprometido con la excelencia</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-border">
                  <h3 className="font-medium mb-2 text-primary">Proyectos diversos</h3>
                  <p className="text-foreground/80">Trabajo en variedad de proyectos interesantes</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-border">
                  <h3 className="font-medium mb-2 text-primary">Conciliación</h3>
                  <p className="text-foreground/80">Equilibrio entre vida laboral y personal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

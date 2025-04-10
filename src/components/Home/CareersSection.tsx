
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { Users, Mail, ArrowRight } from "lucide-react";

export default function CareersSection() {
  const { t, dir } = useLanguage();

  return (
    <section className="py-20 bg-white" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-3 bg-accent/10 rounded-full mb-6">
            <Users className="h-8 w-8 text-accent" />
          </div>
          <h2 className="text-3xl font-medium mb-6 text-primary">Únete a nuestro equipo</h2>
          <p className="text-foreground/80 text-lg mb-10 max-w-3xl mx-auto">
            En Outside Instalaciones estamos siempre buscando talentos para unirse a nuestro equipo. 
            Si eres apasionado, comprometido y buscas crecer profesionalmente en el sector de la 
            carpintería de madera, nos encantaría conocerte.
          </p>
          
          <div className="bg-secondary/10 p-8 rounded-lg border border-secondary/20 mb-10">
            <h3 className="text-xl font-medium mb-4 text-primary">Envíanos tu CV</h3>
            <p className="text-foreground/80 mb-6">
              Para aplicar a cualquier posición en nuestra empresa, por favor envía tu CV y una carta 
              de presentación a la siguiente dirección de correo electrónico:
            </p>
            <div className="flex items-center justify-center my-4">
              <a 
                href="mailto:comercial@oitinstalaciones.com" 
                className="flex items-center text-accent font-medium text-lg hover:text-accent/80 hover:underline"
              >
                comercial@oitinstalaciones.com
                <Mail className="h-5 w-5 mr-2" />
                comercial@oitinstalaciones.com
              </a>
            </div>
          </div>
          
          <Link 
            href="/careers" 
            className="btn btn-primary px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
          >
            Más información <ArrowRight className="ml-2 h-4 w-4 inline" />
          </Link>
        </div>
      </div>
    </section>
  );
}


import React from "react";
import Layout from "@/components/Layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Briefcase, MapPin, Clock, FileText, Mail } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/Contact/ContactForm";

// Sample job listings
const jobListings = [
  {
    id: "carpintero-instalador",
    title: "Carpintero Instalador",
    location: "Barcelona",
    type: "Tiempo completo",
    description: "Buscamos un carpintero instalador con experiencia para unirse a nuestro equipo de instalaciones.",
    requirements: [
      "Mínimo 3 años de experiencia en instalación de carpintería de madera",
      "Conocimientos avanzados en montaje de puertas, armarios y muebles",
      "Capacidad para interpretar planos y mediciones",
      "Carnet de conducir B"
    ],
    responsibilities: [
      "Instalación de elementos de carpintería en proyectos residenciales y comerciales",
      "Montaje de puertas, armarios, revestimientos y otros elementos de madera",
      "Ajustes y acabados de calidad",
      "Coordinación con el equipo de obra"
    ]
  },
  {
    id: "tecnico-mantenimiento",
    title: "Técnico de Mantenimiento",
    location: "Terrassa, Barcelona",
    type: "Tiempo completo",
    description: "Necesitamos incorporar un técnico de mantenimiento especializado en carpintería de madera para dar servicio a nuestros clientes.",
    requirements: [
      "Experiencia demostrable en mantenimiento de elementos de carpintería",
      "Conocimientos de reparación y restauración de madera",
      "Habilidades para la resolución de problemas",
      "Disponibilidad para desplazamientos en la provincia de Barcelona"
    ],
    responsibilities: [
      "Mantenimiento preventivo y correctivo de instalaciones de carpintería",
      "Reparación de averías en elementos de madera",
      "Atención al cliente y resolución de incidencias",
      "Elaboración de informes de intervención"
    ]
  }
];

export default function CareersPage() {
  const { t, dir } = useLanguage();
  
  return (
    <Layout>
      {/* Hero section */}
      <section 
        className="relative py-24 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/3637837/pexels-photo-3637837.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          backgroundPosition: 'center 30%'
        }}
        dir={dir}
      >
        <div className="absolute inset-0 bg-primary/60"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Únete a nuestro equipo
            </h1>
            <p className="text-xl text-white/90 mb-8">
              En Outside Instalaciones estamos siempre buscando talentos para unirse a nuestro equipo. 
              Si eres apasionado, comprometido y buscas crecer profesionalmente en el sector de la 
              carpintería de madera, nos encantaría conocerte.
            </p>
          </div>
        </div>
      </section>
      
      {/* Current openings section */}
      <section className="py-16 bg-white" dir={dir}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-medium text-center mb-12 text-primary">Vacantes actuales</h2>
          
          {jobListings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {jobListings.map((job) => (
                <div key={job.id} className="bg-white border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-3 text-primary">{job.title}</h3>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-foreground/70">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center text-foreground/70">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                    
                    <p className="text-foreground mb-4">{job.description}</p>
                    
                    <Link 
                      href={`/careers/${job.id}`} 
                      className="inline-flex items-center text-accent font-medium hover:text-accent/80 hover:underline"
                    >
                      Ver detalles <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-secondary/10 p-8 rounded-lg border border-secondary/20 max-w-2xl mx-auto text-center">
              <h3 className="text-xl font-medium mb-4 text-primary">No hay vacantes disponibles</h3>
              <p className="text-foreground/80 mb-6">
                Actualmente no hay vacantes disponibles. Por favor, vuelve a consultar más adelante 
                o envíanos tu CV para futuras oportunidades.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Spontaneous application section */}
      <section className="py-16 bg-secondary/10" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-medium text-center mb-8 text-primary">¿No encuentras la posición adecuada?</h2>
            <p className="text-center text-foreground/80 text-lg mb-12">
              Siempre estamos interesados en conocer profesionales talentosos. Envíanos tu CV y nos pondremos en contacto contigo cuando surja una oportunidad que se ajuste a tu perfil.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-4 text-primary">Envía tu candidatura</h3>
                <p className="text-foreground/80 mb-6">
                  Puedes enviarnos tu CV y carta de presentación a nuestra dirección de correo electrónico:
                </p>
                <a 
                  href="mailto:rrhh@oitinstalaciones.com" 
                  className="flex items-center text-accent font-medium hover:text-accent/80 hover:underline"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  rrhh@oitinstalaciones.com
                </a>
              </div>
              
              <div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-medium mb-4 text-primary">¿Por qué trabajar con nosotros?</h3>
                  <ul className="space-y-3 text-foreground/80">
                    <li className="flex items-start">
                      <div className="h-5 w-5 text-accent mr-2">•</div>
                      <span>Ambiente de trabajo colaborativo y profesional</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 text-accent mr-2">•</div>
                      <span>Oportunidades de crecimiento y desarrollo profesional</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 text-accent mr-2">•</div>
                      <span>Proyectos desafiantes y variados</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 text-accent mr-2">•</div>
                      <span>Formación continua y actualización de habilidades</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact section */}
      <section className="py-16 bg-white" dir={dir}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-medium text-center mb-12 text-primary">Contacta con nosotros</h2>
          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}

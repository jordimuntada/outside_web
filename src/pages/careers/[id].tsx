
import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Clock, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";

// Sample job listings (same as in careers.tsx)
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

export default function JobDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const { t, dir } = useLanguage();
  
  // Find the job by ID
  const job = jobListings.find(job => job.id === id);
  
  // If job not found or ID is not yet available (during SSR)
  if (!job && typeof id === "string") {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-medium mb-4 text-primary">Oferta no encontrada</h1>
          <p className="text-foreground/80 mb-8">Lo sentimos, la oferta de trabajo que estás buscando no existe o ha sido eliminada.</p>
          <Link 
            href="/careers" 
            className="inline-flex items-center text-accent font-medium hover:text-accent/80 hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver a todas las ofertas
          </Link>
        </div>
      </Layout>
    );
  }
  
  // During SSR, show a loading state
  if (!job) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-foreground/80">Cargando...</p>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <Link 
          href="/careers" 
          className="inline-flex items-center text-accent font-medium hover:text-accent/80 hover:underline mb-8 block"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver a todas las ofertas
        </Link>
        
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-medium mb-6 text-primary">{job.title}</h1>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center text-foreground/70">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center text-foreground/70">
              <Clock className="h-5 w-5 mr-2" />
              <span>{job.type}</span>
            </div>
          </div>
          
          <div className="prose max-w-none mb-10">
            <p className="text-lg text-foreground">{job.description}</p>
          </div>
          
          <div className="bg-white border border-border rounded-lg p-6 mb-8">
            <h2 className="text-xl font-medium mb-4 text-primary">Requisitos</h2>
            <ul className="space-y-3">
              {job.requirements.map((req, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{req}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white border border-border rounded-lg p-6 mb-10">
            <h2 className="text-xl font-medium mb-4 text-primary">Responsabilidades</h2>
            <ul className="space-y-3">
              {job.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{resp}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center">
            <a 
              href="mailto:rrhh@oitinstalaciones.com?subject=Aplicación para: {job.title}" 
              className="btn btn-primary px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
            >
              Aplicar ahora
            </a>
            <p className="text-foreground/60 mt-4 text-sm">
              O envía tu CV a <a href="mailto:rrhh@oitinstalaciones.com" className="text-accent hover:underline">rrhh@oitinstalaciones.com</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

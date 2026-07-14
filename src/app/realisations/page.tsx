"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Project {
  id: string;
  category: "COMMUNICATION" | "DIGITAL" | "ÉVÉNEMENTIEL";
  categoryLabel: string;
  title: string;
  image: string;
  alt: string;
  span: string; // Tailwind grid col classes for desktop
  aspectRatio: string;
  featured?: boolean;
  link: string;
}

const projects: Project[] = [
  {
    id: "lancement plateforme TickEazy",
    category: "ÉVÉNEMENTIEL",
    categoryLabel: "Événementiel / Audiovisuel",
    title: "Lancement de la plateforme TickEazy",
    image:
      "/images/tickeazy.png",
    alt: "Scénographie et lumière pour lancement de la plateforme TickEazy",
    span: "md:col-span-2 lg:col-span-8",
    aspectRatio: "aspect-[16/9]",
    featured: true,
    link: "https://tickeazy.fr",
  },
  {
    id: "campagne-digitale",
    category: "DIGITAL",
    categoryLabel: "Marketing Digital",
    title: "Campagne d'Acquisition Tech",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    alt: "Analyse et pilotage de campagne digitale haute performance",
    span: "md:col-span-1 lg:col-span-4",
    aspectRatio: "aspect-[4/5]",
    link: "https://tickeazy.fr",
  },
  {
    id: "evenement-corporate",
    category: "COMMUNICATION",
    categoryLabel: "Communication Corporate",
    title: "Sommet International de l'Innovation",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80",
    alt: "Scène et écrans géants lors d'une conférence internationale",
    span: "md:col-span-1 lg:col-span-4",
    aspectRatio: "aspect-square",
    link: "/realisations/evenement-corporate",
  },
  {
    id: "production-live",
    category: "ÉVÉNEMENTIEL",
    categoryLabel: "Captation / Montage",
    title: "Production Live Stream Multi-Cam",
    image:
      "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=1400&q=80",
    alt: "Caméra cinéma de plateau sur grue en tournage direct",
    span: "md:col-span-2 lg:col-span-8",
    aspectRatio: "aspect-[16/8]",
    featured: true,
    link: "/realisations/production-live",
  },
  {
    id: "affichage-urbain",
    category: "COMMUNICATION",
    categoryLabel: "Affichage Urbain",
    title: "Campagne Out-Of-Home Éco-Responsable",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1000&q=80",
    alt: "Affichage digital dans le centre-ville nocturne",
    span: "md:col-span-1 lg:col-span-4",
    aspectRatio: "aspect-square",
    link: "/realisations/affichage-urbain",
  },
  {
    id: "branding-beta",
    category: "COMMUNICATION",
    categoryLabel: "Branding & Direction Visuelle",
    title: "Identité de Marque Haute Horlogerie",
    image:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80",
    alt: "Éléments graphiques minimalistes de charte haut de gamme",
    span: "md:col-span-1 lg:col-span-4",
    aspectRatio: "aspect-square",
    link: "/realisations/branding-beta",
  },
  {
    id: "installation-immersive",
    category: "DIGITAL",
    categoryLabel: "Digital Experience & Art",
    title: "Installation Immersive Interactive",
    image:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1000&q=80",
    alt: "Galerie immersive avec projections lumineuses synchronisées",
    span: "md:col-span-2 lg:col-span-4",
    aspectRatio: "aspect-square",
    link: "/realisations/installation-immersive",
  },
];

export default function RealisationsPage() {
  const [filter, setFilter] = useState<string>("TOUT");

  const filteredProjects =
    filter === "TOUT"
      ? projects
      : projects.filter((p) => p.category === filter);

  const filterTabs = ["TOUT", "COMMUNICATION", "DIGITAL", "ÉVÉNEMENTIEL"];

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden w-full">
      {/* Page Header */}
      <header className="pt-16 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 sm:gap-10 w-full">
          <div className="w-full lg:w-auto flex-1 max-w-3xl min-w-0">
            <p className="text-primary font-label-bold text-label-bold mb-3 uppercase tracking-widest">
              Portefeuille & Références
            </p>
            <h1 className="font-display-lg text-4xl sm:text-6xl md:text-[76px] uppercase leading-none mb-6 tracking-tight break-words">
              Nos <span className="text-primary">Réalisations</span>.
            </h1>
            <p className="text-lg sm:text-xl font-body-lg text-tertiary max-w-2xl leading-relaxed">
              Découvrez comment nous donnons vie aux ambitions les plus audacieuses. Une sélection de
              projets alliant stratégie, créativité d&apos;exception et maîtrise technique haute précision.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-4 pt-2 lg:pt-0 shrink-0 w-full lg:w-auto">
            {filterTabs.map((tab) => {
              const active = filter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`text-label-bold font-label-bold px-3 sm:px-4 py-2 transition-all cursor-pointer text-xs sm:text-sm tracking-wider uppercase flex-1 sm:flex-none text-center ${active
                    ? "bg-primary text-on-primary font-bold shadow-md"
                    : "bg-surface-container text-tertiary hover:text-on-surface hover:bg-surface-container-high"
                    }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Bento Portfolio Grid */}
      <main className="px-4 sm:px-6 md:px-16 pb-16 sm:pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`${project.span} group cursor-pointer overflow-hidden relative kinetic-hover min-w-0`}
            >
              <div
                className={`${project.aspectRatio} bg-surface-container overflow-hidden relative shadow-sm`}
              >
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={project.image}
                    alt={project.alt}
                  />
                </Link>
              </div>
              <div className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-primary font-label-bold text-xs sm:text-sm uppercase tracking-wider block">
                      {project.categoryLabel}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-headline-md uppercase mt-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  {project.featured && (
                    <span className="material-symbols-outlined text-on-surface text-4xl group-hover:translate-x-2 transition-transform shrink-0">
                      north_east
                    </span>
                  )}
                </div>
                <div className="kinetic-line mt-4"></div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Call to Action Section */}
      <section className="bg-on-surface text-surface py-16 sm:py-24 px-4 sm:px-6 md:px-16 overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl md:text-display-lg font-display-lg uppercase mb-6 leading-tight tracking-tight break-words">
            Prêt à marquer les <span className="text-primary">esprits</span> ?
          </h2>
          <p className="text-lg sm:text-xl font-body-lg text-surface-variant mb-12 opacity-85 max-w-2xl mx-auto leading-relaxed">
            Collaborons pour transformer votre vision en une expérience
            mémorable. Notre expertise est à votre service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-primary text-on-primary px-8 py-4 font-label-bold text-label-bold hover:bg-primary-container transition-all tracking-widest inline-block uppercase shadow-lg text-center"
            >
              Démarrer mon projet
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto border-2 border-surface text-surface px-8 py-4 font-label-bold text-label-bold hover:bg-surface hover:text-on-surface transition-all tracking-widest inline-block uppercase text-center"
            >
              Voir nos expertises
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

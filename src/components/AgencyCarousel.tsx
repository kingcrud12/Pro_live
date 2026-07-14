"use client";

import React, { useState, useEffect } from "react";

interface Slide {
  id: string;
  src: string;
  alt: string;
  title?: string;
  sectionIndex: number;
}

export default function AgencyCarousel() {
  const slides: Slide[] = [
    // Section 1: Communication (Indices 0, 1)
    {
      id: "img-1",
      src: "/images/image_1.jpg",
      alt: "Studio et équipe Pro Live Agency en action - Vue 1",
      title: "Communication",
      sectionIndex: 0,
    },
    {
      id: "img-2",
      src: "/images/image_2.jpg",
      alt: "Production live et création d'expérience mémorable - Vue 2",
      sectionIndex: 0,
    },

    // Section 2: Marketing (Indices 2, 3)
    {
      id: "img-3",
      src: "/images/image_3.jpg",
      alt: "Conception stratégique et réalisation visuelle haute précision - Vue 3",
      title: "Marketing",
      sectionIndex: 1,
    },
    {
      id: "img-4",
      src: "/images/image_4.jpg",
      alt: "Dispositif événementiel et direction artistique sur mesure - Vue 4",
      sectionIndex: 1,
    },

    // Section 3: Création numérique (Indices 4, 5)
    {
      id: "img-6",
      src: "/images/image_6.jpg",
      alt: "Dispositif événementiel et direction artistique sur mesure - Vue 5",
      title: "Création numérique",
      sectionIndex: 2,
    },
    {
      id: "img-7",
      src: "/images/image_7.jpg",
      alt: "Dispositif événementiel et direction artistique sur mesure - Vue 6",
      sectionIndex: 2,
    },

    // Section 4: Audiovisuel (Indices 6, 7)
    {
      id: "img-8",
      src: "/images/image_8.jpg",
      alt: "Dispositif événementiel et direction artistique sur mesure - Vue 7",
      title: "Audiovisuel",
      sectionIndex: 3,
    },
    {
      id: "img-9",
      src: "/images/image_9.jpg",
      alt: "Dispositif événementiel et direction artistique sur mesure - Vue 8",
      sectionIndex: 3,
    },

    // Section 5: Événementiel (Indices 8, 9)
    {
      id: "img-10",
      src: "/images/image_10.jpg",
      alt: "Dispositif événementiel et direction artistique sur mesure - Vue 9",
      title: "Événementiel",
      sectionIndex: 4,
    },
    {
      id: "img-11",
      src: "/images/image_11.jpg",
      alt: "Dispositif événementiel et direction artistique sur mesure - Vue 10",
      sectionIndex: 4,
    },

    // Section 6: Hôtesses et hôtes de luxes (Index 10)
    {
      id: "img-12",
      src: "/images/image_12.jpg",
      alt: "Dispositif événementiel et direction artistique sur mesure - Vue 11",
      title: "Hôtesses et hôtes de luxes",
      sectionIndex: 5,
    },
  ];

  const sections = [
    { name: "Communication", startIndex: 0 },
    { name: "Marketing", startIndex: 2 },
    { name: "Création numérique", startIndex: 4 },
    { name: "Audiovisuel", startIndex: 6 },
    { name: "Événementiel", startIndex: 8 },
    { name: "Hôtesses et hôtes de luxes", startIndex: 10 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [paused, slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const currentSlide = slides[currentIndex];
  const currentSectionIndex = currentSlide?.sectionIndex ?? 0;

  return (
    <div
      className="bg-surface-container-low h-[280px] sm:h-[360px] lg:h-[420px] w-full flex items-center justify-center p-4 sm:p-6 shadow-xl relative overflow-hidden border border-surface/10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div className="relative w-full h-full overflow-hidden bg-on-surface/5">
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
              }`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover transition-transform duration-700"
              />

              {/* Keyword text overlay directly over first images of duos (No box/frame, No pôles) */}
              {slide.title && (
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center p-4 z-10 pointer-events-none transition-opacity duration-500">
                  <div className="text-center space-y-2.5">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-headline-lg uppercase text-white tracking-wider drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
                      {slide.title}
                    </h3>
                    <div className="w-12 sm:w-14 h-1 bg-primary mx-auto shadow-md"></div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Overlay gradient for controls visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface/50 via-transparent to-transparent opacity-60 z-15 pointer-events-none" />

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-on-surface/75 hover:bg-primary text-surface flex items-center justify-center transition-all duration-300 active:scale-95 shadow-md group focus:outline-none"
          aria-label="Diapositive précédente"
        >
          <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">
            arrow_back_ios_new
          </span>
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-on-surface/75 hover:bg-primary text-surface flex items-center justify-center transition-all duration-300 active:scale-95 shadow-md group focus:outline-none"
          aria-label="Diapositive suivante"
        >
          <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">
            arrow_forward_ios
          </span>
        </button>

        {/* Indicators - Exactly 6 Clean Section Pastilles */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3 items-center justify-center bg-on-surface/65 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 shadow-lg">
          {sections.map((sec, idx) => {
            const active = idx === currentSectionIndex;
            return (
              <button
                key={sec.name}
                onClick={() => setCurrentIndex(sec.startIndex)}
                aria-label={`Aller à la section ${sec.name}`}
                title={sec.name}
                className={`transition-all duration-300 h-2 rounded-full focus:outline-none ${
                  active
                    ? "w-8 bg-primary shadow-sm"
                    : "w-2 bg-white/60 hover:bg-white"
                }`}
              />
            );
          })}
        </div>

        {/* Active Section & Slide Counter Pill */}
        <div className="absolute top-3 right-3 z-20 bg-on-surface/85 text-surface text-xs font-label-bold px-3 py-1.5 uppercase tracking-wider shadow-md flex items-center gap-2">
          <span className="text-primary font-bold">•</span>
          <span>{sections[currentSectionIndex]?.name || "Pro Live"}</span>
          <span className="opacity-60 font-mono text-[11px]">({currentIndex + 1}/{slides.length})</span>
        </div>
      </div>
    </div>
  );
}

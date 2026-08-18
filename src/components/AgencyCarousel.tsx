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
    // Section 1: Événementiel (Indices 0, 1)
    {
      id: "img-2",
      src: "/images/762905e8-734a-4655-b707-a1c068ac3f5f.JPG",
      alt: "Événementiel 2",
      sectionIndex: 0,
    },

    // Section 2: Hôtesses et hôtes de luxes (Index 2)
    {
      id: "img-3",
      src: "/images/b583bcfb-0781-4d68-8f42-cb2c328e8cec.JPG",
      alt: "Hôtesses et hôtes de luxes",
      sectionIndex: 1,
    },

    // Section 3: Audiovisuel (Index 3)
    {
      id: "img-4",
      src: "/images/ec9de1bd-7bb6-43d4-af52-1dfed1ec5f60.JPG",
      alt: "Audiovisuel",
      sectionIndex: 2,
    },

    // Section 4: Création numérique (Index 4)
    {
      id: "img-5",
      src: "/images/1a5c3164-95c5-410f-b150-4aabe9b80894.JPG",
      alt: "Création numérique",
      sectionIndex: 3,
    },

    // Section 5: Communication (Indices 5, 6)
    {
      id: "img-6",
      src: "/images/4f910d93-521a-4db7-8928-daa830487369.JPG",
      alt: "Communication 1",
      sectionIndex: 4,
    }
  ];

  const sections = [
    { name: "Événementiel", startIndex: 0 },
    { name: "Hôtesses et hôtes de luxes", startIndex: 2 },
    { name: "Audiovisuel", startIndex: 3 },
    { name: "Création numérique", startIndex: 4 },
    { name: "Communication", startIndex: 5 },
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
      className="h-[280px] sm:h-[360px] lg:h-[420px] w-full relative overflow-hidden shadow-xl"
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
              className={`absolute inset-0 transition-all duration-1000 ease-in-out flex items-center justify-center overflow-hidden bg-on-surface/95 ${isActive ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
                }`}
            >
              {/* Blurred background image to fill extra space around object-contain with ambient color */}
              <img
                src={slide.src}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-35 pointer-events-none"
              />

              {/* Main un-zoomed, 100% visible photo without any cropping */}
              <img
                src={slide.src}
                alt={slide.alt}
                className="relative z-0 max-w-full max-h-full w-full h-full object-cover transition-transform duration-700"
              />

              {/* Keyword text overlay directly over first images of duos (No box/frame, No pôles, No dark screen) */}
              {slide.title && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10 pointer-events-none transition-opacity duration-500">
                  <div className="text-center space-y-2.5">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-headline-lg uppercase text-white tracking-wider drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
                      {slide.title}
                    </h3>
                    <div className="w-12 sm:w-14 h-1 bg-primary mx-auto shadow-md"></div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Subtle overlay gradient at the bottom just for indicators visibility without darkening images */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-30 z-15 pointer-events-none" />

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

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3 items-center justify-center bg-on-surface/65 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 shadow-lg">
          {sections.map((sec, idx) => {
            const active = idx === currentSectionIndex;
            return (
              <button
                key={sec.name}
                onClick={() => setCurrentIndex(sec.startIndex)}
                aria-label={`Aller à la section ${sec.name}`}
                title={sec.name}
                className={`transition-all duration-300 h-2 rounded-full focus:outline-none ${active
                  ? "w-8 bg-primary shadow-sm"
                  : "w-2 bg-white/60 hover:bg-white"
                  }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

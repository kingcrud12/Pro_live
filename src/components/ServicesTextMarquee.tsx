"use client";

import React from "react";

interface ServicesTextMarqueeProps {
  className?: string;
}

export default function ServicesTextMarquee({ className = "" }: ServicesTextMarqueeProps) {
  const items = [
    "Événementiel",
    "Hôtesses et hôtes de luxes",
    "Audiovisuel",
    "Création numérique",
    "Communication",
  ];

  const content = items.join(" • ") + " • ";

  return (
    <div className={`w-full bg-surface-container-low border-y-2 border-on-surface/10 py-6 sm:py-8 overflow-hidden relative select-none shadow-inner ${className}`}>
      {/* Background watermark effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
        <span className="font-display-lg text-5xl sm:text-8xl md:text-9xl uppercase tracking-tighter whitespace-nowrap text-on-surface">
          {content}
        </span>
      </div>

      {/* Scrolling Text Marquee */}
      <div className="flex whitespace-nowrap animate-marquee items-center font-display-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-wider text-on-surface/90">
        <span className="inline-block px-4">{content}</span>
        <span className="inline-block px-4">{content}</span>
        <span className="inline-block px-4">{content}</span>
        <span className="inline-block px-4">{content}</span>
      </div>
    </div>
  );
}

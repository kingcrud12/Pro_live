import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Services | PRO LIVE AGENCY",
  description:
    "Quatre pôles d'excellence dédiés à votre croissance : Communication, Digital, Marketing et Événementiel.",
};

export default function ServicesPage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Hero Header */}
      <section className="px-6 md:px-16 py-20 bg-on-surface text-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="inline-block bg-primary text-on-primary px-4 py-1 font-label-bold text-label-bold mb-6 uppercase tracking-wider">
            DOMINER LE MARCHÉ
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-[80px] font-display-lg leading-[1.06] mb-8 uppercase tracking-tight">
            NOS EXPERTISES <br />
            <span className="text-primary">VOTRE IMPACT.</span>
          </h1>
          <p className="text-lg sm:text-xl font-body-lg max-w-2xl text-surface-variant leading-relaxed">
            Nous transformons vos visions en réalités tangibles grâce à une
            approche stratégique et créative sans compromis. Quatre pôles
            d&apos;excellence dédiés à votre croissance.
          </p>
        </div>
        {/* Atmospheric background element */}
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4 select-none overflow-hidden">
          <span className="font-display-lg text-[240px] md:text-[380px] leading-none text-surface">
            PRO
          </span>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="px-6 md:px-16 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Communication (Col 1-7) */}
          <div className="lg:col-span-7 bg-surface-container border-l-4 border-primary p-8 sm:p-12 flex flex-col justify-between hover-lift min-h-[440px] shadow-sm min-w-0">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="material-symbols-outlined text-4xl text-primary">
                  campaign
                </span>
                <h2 className="text-3xl sm:text-4xl font-headline-md uppercase">
                  Communication
                </h2>
              </div>
              <p className="text-lg font-body-md text-tertiary mb-12 max-w-xl leading-relaxed">
                Définir une voix unique et influente. Nous élaborons des stratégies de
                communication percutantes et ciblées pour positionner votre marque comme
                leader incontesté sur son marché.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary mt-2 shrink-0"></div>
                  <div>
                    <h3 className="font-label-bold text-label-bold uppercase mb-1">
                      Stratégie de Marque
                    </h3>
                    <p className="text-sm text-tertiary leading-normal">
                      Analyse de marché, audit complet et positionnement concurrentiel affirmé.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary mt-2 shrink-0"></div>
                  <div>
                    <h3 className="font-label-bold text-label-bold uppercase mb-1">
                      Branding &amp; Identité
                    </h3>
                    <p className="text-sm text-tertiary leading-normal">
                      Design de logotype, charte graphique éditoriale et direction visuelle 360°.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <Link
                href="/contact"
                className="inline-block border-2 border-on-surface px-8 py-3 font-label-bold text-label-bold hover:bg-on-surface hover:text-surface transition-all uppercase tracking-wider"
              >
                En savoir plus
              </Link>
            </div>
          </div>

          {/* Digital (Col 8-12) */}
          <div className="lg:col-span-5 bg-on-surface text-surface p-8 sm:p-12 hover-lift flex flex-col justify-between min-h-[440px] shadow-sm min-w-0">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="material-symbols-outlined text-4xl text-primary">
                  devices
                </span>
                <h2 className="text-3xl sm:text-4xl font-headline-md uppercase">
                  Digital
                </h2>
              </div>
              <ul className="space-y-8">
                <li>
                  <span className="text-primary font-label-bold text-label-bold block mb-2 uppercase tracking-widest text-sm">
                    DÉVELOPPEMENT WEB & APPS
                  </span>
                  <p className="text-base sm:text-lg text-surface-variant leading-relaxed">
                    Sites vitrines immersifs, plateformes e-commerce sur-mesure et applications web ultra-rapides.
                  </p>
                </li>
                <li>
                  <span className="text-primary font-label-bold text-label-bold block mb-2 uppercase tracking-widest text-sm">
                    SOCIAL MEDIA & CONTENT
                  </span>
                  <p className="text-base sm:text-lg text-surface-variant leading-relaxed">
                    Direction de contenu, gestion d&apos;écosystème communautaire et campagnes virales.
                  </p>
                </li>
              </ul>
            </div>
            <div className="mt-12 flex justify-between items-end">
              <Link
                href="/contact"
                className="inline-block bg-primary text-on-primary px-8 py-3 font-label-bold text-label-bold hover:bg-primary-container transition-all uppercase tracking-wider shadow-md"
              >
                Lancer un projet
              </Link>
              <span
                className="material-symbols-outlined text-6xl opacity-20"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                bolt
              </span>
            </div>
          </div>

          {/* Marketing (Col 1-5) */}
          <div className="lg:col-span-5 bg-surface-container p-8 sm:p-12 hover-lift flex flex-col justify-between border-b-4 border-on-surface min-h-[460px] shadow-sm min-w-0">
            <div className="relative overflow-hidden group">
              <div className="flex items-center gap-4 mb-8">
                <span className="material-symbols-outlined text-4xl text-primary">
                  trending_up
                </span>
                <h2 className="text-3xl sm:text-4xl font-headline-md uppercase">
                  Marketing
                </h2>
              </div>
              <div className="my-6 aspect-[16/9] w-full overflow-hidden rounded-none">
                <img
                  alt="Stratégie et données marketing en direct"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
                />
              </div>
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="font-label-bold text-label-bold uppercase mb-2">
                    Marketing Digital (SEO / SEA)
                  </h3>
                  <p className="text-base text-tertiary leading-relaxed">
                    Acquisition ciblée, Google Ads, référencement naturel haute visibilité et automatisation marketing.
                  </p>
                </div>
                <div>
                  <h3 className="font-label-bold text-label-bold uppercase mb-2">
                    Opérationnel & terrain
                  </h3>
                  <p className="text-base text-tertiary leading-relaxed">
                    Activation de marque en point de vente et campagnes expérientielles directes.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block border-2 border-on-surface px-8 py-3 font-label-bold text-label-bold hover:bg-on-surface hover:text-surface transition-all uppercase tracking-wider"
              >
                Demander un audit
              </Link>
            </div>
          </div>

          {/* Événementiel (Col 6-12) */}
          <div className="lg:col-span-7 relative group overflow-hidden hover-lift bg-primary min-h-[460px] shadow-sm min-w-0 flex flex-col justify-between">
            <div className="absolute inset-0 z-0">
              <div
                className="w-full h-full object-cover opacity-35 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1400&q=80')`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
            </div>
            <div className="relative z-10 p-8 sm:p-12 text-on-primary h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="material-symbols-outlined text-4xl">
                    videocam
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-headline-md uppercase">
                    Événementiel
                  </h2>
                </div>
                <p className="text-lg text-on-primary/90 mb-8 max-w-xl leading-relaxed">
                  Conception, coordination et captation cinématographique d&apos;événements d&apos;envergure.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-black/40 border border-white/10 p-5 backdrop-blur-md">
                    <h3 className="font-label-bold text-on-primary text-lg mb-1 uppercase tracking-wide">
                      Captation
                    </h3>
                    <p className="text-sm text-on-primary/80">
                      Live streaming UHD &amp; régie multi-caméras
                    </p>
                  </div>
                  <div className="bg-black/40 border border-white/10 p-5 backdrop-blur-md">
                    <h3 className="font-label-bold text-on-primary text-lg mb-1 uppercase tracking-wide">
                      Réalisation
                    </h3>
                    <p className="text-sm text-on-primary/80">
                      Direction artistique scénique &amp; lumière
                    </p>
                  </div>
                  <div className="bg-black/40 border border-white/10 p-5 backdrop-blur-md">
                    <h3 className="font-label-bold text-on-primary text-lg mb-1 uppercase tracking-wide">
                      Montage
                    </h3>
                    <p className="text-sm text-on-primary/80">
                      Post-production premium &amp; sound design
                    </p>
                  </div>
                  <div className="bg-black/40 border border-white/10 p-5 backdrop-blur-md">
                    <h3 className="font-label-bold text-on-primary text-lg mb-1 uppercase tracking-wide">
                      Diffusion
                    </h3>
                    <p className="text-sm text-on-primary/80">
                      Régie technique globale et sonorisation
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-block bg-on-surface text-surface px-8 py-3 font-label-bold text-label-bold hover:bg-surface hover:text-on-surface transition-all uppercase tracking-wider shadow-lg"
                >
                  Organiser un événement
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

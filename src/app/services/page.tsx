import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agence Marketing & Communication Digitale : Nos Services",
  description:
    "Découvrez nos 5 expertises clés à Paris : Événementiel, Hôtesses, Audiovisuel, Digital et Communication.",
  keywords: [
    "agence marketing services",
    "agence de communication digitale services",
    "stratégie de marque paris",
    "consulting seo sea paris",
    "développement web sur-mesure",
    "production événementielle live",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Agence Marketing & Communication Digitale : Nos Services | PRO LIVE",
    description:
      "Quatre pôles d'excellence dédiés à votre croissance : Communication Corporate, Marketing Digital ROI, Développement Web et Spectacle Live.",
    url: "https://www.prolive.agency/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Hero Header */}
      <section className="px-4 sm:px-6 md:px-16 py-14 sm:py-20 bg-on-surface text-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="inline-block bg-primary text-on-primary px-4 py-1 font-label-bold text-label-bold mb-6 uppercase tracking-wider">
            DOMINER LE MARCHÉ
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-[80px] font-display-lg leading-[1.06] mb-8 uppercase tracking-tight break-words">
            NOS SERVICES <br />
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
          <span className="font-display-lg text-[140px] sm:text-[240px] md:text-[380px] leading-none text-surface">
            PRO
          </span>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="px-4 sm:px-6 md:px-16 py-16 sm:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Événementiel (Col 6-12) */}
          <div className="lg:col-span-12 relative group overflow-hidden hover-lift bg-primary min-h-0 sm:min-h-[460px] shadow-sm min-w-0 flex flex-col justify-between">
            <div className="absolute inset-0 z-0">
              <div
                className="w-full h-full object-cover opacity-35 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1400&q=80')`,
                }}
              ></div>
            </div>
            <div className="relative z-10 p-6 sm:p-8 md:p-12 text-on-primary h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="material-symbols-outlined text-4xl">
                    videocam
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline-md uppercase">
                    Événementiel
                  </h2>
                </div>
                <p className="text-lg text-on-primary/90 mb-8 max-w-xl leading-relaxed">
                  Conception, coordination et captation cinématographique d&apos;événements d&apos;envergure.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-black/40 border border-white/10 p-5 backdrop-blur-md">
                    <h3 className="font-label-bold text-on-primary text-lg mb-1 uppercase tracking-wide">
                      Évènement
                    </h3>
                    <p className="text-sm text-on-primary/80">
                      concerts, galas, salons et expos
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
                  className="w-full sm:w-auto inline-block bg-on-surface text-surface px-8 py-3 font-label-bold text-label-bold hover:bg-surface hover:text-on-surface transition-all uppercase tracking-wider shadow-lg text-center"
                >
                  Organiser un événement
                </Link>
              </div>
            </div>
          </div>

          {/* Hôtesses et hôtes de luxes (Col 1-5 Box / 6-12 Details) */}
          <div className="lg:col-span-5 bg-on-surface text-surface p-6 sm:p-8 md:p-12 flex flex-col justify-between hover-lift min-h-0 sm:min-h-[440px] shadow-sm min-w-0">
            <div className="flex justify-between items-start mb-8">
              <span className="material-symbols-outlined text-4xl text-primary">
                groups
              </span>
              <span className="text-6xl md:text-7xl font-headline-lg text-surface/10 font-bold">
                02
              </span>
            </div>
            <div className="my-6 w-full overflow-hidden">
              <img
                alt="Hôtesses et hôtes de luxes VIP Pro Live Agency"
                className="w-full h-auto object-contain"
                src="/images/image_12.jpg"
              />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-headline-md uppercase text-surface mb-2">
                Accueil d&apos;Excellence, image & représentation
              </h3>
              <p className="text-sm text-surface-variant">
                Un protocole rigoureusement orchestré pour représenter votre marque avec la plus haute distinction.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-surface-container border-r-4 border-primary p-6 sm:p-8 md:p-12 flex flex-col justify-between hover-lift min-h-0 sm:min-h-[440px] shadow-sm min-w-0">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="material-symbols-outlined text-4xl text-primary">
                  workspace_premium
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline-md uppercase">
                  Hôtesses et Hôtes de Luxes
                </h2>
              </div>
              <p className="text-lg font-body-md text-tertiary mb-12 max-w-xl leading-relaxed">
                &
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary mt-2 shrink-0"></div>
                  <div>
                    <h3 className="font-label-bold text-label-bold uppercase mb-1">
                      Accueil d&apos;Excellence, image & représentation
                    </h3>
                    <p className="text-sm text-tertiary">
                      Accueil d&apos;Excellence, image & représentation
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary mt-2 shrink-0"></div>
                  <div>
                    <h3 className="font-label-bold text-label-bold uppercase mb-1">
                      Événements Prestige
                    </h3>
                    <p className="text-sm text-tertiary">
                      Galas, défilés de mode, salons privés et lancements de produits
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary mt-2 shrink-0"></div>
                  <div>
                    <h3 className="font-label-bold text-label-bold uppercase mb-1">
                      Multilinguisme
                    </h3>
                    <p className="text-sm text-tertiary">
                      Personnel maîtrisant plusieurs langues pour clientèle internationale
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary mt-2 shrink-0"></div>
                  <div>
                    <h3 className="font-label-bold text-label-bold uppercase mb-1">
                      Coordination Sur-Mesure
                    </h3>
                    <p className="text-sm text-tertiary">
                      Tenues élégantes adaptées à l&apos;image de votre marque
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-on-surface/10 flex items-center justify-between flex-wrap gap-4">
              <span className="font-label-bold text-label-bold uppercase tracking-widest text-primary">
                VIP • Protocole • Prestige
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-label-bold text-label-bold text-on-surface hover:text-primary transition-colors"
              >
                RÉSERVER NOS ÉQUIPES D&apos;ACCUEIL <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
          {/* Audiovisuel (Col 1-7) */}
          <div className="lg:col-span-7 bg-surface-container border-l-4 border-primary p-6 sm:p-8 md:p-12 flex flex-col justify-between hover-lift min-h-0 sm:min-h-[440px] shadow-sm min-w-0">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="material-symbols-outlined text-4xl text-primary">
                  movie
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline-md uppercase">
                  Audiovisuel
                </h2>
              </div>
              <p className="text-lg font-body-md text-tertiary mb-12 max-w-xl leading-relaxed">
                Captation vidéo 4K, réalisation cinématographique et post-production de prestige. Nous concevons et réalisons des contenus audiovisuels percutants adaptés à votre stratégie de communication.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary mt-2 shrink-0"></div>
                  <div>
                    <h3 className="font-label-bold text-label-bold uppercase mb-1">
                      Captation Multi-caméras
                    </h3>
                    <p className="text-sm text-tertiary">
                      Enregistrement UHD et régie vidéo en direct
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary mt-2 shrink-0"></div>
                  <div>
                    <h3 className="font-label-bold text-label-bold uppercase mb-1">
                      Réalisation Cinéma
                    </h3>
                    <p className="text-sm text-tertiary">
                      Clips institutionnels, films d&apos;entreprise &amp; publicités
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary mt-2 shrink-0"></div>
                  <div>
                    <h3 className="font-label-bold text-label-bold uppercase mb-1">
                      Post-Production
                    </h3>
                    <p className="text-sm text-tertiary">
                      Montage, étalonnage professionnel et sound design
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary mt-2 shrink-0"></div>
                  <div>
                    <h3 className="font-label-bold text-label-bold uppercase mb-1">
                      Motion Design
                    </h3>
                    <p className="text-sm text-tertiary">
                      Animations 2D/3D et habillages dynamiques
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-on-surface/10 flex items-center justify-between flex-wrap gap-4">
              <span className="font-label-bold text-label-bold uppercase tracking-widest text-primary">
                Production • Captation • Studio
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-label-bold text-label-bold text-on-surface hover:text-primary transition-colors"
              >
                DISCUTER DE VOTRE PROJET AUDIOVISUEL <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-surface-container-highest p-6 sm:p-8 md:p-12 flex flex-col justify-between hover-lift min-h-0 sm:min-h-[440px] shadow-sm min-w-0 border border-on-surface/5">
            <div className="flex justify-between items-start mb-8">
              <span className="material-symbols-outlined text-4xl text-primary">
                videocam
              </span>
              <span className="text-6xl md:text-7xl font-headline-lg text-on-surface/10 font-bold">
                03
              </span>
            </div>
            <div className="my-6 w-full overflow-hidden">
              <img
                alt="Audiovisuel et production vidéo Pro Live Agency"
                className="w-full h-auto object-contain"
                src="/images/image_8.jpg"
              />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-headline-md uppercase mb-2">
                Excellence Visuelle
              </h3>
              <p className="text-sm text-tertiary">
                Des moyens techniques d&apos;exception pour sublimer votre image de marque sur tous les écrans.
              </p>
            </div>
          </div>

          {/* Digital (Col 8-12) */}
          <div className="lg:col-span-5 bg-on-surface text-surface p-6 sm:p-8 md:p-12 hover-lift flex flex-col justify-between min-h-0 sm:min-h-[440px] shadow-sm min-w-0">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="material-symbols-outlined text-4xl text-primary">
                  devices
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline-md uppercase">
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
            <div className="mt-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-block bg-primary text-on-primary px-8 py-3 font-label-bold text-label-bold hover:bg-primary-container transition-all uppercase tracking-wider shadow-md text-center"
              >
                Lancer un projet
              </Link>
              <span
                className="hidden sm:block material-symbols-outlined text-6xl opacity-20"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                bolt
              </span>
            </div>
          </div>

          {/* Communication (Col 1-7) */}
          <div className="lg:col-span-7 bg-surface-container border-l-4 border-primary p-6 sm:p-8 md:p-12 flex flex-col justify-between hover-lift min-h-0 sm:min-h-[440px] shadow-sm min-w-0">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="material-symbols-outlined text-4xl text-primary">
                  campaign
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline-md uppercase">
                  Relations publiques
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
                className="w-full sm:w-auto inline-block border-2 border-on-surface px-8 py-3 font-label-bold text-label-bold hover:bg-on-surface hover:text-surface transition-all uppercase tracking-wider text-center"
              >
                En savoir plus
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

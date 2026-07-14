import React from "react";
import Link from "next/link";
import AgencyCarousel from "@/components/AgencyCarousel";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-surface min-h-[88vh] flex flex-col justify-center">
        <div className="px-4 sm:px-6 md:px-12 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 xl:gap-16 items-center py-10 sm:py-14 lg:py-20 max-w-[1440px] mx-auto">
          <div className="lg:col-span-5 xl:col-span-5 space-y-5 sm:space-y-6 z-10 min-w-0">
            <div className="space-y-3.5">
              <span className="text-xs sm:text-sm font-label-bold text-primary tracking-widest uppercase block">
                Agence de Communication Digitale & Agence Marketing • Paris
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] font-display-lg leading-[1.12] uppercase text-on-surface tracking-tight break-words">
                Donner vie à vos <span className="text-primary">idées,</span> <br />
                créer des expériences <span className="text-primary">mémorables.</span>
              </h1>
              <p className="text-base sm:text-lg font-body-lg text-tertiary max-w-xl leading-relaxed">
                En tant qu&apos;<strong>agence de communication digitale</strong> et{" "}
                <strong>agence marketing</strong> experte à Paris, nous élaborons des
                stratégies de communication percutantes, des campagnes d&apos;acquisition à
                fort ROI et des productions événementielles prestige pour propulser votre marque.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3.5 pt-1">
              <Link
                href="/realisations"
                className="w-full sm:w-auto bg-on-surface text-surface px-6 py-3.5 font-label-bold text-xs sm:text-sm hover:bg-primary transition-all duration-300 text-center tracking-wider uppercase shadow-sm"
              >
                VOIR NOS PROJETS
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto border-2 border-on-surface text-on-surface px-6 py-3.5 font-label-bold text-xs sm:text-sm hover:bg-on-surface hover:text-surface transition-all duration-300 text-center tracking-wider uppercase"
              >
                CONTACTEZ-NOUS
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 xl:col-span-7 relative w-full transition-all duration-700 pt-4 lg:pt-0">
            <div className="relative w-full">
              <img
                alt="Donner vie à vos idées, créer des expériences mémorables - Pro Live Agency"
                className="w-full h-auto object-contain shadow-2xl border border-on-surface/15 bg-surface-container/30 transition-transform duration-500 hover:scale-[1.01]"
                src="/images/hero.jpg"
              />
              {/* Accent Boxes */}
              <div className="absolute -bottom-6 -left-6 bg-primary w-28 h-28 hidden sm:block shadow-xl -z-10 transition-transform duration-500"></div>
              <div className="absolute -top-6 -right-6 border-2 border-primary w-24 h-24 hidden lg:block -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Agency */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-16 bg-surface-container-low relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16">
          <div className="w-full lg:w-1/2 space-y-6 min-w-0">
            <span className="text-label-bold font-label-bold text-primary tracking-widest uppercase block">
              • À Propos
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline-lg text-on-surface uppercase tracking-tight break-words">
              L&apos;AGENCE
            </h2>
            <p className="text-lg font-body-lg text-tertiary leading-relaxed">
              <strong>Pro Live Agency</strong> est née d&apos;une conviction : la
              communication moderne nécessite une alliance parfaite entre art,
              technologie et stratégie. Nous fusionnons la rigueur d&apos;un
              cabinet de conseil marketing avec l&apos;audace créative et la maîtrise
              technique d&apos;un studio de production live.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l-2 border-primary pl-4">
                <span className="block text-3xl sm:text-4xl font-display-lg text-on-surface">
                  30+
                </span>
                <span className="text-sm text-tertiary uppercase font-label-bold tracking-wider">
                  Projets Livrés
                </span>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <span className="block text-3xl sm:text-4xl font-display-lg text-on-surface">
                  100%
                </span>
                <span className="text-sm text-tertiary uppercase font-label-bold tracking-wider">
                  Engagement &amp; Qualité
                </span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <AgencyCarousel />
          </div>
        </div>
      </section>

      {/* Expertises Bento Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-16 bg-surface max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline-lg text-on-surface uppercase mb-4 tracking-tight break-words">
            NOS SERVICES
          </h2>
          <div className="w-24 h-2 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-6">
          {/* Communication */}
          <Link
            href="/services"
            className="md:col-span-2 lg:col-span-2 lg:row-span-1 bg-surface-container-high p-6 sm:p-8 md:p-12 flex flex-col justify-between hover:bg-primary group transition-all duration-500 min-h-[260px] sm:min-h-[320px] shadow-sm min-w-0"
          >
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-primary group-hover:text-surface text-4xl transition-colors">
                campaign
              </span>
              <span className="font-label-bold text-label-bold text-on-surface group-hover:text-surface transition-colors">
                01
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl sm:text-3xl font-headline-md text-on-surface group-hover:text-surface mb-3 uppercase transition-colors">
                Communication
              </h3>
              <p className="text-body-md font-body-md text-tertiary group-hover:text-surface transition-colors leading-relaxed">
                Stratégie de marque, relations publiques, audit de positionnement et branding institutionnel.
              </p>
            </div>
          </Link>

          {/* Marketing */}
          <Link
            href="/services"
            className="md:col-span-1 lg:col-span-1 lg:row-span-2 bg-on-surface p-6 sm:p-8 md:p-10 flex flex-col justify-between group min-h-[340px] lg:min-h-[440px] shadow-sm min-w-0"
          >
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-primary text-4xl">
                trending_up
              </span>
              <span className="font-label-bold text-label-bold text-surface">
                02
              </span>
            </div>
            <div className="my-6 aspect-[4/3] w-full overflow-hidden">
              <img
                alt="Tableau de bord analytics et données marketing"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
              />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-headline-md text-surface mb-3 uppercase group-hover:text-primary transition-colors">
                Marketing
              </h3>
              <p className="text-body-md font-body-md text-surface-variant leading-relaxed">
                Analyse de données, campagnes d&apos;acquisition à fort impact et pilotage du ROI.
              </p>
            </div>
          </Link>

          {/* Digital */}
          <Link
            href="/services"
            className="md:col-span-1 lg:col-span-1 lg:row-span-1 border-2 border-on-surface p-6 sm:p-8 md:p-12 flex flex-col justify-between hover:bg-on-surface hover:text-surface group transition-all duration-300 min-h-[260px] sm:min-h-[320px] min-w-0"
          >
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-primary text-4xl">
                web
              </span>
              <span className="font-label-bold text-label-bold text-on-surface group-hover:text-surface transition-colors">
                03
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl sm:text-3xl font-headline-md text-on-surface group-hover:text-surface mb-3 uppercase transition-colors">
                Digital
              </h3>
              <p className="text-body-md font-body-md text-tertiary group-hover:text-surface transition-colors leading-relaxed">
                Développement web haute performance, UX/UI design sur-mesure et stratégies sociales.
              </p>
            </div>
          </Link>

          {/* Événementiel */}
          <Link
            href="/services"
            className="md:col-span-2 lg:col-span-3 lg:row-span-1 relative overflow-hidden group min-h-[300px] sm:min-h-[340px] shadow-sm flex flex-col justify-end min-w-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1400&q=80')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:from-black/80 transition-all"></div>
            <div className="relative p-6 sm:p-8 md:p-12 z-10 flex flex-col justify-end">
              <span className="font-label-bold text-label-bold text-primary mb-2 tracking-widest uppercase">
                04 • Production Live & Spectacle
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-headline-lg text-surface uppercase group-hover:text-primary transition-colors mb-2">
                Événementiel
              </h3>
              <p className="text-body-md font-body-md text-surface-variant max-w-2xl leading-relaxed">
                Production live de prestige, captation vidéo multi-caméra 4K, régie technique complète et coordination logistique sans faille.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-16 bg-primary flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, #000 1.5px, transparent 1.5px)",
              backgroundSize: "32px 32px",
            }}
          ></div>
        </div>
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline-lg text-surface mb-6 uppercase tracking-tight break-words">
            PRÊT À RÉALISER VOTRE PROJET ?
          </h2>
          <p className="text-lg sm:text-xl font-body-lg text-surface opacity-95 mb-12 leading-relaxed">
            Chaque défi est une opportunité de briller. Discutons de vos ambitions et
            recevez une proposition personnalisée sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-on-surface text-surface px-8 py-4 font-label-bold text-label-bold hover:scale-105 transition-transform tracking-wider uppercase inline-block shadow-lg text-center"
            >
              DEMANDER UN DEVIS
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto border-2 border-surface text-surface px-8 py-4 font-label-bold text-label-bold hover:bg-surface hover:text-primary transition-all tracking-wider uppercase inline-block text-center"
            >
              NOUS APPELER
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import React from "react";
import Link from "next/link";
import AgencyCarousel from "@/components/AgencyCarousel";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-surface pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-12">
        <div className="px-4 sm:px-6 md:px-12 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center max-w-[1440px] mx-auto">
          <div className="lg:col-span-5 xl:col-span-5 space-y-5 sm:space-y-6 z-10 min-w-0">
            <div className="space-y-3.5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] font-display-lg leading-[1.12] uppercase text-on-surface tracking-tight break-words">
                Le luxe ne suit pas <span className="text-primary">les règles il les crée,</span> <br />
              </h1>
            </div>
          </div>

          <div className="lg:col-span-7 xl:col-span-7 relative w-full transition-all duration-700 pt-4 lg:pt-0">
            <div className="relative w-full">
              <img
                alt="Le luxe ne suit pas les règles il les crée. Le futur du prestige se vit au pésent"
                className="w-full h-auto object-contain shadow-2xl border border-on-surface/15 bg-surface-container/30 transition-transform duration-500 hover:scale-[1.01]"
                src="/images/home.jpg"
              />
              {/* Accent Boxes */}
              <div className="absolute -bottom-6 -left-6 bg-primary w-28 h-28 hidden sm:block shadow-xl -z-10 transition-transform duration-500"></div>
              <div className="absolute -top-6 -right-6 border-2 border-primary w-24 h-24 hidden lg:block -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Agency */}
      <section className="pt-8 sm:pt-12 pb-16 sm:pb-24 px-4 sm:px-6 md:px-8 bg-surface-container-low relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16">
          <div className="w-full lg:w-1/2 space-y-6 min-w-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline-lg text-on-surface uppercase tracking-tight break-words">
              L&apos;AGENCE
            </h2>
            <p className="text-lg font-body-lg text-tertiary leading-relaxed">
              <strong>Pro Live Agency</strong> est un professionnel dans l'organisation et la gestion de grands événements privés et professionnels.
              <br />Nous accomagnons les marques, les entreprises et les entrepreneurs dans leur croissance grâce à des solutions créatives et performantes.<br />
              Nous mettons notre expertise afin de créer des événements uniques, élégants et parfaitement orchestrés.<br /> Chez Pro-live agency, chaque évènement est conçu sur mesure pour répondre aux objectifs et marquer durablement les invités.
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
      <section className="py-12 sm:py-12 px-4 sm:px-6 md:px-8 bg-surface max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline-lg text-on-surface uppercase mb-4 tracking-tight break-words">
            NOS SERVICES
          </h2>
          <div className="w-24 h-2 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-6">
          {/* Événementiel */}
          <Link
            href="/services"
            className="md:col-span-2 lg:col-span-4 lg:row-span-1 bg-surface-container border-2 border-surface/10 p-6 sm:p-8 md:p-12 flex flex-col justify-between hover:bg-primary group transition-all duration-500 min-h-[340px] sm:min-h-[420px] shadow-sm min-w-0"
          >
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-primary group-hover:text-surface text-4xl transition-colors">
                festival
              </span>
              <span className="font-label-bold text-label-bold text-on-surface group-hover:text-surface transition-colors">
                01
              </span>
            </div>
            <div className="my-6 w-full overflow-hidden">
              <img
                alt="Événementiel et production live Pro Live Agency"
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                src="/images/spectacle.jpg"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-2xl sm:text-3xl font-headline-md text-on-surface group-hover:text-surface mb-3 uppercase transition-colors">
                Événementiel
              </h3>
              <p className="text-body-md font-body-md text-tertiary group-hover:text-surface transition-colors leading-relaxed">
                Conception et production d&apos;évènements de prestige, coordination, logistique & technique, management artisique, accompagnement et développement
              </p>
            </div>
          </Link>

          {/* Hôtesses et hôtes de luxes */}
          <Link
            href="/services"
            className="md:col-span-1 lg:col-span-2 lg:row-span-1 bg-neutral-800 p-6 sm:p-8 md:p-10 flex flex-col justify-between group min-h-[340px] sm:min-h-[420px] shadow-sm min-w-0"
          >
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-primary text-4xl">
                groups
              </span>
              <span className="font-label-bold text-label-bold text-surface">
                02
              </span>
            </div>
            <div className="my-6 w-full overflow-hidden">
              <img
                alt="Hôtesses et hôtes de luxes Pro Live Agency"
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                src="/images/accueil.jpg"
              />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-headline-md text-surface mb-3 uppercase group-hover:text-primary transition-colors">
                Accueil d'excellence, image et représentation corporate
              </h3>
              <p className="text-body-md font-body-md text-surface-variant leading-relaxed">
                Hôtesses et Hôtes de luxe
              </p>
            </div>
          </Link>

          {/* Audiovisuel */}
          <Link
            href="/services"
            className="md:col-span-1 lg:col-span-2 lg:row-span-1 bg-surface-container-highest p-6 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-primary group transition-all duration-500 min-h-[340px] sm:min-h-[420px] shadow-sm min-w-0"
          >
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-primary group-hover:text-surface text-4xl transition-colors">
                movie
              </span>
              <span className="font-label-bold text-label-bold text-on-surface group-hover:text-surface transition-colors">
                03
              </span>
            </div>
            <div className="my-6 w-full overflow-hidden">
              <img
                alt="Production Audiovisuelle et Captation Pro Live Agency"
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                src="/images/audiovisuel.jpg"
              />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-headline-md text-on-surface mb-3 uppercase group-hover:text-surface transition-colors">
                Audiovisuel
              </h3>
              <p className="text-body-md font-body-md text-tertiary group-hover:text-surface transition-colors leading-relaxed">
                Captation  & production, vidéo et photos, montage et post-production, contenus, émissions.
              </p>
            </div>
          </Link>

          {/* Digital */}
          <Link
            href="/services"
            className="md:col-span-2 lg:col-span-2 lg:row-span-1 border-2 border-on-surface p-6 sm:p-8 md:p-12 flex flex-col justify-between hover:bg-on-surface hover:text-surface group transition-all duration-300 min-h-[340px] sm:min-h-[420px] min-w-0"
          >
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-primary text-4xl">
                web
              </span>
              <span className="font-label-bold text-label-bold text-on-surface group-hover:text-surface transition-colors">
                04
              </span>
            </div>
            <div className="my-6 w-full overflow-hidden">
              <img
                alt="Création numérique et Digital Pro Live Agency"
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                src="/images/info.jpg"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-2xl sm:text-3xl font-headline-md text-on-surface group-hover:text-surface mb-3 uppercase transition-colors">
                Digital
              </h3>
              <p className="text-body-md font-body-md text-tertiary group-hover:text-surface transition-colors leading-relaxed">
                Marketing, Développement web haute performance, UX/UI design sur-mesure et stratégies sociales, Design graphique et applications mobiles
              </p>
            </div>
          </Link>

          {/* Communication */}
          <Link
            href="/services"
            className="md:col-span-2 lg:col-span-2 lg:row-span-1 bg-surface-container-high p-6 sm:p-8 md:p-12 flex flex-col justify-between hover:bg-primary group transition-all duration-500 min-h-[340px] sm:min-h-[420px] shadow-sm min-w-0"
          >
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-primary group-hover:text-surface text-4xl transition-colors">
                campaign
              </span>
              <span className="font-label-bold text-label-bold text-on-surface group-hover:text-surface transition-colors">
                05
              </span>
            </div>
            <div className="my-6 w-full overflow-hidden">
              <img
                alt="Studio et équipe Pro Live Agency en action - Communication"
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                src="/images/rp.jpg"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-2xl sm:text-3xl font-headline-md text-on-surface group-hover:text-surface mb-3 uppercase transition-colors">
                Relations publiques
              </h3>
              <p className="text-body-md font-body-md text-tertiary group-hover:text-surface transition-colors leading-relaxed">
                Relations avec les médias, Gestion de l'e-réputation, Communication de crise, Recherche de partenariats, Stratégie de communication institutionnelle.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-12 px-4 sm:px-6 md:px-8 bg-primary flex flex-col items-center text-center relative overflow-hidden">
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
              NOUS CONTACTER
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-surface min-h-[88vh] flex flex-col justify-center">
        <div className="px-6 md:px-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-16 lg:py-24 max-w-7xl mx-auto">
          <div className="lg:col-span-7 space-y-8 z-10 min-w-0">
            <div className="space-y-4">
              <span className="text-label-bold font-label-bold text-primary tracking-widest uppercase block">
                Communication • Marketing • Événementiel
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-display-lg leading-[1.08] uppercase text-on-surface tracking-tight">
                L&apos;excellence au service <br />
                de votre <span className="text-primary">image.</span>
              </h1>
              <p className="text-lg sm:text-xl font-body-lg text-tertiary max-w-2xl leading-relaxed">
                Définir une voix unique et influente. Nous élaborons des stratégies
                de communication percutantes et ciblées pour positionner votre marque
                comme leader incontesté sur son marché.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/realisations"
                className="bg-on-surface text-surface px-8 py-4 font-label-bold text-label-bold hover:bg-primary transition-all duration-300 text-center tracking-wider uppercase"
              >
                VOIR NOS PROJETS
              </Link>
              <Link
                href="/contact"
                className="border-2 border-on-surface text-on-surface px-8 py-4 font-label-bold text-label-bold hover:bg-on-surface hover:text-surface transition-all duration-300 text-center tracking-wider uppercase"
              >
                CONTACTEZ-NOUS
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[460px] lg:h-[560px] transition-all duration-700">
            <img
              alt="L'excellence au service de votre image - Pro Live Agency"
              className="w-full h-full object-cover shadow-2xl border border-on-surface/10"
              src="/images/hero.jpg"
            />
            {/* Accent Box */}
            <div className="absolute -bottom-6 -left-6 bg-primary w-24 h-24 hidden sm:block shadow-lg"></div>
          </div>
        </div>
      </section>

      {/* About Agency */}
      <section className="py-24 px-6 md:px-16 bg-on-surface text-surface">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2 min-w-0">
            <h2 className="text-4xl sm:text-5xl font-headline-lg mb-6 uppercase tracking-tight">
              L&apos;AGENCE
            </h2>
            <p className="text-lg sm:text-xl font-body-lg text-surface-variant opacity-80 leading-relaxed">
              Chez PRO LIVE., nous ne nous contentons pas de produire ; nous
              créons de l&apos;impact. Basés au cœur de l&apos;innovation, nous
              accompagnons les entreprises dans leur transformation digitale et
              événementielle. Notre équipe multidisciplinaire allie rigueur
              stratégique et audace artistique.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="border-l-4 border-primary pl-6 py-1">
                <div className="text-4xl sm:text-5xl font-headline-md text-primary leading-none mb-2">
                  30+
                </div>
                <div className="font-label-bold text-label-bold opacity-60 uppercase tracking-wider">
                  Projets Livrés
                </div>
              </div>
              <div className="border-l-4 border-primary pl-6 py-1">
                <div className="text-4xl sm:text-5xl font-headline-md text-primary leading-none mb-2">
                  100%
                </div>
                <div className="font-label-bold text-label-bold opacity-60 uppercase tracking-wider">
                  Engagement
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="bg-surface-container-low h-[420px] w-full flex items-center justify-center p-4 sm:p-6 shadow-xl">
              <img
                alt="Bureau et studio moderne de Pro Live Agency"
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertises Bento Grid */}
      <section className="py-24 px-6 md:px-16 bg-surface max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-headline-lg text-on-surface uppercase mb-4 tracking-tight">
            NOS EXPERTISES
          </h2>
          <div className="w-24 h-2 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-6">
          {/* Communication */}
          <Link
            href="/services"
            className="lg:col-span-2 lg:row-span-1 bg-surface-container-high p-8 sm:p-12 flex flex-col justify-between hover:bg-primary group transition-all duration-500 min-h-[320px] shadow-sm"
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
              <h3 className="text-3xl font-headline-md text-on-surface group-hover:text-surface mb-3 uppercase transition-colors">
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
            className="lg:col-span-1 lg:row-span-2 bg-on-surface p-8 sm:p-10 flex flex-col justify-between group min-h-[440px] shadow-sm"
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
              <h3 className="text-3xl font-headline-md text-surface mb-3 uppercase group-hover:text-primary transition-colors">
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
            className="lg:col-span-1 lg:row-span-1 border-2 border-on-surface p-8 sm:p-12 flex flex-col justify-between hover:bg-on-surface hover:text-surface group transition-all duration-300 min-h-[320px]"
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
              <h3 className="text-3xl font-headline-md text-on-surface group-hover:text-surface mb-3 uppercase transition-colors">
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
            className="lg:col-span-3 lg:row-span-1 relative overflow-hidden group min-h-[340px] shadow-sm flex flex-col justify-end"
          >
            <div
              className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1400&q=80')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:from-black/80 transition-all"></div>
            <div className="relative p-8 sm:p-12 z-10 flex flex-col justify-end">
              <span className="font-label-bold text-label-bold text-primary mb-2 tracking-widest uppercase">
                04 • Production Live & Spectacle
              </span>
              <h3 className="text-3xl sm:text-4xl font-headline-lg text-surface uppercase group-hover:text-primary transition-colors mb-2">
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
      <section className="py-24 px-6 md:px-16 bg-primary flex flex-col items-center text-center relative overflow-hidden">
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
          <h2 className="text-4xl sm:text-5xl font-headline-lg text-surface mb-6 uppercase tracking-tight">
            PRÊT À RÉALISER VOTRE PROJET ?
          </h2>
          <p className="text-lg sm:text-xl font-body-lg text-surface opacity-95 mb-12 leading-relaxed">
            Chaque défi est une opportunité de briller. Discutons de vos ambitions et
            recevez une proposition personnalisée sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="bg-on-surface text-surface px-8 py-4 font-label-bold text-label-bold hover:scale-105 transition-transform tracking-wider uppercase inline-block shadow-lg"
            >
              DEMANDER UN DEVIS
            </Link>
            <Link
              href="/contact"
              className="border-2 border-surface text-surface px-8 py-4 font-label-bold text-label-bold hover:bg-surface hover:text-primary transition-all tracking-wider uppercase inline-block"
            >
              NOUS APPELER
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

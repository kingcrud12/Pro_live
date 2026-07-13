import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-on-surface text-surface-variant w-full mt-auto border-t border-surface/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 pt-12 sm:pt-20 pb-8 sm:pb-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-surface/15">
          {/* Brand & Tagline */}
          <div className="lg:col-span-5 flex flex-col justify-between min-w-0">
            <div>
              <Link
                href="/"
                className="text-3xl sm:text-5xl font-headline-md text-surface uppercase tracking-tight block hover:text-primary transition-colors font-bold break-words"
              >
                PRO LIVE<span className="text-primary">.</span>
              </Link>
              <p className="text-lg sm:text-xl font-body-lg text-surface/90 mt-4 max-w-md leading-relaxed">
                L&apos;excellence au service de votre image.
              </p>
              <p className="text-sm text-surface/60 mt-3 max-w-sm leading-normal">
                Stratégies de communication percutantes, création de marque et productions événementielles haute précision.
              </p>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 min-w-0">
            {/* Column 1: Expertises */}
            <div className="flex flex-col gap-3 min-w-0">
              <span className="text-label-bold font-label-bold text-primary uppercase tracking-widest text-xs">
                EXPERTISES
              </span>
              <Link
                href="/services"
                className="text-base text-surface/80 hover:text-primary transition-colors"
              >
                Communication
              </Link>
              <Link
                href="/services"
                className="text-base text-surface/80 hover:text-primary transition-colors"
              >
                Marketing Digital
              </Link>
              <Link
                href="/services"
                className="text-base text-surface/80 hover:text-primary transition-colors"
              >
                Événementiel & Live
              </Link>
              <Link
                href="/services"
                className="text-base text-surface/80 hover:text-primary transition-colors"
              >
                Branding & 360°
              </Link>
            </div>

            {/* Column 2: Navigation */}
            <div className="flex flex-col gap-3 min-w-0">
              <span className="text-label-bold font-label-bold text-primary uppercase tracking-widest text-xs">
                NAVIGATION
              </span>
              <Link
                href="/"
                className="text-base text-surface/80 hover:text-primary transition-colors"
              >
                Accueil
              </Link>
              <Link
                href="/realisations"
                className="text-base text-surface/80 hover:text-primary transition-colors"
              >
                Nos Réalisations
              </Link>
              <Link
                href="/contact"
                className="text-base text-surface/80 hover:text-primary transition-colors"
              >
                Contact & Devis
              </Link>
              <Link
                href="/contact"
                className="text-base text-surface/80 hover:text-primary transition-colors"
              >
                Mentions Légales
              </Link>
            </div>

            {/* Column 3: Contact & Social */}
            <div className="flex flex-col gap-3 min-w-0">
              <span className="text-label-bold font-label-bold text-primary uppercase tracking-widest text-xs">
                STUDIO PARIS
              </span>
              <p className="text-sm text-surface/80 leading-relaxed">
                12 Rue de la Création<br />
                75008 Paris, France
              </p>
              <a
                href="mailto:hello@prolive.agency"
                className="text-sm text-primary hover:underline font-label-bold mt-1 block"
              >
                hello@prolive.agency
              </a>
              <div className="flex gap-4 pt-2">
                <Link
                  href="/contact"
                  className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-primary text-surface transition-colors"
                  title="Email Studio"
                >
                  <span className="material-symbols-outlined text-xl">
                    alternate_email
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-primary text-surface transition-colors"
                  title="Téléphone"
                >
                  <span className="material-symbols-outlined text-xl">
                    call
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4 text-xs sm:text-sm text-surface/50 font-label-bold uppercase tracking-wider text-center sm:text-left">
          <p>© 2024 PRO LIVE AGENCY. TOUS DROITS RÉSERVÉS.</p>
          <p>CONÇU ET DÉVELOPPÉ PAR PRO LIVE DIGITAL AGENCY • PARIS</p>
        </div>
      </div>
    </footer>
  );
}

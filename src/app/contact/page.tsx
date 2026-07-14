"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [securityAlert, setSecurityAlert] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Communication & Stratégie de Marque",
    project: "",
  });

  // Strict Input Sanitizer: Strips HTML/JS tags and dangerous attributes
  const sanitizeInput = (raw: string): string => {
    if (!raw) return "";
    return raw
      .replace(/[<>]/g, "") // Block angled brackets completely
      .replace(/(javascript:|onload=|onerror=|onclick=|onmouseover=|script|iframe|object|embed)/gi, "") // Remove XSS patterns
      .replace(/[\u0000-\u001F\u007F-\u009F]/g, ""); // Strip control chars/null bytes
  };

  // Intercept keyboard shortcuts & characters forbidden for XSS (< and >)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "<" || e.key === ">") {
      e.preventDefault();
      setSecurityAlert("Sécurité active : les caractères de balises '<' et '>' sont interdits dans ce formulaire.");
    }
  };

  // Intercept copy-paste events to block malicious script injections
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement | HTMLTextAreaElement>, fieldName: string) => {
    const text = e.clipboardData.getData("text");
    if (/[<>]|script|javascript:|on\w+\s*=/i.test(text)) {
      e.preventDefault();
      setSecurityAlert("Sécurité active : le collage de code, balises HTML ou scripts a été intercepté et bloqué.");
    } else {
      e.preventDefault();
      const sanitized = sanitizeInput(text);
      setFormData((prev) => ({
        ...prev,
        [fieldName]: sanitizeInput(prev[fieldName as keyof typeof prev] + sanitized),
      }));
    }
  };

  const handleChange = (fieldName: string, value: string) => {
    const sanitized = sanitizeInput(value);
    if (value !== sanitized) {
      setSecurityAlert("Sécurité active : tentative d'injection nettoyée en temps réel.");
    } else {
      if (securityAlert && !/[<>]|script/i.test(sanitized)) {
        setSecurityAlert(null);
      }
    }
    setFormData((prev) => ({ ...prev, [fieldName]: sanitized }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Final firewall check before submission
    const combined = `${formData.name} ${formData.email} ${formData.project}`;
    if (/[<>]|script|javascript:|on\w+\s*=/i.test(combined)) {
      setSecurityAlert("ALERTE SÉCURITÉ : Tentative d'injection de script détectée. L'envoi du formulaire est bloqué.");
      return;
    }

    setSecurityAlert(null);
    setFormSubmitted(true);
  };

  return (
    <main className="pt-8 w-full bg-surface overflow-x-hidden">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 md:px-16 py-14 sm:py-20 bg-surface-container-lowest max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 sm:gap-8">
          <div className="w-full lg:w-2/3 min-w-0">
            <h1 className="text-4xl sm:text-6xl md:text-[76px] font-display-lg text-on-surface uppercase leading-none tracking-tight break-words">
              PARLONS DE<br />
              <span className="text-primary">VOTRE PROJET.</span>
            </h1>
          </div>
          <div className="w-full lg:w-1/3 pb-2">
            <p className="text-lg sm:text-xl font-body-lg text-tertiary leading-relaxed">
              Donnez vie à vos idées. Créons ensemble des expériences
              mémorables, mesurables et à fort impact.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid (Bento Style) */}
      <section className="px-4 sm:px-6 md:px-16 py-16 sm:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Info Column */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6 min-w-0">
            {/* Contact Cards */}
            <div className="bg-on-surface p-6 sm:p-8 text-surface flex flex-col justify-between min-h-[160px] sm:h-52 gap-4 group cursor-default shadow-sm">
              <span className="material-symbols-outlined text-primary text-4xl">
                alternate_email
              </span>
              <div>
                <p className="font-label-bold text-label-bold text-surface-variant uppercase tracking-widest mb-1 text-xs">
                  Email
                </p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-headline-md tracking-tight break-all sm:break-normal">
                  HELLO@PROLIVE.AGENCY
                </h3>
              </div>
            </div>
            <div className="bg-surface-container p-6 sm:p-8 border border-on-surface/10 flex flex-col justify-between min-h-[160px] sm:h-52 gap-4 shadow-sm">
              <span className="material-symbols-outlined text-primary text-4xl">
                call
              </span>
              <div>
                <p className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest mb-1 text-xs">
                  Téléphone
                </p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-headline-md">
                  +33 (0)1 42 68 55 00
                </h3>
              </div>
            </div>
            <div className="bg-surface-container p-6 sm:p-8 border border-on-surface/10 flex flex-col justify-between min-h-[160px] sm:h-52 gap-4 shadow-sm">
              <span className="material-symbols-outlined text-primary text-4xl">
                location_on
              </span>
              <div>
                <p className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest mb-1 text-xs">
                  Adresse Studio & Bureaux
                </p>
                <h3 className="text-lg sm:text-xl md:text-2xl font-headline-md leading-snug">
                  12 RUE DE LA CRÉATION, 75008 PARIS
                </h3>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-surface border border-on-surface/20 p-6 sm:p-8 md:p-12 shadow-sm min-w-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline-lg uppercase tracking-tight">
                Envoyez un message
              </h2>
              <div className="flex items-center gap-1.5 bg-surface-container-high px-3 py-1 rounded-none border border-on-surface/10 self-start sm:self-auto" title="Protection Anti-XSS & Injection de Script activée">
                <span className="material-symbols-outlined text-primary text-base">verified_user</span>
                <span className="text-xs font-label-bold uppercase tracking-wider text-tertiary">Anti-XSS Shield</span>
              </div>
            </div>

            {securityAlert && (
              <div className="bg-primary/15 border-l-4 border-primary p-4 mb-6 text-on-surface flex items-center justify-between shadow-sm animate-pulse">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-2xl shrink-0">gpp_maybe</span>
                  <span className="text-sm font-label-bold">{securityAlert}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSecurityAlert(null)}
                  className="text-xs uppercase font-bold text-primary hover:underline ml-4 shrink-0 cursor-pointer"
                >
                  Fermer
                </button>
              </div>
            )}

            {formSubmitted ? (
              <div className="bg-primary/10 border-l-4 border-primary p-8 my-8 text-center space-y-4">
                <span className="material-symbols-outlined text-primary text-6xl">
                  check_circle
                </span>
                <h3 className="text-3xl font-headline-md text-on-surface uppercase">
                  Demande envoyée !
                </h3>
                <p className="text-base sm:text-lg text-tertiary">
                  Merci {formData.name || "de votre confiance"}. Notre direction
                  créative prendra contact avec vous sous 24h.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 bg-on-surface text-surface px-8 py-3 font-label-bold text-label-bold hover:bg-primary transition-colors uppercase tracking-wider cursor-pointer"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-bold text-label-bold uppercase text-xs tracking-wider text-on-surface">
                      Nom complet *
                    </label>
                    <input
                      required
                      name="name"
                      value={formData.name}
                      onKeyDown={handleKeyDown}
                      onPaste={(e) => handlePaste(e, "name")}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="bg-transparent border-b border-on-surface/40 py-3 focus:outline-none focus:border-primary transition-colors text-base"
                      placeholder="Jean Dupont"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-bold text-label-bold uppercase text-xs tracking-wider text-on-surface">
                      Email professionnel *
                    </label>
                    <input
                      required
                      name="email"
                      value={formData.email}
                      onKeyDown={handleKeyDown}
                      onPaste={(e) => handlePaste(e, "email")}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="bg-transparent border-b border-on-surface/40 py-3 focus:outline-none focus:border-primary transition-colors text-base"
                      placeholder="jean@entreprise.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-bold text-label-bold uppercase text-xs tracking-wider text-on-surface">
                    Pôle d&apos;expertise souhaité
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    className="bg-transparent border-b border-on-surface/40 py-3 focus:outline-none focus:border-primary transition-colors text-base appearance-none cursor-pointer"
                  >
                    <option>Communication & Stratégie de Marque</option>
                    <option>Marketing Digital & Acquisition</option>
                    <option>Développement Web & UX/UI Digital</option>
                    <option>Production Événementielle & Audiovisuel</option>
                    <option>Autre projet sur-mesure</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-bold text-label-bold uppercase text-xs tracking-wider text-on-surface">
                    Votre projet & objectifs *
                  </label>
                  <textarea
                    required
                    name="project"
                    value={formData.project}
                    onKeyDown={handleKeyDown}
                    onPaste={(e) => handlePaste(e, "project")}
                    onChange={(e) => handleChange("project", e.target.value)}
                    className="bg-transparent border-b border-on-surface/40 py-3 focus:outline-none focus:border-primary transition-colors text-base resize-none"
                    placeholder="Décrivez brièvement votre besoin, vos délais et vos ambitions..."
                    rows={4}
                  ></textarea>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full bg-on-surface text-surface text-2xl font-headline-md py-5 hover:bg-primary transition-colors duration-300 uppercase tracking-tight cursor-pointer shadow-md"
                  >
                    Envoyer la demande
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-4 sm:px-6 md:px-16 py-16 sm:py-24 max-w-7xl mx-auto">
        <div className="relative h-[380px] sm:h-[500px] md:h-[580px] w-full grayscale hover:grayscale-0 transition-all duration-700 border border-on-surface/20 overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-on-surface/10 z-10 pointer-events-none"></div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80"
            alt="Siège social moderne de Pro Live Agency à Paris"
          />
          <div className="absolute top-4 left-4 right-4 sm:right-auto sm:top-6 sm:left-6 bg-on-surface text-surface p-6 sm:p-8 z-20 sm:max-w-sm shadow-xl">
            <h4 className="text-2xl sm:text-3xl font-headline-md mb-3 tracking-tight">
              SIÈGE SOCIAL PARIS
            </h4>
            <p className="text-sm sm:text-base font-body-md opacity-85 leading-relaxed">
              Notre studio créatif est situé au cœur de Paris (8ème arrondissement). Venez nous
              rencontrer autour d&apos;un café pour discuter de vos ambitions et découvrir notre showroom technique.
            </p>
          </div>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section className="bg-on-surface py-16 sm:py-24 overflow-hidden relative">
        <div className="px-4 sm:px-6 md:px-16 relative z-10 flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-6xl md:text-[80px] font-display-lg text-surface opacity-10 leading-none select-none mb-6 uppercase tracking-wider break-words">
            KINETIC ENERGY
          </h2>
          <div className="max-w-3xl">
            <p className="text-2xl sm:text-4xl font-headline-md text-surface mb-8 uppercase tracking-tight">
              PRÊT À ACCÉLÉRER ?
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
              <span className="bg-primary text-on-primary font-label-bold px-5 sm:px-8 py-2.5 sm:py-3 uppercase tracking-widest text-xs sm:text-sm shadow-md">
                MARKETING
              </span>
              <span className="bg-surface text-on-surface font-label-bold px-5 sm:px-8 py-2.5 sm:py-3 uppercase tracking-widest text-xs sm:text-sm shadow-md">
                DIGITAL
              </span>
              <span className="bg-primary text-on-primary font-label-bold px-5 sm:px-8 py-2.5 sm:py-3 uppercase tracking-widest text-xs sm:text-sm shadow-md">
                ÉVÉNEMENTIEL
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

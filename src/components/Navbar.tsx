"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Réalisations", href: "/realisations" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname !== "/") return false;
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-surface border-b border-outline-variant flex flex-col justify-between items-center w-full sticky top-0 z-50">
      <div className="w-full flex justify-between items-center px-4 sm:px-6 md:px-8 py-4 mx-auto max-w-7xl">
        <Link
          href="/"
          className="flex items-center shrink-0 hover:opacity-90 transition-opacity"
          aria-label="PRO LIVE. AGENCY - Accueil"
        >
          <Logo className="h-12 sm:h-14 md:h-16 w-auto object-contain" variant="dark" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-label-bold font-label-bold transition-colors duration-200 py-1 ${
                  active
                    ? "text-primary border-b-2 border-primary"
                    : "text-on-surface hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex md:hidden items-center shrink-0">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 text-on-surface hover:text-primary focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-surface border-t border-outline-variant px-4 py-6 shadow-lg">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-body-lg font-label-bold py-2 px-3 transition-colors ${
                    active
                      ? "bg-primary/10 text-primary border-l-4 border-primary font-bold"
                      : "text-on-surface hover:text-primary hover:bg-surface-container"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}

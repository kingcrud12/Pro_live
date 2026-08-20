import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Références : Agence Marketing & Communication Digitale",
  description:
    "Découvrez les réalisations de notre agence de communication digitale et agence marketing à Paris : campagnes digitales ROI, plateformes web, branding corporate et captation événementielle multi-caméra 4K.",
  keywords: [
    "réalisations agence marketing",
    "portfolio agence de communication digitale",
    "études de cas marketing paris",
    "projets événementiels prestige paris",
  ],
  alternates: {
    canonical: "/realisations",
  },
  openGraph: {
    title: "Portfolio & Références : Agence Marketing & Communication Digitale | PRO LIVE",
    description:
      "Une sélection d'études de cas alliant stratégie digitale, créativité d'exception et maîtrise technique haute précision.",
    url: "https://www.pro-live-agency.com/realisations",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function RealisationsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

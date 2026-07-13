import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Devis : Agence Marketing & de Communication Digitale Paris",
  description:
    "Contactez PRO LIVE DIGITAL AGENCY à Paris pour votre devis sur-mesure sous 24h. Studio et bureaux : 12 rue de la Création, 75008 Paris. Téléphone : +33 (0)1 42 68 55 00.",
  keywords: [
    "contact agence marketing paris",
    "devis agence de communication digitale",
    "agence digitale paris 8",
    "agence communication contact",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Devis : Agence Marketing & de Communication Digitale Paris | PRO LIVE",
    description:
      "Discutons de vos ambitions sous 24h : Stratégie de Marque, Acquisition ROI Marketing, Développement Web et Spectacle Live.",
    url: "https://www.prolive.agency/contact",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

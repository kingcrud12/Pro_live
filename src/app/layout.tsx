import type { Metadata } from "next";
import { Anton, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.prolive.agency"),
  title: {
    default: "PRO LIVE. AGENCY | Agence Marketing & de Communication Digitale Paris",
    template: "%s | PRO LIVE. AGENCY",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/images/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  description:
    "PRO LIVE. AGENCY est votre agence de communication digitale et agence marketing à Paris. Spécialistes en stratégie de marque, acquisition de trafic à fort ROI, création de sites web haute performance et production événementielle live 4K.",
  keywords: [
    "agence marketing",
    "agence de communication digitale",
    "agence marketing paris",
    "agence communication paris",
    "stratégie digitale",
    "acquisition roi",
    "branding haut de gamme",
    "production événementielle live",
    "captation vidéo 4k",
    "création site web paris",
    "agence seo sea paris",
  ],
  authors: [{ name: "PRO LIVE DIGITAL AGENCY", url: "https://www.prolive.agency" }],
  creator: "PRO LIVE DIGITAL AGENCY",
  publisher: "PRO LIVE DIGITAL AGENCY",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.prolive.agency",
    title: "PRO LIVE. AGENCY | Agence Marketing & de Communication Digitale Paris",
    description:
      "Propulsez votre marque avec une stratégie marketing percutante, une communication digitale d'excellence et des productions événementielles spectaculaires.",
    siteName: "PRO LIVE DIGITAL AGENCY",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "PRO LIVE DIGITAL AGENCY - Agence Marketing et Communication Paris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PRO LIVE. AGENCY | Agence Marketing & de Communication Digitale",
    description:
      "Agence créative et technique haute performance à Paris : Stratégie digitale, ROI Marketing, Web & Événementiel.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "PRO LIVE DIGITAL AGENCY",
    alternateName: "PRO LIVE AGENCY",
    url: "https://www.prolive.agency",
    logo: "https://www.prolive.agency/icon.svg",
    image: "https://www.prolive.agency/images/hero.jpg",
    description:
      "Agence marketing et agence de communication digitale basée à Paris. Nous accompagnons les entreprises dans leur stratégie de marque, leurs campagnes d'acquisition digitales et leurs productions événementielles prestige.",
    telephone: "+33142685500",
    email: "Info@pro-live-agency.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 RUE DE LA CRÉATION",
      addressLocality: "PARIS",
      postalCode: "75008",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.8718,
      longitude: 2.3082,
    },
    priceRange: "$$$",
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    knowsAbout: [
      "Marketing Digital",
      "Stratégie de Communication",
      "Branding & Identité",
      "SEO / SEA / Acquisition Tech",
      "Développement Web & Apps",
      "Production Événementielle & Captation 4K",
    ],
    sameAs: [
      "https://www.linkedin.com/company/pro-live-agency",
      "https://www.instagram.com/proliveagency",
    ],
  };

  return (
    <html lang="fr" className={`${anton.variable} ${hankenGrotesk.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-body-md bg-background text-on-background overflow-x-hidden">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}


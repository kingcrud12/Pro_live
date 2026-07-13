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
  title: "PRO LIVE. AGENCY | Stratégie, Communication & Production Événementielle",
  description: "Agence créative & technique haute performance. Nous fusionnons stratégie créative et exécution technique pour propulser votre marque avec un impact direct et mesurable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${anton.variable} ${hankenGrotesk.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col font-body-md bg-background text-on-background">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

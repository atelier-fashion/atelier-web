import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atelier — Your Personal Fashion Partner",
  description:
    "Atelier is the intuitive connection between your closet and your most iconic self. We curate, personalize, and tailor your style so every outfit is effortless.",
  openGraph: {
    title: "Atelier — Your Closet. Elevated.",
    description:
      "The intuitive connection between your closet and your most iconic self.",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier — Your Closet. Elevated.",
    description:
      "The intuitive connection between your closet and your most iconic self.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

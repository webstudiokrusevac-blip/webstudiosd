import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://webstudiosd.vercel.app";
const businessName = "Web Studio SD";
const businessPhone = "+38169692253";
const businessEmail = "webstudiokrusevac@gmail.com";
const facebookUrl = "https://www.facebook.com/profile.php?id=61590561213027";
const instagramUrl = "https://www.instagram.com/webstudiokrusevac/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Web Studio SD | Izrada web sajtova Krusevac",
    template: "%s | Web Studio SD"
  },
  description:
    "Web Studio SD iz Krusevca izradjuje brze, moderne i SEO spremne web sajtove za firme, lokale, portfolio prezentacije i prodajne landing stranice.",
  keywords: [
    "izrada sajtova Krusevac",
    "web studio Krusevac",
    "izrada web sajtova",
    "SEO optimizacija",
    "Next.js sajt",
    "Vercel sajt",
    "Web Studio SD"
  ],
  alternates: {
    canonical: "/",
    languages: {
      sr: "/?lang=sr",
      en: "/?lang=en"
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  category: "web design",
  openGraph: {
    title: "Web Studio SD | Izrada web sajtova Krusevac",
    description: "Izrada modernih web sajtova, portfolio prezentacija, landing stranica i SEO strukture za Google.",
    url: siteUrl,
    siteName: "Web Studio SD",
    locale: "sr_RS",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Studio SD | Izrada web sajtova Krusevac",
    description: "Moderni, brzi i SEO spremni web sajtovi za firme i lokalne biznise."
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#business`,
      name: businessName,
      url: siteUrl,
      telephone: businessPhone,
      email: businessEmail,
      priceRange: "$$",
      sameAs: [facebookUrl, instagramUrl],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bivoljska 152",
        addressLocality: "Krusevac",
        addressCountry: "RS"
      },
      areaServed: [
        { "@type": "City", name: "Krusevac" },
        { "@type": "Country", name: "Serbia" }
      ],
      serviceType: [
        "Izrada web sajtova",
        "SEO optimizacija",
        "Redizajn sajtova",
        "Landing stranice",
        "Portfolio prezentacije"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: businessName,
      url: siteUrl,
      inLanguage: ["sr", "en"],
      publisher: {
        "@id": `${siteUrl}/#business`
      }
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://s.wordpress.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://s.wordpress.com" />
        <meta name="geo.region" content="RS" />
        <meta name="geo.placename" content="Krusevac" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

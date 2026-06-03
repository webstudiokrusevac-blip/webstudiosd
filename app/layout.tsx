import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://webstudiosd.vercel.app"),
  title: "Web Studio SD | Izrada i prodaja web sajtova",
  description:
    "Moderan web studio za izradu, redizajn i prodaju brzih web sajtova spremnih za Vercel.",
  openGraph: {
    title: "Web Studio SD",
    description: "Izrada modernih web sajtova, portfolio prezentacija i prodajnih stranica.",
    type: "website"
  }
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
      </head>
      <body>{children}</body>
    </html>
  );
}

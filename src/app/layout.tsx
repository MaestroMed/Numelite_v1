import type { Metadata } from "next"
import { Outfit, Inter } from "next/font/google"
import "./globals.css"
import { ConditionalLayout } from "@/components/layout"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://numelite.fr"),
  title: {
    default: "Numelite - Dépannage Informatique & Création de Sites Web en Île-de-France",
    template: "%s | Numelite"
  },
  description: "Services informatiques professionnels en Île-de-France : dépannage rapide, création de sites web, maintenance. Intervention sous 24h à Paris et en région parisienne.",
  keywords: ["dépannage informatique", "création site web", "paris", "île-de-france", "réparation ordinateur", "site vitrine", "site e-commerce"],
  authors: [{ name: "Numelite" }],
  creator: "Numelite",
  publisher: "Numelite",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Numelite",
    title: "Numelite - Dépannage Informatique & Création de Sites Web",
    description: "Services informatiques professionnels en Île-de-France. Intervention rapide et création de sites web sur mesure.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Numelite - Services Informatiques",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Numelite - Services Informatiques",
    description: "Dépannage informatique et création de sites web en Île-de-France",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${outfit.variable} ${inter.variable} dark`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX"}');
            `,
          }}
        />
        {/* Schema.org LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Numelite",
              "description": "Services informatiques professionnels en Île-de-France : dépannage, création de sites web, maintenance.",
              "url": "https://numelite.fr",
              "telephone": "+33123456789",
              "email": "contact@numelite.fr",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Paris",
                "addressRegion": "Île-de-France",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "48.8566",
                "longitude": "2.3522"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "17:00"
                }
              ],
              "priceRange": "€€",
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "48.8566",
                  "longitude": "2.3522"
                },
                "geoRadius": "50000"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127"
              }
            }),
          }}
        />
      </head>
      <body className="font-body antialiased min-h-screen">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX"}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  )
}

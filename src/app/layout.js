import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { LocaleProvider } from "@/components/LocaleProvider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const SITE_URL = "https://www.wearvarel.com";
const OG_IMAGE = "/og-image.jpg";
const BRAND = "VAREL";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  // Mejor práctica: title template
  title: {
    default: `${BRAND} | Authentic Fashion Drops & Smart Pricing`,
    template: `%s | ${BRAND}`,
  },

  description:
    "VAREL is launching soon. Join the waitlist for early access to authentic fashion drops—smart pricing, curated sourcing, and limited-release inventory in the USA.",

  // SEO USA (sin marcas registradas en keywords)
  keywords: [
    "VAREL",
    "wearvarel",
    "authentic fashion",
    "authentic clothing",
    "authentic sneakers",
    "designer deals",
    "outlet deals",
    "liquidation pallets",
    "overstock clothing",
    "closeout inventory",
    "clearance fashion",
    "streetwear deals",
    "sneaker deals",
    "limited drops",
    "fashion drops",
    "affordable fashion",
    "smart pricing",
    "USA fashion deals",
    "online fashion store",
    "fashion waitlist",
    "early access",
  ],

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    title: `${BRAND} | Authentic Fashion Drops`,
    description:
      "Join the waitlist for early access to authentic fashion drops and smart pricing in the USA.",
    url: SITE_URL,
    siteName: BRAND,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${BRAND} — Authentic fashion drops`,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: `${BRAND} | Authentic Fashion Drops`,
    description:
      "Early access to authentic fashion drops + smart pricing. Join the waitlist.",
    images: [OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
    // opcional:
    // googleBot: { index: true, follow: true },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Material Symbols */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* Your fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LocaleProvider defaultLocale="en">{children}</LocaleProvider>

        {/* Structured data (USA focus) */}
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: BRAND,
              url: SITE_URL,
              logo: `${SITE_URL}${OG_IMAGE}`,
              sameAs: [
                "https://www.instagram.com/wearvarel/",
                "https://www.facebook.com/people/Varel/61550473701224/",
              ],
              description:
                "VAREL is a fashion brand launching in the USA. Join the waitlist for early access to authentic fashion drops and smart pricing.",
            }),
          }}
        />

        <Analytics />
      </body>
    </html>
  );
}
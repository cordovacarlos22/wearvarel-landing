import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.wearvarel.com"),

  title: "VAREL | Moda original en El Salvador | Marcas como Nike, Adidas, Converse",
  description:
    "Moda original en El Salvador. Encuentra productos de marcas como Nike, Adidas y Converse con entrega local rápida. Regístrate para acceso anticipado.",

  keywords: [
    "VAREL",
    "moda en El Salvador",
    "ropa original El Salvador",
    "tenis originales El Salvador",
    "ropa de marca El Salvador",
    "tienda online El Salvador",
    "entrega 24-48 horas El Salvador",
    "ropa importada El Salvador",
    "tendencias de moda 2025",
    "como vestir elegante mujer",
    "como combinar traje beige",
    "outfits minimalistas mujer",
    "moda neutra mujer",
    "estilo minimalista hombre",
    "VAREL tienda online",
    "VAREL moda El Salvador",
    "wearvarel",
    "VAREL ropa original",
    "VAREL marcas internacionales",
    "tienda de ropa en San Salvador",
    "tienda de tenis en San Salvador",
    "ropa original San Salvador",
    "envíos rápidos El Salvador",
    "entrega local El Salvador",
    "ropa de marca en El Salvador",
    "ropa en Santa Ana El Salvador",
    "ropa en Soyapango",
    "tienda online en Santa Tecla",
  ],

  openGraph: {
    title: "VAREL | Moda original en El Salvador",
    description:
      "Moda original a precio inteligente con entrega local rápida. Regístrate para acceso anticipado.",
    url: "https://www.wearvarel.com",
    siteName: "VAREL",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "VAREL - Moda original" }],
    locale: "es_SV",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "VAREL | Moda original en El Salvador",
    description: "Moda original con entrega local rápida. Únete a la lista de espera.",
    images: ["/og-image.jpg"],
  },

  robots: { index: true, follow: true },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "VAREL",
              url: "https://join.wearvarel.com",
              logo: "https://join.wearvarel.com/og-image.jpg",
              sameAs: [
                "https://www.instagram.com/wearvarel/",
                "https://www.facebook.com/people/Varel/61550473701224/",
              ],
              description:
                "Tienda online de moda original en El Salvador. Productos de marcas internacionales con entrega local rápida.",
            }),
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
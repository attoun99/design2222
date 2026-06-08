import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { Nav, ScrollProgress } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MotionInit } from "@/components/MotionInit";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.collectivestudioltd.com"),
  title: "Collective Studio — Sustainable Knitwear Manufacturer | Low MOQ",
  description:
    "Dream it. Design it. We'll make it. Sustainable knitwear manufacturing with low MOQ (100 pcs/style), 40-day delivery, and GOTS-certified organic options. Family-run, based in Bangladesh & Amsterdam.",
  keywords: [
    "knitwear manufacturer",
    "low MOQ clothing manufacturer",
    "sustainable clothing factory",
    "GOTS organic apparel",
    "private label manufacturer",
    "t-shirt manufacturer Bangladesh",
    "start a clothing brand",
  ],
  authors: [{ name: "Collective Studio Ltd" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Collective Studio",
    title: "Collective Studio — Sustainable Knitwear Manufacturer | Low MOQ",
    description: "Start your brand. We handle everything else. Low MOQ, sustainable fabrics, GOTS-certified organic, worldwide DDP delivery.",
    url: "https://www.collectivestudioltd.com/",
    images: [{ url: "/imagery/hero-tees.jpg", alt: "A rack of folded t-shirts in soft natural light." }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Collective Studio — Sustainable Knitwear Manufacturer",
    description: "Low MOQ. Sustainable fabrics. GOTS-certified organic. Worldwide DDP delivery. Dream it, design it — we'll make it.",
    images: ["/imagery/hero-tees.jpg"],
  },
  icons: {
    icon: "/logo/mark.svg",
    apple: "/logo/mark.svg",
  },
};

export const viewport = {
  themeColor: "#10121b",
};

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Collective Studio Ltd",
  alternateName: "Collective Studio",
  url: "https://www.collectivestudioltd.com/",
  logo: "https://www.collectivestudioltd.com/logo/mark.svg",
  description: "Sustainable knitwear manufacturing with low MOQ, 40-day delivery, and GOTS-certified organic options. Family-run.",
  foundingDate: "2019",
  email: "director@collectivestudioltd.com",
  telephone: ["+8801980055021", "+8801980055022"],
  sameAs: [
    "https://www.instagram.com/homaira_jemi",
    "https://www.linkedin.com/in/homaira-jemi-565920240",
    "https://www.facebook.com/share/171CVHecpZ/",
    "https://www.youtube.com/watch?v=LLBgpG8b0kA",
  ],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Plot-A-132, Road No. 02, BISCIC Industrial Area, Ponchabati",
      addressLocality: "Narayanganj",
      postalCode: "1400",
      addressCountry: "BD",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Soetendaal 61",
      addressLocality: "Amsterdam",
      postalCode: "1081 BN",
      addressCountry: "NL",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <head>
        <link rel="preconnect" href="https://i.ytimg.com" />
        <script
          // Adds `js-anim` before paint only when motion is allowed — guarantees
          // no-JS / reduced-motion / print visitors always see fully visible content.
          dangerouslySetInnerHTML={{
            __html:
              "if (!matchMedia('(prefers-reduced-motion: reduce)').matches) document.documentElement.classList.add('js-anim');",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
      </head>
      <body>
        <MotionInit />
        <ScrollProgress />
        <Nav />
        <div className="nav-spacer" />
        {children}
        <Footer />
      </body>
    </html>
  );
}

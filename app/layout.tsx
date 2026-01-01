import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/home/NavbarHome";
import Footer from "@/components/home/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "IMCG Humak | Islamabad Model College for Girls",
    template: "%s | IMCG Humak",
  },
  description:
    "Islamabad Model College for Girls (IMCG), Humak is a prestigious public sector institution offering quality education for girls in Islamabad.",

  keywords: [
    "imcg humak",
    "niazian college",
    "humak college",
    "girls college",
    "girls college humak",
    "IMCG Humak",
    "Islamabad Model College for Girls",
    "Girls College Islamabad",
    "IMCG",
    "Federal Government College for Girls",
    "Girls Education Islamabad",
    "fg degree college",
    "fg degree fatima college",
  ],

  authors: [{ name: "Islamabad Model College for Girls, Humak" }],
  creator: "Islamabad Model College for Girls, Humak",
  publisher: "Islamabad Model College for Girls, Humak",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://imcghumak.edu.pk",
  },

  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://imcghumak.edu.pk",
    siteName: "IMCG Humak",
    title: "Islamabad Model College for Girls, Humak",
    description:
      "Official website of Islamabad Model College for Girls, Humak – providing quality education and academic excellence.",
    images: [
      {
        url: "https://imcghumak.edu.pk/building.png",
        width: 1200,
        height: 630,
        alt: "IMCG Humak Campus",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Islamabad Model College for Girls, Humak",
    description:
      "Official website of IMCG Humak – a leading government college for girls in Islamabad.",
    images: ["https://imcghumak.edu.pk/building.png"],
  },

  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <ToastContainer position="bottom-right" theme="dark" />
        <Footer />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Islamabad Model College for Girls, Humak",
              alternateName: "IMCG Humak",
              url: "https://imcghumak.edu.pk",
              logo: "https://imcghumak.edu.pk/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Humak",
                addressLocality: "Islamabad",
                addressRegion: "ICT",
                postalCode: "44000",
                addressCountry: "PK",
              },
              sameAs: ["https://www.facebook.com/share/1ANQcqrEyg/"],
              founder: {
                "@type": "Organization",
                name: "Federal Directorate of Education",
              },
            }),
          }}
        />
      </body>
    </html>
    // </ClerkProvider>
  );
}

// Imports
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
// Providers
import { GlobalProvider } from "@/providers/GlobalProvider";

// Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://www.noorhomecare.co.uk"),
  title: "Home Care | Caregiver & Caretaker For Elderly | Noor Home Care",
  description:
    "Caregiver Services For Elderly At Home | Hire Caretaker For Your Senior Loved Ones | Noor Home Care",
  authors: [{ name: "ahmedwasim1070" }],

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Home Care | Caregiver & Caretaker For Elderly | Noor Home Care",
    description:
      "Caregiver Services For Elderly At Home | Hire Caretaker For Your Senior Loved Ones | Noor Home Care",
    url: "https://www.noorhomecare.co.uk",
    siteName: "Noor Home Care",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Noor Home Care",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  alternates: { canonical: "./" },
  verification: {},
};

//
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Noor Home Care",
  alternateName: ["NHC", "Noor Home Care Hull"],
  url: "https://www.noorhomecare.co.uk",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Noor Home Care",
  url: "https://www.noorhomecare.co.uk",
  logo: "https://www.noorhomecare.co.uk/images/logo.jpg",
  image: "https://www.noorhomecare.co.uk/images/og-image.png",
  description:
    "Caregiver Services For Elderly At Home | Hire Caretaker For Your Senior Loved Ones | Noor Home Care",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hull",
    addressLocality: "Hull",
    postalCode: "HU1",
    addressCountry: "UK",
  },
  telephone: "+447880283423",
  email: "noorhomecare@hotmail.com",
  sameAs: [
    "https://facebook.com/noorhomecare",
    "https://twitter.com/noorhomecare",
    "https://linkedin.com/company/noorhomecare",
  ],
};

//
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/*  */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        <GlobalProvider children={children} />
      </body>
    </html>
  );
}

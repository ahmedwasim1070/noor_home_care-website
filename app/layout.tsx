// Imports
import type { Metadata } from "next";
import "./globals.css";
// Providers
import { GlobalProvider } from "@/providers/GlobalProvider";

// Metadata
export const metadata: Metadata = {
  title: 'Home Care | Caregiver & Caretaker For Elderly | Noor Home Care',
  description: 'Caregiver Servicse For Elderly At Home | Hire Caretaker For Your Senior Loved Ones | Noor Home Care',
  authors: [{ name: 'ahmedwasim1070' }],

  icons: {
    icon: '/favicon.icon',
    shortcut: '/favicon.icon',
    apple: '/apple-icon.png',
  },

  openGraph: {
    title: 'Home Care | Caregiver & Caretaker For Elderly | Noor Home Care',
    description: 'Caregiver Servicse For Elderly At Home | Hire Caretaker For Your Senior Loved Ones | Noor Home Care',
    url: 'https://www.noorhomecare.co.uk',
    siteName: 'Noor Home Care',
    images: [
      {
        url: 'https://www.noorhomecare.co.uk/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Noor Home Care',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  verification: {
  },
}

// Schema.org
export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Noor Home Care',
  url: 'https://www.noorhomecare.co.uk',
  logo: 'https://www.noorhomecare.co.uk/images/logo.jpg',
  image: 'https://www.noorhomecare.co.uk/images/og-image.png',
  description: 'Caregiver Servicse For Elderly At Home | Hire Caretaker For Your Senior Loved Ones | Noor Home Care',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hull',
    addressLocality: 'Hull',
    postalCode: 'HU1',
    addressCountry: 'UK',
  },
  telephone: '+07880-283423',
  email: 'noorhomecare@hotmail.com',
  sameAs: [
    'https://facebook.com/noorhomecare',
    'https://twitter.com/noorhomecare',
    'https://linkedin.com/company/noorhomecare',
  ],
}

// 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <GlobalProvider children={children} />

      </body>
    </html>
  );
}

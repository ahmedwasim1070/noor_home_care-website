"use client";

// Imports
import React, { createContext, ReactNode, useContext } from "react";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
// Components
import Header from "@/components/HeaderSection";
import Footer from "@/components/FooterSection";
import { Mail, MapPin, Phone } from "lucide-react";

// Interfaces
interface ProviderProps {
  contactInfo: string[];
  icons: ReactNode[];
  primaryNav: PrimaryNav[];
}
interface Props {
  children: ReactNode;
}

// Types
type PrimaryNav = {
  label: string;
  href: string;
  isActive: boolean;
};

// Context
const Context = createContext<ProviderProps | undefined>(undefined);

//
export const GlobalProvider = ({ children }: Props) => {
  // Path
  const pathname = usePathname();
  // Nav
  // Primary Nav
  const primaryNav = [
    {
      label: "About",
      href: "/about",
      isActive: pathname === "/about",
    },
    {
      label: "Careers",
      href: "/careers",
      isActive: pathname === "/careers",
    },
  ];
  // Contact
  // info for contact
  const contactInfo = [
    "noorhomecare@hotmail.com",
    "+ 07880-283423",
    "Kingston upon Hull , United Kingdom",
  ];
  // Icon for contact
  const icons = [
    <Mail className="w-4 h-4" />,
    <Phone className="w-4 h-4" />,
    <MapPin className="w-4 h-4" />,
  ];

  return (
    <Context.Provider value={{ primaryNav, contactInfo, icons }}>
      {/*  */}
      <Header />

      {/*  */}
      <Toaster />

      {/*  */}
      {children}

      {/*  */}
      <Footer />
    </Context.Provider>
  );
};

// Hook to fetch ProviderData
export const useGlobalProvider = (): ProviderProps => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useGlobalProvider must be used within a GlobalProvider");
  }
  return context;
};

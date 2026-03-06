"use client";

// Imports
import React, { createContext, ReactNode, useContext } from "react";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
// Components
import Header from "@/components/HeaderSection";
import Footer from "@/components/FooterSection";

// Interfaces
interface ProviderProps {
  pathname: string;
}
interface Props {
  children: ReactNode;
}

// Context
const Context = createContext<ProviderProps | undefined>(undefined);

//
export const GlobalProvider = ({ children }: Props) => {
  // Path
  const pathname = usePathname();

  return (
    <Context.Provider value={{ pathname }}>
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

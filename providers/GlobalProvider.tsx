'use client';

// Imports
import React, { createContext, ReactNode, useContext } from "react";
import { usePathname } from "next/navigation";
// Components
import Header from "@/components/HeaderSection";
import Footer from "@/components/FooterSection";
import { Mail, MapPin, Phone } from "lucide-react";

// Interfaces
interface ProviderProps {
    pathname: string;
    contactInfo: string[];
    contactIcon: ReactNode[];
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
    // Contact
    // info for contact
    const contactInfo = [
        'noorhomecare@hotmail.com',
        '+ 07880-283423',
        'Kingston upon Hull , United Kingdom'
    ]
    // Icon for contact
    const contactIcon = [
        <Mail className="w-5 h-5" />,
        <Phone className="w-5 h-5" />,
        <MapPin className="w-5 h-5" />
    ]

    return (
        <Context.Provider value={{ pathname, contactInfo, contactIcon }}>
            {/*  */}
            <Header />

            {/*  */}
            {children}

            {/*  */}
            <Footer />
        </Context.Provider>
    )
};

// Hook to fetch ProviderData
export const useGlobalProvider = (): ProviderProps => {
    const context = useContext(Context);
    if (context === undefined) {
        throw new Error('useGlobalProvider must be used within a GlobalProvider');
    }
    return context;
}

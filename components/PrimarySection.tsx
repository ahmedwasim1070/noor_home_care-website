'use client';

// Imports
import Image from "next/image";
// Providers
import { useGlobalProvider } from "@/providers/GlobalProvider";
import { Mail, Phone } from "lucide-react";

// 
function PrimarySection() {
    // Providers
    // Global
    const { contactInfo, contactIcon } = useGlobalProvider();

    return (
        <main>
            <div className="relative">
                <Image className="h-[80vh]" src={'/images/hero.webp'} width={1920} height={1080} alt="Noor Home Care - Business Directory and Home Care Logo" />

                <div className="absolute inset-0 bg-black/40 flex justify-center items-center">

                    <div className="bg-black/80 py-3 px-6 rounded-sm flex flex-wrap flex-row items-center gap-x-6">
                        <div className="flex flex-row items-center gap-x-10 h-full">

                            <div className="text-white space-y-2">
                                {contactInfo.map((info, idx) => (
                                    <h3 className="flex flex-row items-center gap-x-2" key={idx}>
                                        <span>{contactIcon[idx]}</span>
                                        <p>{info}</p>
                                    </h3>
                                ))}
                            </div>

                            <div className="w-1 h-[180px] rounded-full bg-white hidden sm:block"></div>

                        </div>

                        <div className="w-80 text-white flex flex-row items-center h-full gap-x-6">

                            <div className="w-1 h-[180px] rounded-full block sm:hidden bg-white"></div>

                            <div className="space-y-4">
                                <div>
                                    <h2 className="text-2xl font-bold">Noor Home Care</h2>
                                    <h4>Home Care , For Your Loved Ones.</h4>
                                </div>

                                <p className="text-sm">For Service At your Door Step:</p>

                                <div className="flex flex-row items-center justify-between">
                                    <a href="tel:+07880283423" className="rounded-full p-3 border flex flex-row items-center gap-x-2">
                                        <Phone className="w-5 h-5 stroke-white" />
                                        <p>Call Us</p>
                                    </a>

                                    <a href="mailto:noorhomecare@hotmail.com" className="rounded-full p-3 border flex flex-row items-center gap-x-2">
                                        <Mail className="w-5.5 h-5.5 stroke-white" />
                                        <p>Email Us</p>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </main>
    );

}

export default PrimarySection;
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

                <div className="absolute inset-0 bg-black/20 flex justify-center items-center ">
                    <div className="bg-white py-3 px-6 rounded-xl flex flex-wrap flex-row items-center gap-x-6 shadow-xl shadow-primary/50">
                        <div className="flex flex-row items-center gap-x-10 h-full">

                            <div className="space-y-2">
                                {contactInfo.map((info, idx) => (
                                    <h3 className="flex flex-row items-center gap-x-2" key={idx}>
                                        <span className="text-secondary">{contactIcon[idx]}</span>
                                        <p className="text-primary font-bold">{info}</p>
                                    </h3>
                                ))}
                            </div>

                            <div className="w-1 h-[180px] rounded-full bg-primary hidden sm:block"></div>

                        </div>

                        <div className="w-80 flex flex-row items-center h-full gap-x-6">

                            <div className="w-1 h-[180px] rounded-full block sm:hidden bg-white"></div>

                            <div className="space-y-4">
                                <div>
                                    <h2 className="text-2xl text-primary font-bold my-2 flex flex-row items-center gap-x-2">
                                        <Image className="group-hover:opacity-60 transition-opacity w-14" src={'logo.svg'} width={65} height={50} alt="Noor Home Care - Business Directory and Home Care Logo" />
                                        <p>Noor Home Care</p>
                                    </h2>
                                    <h4 className="text-gray-600">Home Care , For Your Loved Ones.</h4>
                                </div>

                                <p className="text-primary text-sm">For Service At your Door Step:</p>

                                <div className="flex flex-row items-center justify-between">
                                    <a href="tel:+07880283423" className="rounded-full p-3 border flex flex-row items-center gap-x-2 hover:bg-secondary transition-colors ">
                                        <Phone className="w-5 h-5 stroke-none fill-primary" />
                                        <p className="text-primary font-bold">Call Us</p>
                                    </a>

                                    <a href="mailto:noorhomecare@hotmail.com" className="rounded-full p-3 border flex flex-row items-center gap-x-2 hover:bg-secondary transition-colors">
                                        <Mail className="w-5.5 h-5.5 stroke-primary " />
                                        <p className="font-bold text-primary">Email Us</p>
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
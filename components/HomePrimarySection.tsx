'use client';

// Imports
import Image from "next/image";
// Providers
import { useGlobalProvider } from "@/providers/GlobalProvider";
import { Mail, Phone } from "lucide-react";

// 
function HomePrimarySection() {
    // Providers
    // Global
    const { contactInfo, icons } = useGlobalProvider();

    return (
        <main>
            {/*  */}
            <div className="relative">
                {/*  */}
                <Image className="min-h-[600px] h-[85vh] object-cover" src={'/images/primary.webp'} width={1920} height={1080} alt="Noor Home Care - Business Directory and Home Care Logo" />

                {/*  */}
                <div className="absolute inset-0 bg-black/20 flex justify-center items-center">
                    {/*  */}
                    <div className="bg-white/80 backdrop-blur-sm py-5 px-8 m-10 rounded-xl flex flex-nowrap flex-col md:flex-row items-center gap-x-6 gap-y-8 shadow-xl shadow-primary/50">
                        <div className="flex flex-row items-start gap-x-10 h-full w-full md:w-auto">
                            <div className="space-y-3">
                                <div>
                                    <h2 className="text-primary flex flex-col">
                                        <span className="text-2xl font-bold leading-tight">
                                            Caregiving services,
                                        </span>
                                        <span className="text-sm leading-tight">
                                            For Elderly at Home.
                                        </span>
                                    </h2>
                                </div>
                                {/*  */}
                                <ul className="space-y-1">
                                    {contactInfo.map((info, idx) => (
                                        <li key={idx} className="flex flex-row items-center gap-x-2">
                                            <span className="text-secondary">{icons[idx]}</span>
                                            <span className="text-primary">{info}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/*  */}
                            <div className="w-1 h-[180px] rounded-full bg-primary hidden md:block"></div>
                        </div>

                        {/*  */}
                        <div className="flex flex-row items-center h-full gap-x-6">
                            <div className="w-1 h-[180px] rounded-full block md:hidden bg-primary"></div>
                            {/*  */}
                            <div className="space-y-4">
                                <div>
                                    <h1 className="text-2xl text-primary font-bold my-2 flex flex-row items-center gap-x-2">
                                        <Image className="group-hover:opacity-60 transition-opacity w-14 hidden xs:block" src={'logo.svg'} width={65} height={50} alt="Noor Home Care - Business Directory and Home Care Logo" />
                                        <span>Noor Home Care</span>
                                    </h1>
                                    <h4 className="text-gray-600">Home Care Services, For Your Loved Ones.</h4>
                                </div>
                                <p className="text-primary text-sm">For Service At your Door Step:</p>
                                <div className="w-full xs:w-auto flex flex-col xs:flex-row xs:items-center gap-y-4 gap-x-2 xs:gap-x-6">
                                    <a
                                        href="tel:+447880283423"
                                        aria-label="Call Noor Home Care at 07880 283423"
                                        className="rounded-full py-2.5 px-3 border flex flex-row items-center gap-x-2 hover:bg-secondary transition-colors "
                                    >
                                        <Phone className="w-5 h-5 stroke-none fill-primary" />
                                        <span className="text-primary font-bold text-nowrap">Call Us</span>
                                    </a>

                                    <a
                                        href="mailto:noorhomecare@hotmail.com"
                                        aria-label="Mail Noor Home Care at noorhomecare@hotmail.com"
                                        className="rounded-full py-2.5 px-3 border flex flex-row items-center gap-x-2 hover:bg-secondary transition-colors"
                                    >
                                        <Mail className="w-5.5 h-5.5 stroke-primary " />
                                        <span className="font-bold text-primary text-nowrap">Email Us</span>
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

export default HomePrimarySection;
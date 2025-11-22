'use client';

// Imports
import Image from "next/image";
// Providers
import { useGlobalProvider } from "@/providers/GlobalProvider";
import { ArrowDown } from "lucide-react";

// 
function AboutPrimarySection() {
    // Providers
    // Global
    const { contactInfo, icons } = useGlobalProvider();

    return (
        <main className="relative">
            {/*  */}
            <Image className="min-h-[600px] h-[85vh] object-cover" src={'/images/about.webp'} width={1920} height={1080} alt="Noor Home Care - Business Directory and Home Care Logo" />


            {/*  */}
            <div className="absolute inset-0 bg-black/30 flex justify-center items-center p-12">
                {/*  */}
                <div className="w-[80%] h-[70%] flex flex-row items-center justify-between">
                    {/*  */}
                    <div className="w-[40%] flex flex-col text-white">
                        <div className="mx-auto">
                            <h1 className="bg-primary font-black text-3xl py-4 px-6 shadow-2xl">Noor Home Care</h1>
                        </div>
                        <div className="flex justify-end">
                            <h2 className="bg-secondary font-black text-3xl py-4 px-6 text-nowrap shadow-2xl">Who Are We</h2>
                        </div>
                    </div>
                    {/*  */}
                    <div className="w-1 h-full bg-white rounded-full"></div>
                    {/*  */}
                    <div className="w-[40%] backdrop-blur-xl bg-white/60 rounded-xl shadow-xl p-4">
                        {/*  */}
                        <p className="text-primary font-bold text-xl">Contact Info : </p>
                        {/*  */}
                        <ul className="space-y-1 p-3">
                            {contactInfo.map((info, idx) => (
                                <li key={idx} className="flex flex-row items-center gap-x-2">
                                    <span className="text-secondary">{icons[idx]}</span>
                                    <span className="text-primary">{info}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/*  */}
                <div className="absolute left-0 bottom-0 min-w-full p-4 flex justify-center">
                    {/*  */}
                    <div className="flex flex-row items-center gap-x-2 cursor-pointer">
                        <ArrowDown className="text-white w-6 h-6 font-bold" />
                        <p className="text-white text-2xl font-bold ">Scroll</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AboutPrimarySection
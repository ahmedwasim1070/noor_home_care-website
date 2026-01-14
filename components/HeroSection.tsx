"use client";

// Imports
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
// Providers
import { useGlobalProvider } from "@/providers/GlobalProvider";

// Types
type HeroVariant = "home" | "about" | "careers";

// Interface
interface HeroSectionProps {
  variant?: HeroVariant;
  imageSrc: string;
}

function HeroSection({ variant = "home", imageSrc }: HeroSectionProps) {
  // Providers
  const { contactInfo, icons } = useGlobalProvider();

  // Contact List Creator
  const ContactList = () => (
    <ul className="space-y-1">
      {contactInfo.map((info, idx) => (
        <li key={idx} className="flex flex-row items-center gap-x-2">
          <span className="text-secondary shrink-0">{icons[idx]}</span>
          <span className="text-primary text-sm md:text-base break-all sm:break-normal">
            {info}
          </span>
        </li>
      ))}
    </ul>
  );

  // Primary
  const PrimaryCard = () => (
    <div className="bg-white/80 backdrop-blur-sm py-6 px-4 md:py-8 md:px-8 m-4 md:m-10 rounded-xl flex flex-col md:flex-row items-center gap-8 shadow-xl shadow-primary/50 max-w-[95%] md:max-w-4xl">
      {/* Left */}
      <div className="flex flex-row items-start gap-x-6 h-full w-full md:w-auto">
        <div className="space-y-3 flex-1">
          <div>
            <h2 className="text-primary flex flex-col">
              <span className="text-xl md:text-2xl font-bold leading-tight">
                Caregiving services,
              </span>
              <span className="text-xs md:text-sm leading-tight">
                For Elderly at Home.
              </span>
            </h2>
          </div>
          <ContactList />
        </div>

        {/*  */}
        <div className="w-1 h-full min-h-40 rounded-full bg-primary hidden md:block"></div>
      </div>

      {/* Right */}
      <div className="flex flex-col md:flex-row items-center h-full gap-6 w-full md:w-auto border-t-4 border-primary pt-6 md:border-t-0 md:pt-0">
        <div className="space-y-4 w-full">
          <div>
            <h1 className="text-xl md:text-2xl text-primary font-bold my-2 flex flex-row items-center justify-center md:justify-start gap-x-2">
              <Image
                className="group-hover:opacity-60 transition-opacity w-12 md:w-14"
                src={"logo.svg"}
                width={65}
                height={50}
                alt="Noor Home Care Logo"
              />
              <span>Noor Home Care</span>
            </h1>
            <h4 className="text-gray-600 text-center md:text-left text-sm md:text-base">
              Home Care Services, For Your Loved Ones.
            </h4>
          </div>

          <p className="text-primary text-sm text-center md:text-left">
            For Service At your Door Step:
          </p>

          <div className="w-full flex flex-col sm:flex-row items-center gap-3">
            <a
              href="tel:+447880283423"
              aria-label="Call Noor Home Care"
              className="w-full sm:w-auto justify-center rounded-full py-2.5 px-4 border flex flex-row items-center gap-x-2 hover:bg-secondary transition-colors"
            >
              <Phone className="w-5 h-5 stroke-none fill-primary" />
              <span className="text-primary font-bold whitespace-nowrap">
                Call Us
              </span>
            </a>

            <a
              href="mailto:noorhomecare@hotmail.com"
              aria-label="Mail Noor Home Care"
              className="w-full sm:w-auto justify-center rounded-full py-2.5 px-4 border flex flex-row items-center gap-x-2 hover:bg-secondary transition-colors"
            >
              <Mail className="w-5.5 h-5.5 stroke-primary" />
              <span className="font-bold text-primary whitespace-nowrap">
                Email Us
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  // Secondary
  const SecondaryCard = () => (
    <div className="w-full max-w-[90%] md:max-w-5xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
      {/* Left */}
      <div className="w-full md:w-5/12 flex flex-col text-white items-center md:items-end space-y-4">
        <div className="text-center md:text-right">
          <h1 className="bg-primary font-black text-2xl md:text-3xl py-3 px-6 md:py-4 md:px-6 shadow-2xl inline-block rounded-sm">
            Noor Home Care
          </h1>
        </div>
        <div className="flex justify-center md:justify-end w-full">
          <h2 className="bg-secondary font-black text-2xl md:text-3xl py-3 px-6 md:py-4 md:px-6 shadow-2xl inline-block rounded-sm">
            {variant === "about" && "Who Are We"}
            {variant === "careers" && "Careers"}
          </h2>
        </div>
      </div>

      {/*  */}
      <div className="w-24 h-1 md:w-1 md:h-32 bg-white rounded-full"></div>

      {/* Right */}
      <div className="w-full md:w-5/12 backdrop-blur-xl bg-white/60 rounded-xl shadow-xl p-6 md:p-8">
        <p className="text-primary font-bold text-lg md:text-xl mb-4 text-center md:text-left">
          Contact Info :
        </p>
        <div className="flex justify-center md:justify-start">
          <ContactList />
        </div>
      </div>
    </div>
  );

  return (
    <main className="relative">
      {/* Background Image */}
      <div className="relative min-h-150 h-[85vh] w-full">
        <Image
          className="object-cover"
          src={imageSrc}
          fill
          priority
          alt="Noor Home Care - Hero Background"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 flex justify-center items-center bg-black/20 overflow-y-auto overflow-x-hidden">
        {/*  */}
        <div className="w-full flex justify-center p-4">
          {variant === "home" && <PrimaryCard />}
          {(variant === "about" || variant === "careers") && <SecondaryCard />}
        </div>
      </div>
    </main>
  );
}

export default HeroSection;

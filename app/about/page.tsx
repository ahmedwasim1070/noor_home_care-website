// Imports
import type { Metadata } from "next";
// Components
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import HeroSection from "@/components/HeroSection";

//
export const metadata: Metadata = {
  title: "About Us | Noor Home Care UK",
};

//
export default function About() {
  return (
    <section className="space-y-12 pb-12">
      <HeroSection variant="about" imageSrc="/images/about.webp" />
      <AboutSection />
      <CtaSection />
    </section>
  );
}

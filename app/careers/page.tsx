// Imports
import type { Metadata } from "next";
// Components
import HeroSection from "@/components/HeroSection";
import EmployerFeaturesSection from "@/components/EmployerFeaturesSection";
import WelcomeSection from "@/components/WelcomeSection";
import ApplyForm from "@/components/ApplyForm";

export const metadata: Metadata = {
  title: "Careers | Home Care | Noor Home Care",
};

//
export default function Careers() {
  return (
    <>
      <section className="space-y-12 pb-12">
        <HeroSection variant="careers" imageSrc="/images/career.webp" />
        <WelcomeSection variant="careers" />
        <EmployerFeaturesSection />
        <ApplyForm />
      </section>
    </>
  );
}

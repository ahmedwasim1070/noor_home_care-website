// Imports
import type { Metadata } from "next";
// Components
import HeroSection from "@/components/HeroSection";
import EmployerFeaturesSection from "@/components/EmployerFeaturesSection";
import WelcomeSection from "@/components/WelcomeSection";
import ApplyForm from "@/components/ApplyForm";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Careers & Jobs | Noor Home Care UK",
};

//
export default function Careers() {
  return (
    <>
      <section className="space-y-12 pb-12">
        <HeroSection variant="careers" imageSrc="/images/career.webp" />
        <WelcomeSection variant="careers" />
        <EmployerFeaturesSection />
        <Suspense fallback={<div>Loading application form...</div>}>
          <ApplyForm />
        </Suspense>
      </section>
    </>
  );
}

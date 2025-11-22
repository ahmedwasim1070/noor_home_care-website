// Imports
import type { Metadata } from "next";
// Components
import AboutPrimarySection from "@/components/AboutPrimarySection";
import AboutDetailedSection from "@/components/AboutDetailedSection";

// 
export const metadata: Metadata = {
  title: 'About | Who We Are | Noor Home Care',
}

// 
export default function About() {

  return (
    <section className="space-y-12 pb-12">
      <AboutPrimarySection />
      <AboutDetailedSection />
    </section>
  );
}

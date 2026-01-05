// Components
import HomeAboutSection from "@/components/HomeAboutSection";
import FeaturedSection from "@/components/FeaturedSection";
import CtaSection from "@/components/CtaSection";
import ServicesSection from "@/components/ServicesSection";
import WelcomeSection from "@/components/WelcomeSection";
import CareersSection from "@/components/CareersSection";
import HeroSection from "@/components/HeroSection";

//
export default function Home() {
  return (
    <section className="space-y-12 pb-12">
      <HeroSection variant="home" imageSrc="/images/primary.webp" />
      <WelcomeSection />
      <FeaturedSection />
      <HomeAboutSection />
      <ServicesSection />
      <CtaSection />
      <CareersSection />
    </section>
  );
}

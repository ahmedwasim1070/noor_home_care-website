// Components
import HomePrimarySection from "@/components/HomePrimarySection";
import HomeAboutSection from "@/components/HomeAboutSection";
import FeaturedSection from "@/components/FeaturedSection";
import CtaSection from "@/components/CtaSection";
import ServicesSection from "@/components/ServicesSection";
import WelcomeSection from "@/components/WelcomeSection";
import JoinSection from "@/components/JoinSection";

// 
export default function Home() {
  return (
    <section className="space-y-12 pb-12">
      <HomePrimarySection />
      <WelcomeSection />
      <FeaturedSection />
      <HomeAboutSection />
      <ServicesSection />
      <CtaSection />
      <JoinSection />
    </section>
  );
}

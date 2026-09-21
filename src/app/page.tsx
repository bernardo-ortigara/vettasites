import HeroSection from "./sections/hero-section";
import AboutSection from "./sections/about-section";
import LogoMarqueeSection from "./sections/logo-marquee-section";
import PortfolioSection from "./sections/portfolio-section";
import ServicesSection from "./sections/services-section";
import PricingSection from "./sections/pricing-section";
import TestimonialSection from "./sections/testimonial-section";
import ContactSection from "./sections/contact-section";
import FrequentlyAskedQuestionsSection from "./sections/frequently-asked-questions-section";
import LetWorkTogetherSection from "./sections/let-work-together-section";

export default function Page() {
  return (
    <div className="block" id="main">
      <div className="min-h-screen flex relative flex-col justify-start items-center content-center overflow-clip bg-night">
        <div className="h-[min-content] min-h-screen contents relative min-w-0 flex-col justify-start items-center content-center overflow-clip bg-night">
          <HeroSection />
          <AboutSection />
          <LogoMarqueeSection />
          <PortfolioSection />
          <ServicesSection />
          <PricingSection />
          <TestimonialSection />
          <ContactSection />
        </div>
        <FrequentlyAskedQuestionsSection />
        <LetWorkTogetherSection />
      </div>
    </div>
  );
}

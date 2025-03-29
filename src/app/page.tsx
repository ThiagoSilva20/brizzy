import Header from "./_components/landingpage/header";
import Footer from "./_components/landingpage/footer";
import HeroSection from "./_components/landingpage/hero-section";
import FeaturesSection from "./_components/landingpage/features-section";
import BenefitsSection from "./_components/landingpage/benefits-section";
import PricingSection from "./_components/landingpage/pricing-section";
import TestimonialsSection from "./_components/landingpage/testimonials-section";
import FaqSection from "./_components/landingpage/faq-section";
import DemoSection from "./_components/landingpage/demo-section";
import ContactSection from "./_components/landingpage/contact-section";

export default function Page() {
  return (
    <>
      <Header />

      <HeroSection />

      <FeaturesSection />

      <BenefitsSection />

      <PricingSection />

      <TestimonialsSection />

      <FaqSection />

      <DemoSection />

      <ContactSection />

      <Footer />
    </>
  );
}

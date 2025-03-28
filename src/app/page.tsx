import Link from "next/link";
import Image from "next/image";
import {
  Check,
  HelpCircle,
  LifeBuoy,
  MessageSquare,
  PhoneCall,
  Settings,
  Users,
} from "lucide-react";

import { Button } from "@/app/_components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/ui/tabs";
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
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />

        <FeaturesSection />

        <BenefitsSection />

        <PricingSection />

        <TestimonialsSection />

        <FaqSection />

        <DemoSection />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

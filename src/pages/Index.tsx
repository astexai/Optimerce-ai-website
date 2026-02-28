import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { HeroSection } from "@/components/landing/HeroSection";
import { TrustedBySection } from "@/components/landing/TrustedBySection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { IntegrationsSection } from "@/components/landing/IntegrationsSection";
import { StatsSection } from "@/components/landing/StatsSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { CTASection } from "@/components/landing/CTASection";

const Index = () => (
  <MarketingLayout>
    <HeroSection />
    <TrustedBySection />
    <FeaturesSection />
    <HowItWorksSection />
    <IntegrationsSection />
    <StatsSection />
    <TestimonialsSection />
    <PricingSection />
    <FAQSection />
    <CTASection />
  </MarketingLayout>
);

export default Index;

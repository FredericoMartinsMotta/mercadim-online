import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import BenefitsSection from '@/components/BenefitsSection';
import AboutSection from '@/components/AboutSection';
import ForWhoSection from '@/components/ForWhoSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <AboutSection />
      <ForWhoSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;

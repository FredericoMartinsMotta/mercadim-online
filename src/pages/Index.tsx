import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import LocationSection from '@/components/LocationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;

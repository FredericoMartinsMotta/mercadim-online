import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-mercado-real.png';
import logoImage from '@/assets/logo-pertin-so.png';
const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5534998013859';
    const message = 'Olá! Quero um Pertin sô no meu espaço.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <section id="inicio" className="relative min-h-screen">
      {/* Faixa superior com logo */}
      <div className="relative z-10 bg-muted/80 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 lg:px-8 flex justify-center">
          <img 
            src={logoImage} 
            alt="Pertin Sô" 
            className="h-32 md:h-40 lg:h-48 drop-shadow-lg"
          />
        </div>
      </div>

      {/* Background com imagem transparente */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20 pb-20 min-h-[calc(100vh-12rem)] flex items-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8">
            O mercado autônomo que valoriza o seu espaço
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground mb-12 leading-relaxed">
            Instale um mini mercado 24h no seu condomínio, academia ou empresa — sem atendente, sem custo e com total segurança.
          </p>
          
          <Button onClick={handleWhatsAppClick} size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 font-semibold shadow-soft hover:shadow-hover transition-smooth text-xl">
            <MessageCircle className="mr-3" size={24} />
            Quero um Pertin sô no meu espaço
          </Button>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
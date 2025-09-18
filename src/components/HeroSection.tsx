import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-mercado.jpg';

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    // Substitua pelo número real do WhatsApp
    const phoneNumber = '5562999999999'; // Exemplo de número
    const message = 'Olá! Gostaria de saber mais sobre o Pertin sô.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="inicio" className="pt-16 min-h-screen flex items-center hero-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Conteúdo de texto */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Pertin sô – o seu mercadim de confiança
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Praticidade e atendimento acolhedor pertinho de você.
            </p>
            
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 text-lg font-semibold shadow-soft hover:shadow-hover transition-smooth"
              size="lg"
            >
              <MessageCircle className="mr-3" size={24} />
              Fale no WhatsApp
            </Button>
          </div>

          {/* Imagem */}
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Interior do mercado Pertin sô" 
              className="w-full h-auto rounded-2xl shadow-soft hover:shadow-hover transition-smooth"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
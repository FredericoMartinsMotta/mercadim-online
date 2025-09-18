import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-mercado-real.png';
import logoImage from '@/assets/logo-pertin-so.png';
const HeroSection = () => {
  const handleWhatsAppClick = () => {
    // Substitua pelo número real do WhatsApp
    const phoneNumber = '5562999999999'; // Exemplo de número
    const message = 'Olá! Gostaria de saber mais sobre o Pertin sô.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return <section id="inicio" className="pt-16 min-h-screen flex items-center hero-gradient rounded-sm bg-black/[0.31]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Conteúdo de texto */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <img 
                src={logoImage} 
                alt="Pertin sô" 
                className="h-24 md:h-32 mx-auto lg:mx-0 mb-4"
              />
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left text-[#2e6b4d]">
                O seu mercadim de confiança
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Praticidade e atendimento acolhedor pertinho de você.
            </p>
            
            <Button onClick={handleWhatsAppClick} size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 font-semibold shadow-soft hover:shadow-hover transition-smooth text-xl">
              <MessageCircle className="mr-3" size={24} />
              Fale no WhatsApp
            </Button>
          </div>

          {/* Imagem */}
          <div className="text-center">
            <img 
              src={heroImage} 
              alt="Interior do Pertin sô" 
              className="w-full max-w-lg mx-auto rounded-2xl shadow-soft hover:shadow-hover transition-smooth"
            />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
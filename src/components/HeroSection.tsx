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
  return <section id="inicio" className="pt-16 min-h-screen flex items-center hero-gradient rounded-sm bg-black/[0.31]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Conteúdo de texto */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <img 
                src={logoImage} 
                alt="Pertin Sô" 
                className="h-44 md:h-56 lg:h-72 mx-auto lg:mx-0 mb-8 drop-shadow-lg"
              />
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left text-[#2e6b4d]">
                O mercado autônomo que valoriza o seu espaço
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Instale um mini mercado 24h no seu condomínio, academia ou empresa — sem atendente, sem custo e com total segurança.
            </p>
            
            <Button onClick={handleWhatsAppClick} size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 font-semibold shadow-soft hover:shadow-hover transition-smooth text-xl">
              <MessageCircle className="mr-3" size={24} />
              Quero um Pertin sô no meu espaço
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
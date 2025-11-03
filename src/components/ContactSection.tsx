import { MessageCircle, Instagram, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5534998013859';
    const message = 'Olá! Quero um Pertin sô no meu espaço.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramClick = () => {
    // Substitua pelo Instagram real
    window.open('https://instagram.com/pertin.so', '_blank');
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: '(34) 9 98013859',
      action: handleWhatsAppClick,
      color: 'text-green-600'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      description: '@pertin.so',
      action: handleInstagramClick,
      color: 'text-pink-600'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6 px-2">
            Quer um Pertin sô no seu espaço??
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8 px-4">
            Leve conveniência, tecnologia e confiança para o seu ambiente.<br />
            Fale com a gente e descubra como é fácil instalar seu mercado autônomo.
          </p>
          
          <Button 
            onClick={handleWhatsAppClick}
            size="lg" 
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-5 md:px-8 md:py-6 font-semibold shadow-soft hover:shadow-hover transition-smooth text-base md:text-lg lg:text-xl mx-4"
          >
            <MessageCircle className="mr-2 md:mr-3" size={20} />
            <span className="hidden sm:inline">Falar com a equipe Pertin sô</span>
            <span className="sm:hidden">Falar Conosco</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {contactInfo.map((item, index) => (
            <Card 
              key={index} 
              className={`group cursor-pointer shadow-soft hover:shadow-hover transition-smooth ${
                item.action !== (() => {}) ? 'hover:bg-muted/50' : ''
              }`}
              onClick={item.action}
            >
              <CardContent className="p-5 md:p-6 text-center">
                <item.icon 
                  size={36} 
                  className={`mx-auto mb-3 md:mb-4 ${item.color} group-hover:scale-110 transition-smooth`} 
                />
                <h3 className="text-base sm:text-lg font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
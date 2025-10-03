import { MessageCircle, Instagram, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5562999999999'; // Substitua pelo número real
    const message = 'Olá! Gostaria de saber mais sobre o Pertin sô.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramClick = () => {
    // Substitua pelo Instagram real
    window.open('https://instagram.com/pertinso', '_blank');
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: '(62) 9 9999-9999',
      action: handleWhatsAppClick,
      color: 'text-green-600'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      description: '@pertinso',
      action: handleInstagramClick,
      color: 'text-pink-600'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Vamos melhorar o seu dia a dia?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fale conosco.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <Card 
              key={index} 
              className={`group cursor-pointer shadow-soft hover:shadow-hover transition-smooth ${
                item.action !== (() => {}) ? 'hover:bg-muted/50' : ''
              }`}
              onClick={item.action}
            >
              <CardContent className="p-6 text-center">
                <item.icon 
                  size={40} 
                  className={`mx-auto mb-4 ${item.color} group-hover:scale-110 transition-smooth`} 
                />
                <h3 className="text-lg font-semibold text-primary mb-2">
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
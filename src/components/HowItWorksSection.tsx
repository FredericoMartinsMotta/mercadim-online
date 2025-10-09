import { Wrench, Package, ShoppingCart, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Wrench,
      title: 'Instalação fácil',
      description: 'Nós cuidamos de tudo — sem custo inicial.',
      number: '1'
    },
    {
      icon: Package,
      title: 'Mix personalizado',
      description: 'Escolhemos os produtos certos para o seu público.',
      number: '2'
    },
    {
      icon: ShoppingCart,
      title: 'Compra autônoma',
      description: 'O cliente escolhe, paga e leva — direto pelo toten.',
      number: '3'
    },
    {
      icon: BarChart3,
      title: 'Gestão completa',
      description: 'Monitoramento, reposição e suporte 100% com a gente.',
      number: '4'
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Simples, prático e totalmente autônomo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O Pertin sô é um mercado compacto e automatizado que funciona 24 horas por dia, dentro do seu condomínio, academia ou empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="group shadow-soft hover:shadow-hover transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <div className="text-6xl font-bold text-primary/10 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                    {step.number}
                  </div>
                  <step.icon 
                    size={48} 
                    className="mx-auto text-primary relative z-10 group-hover:scale-110 transition-smooth" 
                  />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

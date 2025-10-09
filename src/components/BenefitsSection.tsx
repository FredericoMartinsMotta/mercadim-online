import { DollarSign, Clock, Smile, Shield, TrendingUp, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Zero custo de instalação',
      description: 'Comece sem investir nada — cuidamos de toda a estrutura.'
    },
    {
      icon: Clock,
      title: 'Funcionamento 24 horas',
      description: 'Seu espaço disponível o tempo todo, sem depender de equipe.'
    },
    {
      icon: Smile,
      title: 'Mais comodidade',
      description: 'Ofereça conveniência e conforto para moradores, alunos e funcionários.'
    },
    {
      icon: Shield,
      title: 'Segurança total',
      description: 'Sistema com câmeras, controle de acesso e pagamento digital.'
    },
    {
      icon: TrendingUp,
      title: 'Reabastecimento inteligente',
      description: 'Reposição automática com base no consumo.'
    },
    {
      icon: Star,
      title: 'Valorização do ambiente',
      description: 'Um serviço moderno que agrega valor e inovação ao seu espaço.'
    }
  ];

  return (
    <section id="beneficios" className="py-20 section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Vantagens para quem instala o Pertin sô
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group shadow-soft hover:shadow-hover transition-smooth">
              <CardContent className="p-6">
                <benefit.icon 
                  size={40} 
                  className="text-primary mb-4 group-hover:scale-110 transition-smooth" 
                />
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

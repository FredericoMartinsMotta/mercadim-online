import { Building2, Dumbbell, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ForWhoSection = () => {
  const audiences = [
    {
      icon: Building2,
      title: 'Condomínios residenciais',
      description: 'Ofereça mais praticidade e comodidade aos moradores.',
      emoji: '🏢'
    },
    {
      icon: Dumbbell,
      title: 'Academias',
      description: 'Ajude seus alunos a manter a rotina com lanches, bebidas e suplementos sempre à mão.',
      emoji: '💪'
    },
    {
      icon: Briefcase,
      title: 'Empresas e escritórios',
      description: 'Mais conforto e produtividade para sua equipe, sem sair do ambiente de trabalho.',
      emoji: '💼'
    }
  ];

  return (
    <section id="para-quem" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Ideal para diferentes ambientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <Card key={index} className="group shadow-soft hover:shadow-hover transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">{audience.emoji}</div>
                <audience.icon 
                  size={48} 
                  className="mx-auto text-primary mb-4 group-hover:scale-110 transition-smooth" 
                />
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {audience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;

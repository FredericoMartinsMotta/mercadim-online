import { CreditCard } from 'lucide-react';
import pagamentoImage from '@/assets/pagamento-real.jpg';

const LocationSection = () => {
  return (
    <section id="localizacao" className="py-20 section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4 px-2">
            Pagamento Prático
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Escolha seus produtos, aproxime na leitora, escolha a forma de pagamento e aproveite!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div className="rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-smooth">
            <img 
              src={pagamentoImage} 
              alt="Autoatendimento Pertin sô" 
              className="w-full h-[500px] object-cover object-center"
            />
          </div>

          {/* Informações */}
          <div className="text-center lg:text-left px-2">
            <div className="flex items-center justify-center lg:justify-start mb-3 md:mb-4">
              <CreditCard className="text-primary mr-2" size={20} />
              <h3 className="text-lg sm:text-xl font-semibold text-primary">Formas de Pagamento</h3>
            </div>
            
            <p className="text-base sm:text-lg text-foreground mb-4 md:mb-6">
              Cartão de crédito, débito e pix.
            </p>

            <div className="space-y-3 md:space-y-4">
              <div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Soluções personalizadas para o seu condomínio e empresa.<br />
                  Pagamento rápido, seguro e sem complicações.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
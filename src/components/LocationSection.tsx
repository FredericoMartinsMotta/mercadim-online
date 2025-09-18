import { MapPin } from 'lucide-react';

const LocationSection = () => {
  return (
    <section id="localizacao" className="py-20 section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nossa Localização
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            📍 Estamos no Cidade Jardim, Goiânia – venha nos visitar!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mapa */}
          <div className="rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-smooth">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8791234567!2d-49.2578125!3d-16.6869444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQxJzEzLjAiUyA0OcKwMTUnMjguMSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Pertin sô"
            />
          </div>

          {/* Informações */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <MapPin className="text-primary mr-2" size={24} />
              <h3 className="text-xl font-semibold text-primary">Endereço</h3>
            </div>
            
            <p className="text-lg text-foreground mb-6">
              Rua das Flores, 123<br />
              Cidade Jardim<br />
              Goiânia - GO<br />
              CEP: 74000-000
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Horário de Funcionamento</h4>
                <p className="text-muted-foreground">
                  Segunda a Sábado: 07:00 às 19:00<br />
                  Domingo: 07:00 às 13:00
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
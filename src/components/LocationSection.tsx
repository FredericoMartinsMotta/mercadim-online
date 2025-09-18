import { MapPin } from 'lucide-react';

const LocationSection = () => {
  return (
    <section id="localizacao" className="py-20 section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nossa Localização
          </h2>
          <div className="flex items-center justify-center text-lg text-foreground">
            <MapPin className="mr-2 text-accent" size={24} />
            Estamos no Cidade Jardim, Goiânia – venha nos visitar!
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mapa */}
          <div className="relative">
            <div className="w-full h-80 bg-muted rounded-2xl shadow-soft overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61283.691223835985!2d-49.2544456!3d-16.6868571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef0f4bfeab773%3A0x1e6965b79ba9b577!2sCidade%20Jardim%2C%20Goi%C3%A2nia%20-%20GO!5e0!3m2!1spt!2sbr!4v1692900000000!5m2!1spt!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Pertin sô no Cidade Jardim, Goiânia"
              />
            </div>
          </div>

          {/* Informações de localização */}
          <div className="text-center lg:text-left space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Endereço
              </h3>
              <p className="text-muted-foreground">
                Rua das Flores, 123<br />
                Cidade Jardim<br />
                Goiânia - GO<br />
                CEP: 74000-000
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Horário de Funcionamento
              </h3>
              <div className="text-muted-foreground space-y-1">
                <p>Segunda a Sábado: 6h às 22h</p>
                <p>Domingo: 7h às 20h</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Como Chegar
              </h3>
              <p className="text-muted-foreground">
                Estamos localizados no coração do Cidade Jardim, 
                próximo ao posto de saúde e à praça central.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
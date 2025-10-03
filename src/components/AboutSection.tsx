import aboutImage from '@/assets/sobre-equipe-real.jpg';
const AboutSection = () => {
  return <section id="sobre" className="py-20 section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Imagem */}
          <div className="order-2 lg:order-1">
            <img src={aboutImage} alt="Equipe do Pertin sô" className="w-full h-auto rounded-2xl shadow-soft hover:shadow-hover transition-smooth" />
          </div>

          {/* Texto */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Sobre Nós
            </h2>
            
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
              O <strong className="text-primary">Pertin sô</strong> é um mercado autônomo que nasceu com a proposta de oferecer comodidade e preços justos para o seu condomínio, sua empresa e sua academia. Os produtos são selecionados com muito cuidado para trazer praticidade e comodidade no seu dia a dia.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center lg:text-left">
                <p className="text-lg font-semibold text-primary">O seu condomínio valoriza</p>
              </div>
              
              <div className="text-center lg:text-left">
                <p className="text-lg font-semibold text-primary">A sua academia fica mais completa</p>
              </div>

              <div className="text-center lg:text-left">
                <p className="text-lg font-semibold text-primary">A sua empresa ganha vida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;
import aboutImage from '@/assets/sobre-equipe.jpg';
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
            
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              O <strong className="text-primary">Pertin sô</strong> nasceu com a ideia de oferecer praticidade e preços justos para a vizinhança. Aqui você encontra produtos do dia a dia com carinho e dedicação.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-semibold text-primary mb-2">Nossa Missão</h3>
                <p className="text-muted-foreground">Ser o parceiro do dia a dia da comunidade.</p>
              </div>
              
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-semibold text-primary mb-2">Nossos Valores</h3>
                <p className="text-muted-foreground">
                  Qualidade, proximidade e atendimento acolhedor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;
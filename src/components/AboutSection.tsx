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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6 px-2">
              Pertin sô: o mercadim de confiança, agora no seu espaço
            </h2>
            
            <div className="space-y-4 md:space-y-6 text-base sm:text-lg md:text-xl text-foreground leading-relaxed px-2">
              <p>
                A gente nasceu em Uberaba-MG com uma missão simples: levar praticidade e confiança para o dia a dia das pessoas.
              </p>
              
              <p>
                O nome <strong className="text-primary">Pertin sô</strong> vem do nosso jeito mineiro de dizer "pertinho" — porque queremos estar sempre pertinho de você, oferecendo o essencial com tecnologia, conforto e segurança.
              </p>
              
              <p>
                Nosso propósito é transformar espaços comuns em locais mais práticos, modernos e funcionais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;
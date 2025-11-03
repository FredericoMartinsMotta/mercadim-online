const Footer = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5534998013859';
    const message = 'Olá! Gostaria de saber mais sobre o Pertin sô.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-primary text-primary-foreground py-6 md:py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-1.5 md:space-y-2">
          <p className="text-base sm:text-lg font-semibold">
            Pertin sô — O mercado autônomo de confiança.
          </p>
          <p className="text-sm sm:text-base text-primary-foreground/90">
            📍 Uberaba - MG
          </p>
          <p className="text-sm sm:text-base text-primary-foreground/90">
            ✉️ contato@pertinso.com.br
          </p>
          <p 
            className="text-sm sm:text-base text-primary-foreground/90 cursor-pointer hover:text-primary-foreground transition-smooth"
            onClick={handleWhatsAppClick}
          >
            📱 (34) 9 98013859
          </p>
          <p className="mt-3 md:mt-4 text-xs sm:text-sm text-primary-foreground/80">
            © 2025 Pertin sô. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
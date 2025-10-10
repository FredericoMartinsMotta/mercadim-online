import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo-pertin-so.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-soft">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="Pertin sô" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-primary hidden sm:inline">
              Pertin sô
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('como-funciona')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Como funciona
            </button>
            <button 
              onClick={() => scrollToSection('beneficios')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Vantagens
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('para-quem')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Ambientes
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Avaliações
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-foreground hover:text-primary transition-smooth"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('como-funciona')}
                className="text-left text-foreground hover:text-primary transition-smooth"
              >
                Como funciona
              </button>
              <button 
                onClick={() => scrollToSection('beneficios')}
                className="text-left text-foreground hover:text-primary transition-smooth"
              >
                Vantagens
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-foreground hover:text-primary transition-smooth"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('para-quem')}
                className="text-left text-foreground hover:text-primary transition-smooth"
              >
                Ambientes
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="text-left text-foreground hover:text-primary transition-smooth"
              >
                Avaliações
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-foreground hover:text-primary transition-smooth"
              >
                Contato
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
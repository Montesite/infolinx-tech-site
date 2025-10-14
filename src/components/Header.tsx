import { useState, useEffect } from 'react';
import { Menu, X, Monitor, Headphones, Shield, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    href: '#inicio',
    label: 'Início'
  }, {
    href: '#sobre',
    label: 'Sobre'
  }, {
    href: '#planos',
    label: 'Serviços'
  }, {
    href: '#contato',
    label: 'Contato'
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/lovable-uploads/dd8a0701-ac38-461c-a2e2-e71a00f3ee46.png" alt="Infolinx Logo - Aperfeiçoar com Tecnologia" className="h-32 sm:h-24 md:h-28 lg:h-40 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map(link => <button key={link.href} onClick={() => scrollToSection(link.href)} className="nav-link text-sm xl:text-base">
                {link.label}
              </button>)}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a href="https://infolinx.tomticket.com" title="Acessar Help Desk" target="_blank" rel="noopener noreferrer" className="text-sm xl:text-base px-4 xl:px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-md font-medium">
              Sou Cliente
            </a>
            <Button onClick={() => scrollToSection('#contato')} className="bg-primary text-primary-foreground hover:bg-primary-600 focus:bg-primary-600 focus:ring-2 focus:ring-primary/20 text-sm xl:text-base px-4 xl:px-6">
              Falar Conosco
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 rounded-md hover:bg-muted focus:bg-muted focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-2 mt-4">
              {navLinks.map(link => <button key={link.href} onClick={() => scrollToSection(link.href)} className="nav-link text-left py-3 text-base">
                  {link.label}
                </button>)}
              <a href="https://infolinx.tomticket.com" title="Acessar Help Desk" target="_blank" rel="noopener noreferrer" className="mt-2 w-full py-3 px-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-md font-medium text-center">
                Sou Cliente
              </a>
              <Button onClick={() => scrollToSection('#contato')} className="mt-2 bg-primary text-primary-foreground hover:bg-primary-600 focus:bg-primary-600 w-full py-3">
                Falar Conosco
              </Button>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;
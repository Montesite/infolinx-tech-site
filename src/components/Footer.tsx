
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <img 
              src="/lovable-uploads/dd8a0701-ac38-461c-a2e2-e71a00f3ee46.png" 
              alt="Infolinx Logo" 
              className="h-10 sm:h-12 w-auto"
            />
            <p className="text-secondary-foreground/80 leading-relaxed text-sm sm:text-base">
              Aperfeiçoar com Tecnologia. Somos especialistas em suporte, manutenção 
              e gerenciamento de ativos de tecnologia para empresas.
            </p>
            <div className="space-y-2">
              <p className="text-xs sm:text-sm text-secondary-foreground/60">
                <strong>CNPJ:</strong> 17.238.598/0001-54
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-secondary-foreground">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <button 
                onClick={() => document.querySelector('#inicio')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-left text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm sm:text-base"
              >
                Início
              </button>
              <button 
                onClick={() => document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-left text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm sm:text-base"
              >
                Sobre
              </button>
              <button 
                onClick={() => document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-left text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm sm:text-base"
              >
                Serviços
              </button>
              <button 
                onClick={() => document.querySelector('#planos')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-left text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm sm:text-base"
              >
                Planos
              </button>
              <button 
                onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-left text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm sm:text-base"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-secondary-foreground">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-foreground/60 flex-shrink-0" />
                <a 
                  href="tel:+553192980064"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm sm:text-base"
                >
                  (31) 92980064
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-foreground/60 flex-shrink-0" />
                <a 
                  href="mailto:atendimento@infolinx.com.br"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm sm:text-base break-all"
                >
                  atendimento@infolinx.com.br
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-secondary-foreground/60 text-xs sm:text-sm">
            © {currentYear} Infolinx Serviços e Suprimentos LTDA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

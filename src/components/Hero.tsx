
import { ArrowRight, Play, CheckCircle, Users, Award, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center overflow-hidden pt-40 sm:pt-36 md:pt-40 lg:pt-52"
      style={{
        backgroundImage: 'url(/lovable-uploads/5320e2f5-bd0e-4128-8518-5ed10f953f29.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Background Pattern - keeping the floating elements for additional visual interest */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-lg rotate-12 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-lg -rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 border border-white/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 border border-white/20 rounded-lg -rotate-45 animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Aperfeiçoar</span>
                <span className="block text-white/90">com</span>
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Tecnologia
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl">
                Somos especialistas em suporte, manutenção e gerenciamento de ativos de tecnologia para empresas.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('#planos')}
                className="btn-hero-primary group flex items-center justify-center gap-2"
              >
                Conhecer Planos
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('#sobre')}
                className="btn-hero-secondary group flex items-center justify-center gap-2"
              >
                <Play size={20} />
                Saiba Mais
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white/90 mr-2" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white">B2B</div>
                <div className="text-xs sm:text-sm text-white/80">Foco Corporativo</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white/90 mr-2" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white">Qualidade</div>
                <div className="text-xs sm:text-sm text-white/80">Excelência</div>
              </div>
              <div className="text-center sm:col-span-2 md:col-span-1">
                <div className="flex items-center justify-center mb-2">
                  <Headphones className="w-5 h-5 sm:w-6 sm:h-6 text-white/90 mr-2" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white">24/7</div>
                <div className="text-xs sm:text-sm text-white/80">Suporte Disponível</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-slide-in lg:mt-[-4rem]" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 min-h-[32rem]">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Nossos Diferenciais
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                    <div className="text-white/90">
                      <div className="font-medium">Parque Tecnológico Completo</div>
                      <div className="text-sm text-white/70">Gerenciamento total dos seus ativos de TI</div>
                    </div>
                  </div>
                  
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                    <div className="text-white/90">
                      <div className="font-medium">Suporte Dedicado</div>
                      <div className="text-sm text-white/70">Atendimento especializado para sua empresa</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                    <div className="text-white/90">
                      <div className="font-medium">Entrega & Segurança</div>
                      <div className="text-sm text-white/70">Delivery especializado para equipamentos</div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <a 
                    href="https://wa.me/553192980064?text=Olá! Gostaria de conhecer mais sobre os serviços da Infolinx."
                    className="btn-hero-primary w-full flex items-center justify-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img 
                      src="/lovable-uploads/d92d3c24-3b57-4af8-9577-4fa6a5f495d2.png" 
                      alt="WhatsApp"
                      className="w-5 h-5"
                    />
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

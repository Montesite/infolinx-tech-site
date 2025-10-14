
import { Laptop, Server, Headphones, Shield, Gamepad2, Truck, Network, Monitor } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [{
    icon: Headphones,
    title: 'Suporte Técnico',
    description: 'Suporte especializado para desktop, notebook, servidores e toda sua infraestrutura de TI.'
  }, {
    icon: Server,
    title: 'Gerenciamento de Ativos',
    description: 'Gestão completa do seu parque tecnológico com monitoramento 24/7 e manutenção preventiva.'
  }, {
    icon: Shield,
    title: 'Licenças de Software',
    description: 'Venda e gerenciamento de licenças Microsoft, AutoDesk, Kaspersky, Adobe e outros.'
  }, {
    icon: Laptop,
    title: 'Equipamentos Corporativos',
    description: 'Venda de desktops, notebooks, servidores e toda linha de equipamentos empresariais.'
  }, {
    icon: Network,
    title: 'Infraestrutura de Rede',
    description: 'Switches, roteadores, firewall, access points e projetos de rede de dados personalizados.'
  }, {
    icon: Gamepad2,
    title: 'PCs GAMER',
    description: 'Montagem e personalização de PCs GAMER com componentes de alta performance.'
  }, {
    icon: Truck,
    title: 'Delivery Especializado',
    description: 'Serviço de entrega dedicado para segurança e transporte dos seus equipamentos.'
  }, {
    icon: Monitor,
    title: 'Controle de Acesso',
    description: 'Projetos personalizados de controle de acesso para condomínios e empresas.'
  }];

  const requestQuote = (serviceTitle: string) => {
    const message = `Olá! Gostaria de solicitar orçamento para o serviço: ${serviceTitle}`;
    window.open(`https://wa.me/553192980064?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-20 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Oferecemos soluções completas em tecnologia para empresas de todos os tamanhos, 
            com foco na excelência e resultados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12 sm:mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <Card key={index} className="card-service hover:shadow-lg transition-all duration-300 animate-fade-in h-full" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-4 sm:p-6 text-center h-full flex flex-col">
                  <div className="mb-4">
                    <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 flex-grow">{service.description}</p>
                  
                  <Button
                    onClick={() => requestQuote(service.title)}
                    variant="default"
                    size="sm"
                    className="w-full text-xs sm:text-sm mt-auto"
                  >
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-primary/10 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              Precisa de uma solução personalizada?
            </h3>
            <p className="text-muted-foreground mb-6 text-sm sm:text-base">
              Nossa equipe está pronta para desenvolver a solução perfeita para sua empresa.
            </p>
            <a 
              href="https://wa.me/553192980064?text=Olá! Gostaria de uma consultoria personalizada sobre os serviços da Infolinx."
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-6 sm:px-8 py-3 rounded-lg hover:bg-primary/90 focus:bg-primary/90 focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src="/lovable-uploads/d92d3c24-3b57-4af8-9577-4fa6a5f495d2.png" 
                alt="WhatsApp"
                className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
              />
              Falar Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

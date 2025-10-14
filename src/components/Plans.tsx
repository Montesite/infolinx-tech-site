import { Check, Monitor, Server, Tablet, Router, Printer, Shield, Camera, Cloud, ShoppingCart, Plus, Minus } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import CartDrawer from './CartDrawer';
const Plans = () => {
  const services = [{
    id: 1,
    name: 'Desktop',
    price: 'R$ 55,00',
    icon: Monitor
  }, {
    id: 2,
    name: 'Notebook',
    price: 'R$ 65,00',
    icon: Monitor
  }, {
    id: 3,
    name: 'Tablet',
    price: 'R$ 35,00',
    icon: Tablet
  }, {
    id: 4,
    name: 'Servidores',
    price: 'R$ 355,00',
    icon: Server
  }, {
    id: 5,
    name: 'Roteadores',
    price: 'R$ 90,00',
    icon: Router
  }, {
    id: 6,
    name: 'Switch Gerenciável',
    price: 'R$ 120,00',
    icon: Router
  }, {
    id: 7,
    name: 'Switch Não Gerenciável',
    price: 'R$ 35,00',
    icon: Router
  }, {
    id: 8,
    name: 'Access Point',
    price: 'R$ 35,00',
    icon: Router
  }, {
    id: 9,
    name: 'DVR 8 canais (24h)',
    price: 'R$ 35,00',
    icon: Camera
  }, {
    id: 10,
    name: 'DVR 16 canais (24h)',
    price: 'R$ 55,00',
    icon: Camera
  }, {
    id: 11,
    name: 'Alarme (24h)',
    price: 'R$ 120,00',
    icon: Shield
  }, {
    id: 12,
    name: 'Impressoras',
    price: 'R$ 55,00',
    icon: Printer
  }, {
    id: 13,
    name: 'Nobreaks',
    price: 'R$ 45,00',
    icon: Shield
  }, {
    id: 14,
    name: 'Microsoft 365 Basic',
    price: 'R$ 8,50',
    icon: Cloud
  }, {
    id: 15,
    name: 'Microsoft 365 Standard',
    price: 'R$ 12,50',
    icon: Cloud
  }, {
    id: 16,
    name: 'Microsoft 365 Premium',
    price: 'R$ 19,50',
    icon: Cloud
  }, {
    id: 17,
    name: 'Microsoft 365 E1',
    price: 'R$ 12,50',
    icon: Cloud
  }, {
    id: 18,
    name: 'Microsoft 365 E5',
    price: 'R$ 22,50',
    icon: Cloud
  }];
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quantities, setQuantities] = useState<{
    [key: number]: number;
  }>({});
  const {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getTotalItems,
    generateWhatsAppMessage
  } = useCart();
  const getQuantity = (serviceId: number) => quantities[serviceId] || 1;
  const updateServiceQuantity = (serviceId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setQuantities(prev => ({
      ...prev,
      [serviceId]: newQuantity
    }));
  };
  const handleAddToCart = (service: typeof services[0]) => {
    const quantity = getQuantity(service.id);
    addToCart({
      id: service.id,
      name: service.name,
      price: service.price
    }, quantity);
  };
  const handleSendWhatsApp = () => {
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/553192980064?text=${message}`, '_blank');
  };
  return (
    <section id="planos" className="py-12 sm:py-16 lg:py-20 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating Cart Button */}
        {getTotalItems() > 0 && <div className="fixed bottom-6 right-20 z-50">
            <Button onClick={() => setIsCartOpen(true)} className="relative bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-14 h-14 shadow-lg">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                {getTotalItems()}
              </span>
            </Button>
          </div>}

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Oferecemos suporte, manutenção e gerenciamento para todos os seus equipamentos 
            e sistemas de tecnologia com preços transparentes.
          </p>
          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-primary/10 rounded-lg inline-block">
            <p className="text-primary font-medium text-sm sm:text-base mb-2">
              <strong>Plano BASIC:</strong> Quantitativo mínimo: 5 dispositivos | Contratos anuais
            </p>
            <p className="text-primary/80 text-xs sm:text-sm">
              Também possuímos planos <strong>Standard</strong> e <strong>Premium</strong> com condições diferenciadas.
              <br />
              <span className="underline">Entre em contato para saber mais sobre os outros planos.</span>
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
          const IconComponent = service.icon;
          const currentQuantity = getQuantity(service.id);
          return <Card key={service.id} className="service-card hover:shadow-lg transition-all duration-300 animate-fade-in" style={{
            animationDelay: `${index * 0.05}s`
          }}>
                <CardHeader className="text-center pb-3">
                  <div className="mb-3">
                    <IconComponent className="w-8 h-8 text-primary mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{service.name}</h3>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div>
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <span className="text-sm text-muted-foreground block">
                      {service.name.includes('Microsoft 365') ? 'aditivo por usuário/mês' : 'por mês'}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>Suporte completo incluído</span>
                  </div>

                  {/* Microsoft Disclaimer */}
                  {service.name.includes('Microsoft 365') && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-3">
                      <p className="text-xs text-amber-800 leading-relaxed">
                        <strong>Aviso:</strong> Este item não é a venda da licença Microsoft, é o serviço de apoio, gestão e evolução para os clientes que já tem a licenças.
                      </p>
                    </div>
                  )}

                  {/* Nobreaks Additional Info */}
                  {service.name === 'Nobreaks' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-3">
                      <p className="text-xs text-green-800 leading-relaxed">
                        <strong>Incluso:</strong> Equipamento reserva incluído
                      </p>
                    </div>
                  )}

                  {/* Quantity Selector */}
                  <div className="flex items-center justify-center gap-2 py-2">
                    <Button variant="outline" size="sm" onClick={() => updateServiceQuantity(service.id, currentQuantity - 1)} className="h-8 w-8 p-0" disabled={currentQuantity <= 1}>
                      <Minus className="h-3 w-3" />
                    </Button>
                    
                    <span className="min-w-[3rem] text-center font-medium bg-muted px-3 py-1 rounded">
                      {currentQuantity}
                    </span>
                    
                    <Button variant="outline" size="sm" onClick={() => updateServiceQuantity(service.id, currentQuantity + 1)} className="h-8 w-8 p-0">
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <Button onClick={() => handleAddToCart(service)} className="w-full">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Adicionar ao Carrinho
                    </Button>
                    
                    <a href={`https://wa.me/553192980064?text=Olá! Gostaria de contratar o serviço de ${service.name} da Infolinx.`} className="w-full inline-flex items-center justify-center bg-secondary text-secondary-foreground font-medium px-4 py-2 rounded-lg hover:bg-secondary/80 transition-all duration-300 text-sm" target="_blank" rel="noopener noreferrer">
                      Contratar Individual
                    </a>
                  </div>
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 animate-fade-in" style={{
        animationDelay: '0.9s'
      }}>
          <div className="bg-card border border-border rounded-xl p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Como funciona nossa prestação de serviços?
            </h3>
            <p className="text-muted-foreground mb-4">
              A precificação é medida pelo quantitativo individual de cada item do seu parque tecnológico. 
              Oferecemos contratos anuais com suporte completo, manutenção preventiva e corretiva.
            </p>
            <p className="text-primary font-medium">
              Entre em contato para uma análise personalizada das suas necessidades!
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 animate-fade-in" style={{
        animationDelay: '1.0s'
      }}>
          <div className="bg-primary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Precisa de um orçamento personalizado?
            </h3>
            <p className="text-muted-foreground mb-6">
              Entre em contato conosco para receber uma proposta customizada 
              para as necessidades específicas da sua empresa.
            </p>
            <a href="https://wa.me/553192980064?text=Olá! Gostaria de receber um orçamento personalizado dos serviços da Infolinx." className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 focus:bg-primary/90 focus:ring-2 focus:ring-primary/20 transition-all duration-300" target="_blank" rel="noopener noreferrer">
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cartItems={cartItems} onUpdateQuantity={updateQuantity} onRemoveItem={removeFromCart} onClearCart={clearCart} onSendWhatsApp={handleSendWhatsApp} />
    </section>
  );
};
export default Plans;
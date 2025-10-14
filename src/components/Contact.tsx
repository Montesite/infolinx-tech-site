import { Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
const Contact = () => {
  return <section id="contato" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Estamos prontos para atender sua empresa e fornecer as melhores soluções em tecnologia. 
            Fale conosco agora mesmo!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8 animate-slide-in">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <Card className="card-service">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Telefone</h4>
                        <a href="tel:+553192980064" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">
                          (31) 92980064
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-service">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">E-mail</h4>
                        <a href="mailto:atendimento@infolinx.com.br" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base break-all">
                          atendimento@infolinx.com.br
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>


                <Card className="card-service">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Horário de Funcionamento</h4>
                        <p className="text-muted-foreground text-sm sm:text-base">
                          Segunda a Sexta: 08:30 às 18:00
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-center">
              <div className="text-center space-y-4 sm:space-y-6">
                <img src="/lovable-uploads/d92d3c24-3b57-4af8-9577-4fa6a5f495d2.png" alt="WhatsApp" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Vamos Conversar?
                </h3>
                <p className="text-muted-foreground text-base sm:text-lg">
                  Nossa equipe está pronta para entender suas necessidades e 
                  apresentar a melhor solução para sua empresa.
                </p>
                
                <div className="space-y-3 sm:space-y-4">
                  <a href="https://wa.me/553192980064?text=Olá! Gostaria de conhecer mais sobre os serviços da Infolinx." className="inline-flex items-center justify-center w-full bg-green-500 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-green-600 focus:bg-green-600 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 group text-sm sm:text-base" target="_blank" rel="noopener noreferrer">
                    <img src="/lovable-uploads/d92d3c24-3b57-4af8-9577-4fa6a5f495d2.png" alt="WhatsApp" className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Falar no WhatsApp
                  </a>
                  
                  <a href="mailto:atendimento@infolinx.com.br" className="inline-flex items-center justify-center w-full bg-primary text-primary-foreground font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-primary-600 focus:bg-primary-600 focus:ring-2 focus:ring-primary/20 transition-all duration-300 group text-sm sm:text-base">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Enviar E-mail
                  </a>
                </div>
                
                <div className="pt-3 sm:pt-4 border-t border-border/50">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
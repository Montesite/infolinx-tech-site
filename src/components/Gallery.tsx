
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    {
      src: '/lovable-uploads/76f0d139-e660-492e-86fa-5cca9bb9a7e1.png',
      alt: 'Infolinx Technology Background',
      title: 'Tecnologia Avançada'
    },
    {
      src: '/lovable-uploads/9c85dabf-56ee-485c-aea2-fbdbe9d50769.png',
      alt: 'Quem Somos - Infolinx',
      title: 'Quem Somos'
    },
    {
      src: '/lovable-uploads/9a55e500-e0ef-43dd-a959-5c2abd90b69b.png',
      alt: 'Nossos Serviços',
      title: 'Nossos Serviços'
    },
    {
      src: '/lovable-uploads/01cf467b-86b3-4f50-a424-d4d5be029b05.png',
      alt: 'Produtos - Parcerias',
      title: 'Nossos Produtos'
    },
    {
      src: '/lovable-uploads/f113ac0a-917b-4aec-9302-6eb474e24609.png',
      alt: 'Clientes Infolinx',
      title: 'Nossos Clientes'
    },
    {
      src: '/lovable-uploads/5981286e-2178-4067-87b2-a5a71aefb3ac.png',
      alt: 'Planos de Serviços',
      title: 'Planos de Serviços'
    },
    {
      src: '/lovable-uploads/1f421959-cd73-4d0a-80cd-f1ddd3594b25.png',
      alt: 'Missão Infolinx',
      title: 'Nossa Missão'
    },
    {
      src: '/lovable-uploads/49303d38-7f64-4e77-9fe8-1da14d96720d.png',
      alt: 'Valores Infolinx',
      title: 'Nossos Valores'
    },
    {
      src: '/lovable-uploads/170d646c-eac5-4771-9105-a371074acbda.png',
      alt: 'Visão Infolinx',
      title: 'Nossa Visão'
    },
    {
      src: '/lovable-uploads/5839bc74-5ac9-4b74-9a8e-d337ffe573d7.png',
      alt: 'A Infolinx',
      title: 'Sobre a Infolinx'
    }
  ];

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') previousImage();
    if (e.key === 'Escape') setIsModalOpen(false);
  };

  return (
    <section id="galeria" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossa Galeria
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Conheça mais sobre a Infolinx através de nossa galeria visual com informações 
            sobre nossos serviços, produtos e história.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card 
                    className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in cursor-pointer"
                    onClick={() => openModal(index)}
                  >
                    <CardContent className="p-0">
                      <div className="relative group">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-64 sm:h-48 lg:h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 text-white">
                            <h3 className="font-semibold text-lg">{image.title}</h3>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Modal for expanded image */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent 
            className="max-w-7xl w-full h-[95vh] p-0 bg-black/95 border-none"
            onKeyDown={handleKeyDown}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black/50"
              >
                <X size={24} />
              </button>

              {/* Previous button */}
              <button
                onClick={previousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black/50"
              >
                <ChevronLeft size={32} />
              </button>

              {/* Image */}
              <div className="flex flex-col items-center justify-center w-full h-full p-4 md:p-8">
                <img
                  src={images[selectedImageIndex].src}
                  alt={images[selectedImageIndex].alt}
                  className={`max-w-full object-contain ${
                    selectedImageIndex === 12 
                      ? 'max-h-[calc(50vh-100px)]' 
                      : selectedImageIndex === 11
                      ? 'max-h-[calc(60vh-100px)]'
                      : 'max-h-[calc(100%-100px)]'
                  }`}
                />
                <h3 className="text-white text-xl font-semibold mt-4 text-center">
                  {images[selectedImageIndex].title}
                </h3>
              </div>

              {/* Next button */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black/50"
              >
                <ChevronRight size={32} />
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
                {selectedImageIndex + 1} / {images.length}
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16 animate-fade-in" style={{ animationDelay: '1.3s' }}>
          <div className="bg-primary/10 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              Quer saber mais sobre nossos serviços?
            </h3>
            <p className="text-muted-foreground mb-6 text-sm sm:text-base">
              Entre em contato conosco e descubra como podemos ajudar sua empresa 
              a alcançar a excelência tecnológica.
            </p>
            <a 
              href="https://wa.me/553192980064?text=Olá! Gostaria de saber mais sobre os serviços da Infolinx."
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-6 sm:px-8 py-3 rounded-lg hover:bg-primary-600 focus:bg-primary-600 focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm sm:text-base"
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

export default Gallery;

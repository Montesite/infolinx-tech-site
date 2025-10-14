
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/553192980064?text=Olá! Gostaria de conhecer mais sobre os serviços da Infolinx."
      className="fixed bottom-6 right-6 z-40 bg-transparent hover:scale-110 p-0 rounded-full shadow-lg transition-all duration-300 group"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <img 
        src="/lovable-uploads/d92d3c24-3b57-4af8-9577-4fa6a5f495d2.png" 
        alt="WhatsApp"
        className="w-14 h-14 group-hover:scale-110 transition-transform"
      />
    </a>
  );
};

export default WhatsAppButton;

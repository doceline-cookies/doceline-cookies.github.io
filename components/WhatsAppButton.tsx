
import React from 'react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "55041997604712"; 
  const message = encodeURIComponent("Olá Doceline! Gostaria de saber mais sobre os cookies e brownies.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  
  // Link placeholder para 99Food (geralmente redireciona para a busca da loja no app)
  const ninetynineFoodUrl = "https://99app.com/99food/";

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-3">
      {/* 99Food Button */}
      <a 
        href={ninetynineFoodUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#FFD100] text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center gap-3 group border-4 border-[#FDF4E3]"
        aria-label="Compre na 99food"
      >
        <span className="hidden md:group-hover:block whitespace-nowrap font-bold text-sm ml-1">
          Compre na 99food
        </span>
        <svg 
          viewBox="0 0 24 24" 
          className="h-7 w-7 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stylized 99 Icon */}
          <path d="M7.5 4C5.57 4 4 5.57 4 7.5V11C4 12.93 5.57 14.5 7.5 14.5H10V16C10 17.1 9.1 18 8 18C6.9 18 6 17.1 6 16H4C4 18.21 5.79 20 8 20C10.21 20 12 18.21 12 16V7.5C12 5.57 10.43 4 8.5 4H7.5ZM10 11H7.5C6.67 11 6 10.33 6 9.5C6 8.67 6.67 8 7.5 8H10V11ZM17.5 4C15.57 4 14 5.57 14 7.5V11C14 12.93 15.57 14.5 17.5 14.5H20V16C20 17.1 19.1 18 18 18C16.9 18 16 17.1 16 16H14C14 18.21 15.79 20 18 20C20.21 20 22 18.21 22 16V7.5C22 5.57 20.43 4 18.5 4H17.5ZM20 11H17.5C16.67 11 16 10.33 16 9.5C16 8.67 16.67 8 17.5 8H20V11Z" />
        </svg>
      </a>

      {/* WhatsApp Button */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center gap-3 group border-4 border-[#FDF4E3]"
        aria-label="Fale conosco no WhatsApp"
      >
        <span className="hidden md:group-hover:block whitespace-nowrap font-bold text-sm ml-1">
          Fale conosco
        </span>
        <svg 
          viewBox="0 0 24 24" 
          className="h-7 w-7 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.894-5.335 11.897-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;

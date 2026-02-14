import React from 'react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onUpdateQuantity }) => {
  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleConfirmOrder = () => {
    if (items.length === 0) return;

    const phoneNumber = "55041997604712";
    let message = "Olá Doceline! Gostaria de fazer um pedido:\n\n";
    
    items.forEach(item => {
      message += `• ${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
    });

    message += `\n*Total: R$ ${total.toFixed(2)}*`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <div 
        className="absolute inset-0 bg-[#4A2C21]/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md">
          <div className="h-full flex flex-col bg-[#e9dac7] shadow-2xl border-l border-[#4A2C21]/10">
            <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-xl font-bold text-[#4A2C21]">Seu Pedido</h2>
                <div className="ml-3 h-7 flex items-center">
                  <button onClick={onClose} className="p-2 text-[#4A2C21]/60 hover:text-[#4A2C21]">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-8">
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">🍪</div>
                    <p className="text-[#4A2C21]/70">Nenhum doce por aqui ainda.</p>
                  </div>
                ) : (
                  <ul className="space-y-6">
                    {items.map((item) => (
                      <li key={item.id} className="flex py-4 border-b border-[#4A2C21]/10">
                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl border border-[#4A2C21]/20">
                          <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                        </div>
                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-bold text-[#4A2C21]">
                              <h3>{item.name}</h3>
                              <p className="ml-4">R$ {(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="flex items-center space-x-2 border border-[#4A2C21]/20 rounded-xl px-2 py-1 bg-white/10">
                              <button 
                                onClick={() => onUpdateQuantity(item.id, -1)}
                                className="px-2 text-[#4A2C21] hover:text-white font-bold"
                              >
                                −
                              </button>
                              <span className="text-[#4A2C21] w-4 text-center font-bold">{item.quantity}</span>
                              <button 
                                onClick={() => onUpdateQuantity(item.id, 1)}
                                className="px-2 text-[#4A2C21] hover:text-white font-bold"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="border-t border-[#4A2C21]/10 py-6 px-4 sm:px-6 bg-[#4A2C21]/5">
              <div className="flex justify-between text-lg font-bold text-[#4A2C21]">
                <p>Subtotal</p>
                <p>R$ {total.toFixed(2)}</p>
              </div>
              <p className="mt-0.5 text-xs text-[#4A2C21]/70">Produtos pesados individualmente para qualidade.</p>
              <div className="mt-6">
                <button
                  onClick={handleConfirmOrder}
                  disabled={items.length === 0}
                  className="w-full flex items-center justify-center px-6 py-4 border border-transparent rounded-2xl shadow-lg text-base font-bold text-white bg-[#4A2C21] hover:bg-[#3D261E] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirmar pedido
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
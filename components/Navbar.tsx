
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onCartToggle: () => void;
  cartCount: number;
  activeTab: 'cookie' | 'brownie';
  onTabChange: (tab: 'cookie' | 'brownie') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCartToggle, cartCount, activeTab, onTabChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const hour = now.getHours();
      setIsOpen(hour >= 10 && hour < 22);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#e9dac7]/90 backdrop-blur-md border-b border-[#3D261E]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24 gap-4">
          
          {/* Logo & Hours Section */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <div 
              className="flex items-center gap-3 cursor-pointer group" 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >
              {/* Cookie icon scaled and centered with the 'D' */}
              <img 
                src="https://i.imgur.com/oOetTi8.png" 
                alt="Cookie Icon" 
                className="h-16 w-16 sm:h-24 sm:w-24 object-contain"
              />
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#3D261E] tracking-tight whitespace-nowrap">
                Doceline<span className="text-[#B16E41]">.</span>
              </span>
            </div>

            {/* Operating Hours Text - Right of the brand */}
            <div className="hidden lg:flex items-center border-l border-[#3D261E]/10 pl-4 py-1">
              <p className="text-[11px] sm:text-xs font-semibold text-[#3D261E]/60 leading-tight">
                Horário de funcionamento:<br />
                <span className="text-[#3D261E]">10h às 22h todos os dias</span>
              </p>
            </div>
          </div>
          
          {/* Main Selector - Centered */}
          <div className="flex-grow flex justify-center px-2">
            <div className="flex items-center bg-[#4A2C21]/5 p-1 rounded-full border border-[#4A2C21]/5 shadow-inner">
              <button 
                onClick={() => onTabChange('cookie')}
                className={`px-4 sm:px-8 py-2 rounded-full text-[11px] sm:text-sm font-bold transition-all duration-300 ${activeTab === 'cookie' ? 'text-white bg-[#3D261E] shadow-lg' : 'text-[#3D261E]/60 hover:text-[#3D261E]'}`}
              >
                Cookies
              </button>
              <button 
                onClick={() => onTabChange('brownie')}
                className={`px-4 sm:px-8 py-2 rounded-full text-[11px] sm:text-sm font-bold transition-all duration-300 ${activeTab === 'brownie' ? 'text-white bg-[#3D261E] shadow-lg' : 'text-[#3D261E]/60 hover:text-[#3D261E]'}`}
              >
                Brownies
              </button>
            </div>
          </div>

          {/* Cart & Status Section */}
          <div className="flex justify-end items-center gap-3 sm:gap-4 flex-shrink-0">
             {/* Status Badge */}
             <div className="hidden xs:flex items-center gap-2 px-2.5 py-1 bg-white/30 rounded-full border border-[#4A2C21]/5">
              <span className={`relative flex h-1.5 w-1.5`}>
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isOpen ? 'bg-green-400' : 'bg-amber-400'} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${isOpen ? 'bg-green-500' : 'bg-amber-500'}`}></span>
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#3D261E]/50">
                {isOpen ? 'Aberto' : 'Fechado'}
              </span>
            </div>

            <button 
              onClick={onCartToggle}
              className="relative p-2 text-[#3D261E] hover:scale-110 transition-transform"
              aria-label="Carrinho"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-[#B16E41] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-[#e9dac7]">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

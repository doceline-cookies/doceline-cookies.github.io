
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onCartToggle: () => void;
  cartCount: number;
  activeTab: 'cookie' | 'brownie';
  onTabChange: (tab: 'cookie' | 'brownie') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCartToggle, cartCount, activeTab, onTabChange }: NavbarProps) => {
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
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24 gap-2">
          
          {/* Logo & Hours Section */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <div 
              className="flex items-center gap-2 sm:gap-3 cursor-pointer group" 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >
              {/* Cookie icon scaled and centered with the 'D' */}
              <img 
                src="/assets/cookie-icon.png" 
                alt="Cookie Icon" 
                className="h-12 w-12 sm:h-16 sm:w-16 lg:h-24 lg:w-24 object-contain"
              />
              <span className="text-lg sm:text-2xl lg:text-3xl font-serif font-bold text-[#3D261E] tracking-tight whitespace-nowrap">
                Doceline<span className="text-[#B16E41]">.</span>
              </span>
            </div>

            {/* Operating Hours Text - Right of brand */}
            <div className="hidden md:flex items-center border-l border-[#3D261E]/10 pl-2 sm:pl-4 py-1">
              <p className="text-[10px] sm:text-xs font-semibold text-[#3D261E]/60 leading-tight">
                Horário:<br />
                <span className="text-[#3D261E]">10h-22h</span>
              </p>
            </div>
          </div>
          
          {/* Main Selector - Centered */}
          <div className="flex-grow flex justify-center px-1 sm:px-2">
            <div className="flex items-center bg-[#4A2C21]/5 p-0.5 sm:p-1 rounded-full border border-[#4A2C21]/5 shadow-inner">
              <button 
                onClick={() => onTabChange('cookie')}
                className={`px-2 sm:px-4 lg:px-8 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs lg:text-sm font-bold transition-all duration-300 ${activeTab === 'cookie' ? 'text-white bg-[#3D261E] shadow-lg' : 'text-[#3D261E]/60 hover:text-[#3D261E]'}`}
              >
                <span className="hidden sm:inline">Cookies</span>
                <span className="sm:hidden">
                  <img src="/assets/cookie-icon.png" alt="Cookie" className="w-4 h-4 object-contain" />
                </span>
              </button>
              <button 
                onClick={() => onTabChange('brownie')}
                className={`px-2 sm:px-4 lg:px-8 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs lg:text-sm font-bold transition-all duration-300 ${activeTab === 'brownie' ? 'text-white bg-[#3D261E] shadow-lg' : 'text-[#3D261E]/60 hover:text-[#3D261E]'}`}
              >
                <span className="hidden sm:inline">Brownies</span>
                <span className="sm:hidden">
                  <img src="/assets/brownie-icon.png" alt="Brownie" className="w-4 h-4 object-contain" />
                </span>
              </button>
            </div>
          </div>

          {/* Cart & Status Section */}
          <div className="flex justify-end items-center gap-2 sm:gap-3 lg:gap-4 flex-shrink-0">
             {/* Status Badge */}
             <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 bg-white/30 rounded-full border border-[#4A2C21]/5">
              <span className={`relative flex h-1 w-1`}>
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isOpen ? 'bg-green-400' : 'bg-amber-400'} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-1 w-1 ${isOpen ? 'bg-green-500' : 'bg-amber-500'}`}></span>
              </span>
              <span className="text-[8px] font-bold uppercase tracking-wider text-[#3D261E]/50">
                {isOpen ? 'Aberto' : 'Fechado'}
              </span>
            </div>

            <button 
              onClick={onCartToggle}
              className="relative p-1.5 sm:p-2 text-[#3D261E] hover:scale-110 transition-transform"
              aria-label="Carrinho"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-[#B16E41] text-white text-[8px] font-bold px-1 py-0.5 rounded-full ring-2 ring-[#e9dac7]">
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

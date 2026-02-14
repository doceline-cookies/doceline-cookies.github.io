
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import WhatsAppButton from './components/WhatsAppButton';
import { PRODUCTS } from './constants';
import { Product, CartItem } from './types';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeMainTab, setActiveMainTab] = useState<'cookie' | 'brownie'>('cookie');
  const [subFilter, setSubFilter] = useState<'all' | 'classico' | 'recheado'>('all');

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const filteredProducts = PRODUCTS
    .filter(p => p.type === activeMainTab)
    .filter(p => subFilter === 'all' || p.category === subFilter);

  return (
    <div className="min-h-screen bg-[#e9dac7]">
      <Navbar 
        onCartToggle={() => setIsCartOpen(!isCartOpen)} 
        cartCount={cartItems.reduce((a, b) => a + b.quantity, 0)}
        activeTab={activeMainTab}
        onTabChange={(tab) => {
          setActiveMainTab(tab);
          setSubFilter('all');
        }}
      />
      
      <main>
        {/* Products Section - Added top padding to compensate for Hero removal */}
        <section id="products" className="pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24 bg-[#e9dac7] min-h-[60vh]">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
            <div className="flex flex-col gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#4A2C21] capitalize">
                  Nossos {activeMainTab === 'cookie' ? 'Cookies' : 'Brownies'}
                </h2>
                <div className="h-1 w-16 sm:w-20 bg-[#B16E41] rounded-full"></div>
              </div>
              
              <div className="flex bg-[#4A2C21]/10 p-0.5 sm:p-1 rounded-xl sm:rounded-2xl shadow-inner border border-[#4A2C21]/5">
                <button 
                  onClick={() => setSubFilter('all')}
                  className={`px-3 sm:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all ${subFilter === 'all' ? 'bg-[#4A2C21] shadow-lg text-white' : 'text-[#4A2C21] hover:bg-white/20'}`}
                >
                  Todos
                </button>
                <button 
                  onClick={() => setSubFilter('classico')}
                  className={`px-3 sm:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all ${subFilter === 'classico' ? 'bg-[#4A2C21] shadow-lg text-white' : 'text-[#4A2C21] hover:bg-white/20'}`}
                >
                  Clássicos
                </button>
                <button 
                  onClick={() => setSubFilter('recheado')}
                  className={`px-3 sm:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all ${subFilter === 'recheado' ? 'bg-[#4A2C21] shadow-lg text-white' : 'text-[#4A2C21] hover:bg-white/20'}`}
                >
                  Recheados
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
              ))}
              {filteredProducts.length === 0 && (
                <div className="col-span-full py-12 sm:py-20 text-center">
                  <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🍪</div>
                  <p className="text-[#4A2C21] font-serif text-base sm:text-xl italic opacity-60 px-4">
                    Nenhum {activeMainTab} encontrado nesta categoria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#4A2C21] text-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
              <div className="col-span-1 md:col-span-2 space-y-4 sm:space-y-6">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#e9dac7]">
                  Doceline<span className="text-[#B16E41]">.</span>
                </span>
                <p className="text-stone-300 max-w-xs leading-relaxed opacity-80 text-sm sm:text-base">
                  Levando a melhor experiência de confeitaria artesanal até você, com ingredientes selecionados.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4 sm:mb-6 uppercase text-xs tracking-widest opacity-60">Menu</h4>
                <ul className="space-y-3 sm:space-y-4 text-sm text-stone-300">
                  <li><button onClick={() => setActiveMainTab('cookie')} className="hover:text-[#e9dac7] transition-colors">Cookies</button></li>
                  <li><button onClick={() => setActiveMainTab('brownie')} className="hover:text-[#e9dac7] transition-colors">Brownies</button></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </main>

      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems} 
        onUpdateQuantity={updateQuantity} 
      />
      
      <WhatsAppButton />
    </div>
  );
};

export default App;

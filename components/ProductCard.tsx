
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-[#FAF3E0] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#F1E5D1] flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-[#FDF4E3]">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-[#B16E41] text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wider">
            {product.category === 'classico' ? 'Clássico' : 'Recheado'}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-[#4A2C21] group-hover:text-[#B16E41] transition-colors">
            {product.name}
          </h3>
          <span className="bg-[#B16E41]/10 text-[#B16E41] px-3 py-1 rounded-lg font-bold text-sm">
            R$ {product.price.toFixed(0)}
          </span>
        </div>
        
        <p className="text-[#6B4E42] text-sm leading-relaxed mb-6 flex-grow">
          {product.description}
        </p>

        <button 
          onClick={() => onAddToCart(product)}
          className="w-full bg-[#4A2C21] hover:bg-[#B16E41] text-white font-bold py-3.5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md"
        >
          <span>Adicionar ao carrinho</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

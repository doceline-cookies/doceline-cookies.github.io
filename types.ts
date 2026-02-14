
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'classico' | 'recheado';
  type: 'cookie' | 'brownie';
  weight?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

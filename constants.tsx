import { Product } from './types';

export const PRODUCTS: Product[] = [
  // Cookies Clássicos
  {
    id: 'c1',
    name: 'Tradicional',
    description: 'Massa feita com essência de baunilha e gotas de chocolate nobre ao leite.',
    price: 10.00,
    image: 'https://i.pinimg.com/736x/ca/a0/dd/caa0dd768b12090e31cd91fb117b68ab.jpg',
    category: 'classico',
    type: 'cookie',
    weight: '120g'
  },
  {
    id: 'c2',
    name: 'Chocolate',
    description: 'Massa feita com cacau 50%, essência de baunilha e gotas de chocolate nobre meio amargo.',
    price: 10.00,
    image: 'https://i.pinimg.com/736x/7e/a7/27/7ea727718a7d48c64032049632d4a140.jpg',
    category: 'classico',
    type: 'cookie',
    weight: '120g'
  },
  {
    id: 'c3',
    name: 'Red Velvet',
    description: 'Massa feita com cacau 50%, essência de baunilha, corante e gotas de chocolate nobre branco.',
    price: 12.00,
    image: 'https://i.pinimg.com/736x/e2/f8/ad/e2f8ad0bdf9c5f7b72aefd5848121056.jpg',
    category: 'classico',
    type: 'cookie',
    weight: '120g'
  },
  {
    id: 'c4',
    name: 'Dark',
    description: 'Massa feita com cacau black, essência de baunilha e gotas de chocolate nobre branco e meio amargo.',
    price: 12.00,
    image: 'https://i.pinimg.com/736x/4d/4e/b7/4d4eb7022a74bc923ae7b3a2994141f8.jpg',
    category: 'classico',
    type: 'cookie',
    weight: '120g'
  },
  // Cookies Recheados
  {
    id: 'r1',
    name: 'Nutella',
    description: 'Massa tradicional com gotas de chocolate nobre ao leite recheado com Nutella!',
    price: 15.00,
    image: 'https://i.pinimg.com/736x/7c/70/c5/7c70c5f2cd9951df9a6474f5606e3663.jpg',
    category: 'recheado',
    type: 'cookie',
    weight: '120g'
  },
  {
    id: 'r2',
    name: 'Ovomaltine',
    description: 'Massa de chocolate com gotas de chocolate meio amargo, recheado com creme ovomaltine e finalizado com ovomaltine rocks!',
    price: 15.00,
    image: 'https://i.pinimg.com/736x/82/72/bf/8272bf151d77feac177c59119b44d6ac.jpg',
    category: 'recheado',
    type: 'cookie',
    weight: '120g'
  },
  {
    id: 'r3',
    name: 'Red Velvet Recheado',
    description: 'Massa feita com cacau 50%, essência de baunilha, corante e gotas de chocolate nobre branco e recheado com ganache de cream cheese.',
    price: 15.00,
    image: 'https://i.pinimg.com/736x/82/5f/14/825f142cddda914a2ba08f981727bf2d.jpg',
    category: 'recheado',
    type: 'cookie',
    weight: '120g'
  },
  {
    id: 'r4',
    name: 'Alpino',
    description: 'Massa de cacau black com gotas de chocolate nobre branco e meio amargo, recheado com alpino e finalizado com mais alpino!',
    price: 18.00,
    image: 'https://i.pinimg.com/736x/d8/16/7c/d8167cb6aea311a53a294c6627f8089b.jpg',
    category: 'recheado',
    type: 'cookie',
    weight: '120g'
  },
  {
    id: 'r5',
    name: 'Kinder Bueno',
    description: 'Massa tradicional com gotas de chocolate nobre branco e ao leite, recheado com nosso creme kinder bueno e finalizado com kinder no topo',
    price: 18.00,
    image: '/assets/kinder-bueno-cookie.jpeg',
    category: 'recheado',
    type: 'cookie',
    weight: '120g'
  },
  // Brownies
  {
    id: 'b-trad',
    name: 'Brownie Tradicional',
    description: 'Massa densa, molhadinha e super chocolatuda. Feito com chocolate nobre, cacau 50% e manteiga.',
    price: 8.00,
    image: 'https://i.pinimg.com/736x/75/27/61/752761d4eb812d5370ce465729eff0bb.jpg',
    category: 'classico',
    type: 'brownie',
    weight: 'Pedaço 6x6'
  },
  {
    id: 'b-ovo',
    name: 'Brownie Ovomaltine',
    description: 'Brownie tradicional com recheio de creme ovomaltine!',
    price: 12.00,
    image: 'https://i.pinimg.com/736x/b7/28/70/b72870c054574df4d5b72f599b2407d3.jpg',
    category: 'recheado',
    type: 'brownie',
    weight: 'Pedaço 6x6'
  },
  {
    id: 'b-nut',
    name: 'Brownie Nutella',
description: 'Brownie tradicional com recheio de nutella!',
    price: 12.00,
    image: 'https://i.pinimg.com/736x/e1/b4/0d/e1b40da8d96c12359ae8ce6768d1b34c.jpg',
    category: 'recheado',
    type: 'brownie',
    weight: 'Pedaço 6x6'
  }
];

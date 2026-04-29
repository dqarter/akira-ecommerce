import React from 'react';
import { useCart } from '../context/CartContext';

export const ItemCard = ({ id, title, price, image, category }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, title, price, image, category });
  };

  return (
    <div className='w-full h-400px bg-white rounded-lg shadow-lg flex flex-col p-4 border border-gray-100 hover:scale-105 transition-transform duration-300'>
      
      <div className='h-48 w-full flex justify-center items-center mb-4'>
        <img src={image} alt={title} className='max-h-full object-contain' />
      </div>

      <div className='flex flex-col grow'>
        <span className='text-xs text-gray-400 uppercase tracking-widest'>{category}</span>
        
        <h2 className='text-base font-bold text-gray-800 mt-1 mb-2 line-clamp-2' title={title}>
          {title}
        </h2>
        
        <div className='text-xl font-extrabold text-violet-900 mt-auto'>
          ${price}
        </div>
      </div>

      <button 
        onClick={handleAddToCart}
        className='w-full mt-4 bg-violet-900 text-white py-2 rounded-full font-bold hover:bg-violet-800 transition-colors shadow-md'
      >
        Sepete Ekle
      </button>
    </div>
  );
};
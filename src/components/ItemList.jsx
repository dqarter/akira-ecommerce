import React, { useState, useEffect } from 'react';
import { ItemCard } from './ItemCard';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("API Hatası:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-20">
        <h2 className="text-2xl font-bold text-violet-900 animate-pulse">Ürünler Yükleniyor...</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-5 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <ItemCard 
            key={item.id}
            id={item.id} 
            title={item.title} 
            price={item.price} 
            image={item.image} 
            category={item.category} 
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
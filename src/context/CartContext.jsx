/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  
  // Yeni: Tek bir mesaj yerine, bildirimleri bir dizi (array) olarak tutuyoruz
  const [toasts, setToasts] = useState([]); 

  // Yeni: Bildirim ekleme ve silme mantığı
  const showToast = (message) => {
    // Her bildirime benzersiz bir kimlik (ID) veriyoruz ki React hangisini sileceğini bilsin
    const id = Date.now() + Math.random(); 
    
    // Yeni bildirimi mevcut dizinin sonuna ekle
    setToasts((prevToasts) => [...prevToasts, { id, message }]);

    // 3 saniye sonra SADECE bu id'ye sahip olan bildirimi diziden çıkar
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter(toast => toast.id !== id));
    }, 3000);
  };

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, amount: item.amount + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, amount: 1 }]);
    }
    
    // Kuyruğa yeni mesajı gönder
    showToast(`${product.title} sepete eklendi!`);
  };

  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));
  
  const increaseAmount = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, amount: item.amount + 1 } : item));
  };

  const decreaseAmount = (id) => {
    const item = cart.find(i => i.id === id);
    if (item.amount === 1) removeFromCart(id);
    else setCart(cart.map(i => i.id === id ? { ...i, amount: i.amount - 1 } : i));
  };

  return (
    <CartContext.Provider value={{ 
      cart, addToCart, removeFromCart, increaseAmount, decreaseAmount,
      isOpen, setIsOpen,
      toasts // Yeni: Diziyi dışarı aktarıyoruz
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
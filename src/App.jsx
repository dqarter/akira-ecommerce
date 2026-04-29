import React from 'react';
import MainHeader from './components/MainHeader';
import ItemList from './components/ItemList';
import CartSidebar from './components/CartSidebar';
import Toast from './components/Toast'; // Bildirimi içeri aktardık
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="py-3 font-family-segoe bg-gray-300 w-screen mx-auto min-h-screen flex flex-col antialiased items-center justify-start">
        <MainHeader />
        <ItemList />
        <CartSidebar />
        <Toast /> {/* Sayfanın herhangi bir yerine ekleyebiliriz, fixed class'ı onu sağ alta sabitleyecek */}
      </div>
    </CartProvider>
  );
}

export default App;
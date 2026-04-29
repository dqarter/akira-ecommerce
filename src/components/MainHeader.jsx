import React from "react";
import logo from "../assets/logo.png";
import { useCart } from "../context/CartContext";

const MainHeader = () => {
  const { cart, setIsOpen } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.amount, 0);

  return (
    <div id="main" className="flex w-full mx-auto flex-col items-center justify-start max-w-7xl px-4 mt-4">
      <div id="header" className="flex h-30 w-full items-center bg-violet-900 text-white justify-center rounded-full shadow-2xl shadow-slate-950">
        <div id="main-nav" className="flex items-center justify-between w-full px-5 py-2">
          
          <div id="logo">
            <img src={logo} alt="Logo" className="h-20 w-20 object-contain rounded-full shadow-2xl shadow-slate-950" />
          </div>
          
          <div id="nav" className="flex">
            <ul className="flex space-x-4">
              <li className="hover:scale-105 shadow-20 shadow-slate-950 text-black font-bold cursor-pointer bg-white rounded-full px-5 py-3 text-sm sm:text-base">
                Anasayfa
              </li>
              
              <li 
                onClick={() => setIsOpen(true)}
                className="relative hover:scale-105 shadow-20 shadow-slate-950 text-black font-bold cursor-pointer bg-white rounded-full px-5 py-3 text-sm sm:text-base"
              >
                Sepetim
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full animate-bounce shadow-md">
                    {totalItems}
                  </span>
                )}
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MainHeader;
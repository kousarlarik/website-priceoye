import React, { createContext, useContext, useState } from "react";

const CheckoutContext = createContext();

export const useCheckoutContext = () => useContext(CheckoutContext);

export const CheckoutProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const setCheckoutData = (data) => {
    // Logic to set checkout data
  };

  return (
    <CheckoutContext.Provider value={{ cartItems, addToCart, setCheckoutData }}>
      {children}
    </CheckoutContext.Provider>
  );
};

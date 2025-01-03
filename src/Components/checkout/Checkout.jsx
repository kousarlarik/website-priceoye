import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../../Components/Header/Header"; // Correct the import path for Header component

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(cartItems);
  }, []);

  return (
    <>
      <Header /> {/* Add the Header component */}
      <Box className="min-h-screen bg-gray-50">
        <Box className="container mx-auto px-4 py-8">
          <Box className="bg-white p-10 rounded-xl shadow-sm">
            <Typography variant="h4">Checkout</Typography>
            {/* ...existing code... */}
          </Box>
          {/* Cart Items Box */}
          <Box className="bg-white p-4 rounded-xl shadow-sm mt-8">
            <Typography variant="h6">Cart Items</Typography>
            {cartItems.length === 0 ? (
              <Typography>No items in cart.</Typography>
            ) : (
              cartItems.map((item, index) => (
                <Box key={index} className="flex items-center gap-4 mt-4">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                  <Typography>{item.title}</Typography>
                </Box>
              ))
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Checkout;

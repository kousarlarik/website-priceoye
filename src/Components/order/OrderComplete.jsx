import React from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import { useCheckoutContext } from "../context/CheckoutContext";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const OrderComplete = () => {
  const { checkoutData } = useCheckoutContext();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <Box className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <Typography variant="h4" className="mb-4">
          No product added to cart.
        </Typography>
        <Button variant="contained" onClick={() => navigate("/")}>
          Go to Home
        </Button>
      </Box>
    );
  }

  return (
    <Box className="min-h-screen bg-gray-50 py-8">
      <Box className="container mx-auto px-4">
        <Paper className="max-w-4xl mx-auto p-6">
          <Box className="mb-6">
            <Typography variant="h4" className="mb-2">
              Order Receipt
            </Typography>
            <Box className="bg-blue-500 text-white p-4 rounded-lg">
              <Typography variant="h6">
                Order Number 1553473
              </Typography>
            </Box>
          </Box>

          <Box className="grid md:grid-cols-3 gap-8">
            <Box className="md:col-span-2 space-y-6">
              <Box>
                <Typography variant="h6" className="mb-2">
                  Contact Details
                </Typography>
                <Box className="grid grid-cols-3 gap-4">
                  <Box>
                    <Typography color="textSecondary">Name</Typography>
                    <Typography>{checkoutData.fullName}</Typography>
                  </Box>
                  <Box>
                    <Typography color="textSecondary">Email</Typography>
                    <Typography>{checkoutData.email}</Typography>
                  </Box>
                  <Box>
                    <Typography color="textSecondary">Phone</Typography>
                    <Typography>{checkoutData.mobileNumber}</Typography>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Typography variant="h6" className="mb-2">
                  Delivery Information
                </Typography>
                <Box className="space-y-2">
                  <Box>
                    <Typography color="textSecondary">Address</Typography>
                    <Typography>{checkoutData.address}</Typography>
                  </Box>
                  <Box className="grid grid-cols-3 gap-4">
                    <Box>
                      <Typography color="textSecondary">Province</Typography>
                      <Typography>{checkoutData.province}</Typography>
                    </Box>
                    <Box>
                      <Typography color="textSecondary">City</Typography>
                      <Typography>{checkoutData.city}</Typography>
                    </Box>
                    <Box>
                      <Typography color="textSecondary">Area</Typography>
                      <Typography>{checkoutData.city}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Typography variant="h6" className="mb-2">
                  Delivery Type
                </Typography>
                <Typography>Standard Shipping</Typography>
              </Box>
            </Box>

            <Box className="bg-gray-50 p-4 rounded-lg">
              <Typography variant="h6" className="mb-4">
                Order Summary
              </Typography>
              <Box className="space-y-4">
                {cartItems.map((item, index) => (
                  <Box key={index} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 rounded-lg"
                    />
                    <Box>
                      <Typography variant="subtitle1">{item.title}</Typography>
                      <Typography color="textSecondary">Color: {item.color}</Typography>
                      <Typography color="textSecondary">
                        {item.storage} - {item.ram} RAM
                      </Typography>
                    </Box>
                  </Box>
                ))}
                <Box className="space-y-2 border-t pt-4">
                  <Box className="flex justify-between">
                    <Typography>Market Price</Typography>
                    <Typography className="line-through">Rs {cartItems.reduce((total, item) => total + item.originalPrice, 0)}</Typography>
                  </Box>
                  <Box className="flex justify-between">
                    <Typography>Sale Price</Typography>
                    <Typography>Rs {cartItems.reduce((total, item) => total + item.currentPrice, 0)}</Typography>
                  </Box>
                  <Box className="flex justify-between text-green-600">
                    <Typography>Delivery Charges</Typography>
                    <Typography>Rs 0</Typography>
                  </Box>
                  <Box className="flex justify-between text-green-600">
                    <Typography>You're saving</Typography>
                    <Typography>Rs {cartItems.reduce((total, item) => total + (item.originalPrice - item.currentPrice), 0)} on this order</Typography>
                  </Box>
                  <Box className="flex justify-between font-medium pt-2 border-t">
                    <Typography>Total Price</Typography>
                    <Typography>Rs {cartItems.reduce((total, item) => total + item.currentPrice, 0)}</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className="mt-8 flex justify-end">
            <Button
              variant="outlined"
              startIcon={<PrintIcon />}
              className="!normal-case"
            >
              Print Receipt
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default OrderComplete;
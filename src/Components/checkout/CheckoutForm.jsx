import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Step,
  Stepper,
  StepLabel,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems, removeFromCart } from "../../redux/cartSlice"; // Correct import path

const steps = ["OTP Verification", "Contact Info", "Delivery", "Payment"];

const CheckoutForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    mobileNumber: "",
    fullName: "",
    email: "",
    province: "",
    city: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add products to the cart.");
      return;
    }
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      // Logic to set checkout data and track order
      console.log("Order tracked:", { ...formData, cartItems });
      navigate("/order-complete");
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Box className="min-h-screen bg-gray-50 py-8">
      <Box className="container mx-auto px-4 flex">
        <Box className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6 flex-1">
          <Stepper activeStep={activeStep} className="mb-8">
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel
                  StepIconComponent={({ active, completed }) =>
                    completed || active ? (
                      <CheckCircleIcon className="text-blue-500" />
                    ) : (
                      <Box className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        {steps.indexOf(label) + 1}
                      </Box>
                    )
                  }
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          <form onSubmit={handleSubmit} className="space-y-6">
            <TextField
              fullWidth
              label="Mobile Number"
              variant="outlined"
              required
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              required
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Box className="grid grid-cols-2 gap-4">
              <TextField
                fullWidth
                label="Province"
                variant="outlined"
                required
                name="province"
                value={formData.province}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="City"
                variant="outlined"
                required
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </Box>
            <TextField
              fullWidth
              label="Address"
              variant="outlined"
              required
              multiline
              rows={2}
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="!bg-blue-500 !mt-4"
            >
              {activeStep === steps.length - 1 ? "Complete Order" : "Continue"}
            </Button>
          </form>
        </Box>
        <Box className="w-80 mx-auto bg-white rounded-xl shadow-sm p-6 ml-4"> {/* Set width */}
          <Typography variant="h6" className="mb-4">Cart Summary</Typography>
          <Box className="space-y-4">
            {cartItems.map((item, index) => (
              <Box key={index} className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                <Typography>{item.title} - Rs {item.currentPrice}</Typography>
                <IconButton onClick={() => handleRemove(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutForm;
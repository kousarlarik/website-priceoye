import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import earbudData from "../../../data/earbudData";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice"; // Correct import path

const EarbudDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = earbudData.find((item) => item.id.toString() === id);
  const [selectedImage, setSelectedImage] = useState(product?.image);
  const [showAddToCart, setShowAddToCart] = useState(true);

  if (!product) {
    return <Typography>Product not found.</Typography>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    navigate("/checkout");
  };

  const handleCompare = () => {
    // Compare logic here
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowAddToCart(false);
  };

  return (
    <Box className="min-h-screen bg-gray-50">
      <Box className="container mx-auto px-4 py-8">
        <Box className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded-xl shadow-sm">
          <Box className="space-y-4 p-4"> {/* Add padding */}
            <Box className="relative aspect-square rounded-xl overflow-hidden border border-gray-300 shadow-lg w-[450px] h-[450px] mx-auto p-4"> {/* Increase width and height */}
              <img src={selectedImage} alt={product.title} className="w-full h-full object-contain" />
            </Box>
          </Box>
          <Box className="space-y-6 p-4"> {/* Add padding */}
            <Typography variant="h4">{product.title}</Typography>
            <Box className="flex items-center gap-2">
              <FontAwesomeIcon className="text-[#FFC61C]" icon={faStar} />
              <Typography>{product.rating}</Typography>
              <Typography className="text-sm ml-2">{product.reviews} Reviews</Typography>
            </Box>
            <Box>
              <Typography variant="h5">Rs {product.currentPrice}</Typography>
              <Typography className="text-gray-500 line-through">Rs {product.originalPrice}</Typography>
            </Box>
            <Typography>Discount: {product.discountPercentage}% off</Typography>
            <Box className="flex gap-4">
              <Box className="relative aspect-square rounded-xl overflow-hidden border border-gray-300 shadow-lg w-24 h-24 p-2" onClick={() => handleImageClick(product.image)}> {/* Add padding */}
                <img src={product.image} alt={product.title} className="w-full h-full object-contain" />
              </Box>
              <Box className="relative aspect-square rounded-xl overflow-hidden border border-gray-300 shadow-lg w-24 h-24 p-2" onClick={() => handleImageClick(product.image)}> {/* Add padding */}
                <img src={product.image} alt={product.title} className="w-full h-full object-contain" />
              </Box>
            </Box>
            <Box className="flex gap-4">
              {showAddToCart && (
                <Button variant="contained" onClick={handleAddToCart} className="!bg-orange-500 !hover:bg-orange-600 w-40">
                  Add to Cart
                </Button>
              )}
              <Button variant="contained" onClick={handleCompare} className="!bg-blue-500 !hover:bg-blue-600 w-40">
                Compare
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EarbudDetail;
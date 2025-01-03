import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import earbudData from "../../../data/earbudData";
// Import addToCart function if it is defined in another file
// import { addToCart } from "../../../path/to/addToCart";

const EarbudDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = earbudData.find((item) => item.id.toString() === id);
  const [selectedImage, setSelectedImage] = useState(product?.image);
  const [showAddToCart, setShowAddToCart] = useState(true);

  if (!product) {
    return <Typography>Product not found.</Typography>;
  }

  const addToCart = (product) => {
    // Add to cart logic here
    console.log("Product added to cart:", product);
  };

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/checkout");
  };

  const handleCompare = () => {
    navigate("/compare");
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowAddToCart(false);
  };

  return (
    <Box className="min-h-screen bg-gray-50">
      <Box className="container mx-auto px-4 py-8">
        <Box className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded-xl shadow-sm">
          <Box className="space-y-4">
            <Box className="relative aspect-square rounded-xl overflow-hidden border border-gray-300 shadow-lg w-[340px] h-[340px] mx-auto">
              <img src={selectedImage} alt={product.title} className="w-full h-full object-contain" />
            </Box>
          </Box>
          <Box className="space-y-6">
            <Typography variant="h4">{product.title}</Typography>
            <Box className="flex items-center gap-2">
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} className="text-[#FFC61C]" icon={faStar} />
              ))}
              <Typography>{product.rating}</Typography>
              <Typography className="text-sm ml-2">{product.reviews} Reviews</Typography>
            </Box>
            <Box>
              <Typography variant="h5">Rs {product.currentPrice}</Typography>
              <Typography className="text-gray-500 line-through">Rs {product.originalPrice}</Typography>
            </Box>
            <Typography>Discount: {product.discountPercentage}% off</Typography>
            <Box className="flex gap-4">
              <Box className="relative aspect-square rounded-xl overflow-hidden border border-gray-300 shadow-lg w-20 h-20" onClick={() => handleImageClick(product.image)}>
                <img src={product.image} alt={product.title} className="w-full h-full object-contain" />
              </Box>
              <Box className="relative aspect-square rounded-xl overflow-hidden border border-gray-300 shadow-lg w-20 h-20" onClick={() => handleImageClick(product.image)}>
                <img src={product.image} alt={product.title} className="w-full h-full object-contain" />
              </Box>
            </Box>
            {showAddToCart && (
              <Button variant="contained" onClick={handleAddToCart} className="!bg-orange-500 !hover:bg-orange-600 w-40">
                Add to Cart
              </Button>
            )}
            <Box className="inline-block w-4" /> {/* Increase space */}
            <Button variant="contained" onClick={handleCompare} className="!bg-blue-500 !hover:bg-blue-600 w-40">
              Compare
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EarbudDetail;
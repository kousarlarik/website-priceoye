import React from 'react'
import Category from './category-bar/Category'
import HeroSection from './hero-section/Hero-Section'
import EarbudGallery from './earbud-gallery/EarbudGallery'
import Product from './product/Product'
import { Box } from '@mui/material'
import BestSellers from './best-sellers/BestSellers'

import ProductSection from './productSectionT/ProductSection'
import LatestMobiles from './LatestMobiles/LatestMobiles'
import ShopByPrice from './ShopbyPrice/ShopbyPrice'
import CustomerReviews from './CustomerReviews/CustomerReview'
import ReasonToBy from './ReasonToBuy/ReasonToBuy'
import LatestTrimmers from './Latest Trimmers/LatestTrimmers'
import BrandLogo from './brandLogo/BrandLogo'
import Footer from './Footer/Footer'


const Home = () => {
  return (
    <>
    <Box className="!bg-slate-100">
    
      <Category/>
      <HeroSection/>
      <EarbudGallery/>
      <Product/>
      <BestSellers/>
    </Box>
   
    <ProductSection/>
    <LatestMobiles/>
    <ShopByPrice/>
    <CustomerReviews/>
    <ReasonToBy/>
    <LatestTrimmers/>
    <BrandLogo/>
    <Footer/>
   </>
  )
}

export default Home
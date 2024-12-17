import React from "react";
import mobiles from "../../asest/mobiles.svg";
import earbuds from "../../asest/wireless-earbuds.svg";
import watches from "../../asest/smart-watches.svg";
import trimmer from "../../asest/trimmers-shaver.svg";
import powerbanks from "../../asest/power-banks (1).svg";
import chargers from "../../asest/mobile-chargers (2).svg";
import speakers from "../../asest/bluetooth-speakers.svg";
import tablets from "../../asest/tablets.svg";
import slide1Image from "../../asest/second hero2.jpg";
import slide2Image from "../../asest/third hero3.jpg";
import slide3Image from "../../asest/fourth4 hero.jpg";
import slide4Image from "../../asest/fifth5hero.jpg";
import slide5Image from "../../asest/sixth6hero.jpg";
import slide6Image from "../../asest/7th hero.jpg";
import slide7Image from "../../asest/8th hero.jpg";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import Navigation styles
import { Navigation, Autoplay } from "swiper/modules";
import saleBanner from "../../asest/part 2hero.gif"; // Correct import path


// Category Section Component
const CategorySection = () => {
  const categories = [
    { name: "Mobiles", image: mobiles },
    { name: "Wireless Earbuds", image: earbuds },
    { name: "Smart Watches", image: watches },
    { name: "Trimmers Shaver", image: trimmer },
    { name: "Power Banks", image: powerbanks },
    { name: "Wall Chargers", image: chargers },
    { name: "Bluetooth Speakers", image: speakers },
    { name: "Tablets", image: tablets },
  ];

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex items-center px-4 py-2 bg-white shadow-md flex-wrap justify-center w-full">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 mb-1 group"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-12 h-12 object-contain mb-1"
            />
            <p className="text-center text-sm font-medium">{category.name}</p>
            <div className="w-full mt-1 h-0.5 bg-transparent group-hover:bg-blue-500 transition-all"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <div className="hero-section bg-cover bg-center h-[500px] relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="swiper-slide-content relative">
            <img
              src={slide1Image}
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full  bg-opacity-50 flex flex-col justify-center items-center">
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content relative">
            <img
              src={slide2Image}
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 flex flex-col justify-center items-center">
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content relative">
            <img
              src={slide3Image}
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 flex flex-col justify-center items-center">
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content relative">
            <img
              src={slide4Image}
              alt="Slide 4"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 flex flex-col justify-center items-center">
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content relative">
            <img
              src={slide5Image}
              alt="Slide 5"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 flex flex-col justify-center items-center">
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content relative">
            <img
              src={slide6Image}
              alt="Slide 6"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 flex flex-col justify-center items-center">
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content relative">
            <img
              src={slide7Image}
              alt="Slide 7"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 flex flex-col justify-center items-center">
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    {/* Image below the Swiper */}
    <div className="absolute left-0 w-full mt-7"> {/* Adjust top value as needed */}
  <img
    src={saleBanner} // Using imported image
    alt="Below Swiper"
    className="w-full h-full object-cover" // Full width, full height, and covers the container
  />
</div>
 {/* New Section Below the Sale Banner */}
 <div className="mt-40 bg-gray-100 py-8 ">
  <div className="container mx-auto text-center mt-40">
    <h2 className="text-3xl font-semibold mb-4">Featured Products</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {/* Product 1 */}
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <img
          src={mobiles} // You can add an image for each product
          alt="Mobiles"
          className="w-full h-25  object-cover "
        />
        <p className="text-lg font-medium">Redmi Buds 6 Active</p>
        <p className="text-gray-500 text-sm">Wireless Earbuds</p>
      </div>
      {/* Repeat similar divs for other products */}
    </div>
  </div>
</div>
    </div>
  );
};
export { HeroSection, CategorySection };
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const CustomerReviews = () => {
  const reviews = [
    {
      initials: "MS",
      name: "M. Siddiq",
      verified: true,
      date: "21 December 2024",
      rating: 5,
      comment: "Everything is fine. Except my other product experience....",
    },
    {
      initials: "MT",
      name: "Muhammad Tau...",
      verified: true,
      date: "21 December 2024",
      rating: 5,
      comment:
        "Received original & new product thanks priceoye team 🤝 % satisfied",
    },
    {
      initials: "NA",
      name: "Noman Abid",
      verified: true,
      date: "21 December 2024",
      rating: 5,
      comment: "",
    },
    {
      initials: "HA",
      name: "Hasnain",
      verified: false,
      date: "21 December 2024",
      rating: 5,
      comment: "Best platform to online shop.",
    },
  ];

  const images = [
    "https://images.priceoye.pk/review/4664/1530499-1t473-270x270.jpg",
    "https://images.priceoye.pk/review/9357/1536136-7kw1g-270x270.jpg",
    "https://images.priceoye.pk/review/6467/628020-ad9e5-270x270.jpg",
    "https://images.priceoye.pk/review/7710/1529658-uk095-270x270.jpg",
    "https://images.priceoye.pk/review/8700/1535017-17l3u-270x270.jpg",
  ];

  return (
    <div className="py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">Customer Reviews</h2>
        <p className="text-gray-600 mb-6">
          What our Customers say about Priceoye.pk
        </p>

        
        <Swiper
          modules={[Pagination]}
          spaceBetween={15}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
          pagination={{ clickable: true }}
          className="mb-6"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Customer ${index + 1}`}
                className="rounded-lg w-3/4 h-32 object-cover border border-gray-300 shadow-sm"
              />
            </SwiperSlide>
          ))}
        </Swiper>

       
        <Swiper
          modules={[Pagination]}
          spaceBetween={15}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          pagination={{ clickable: true }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col justify-between"
                style={{ width: "400px", height: "200px" }}
              >
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-lg font-bold">
                    {review.initials}
                    </div>
  <div className="flex-1">
    <h3 className="text-lg font-semibold">{review.name}</h3>
    <p className="text-gray-500 text-sm">{review.date}</p>
  </div>
  {review.verified && (
    <span className="text-green-500 text-sm font-medium ml-auto">
      ✔ Verified
    </span>
  )}
</div>


                {/* Rating */}
                <div className="mb-2 text-yellow-500 mt-4">
                  {"⭐".repeat(review.rating)}
                </div>

                {/* Comment */}
                <p className="text-gray-700 text-sm truncate">{review.comment || "No comments provided."}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerReviews;

import React from 'react';

const CustomerReviews = () => {
  const reviews = [
    {
      initials: 'MS',
      name: 'M. Siddiq',
      verified: true,
      date: '21 December 2024',
      rating: 5,
      comment: 'Everything is fine. Except my other product experience....',
    },
    {
      initials: 'MT',
      name: 'Muhammad Tau...',
      verified: true,
      date: '21 December 2024',
      rating: 5,
      comment: 'Received original & new product thanks priceoye team 🤝 % satisfied',
    },
    {
      initials: 'NA',
      name: 'Noman Abid',
      verified: true,
      date: '21 December 2024',
      rating: 5,
      comment: '',
    },
    {
      initials: 'HA',
      name: 'Hasnain',
      verified: false,
      date: '21 December 2024',
      rating: 5,
      comment: 'Best platform to online shop.',
    },
  ];

  const images = [
    '/path/to/image1.jpg',
    '/path/to/image2.jpg',
    '/path/to/image3.jpg',
    '/path/to/image4.jpg',
    '/path/to/image5.jpg',
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">Customer Reviews</h2>
        <p className="text-gray-600 mb-6">What our Customers say about Priceoye.pk</p>

        {/* Rounded Images */}
        <div className="flex justify-center gap-4 mb-6">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Customer ${index + 1}`}
              className="rounded-full w-12 h-12 object-cover border border-gray-300 shadow-sm"
            />
          ))}
        </div>

        {/* Customer Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col items-start"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-lg font-bold">
                  {review.initials}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{review.name}</h3>
                  <p className="text-gray-500 text-sm">{review.date}</p>
                  {review.verified && (
                    <span className="text-green-500 text-sm font-medium">✔ Verified</span>
                  )}
                </div>
              </div>

              {/* Rating */}
              <div className="mb-2 text-yellow-500">
                {'⭐'.repeat(review.rating)}
              </div>

              {/* Comment */}
              <p className="text-gray-700 text-sm">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;

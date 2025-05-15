import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Star, ShoppingCartSimple, Eye } from "@phosphor-icons/react";

function ProductSlider({ title, products }) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Section Title */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          {title}
        </h2>
        <button className="text-blue-600 hover:underline text-sm font-medium">
          View All
        </button>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={16}
        breakpoints={{
          320: { slidesPerView: 1.5 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white rounded-xl shadow hover:shadow-md transition-all p-4 flex flex-col justify-between h-full">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain mb-4"
                />
                {product.discount > 0 && (
                  <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    {product.discount}% OFF
                  </span>
                )}
                {product.isNew && (
                  <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    NEW
                  </span>
                )}
              </div>

              <h3 className="text-sm font-medium text-gray-900 mb-1">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                <span className="text-lg font-bold text-gray-800">
                  ${product.price}
                </span>
              </p>

              {/* Rating */}
              <div className="flex items-center text-yellow-500 text-sm mb-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    weight={i < Math.round(product.rating) ? "fill" : "regular"}
                    className="w-4 h-4"
                  />
                ))}
                <span className="ml-2 text-gray-500 text-xs">
                  {product.rating.toFixed(1)}
                </span>
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-auto">
                <button className="flex-1 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-all">
                  <ShoppingCartSimple size={18} className="inline-block mr-1" />
                  Add
                </button>
                <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded hover:bg-gray-200 transition">
                  <Eye size={20} />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ProductSlider;

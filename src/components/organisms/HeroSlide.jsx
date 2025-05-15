import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import productsData from "../../resources/productsData";

function HeroSlide({ products = [] }) {
  const slides = products.slice(0, 4).map((product) => ({
    id: product.id,
    title: `Ofertas exclusivas en ${product.name}`,
    highlight: product.name.toUpperCase(),
    subtitle: `Hasta ${product.discount}% de descuento`,
    image: product.image,
  }));

  const bgColorStart = "#1e2c50";
  const bgColorEnd = "#233463";

  return (
    <div className="w-full max-w-7xl mx-auto bg-white px-2 sm:px-6 pt-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        className="rounded-xl overflow-hidden"
        style={{ height: "500px" }} // Altura fija para todos los slides
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="flex flex-col-reverse md:flex-row items-center justify-between text-white px-6 py-10 md:py-16 rounded-xl h-full"
              style={{
                background: `linear-gradient(to right, ${bgColorStart}, ${bgColorEnd})`,
              }}
            >
              {/* Text Section */}
              <div className="md:w-1/2 text-center md:text-left space-y-3">
                <h3 className="text-sm uppercase tracking-wider text-gray-300">
                  {slide.title}
                </h3>
                <h2 className="text-3xl sm:text-4xl font-extrabold">
                  {slide.highlight}
                </h2>
                <p className="text-lg">{slide.subtitle}</p>
              </div>

              {/* Image Section */}
              <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 h-[300px]">
                <img
                  src={slide.image}
                  alt={slide.highlight}
                  className="h-full max-h-full object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default function HeroSlideWrapper() {
  return <HeroSlide products={productsData} />;
}

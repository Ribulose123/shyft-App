import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../swiper1.css"

const ProductSection: React.FC = () => {
  const images = [
    "/img/Group 10048 (1).png",
    "/img/Group 10048.png",
    "/img/Group 10049 (1).png",
    "/img/Group 10049.png",
    "/img/Group 10050.png",
    "/img/Group 10050 (1).png",
  ];

  return (
    <section
      className="mt-10 flex flex-col justify-center items-center gap-6"
      id="Product"
    >
      
      <div className="flex flex-col items-center space-y-6 text-center">
        <p className="text-[#0968E8] border border-solid border-[#0968E8] bg-white p-1 rounded">
          Product Highlight
        </p>
        <h2 className="text-[30px] font-medium">
          The Smart Choice for Your Team
        </h2>
        <p className="text-[#ADADAD] text-[15px]">
          Everything you need to track your employee's work and boost productivity
        </p>
      </div>

     
      <div className="w-full">
        
        <div className="block md:hidden">
          <Swiper
            className="w-full text-white"
            spaceBetween={5}
            autoplay={{
              disableOnInteraction: false,
            }}
            slidesPerView={1.1}
            breakpoints={{
              200: {
                slidesPerView: 1.4,
              },
              370: {
                slidesPerView: 1.6,
              },
              500: {
                slidesPerView: 2.2,
              },
              660: {
                slidesPerView: 2.6,
              },
              850: {
                slidesPerView: 3.0,
              },
            }}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <div>
                  <img src={src} alt={`product ${index + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        
        <div className="hidden md:grid grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`product ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

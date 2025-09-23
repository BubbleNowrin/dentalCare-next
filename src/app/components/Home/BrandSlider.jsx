'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import './brandslider.css';

const BrandSlider = () => {
  const brands = [
    'logo-1.png',
    'logo-2.png',
    'logo-3.png',
    'logo-4.png',
    'logo-5.png',
    'logo-6.png'
  ];

  return (
    <div className="tp-brand__area tp-space-bottom">
      <div className="tp-brand__slider">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={6}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: false
          }}
          allowTouchMove={false}
          breakpoints={{
            480: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 35,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 40,
            },
          }}
          className="tp-brand__active"
        >
          {[...brands, ...brands].map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="tp-brand__logo">
                <Image
                  src={`/assets/img/brand/${logo}`}
                  alt={`Brand Logo ${index + 1}`}
                  width={150}
                  height={80}
                  style={{
                    objectFit: 'contain',
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default BrandSlider;
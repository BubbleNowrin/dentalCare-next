'use client';
import { useEffect } from 'react';
import Image from 'next/image';

const Ticker = () => {
  useEffect(() => {
    // Initialize Swiper when component mounts
    const initializeSwiper = () => {
      if (typeof window !== 'undefined' && window.Swiper) {
        const tickerSwiper = new window.Swiper('.tp-text__slider-active', {
          slidesPerView: 'auto',
          spaceBetween: 100,
          loop: true,
          autoplay: {
            delay: 0,
            disableOnInteraction: false,
          },
          speed: 3000,
          freeMode: true,
          centeredSlides: true,
          allowTouchMove: false,
        });
      }
    };

    // Check if Swiper is loaded, if not wait for it
    if (typeof window !== 'undefined') {
      if (window.Swiper) {
        initializeSwiper();
      } else {
        // Wait for Swiper to load
        const checkSwiper = setInterval(() => {
          if (window.Swiper) {
            clearInterval(checkSwiper);
            initializeSwiper();
          }
        }, 100);

        // Cleanup interval after 10 seconds
        setTimeout(() => clearInterval(checkSwiper), 10000);
      }
    }
  }, []);

  return (
    <>
      {/* Text slider (ticker) */}
      <div className="tp-text__slider-area fix tp-space-top tp-space-bottom">
        <div className="swiper tp-text__slider-active">
          <div className="swiper-wrapper slide-transtion">
            {[
              'DentalCare – Where Healthy Smiles Begin',
              'Modern Dentistry with a Gentle Touch',
              'Trusted by Families for Over 12 Years',
              'Advanced Technology, Personalized Care',
              'Comfortable Visits, Confident Smiles',
              'More Than Dentistry – We Care for You',
            ].map((t, idx) => (
              <div className="swiper-slide" key={idx}>
                <h3 className="tp-text__text">
                  {t}
                  
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Ticker;
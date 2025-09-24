'use client';
import { useEffect } from 'react';
import Image from 'next/image';

const Testimonial = () => {
  useEffect(() => {
    const initializeSwiper = () => {
      if (typeof window !== 'undefined' && window.Swiper) {
        new window.Swiper('.tp-testimonial-active', {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: '.testi-next',
            prevEl: '.testi-prev',
          },
          pagination: {
            el: '.tp-testi-pg',
            clickable: true,
          },
          breakpoints: {
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          },
        });
      }
    };

    if (typeof window !== 'undefined') {
      if (window.Swiper) {
        initializeSwiper();
      } else {
        const checkSwiper = setInterval(() => {
          if (window.Swiper) {
            clearInterval(checkSwiper);
            initializeSwiper();
          }
        }, 100);
        setTimeout(() => clearInterval(checkSwiper), 10000);
      }
    }
  }, []);

  return (
    <section className="tp-testimonial__area tp-space-top tp-space-bottom">
      <div className="container-1850">
        <div className="tp-testimonial__titlebox text-center">
          <h2 className="tp-section-title-2 tp-chars">Patients Share Their Smiles</h2>
          <p>Every smile has a story. Here’s what our patients experienced at DentalCare:</p>
        </div>

        <div className="tp-testimonial__wrapper fix">
          <div className="swiper tp-testimonial-active">
            <div className="swiper-wrapper">

              {/* Testimonial 1 */}
              <div className="swiper-slide">
                <div className="tp-testimonial__item">
                  <div className="left-content">
                    <h3 className="tp-testimonial__author">Olivia Bennett</h3>
                    <p className="tp-testimonial__verified-patient">
                      <Image src="/assets/img/icon/verified-badge.svg" alt="Verified" width={16} height={16} /> Verified Patient
                    </p>
                    <p className="tp-testimonial__doctor">
                      <span>Teeth Whitening</span> by <a href="#">Dr. Lucas Martin</a>
                    </p>
                  </div>
                  <div className="right-content" style={{ backgroundColor: '#FFF4E5' }}>
                    <div className="rating-wrapper">
                      <Image src="/assets/img/icon/rating.svg" alt="Ratings" width={100} height={20} />
                      <span>(Brilliant!)</span>
                    </div>
                    <p className="tp-testimonial__feedback">“I never thought a dentist visit could feel so comfortable. The team explained every step, and my teeth have never looked brighter!”</p>
                    <div className="img-wrapper">
                      <div className="before-img">
                        <Image src="/assets/img/testimonial/before-1.jpg" alt="Before" width={200} height={150} />
                        <p>Before</p>
                      </div>
                      <div className="after-img">
                        <Image src="/assets/img/testimonial/after-2.jpg" alt="After" width={200} height={150} />
                        <p>After</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="swiper-slide">
                <div className="tp-testimonial__item">
                  <div className="left-content">
                    <h3 className="tp-testimonial__author">Ethan Rodriguez</h3>
                    <p className="tp-testimonial__verified-patient">
                      <Image src="/assets/img/icon/verified-badge.svg" alt="Verified" width={16} height={16} /> Verified Patient
                    </p>
                    <p className="tp-testimonial__doctor">
                      <span>Orthodontics</span> by <a href="#">Dr. Sophia Nguyen</a>
                    </p>
                  </div>
                  <div className="right-content" style={{ backgroundColor: '#E0F7FA' }}>
                    <div className="rating-wrapper">
                      <Image src="/assets/img/icon/rating.svg" alt="Ratings" width={100} height={20} />
                      <span>(Life-Changing!)</span>
                    </div>
                    <p className="tp-testimonial__feedback">“Braces as an adult sounded daunting, but the team made it smooth and reassuring. My smile transformation is amazing!”</p>
                    <div className="img-wrapper">
                      <div className="before-img">
                        <Image src="/assets/img/testimonial/before-2.png" alt="Before" width={200} height={150} />
                        <p>Before</p>
                      </div>
                      <div className="after-img">
                        <Image src="/assets/img/testimonial/after-2.png" alt="After" width={200} height={150} />
                        <p>After</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Controls */}
          <div className="tp-testimonial__controls">
            <div className="tp-testimonial__navigation">
              <button className="testi-prev" aria-label="Previous testimonial">←</button>
              <button className="testi-next" aria-label="Next testimonial">→</button>
            </div>
            <div className="swiper-pagination tp-testi-pg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

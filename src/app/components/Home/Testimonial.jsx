'use client';
import { useEffect } from 'react';
import Image from 'next/image';

const Testimonial = () => {
  useEffect(() => {
    // Initialize Swiper when component mounts
    const initializeSwiper = () => {
      if (typeof window !== 'undefined' && window.Swiper) {
        new window.Swiper('.tp-testimonial-active', {
          slidesPerView: 1,
          spaceBetween: 30,
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
            },
            1200: {
              slidesPerView: 2,
            },
          },
        });
      }
    };

    // Check if Swiper is loaded
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
        setTimeout(() => clearInterval(checkSwiper), 10000);
      }
    }
  }, []);

    return (<>{/* Testimonials */}
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
                  <div className="tp-testimonial__item" style={{display: 'flex', backgroundColor: '#fff', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '20px'}}>
                    <div className="left-content" style={{flex: '0 0 300px', paddingRight: '20px'}}>
                      <h3 className="tp-testimonial__author">Olivia Bennett</h3>
                      <p className="tp-testimonial__verified-patient">
                        <Image src="/assets/img/icon/verified-badge.svg" alt="Verified" width={16} height={16} /> Verified Patient
                      </p>
                      <p className="tp-testimonial__doctor">
                        <span>Teeth Whitening</span> by <a href="#">Dr. Lucas Martin</a>
                      </p>
                    </div>
                    <div className="right-content" data-bg-color="#FFF4E5" style={{flex: 1, backgroundColor: '#FFF4E5', padding: '15px', borderRadius: '6px'}}>
                      <div className="rating-wrapper">
                        <Image src="/assets/img/icon/rating.svg" alt="Ratings" width={100} height={20} />
                        <span>(Brilliant!)</span>
                      </div>
                      <p className="tp-testimonial__feedback">“I never thought a dentist visit could feel so comfortable. The team explained every step, and my teeth have never looked brighter!”</p>
                      <div className="img-wrapper">
                        <div className="before-img">
                          <Image src="/assets/img/testimonial/before-1.jpg" alt="Before" width={120} height={100} />
                          <p>Before</p>
                        </div>
                        <div className="after-img">
                          <Image src="/assets/img/testimonial/after-2.jpg" alt="After" width={120} height={100} />
                          <p>After</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="swiper-slide">
                  <div className="tp-testimonial__item" style={{display: 'flex', backgroundColor: '#fff', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '20px'}}>
                    <div className="left-content" style={{flex: '0 0 300px', paddingRight: '20px'}}>
                      <h3 className="tp-testimonial__author">Ethan Rodriguez</h3>
                      <p className="tp-testimonial__verified-patient">
                        <Image src="/assets/img/icon/verified-badge.svg" alt="Verified" width={16} height={16} /> Verified Patient
                      </p>
                      <p className="tp-testimonial__doctor">
                        <span>Orthodontics</span> by <a href="#">Dr. Sophia Nguyen</a>
                      </p>
                    </div>
                    <div className="right-content" data-bg-color="#E0F7FA" style={{flex: 1, backgroundColor: '#E0F7FA', padding: '15px', borderRadius: '6px'}}>
                      <div className="rating-wrapper">
                        <Image src="/assets/img/icon/rating.svg" alt="Ratings" width={100} height={20} />
                        <span>(Life-Changing!)</span>
                      </div>
                      <p className="tp-testimonial__feedback">“Braces as an adult sounded daunting, but the team made it smooth and reassuring. My smile transformation is amazing!”</p>
                      <div className="img-wrapper">
                        <div className="before-img">
                          <img src="/assets/img/testimonial/before-2.png" alt="Before" />
                          <p>Before</p>
                        </div>
                        <div className="after-img">
                          <img src="/assets/img/testimonial/after-2.png" alt="After" />
                          <p>After</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 3 */}
              
<div className="swiper-slide">
                  <div className="tp-testimonial__item" style={{display: 'flex', backgroundColor: '#fff', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '20px'}}>
                    <div className="left-content" style={{flex: '0 0 300px', paddingRight: '20px'}}>
                      <h3 className="tp-testimonial__author">Ajay Sharma</h3>
                      <p className="tp-testimonial__verified-patient">
                        <Image src="/assets/img/icon/verified-badge.svg" alt="Verified" width={16} height={16} /> Verified Patient
                      </p>
                      <p className="tp-testimonial__doctor">
                        <span>Orthodontics</span> by <a href="#">Maya Johnson</a>
                      </p>
                    </div>
                    <div className="right-content" data-bg-color="#FCE4EC" style={{flex: 1, backgroundColor: '#FCE4EC', padding: '15px', borderRadius: '6px'}}>
                      <div className="rating-wrapper">
                        <Image src="/assets/img/icon/rating.svg" alt="Ratings" width={100} height={20} />
                        <span>(Life-Changing!)</span>
                      </div>
                      <p className="tp-testimonial__feedback">“The experience was fantastic! The staff was incredibly supportive, and the results speak for themselves.”</p>
                      <div className="img-wrapper">
                        <div className="before-img">
                          <img src="/assets/img/testimonial/before-2.png" alt="Before" />
                          <p>Before</p>
                        </div>
                        <div className="after-img">
                          <img src="/assets/img/testimonial/after-2.png" alt="After" />
                          <p>After</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="tp-testimonial__controls" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '40px',
              gap: '20px'
            }}>
              <div style={{
                display: 'flex',
                gap: '16px'
              }}>
                <button 
                  className="testi-prev" 
                  aria-label="Previous testimonial"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    border: 'none',
                    backgroundColor: '#4A90E2',
                    color: 'white',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 19L8 12L15 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button 
                  className="testi-next" 
                  aria-label="Next testimonial"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    border: 'none',
                    backgroundColor: '#4A90E2',
                    color: 'white',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5L16 12L9 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className="swiper-pagination tp-testi-pg" style={{
                display: 'flex',
                gap: '8px',
                justifyContent: 'center'
              }}></div>
            </div>
          </div>
        </div>
      </section></>);
}

export default Testimonial;
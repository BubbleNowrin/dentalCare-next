"use client";

import { useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  useEffect(() => {
    // Initialize Swiper when component mounts
    const initializeSwiper = () => {
      if (typeof window !== 'undefined' && window.Swiper) {
        // Hero Slider
        const heroSwiper = new window.Swiper('.tp-hero-2-active', {
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          effect: 'fade',
          fadeEffect: {
            crossFade: true,
          },
          pagination: {
            el: '.hero2-pg',
            clickable: true,
          },
          navigation: {
            nextEl: '.hero2-next',
            prevEl: '.hero2-prev',
          },
        });

        // Treatment Slider
        const treatmentSwiper = new window.Swiper('.tp-treatment__active', {
          slidesPerView: 6,
          spaceBetween: 30,
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.treat-pg',
            clickable: true,
          },
          navigation: {
            nextEl: '.treat-next',
            prevEl: '.treat-prev',
          },
          breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            576: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 25,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          },
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
     <>{/* Hero slider */}
      <div className="">
        <div className="container-1850">
          <div className="tp-hero__wrapper-2 fix">
            <div className="swiper tp-hero-2-active">
              <div className="swiper-wrapper">
                {/* Slide 1 */}
                <div className="swiper-slide">
                  <div className="tp-hero-2__item">
                    <img src="/assets/img/hero/hero-1.jpg" alt="Image" />
                    <div className="tp-hero__content tp-hero-2__content">
                      <div className="title-wrap">
                        <h1 className="title tp-chars">Experience Gentle, Trusted Dental Care.</h1>
                        <p>Your healthy smile is our priority — from routine checkups to advanced treatments, we’re here for you.</p>
                      </div>
                      <div className="list-wrap">
                        <ul>
                          <li><img src="/assets/img/icon/check-4.svg" alt="" /> Certified & Experienced Specialists.</li>
                          <li><img src="/assets/img/icon/check-4.svg" alt="" /> Transforming Smiles for 15+ Years.</li>
                        </ul>
                        <a href="/appointment" className="tp-btn__1 tp-btn-bg-2">
                          Book Your Appointment
                          <span className="icon">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <mask id="mask0_50_214" style={{ maskType: 'alpha' }} x="0" y="0" width="14" height="14">
                                <rect width="14" height="14" fill="#D9D9D9" />
                              </mask>
                              <g mask="url(#mask0_50_214)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.3676 1.63776L1.63768 13.3676L0.632266 12.3622L12.3621 0.632339L13.3676 1.63776Z" fill="#1E1D2B" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.8594 1.13503C9.49528 3.49911 9.64207 7.51072 11.8594 9.728L12.3621 10.2307L13.3675 9.22529L12.8648 8.72259C11.181 7.03885 11.0771 3.92808 12.8648 2.14045L13.3675 1.63774L12.3621 0.632325L11.8594 1.13503Z" fill="#1E1D2B" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.8648 2.14047C10.5008 4.50454 6.48916 4.35775 4.27188 2.14047L3.76917 1.63776L4.77458 0.632339L5.27729 1.13505C6.96036 2.81812 10.0718 2.92268 11.8594 1.13505L12.3621 0.632339L13.3676 1.63776L12.8648 2.14047Z" fill="#1E1D2B" />
                              </g>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 2 */}
                <div className="swiper-slide">
                  <div className="tp-hero-2__item">
                    <img src="/assets/img/hero/hero-2.jpg" alt="Image" />
                    <div className="tp-hero__content tp-hero-2__content">
                      <div className="title-wrap">
                        <h1 className="title tp-chars">Creating Beautiful Smiles Every Day.</h1>
                        <p>Our modern technology and caring team ensure stress-free treatments for the whole family.</p>
                      </div>
                      <div className="list-wrap">
                        <ul>
                          <li><img src="/assets/img/icon/check-4.svg" alt="" /> Painless Dental Procedures.</li>
                          <li><img src="/assets/img/icon/check-4.svg" alt="" /> Serving Thousands of Happy Patients.</li>
                        </ul>
                        <a href="/contact" className="tp-btn__1 tp-btn-bg-2">
                          Schedule a Free Consultation
                          <span className="icon">
                            {/* same arrow as above */}
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <mask id="mask0_50_214b" style={{ maskType: 'alpha' }} x="0" y="0" width="14" height="14">
                                <rect width="14" height="14" fill="#D9D9D9" />
                              </mask>
                              <g mask="url(#mask0_50_214b)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.3676 1.63776L1.63768 13.3676L0.632266 12.3622L12.3621 0.632339L13.3676 1.63776Z" fill="#1E1D2B" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.8594 1.13503C9.49528 3.49911 9.64207 7.51072 11.8594 9.728L12.3621 10.2307L13.3675 9.22529L12.8648 8.72259C11.181 7.03885 11.0771 3.92808 12.8648 2.14045L13.3675 1.63774L12.3621 0.632325L11.8594 1.13503Z" fill="#1E1D2B" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.8648 2.14047C10.5008 4.50454 6.48916 4.35775 4.27188 2.14047L3.76917 1.63776L4.77458 0.632339L5.27729 1.13505C6.96036 2.81812 10.0718 2.92268 11.8594 1.13505L12.3621 0.632339L13.3676 1.63776L12.8648 2.14047Z" fill="#1E1D2B" />
                              </g>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 3 */}
                <div className="swiper-slide">
                  <div className="tp-hero-2__item">
                    <img src="/assets/img/hero/hero-3.jpg" alt="Image" />
                    <div className="tp-hero__content tp-hero-2__content">
                      <div className="title-wrap">
                        <h1 className="title tp-chars">Your Smile, Our Mission.</h1>
                        <p>Trusted dental professionals offering personalized care to restore and enhance your smile.</p>
                      </div>
                      <div className="list-wrap">
                        <ul>
                          <li><img src="/assets/img/icon/check-4.svg" alt="" /> State-of-the-Art Equipment.</li>
                          <li><img src="/assets/img/icon/check-4.svg" alt="" /> Comprehensive Family Dentistry.</li>
                        </ul>
                        <a href="/contact" className="tp-btn__1 tp-btn-bg-2">
                          Get Started Today
                          <span className="icon">
                            {/* same arrow */}
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <mask id="mask0_50_214c" style={{ maskType: 'alpha' }} x="0" y="0" width="14" height="14">
                                <rect width="14" height="14" fill="#D9D9D9" />
                              </mask>
                              <g mask="url(#mask0_50_214c)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.3676 1.63776L1.63768 13.3676L0.632266 12.3622L12.3621 0.632339L13.3676 1.63776Z" fill="#1E1D2B" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.8594 1.13503C9.49528 3.49911 9.64207 7.51072 11.8594 9.728L12.3621 10.2307L13.3675 9.22529L12.8648 8.72259C11.181 7.03885 11.0771 3.92808 12.8648 2.14045L13.3675 1.63774L12.3621 0.632325L11.8594 1.13503Z" fill="#1E1D2B" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.8648 2.14047C10.5008 4.50454 6.48916 4.35775 4.27188 2.14047L3.76917 1.63776L4.77458 0.632339L5.27729 1.13505C6.96036 2.81812 10.0718 2.92268 11.8594 1.13505L12.3621 0.632339L13.3676 1.63776L12.8648 2.14047Z" fill="#1E1D2B" />
                              </g>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="tp-hero-2__controls">
                <div className="tp-hero-2__navigation">
                  <button className="hero2-prev" aria-label="Previous slide">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <button className="hero2-next" aria-label="Next slide">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
                <div className="swiper-pagination hero2-pg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Treatments carousel */}
        <div className="tp-space-top tp-space-bottom">
          <div className="container">
            <div className="tp-treatment__wrapper-2 fix">
              <div className="swiper tp-treatment__active">
                <div className="swiper-wrapper">
                  {[
                    { href: '/services/cosmetic-dentistry', img: 'cosmetic.png', label: 'Cosmetic Dentistry' },
                    { href: '/services/children-dentistry', img: 'children.png', label: 'Children’s Dentistry' },
                    { href: '/services/dental-implants', img: 'dental.png', label: 'Dental Implants' },
                    { href: '/services/orthodontics', img: 'orthodontics.png', label: 'Orthodontics' },
                    { href: '/services/pediatric-dentistry', img: 'pediatric.png', label: 'Pediatric Dentistry' },
                  ].map((i) => (
                    <div className="swiper-slide" key={i.label}>
                      <div className="tp-hero__treatment-type">
                        <a href={i.href} className="tp-img-anim">
                          <img src={`/assets/img/hero/${i.img}`} alt={i.label} />
                        </a>
                        <p><a href={i.href}>{i.label}</a></p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="tp-treatment__controls">
                  <div className="swiper-pagination treat-pg"></div>
                </div>
              </div>
              <div className="tp-treatment__navigation">
                <button className="treat-prev" aria-label="Previous">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button className="treat-next" aria-label="Next">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}


export default Hero;
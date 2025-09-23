'use client';
import { useEffect } from 'react';
import Image from 'next/image';

const Appointment = () => {
  useEffect(() => {
    // Simple intersection observer for animations
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const animateElements = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) translateX(0) scale(1)';
          entry.target.style.transition = 'all 0.8s ease-out';
        }
      });
    };

    const observer = new IntersectionObserver(animateElements, observerOptions);

    // Initialize animations when component mounts
    const initializeAnimations = () => {
      // Set initial states
      const appointmentContent = document.querySelector('.tp-appoinment__content');
      const appointmentImages = document.querySelector('.tp-appoinment__images');
      const rateWrap = document.querySelector('.rate-wrap');
      const appointmentImgs = document.querySelectorAll('.tp-appoinment__images img');

      // Set initial hidden states
      [appointmentContent, appointmentImages, rateWrap].forEach(el => {
        if (el) {
          el.style.opacity = '0';
        }
      });

      appointmentImgs.forEach(img => {
        if (img) {
          img.style.opacity = '0';
        }
      });

      // Initialize GSAP animations (preferred)
      if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
        try {
          window.gsap.registerPlugin(window.ScrollTrigger);

          // Animate content from left
          if (appointmentContent) {
            window.gsap.set(appointmentContent, { opacity: 0, x: -50 });
            window.gsap.to(appointmentContent, {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: '.tp-appoinment__area',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              }
            });
          }

          // Animate images container from right
          if (appointmentImages) {
            window.gsap.set(appointmentImages, { opacity: 0, x: 50 });
            window.gsap.to(appointmentImages, {
              opacity: 1,
              x: 0,
              duration: 1,
              delay: 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: '.tp-appoinment__area',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              }
            });
          }

          // Animate rate box with scale effect
          if (rateWrap) {
            window.gsap.set(rateWrap, { opacity: 0, scale: 0.8 });
            window.gsap.to(rateWrap, {
              opacity: 1,
              scale: 1,
              duration: 0.8,
              delay: 0.6,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: '.tp-appoinment__images',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              }
            });
          }

          // Animate individual images with stagger
          if (appointmentImgs.length > 0) {
            window.gsap.set(appointmentImgs, { opacity: 0, y: 30, scale: 0.95 });
            window.gsap.to(appointmentImgs, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.2,
              delay: 0.4,
              ease: "power2.out",
              scrollTrigger: {
                trigger: '.tp-appoinment__images',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              }
            });
          }

          // Animate the rate number with counting effect
          const rateNumber = document.querySelector('.rate');
          if (rateNumber) {
            window.gsap.fromTo(rateNumber, {
              textContent: 0
            }, {
              textContent: 98,
              duration: 2,
              delay: 0.8,
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: '.rate-wrap',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              },
              onUpdate: function() {
                rateNumber.textContent = Math.round(this.targets()[0].textContent) + '%';
              }
            });
          }

        } catch (error) {
          console.log('GSAP failed, using fallback');
          // Use intersection observer as fallback
          [appointmentContent, appointmentImages, rateWrap].forEach((el, index) => {
            if (el) {
              el.style.transform = el === appointmentContent ? 'translateX(-50px)' : 
                                 el === appointmentImages ? 'translateX(50px)' : 'scale(0.8)';
              setTimeout(() => observer.observe(el), index * 200);
            }
          });
          
          appointmentImgs.forEach((img, index) => {
            if (img) {
              img.style.transform = 'translateY(30px) scale(0.95)';
              setTimeout(() => observer.observe(img), 400 + (index * 200));
            }
          });
        }
      } else {
        // Use intersection observer as fallback
        [appointmentContent, appointmentImages, rateWrap].forEach((el, index) => {
          if (el) {
            el.style.transform = el === appointmentContent ? 'translateX(-50px)' : 
                               el === appointmentImages ? 'translateX(50px)' : 'scale(0.8)';
            setTimeout(() => observer.observe(el), index * 200);
          }
        });
        
        appointmentImgs.forEach((img, index) => {
          if (img) {
            img.style.transform = 'translateY(30px) scale(0.95)';
            setTimeout(() => observer.observe(img), 400 + (index * 200));
          }
        });
      }
    };

    // Initialize after small delay
    setTimeout(initializeAnimations, 500);

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Appointment CTA */}
      <section className="tp-appoinment__area">
        <div className="container-1850">
          <div className="tp-appoinment__wrapper">
            <div className="tp-appoinment__content">
              <h2 className="tp-section-title tp-chars">Book Your Online Dental Appointment</h2>
              <p className="para">With DentalCare’s secure video consultations, you can speak directly with our expert dentists—getting professional advice and treatment plans without leaving your home.</p>
              <div className="btn-wrapper">
                <a href="/contact" className="tp-btn__1 tp-btn-bg-2">
                  Free Online Dental Advice
                  <span className="icon">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </a>
                <div className="contact-box">
                  <div className="icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Phone Icon</title><path d="M22 16.92V20a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.95 5.18 2 2 0 0 1 6 3h3.09a1 1 0 0 1 1 .75 12.05 12.05 0 0 0 .7 2.11 1 1 0 0 1-.23 1.11L9.91 8.09a16 16 0 0 0 6 6l1.12-1.12a1 1 0 0 1 1.11-.23 12.05 12.05 0 0 0 2.11.7 1 1 0 0 1 .75 1V16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div className="contact-wrap">
                    <p>Emergency Support</p>
                    <a href="tel:10104445555">+1 010 444-5555</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="tp-appoinment__images">
              <div className="rate-wrap">
                <h2 className="rate">98%</h2>
                <p>of patients return for ongoing care.</p>
              </div>
              <Image 
                src="/assets/img/appointment/appoinment-1.png" 
                alt="Online Consultation" 
                className="appoinment-1"
                width={300}
                height={400}
                style={{objectFit: 'cover'}}
              />
              <Image 
                src="/assets/img/appointment/appoinment-2.jpg" 
                alt="Dentist Support" 
                className="appoinment-2"
                width={400}
                height={300}
                style={{objectFit: 'cover'}}
              />
            </div>
          </div>
        </div>
      </section></>);
}

export default Appointment;
'use client';
import { useEffect } from 'react';
import Image from 'next/image';

const Booking = () => {
  useEffect(() => {
    // Simple intersection observer for text animations only
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const animateElements = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          entry.target.style.transition = 'all 0.8s ease-out';
        }
      });
    };

    const observer = new IntersectionObserver(animateElements, observerOptions);

    // Initialize text animations only
    const initializeTextAnimations = () => {
      // Set initial states for text elements only
      const titleElements = document.querySelectorAll('.tp-booking__titlebox h2, .tp-booking__titlebox p');
      
      // Hide text elements initially
      titleElements.forEach(el => {
        if (el) {
          el.style.opacity = '0';
          el.style.transform = 'translateY(30px)';
        }
      });

      // Initialize GSAP animations for text (preferred)
      if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
        try {
          window.gsap.registerPlugin(window.ScrollTrigger);

          // Animate title elements
          window.gsap.fromTo('.tp-booking__titlebox h2', {
            opacity: 0,
            y: 50
          }, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: '.tp-booking__titlebox',
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          });

          // Animate description paragraph
          window.gsap.fromTo('.tp-booking__titlebox p', {
            opacity: 0,
            y: 30
          }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: '.tp-booking__titlebox',
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          });

        } catch (error) {
          console.log('GSAP failed, using fallback for text animations');
          // Use intersection observer as fallback for text only
          titleElements.forEach((el, index) => {
            setTimeout(() => observer.observe(el), index * 200);
          });
        }
      } else {
        // Use intersection observer as fallback for text only
        titleElements.forEach((el, index) => {
          setTimeout(() => observer.observe(el), index * 200);
        });
      }
    };

    // Initialize Nice Select for dropdowns
    const initializeDropdowns = () => {
      if (typeof window !== 'undefined' && window.$ && window.$.fn.niceSelect) {
        // Initialize Nice Select on all select elements
        window.$('.tp-booking__form select').niceSelect();
      } else {
        // Fallback: Add custom styling classes
        const selects = document.querySelectorAll('.tp-booking__form select');
        selects.forEach(select => {
          select.style.appearance = 'none';
          select.style.background = 'url("data:image/svg+xml;charset=US-ASCII,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'><path fill=\'%23666\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/></svg>") no-repeat right 0.7rem center';
          select.style.backgroundSize = '0.65rem auto';
          select.style.paddingRight = '2rem';
        });
      }
    };

    // Initialize text animations
    setTimeout(() => {
      initializeTextAnimations();
    }, 500);

    // Try to initialize dropdowns immediately
    initializeDropdowns();

    // Also try after a delay in case jQuery/NiceSelect loads later
    const initTimeout = setTimeout(() => {
      initializeDropdowns();
    }, 1000);

    // Cleanup timeout and observer on unmount
    return () => {
      clearTimeout(initTimeout);
      observer.disconnect();
      // Destroy nice select instances if they exist
      if (typeof window !== 'undefined' && window.$ && window.$.fn.niceSelect) {
        try {
          window.$('.tp-booking__form select').niceSelect('destroy');
        } catch (e) {
          // Ignore errors during cleanup
        }
      }
    };
  }, []);

  return (
    <>
      {/* Booking */}
      <div className="tp-booking__area">
        <Image 
          src="/assets/img/appointment/booking.jpg" 
          alt="Dental Appointment" 
          className="booking-img"
          width={1920}
          height={1080}
          style={{objectFit: 'cover'}}
        />
        <div className="container">
          <div className="tp-booking__form-wrapper">
            <div className="tp-booking__titlebox">
              <h2 className="tp-section-subtitle">Get Started</h2>
              <h2 className="tp-section-title tp-chars">Schedule Your Appointment</h2>
              <p>Fill out the form below and our team will contact you to confirm your preferred date and time.</p>
            </div>

            <div className="tp-booking__form">
              <form action="#">
                <div className="tp-booking__inputs">
                  <div className="input-wrap">
                    <select 
                      name="treatment" 
                      id="treatment" 
                      defaultValue=""
                      style={{
                        appearance: 'none',
                        background: 'url("data:image/svg+xml;charset=US-ASCII,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'><path fill=\'%23666\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/></svg>") no-repeat right 0.7rem center',
                        backgroundSize: '0.65rem auto',
                        paddingRight: '2rem'
                      }}
                    >
                      <option value="">Select Treatment</option>
                      <option value="general">General Dentistry</option>
                      <option value="cosmetic">Cosmetic Dentistry</option>
                      <option value="implants">Dental Implants</option>
                      <option value="orthodontics">Orthodontics</option>
                      <option value="pediatric">Pediatric Dentistry</option>
                    </select>
                  </div>

                  <div className="input-wrap">
                    <select 
                      name="specialists" 
                      id="specialists" 
                      defaultValue=""
                      style={{
                        appearance: 'none',
                        background: 'url("data:image/svg+xml;charset=US-ASCII,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'><path fill=\'%23666\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/></svg>") no-repeat right 0.7rem center',
                        backgroundSize: '0.65rem auto',
                        paddingRight: '2rem'
                      }}
                    >
                      <option value="">Choose Specialist</option>
                      <option value="orthodontist">Orthodontist</option>
                      <option value="oral_surgeon">Oral Surgeon</option>
                      <option value="pediatric_dentist">Pediatric Dentist</option>
                      <option value="cosmetic_dentist">Cosmetic Dentist</option>
                    </select>
                  </div>

                  <div className="input-wrap">
                    <input type="text" name="name" placeholder="Full Name" required />
                  </div>

                  <div className="input-wrap">
                    <input type="tel" name="phone" placeholder="Phone Number" required />
                  </div>

                  <div className="input-wrap">
                    <input type="datetime-local" name="datetime" placeholder="Preferred Date & Time" required />
                  </div>

                  <div className="input-wrap">
                    <select 
                      name="location" 
                      id="location" 
                      defaultValue=""
                      style={{
                        appearance: 'none',
                        background: 'url("data:image/svg+xml;charset=US-ASCII,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'><path fill=\'%23666\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/></svg>") no-repeat right 0.7rem center',
                        backgroundSize: '0.65rem auto',
                        paddingRight: '2rem'
                      }}
                    >
                      <option value="">Select Clinic Location</option>
                      <option value="london">London</option>
                      <option value="manchester">Manchester</option>
                      <option value="liverpool">Liverpool</option>
                      <option value="birmingham">Birmingham</option>
                    </select>
                  </div>

                  <div className="input-submit">
                    <input type="submit" value="Confirm Appointment" className="submit tp-btn__1 tp-btn-bg-2" />
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div></>
    )
}

export default Booking;
'use client';
import { useEffect } from 'react';
import Image from 'next/image';

const FunFact = () => {
  useEffect(() => {
    // Simple intersection observer as fallback
    const observerOptions = {
      threshold: 0.3,
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

    // Initialize animations when component mounts
    const initializeAnimations = () => {
      // Simple counter animation as fallback
      const animateCounters = () => {
        const counters = document.querySelectorAll('.purecounter');
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-purecounter-end'));
          const duration = parseInt(counter.getAttribute('data-purecounter-duration') || '2') * 1000;
          const start = parseInt(counter.getAttribute('data-purecounter-start') || '0');
          
          let current = start;
          const increment = target / (duration / 16); // 60fps
          
          const updateCounter = () => {
            if (current < target) {
              current += increment;
              counter.textContent = Math.floor(current);
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target;
            }
          };
          
          // Start counter when element is visible
          const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                updateCounter();
                counterObserver.unobserve(entry.target);
              }
            });
          }, { threshold: 0.5 });
          
          counterObserver.observe(counter);
        });
      };

      // Initialize PureCounter for number animations (preferred)
      if (typeof window !== 'undefined' && (window.PureCounter || window.purecounter)) {
        try {
          const CounterClass = window.PureCounter || window.purecounter;
          new CounterClass();
        } catch (error) {
          console.log('PureCounter failed, using fallback');
          animateCounters();
        }
      } else {
        animateCounters();
      }

      // Initialize GSAP fade animations (preferred)
      if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
        try {
          // Register ScrollTrigger plugin
          window.gsap.registerPlugin(window.ScrollTrigger);
          
          // Animate counter section on scroll
          window.gsap.fromTo('.tp-funfact-box', {
            opacity: 0,
            y: 50
          }, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
              trigger: '.tp-funfact__items',
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          });

          // Animate emergency cards
          window.gsap.fromTo('.tp-emergency__card', {
            opacity: 0,
            y: 30,
            scale: 0.95
          }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
              trigger: '.tp-emergency__cards',
              start: 'top 85%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          });
        } catch (error) {
          console.log('GSAP failed, using fallback');
          // Use intersection observer as fallback
          const elements = document.querySelectorAll('.tp-funfact-box, .tp-emergency__card');
          elements.forEach(el => {
            el.style.transform = 'translateY(30px)';
            observer.observe(el);
          });
        }
      } else {
        // Use intersection observer as fallback
        const elements = document.querySelectorAll('.tp-funfact-box, .tp-emergency__card');
        elements.forEach(el => {
          el.style.transform = 'translateY(30px)';
          observer.observe(el);
        });
      }
    };

    // Check if libraries are loaded with multiple attempts
    if (typeof window !== 'undefined') {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        initializeAnimations();
      }, 1000);
    }

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Funfact */}
      <section className="tp-funfact__area tp-space-top">
        <div className="container-1850">
          <div className="tp-funcfact__wrapper">
            <p>1,200+ Urgent Dental Cases Successfully Treated</p>
            <div className="tp-funfact__items">
              <div className="tp-funfact-box" style={{opacity: 0}}>
                <h3 className="tp-funfact-number">
                  <span className="purecounter" data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="2">12</span>k<span className="tp-funfact-suffix">+</span>
                </h3>
                <h6 className="tp-funfact-title">Emergency Cases <br /> Resolved</h6>
              </div>
              <div className="tp-funfact-box" style={{opacity: 0}}>
                <h3 className="tp-funfact-number">
                  <span className="purecounter" data-purecounter-start="0" data-purecounter-end="42" data-purecounter-duration="2">42</span>k<span className="tp-funfact-suffix">+</span>
                </h3>
                <h6 className="tp-funfact-title">Happy Patients <br /> Served</h6>
              </div>
              <div className="tp-funfact-box" style={{opacity: 0}}>
                <h3 className="tp-funfact-number">
                  <span className="purecounter" data-purecounter-start="0" data-purecounter-end="400" data-purecounter-duration="2">400</span><span className="tp-funfact-suffix">+</span>
                </h3>
                <h6 className="tp-funfact-title">Qualified Dental <br /> Specialists</h6>
              </div>
              <div className="tp-funfact-box" style={{opacity: 0}}>
                <h3 className="tp-funfact-number">
                  <span className="purecounter" data-purecounter-start="0" data-purecounter-end="4" data-purecounter-duration="2">4</span>k<span className="tp-funfact-suffix">+</span>
                </h3>
                <h6 className="tp-funfact-title">5-Star Patient <br /> Reviews</h6>
              </div>
            </div>
          </div>

          <div className="tp-emergency__cards">
            <div className="tp-emergency__card card-1 tp-fade" style={{opacity: 0}}>
              <h3 className="title">Emergency Care</h3>
              <div className="para-wrap">
                <Image src="/assets/img/icon/teeth.svg" alt="Icon" width={24} height={24} />
                <p>Unexpected tooth pain or injury? DentalCare provides fast, gentle relief when you need it most.</p>
              </div>
              <div className="contact-box">
                <div className="icon">
                  <Image src="/assets/img/icon/phone.svg" alt="Phone Icon" width={20} height={20} />
                </div>
                <div className="contact-wrap">
                  <p>Emergency Hotline</p>
                  <a href="tel:10104445555">+1 010 444-5555</a>
                </div>
              </div>
            </div>

            <div className="tp-emergency__card card-2 tp-fade" data-delay="0.5" style={{opacity: 0}}>
              <h3 className="title">DentalCare Location</h3>
              <div className="para-wrap">
                <Image src="/assets/img/icon/teeth.svg" alt="Tooth Icon" width={24} height={24} />
                <p>DentalCare – Los Angeles (Main Branch), 123 Main Street, Downtown, Los Angeles, CA 90012, USA.</p>
              </div>
              <div className="contact-form">
                <span>Get Directions</span>
                 <a 
                  href="https://www.google.com/maps/search/?api=1&query=123+Main+Street,+Downtown,+Los+Angeles,+CA+90012,+USA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="tp-card-btn" 
                  aria-label="Get directions to DentalCare Los Angeles"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="tp-emergency__card card-3 tp-fade" data-delay="0.75" style={{opacity: 0}}>
              <h3 className="title">Book an Appointment</h3>
              <div className="para-wrap">
                <Image src="/assets/img/icon/calender.svg" alt="Icon" width={24} height={24} />
                <p>Reserve your dental appointment in minutes with our simple and secure online booking system.</p>
              </div>
              <div className="contact-box">
                <div className="icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E1D2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.88 19.88 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a1 1 0 0 1 1 .75l1.13 4.52a1 1 0 0 1-.26 1l-2.2 2.2a16 16 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.26l4.52 1.13a1 1 0 0 1 .75 1z"/>
                  </svg>
                </div>
                <div className="contact-wrap contact-wrap-2">
                  <p>Appointment Desk</p>
                  <a href="tel:10108889999">+1 010 888-9999</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</>
    )
}

export default FunFact;
'use client';
import { useEffect } from 'react';
import Image from 'next/image';

const About = () => {
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
          entry.target.style.transform = 'translateY(0)';
          entry.target.style.transition = 'all 0.8s ease-out';
        }
      });
    };

    const observer = new IntersectionObserver(animateElements, observerOptions);

    // Initialize animations when component mounts
    const initializeAnimations = () => {
      // Set initial states via JavaScript
      const imgWrap = document.querySelector('.img-wrap');
      if (imgWrap) {
        imgWrap.style.opacity = '0';
        imgWrap.style.transform = 'translateY(30px) scale(0.95)';
      }

      // Simple counter animation
      const animateCounters = () => {
        const counters = document.querySelectorAll('.purecounter');
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-purecounter-end'));
          const duration = 2000; // 2 seconds
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

      // Initialize PureCounter (preferred) or fallback
      if (typeof window !== 'undefined' && (window.PureCounter || window.purecounter)) {
        try {
          const CounterClass = window.PureCounter || window.purecounter;
          new CounterClass();
        } catch (error) {
          animateCounters();
        }
      } else {
        animateCounters();
      }

      // Initialize GSAP animations (preferred) or fallback
      if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
        try {
          window.gsap.registerPlugin(window.ScrollTrigger);
          
          // Animate main title
          window.gsap.fromTo('.tp-section-title', {
            opacity: 0,
            y: 50
          }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: '.tp-section-title',
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          });

          // Animate about content list items
          window.gsap.fromTo('.tp-about__content ul li', {
            opacity: 0,
            x: -30
          }, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: '.tp-about__content ul',
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          });

          // Animate images with explicit initial state
          const imgWrap = document.querySelector('.img-wrap');
          if (imgWrap) {
            window.gsap.set(imgWrap, { opacity: 0, y: 30, scale: 0.95 });
            window.gsap.to(imgWrap, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: imgWrap,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                onEnter: () => console.log('Image animation triggered!')
              }
            });
          }

          // Animate content section
          window.gsap.fromTo('.tp-about__content-2', {
            opacity: 0,
            y: 30
          }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: '.tp-about__content-2',
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          });

          // Animate working hours
          window.gsap.fromTo('.tp-working__hour', {
            opacity: 0,
            x: 30
          }, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: '.tp-working__hour',
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          });

        } catch (error) {
          console.log('GSAP failed, using fallback');
          // Use intersection observer as fallback
          const elements = document.querySelectorAll('.tp-section-title, .tp-about__content ul li, .img-wrap, .tp-about__content-2, .tp-working__hour, .top-wrap, .tp-funfact-box');
          elements.forEach((el, index) => {
            el.style.transform = 'translateY(30px)';
            // Force immediate observation for img-wrap
            if (el.classList.contains('img-wrap')) {
              setTimeout(() => observer.observe(el), 500);
            } else {
              setTimeout(() => observer.observe(el), index * 100);
            }
          });
        }
      } else {
        // Use intersection observer as fallback
        const elements = document.querySelectorAll('.tp-section-title, .tp-about__content ul li, .img-wrap, .tp-about__content-2, .tp-working__hour, .top-wrap, .tp-funfact-box');
        elements.forEach((el, index) => {
          el.style.transform = 'translateY(30px)';
          // Force immediate observation for img-wrap
          if (el.classList.contains('img-wrap')) {
            setTimeout(() => observer.observe(el), 500);
          } else {
            setTimeout(() => observer.observe(el), index * 100);
          }
        });
      }
    };

    // Initialize after small delay
    setTimeout(() => {
      initializeAnimations();
      
      // Aggressive backup - ensure image is visible
      setTimeout(() => {
        const imgWrap = document.querySelector('.img-wrap');
        if (imgWrap) {
          console.log('Backup: Making image visible');
          imgWrap.style.opacity = '1';
          imgWrap.style.transform = 'translateY(0) scale(1)';
          imgWrap.style.transition = 'all 0.8s ease-out';
        }
      }, 1500);
    }, 500);

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* About */}
      <section className="tp-about__area tp-space-top">
        <div className="container-1850">
          <div className="tp-about__content">
            <div className="top-wrap">
              <Image src="/assets/img/logo/logo-2.png" alt="DentalCare Logo" width={120} height={40} />
              <p>Our Promise of Exceptional Care</p>
            </div>
            <h2 className="tp-section-title tp-chars">A visit to the dentist should feel reassuring, not stressful. At DentalCare, we’re here to change the way you experience dentistry.</h2>
            <ul>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Quality Certification</title><path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 8V12L14.5 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Internationally Recognized for Quality Standards
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Hygiene & Safety</title><path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M8 18H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                Strict Hygiene & Patient Safety Protocols
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Award-Winning Dentists</title><path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Award-Winning Team of Skilled Professionals
              </li>
            </ul>
            <div className="img-wrap">
              <Image 
                src="/assets/img/about/about-2.jpg" 
                alt="About DentalCare" 
                width={800} 
                height={600}
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-7">
            <div className="tp-about__content-2" style={{opacity: 0}}>
                <h3 className="title">Your Smile, Our Priority</h3>
                <p className="para">For over <span>12 years</span>, DentalCare has been redefining dental visits. From routine checkups to advanced treatments, our dedicated team delivers gentle, personalized care with cutting-edge technology—because every smile deserves expert attention.</p>
                <div className="inner-wrap">
                  <div className="tp-funfact-box" style={{opacity: 0}}>
                    <h3 className="tp-funfact-number">
                      <span className="purecounter" data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="2">12</span>
                      <span className="tp-funfact-suffix">+</span>
                    </h3>
                    <h6 className="tp-funfact-title">Years of <br /> Trusted Care</h6>
                  </div>
                  <div className="tp-award-box">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>DentalCare Award</title><path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <p>Recognized as <br /> Best Dental Clinic 2022</p>
                  </div>
                </div>
                <div className="btn-wrapper">
                  <a href="/children-dentistry" className="tp-btn__1 tp-btn-bg-2">
                    Discover Our Care
                    <span className="icon">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                  </a>
                  <a href="/services" className="tp-btn__2">See All Services</a>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="tp-working__hour" style={{opacity: 0}}>
                <h3 className="title">Clinic Hours</h3>
                <div className="para-wrap">
                  <p>We’re here when you need us most. Plan your visits with flexible, patient-friendly hours.</p>
                </div>
                <ul>
                  <li>Monday–Thursday <span>8:30 - 19:30</span></li>
                  <li>Friday <span>9:30 - 18:30</span></li>
                  <li>Saturday <span>7:30 - 19:30</span></li>
                  <li>Sunday <span>Closed</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section></>
    )
}

export default About;


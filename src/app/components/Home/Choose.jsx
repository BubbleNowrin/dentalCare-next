'use client';
import { useEffect } from 'react';
import Image from 'next/image';

const Choose = () => {
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
      const chooseImage = document.querySelector('.tp-choose__image');
      const chooseContent = document.querySelector('.tp-choose__content');
      const chooseItems = document.querySelectorAll('.tp-choose__content ul li');
      const chooseShape = document.querySelector('.tp-choose__area .shape');

      // Set initial hidden states for fade-in and slide-up effect
      [chooseImage, chooseContent, chooseShape].forEach(el => {
        if (el) {
          el.style.opacity = '0';
          el.style.transform = 'translateY(30px)';
          el.style.transition = 'all 0.8s ease-out';
        }
      });

      chooseItems.forEach(item => {
        if (item) {
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px)';
          item.style.transition = 'all 0.6s ease-out';
        }
      });

      // Simple fade-in animations using only opacity (no scrollbar issues)
      if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
        try {
          window.gsap.registerPlugin(window.ScrollTrigger);

          // Animate choose image with fade and slide up
          if (chooseImage) {
            window.gsap.to(chooseImage, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: chooseImage,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              }
            });
          }

          // Animate content with fade and slide up (with delay)
          if (chooseContent) {
            window.gsap.to(chooseContent, {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: 0.3,
              ease: "power2.out",
              scrollTrigger: {
                trigger: chooseContent,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              }
            });
          }

          // Animate list items with stagger and slide up
          if (chooseItems.length > 0) {
            window.gsap.to(chooseItems, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.15,
              ease: "back.out(1.2)",
              scrollTrigger: {
                trigger: '.tp-choose__content ul',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              }
            });
          }

          // Animate decorative shape with fade and slide up
          if (chooseShape) {
            window.gsap.to(chooseShape, {
              opacity: 1,
              y: 0,
              duration: 1.2,
              delay: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: '.tp-choose__area',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
              }
            });
          }

        } catch (error) {
          console.log('GSAP failed, using simple fade fallback');
          // Simple timeout-based animation fallback
          setTimeout(() => {
            [chooseImage, chooseContent, chooseShape].forEach((el, index) => {
              if (el) {
                setTimeout(() => {
                  el.style.opacity = '1';
                  el.style.transform = 'translateY(0)';
                }, index * 300);
              }
            });
            
            chooseItems.forEach((item, index) => {
              setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
              }, 600 + (index * 100));
            });
          }, 500);
        }
      } else {
        // Simple timeout-based animation fallback
        setTimeout(() => {
          [chooseImage, chooseContent, chooseShape].forEach((el, index) => {
            if (el) {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
              }, index * 300);
            }
          });
          
          chooseItems.forEach((item, index) => {
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, 600 + (index * 100));
          });
        }, 500);
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
      {/* Choose section */}
      <section className="tp-choose__area" style={{overflow: 'hidden', width: '100%', maxWidth: '100vw'}}>
        <div style={{display: 'flex', flexWrap: 'wrap', width: '100%', margin: 0, padding: 0}}>
            
          <div style={{flex: '1 1 50%', minWidth: '300px', overflow: 'hidden'}}>
              <div className="tp-choose__image" style={{width: '100%', height: '100%', overflow: 'hidden'}}>
                <Image 
                  src="/assets/img/choose/choose-1.jpg" 
                  alt="DentalCare Clinic" 
                  className="img"
                  width={600}
                  height={800}
                  style={{objectFit: 'cover', width: '100%', height: '100%', maxWidth: '100%'}}
                />
                <Image 
                  src="/assets/img/choose/logo.png" 
                  alt="DentalCare Logo" 
                  className="logo"
                  width={80}
                  height={80}
                  style={{maxWidth: '100%'}}
                />
              </div>
            </div>
            <div style={{flex: '1 1 50%', minWidth: '300px', overflow: 'hidden'}}>
              <div className="tp-choose__content" style={{width: '100%', overflow: 'hidden'}}>
                <h3 className="tp-section-subtitle">Why Patients Choose DentalCare</h3>
                <h3 className="tp-section-title tp-chars">Because every smile deserves expert attention.</h3>
                <p className="para">At DentalCare, we combine compassion with innovation. With state-of-the-art technology, a highly skilled team, and a focus on patient comfort, we make dental visits a positive experience—whether it’s a routine check-up or urgent treatment.</p>
                <h4 className="title">Excellence in every detail of your care.</h4>
                <ul>
                  <li><Image src="/assets/img/icon/check-3.svg" alt="" width={20} height={20} /> Decades of collective experience you can trust</li>
                  <li><Image src="/assets/img/icon/check-3.svg" alt="" width={20} height={20} /> Latest digital and pain-free dental technology</li>
                  <li><Image src="/assets/img/icon/check-3.svg" alt="" width={20} height={20} /> Personalized care plans tailored to your needs</li>
                  <li><Image src="/assets/img/icon/check-3.svg" alt="" width={20} height={20} /> 24/7 emergency dental support</li>
                  <li><Image src="/assets/img/icon/check-3.svg" alt="" width={20} height={20} /> Strict hygiene protocols & safe environment</li>
                  <li><Image src="/assets/img/icon/check-3.svg" alt="" width={20} height={20} /> A caring team dedicated to your comfort</li>
                </ul>
              </div>
            </div>
          </div>
       
        <Image 
          src="/assets/img/choose/choose-2.png" 
          alt="Decorative Shape" 
          className="shape hidden md:flex"
          width={200}
          height={200}
          style={{maxWidth: '100%'}}
        />
      </section>
    </>
  );
    
}

export default Choose;
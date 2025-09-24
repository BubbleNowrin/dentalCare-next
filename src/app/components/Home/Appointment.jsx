'use client';
import { useEffect } from 'react';
import Image from 'next/image';

const Appointment = () => {
  useEffect(() => {
    const observerOptions = { threshold: 0.2, rootMargin: '0px 0px -50px 0px' };
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
    setTimeout(() => {
      const appointmentContent = document.querySelector('.tp-appoinment__content');
      const appointmentImages = document.querySelector('.tp-appoinment__images');
      const rateWrap = document.querySelector('.rate-wrap');
      const appointmentImgs = document.querySelectorAll('.tp-appoinment__images img');

      [appointmentContent, appointmentImages, rateWrap].forEach(el => el && (el.style.opacity = '0'));
      appointmentImgs.forEach(img => (img.style.opacity = '0'));
      [appointmentContent, appointmentImages, rateWrap, ...appointmentImgs].forEach((el, i) => {
        if (el) setTimeout(() => observer.observe(el), i * 200);
      });
    }, 500);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="tp-appoinment__area">
      <div className="container-1850">
        <div className="tp-appoinment__wrapper">
          {/* Content */}
          <div className="tp-appoinment__content">
            <h2 className="tp-section-title tp-chars">
              Book Your Online Dental Appointment
            </h2>
            <p className="para">
              With DentalCare’s secure video consultations, you can speak directly with our
              expert dentists—getting professional advice and treatment plans without
              leaving your home.
            </p>
            <div className="btn-wrapper">
              <a href="/contact" className="tp-btn__1 tp-btn-bg-2">
                Free Online Dental Advice
                <span className="icon">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7H13M13 7L7 1M13 7L7 13"
                      stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
              <div className="contact-box">
                <div className="icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Phone Icon</title>
                    <path d="M22 16.92V20a2 2 0 0 1-2.18 2
                      A19.79 19.79 0 0 1 3.95 5.18
                      2 2 0 0 1 6 3h3.09a1 1 0 0 1 1 .75
                      12.05 12.05 0 0 0 .7 2.11
                      1 1 0 0 1-.23 1.11L9.91 8.09a16 16
                      0 0 0 6 6l1.12-1.12a1 1 0 0 1 1.11-.23
                      12.05 12.05 0 0 0 2.11.7
                      1 1 0 0 1 .75 1V16.92z"
                      stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-wrap">
                  <p>Emergency Support</p>
                  <a href="tel:18005551234">+1 010 444-5555</a>
                </div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="tp-appoinment__images">
            <div className="rate-wrap">
              <h2 className="rate">98%</h2>
              <p>of patients return for ongoing care.</p>
            </div>
            <Image
              src="/assets/img/appointment/appoinment-1.png"
              alt="Online Consultation"
              width={300}
              height={250}
              className="appoinment-1"
            />
            <Image
              src="/assets/img/appointment/appoinment-2.jpg"
              alt="Dentist Support"
              width={500}
              height={400}
              className="appoinment-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;

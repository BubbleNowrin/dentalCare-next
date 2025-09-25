'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import Swal from 'sweetalert2';

const Booking = () => {
  // Phone number validation - only numbers, spaces, +, -, (), allowed
  const validatePhone = (phone) => {
    const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData);

    // Validate dropdowns
    if (!formValues.treatment) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Field',
        text: 'Please select a treatment!',
        confirmButtonColor: '#0BBEF2'
      });
      return;
    }
    if (!formValues.specialists) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Field',
        text: 'Please choose a specialist!',
        confirmButtonColor: '#0BBEF2'
      });
      return;
    }
    if (!formValues.location) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Field',
        text: 'Please select a clinic location!',
        confirmButtonColor: '#0BBEF2'
      });
      return;
    }

    // Validate other fields
    if (!formValues.name.trim()) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Field',
        text: 'Full name is required!',
        confirmButtonColor: '#0BBEF2'
      });
      return;
    }
    if (!formValues.phone.trim()) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Field',
        text: 'Phone number is required!',
        confirmButtonColor: '#0BBEF2'
      });
      return;
    }
    if (!validatePhone(formValues.phone)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Phone Number',
        text: 'Please enter a valid phone number!',
        confirmButtonColor: '#0BBEF2'
      });
      return;
    }
    if (!formValues.datetime) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Field',
        text: 'Please select date and time!',
        confirmButtonColor: '#0BBEF2'
      });
      return;
    }

    // Show success message
    Swal.fire({
      icon: 'success',
      title: 'Booking Confirmed!',
      text: `Thank you ${formValues.name}! Your appointment request has been received. Our team will contact you at ${formValues.phone} shortly to confirm your booking.`,
      confirmButtonText: 'Great!',
      confirmButtonColor: '#0BBEF2',
      showConfirmButton: true,
      timer: 5000,
      timerProgressBar: true
    }).then(() => {
      // Reset form after confirmation
      e.target.reset();
    });
  };

  useEffect(() => {
    // Initialize Nice Select for dropdowns
    const initializeDropdowns = () => {
      if (typeof window !== 'undefined' && window.$ && window.$.fn.niceSelect) {
        window.$('.tp-booking__form select').niceSelect();
      }
    };

    initializeDropdowns();
    const initTimeout = setTimeout(() => {
      initializeDropdowns();
    }, 1000);

    return () => {
      clearTimeout(initTimeout);
      if (typeof window !== 'undefined' && window.$ && window.$.fn.niceSelect) {
        try {
          window.$('.tp-booking__form select').niceSelect('destroy');
        } catch (e) {}
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
              <form onSubmit={handleSubmit}>
                <div className="tp-booking__inputs">
                  
                  {/* Treatment */}
                  <div className="input-wrap">
                    <select name="treatment" id="treatment" defaultValue="">
                      <option value="" disabled>Select Treatment *</option>
                      <option value="general">General Dentistry</option>
                      <option value="cosmetic">Cosmetic Dentistry</option>
                      <option value="implants">Dental Implants</option>
                      <option value="orthodontics">Orthodontics</option>
                      <option value="pediatric">Pediatric Dentistry</option>
                    </select>
                  </div>

                  {/* Specialists */}
                  <div className="input-wrap">
                    <select name="specialists" id="specialists" defaultValue="">
                      <option value="" disabled>Choose Specialist *</option>
                      <option value="orthodontist">Orthodontist</option>
                      <option value="oral_surgeon">Oral Surgeon</option>
                      <option value="pediatric_dentist">Pediatric Dentist</option>
                      <option value="cosmetic_dentist">Cosmetic Dentist</option>
                    </select>
                  </div>

                  {/* Name */}
                  <div className="input-wrap">
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Full Name *" 
                    />
                  </div>

                  {/* Phone */}
                  <div className="input-wrap">
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="Phone Number * (e.g., +1 234-567-8900)" 
                    />
                  </div>

                  {/* Date & Time */}
                  <div className="input-wrap">
                    <input 
                      type="datetime-local" 
                      name="datetime" 
                      placeholder="Preferred Date & Time *" 
                    />
                  </div>

                  {/* Location */}
                  <div className="input-wrap">
                    <select name="location" id="location" defaultValue="">
                      <option value="" disabled>Select Clinic Location *</option>
                      <option value="los_angeles">Los Angeles (Main Branch)</option>
                      <option value="beverly_hills">Beverly Hills</option>
                      <option value="santa_monica">Santa Monica</option>
                      <option value="west_hollywood">West Hollywood</option>
                    </select>
                  </div>

                  {/* Submit */}
                  <div className="input-submit">
                    <input 
                      type="submit" 
                      value="Confirm Appointment" 
                      className="submit tp-btn__1 tp-btn-bg-2" 
                    />
                  </div>

                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Booking;

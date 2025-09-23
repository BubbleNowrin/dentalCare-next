'use client';
import Image from "next/image";
import Link from "next/link";
import Swal from 'sweetalert2';

const Contact = () => {
    
    // Common input styles
    const inputStyles = {
        color: '#333',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        padding: '12px 15px',
        borderRadius: '5px',
        fontSize: '14px',
        width: '100%',
        transition: 'all 0.3s ease',
        outline: 'none'
    };

    const focusStyles = {
        borderColor: '#0BBEF2',
        boxShadow: '0 0 0 3px rgba(11, 190, 242, 0.1)'
    };
    
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData);
        
        // Validate required fields
        if (!formValues.name || !formValues.email || !formValues.message) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all required fields (Name, Email, and Message)!',
                confirmButtonColor: '#0BBEF2'
            });
            return;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formValues.email)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Email',
                text: 'Please enter a valid email address!',
                confirmButtonColor: '#0BBEF2'
            });
            return;
        }
        
        // Show success message
        Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully!',
            text: 'Thank you for contacting us. We will get back to you as soon as possible.',
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

    return  (
        <>
        <section className="breadcrumb__area fixs p-relative breadcrumb__space breadcrumb__bg ">
        <div className="breadcrumb__shape">
          <Image
            src="/assets/img/breadcrumb/breadcrumb-shape.png"
            alt="breadcrumb-shape"
            width={100}
            height={100}
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center p-relative">
                <div className="breadcrumb__list">
                  <span>
                    <Link href="/"> Home </Link>
                  </span>
                  <span className="dvdr"> / </span>
                  <span> Contact </span>
                </div>
                <h3 className="breadcrumb__title">Contact us</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="pt-120 pb-120">
    <div className="container">
        <div className="row">

            {/* <!-- Left Column: Emergency & Appointment --> */}
            <div className="col-xl-5">

                {/* <!-- Emergency Case Card --> */}
                <div className="tp-contact-us-card-emergency">
                    <div className="tp-emergency__card card-1 tp-fade">
                        <h3 className="title">Emergency Case</h3>
                        <div className="para-wrap">
                            <Image src="/assets/img/icon/teeth.svg" alt="Teeth Icon" width={30} height={30} />
                            <p>Dental pain or injury requires immediate attention. Whether it's a sudden toothache or an accident, we are here to help.</p>
                        </div>
                        <div className="contact-box pt-30">
                            <div className="icon">
                                {/* <!-- Phone SVG Icon --> */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.036 11.036 0 003.47.55 1 1 0 011 1v3.5a1 1 0 01-1 1C9.16 21.5 2.5 14.84 2.5 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.22.19 2.41.55 3.47a1 1 0 01-.21 1.11l-2.2 2.21z" fill="#1E1D2B"/>
                                </svg>
                            </div>
                            <div className="contact-wrap">
                                <p>Emergency Support</p>
                                <Link href="tel:18005551234">+1 (800) 222 3333</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Doctors Appointment Card --> */}
                <div className="tp-contact-us-card-appointment mt-40">
                    <div className="tp-emergency__card card-3 tp-fade" data-delay="0.75">
                        <h3 className="title">Doctors Appointment</h3>
                        <div className="para-wrap pb-30">
                            <Image src="/assets/img/icon/calender.svg" alt="Calendar Icon" width={30} height={30} />
                            <p>Our online booking system allows you to reserve your appointment quickly and efficiently.</p>
                        </div>
                        <div className="contact-box">
                            <div className="icon">
                                {/* <!-- Phone SVG Icon --> */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.036 11.036 0 003.47.55 1 1 0 011 1v3.5a1 1 0 01-1 1C9.16 21.5 2.5 14.84 2.5 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.22.19 2.41.55 3.47a1 1 0 01-.21 1.11l-2.2 2.21z" fill="#1E1D2B"/>
                                </svg>
                            </div>
                            <div className="contact-wrap contact-wrap-2">
                                <p>Doctors Appointment</p>
                                <Link href="tel:18008885436">+1 (800) 333-4566</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* <!-- Right Column: Contact Form --> */}
            <div className="col-xl-7 pl-30">
                <div className="tp-contact-area">
                    <div className="tp-contact__form wow fadeInRight" data-wow-delay=".3s" data-wow-duration="1s">
                        <h2 className="pb-15">Let's Talk</h2>
                        <form id="contact-form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tp-contact__input">
                                        <input 
                                            name="name" 
                                            type="text" 
                                            placeholder="First Name" 
                                            required
                                            style={inputStyles}
                                            onFocus={(e) => Object.assign(e.target.style, focusStyles)}
                                            onBlur={(e) => {
                                                e.target.style.borderColor = '#ddd';
                                                e.target.style.boxShadow = 'none';
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="tp-contact__input">
                                        <input 
                                            name="l_name" 
                                            type="text" 
                                            placeholder="Last Name"
                                            style={inputStyles}
                                            onFocus={(e) => Object.assign(e.target.style, focusStyles)}
                                            onBlur={(e) => {
                                                e.target.style.borderColor = '#ddd';
                                                e.target.style.boxShadow = 'none';
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="tp-contact__input">
                                        <input 
                                            name="email" 
                                            type="email" 
                                            placeholder="Email" 
                                            required
                                            style={inputStyles}
                                            onFocus={(e) => Object.assign(e.target.style, focusStyles)}
                                            onBlur={(e) => {
                                                e.target.style.borderColor = '#ddd';
                                                e.target.style.boxShadow = 'none';
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="tp-contact__input">
                                        <input 
                                            name="phone" 
                                            type="text" 
                                            placeholder="Phone Number"
                                            style={inputStyles}
                                            onFocus={(e) => Object.assign(e.target.style, focusStyles)}
                                            onBlur={(e) => {
                                                e.target.style.borderColor = '#ddd';
                                                e.target.style.boxShadow = 'none';
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="tp-contact__input">
                                        <textarea 
                                            name="message" 
                                            placeholder="Enter Message" 
                                            required
                                            style={{
                                                ...inputStyles,
                                                minHeight: '120px',
                                                resize: 'vertical'
                                            }}
                                            onFocus={(e) => Object.assign(e.target.style, focusStyles)}
                                            onBlur={(e) => {
                                                e.target.style.borderColor = '#ddd';
                                                e.target.style.boxShadow = 'none';
                                            }}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <button type="submit" className="tp-btn__5" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'}}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" fill="currentColor"/>
                                        </svg>
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
        </>
    )
    
    
    
}

export default Contact;
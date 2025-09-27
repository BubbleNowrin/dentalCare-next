import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer>
   <section className="tp-footer__area black-bg tp-space-top">
      <div className="container">
          <div className="tp-footer__text p-relative text-center py-5">
         <h2 className="text-white opacity-25 display-1 fw-bold mb-0">DentalCare</h2>
      </div>
         <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-12">
               <div className="tp-footer__widget">
                  <div className="tp-footer__adress-box">
                     <Image 
                        src="/assets/img/logo/logo-light.png" 
                        alt="DentalCare Logo" 
                        width={150} 
                        height={60} 
                        className="mb-4"
                     />
                     <div className="address mb-4">
                        <p className="text-light">
                           DentalCare – Los Angeles <br /> 
                           (Main Branch), 123 Main Street, <br />
                           Downtown, Los Angeles, CA 90012, USA.
                        </p>
                     </div>
                     <div className="tp-copyright__social">
                        <a href="https://www.facebook.com" target="_blank" className="me-3"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0H1.325C0.59375 0 0 0.59375 0 1.325V22.675C0 23.4062 0.59375 24 1.325 24H12.82V14.706H9.692V11.06H12.82V8.413C12.82 5.308 14.64 3.697 17.415 3.697C18.738 3.697 19.884 3.789 20.193 3.828V7.01H18.337C16.88 7.01 16.585 7.72 16.585 8.736V11.06H20.063L19.585 14.706H16.585V24H22.675C23.4062 24 24 23.4062 24 22.675V1.325C24 0.59375 23.4062 0 22.675 0Z"/></svg></a>
                        <a href="https://www.linkedin.com" target="_blank" className="me-3"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0H5C2.25 0 0 2.25 0 5V19C0 21.75 2.25 24 5 24H19C21.75 24 24 21.75 24 19V5C24 2.25 21.75 0 19 0ZM7.5 19H4V9H7.5V19ZM5.75 7.5C4.87891 7.5 4.25 6.87109 4.25 6C4.25 5.12891 4.87891 4.5 5.75 4.5C6.62109 4.5 7.25 5.12891 7.25 6C7.25 6.87109 6.62109 7.5 5.75 7.5ZM20 19H16.5V14.5C16.5 13.6719 16.5 12.5 15 12.5C13.5 12.5 13.25 13.375 13.25 14.4062V19H9.75V9H13.25V10.9062C13.75 10 15.25 9.875 16.25 10.875C17.25 11.875 17.25 13.25 17.25 14.5312V19H20V19Z"/></svg></a>
                        <a href="https://www.twitter.com"  className="me-3"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557C23.117 4.949 22.168 5.213 21.172 5.332C22.189 4.723 22.97 3.758 23.337 2.607C22.386 3.172 21.332 3.58 20.21 3.803C19.313 2.837 18.032 2.25 16.616 2.25C13.437 2.25 11.28 5.126 12.012 8.143C8.087 7.905 4.36 5.896 1.671 2.905C0.381 5.07 1.002 8.042 3.194 9.425C2.388 9.398 1.628 9.174 0.965 8.8C0.911 11.025 2.509 13.052 4.822 13.503C4.094 13.696 3.315 13.731 2.559 13.586C3.191 15.565 5.008 16.97 7.116 17.007C5.261 18.325 2.993 19.062 0.622 18.986C2.74 20.36 5.223 21.047 7.768 21C16.616 21 21.543 13.384 21.543 7.031C21.543 6.805 21.541 6.58 21.535 6.356C22.505 5.663 23.34 4.77 24 3.747V4.557Z"/></svg></a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
               <div className="tp-footer__widget">
                  <h3 className="tp-footer__widget-title mb-4">Quick Links</h3>
                  <div className="tp-footer__list">
                     <Link href="/" className="d-block mb-2">Home</Link>
                     <Link href="/about" className="d-block mb-2">About Us</Link>
                     <Link href="/appointment" className="d-block mb-2">Book Appointment</Link>
                     <Link href="/contact" className="d-block mb-2">Contact</Link>
                  </div>
               </div>
            </div>
            <div className="col-xl-4 col-lg-12 col-md-6">
               <div className="tp-footer__widget">
                  <h3 className="tp-footer__widget-title mb-4">Our Services</h3>
                  <div className="tp-footer__list">
                     <Link href="/services/children-dentistry" className="d-block mb-2">Children's Dentistry</Link>
                     <Link href="/services/cosmetic-dentistry" className="d-block mb-2">Cosmetic Dentistry</Link>
                     <Link href="/services/dental-implants" className="d-block mb-2">Dental Implants</Link>
                     <Link href="/services/orthodontics" className="d-block mb-2">Orthodontics</Link>
                     <Link href="/services/pediatric-dentist" className="d-block mb-2">Pediatric Dentistry</Link>
                  </div>
               </div>
            </div>
         </div>
         
         {/* Contact Info Row */}
         <div className="row mt-5 pt-4 border-top border-secondary">
            <div className="col-xl-6 col-lg-6 col-md-12">
               <div className="tp-footer__contact-box d-flex align-items-center mb-3">
                  <div className="icon me-3">
                     <Image src="/assets/img/icon/phone.svg" alt="Phone Icon" width={20} height={20} />
                  </div>
                  <div className="contact-wrap">
                     <p className="mb-1 text-white small">Emergency Support</p>
                     <a href="tel:18005551234" className="text-white fw-bold">+1 010 444-5555</a>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
               <div className="tp-footer__contact-box d-flex align-items-center mb-3">
                  <div className="icon me-3">
                     <Image src="/assets/img/icon/phone-2.svg" alt="Phone Icon" width={20} height={20} />
                  </div>
                  <div className="contact-wrap">
                     <p className="mb-1 text-white small">Doctor's Appointment</p>
                     <a href="tel:18008885436" className="text-white fw-bold">+1 010 888-9999</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
     
      
      <div className="tp-copyright__style">
         <div className="container">
            <div className="tp-copyright__wrap">
               <div className="row align-items-center py-4">
                  <div className="col-xl-6 col-lg-6 col-md-12">
                     <div className="tp-copyright__text">
                        <p className="text-white mb-0">© 2025 <span className="text-white fw-semibold">DentalCare</span>. All Rights Reserved.</p>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                     <div className="tp-footer__menu text-lg-end">
                        <Link href="/privacy-policy" className="text-white me-4">Privacy Policy</Link>
                        <Link href="/terms" className="text-white me-4">Terms & Conditions</Link>
                        <Link href="/legal-notice" className="text-white">Legal Notice</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</footer>
    );
};

export default Footer;
import Image from "next/image";

const Footer = () => {
    return (
        <footer>
   <section className="tp-footer__area black-bg tp-space-top">
      <div className="container-1850">
         <div className="row g-0">
            <div className="col-xl-6 col-lg-4 col-md-12">
               <div className="tp-footer__widget">
                  <div className="tp-footer__adress-box">
                     <Image src="/assets/img/logo/logo-light.png" alt="DentalCare Logo" width={150} height={60} />
                     <div className="address">
                        <a href="#">DentalCare – Los Angeles <br /> (Main Branch), 123 Main Street, Downtown, Los <br /> Angeles, CA 90012, USA.</a>
                     </div>
                     <div className="tp-copyright__social">
                        <a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0H1.325C0.59375 0 0 0.59375 0 1.325V22.675C0 23.4062 0.59375 24 1.325 24H12.82V14.706H9.692V11.06H12.82V8.413C12.82 5.308 14.64 3.697 17.415 3.697C18.738 3.697 19.884 3.789 20.193 3.828V7.01H18.337C16.88 7.01 16.585 7.72 16.585 8.736V11.06H20.063L19.585 14.706H16.585V24H22.675C23.4062 24 24 23.4062 24 22.675V1.325C24 0.59375 23.4062 0 22.675 0Z"/></svg></a>
                        <a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0H5C2.25 0 0 2.25 0 5V19C0 21.75 2.25 24 5 24H19C21.75 24 24 21.75 24 19V5C24 2.25 21.75 0 19 0ZM7.5 19H4V9H7.5V19ZM5.75 7.5C4.87891 7.5 4.25 6.87109 4.25 6C4.25 5.12891 4.87891 4.5 5.75 4.5C6.62109 4.5 7.25 5.12891 7.25 6C7.25 6.87109 6.62109 7.5 5.75 7.5ZM20 19H16.5V14.5C16.5 13.6719 16.5 12.5 15 12.5C13.5 12.5 13.25 13.375 13.25 14.4062V19H9.75V9H13.25V10.9062C13.75 10 15.25 9.875 16.25 10.875C17.25 11.875 17.25 13.25 17.25 14.5312V19H20V19Z"/></svg></a>
                        <a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557C23.117 4.949 22.168 5.213 21.172 5.332C22.189 4.723 22.97 3.758 23.337 2.607C22.386 3.172 21.332 3.58 20.21 3.803C19.313 2.837 18.032 2.25 16.616 2.25C13.437 2.25 11.28 5.126 12.012 8.143C8.087 7.905 4.36 5.896 1.671 2.905C0.381 5.07 1.002 8.042 3.194 9.425C2.388 9.398 1.628 9.174 0.965 8.8C0.911 11.025 2.509 13.052 4.822 13.503C4.094 13.696 3.315 13.731 2.559 13.586C3.191 15.565 5.008 16.97 7.116 17.007C5.261 18.325 2.993 19.062 0.622 18.986C2.74 20.36 5.223 21.047 7.768 21C16.616 21 21.543 13.384 21.543 7.031C21.543 6.805 21.541 6.58 21.535 6.356C22.505 5.663 23.34 4.77 24 3.747V4.557Z"/></svg></a>
                        <a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557C23.117 4.949 22.168 5.213 21.172 5.332C22.189 4.723 22.97 3.758 23.337 2.607C22.386 3.172 21.332 3.58 20.21 3.803C19.313 2.837 18.032 2.25 16.616 2.25C13.437 2.25 11.28 5.126 12.012 8.143C8.087 7.905 4.36 5.896 1.671 2.905C0.381 5.07 1.002 8.042 3.194 9.425C2.388 9.398 1.628 9.174 0.965 8.8C0.911 11.025 2.509 13.052 4.822 13.503C4.094 13.696 3.315 13.731 2.559 13.586C3.191 15.565 5.008 16.97 7.116 17.007C5.261 18.325 2.993 19.062 0.622 18.986C2.74 20.36 5.223 21.047 7.768 21C16.616 21 21.543 13.384 21.543 7.031C21.543 6.805 21.541 6.58 21.535 6.356C22.505 5.663 23.34 4.77 24 3.747V4.557Z"/></svg></a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
               <div className="tp-footer__widget">
                  <h3 className="tp-footer__widget-title">Quick Links</h3>
                  <div className="tp-footer__list">
                     <a href="#">Company</a>
                     <a href="#">Find Doctors</a>
                     <a href="#">Patient Reviews</a>
                     <a href="#">News & Insights</a>
                     <a href="#">Contact</a>
                  </div>
               </div>
               <div className="tp-footer__contact-box">
                  <div className="icon"><Image src="/assets/img/icon/phone.svg" alt="Phone Icon" width={20} height={20} /></div>
                  <div className="contact-wrap">
                     <p>Emergency Support</p>
                     <a href="tel:18005551234">+1 010 444-5555</a>
                  </div>
               </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6">
               <div class="tp-footer__widget right-align">
                  <h3 class="tp-footer__widget-title">Services</h3>
                  <div class="tp-footer__list">
                     <a href="#">General Dentistry</a>
                     <a href="#">Orthodontist</a>
                     <a href="#">Cosmetic Dentistry</a>
                     <a href="#">Dental Implants</a>
                     <a href="#">Child Dentistry</a>
                  </div>
               </div>
               <div className="tp-footer__contact-box right-align">
                  <div className="icon"><Image src="/assets/img/icon/phone-2.svg" alt="Phone Icon" width={20} height={20} /></div>
                  <div className="contact-wrap">
                     <p>Doctor’s Appointment</p>
                     <a href="tel:18008885436">+1 010 888-9999</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="tp-footer__text p-relative"> DentalCare </div>
      <div class="tp-copyright__style">
         <div class="container-1850">
            <div class="tp-copyright__wrap">
               <div class="row align-items-center">
                  <div class="col-xl-6 col-lg-6 col-md-12">
                     <div class="tp-copyright__text">
                        <p>© 2025 <span>DentalCare</span>. All Rights Reserved.</p>
                     </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-12">
                     <div class="tp-footer__menu">
                        <a href="#">Legal Notice</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
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
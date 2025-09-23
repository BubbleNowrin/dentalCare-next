import Image from 'next/image';
import Link from 'next/link';

const About = () => {
    return <> 
    {/* breadcrumb */}
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
                  <span> About </span>
                </div>
                <h3 className="breadcrumb__title">About Us</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className="tp-about__area tp-space-top  mb-80">
   <div className="container-1850">
      <div className="tp-about__content">
         <div className="top-wrap">
            <Image src="/assets/img/logo/logo-2.png" alt="DentalCare Logo" width={150} height={60} />
            <p>DentalCare – Commitment to Excellence</p>
         </div>
         <h2 className="tp-section-title tp-chars">Visiting the dentist should be a comfortable and confident experience, not a source of worry.</h2>
         <ul>
            <li><Image src="/assets/img/icon/check-2.svg" alt="" width={20} height={20} /> ISO 9001 Certified for Quality Assurance</li>
            <li><Image src="/assets/img/icon/check-2.svg" alt="" width={20} height={20} /> Strict Hygiene and Safety Protocols</li>
            <li><Image src="/assets/img/icon/check-2.svg" alt="" width={20} height={20} /> Award-Winning Dental Specialists</li>
         </ul>
         <div className="img-wrap">
            <Image src="/assets/img/about/about-2.jpg" alt="DentalCare Team" width={600} height={400} data-lag="0" data-speed="auto" />
         </div>
      </div>
   </div>
   <div className="container">
      <div className="row">
         <div className="col-lg-7">
            <div className="tp-about__content-2">
               <h3 className="title">Dedicated to Your Smile</h3>
               <p className="para">At DentalCare, a healthy smile is a gateway to confidence and overall well-being. For over <span>12 years</span>, our experienced dentists, hygienists, and dental specialists have been offering personalized care using state-of-the-art technology in a friendly, gentle environment.</p>
               <div className="inner-wrap">
                  <div className="tp-funfact-box">
                     <h3 className="tp-funfact-number">
                        <span className="purecounter" data-purecounter-start="0" data-purecounter-end="12">12</span><span className="tp-funfact-suffix">+</span>
                     </h3>
                     <h6 className="tp-funfact-title">Years of Expertise in <br/> Dental Care</h6>
                  </div>
                  <div className="tp-award-box">
                     <Image src="/assets/img/about/badge.png" alt="Award Badge" width={80} height={80} />
                     <p>Recognized for Excellence <br/> in Patient Care – 2022</p>
                  </div>
               </div>
               <div className="btn-wrapper">
                  <Link href="/services/dental-implants" className="tp-btn__1 tp-btn-bg-2">Discover Our Treatments
                     <span className="icon">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <mask id="mask0_50_220" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="14">
                              <rect width="14" height="14" fill="#D9D9D9" />
                           </mask>
                           <g mask="url(#mask0_50_220)">
                              <path fillRule="evenodd" clipRule="evenodd" d="M13.3676 1.63776L1.63768 13.3676L0.632266 12.3622L12.3621 0.632339L13.3676 1.63776Z" fill="#1E1D2B" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M11.8594 1.13503C9.49528 3.49911 9.64207 7.51072 11.8594 9.728L12.3621 10.2307L13.3675 9.22529L12.8648 8.72259C11.181 7.03885 11.0771 3.92808 12.8648 2.14045L13.3675 1.63774L12.3621 0.632325L11.8594 1.13503Z" fill="#1E1D2B" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M12.8648 2.14047C10.5008 4.50454 6.48916 4.35775 4.27188 2.14047L3.76917 1.63776L4.77458 0.632339L5.27729 1.13505C6.96036 2.81812 10.0718 2.92268 11.8594 1.13505L12.3621 0.632339L13.3676 1.63776L12.8648 2.14047Z" fill="#1E1D2B" />
                           </g>
                        </svg>
                     </span>
                  </Link>
                  <Link href="/services" className="tp-btn__2">View All Services</Link>
               </div>
            </div>
         </div>
         <div className="col-lg-5">
            <div className="tp-working__hour">
               <h3 className="title">Office Hours</h3>
               <div className="para-wrap">
                  <Image src="/assets/img/icon/teeth-3.svg" alt="Dental Icon" width={30} height={30} />
                  <p>We make it easy to schedule appointments and maintain your dental health.</p>
               </div>
               <ul>
                  <li>Monday-Thursday <span>8:30 - 19:30</span></li>
                  <li>Friday <span>9:30 - 18:30</span></li>
                  <li>Saturday <span>7:30 - 19:30</span></li>
                  <li>Sunday <span>Closed</span></li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>
    </>
}

export default About;
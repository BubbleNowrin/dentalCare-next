"use client";

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Close mobile menu on escape key press
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                closeMobileMenu();
            }
        };
        
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <div>
            <header className="z-index-2">
      <div id="header-sticky" className="tp-header-top-area tp-header__style-1">
         <div className="container-1850">
            <div className="row align-items-center g-0">
               <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">
                  <div className="tp-main__logo">
                     <Link href="/">
                        <Image src="/assets/img/logo/logo.png" alt="Logo" width={150} height={60} />
                     </Link>
                  </div>
               </div>
               <div className="col-xl-6 col-lg-6 d-none d-xl-block">
                  <div className="tp-main__menu d-flex justify-content-center">
                     <nav>
                        <ul>
                           <li><Link href="/"> Home </Link>
                              
                           </li>
                           <li><Link href="/about"> About Us </Link></li>
                           <li ><Link href="/services"> Our Services </Link>
                              <ul className="tp-submenu">
                                 <li>
                                    <Link href="/services/orthodontics"> Orthodontics </Link>
                                 </li>
                                 <li>
                                    <Link href="/services/pediatric-dentist"> Pediatric Dentist </Link>
                                 </li>
                                 <li>
                                    <Link href="/services/children-dentistry"> Children’s Dentistry </Link>
                                 </li>
                                 <li>
                                    <Link href="/services/dental-implants"> Dental Implants </Link>
                                 </li>
                                 <li>
                                    <Link href="/services/cosmetic-dentistry"> Cosmetic Dentistry </Link>
                                 </li>
                              </ul>
                           </li>
                           <li> <Link href="/appointment"> Appointment </Link></li>

                           <li><Link href="/contact"> Contact Us </Link></li>
                        </ul>
                     </nav>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6 d-none d-xl-block">
                  <div className="tp-header__right d-flex justify-content-end">
                     <div className="tp-header__action">
                        <ul>
                           {/* <li>
                              <button className="tp-header__search-btn tp-search-open-btn">
                                 <span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          d="M18.9007 17.5992L16.3065 15.0142C17.7129 13.2768 18.3989 11.066 18.2232 8.83766C18.0475 6.60934 17.0234 4.5334 15.3622 3.0379C13.7009 1.5424 11.5291 0.741378 9.29467 0.800002C7.0602 0.858626 4.93341 1.77243 3.35286 3.35298C1.77231 4.93353 0.858504 7.06032 0.79988 9.29479C0.741256 11.5293 1.54228 13.701 3.03778 15.3623C4.53328 17.0235 6.60922 18.0476 8.83754 18.2233C11.0659 18.399 13.2767 17.713 15.014 16.3067L17.599 18.9008C17.6843 18.9867 17.7856 19.0549 17.8973 19.1015C18.0091 19.148 18.1289 19.172 18.2499 19.172C18.3709 19.172 18.4907 19.148 18.6024 19.1015C18.7141 19.0549 18.8155 18.9867 18.9007 18.9008C18.9866 18.8156 19.0548 18.7142 19.1014 18.6025C19.1479 18.4908 19.1719 18.371 19.1719 18.25C19.1719 18.129 19.1479 18.0092 19.1014 17.8975C19.0548 17.7858 18.9866 17.6844 18.9007 17.5992ZM2.66655 9.54167C2.66655 8.18192 3.06976 6.85271 3.82519 5.72212C4.58063 4.59153 5.65436 3.71035 6.9106 3.19C8.16684 2.66964 9.54917 2.5335 10.8828 2.79877C12.2164 3.06404 13.4414 3.71882 14.4029 4.68031C15.3644 5.64179 16.0192 6.8668 16.2844 8.20042C16.5497 9.53404 16.4136 10.9164 15.8932 12.1726C15.3729 13.4289 14.4917 14.5026 13.3611 15.258C12.2305 16.0135 10.9013 16.4167 9.54155 16.4167C7.71818 16.4167 5.9695 15.6923 4.68019 14.403C3.39087 13.1137 2.66655 11.365 2.66655 9.54167Z" />
                                    </svg>
                                 </span>
                              </button>
                           </li> */}
                           <li>
                              <Link href="/appointment" className="tp-btn__1 tp-btn-bg-1">Schedule a Checkup
                                 <span className="icon">
                                    <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                       <mask id="mask0_50_218" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0"
                                          y="0" width="14" height="14">
                                          <rect width="14" height="14" fill="#D9D9D9" />
                                       </mask>
                                       <g mask="url(#mask0_50_218)">
                                          <path fillRule="evenodd" clipRule="evenodd"
                                             d="M13.3676 1.63776L1.63768 13.3676L0.632266 12.3622L12.3621 0.632339L13.3676 1.63776Z" />
                                          <path fillRule="evenodd" clipRule="evenodd"
                                             d="M11.8594 1.13503C9.49528 3.49911 9.64207 7.51072 11.8594 9.728L12.3621 10.2307L13.3675 9.22529L12.8648 8.72259C11.181 7.03885 11.0771 3.92808 12.8648 2.14045L13.3675 1.63774L12.3621 0.632325L11.8594 1.13503Z" />
                                          <path fillRule="evenodd" clipRule="evenodd"
                                             d="M12.8648 2.14047C10.5008 4.50454 6.48916 4.35775 4.27188 2.14047L3.76917 1.63776L4.77458 0.632339L5.27729 1.13505C6.96036 2.81812 10.0718 2.92268 11.8594 1.13505L12.3621 0.632339L13.3676 1.63776L12.8648 2.14047Z" />
                                       </g>
                                    </svg>
                                 </span>
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-xl-none d-lg-block">
                  <div className="tp-header__right d-flex justify-content-end">
                     <div className="tp-header__action">
                        <ul>
                           <li>
                              <button 
                                 className="tp-header__burs-btn tp-offcanvas-open-btn"
                                 onClick={toggleMobileMenu}
                                 aria-label="Toggle mobile menu"
                              >
                                 <span>
                                    <svg width="28" height="26" viewBox="0 0 28 26" xmlns="http://www.w3.org/2000/svg">
                                       <ellipse cx="2.39023" cy="2.39022" rx="2.39023" ry="2.39022" />
                                       <ellipse cx="13.9137" cy="2.39022" rx="2.39023" ry="2.39022"
                                          fillOpacity="0.7" />
                                       <ellipse cx="25.441" cy="2.39022" rx="2.39023" ry="2.39022" fillOpacity="0.7" />
                                       <ellipse cx="2.39023" cy="12.6339" rx="2.39023" ry="2.39022"
                                          fillOpacity="0.7" />
                                       <ellipse cx="13.9137" cy="12.6349" rx="2.39023" ry="2.39022" />
                                       <ellipse cx="25.441" cy="12.6349" rx="2.39023" ry="2.39022" fillOpacity="0.7" />
                                       <ellipse cx="2.39023" cy="23.0484" rx="2.39023" ry="2.39022"
                                          fillOpacity="0.7" />
                                       <ellipse cx="13.9996" cy="23.0484" rx="2.39023" ry="2.39022"
                                          fillOpacity="0.7" />
                                       <ellipse cx="25.609" cy="23.0484" rx="2.39023" ry="2.39022" />
                                    </svg>
                                 </span>
                              </button>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>

   {/* Mobile Offcanvas Menu */}
   <div className={`tp-offcanvas__area ${isMobileMenuOpen ? 'offcanvas-opened' : ''}`}>
      <div className="tp-offcanvas__wrapper">
         <button 
            className="tp-offcanvas__close-btn"
            onClick={closeMobileMenu}
            aria-label="Close mobile menu"
         >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M15.625 5.09375L14.4062 3.875L10 8.28125L5.59375 3.875L4.375 5.09375L8.78125 9.5L4.375 13.9062L5.59375 15.125L10 10.7188L14.4062 15.125L15.625 13.9062L11.2188 9.5L15.625 5.09375Z" fill="currentColor"/>
            </svg>
         </button>
         
         <div className="tp-offcanvas__inner">
            <div className="tp-offcanvas__logo">
               <Link href="/" onClick={closeMobileMenu}>
                  <Image src="/assets/img/logo/logo-light.png" alt="DentalCare Logo" width={120} height={48} />
               </Link>
            </div>
            
            <nav className="tp-offcanvas__menu">
               <ul>
                  <li>
                     <Link href="/" onClick={closeMobileMenu}>Home</Link>
                  </li>
                  <li>
                     <Link href="/about" onClick={closeMobileMenu}>About Us</Link>
                  </li>
                  <li>
                     <div style={{
                        color: 'rgba(255, 255, 255, 0.9)', 
                        fontWeight: '600', 
                        fontSize: '18px',
                        marginBottom: '10px',
                        paddingBottom: '8px',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                     }}>
                        🦷 Our Services
                     </div>
                     <ul className="tp-offcanvas__submenu">
                        <li>
                           <Link href="/services/orthodontics" onClick={closeMobileMenu}>
                              <span style={{marginRight: '8px'}}>→</span>Orthodontics
                           </Link>
                        </li>
                        <li>
                           <Link href="/services/pediatric-dentist" onClick={closeMobileMenu}>
                              <span style={{marginRight: '8px'}}>→</span>Pediatric Dentist
                           </Link>
                        </li>
                        <li>
                           <Link href="/services/children-dentistry" onClick={closeMobileMenu}>
                              <span style={{marginRight: '8px'}}>→</span>Children's Dentistry
                           </Link>
                        </li>
                        <li>
                           <Link href="/services/dental-implants" onClick={closeMobileMenu}>
                              <span style={{marginRight: '8px'}}>→</span>Dental Implants
                           </Link>
                        </li>
                        <li>
                           <Link href="/services/cosmetic-dentistry" onClick={closeMobileMenu}>
                              <span style={{marginRight: '8px'}}>→</span>Cosmetic Dentistry
                           </Link>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <Link href="/appointment" onClick={closeMobileMenu}>Appointment</Link>
                  </li>
                  <li>
                     <Link href="/contact" onClick={closeMobileMenu}>Contact Us</Link>
                  </li>
               </ul>
            </nav>

            <div className="tp-offcanvas__contact">
               <h4 style={{color: 'white', marginBottom: '20px', fontSize: '18px'}}>Contact Info</h4>
               <div className="tp-offcanvas__contact-content">
                  <div className="tp-offcanvas__contact-content-content">
                     <span>Emergency Support</span>
                     <a href="tel:+10104445555">+1 010 444-5555</a>
                  </div>
               </div>
               <div className="tp-offcanvas__contact-content">
                  <div className="tp-offcanvas__contact-content-content">
                     <span>Book Appointment</span>
                     <a href="tel:+10108889999">+1 010 888-9999</a>
                  </div>
               </div>
            </div>

            <div className="tp-offcanvas__social">
               <h4 style={{color: 'white', marginBottom: '15px', fontSize: '18px'}}>Follow Us</h4>
               <a href="#" aria-label="Facebook">📘</a>
               <a href="#" aria-label="Twitter">🐦</a>
               <a href="#" aria-label="LinkedIn">💼</a>
               <a href="#" aria-label="Instagram">📸</a>
            </div>
         </div>
      </div>
   </div>

   {/* Mobile Menu Overlay */}
   {isMobileMenuOpen && (
      <div 
         className="tp-offcanvas__overlay"
         onClick={closeMobileMenu}
         style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999
         }}
      />
   )}

   <style jsx global>{`
      .tp-header__burs-btn {
         padding: 8px 12px !important;
         margin-top: 10px !important;
      }
      
      .tp-offcanvas__area {
         overflow-y: auto !important;
         z-index: 1050 !important;
      }
      
      .tp-offcanvas__wrapper {
         padding: 30px;
         height: 100%;
         overflow-y: auto;
      }
      
      .tp-offcanvas__inner {
         color: white;
      }
      
      .tp-offcanvas__menu ul {
         list-style: none;
         padding: 0;
         margin: 0;
      }
      
      .tp-offcanvas__menu ul li {
         list-style: none;
         margin-bottom: 15px;
         border-bottom: 1px solid rgba(255, 255, 255, 0.1);
         padding-bottom: 10px;
      }
      
      .tp-offcanvas__menu ul li a {
         font-weight: 600;
         font-size: 18px;
         color: white !important;
         text-decoration: none;
         display: block;
         padding: 8px 0;
         transition: color 0.3s ease;
      }
      
      .tp-offcanvas__menu ul li a:hover {
         color: var(--tp-theme-primary, #007bff) !important;
      }
      
      .tp-offcanvas__submenu {
         display: block;
         padding: 15px 20px;
         margin: 10px 0 15px 0;
         background: rgba(255, 255, 255, 0.05);
         border-radius: 8px;
         border-left: 3px solid var(--tp-theme-primary, #007bff);
      }
      
      .tp-offcanvas__submenu li {
         margin-bottom: 8px;
         border-bottom: none;
         padding-bottom: 5px;
      }
      
      .tp-offcanvas__submenu li:last-child {
         margin-bottom: 0;
      }
      
      .tp-offcanvas__submenu li a {
         font-size: 15px;
         color: rgba(255, 255, 255, 0.85) !important;
         font-weight: 400;
         padding: 5px 0;
      }
      
      .tp-offcanvas__submenu li a:hover {
         color: var(--tp-theme-primary, #007bff) !important;
         padding-left: 5px;
      }
      
      .tp-offcanvas__close-btn {
         position: absolute;
         top: 15px;
         right: 60px;
         background: rgba(255, 255, 255, 0.1);
         border: none;
         color: white;
         font-size: 20px;
         cursor: pointer;
         z-index: 1051;
         width: 40px;
         height: 40px;
         border-radius: 50%;
         display: flex;
         align-items: center;
         justify-content: center;
         transition: background-color 0.3s ease;
      }
      
      .tp-offcanvas__close-btn:hover {
         background: rgba(255, 255, 255, 0.2);
      }
      
      .tp-offcanvas__logo {
         margin-bottom: 30px;
         padding-bottom: 20px;
         border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .tp-offcanvas__social a {
         display: inline-block;
         margin-right: 15px;
         color: white;
         font-size: 18px;
         transition: color 0.3s ease;
      }
      
      .tp-offcanvas__social a:hover {
         color: var(--tp-theme-primary, #007bff);
      }
      
      .tp-offcanvas__contact-content {
         display: flex;
         align-items: center;
         gap: 15px;
         margin-bottom: 15px;
      }
      
      .tp-offcanvas__contact-content-content {
         display: flex;
         flex-direction: column;
      }
      
      .tp-offcanvas__contact-content-content span {
         font-size: 14px;
         color: rgba(255, 255, 255, 0.7);
         margin-bottom: 5px;
      }
      
      .tp-offcanvas__contact-content-content a {
         color: white;
         font-weight: 600;
         text-decoration: none;
      }
      
      .tp-offcanvas__overlay {
         position: fixed;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         background-color: rgba(0, 0, 0, 0.5);
         z-index: 1040;
      }
   `}</style>
        </div>
    );
};

export default Navbar;
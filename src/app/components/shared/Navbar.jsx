
import Image from "next/image";
import Link from "next/link";
                                   

const Navbar = () => {
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
                           <li>
                              <button className="tp-header__search-btn tp-search-open-btn">
                                 <span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          d="M18.9007 17.5992L16.3065 15.0142C17.7129 13.2768 18.3989 11.066 18.2232 8.83766C18.0475 6.60934 17.0234 4.5334 15.3622 3.0379C13.7009 1.5424 11.5291 0.741378 9.29467 0.800002C7.0602 0.858626 4.93341 1.77243 3.35286 3.35298C1.77231 4.93353 0.858504 7.06032 0.79988 9.29479C0.741256 11.5293 1.54228 13.701 3.03778 15.3623C4.53328 17.0235 6.60922 18.0476 8.83754 18.2233C11.0659 18.399 13.2767 17.713 15.014 16.3067L17.599 18.9008C17.6843 18.9867 17.7856 19.0549 17.8973 19.1015C18.0091 19.148 18.1289 19.172 18.2499 19.172C18.3709 19.172 18.4907 19.148 18.6024 19.1015C18.7141 19.0549 18.8155 18.9867 18.9007 18.9008C18.9866 18.8156 19.0548 18.7142 19.1014 18.6025C19.1479 18.4908 19.1719 18.371 19.1719 18.25C19.1719 18.129 19.1479 18.0092 19.1014 17.8975C19.0548 17.7858 18.9866 17.6844 18.9007 17.5992ZM2.66655 9.54167C2.66655 8.18192 3.06976 6.85271 3.82519 5.72212C4.58063 4.59153 5.65436 3.71035 6.9106 3.19C8.16684 2.66964 9.54917 2.5335 10.8828 2.79877C12.2164 3.06404 13.4414 3.71882 14.4029 4.68031C15.3644 5.64179 16.0192 6.8668 16.2844 8.20042C16.5497 9.53404 16.4136 10.9164 15.8932 12.1726C15.3729 13.4289 14.4917 14.5026 13.3611 15.258C12.2305 16.0135 10.9013 16.4167 9.54155 16.4167C7.71818 16.4167 5.9695 15.6923 4.68019 14.403C3.39087 13.1137 2.66655 11.365 2.66655 9.54167Z" />
                                    </svg>
                                 </span>
                              </button>
                           </li>
                           <li>
                              <a href="contact.html" className="tp-btn__1 tp-btn-bg-1">Schedule a Checkup
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
                              </a>
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
                              <button className="tp-header__burs-btn tp-offcanvas-open-btn">
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
        </div>
    );
};

export default Navbar;
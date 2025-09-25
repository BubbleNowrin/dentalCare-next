import Image from "next/image";
import Link from "next/link";
import FAQAccordion from "./FAQAccordion";

const PediatricDentist = () => {
    return (
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
                  <span> Pediatric Dentistry </span>
                </div>
                <h3 className="breadcrumb__title">Pediatric Dentistry</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
           <section className="tp-service-details-area fix pt-120">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-xl-4 col-lg-5">
            <div className="tp-service-details-sidebar">
              <div className="tp-service-details-services">
                <div className="tp-service-details-sidebar-title">Pediatric Dental Services</div>
                <div className="tp-service-details-services-list">
                  <ul>
                    <li>
                      <p>
                        First Dental Visit & Exams
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 12L12 2M12 2H2M12 2V12"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </p>
                    </li>
                    <li>
                      <p>
                        Preventive Cleanings & Fluoride
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 12L12 2M12 2H2M12 2V12"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </p>
                    </li>
                    <li>
                      <p>
                        Dental Sealants
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 12L12 2M12 2H2M12 2V12"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </p>
                    </li>
                    <li>
                      <p>
                        Tooth-Colored Fillings
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 12L12 2M12 2H2M12 2V12"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </p>
                    </li>
                    <li>
                      <p>
                        Special Needs Dentistry
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 12L12 2M12 2H2M12 2V12"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="tp-service-details-contact">
  <div className="tp-service-details-sidebar-title">Book a Pediatric Appointment</div>
  <p className="pt-15 pb-15 tp-service-details-appointment">
    Monday – Friday: 8AM – 6PM<br />Saturday: 9AM – 1PM
  </p>

  <div className="tp-service-details-sidebar-info">
    {/* Phone Contact */}
    <div className="d-flex align-items-center mb-25">
      <div className="tp-service-details-sidebar-contact-icon flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2 6.5C2 15 9 22 17.5 22a1.5 1.5 0 001.5-1.5v-3a1 1 0 00-.76-.97l-3.5-.88a1 1 0 00-1.1.44l-1.2 1.9a16 16 0 01-7.08-7.08l1.9-1.2a1 1 0 00.44-1.1l-.88-3.5A1 1 0 005.5 5H2.5A.5.5 0 002 5.5v1z"
          />
        </svg>
      </div>
      <div className="tp-service-details-sidebar-contact-info ml-3">
        <span>Call for pediatric care</span>
        <p>
          <a href="tel:1800-KIDS-01">1800-KIDS-01</a>
        </p>
      </div>
    </div>

    {/* Email Contact */}
    <div className="d-flex align-items-center">
      <div className="tp-service-details-sidebar-contact-icon flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2zm0 0l8 5 8-5"
          />
        </svg>
      </div>
      <div className="tp-service-details-sidebar-contact-info ml-3">
        <span>Email our pediatric team</span>
        <p>
          <a href="mailto:kidsmile@dentalcare.com">kidsmile@dentalcare.com</a>
        </p>
      </div>
    </div>
  </div>
</div>


            </div>
          </div>

          {/* Main Content */}
          <div className="col-xl-8 col-lg-7">
            <div className="tp-service-details-content-area md:pl-50 pb-100">
              <div className="tp-service-details-thumb">
                <img
                  className="img-fluid"
                  src="/assets/img/service/service-details-3.jpg"
                  alt="Pediatric Dentistry"
                />
              </div>

              <div className="tp-service-details-content">
                <h1 className="pt-30 pb-15">
                  Pediatric Dentistry: Gentle Care for Growing Smiles
                </h1>
                <p>
                  Pediatric dentistry focuses on the oral health of infants, children, and adolescents—including those with special health care needs. Our pediatric dental team is dedicated to making every visit a positive, comfortable, and educational experience for your child. We use gentle techniques, child-friendly language, and a welcoming environment to help kids develop healthy habits for life.
                </p>
                <p>
                  From your baby's first tooth to their teenage years, we provide comprehensive preventive and restorative care, including exams, cleanings, sealants, fluoride treatments, fillings, and more. Our goal is to ensure your child's smile stays healthy and bright at every stage of development.
                </p>

                <h1 className="pt-30 pb-15">Why Choose Our Pediatric Dental Care?</h1>
                <p>
                  We understand that every child is unique. Our pediatric dental services are designed to meet the needs of children and parents alike:
                </p>
                <div className="tp-service-details-checklist">
                  <ul>
                    <li>
                      <img
                        src="/assets/img/icon/check.svg"
                        alt="Check Icon"
                        style={{
                          width: "16px",
                          height: "16px",
                          verticalAlign: "middle",
                        }}
                      />{" "}
                      Kid-friendly, welcoming environment
                    </li>
                    <li>
                      <img
                        src="/assets/img/icon/check.svg"
                        alt="Check Icon"
                        style={{
                          width: "16px",
                          height: "16px",
                          verticalAlign: "middle",
                        }}
                      />{" "}
                      Preventive care: exams, cleanings, sealants, fluoride
                    </li>
                    <li>
                      <img
                        src="/assets/img/icon/check.svg"
                        alt="Check Icon"
                        style={{
                          width: "16px",
                          height: "16px",
                          verticalAlign: "middle",
                        }}
                      />{" "}
                      Gentle restorative treatments (fillings, crowns)
                    </li>
                    <li>
                      <img
                        src="/assets/img/icon/check.svg"
                        alt="Check Icon"
                        style={{
                          width: "16px",
                          height: "16px",
                          verticalAlign: "middle",
                        }}
                      />{" "}
                      Education for parents and children
                    </li>
                    <li>
                      <img
                        src="/assets/img/icon/check.svg"
                        alt="Check Icon"
                        style={{
                          width: "16px",
                          height: "16px",
                          verticalAlign: "middle",
                        }}
                      />{" "}
                      Special needs dentistry available
                    </li>
                  </ul>
                </div>

                <h1 className="pt-30">What to Expect at Your Child's Visit</h1>
                <div className="row">
                  <div className="col-xl-4">
                    <div className="tp-service-detials-process mt-40">
                      <h4 className="pt-40 pb-15">Warm Welcome & Exam</h4>
                      <p>
                        We greet your child and help them feel at ease. The dentist performs a gentle exam and cleaning, explaining each step in a fun, reassuring way.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="tp-service-detials-process mt-40">
                      <h4 className="pt-40 pb-15">Preventive & Restorative Care</h4>
                      <p>
                        We provide preventive treatments (sealants, fluoride) and, if needed, gentle restorative care. Parents receive tips for home care and nutrition.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="tp-service-detials-process mt-40">
                      <h4 className="pt-35 pb-20">Ongoing Support & Growth</h4>
                      <p>
                        We track your child's dental development, provide regular checkups, and are always here to answer questions as your child grows.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="pt-40">
                  Ready to schedule your child's visit? Contact us today for gentle, expert pediatric dental care!
                </p>

          
             <FAQAccordion/>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    );
}

export default PediatricDentist;
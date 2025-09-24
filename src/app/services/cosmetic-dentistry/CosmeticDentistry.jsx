import Image from "next/image";
import Link from "next/link";
import FAQAccordion from "./FAQAccordion";

const CosmeticDentistry = () => {
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
                  <span> Cosmetic Dentistry </span>
                </div>
                <h3 className="breadcrumb__title">Cosmetic Dentistry</h3>
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
                <div className="tp-service-details-sidebar-title">Our Services</div>
                <div className="tp-service-details-services-list">
                  <ul>
                    <li>
                      <p>
                        Teeth Whitening
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
                        Porcelain Veneers
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
                        Dental Bonding
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
                        Invisalign & Clear Aligners
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
                        Smile Makeovers
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
  <div className="tp-service-details-sidebar-title">Book Appointment</div>
  <p className="pt-15 pb-15 tp-service-details-appointment">
    9AM - 8PM ( Mon Day - Fri Day )
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
        <span>Call us at</span>
        <p>
          <a href="tel:099-762-472-96">+(099) 762 472 96</a>
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
        <span>Email us on</span>
        <p>
          <a href="mailto:Infoadress@gmail.com">Infoadress@gmail.com</a>
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
                  src="/assets/img/service/service-details-6.jpg"
                  alt="Cosmetic Dentistry"
                />
              </div>

              <div className="tp-service-details-content">
                <h1 className="pt-30 pb-15">
                  Cosmetic Dentistry: Transform Your Smile
                </h1>
                <p>
                  Our cosmetic dentistry services are designed to enhance the appearance of your teeth and boost your confidence. Whether you want a brighter smile, straighter teeth, or a complete smile makeover, our experienced team uses advanced techniques and materials to deliver stunning, natural-looking results.
                </p>
                <p>
                  We offer personalized treatment plans tailored to your goals, ensuring every detail of your smile is perfected. From subtle changes to dramatic transformations, we are committed to helping you achieve the smile of your dreams.
                </p>

                <h1 className="pt-30 pb-15">Key Features of Our Cosmetic Dentistry</h1>
                <p>
                  Explore our full range of cosmetic dental solutions:
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
                      Professional Teeth Whitening
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
                      Porcelain Veneers & Lumineers
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
                      Dental Bonding & Contouring
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
                      Invisalign & Clear Aligners
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
                      Smile Makeovers
                    </li>
                  </ul>
                </div>

                <h1 className="pt-30">What to Expect: Our Cosmetic Process</h1>
                <div className="row">
                  <div className="col-xl-4">
                    <div className="tp-service-detials-process mt-40">
                      <h4 className="pt-40 pb-15">Consultation & Smile Design</h4>
                      <p>
                        We start with a comprehensive consultation and digital smile design to understand your goals and create a customized treatment plan.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="tp-service-detials-process mt-40">
                      <h4 className="pt-40 pb-15">Treatment & Transformation</h4>
                      <p>
                        Our skilled dentists perform your chosen cosmetic procedures with precision and artistry, using the latest materials and technology.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="tp-service-detials-process mt-40">
                      <h4 className="pt-35 pb-20">Reveal & Maintain Your Smile</h4>
                      <p>
                        See your new smile! We provide guidance on maintaining your results and offer follow-up care to keep your smile beautiful for years to come.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="pt-40">
                  Ready to transform your smile? Schedule a cosmetic dentistry consultation today and take the first step toward a more radiant, confident you.
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

export default CosmeticDentistry;

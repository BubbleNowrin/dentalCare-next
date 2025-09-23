import Image from "next/image";
import Link from "next/link";

const ChildrenDentistry = () => {
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
                  <span> Children's Dentistry </span>
                </div>
                <h3 className="breadcrumb__title">Children's Dentistry</h3>
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
                      <a href="#">
                        Preventive Dental Care
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
                      </a>
                    </li>
                    <li>
                      <a href="#">
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
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Fluoride Treatments
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
                      </a>
                    </li>
                    <li>
                      <a href="#">
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
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Emergency Dental Care
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
                      </a>
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
                  <div className="d-flex align-items-center mb-25">
                    <div className="tp-service-details-sidebar-contact-icon">
                      <span>
                        <img
                          src="assets/img/icon/phone.svg"
                          alt="Phone Icon"
                          style={{ width: "18px", height: "18px" }}
                        />
                      </span>
                    </div>
                    <div className="tp-service-details-sidebar-contact-info">
                      <span>Call us at</span>
                      <p>
                        <a href="tel:099-762-472-96">+(099) 762 472 96</a>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="tp-service-details-sidebar-contact-icon">
                      <span>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="24" height="24" rx="4" fill="#F3F4F6" />
                          <path
                            d="M4 7.5V16.5C4 17.3284 4.67157 18 5.5 18H18.5C19.3284 18 20 17.3284 20 16.5V7.5C20 6.67157 19.3284 6 18.5 6H5.5C4.67157 6 4 6.67157 4 7.5Z"
                            stroke="#1E1D2B"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M4 8L12 13L20 8"
                            stroke="#1E1D2B"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="tp-service-details-sidebar-contact-info">
                      <span>Email us on</span>
                      <p>
                        <a href="mailto:Infoadress@gmail.com">
                          Infoadress@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-xl-8 col-lg-7">
            <div className="tp-service-details-content-area pl-50 pb-100">
              <div className="tp-service-details-thumb">
                <img
                  className="img-fluid"
                  src="assets/img/service/service-details-4.jpg"
                  alt="Children's Dentistry"
                />
              </div>

              <div className="tp-service-details-content">
                <h1 className="pt-30 pb-15">
                  Children’s Dentistry: Gentle Care for Growing Smiles
                </h1>
                <p>
                  Our children’s dentistry services are designed to create a
                  positive, comfortable experience for kids of all ages. We
                  focus on preventive care, education, and gentle treatments to
                  help children develop healthy dental habits that last a
                  lifetime.
                </p>
                <p>
                  From your child’s first dental visit to routine checkups, our
                  friendly team is dedicated to making every appointment fun and
                  stress-free. We use kid-friendly language, modern technology,
                  and a compassionate approach to ensure your child’s comfort
                  and confidence.
                </p>

                <h1 className="pt-30 pb-15">Key Features of Our Children’s Dentistry</h1>
                <p>
                  We offer a full range of pediatric dental services to protect
                  and nurture your child’s smile:
                </p>
                <div className="tp-service-details-checklist">
                  <ul>
                    <li>
                      <img
                        src="assets/img/icon/check.svg"
                        alt="Check Icon"
                        style={{
                          width: "16px",
                          height: "16px",
                          verticalAlign: "middle",
                        }}
                      />{" "}
                      Preventive Exams & Cleanings
                    </li>
                    <li>
                      <img
                        src="assets/img/icon/check.svg"
                        alt="Check Icon"
                        style={{
                          width: "16px",
                          height: "16px",
                          verticalAlign: "middle",
                        }}
                      />{" "}
                      Dental Sealants for Cavity Protection
                    </li>
                    <li>
                      <img
                        src="assets/img/icon/check.svg"
                        alt="Check Icon"
                        style={{
                          width: "16px",
                          height: "16px",
                          verticalAlign: "middle",
                        }}
                      />{" "}
                      Fluoride Treatments
                    </li>
                    <li>
                      <img
                        src="assets/img/icon/check.svg"
                        alt="Check Icon"
                        style={{
                          width: "16px",
                          height: "16px",
                          verticalAlign: "middle",
                        }}
                      />{" "}
                      Tooth-Colored Fillings
                    </li>
                    <li>
                      <img
                        src="assets/img/icon/check.svg"
                        alt="Check Icon"
                        style={{
                          width: "16px",
                          height: "16px",
                          verticalAlign: "middle",
                        }}
                      />{" "}
                      Emergency Dental Care
                    </li>
                  </ul>
                </div>

                <h1 className="pt-30">What to Expect: Our Process</h1>
                <div className="row">
                  <div className="col-xl-4">
                    <div className="tp-service-detials-process mt-40">
                      <h4 className="pt-40 pb-15">First Visit & Exam</h4>
                      <p>
                        We welcome your child with a gentle exam, oral health
                        education, and tips for brushing and flossing at home.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="tp-service-detials-process mt-40">
                      <h4 className="pt-40 pb-15">Preventive Care</h4>
                      <p>
                        Regular cleanings, sealants, and fluoride treatments
                        help keep your child’s teeth strong and cavity-free.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="tp-service-detials-process mt-40">
                      <h4 className="pt-35 pb-20">Restorative & Emergency Care</h4>
                      <p>
                        If your child needs a filling or urgent care, we provide
                        gentle, effective treatment to restore their smile
                        quickly and comfortably.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="pt-40">
                  We are committed to making dental visits positive and
                  educational for your child. Schedule an appointment today to
                  give your child the gift of a healthy, happy smile!
                </p>

                {/* FAQ Accordion */}
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-service-detials-faq">
                      <h1 className="pt-30 pb-30"> Find your answers here </h1>
                      <div className="tp-accordion">
                        <div className="accordion" id="accordionExample2">
                          {/* FAQ item */}
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFive"
                                aria-expanded="false"
                                aria-controls="collapseFive"
                              >
                                When should my child have their first dental visit?
                              </button>
                            </h2>
                            <div
                              id="collapseFive"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExample2"
                            >
                              <div className="accordion-body">
                                <p>
                                  The American Academy of Pediatric Dentistry
                                  recommends a first dental visit by age one or
                                  within six months after the first tooth
                                  erupts.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseSix"
                                aria-expanded="false"
                                aria-controls="collapseSix"
                              >
                                How can I help my child prevent cavities?
                              </button>
                            </h2>
                            <div
                              id="collapseSix"
                              className="accordion-collapse collapse show"
                              data-bs-parent="#accordionExample2"
                            >
                              <div className="accordion-body">
                                <p>
                                  Encourage regular brushing and flossing, limit
                                  sugary snacks and drinks, and schedule routine
                                  dental checkups and cleanings.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseSeven"
                                aria-expanded="false"
                                aria-controls="collapseSeven"
                              >
                                Are dental x-rays safe for children?
                              </button>
                            </h2>
                            <div
                              id="collapseSeven"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExample2"
                            >
                              <div className="accordion-body">
                                <p>
                                  Yes, dental x-rays use very low levels of
                                  radiation and are considered safe. We use
                                  digital x-rays to minimize exposure and only
                                  take them when necessary.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseEight"
                                aria-expanded="false"
                                aria-controls="collapseEight"
                              >
                                What if my child is anxious about visiting the dentist?
                              </button>
                            </h2>
                            <div
                              id="collapseEight"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExample2"
                            >
                              <div className="accordion-body">
                                <p>
                                  We specialize in helping children feel
                                  comfortable and safe. Our team uses gentle
                                  techniques, positive reinforcement, and a
                                  friendly environment to ease dental anxiety.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End FAQ */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    );
}

export default ChildrenDentistry;

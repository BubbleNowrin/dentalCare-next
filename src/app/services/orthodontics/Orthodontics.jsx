import Image from "next/image";
import Link from "next/link";
import FAQAccordion from "./FAQAccordion";

const Orthodontics = () => {
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
                  <span> Orthodontics </span>
                </div>
                <h3 className="breadcrumb__title">Orthodontics</h3>
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
                <div className="tp-service-details-sidebar-title">Orthodontic Treatments</div>
                <div className="tp-service-details-services-list">
                  <ul>
                    <li>
                      <p>
                        Braces for Children & Teens
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
                        Adult Orthodontics
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
                        Invisalign® Clear Aligners
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
                        Retainers & Post-Treatment Care
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
                        Jaw Alignment & Bite Correction
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
  <div className="tp-service-details-sidebar-title">Book an Orthodontic Consultation</div>
  <p className="pt-15 pb-15 tp-service-details-appointment">
    Monday – Friday: 9AM – 6PM<br />Saturday: 10AM – 2PM
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
        <span>Call for appointments</span>
        <p>
          <a href="tel:1800-ORTHO-01">1800-ORTHO-01</a>
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
        <span>Email our team</span>
        <p>
          <a href="mailto:ortho@dentalcare.com">ortho@dentalcare.com</a>
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
                  src="/assets/img/service/service-details-1.jpg"
                  alt="Orthodontic Treatment"
                />
              </div>

              <div className="tp-service-details-content">
                <h1 className="pt-30 pb-15">
                  Orthodontic Treatment Overview
                </h1>
                <p>
                  Orthodontics is a specialized branch of dentistry focused on diagnosing, preventing, and correcting misaligned teeth and jaws. Our clinic offers a full range of orthodontic solutions for children, teens, and adults, including traditional braces, Invisalign® clear aligners, and advanced jaw alignment therapies. Our goal is to help you achieve a healthy, beautiful smile with personalized care at every step.
                </p>
                <p>
                  Whether you are seeking early intervention for your child or discreet options as an adult, our experienced orthodontists use the latest technology to ensure optimal results and comfort throughout your treatment journey.
                </p>

                <h1 className="pt-30 pb-15">Key Features of Our Orthodontic Services</h1>
                <p>
                  We are committed to providing comprehensive orthodontic care tailored to your unique needs. Our services include:
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
                      Complimentary Initial Consultation
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
                      Customized Treatment Plans for All Ages
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
                      Modern Braces & Invisalign® Options
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
                      Flexible Payment & Insurance Support
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
                      Ongoing Support & Retainer Care
                    </li>
                  </ul>
                </div>

                <h1 className="pt-30">Your Orthodontic Journey: What to Expect</h1>
                <div className="row">
                  <div className="col-xl-4">
                    <div className="tp-service-detials-process mt-40">
                      <h4 className="pt-40 pb-15">Initial Consultation</h4>
                      <p>
                        Meet with our orthodontist for a comprehensive exam and discuss your smile goals. We'll review your dental history, take digital scans, and answer all your questions.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="tp-service-detials-process mt-40">
                      <h4 className="pt-40 pb-15">Personalized Treatment Plan</h4>
                      <p>
                        Receive a custom treatment plan outlining your options—braces, Invisalign®, or other therapies—along with a timeline and cost estimate.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="tp-service-detials-process mt-40">
                      <h4 className="pt-35 pb-20">Start Your Smile Transformation</h4>
                      <p>
                        Begin your orthodontic treatment with ongoing support from our team. We monitor your progress and provide guidance for the best results.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="pt-40">
                  Ready to get started? Book your orthodontic consultation today and take the first step toward a confident, healthy smile!
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

export default Orthodontics;

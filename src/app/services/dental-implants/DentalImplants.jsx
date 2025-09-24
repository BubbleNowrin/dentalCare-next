import Image from "next/image";
import Link from "next/link";
import FAQAccordion from "./FAQAccordion";

const DentalImplants = () => {
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
                  <span> Dental Implants </span>
                </div>
                <h3 className="breadcrumb__title">Dental Implants</h3>
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
                        Single Tooth Implants
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
                        Multiple Tooth Implants
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
                        Full Arch Implants (All-on-4)
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
                        Bone Grafting & Sinus Lifts
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
                        Implant-Supported Dentures
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
                  src="/assets/img/service/service-details-5.jpg"
                  alt="Dental Implants Procedure"
                />
              </div>

              <div className="tp-service-details-content">
                <h1 className="pt-30 pb-15">
                  Dental Implant Process
                </h1>
                <p>
                  Dental implants are a permanent solution for replacing missing teeth, offering the look, feel, and function of natural teeth. The process involves surgically placing a titanium post into the jawbone, which acts as an artificial tooth root. Over time, the implant fuses with the bone, providing a stable foundation for a custom-made crown.
                </p>
                <p>
                  Our experienced dental team uses advanced technology and gentle techniques to ensure a comfortable and successful implant experience. Whether you are missing a single tooth or require a full arch restoration, dental implants can restore your smile and confidence.
                </p>

                <h1 className="pt-30 pb-15">Key Features of Our Dental Implant Services</h1>
                <p>
                  We are committed to providing comprehensive dental implant care tailored to your unique needs. Our services include:
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
                      Single and Multiple Tooth Implants
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
                      Full Arch and All-on-4 Implants
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
                      Bone Grafting and Sinus Lifts
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
                      3D Imaging and Digital Planning
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
                      Sedation Options for Comfort
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
                      Long-Term Maintenance and Support
                    </li>
                  </ul>
                </div>

                <h1 className="pt-30">What to Expect: The Dental Implant Journey</h1>
                <div className="row">
                  <div className="col-xl-4">
                    <div className="tp-service-detials-process mt-40">
                      <h4 className="pt-40 pb-15">Consultation & Planning</h4>
                      <p>
                        We begin with a thorough examination, digital imaging, and a personalized treatment plan to ensure the best outcome for your dental health and aesthetics.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="tp-service-detials-process mt-40">
                      <h4 className="pt-40 pb-15">Implant Placement</h4>
                      <p>
                        The dental implant is gently placed into the jawbone under local anesthesia or sedation. Healing time allows the implant to integrate securely with the bone.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="tp-service-detials-process mt-40">
                      <h4 className="pt-35 pb-20">Restoration & Aftercare</h4>
                      <p>
                        Once healed, a custom crown, bridge, or denture is attached to the implant. We provide guidance on caring for your new smile and offer ongoing support.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="pt-40">
                  Dental implants are the gold standard for tooth replacement, offering unmatched stability, durability, and aesthetics. With proper care, your implants can last a lifetime. Schedule a consultation today to discover how dental implants can transform your smile and quality of life.
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

export default DentalImplants;
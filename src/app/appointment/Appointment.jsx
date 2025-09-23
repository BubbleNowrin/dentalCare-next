import Image from 'next/image';
import Link from 'next/link';
import FAQ from '../components/Home/FAQ';

import Booking from '../components/Home/Booking';
import BrandSlider from '../components/Home/BrandSlider';

const AppointmentBook = () => {
    return (
        <>
            {/* breadcrumb area start */}
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
                  <span> Appointment </span>
                </div>
                <h3 className="breadcrumb__title"> Book Appointment </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* breadcrumb area end */}
 <Booking/>
            <FAQ/>
           
            <BrandSlider/>

        </>
    )
}

export default AppointmentBook;
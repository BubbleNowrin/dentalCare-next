import Image from "next/image";
import Hero from "./components/Home/Hero";
import FunFact from "./components/Home/FunFact";
import About from "./components/Home/About";
import Ticker from "./components/Home/Ticker";
import Choose from "./components/Home/Choose";
import Booking from "./components/Home/Booking";
import Appointment from "./components/Home/Appointment";
import Testimonial from "./components/Home/Testimonial";
import BrandSlider from "./components/Home/BrandSlider";
import CTA from "./components/Home/CTA";
import FAQ from "./components/Home/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FunFact />
      <About />
      <Ticker/>
      <Choose/>
      <Booking/>
      <Appointment/>
      <Testimonial/>
      {/* <BrandSlider/> */}
      <CTA/>
      <FAQ/>
    </>
  );
}

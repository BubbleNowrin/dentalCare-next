import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import './globals.css';
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'DentalCare - Advanced Dental Clinic & Services',
  description: 'Comprehensive dental services for the entire family',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <head>
        {/* CSS CDNs */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
        />
        
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css"
        />
        
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/css/nice-select.min.css"
        />
        
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.7/swiper-bundle.min.css"
        />

        {/* Animation libraries from CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        
        {/* AOS (Animate On Scroll) for scroll animations */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
        />

        {/* Hover.css for hover effects */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.3.1/css/hover-min.css"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar/>
        {children}
        <Footer/>
        {/* JavaScript CDNs */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
          strategy="beforeInteractive"
        />

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        {/* GSAP Animation Library */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/TextPlugin.min.js"
          strategy="afterInteractive"
        />

        {/* Swiper */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.7/swiper-bundle.min.js"
          strategy="afterInteractive"
        />

        {/* Magnific Popup */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"
          strategy="afterInteractive"
        />

        {/* PureCounter */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/purecounter/1.5.0/purecounter_vanilla.js"
          strategy="afterInteractive"
        />

        {/* jQuery Knob */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jQuery-Knob/1.2.13/jquery.knob.min.js"
          strategy="afterInteractive"
        />

        {/* jQuery Appear */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery.appear/0.4.1/jquery.appear.min.js"
          strategy="afterInteractive"
        />

        {/* Before After Slider */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/before-after.js/1.0.0/before-after.min.js"
          strategy="afterInteractive"
        />

        {/* ScrollMagic */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"
          strategy="afterInteractive"
        />

        {/* Countdown */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery-countdown/2.2.0/jquery.countdown.min.js"
          strategy="afterInteractive"
        />

        {/* WOW.js for animations */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"
          strategy="afterInteractive"
        />

        {/* Animated Headlines */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/animatedModal.js/1.0.0/animatedModal.min.js"
          strategy="afterInteractive"
        />

        {/* Nice Select */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/js/jquery.nice-select.min.js"
          strategy="afterInteractive"
        />

        {/* Chroma.js for color manipulation */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/chroma-js/2.4.2/chroma.min.js"
          strategy="afterInteractive"
        />

        {/* Initialize animations and plugins */}
        <Script id="init-plugins" strategy="afterInteractive">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              // Initialize WOW.js
              if (typeof WOW !== 'undefined') {
                new WOW().init();
              }
              
              // Initialize GSAP ScrollTrigger
              if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
                gsap.registerPlugin(ScrollTrigger);
              }
              
              // Initialize PureCounter
              if (typeof PureCounter !== 'undefined') {
                new PureCounter();
              }
              
              // Initialize Nice Select
              if (typeof $ !== 'undefined' && $.fn.niceSelect) {
                $('select').niceSelect();
              }
              
              // Initialize Magnific Popup
              if (typeof $ !== 'undefined' && $.fn.magnificPopup) {
                $('.popup-image').magnificPopup({
                  type: 'image',
                  gallery: { enabled: true }
                });
                
                $('.popup-video').magnificPopup({
                  type: 'iframe'
                });
              }
              
              // Initialize Swiper
              if (typeof Swiper !== 'undefined') {
                const heroSwiper = new Swiper('.tp-hero-2-active', {
                  loop: true,
                  autoplay: {
                    delay: 5000,
                  },
                  effect: 'fade',
                  pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                  },
                  navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  },
                });
              }
            });
          `}
        </Script>

       
        
      </body>
    </html>
  )
}
"use client";

import React, { useState, useRef, useEffect } from "react";

const defaultFaq = [
  {
    q: "What is cosmetic dentistry?",
    a:
      "Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and smile through a variety of elective procedures.",
  },
  {
    q: "How long do cosmetic dental treatments last?",
    a:
      "The longevity of cosmetic treatments varies by procedure and individual care. Teeth whitening may last months, while veneers and bonding can last many years with proper maintenance.",
  },
  {
    q: "Is cosmetic dentistry painful?",
    a:
      "Most cosmetic procedures are minimally invasive and cause little to no discomfort. We use gentle techniques and can provide sedation options if needed.",
  },
  {
    q: "Can cosmetic dentistry fix crooked teeth?",
    a:
      "Yes! Options like Invisalign, veneers, and bonding can correct crooked, gapped, or misaligned teeth for a straighter, more attractive smile.",
  },
];

export default function FAQAccordion({ faqData = defaultFaq, defaultOpen = null }) {
  // defaultOpen: index to open by default (null means all closed)
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  // Refs for headers and content panels (for height calculation and focus management)
  const headerRefs = useRef([]);
  const contentRefs = useRef([]);

  // Toggle item: open it if closed, close if open
  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // Keyboard navigation for accessibility
  const handleKeyDown = (e, index) => {
    const lastIndex = faqData.length - 1;

    switch (e.key) {
      case "ArrowDown": {
        e.preventDefault();
        const next = index === lastIndex ? 0 : index + 1;
        headerRefs.current[next]?.focus();
        break;
      }
      case "ArrowUp": {
        e.preventDefault();
        const prev = index === 0 ? lastIndex : index - 1;
        headerRefs.current[prev]?.focus();
        break;
      }
      case "Home": {
        e.preventDefault();
        headerRefs.current[0]?.focus();
        break;
      }
      case "End": {
        e.preventDefault();
        headerRefs.current[lastIndex]?.focus();
        break;
      }
      case "Enter":
      case " ": // Space
      {
        e.preventDefault();
        toggleItem(index);
        break;
      }
      default:
        break;
    }
  };

  // When openIndex changes, set the panels' maxHeight and opacity for smooth animation.
  useEffect(() => {
    faqData.forEach((_, i) => {
      const panel = contentRefs.current[i];
      if (!panel) return;

      if (openIndex === i) {
        // set to scrollHeight so transition animates to the correct height
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.style.opacity = "1";
      } else {
        panel.style.maxHeight = "0px";
        panel.style.opacity = "0";
      }
    });
  }, [openIndex, faqData]);

  // On window resize, re-calc the open panel height
  useEffect(() => {
    const handleResize = () => {
      if (openIndex !== null) {
        const panel = contentRefs.current[openIndex];
        if (panel) panel.style.maxHeight = panel.scrollHeight + "px";
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [openIndex]);

  return (
    <section className="tp-accordion__area tp-space-top tp-space-bottom">
      <div className="container">
        <div className="tp-accordion__wrapper">
          <div className="tp-accordion__titlebox mb-6">
            <p className="text-left !text-2xl !font-semibold ">Find your answers here</p>
            
          </div>

          <div className="accordion tp-accordion" role="region" aria-label="Frequently Asked Questions">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div className="accordion-item border-b" key={index}>
                  <h3 className="accordion-header" id={`faq-heading-${index}`}>
                    <button
                      ref={(el) => (headerRefs.current[index] = el)}
                      className={`accordion-button w-full text-left py-4 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 ${isOpen ? "" : "collapsed"}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      onClick={() => toggleItem(index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                    >
                      <span className="font-medium text-base">{item.q}</span>

                      {/* chevron icon */}
                      <svg
                        className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </h3>

                  <div
                    id={`faq-panel-${index}`}
                    ref={(el) => (contentRefs.current[index] = el)}
                    role="region"
                    aria-labelledby={`faq-heading-${index}`}
                    className="accordion-collapse overflow-hidden transition-max-height duration-300 ease-in-out"
                    // initial inline styles are set via effect; keep default collapsed here
                    style={{ maxHeight: 0, opacity: 0 }}
                  >
                    <div className="accordion-body py-4">
                      <p className="text-gray-700">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
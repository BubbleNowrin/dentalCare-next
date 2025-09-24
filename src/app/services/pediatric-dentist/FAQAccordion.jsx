"use client";

import React, { useState, useRef, useEffect } from "react";

const defaultFaq = [
  {
    q: "When should my child first see a dentist?",
    a:
      "The American Academy of Pediatric Dentistry recommends a first dental visit by age 1 or within 6 months after the first tooth erupts. Early visits help prevent problems and build comfort with dental care.",
  },
  {
    q: "How can I help my child prevent cavities?",
    a:
      "Encourage twice-daily brushing with fluoride toothpaste, limit sugary snacks and drinks, and schedule regular dental checkups. Sealants and fluoride treatments also help protect your child's teeth.",
  },
  {
    q: "What if my child is afraid of the dentist?",
    a:
      "Our team is trained to help children feel comfortable and safe. We use gentle language, explain procedures, and offer positive reinforcement. Parents are welcome to stay with their child during visits.",
  },
  {
    q: "Do you offer care for children with special needs?",
    a:
      "Yes! Our pediatric dentists have experience caring for children with a wide range of needs. Please let us know how we can best support your child for a positive dental experience.",
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
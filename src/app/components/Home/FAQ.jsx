"use client";

import { useState } from 'react';

const FAQ = () => {
    const [openItem, setOpenItem] = useState(0); // First item open by default

    const faqData = [
        {
          q: 'How often should I schedule a dental checkup?',
          a: 'Regular dental visits every 6 months are recommended to prevent cavities, gum disease, and other oral issues. Your dentist may suggest a different schedule based on your individual needs.',
        },
        {
          q: 'How can I tell if I need a dental treatment?',
          a: 'Warning signs like tooth pain, sensitivity, bleeding gums, or persistent bad breath can indicate you need treatment. Regular checkups also help catch problems early before symptoms appear.',
        },
        {
          q: 'How do I book an appointment?',
          a: 'You can book an appointment online through our website, via phone, or by visiting our clinic. We aim to make scheduling convenient and quick for all patients.',
        },
        {
          q: 'What are the costs for routine dental checkups?',
          a: 'Routine dental checkups are competitively priced and often covered by insurance. Specific costs depend on the services required and any additional treatments your dentist recommends.',
        },
        {
          q: 'Do you provide emergency dental care?',
          a: 'Yes, we offer emergency dental services for urgent situations like severe pain, broken teeth, or accidents. Contact us immediately for prompt care.',
        },
    ];

    const toggleItem = (index) => {
        setOpenItem(openItem === index ? -1 : index);
    };

    return (<> {/* FAQ */}
      <section className="tp-accordion__area tp-space-top tp-space-bottom">
        <div className="container">
          <div className="tp-accordion__wrapper">
            <div className="tp-accordion__titlebox">
              <h2 className="tp-section-title-2 tp-chars">Frequently Asked Questions</h2>
              <p>We've compiled answers to the most common questions from our patients to help you make informed choices.</p>
            </div>

            <div className="accordion tp-accordion">
              {faqData.map((item, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header">
                    <button 
                      className={`accordion-button ${openItem !== index ? 'collapsed' : ''}`}
                      type="button" 
                      onClick={() => toggleItem(index)}
                      aria-expanded={openItem === index}
                    >
                      {item.q}
                    </button>
                  </h2>
                  <div 
                    className="accordion-collapse"
                    style={{
                      maxHeight: openItem === index ? '200px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out',
                      opacity: openItem === index ? 1 : 0
                    }}
                  >
                    <div className="accordion-body">
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section></>);
}

export default FAQ;
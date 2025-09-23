const CTA=()=>{
    return(
        <>{/* CTA */}
      <section className="tp-cta__area">
        <div className="container-1850">
          <div className="tp-cta__wrapper">
            <img src="/assets/img/cta/cta-img.jpg" alt="DentalCare Support" className="image" data-lag="0.1" />
            <img src="/assets/img/cta/logo.png" alt="DentalCare Logo" className="logo" />
            <div className="tp-cta__box">
              <h2 className="title">Your Voice Matters!</h2>
              <p>Share your thoughts, suggestions, or concerns so we can make every dental visit better and stress-free.</p>
              <a href="/contact" className="tp-btn__1 tp-btn-bg-2">
                Send Feedback & Suggestions
                <span className="icon">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_50_217" style={{ maskType: 'alpha' }} x="0" y="0" width="14" height="14">
                      <rect width="14" height="14" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_50_217)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M13.3676 1.63776L1.63768 13.3676L0.632266 12.3622L12.3621 0.632339L13.3676 1.63776Z" fill="#1E1D2B" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M11.8594 1.13503C9.49528 3.49911 9.64207 7.51072 11.8594 9.728L12.3621 10.2307L13.3675 9.22529L12.8648 8.72259C11.181 7.03885 11.0771 3.92808 12.8648 2.14045L13.3675 1.63774L12.3621 0.632325L11.8594 1.13503Z" fill="#1E1D2B" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.8648 2.14047C10.5008 4.50454 6.48916 4.35775 4.27188 2.14047L3.76917 1.63776L4.77458 0.632339L5.27729 1.13505C6.96036 2.81812 10.0718 2.92268 11.8594 1.13505L12.3621 0.632339L13.3676 1.63776L12.8648 2.14047Z" fill="#1E1D2B" />
                    </g>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section></>
    )
}

export default CTA;
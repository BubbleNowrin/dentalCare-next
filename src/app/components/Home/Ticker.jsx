'use client';
import Image from 'next/image';

const Ticker = () => {
  const tickerItems = [
    'DentalCare – Where Healthy Smiles Begin',
    'Modern Dentistry with a Gentle Touch',
    'Trusted by Families for Over 12 Years',
    'Advanced Technology, Personalized Care',
    'Comfortable Visits, Confident Smiles',
    'More Than Dentistry – We Care for You',
  ];

  // Create duplicated content for seamless loop
  const duplicatedItems = [...tickerItems, ...tickerItems];

  return (
    <>
      {/* CSS Marquee Ticker */}
      <div className="tp-text__slider-area fix tp-space-top tp-space-bottom">
        <div className="marquee-container" style={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          position: 'relative',
          width: '100%',
          minHeight: '120px',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '20px',
          paddingBottom: '20px'
        }}>
          <div className="marquee-content" style={{
            display: 'inline-flex',
            alignItems: 'center',
            animation: 'marquee 30s linear infinite',
            gap: '100px'
          }}>
            {duplicatedItems.map((text, idx) => (
              <h3 className="tp-text__text" key={idx} style={{
                margin: 0,
                whiteSpace: 'nowrap',
                lineHeight: '1.2',
                padding: '5px 0'
              }}>
                {text}
              </h3>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}

export default Ticker;
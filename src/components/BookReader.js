import React from 'react';

const CompanyVideo = () => {
  return (
    <section
      id="company-video"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        padding: '80px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(232,49,42,0.12) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>

          {/* LEFT — YouTube Video */}
          <div style={{ flex: '1 1 480px', minWidth: '300px' }}>
            <div style={{
              position: 'relative',
              borderRadius: '10px',
              overflow: 'hidden',
              border: '1px solid rgba(0,0,0,0.2)',
              background: '#000',
              aspectRatio: '16/9',
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))',
            }}>
              <iframe
                src="https://www.youtube.com/embed/ydrWW6FwUkI?autoplay=1&mute=1&loop=1&playlist=ydrWW6FwUkI&controls=1&rel=0&modestbranding=1"
                allow="autoplay; fullscreen"
                frameBorder="0"
                allowFullScreen
                style={{
                  position: 'absolute', top: 0, left: 0,
                  width: '100%', height: '100%',
                }}
              />
            </div>
          </div>

          {/* RIGHT — Text */}
          <div style={{ flex: '1 1 300px', minWidth: '260px' }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(232,49,42,0.15)',
              color: '#fca5a5',
              fontSize: '11px', fontWeight: '700',
              padding: '4px 14px', borderRadius: '999px',
              letterSpacing: '1.5px', textTransform: 'uppercase',
              marginBottom: '18px', fontFamily: 'Poppins, sans-serif',
            }}>
              Company Introduction
            </div>

            <h2 style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '800',
              fontSize: 'clamp(26px, 3vw, 42px)',
              color: '#fff', marginBottom: '16px', lineHeight: '1.2',
            }}>
              Watch Our <span style={{ color: '#E8312A' }}>Story</span>
            </h2>

            <p style={{
              color: '#94a3b8', fontSize: '15px',
              fontFamily: 'Poppins, sans-serif',
              lineHeight: '1.7', marginBottom: '32px',
            }}>
              Learn about Timeline Telematics – our vision, mission, and journey
              towards smarter fleet management solutions across the globe.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyVideo;
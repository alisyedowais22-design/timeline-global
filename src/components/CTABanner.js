import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const CTABanner = () => (
  <section style={{
    background: 'linear-gradient(135deg, #E8312A 0%, #c72a23 100%)',
    padding: '80px 24px',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* Background pattern */}
    <div style={{
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
      backgroundSize: '28px 28px',
    }} />

    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative',
      zIndex: 1,
    }}>
      <h2 style={{
        fontFamily: 'Poppins, sans-serif',
        fontSize: 'clamp(32px, 5vw, 60px)',
        fontWeight: '800',
        color: '#ffffff',
        marginBottom: '20px',
        lineHeight: '1.05',
      }}>
        Ready to Transform Your Fleet?
      </h2>
      <p style={{
        color: 'rgba(255,255,255,0.85)',
        fontSize: '18px',
        marginBottom: '40px',
        lineHeight: '1.6',
        maxWidth: '600px',
        margin: '0 auto 40px',
      }}>
        Join 25,000+ fleet operators who trust Timeline Telematics for real-time visibility, safety, and control.
      </p>

      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="#contact" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: '#ffffff',
          color: '#E8312A',
          padding: '14px 32px',
          borderRadius: '8px',
          fontSize: '15px',
          fontWeight: '800',
          textDecoration: 'none',
          transition: 'all 0.25s',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
          }}
        >
          Get a Free Demo <ArrowRight size={16} />
        </a>
        <a href="tel:+923111122883" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255,255,255,0.15)',
          border: '2px solid rgba(255,255,255,0.4)',
          color: '#ffffff',
          padding: '14px 28px',
          borderRadius: '8px',
          fontSize: '15px',
          fontWeight: '700',
          textDecoration: 'none',
          transition: 'all 0.25s',
          backdropFilter: 'blur(4px)',
        }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
        >
          <Phone size={16} /> Call Us Now
        </a>
      </div>
    </div>
  </section>
);

export default CTABanner;

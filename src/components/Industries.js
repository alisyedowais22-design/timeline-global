import React from 'react';

const INDUSTRIES = [
  {
    name: 'Logistics &\nCourier',
    slug: 'logistics-courier',
    desc: 'Maximize The Efficiency & Profitability Of Your Fleet',
    img: '/courierandlogistics.jpg',   // ← public/ind-logistics.jpg lagao
  },
  {
    name: 'Public\nTransport',
    slug: 'public-transport',
    desc: 'Maximize The Efficiency & Profitability Of Your Fleet',
    img: '/publictransport.jpg',   // ← public/ind-transport.jpg lagao
  },
  {
    name: 'Oil &\nGas',
    slug: 'oil-gas',
    desc: 'Maximize The Efficiency & Profitability Of Your Fleet',
    img: '/oilandgas.jpg',      // ← public/ind-oilgas.jpg lagao
  },
  {
    name: 'Construction',
    slug: 'construction',
    desc: 'Maximize The Efficiency & Profitability Of Your Fleet',
    img: '/construction.jpg',// ← public/ind-construction.jpg lagao
  },
  {
    name: 'Healthcare',
    slug: 'healthcare',
    desc: 'Maximize The Efficiency & Profitability Of Your Fleet',
    img: '/healthcare.jpg',  // ← public/ind-healthcare.jpg lagao
  },
  {
    name: 'Government',
    slug: 'government',
    desc: 'Maximize The Efficiency & Profitability Of Your Fleet',
    img: '/government.jpg',  // ← public/ind-government.jpg lagao
  },
  {
    name: 'Agriculture',
    slug: 'agriculture',
    desc: 'Maximize The Efficiency & Profitability Of Your Fleet',
    img: '/agriculture.jpg', // ← public/ind-agriculture.jpg lagao
  },
];

// SVG icons — white circle style like Gosafe
const icons = {
  'Logistics &\nCourier': (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
      <rect x="2" y="12" width="24" height="16" rx="2" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <path d="M26 18h6l4 5v5h-10V18z" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <circle cx="9" cy="30" r="3" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <circle cx="31" cy="30" r="3" stroke="#fff" strokeWidth="1.8" fill="none"/>
    </svg>
  ),
  'Public\nTransport': (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
      <rect x="4" y="8" width="32" height="22" rx="3" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <line x1="4" y1="18" x2="36" y2="18" stroke="#fff" strokeWidth="1.8"/>
      <line x1="20" y1="8" x2="20" y2="30" stroke="#fff" strokeWidth="1.4"/>
      <circle cx="11" cy="32" r="2.5" stroke="#fff" strokeWidth="1.6" fill="none"/>
      <circle cx="29" cy="32" r="2.5" stroke="#fff" strokeWidth="1.6" fill="none"/>
    </svg>
  ),
  'Oil &\nGas': (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
      <rect x="14" y="4" width="8" height="32" rx="1.5" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <path d="M14 14H6V34H14" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <path d="M22 14h8v20h-8" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <line x1="6" y1="34" x2="34" y2="34" stroke="#fff" strokeWidth="1.8"/>
    </svg>
  ),
  'Construction': (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
      <line x1="20" y1="2" x2="20" y2="38" stroke="#fff" strokeWidth="1.8"/>
      <line x1="2" y1="38" x2="38" y2="38" stroke="#fff" strokeWidth="1.8"/>
      <line x1="20" y1="2" x2="8" y2="38" stroke="#fff" strokeWidth="1.8"/>
      <line x1="20" y1="2" x2="32" y2="38" stroke="#fff" strokeWidth="1.8"/>
      <line x1="12" y1="18" x2="28" y2="18" stroke="#fff" strokeWidth="1.6"/>
    </svg>
  ),
  'Healthcare': (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
      <rect x="8" y="6" width="24" height="30" rx="2" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <rect x="16" y="2" width="8" height="8" rx="1" stroke="#fff" strokeWidth="1.6" fill="none"/>
      <line x1="20" y1="21" x2="20" y2="25" stroke="#fff" strokeWidth="2"/>
      <line x1="18" y1="23" x2="22" y2="23" stroke="#fff" strokeWidth="2"/>
    </svg>
  ),
  'Government': (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
      <line x1="2" y1="38" x2="38" y2="38" stroke="#fff" strokeWidth="1.8"/>
      <line x1="2" y1="14" x2="38" y2="14" stroke="#fff" strokeWidth="1.8"/>
      <line x1="4" y1="14" x2="4" y2="38" stroke="#fff" strokeWidth="1.6"/>
      <line x1="36" y1="14" x2="36" y2="38" stroke="#fff" strokeWidth="1.6"/>
      <path d="M20 2L38 14H2L20 2Z" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <rect x="9" y="20" width="5" height="9" rx="1" stroke="#fff" strokeWidth="1.4" fill="none"/>
      <rect x="18" y="20" width="5" height="9" rx="1" stroke="#fff" strokeWidth="1.4" fill="none"/>
      <rect x="27" y="20" width="5" height="9" rx="1" stroke="#fff" strokeWidth="1.4" fill="none"/>
    </svg>
  ),
  'Agriculture': (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
      <circle cx="10" cy="28" r="8" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <circle cx="30" cy="30" r="6" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <line x1="10" y1="28" x2="10" y2="12" stroke="#fff" strokeWidth="1.8"/>
      <line x1="30" y1="30" x2="30" y2="16" stroke="#fff" strokeWidth="1.8"/>
      <path d="M10 18 C14 14 20 14 22 18" stroke="#fff" strokeWidth="1.6" fill="none"/>
      <line x1="2" y1="36" x2="38" y2="36" stroke="#fff" strokeWidth="1.8"/>
    </svg>
  ),
};

const Industries = ({ onNavigate }) => (
  <section id="industries" style={{ background: '#111', overflow: 'hidden' }}>

    {/* Section heading */}
    <div style={{ textAlign: 'center', padding: '60px 24px 40px', background: '#fff' }}>
      <div style={{
        display: 'inline-block',
        background: '#fef2f2', color: '#E8312A',
        fontSize: '12px', fontWeight: '700',
        padding: '4px 14px', borderRadius: '999px',
        letterSpacing: '1.5px', textTransform: 'uppercase',
        marginBottom: '16px', fontFamily: 'Poppins, sans-serif',
      }}>
        Industries
      </div>
      <h2 style={{
        fontFamily: 'Oswald, sans-serif',
        fontSize: 'clamp(28px, 3.5vw, 44px)',
        fontWeight: '700', color: '#111827',
        textTransform: 'uppercase', letterSpacing: '1px',
      }}>
        Industries We Serve
      </h2>
    </div>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      minHeight: '420px',
    }}>
      {INDUSTRIES.map((ind, i) => (
        <div
          key={i}
          onClick={() => onNavigate && onNavigate(ind.slug)}
          style={{
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',
            borderRight: i < INDUSTRIES.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
          }}
          onMouseEnter={e => {
            e.currentTarget.querySelector('.ind-img').style.transform = 'scale(1.08)';
            e.currentTarget.querySelector('.ind-overlay').style.background = 'rgba(0,0,0,0.55)';
            e.currentTarget.querySelector('.ind-learn').style.opacity = '1';
            e.currentTarget.querySelector('.ind-learn').style.transform = 'translateY(0)';
          }}
          onMouseLeave={e => {
            e.currentTarget.querySelector('.ind-img').style.transform = 'scale(1)';
            e.currentTarget.querySelector('.ind-overlay').style.background = 'rgba(0,0,0,0.45)';
            e.currentTarget.querySelector('.ind-learn').style.opacity = '0';
            e.currentTarget.querySelector('.ind-learn').style.transform = 'translateY(8px)';
          }}
        >
          {/* Background image */}
          <div
            className="ind-img"
            style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${ind.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'transform 0.5s ease',
              backgroundColor: '#222', // fallback agar image nahi
            }}
          />

          {/* Dark overlay */}
          <div
            className="ind-overlay"
            style={{
              position: 'absolute', inset: 0,
              background: 'rgba(0,0,0,0.45)',
              transition: 'background 0.3s ease',
            }}
          />

          {/* Content */}
          <div style={{
            position: 'relative', zIndex: 2,
            padding: '32px 20px 28px',
            display: 'flex', flexDirection: 'column',
            justifyContent: 'flex-end',
            height: '100%', minHeight: '420px',
          }}>
            {/* Icon circle — Gosafe style */}
            <div style={{
              width: 64, height: 64, borderRadius: '50%',
              border: '1.5px solid rgba(255,255,255,0.5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 20,
              background: 'rgba(255,255,255,0.08)',
            }}>
              {icons[ind.name]}
            </div>

            {/* Name — Gosafe bold uppercase */}
            <h3 style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: '20px',
              fontWeight: '700',
              color: '#ffffff',
              textTransform: 'uppercase',
              lineHeight: 1.15,
              marginBottom: 10,
              whiteSpace: 'pre-line',
            }}>
              {ind.name}
            </h3>

            {/* Desc */}
            <p style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '11px',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.5,
              marginBottom: 16,
            }}>
              {ind.desc}
            </p>

            {/* Learn More — appears on hover */}
            <div
              className="ind-learn"
              style={{
                opacity: 0,
                transform: 'translateY(8px)',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                color: '#fff',
                fontFamily: 'Oswald, sans-serif',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                borderBottom: '1px solid rgba(255,255,255,0.5)',
                paddingBottom: 2,
                width: 'fit-content',
              }}
            >
              LEARN MORE
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Industries;
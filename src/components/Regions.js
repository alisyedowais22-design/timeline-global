import React, { useRef, useEffect, useState } from 'react';
import { BRANCH_REGIONS } from '../hooks/useGeoRedirect';

const REGION_CONFIG = {
  EU: {
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80',
    label: 'Europe',
    tagline: 'Cross-border fleet intelligence across 12+ countries',
    accent: '#003399',
  },
  ME: {
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    label: 'Middle East',
    tagline: 'Powering logistics across the Gulf & Arabian Peninsula',
    accent: '#009A44',
  },
  PK: {
    image: 'https://images.unsplash.com/photo-1635016288720-c52507b9a717?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    label: 'Pakistan',
    tagline: 'Where it all began — serving 25,000+ fleets nationwide',
    accent: '#01411C',
  },
};

const DISPLAY_ORDER = ['EU', 'ME', 'PK'];

const useVisible = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
};

const RegionCard = ({ region, config, index }) => {
  const [ref, visible] = useVisible();
  const [hovered, setHovered] = useState(false);
  const isLive = region.status === 'live';

  const handleClick = () => {
    if (isLive && region.href) {
      window.location.href = region.href;
    }
  };

  return (
    <div
      ref={ref}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        cursor: isLive ? 'pointer' : 'default',
        height: '420px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(36px)',
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 0.12}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 0.12}s, box-shadow 0.3s ease`,
        boxShadow: hovered
          ? '0 28px 60px rgba(0,0,0,0.28)'
          : '0 8px 32px rgba(0,0,0,0.12)',
      }}
    >
      {/* Background Image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${config.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: hovered ? 'scale(1.06)' : 'scale(1)',
        transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
      }} />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: hovered
          ? 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.15) 100%)'
          : 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.05) 100%)',
        transition: 'background 0.4s ease',
      }} />

      {/* Top accent bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '4px',
        background: config.accent,
      }} />

      {/* Coming Soon badge */}
      {!isLive && (
        <div style={{
          position: 'absolute', top: '20px', right: '20px',
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.25)',
          color: '#fff',
          fontSize: '10px', fontWeight: '700',
          padding: '5px 12px', borderRadius: '999px',
          letterSpacing: '1.5px', textTransform: 'uppercase',
          fontFamily: 'Poppins, sans-serif',
        }}>Coming Soon</div>
      )}

      {/* Live badge */}
      {isLive && (
        <div style={{
          position: 'absolute', top: '20px', right: '20px',
          display: 'flex', alignItems: 'center', gap: '6px',
          background: 'rgba(0,0,0,0.35)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.2)',
          padding: '5px 12px', borderRadius: '999px',
          fontFamily: 'Poppins, sans-serif',
        }}>
          <div style={{
            width: '7px', height: '7px', borderRadius: '50%',
            background: '#22c55e',
            boxShadow: '0 0 0 3px rgba(34,197,94,0.3)',
          }} />
          <span style={{ fontSize: '10px', fontWeight: '700', color: '#fff', letterSpacing: '1px', textTransform: 'uppercase' }}>Live</span>
        </div>
      )}

      {/* Flag */}
      <div style={{
        position: 'absolute', top: '20px', left: '20px',
        fontSize: '28px',
        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))',
      }}>{region.flag}</div>

      {/* Bottom content */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '32px 28px',
        fontFamily: 'Poppins, sans-serif',
      }}>
        <div style={{
          display: 'inline-block',
          background: config.accent,
          color: '#fff',
          fontSize: '10px', fontWeight: '800',
          padding: '3px 10px', borderRadius: '999px',
          letterSpacing: '2px', textTransform: 'uppercase',
          marginBottom: '10px',
        }}>{region.code}</div>

        <h3 style={{
          fontSize: '26px', fontWeight: '800',
          color: '#ffffff', margin: '0 0 8px',
          lineHeight: 1.1,
        }}>{config.label}</h3>

        <p style={{
          fontSize: '13.5px', color: 'rgba(255,255,255,0.75)',
          margin: '0 0 20px', lineHeight: '1.6',
          maxWidth: '280px',
        }}>{config.tagline}</p>

        {isLive ? (
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#fff',
            color: '#111',
            fontSize: '13px', fontWeight: '700',
            padding: '10px 20px', borderRadius: '999px',
            transform: hovered ? 'translateX(4px)' : 'translateX(0)',
            transition: 'transform 0.3s ease',
          }}>
            Visit Site
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="#E8312A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        ) : (
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.25)',
            color: 'rgba(255,255,255,0.7)',
            fontSize: '13px', fontWeight: '600',
            padding: '10px 20px', borderRadius: '999px',
          }}>
            Launching Soon
          </div>
        )}
      </div>
    </div>
  );
};

const Regions = () => {
  if (!BRANCH_REGIONS || BRANCH_REGIONS.length === 0) return null;

  const regionMap = Object.fromEntries(BRANCH_REGIONS.map(r => [r.code, r]));
  const ordered = DISPLAY_ORDER.map(code => regionMap[code]).filter(Boolean);

  return (
    <section id="regions" style={{
      padding: '100px 24px',
      background: '#0a0a0a',
      fontFamily: 'Poppins, sans-serif',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(232,49,42,0.15)',
            color: '#E8312A',
            fontSize: '10px', fontWeight: '700',
            padding: '5px 16px', borderRadius: '999px',
            letterSpacing: '2.5px', textTransform: 'uppercase',
            marginBottom: '20px',
          }}>Global Presence</div>

          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: '900',
            color: '#ffffff',
            lineHeight: 1.1,
            margin: '0 0 16px',
          }}>
            One Platform.<br />
            <span style={{ color: '#E8312A' }}>Three Continents.</span>
          </h2>

          <p style={{
            fontSize: '15px',
            color: '#94a3b8',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: '1.7',
          }}>
            Regional operations tailored to local markets — with the same world-class telematics infrastructure.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {ordered.map((region, i) => {
            const config = REGION_CONFIG[region.code];
            if (!config) return null;
            return (
              <RegionCard
                key={region.code}
                region={region}
                config={config}
                index={i}
              />
            );
          })}
        </div>

        {/* Bottom note */}
        <div style={{
          textAlign: 'center',
          marginTop: '48px',
          paddingTop: '40px',
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}>
          
        </div>
      </div>
    </section>
  );
};

export default Regions;
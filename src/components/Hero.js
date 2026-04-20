import React, { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { STATS } from '../data/content';

const Hero = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 80); }, []);

  return (
    <section id="home" style={{ position: 'relative', overflow: 'hidden', minHeight: '98vh', display: 'flex', flexDirection: 'column' }}>

      {/* Background Video — YouTube embed */}
      <iframe
        src="https://www.youtube.com/embed/UIqMQu2FQZU?autoplay=1&mute=1&loop=1&playlist=UIqMQu2FQZU&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
        allow="autoplay; fullscreen"
        frameBorder="0"
        style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '177.78vh',
          minWidth: '100%',
          height: '56.25vw',
          minHeight: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Light overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.72) 0%, rgba(255,245,245,0.55) 40%, rgba(255,255,255,0.35) 100%)',
      }} />

      {/* Fallback animated bg (when video not loaded) */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(232,49,42,0.15) 1.2px, transparent 1.2px)',
          backgroundSize: '32px 32px',
          animation: 'gridDrift 20s linear infinite',
        }} />
        {[
          { size: 7, x: '12%', y: '20%', dur: '6s', del: '0s' },
          { size: 5, x: '80%', y: '15%', dur: '7s', del: '1s' },
          { size: 9, x: '70%', y: '75%', dur: '8s', del: '2s' },
          { size: 6, x: '25%', y: '78%', dur: '6.5s', del: '0.5s' },
        ].map((c, i) => (
          <div key={i} style={{
            position: 'absolute', left: c.x, top: c.y,
            width: c.size, height: c.size, borderRadius: '50%',
            background: '#E8312A', opacity: 0.25,
            animation: `floatDot ${c.dur} ease-in-out ${c.del} infinite`,
          }} />
        ))}
      </div>

      {/* Main content */}
      <div style={{
        maxWidth: '700px', margin: '0 auto', padding: '180px 32px 130px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        position: 'relative', zIndex: 2, width: '100%', flex: 1,
      }}>
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(28px)',
          transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,255,255,0.85)', border: '1.5px solid #fecaca',
            borderRadius: '999px', padding: '5px 16px', marginBottom: '28px',
            boxShadow: '0 2px 10px rgba(232,49,42,0.07)',
          }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#E8312A', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: '12.5px', fontWeight: '600', color: '#374151', fontFamily: 'Poppins, sans-serif' }}>
              Trusted by 25,000+ Fleet Operators
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(42px, 5.5vw, 70px)',
            fontWeight: '800', lineHeight: '1.06',
            marginBottom: '22px', color: '#111827',
          }}>
            The World Moves<br />
            Fast. <span style={{ color: '#E8312A' }}>Let's Make</span><br />
            <span style={{ color: '#E8312A' }}>It Smarter.</span>
          </h1>

          <p style={{
            fontSize: '16px', color: '#374151', lineHeight: '1.75',
            marginBottom: '36px', maxWidth: '480px',
            fontFamily: 'Poppins, sans-serif', fontWeight: '400',
          }}>
            Vehicles. Assets. People. In motion, every second. We turn that motion into visibility, safety, and control so you're never left in the dark.
          </p>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#solutions" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#E8312A', color: '#fff',
              padding: '13px 26px', borderRadius: '8px',
              fontSize: '14px', fontWeight: '700',
              fontFamily: 'Poppins, sans-serif', textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(232,49,42,0.28)', transition: 'all 0.25s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#c72a23'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#E8312A'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Explore Our Solutions <ArrowRight size={15} />
            </a>

            <a href="#contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '9px',
              color: '#111827', fontSize: '14px', fontWeight: '600',
              fontFamily: 'Poppins, sans-serif', textDecoration: 'none', transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#E8312A'}
              onMouseLeave={e => e.currentTarget.style.color = '#111827'}
            >
              <span style={{
                width: '32px', height: '32px', borderRadius: '50%',
                border: '2px solid currentColor',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              }}><Play size={11} fill="currentColor" /></span>
              Talk to An Expert
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'rgba(255,255,255,0.90)', backdropFilter: 'blur(8px)',
        borderTop: '1px solid rgba(229,231,235,0.6)', zIndex: 3,
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto', padding: '18px 32px',
          display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '12px',
        }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(26px, 2.8vw, 36px)', fontWeight: '800', color: '#E8312A', fontFamily: 'Poppins, sans-serif', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: '11px', fontWeight: '600', color: '#6b7280', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: '3px', fontFamily: 'Poppins, sans-serif' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes gridDrift { 0%{background-position:0 0} 100%{background-position:32px 32px} }
        @keyframes floatDot { 0%,100%{transform:translate(0,0) scale(1);opacity:0.25} 50%{transform:translate(0,-14px) scale(1.2);opacity:0.5} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.3)} }
      `}</style>
    </section>
  );
};
export default Hero;
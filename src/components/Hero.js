import React, { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  { img: '/banner00.png' },
  { img: '/banner0.png'   },
  // { img: '/banner3.png' },
  // { img: '/banner4.png' },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade]       = useState(true);

  const goTo = useCallback((idx) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(idx);
      setFade(true);
    }, 250);
  }, []);

  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length), [current, goTo]);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section id="home" style={{
      position: 'relative',
      width: '100%',
      height: 'calc(100vh - 116px)',
      marginTop: '116px',
      overflow: 'hidden',
      background: '#111',
    }}>

      {/* Full screen image */}
      <img
        key={current}
        src={SLIDES[current].img}
        alt=""
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'left center',
          opacity: fade ? 1 : 0,
          transition: 'opacity 0.35s ease',
          display: 'block',
        }}
      />

      {/* Prev arrow */}
      <button onClick={prev} style={{
        position: 'absolute', left: '24px', top: '50%',
        transform: 'translateY(-50%)',
        width: '48px', height: '48px', borderRadius: '50%',
        background: 'rgba(0,0,0,0.35)',
        border: '1px solid rgba(255,255,255,0.25)',
        color: '#fff', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 10, transition: 'background 0.2s',
      }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.65)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.35)'}
      >
        <ChevronLeft size={22} />
      </button>

      {/* Next arrow */}
      <button onClick={next} style={{
        position: 'absolute', right: '24px', top: '50%',
        transform: 'translateY(-50%)',
        width: '48px', height: '48px', borderRadius: '50%',
        background: 'rgba(0,0,0,0.35)',
        border: '1px solid rgba(255,255,255,0.25)',
        color: '#fff', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 10, transition: 'background 0.2s',
      }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.65)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.35)'}
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div style={{
        position: 'absolute', bottom: '28px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', gap: '10px', zIndex: 10,
      }}>
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} style={{
            width: i === current ? '32px' : '10px',
            height: '10px', borderRadius: '999px',
            background: i === current ? '#E8312A' : 'rgba(255,255,255,0.5)',
            border: 'none', cursor: 'pointer', padding: 0,
            transition: 'all 0.3s ease',
          }} />
        ))}
      </div>

    </section>
  );
};

export default Hero;
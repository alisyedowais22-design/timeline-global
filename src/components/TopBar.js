import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Instagram, Search } from 'lucide-react';

const SOCIALS = [
  { Icon: Linkedin,  href: '#' },
  { Icon: Twitter,   href: '#' },
  { Icon: Facebook,  href: '#' },
  { Icon: Youtube,   href: '#' },
  { Icon: Instagram, href: '#' },
];

const TopBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{
      background: '#1a1a1a',
      borderBottom: '1px solid #2a2a2a',
      height: scrolled ? '0px' : '40px',
      overflow: 'hidden',
      display: 'flex', alignItems: 'center',
      position: 'fixed', top: 0, left: 0, right: 0,
      zIndex: 1002,
      transition: 'height 0.3s ease',
    }}>
      <div style={{
        maxWidth: '1280px', margin: '0 auto', padding: '0 32px',
        width: '100%',
        display: 'flex', justifyContent: 'flex-end',
        alignItems: 'center', gap: '6px',
      }}>
        {SOCIALS.map(({ Icon, href }, i) => (
          <a key={i} href={href} style={{
            width: '30px', height: '30px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#9ca3af', borderRadius: '4px',
            transition: 'color 0.2s', textDecoration: 'none',
          }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}
          >
            <Icon size={16} />
          </a>
        ))}

        <div style={{ width: '1px', height: '16px', background: '#3a3a3a', margin: '0 6px' }} />

        <a href="#" style={{
          width: '30px', height: '30px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#9ca3af', borderRadius: '4px',
          transition: 'color 0.2s', textDecoration: 'none',
        }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}
        >
          <Search size={16} />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
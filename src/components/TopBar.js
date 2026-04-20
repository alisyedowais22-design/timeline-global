import React from 'react';
import { Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';

const TopBar = () => (
  <div style={{
    background: '#1a1a2e',
    padding: '8px 0',
    borderBottom: '1px solid #2d2d4e',
  }}>
    <div style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '8px',
    }}>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <a href="tel:+923111122883" style={{
          color: '#d1d5db',
          fontSize: '13px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          transition: 'color 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.color = '#E8312A'}
          onMouseLeave={e => e.currentTarget.style.color = '#d1d5db'}
        >
          <Phone size={13} />
          +92 311 1122 883
        </a>
        <a href="mailto:info@timelinetelematics.com" style={{
          color: '#d1d5db',
          fontSize: '13px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          transition: 'color 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.color = '#E8312A'}
          onMouseLeave={e => e.currentTarget.style.color = '#d1d5db'}
        >
          <Mail size={13} />
          info@timelinetelematics.com
        </a>
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        {[
          { Icon: Facebook, href: '#' },
          { Icon: Twitter, href: '#' },
          { Icon: Linkedin, href: '#' },
        ].map(({ Icon, href }, i) => (
          <a key={i} href={href} style={{
            color: '#9ca3af',
            display: 'flex',
            alignItems: 'center',
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = '#E8312A'}
            onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}
          >
            <Icon size={15} />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default TopBar;

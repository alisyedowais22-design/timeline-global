import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { BRANCH_REGIONS, SERVICES } from '../hooks/useGeoRedirect';

const Footer = () => (
  <footer style={{
    background: '#0f172a',
    color: '#94a3b8',
    padding: '72px 24px 0',
  }}>
    <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '48px',
        marginBottom: '56px',
      }}>

        {/* Brand Column */}
        <div style={{ gridColumn: 'span 1' }}>
          <div style={{ marginBottom: '20px' }}>
            <img src="/TimelineLogoWhite.png" alt="Timeline Telematics" style={{ height: '122px', width: 'auto' }} />
          </div>
          <p style={{ fontSize: '14px', lineHeight: '1.7', marginBottom: '24px', color: '#64748b' }}>
            Vehicles. Assets. People. In motion, every second. Global fleet intelligence platform trusted by 25,000+ operators.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            {[
              { Icon: Facebook,  href: '#' },
              { Icon: Twitter,   href: '#' },
              { Icon: Linkedin,  href: '#' },
              { Icon: Youtube,   href: '#' },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} style={{
                width: '36px', height: '36px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#64748b', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(232,49,42,0.15)'; e.currentTarget.style.color = '#E8312A'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#64748b'; }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 style={{ color: '#ffffff', fontWeight: '700', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>
            Products
          </h4>
          {['GPS Tracking', 'Fuel Monitoring', 'Driver Management', 'Asset Tracking', 'Temperature Monitor', 'Dashcam Solutions'].map(item => (
            <a key={item} href="https://website.teletix.pk/products" style={{
              display: 'block', color: '#64748b', fontSize: '14px',
              padding: '5px 0', textDecoration: 'none', transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#E8312A'}
              onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Solutions — exact 5 from navbar */}
        <div>
          <h4 style={{ color: '#ffffff', fontWeight: '700', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>
            Solutions
          </h4>
          {SERVICES.map(service => (
            <a key={service.slug} href={service.href} style={{
              display: 'block', color: '#64748b', fontSize: '14px',
              padding: '5px 0', textDecoration: 'none', transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#E8312A'}
              onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
            >
              {service.label}
            </a>
          ))}
        </div>

        {/* Regional Sites + Contact */}
        <div>
          <h4 style={{ color: '#ffffff', fontWeight: '700', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>
            Regional Sites
          </h4>
          {BRANCH_REGIONS.map(r => (
            <a key={r.code} href={r.href || '#'} style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              color: '#64748b', fontSize: '14px', padding: '6px 0',
              textDecoration: 'none', transition: 'color 0.2s',
              opacity: r.status === 'coming-soon' ? 0.5 : 1,
              cursor: r.status === 'coming-soon' ? 'default' : 'pointer',
            }}
              onMouseEnter={e => { if (r.status === 'live') e.currentTarget.style.color = '#E8312A'; }}
              onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
            >
              <span>{r.flag}</span>
              {r.name}
              {r.status === 'coming-soon' && (
                <span style={{
                  fontSize: '9px', fontWeight: '700',
                  background: 'rgba(251,191,36,0.15)', color: '#fbbf24',
                  padding: '1px 6px', borderRadius: '999px',
                  textTransform: 'uppercase', letterSpacing: '0.5px',
                }}>
                  Soon
                </span>
              )}
            </a>
          ))}

          <div style={{ marginTop: '28px' }}>
            <h4 style={{ color: '#ffffff', fontWeight: '700', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Contact
            </h4>
            {[
              { Icon: Phone,  text: '+92 320 000 2283',           href: 'tel:+923200002283' },
              { Icon: Mail,   text: 'support@teletix.me', href: 'mailto:support@teletix.me' },
              { Icon: MapPin, text: 'Karachi, Pakistan',           href: '#' },
            ].map(({ Icon, text, href }) => (
              <a key={text} href={href} style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                color: '#64748b', fontSize: '13.5px', padding: '5px 0',
                textDecoration: 'none', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#E8312A'}
                onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
              >
                <Icon size={13} /> {text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '24px 0',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '12px',
      }}>
        <p style={{ fontSize: '13px', color: '#475569' }}>
          © {new Date().getFullYear()} Timeline Telematics. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '24px' }}>
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
            <a key={item} href="#" style={{
              color: '#475569', fontSize: '13px',
              textDecoration: 'none', transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#E8312A'}
              onMouseLeave={e => e.currentTarget.style.color = '#475569'}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
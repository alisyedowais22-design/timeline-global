import React, { useState, useEffect, useRef } from 'react';
import { useGeoRedirect, SERVICES } from '../hooks/useGeoRedirect';

const MenuIcon    = () => <span style={{ fontSize: '24px' }}>☰</span>;
const CloseIcon   = () => <span style={{ fontSize: '24px' }}>✕</span>;
const ChevronDown = () => <span style={{ fontSize: '12px', marginLeft: '4px' }}>▼</span>;

const NAV_LINKS = [
  { label: 'Home',         href: '#home' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'About',        href: '#about' },
  { label: 'Contact',      href: '#contact' },
];

const DEVICES = [
  {
    category: 'Vehicle Trackers',
    items: [
      { label: 'GT06N 4G',  desc: 'Classic Upgraded' },
      { label: 'VG03',      desc: 'Discreet Tracking' },
      { label: 'VL103D',    desc: 'Tiny Device' },
      { label: 'VL103M',    desc: 'Minimal Form' },
      { label: 'VL110C',    desc: 'Any Vehicle' },
    ],
  },
  {
    category: 'AI Dashcams',
    items: [
      { label: 'JC371',   desc: 'AI Dashcam' },
      { label: 'JC450',   desc: 'ADAS Dashcam' },
      { label: 'JC261',   desc: 'Dual Camera AI' },
      { label: 'JC261P',  desc: 'Pro AI Dashcam' },
      { label: 'JC400D',  desc: '4G AI Dashcam' },
    ],
  },
  {
    category: 'CAN & OBD Products',
    items: [
      { label: 'VL502', desc: 'Fleet CAN Tracker' },
    ],
  },
  {
    category: 'Asset Trackers',
    items: [
      { label: 'LL303PRO', desc: '5 Years Battery' },
      { label: 'LL301',    desc: 'Silent Protector' },
    ],
  },
  {
    category: 'Personal Trackers',
    items: [
      { label: 'PL200', desc: 'Silent Guardian' },
    ],
  },
  {
    category: 'Non-AI Dashcams',
    items: [
      { label: 'JC181', desc: 'Basic Dashcam' },
    ],
  },
];

const PK_PRODUCTS_URL = 'https://website.teletix.pk/products';

const Navbar = () => {
  const [scrolled, setScrolled]                       = useState(false);
  const [mobileOpen, setMobileOpen]                   = useState(false);
  const [solutionsOpen, setSolutionsOpen]             = useState(false);
  const [devicesOpen, setDevicesOpen]                 = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileDevicesOpen, setMobileDevicesOpen]     = useState(false);

  const solutionsRef = useRef(null);
  const devicesRef   = useRef(null);

  const region         = useGeoRedirect();
  const isPK           = region === 'PK';
  const loading        = region === 'LOADING';
  const showComingSoon = !isPK && !loading;

  const handleServiceClick = (service) => {
    if (!isPK) return;
    setSolutionsOpen(false);
    setMobileOpen(false);
    window.location.href = service.href;
  };

  const handleDeviceClick = () => {
    if (!isPK) return;
    setDevicesOpen(false);
    setMobileOpen(false);
    window.location.href = PK_PRODUCTS_URL;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target)) setSolutionsOpen(false);
      if (devicesRef.current   && !devicesRef.current.contains(e.target))   setDevicesOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <>
      {/* ── Main Navbar ── */}
      <nav style={{
        background: '#fff',
        borderBottom: '1px solid #e5e7eb',
        boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.08)' : 'none',
        position: 'fixed',
        top: scrolled ? '0' : '40px',
        left: 0, right: 0, zIndex: 1000,
        transition: 'all 0.3s ease',
        
      }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto', padding: '0 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: '72px',
          transition: 'height 0.3s ease',
        }}>

          {/* Logo */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img
              src='/Timelinelogo.png'
              alt='Timeline Telematics'
              style={{
                height: '120px',
                width: '300px',
                transition: 'height 0.3s ease',
                paddingBottom: '15px',
              }}
            />
          </a>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }} className="desktop-nav">
            {NAV_LINKS.map(link => (
              <a key={link.label} href={link.href} style={{
                padding: '7px 14px', fontSize: '13.5px',
                fontFamily: 'Poppins, sans-serif', fontWeight: '600',
                color: '#374151',
                borderRadius: '7px', textDecoration: 'none', transition: 'all 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#E8312A'}
                onMouseLeave={e => e.currentTarget.style.color = '#374151'}
              >{link.label}</a>
            ))}

            {/* Devices dropdown */}
            <div ref={devicesRef} style={{ position: 'relative' }}>
              <button
                onClick={() => { setDevicesOpen(!devicesOpen); setSolutionsOpen(false); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '4px',
                  padding: '7px 14px', fontSize: '13.5px',
                  fontFamily: 'Poppins, sans-serif', fontWeight: '600',
                  color: devicesOpen ? '#E8312A' : '#374151',
                  borderRadius: '7px', background: 'none', border: 'none',
                  cursor: 'pointer', transition: 'all 0.2s',
                }}
              >
                Devices <ChevronDown />
              </button>

              {devicesOpen && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 8px)', left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#fff', borderRadius: '14px',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.14)',
                  border: '1px solid #f0f0f0',
                  padding: '14px 18px', width: 820,
                  zIndex: 9999, animation: 'fadeDown 0.18s ease',
                }}>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    paddingBottom: 10, marginBottom: 12, borderBottom: '1px solid #f3f4f6',
                  }}>
                    <span style={{ fontSize: '10.5px', fontWeight: '700', letterSpacing: '0.08em', color: '#9ca3af', fontFamily: 'Poppins, sans-serif', textTransform: 'uppercase' }}>
                      Our Devices
                    </span>
                    {showComingSoon && (
                      <span style={{ fontSize: '10px', fontWeight: '700', background: '#fef3c7', color: '#d97706', padding: '3px 10px', borderRadius: '20px', textTransform: 'uppercase' }}>
                        Coming Soon in Your Region
                      </span>
                    )}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px 14px' }}>
                    {DEVICES.map((cat) => (
                      <div key={cat.category}>
                        <div style={{ fontSize: '11px', fontWeight: '700', color: '#E8312A', fontFamily: 'Poppins, sans-serif', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6, paddingBottom: 5, borderBottom: '2px solid #fef2f2' }}>
                          {cat.category}
                        </div>
                        {cat.items.map((item) => (
                          <div key={item.label} onClick={handleDeviceClick} style={{ padding: '5px 6px', borderRadius: 8, cursor: isPK ? 'pointer' : 'default', transition: 'background 0.15s' }}
                            onMouseEnter={e => { if (isPK) e.currentTarget.style.background = '#fef2f2'; }}
                            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                          >
                            <div style={{ fontSize: '12.5px', fontWeight: '600', color: isPK ? '#111827' : '#9ca3af', fontFamily: 'Poppins, sans-serif' }}>{item.label}</div>
                            <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: 1 }}>{item.desc}</div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  {isPK && (
                    <div style={{ marginTop: 16, paddingTop: 12, borderTop: '1px solid #f3f4f6', textAlign: 'center' }}>
                      <span onClick={handleDeviceClick} style={{ fontSize: '13px', fontWeight: '700', color: '#E8312A', cursor: 'pointer', fontFamily: 'Poppins, sans-serif' }}>
                        View All Products →
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Solutions dropdown */}
            <div ref={solutionsRef} style={{ position: 'relative' }}>
              <button
                onClick={() => { setSolutionsOpen(!solutionsOpen); setDevicesOpen(false); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '4px',
                  padding: '7px 14px', fontSize: '13.5px',
                  fontFamily: 'Poppins, sans-serif', fontWeight: '600',
                  color: solutionsOpen ? '#E8312A' : '#374151',
                  borderRadius: '7px', background: 'none', border: 'none',
                  cursor: 'pointer', transition: 'all 0.2s',
                }}
              >
                Solutions <ChevronDown />
              </button>

              {solutionsOpen && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 8px)', left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#fff', borderRadius: '12px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.13)',
                  border: '1px solid #f0f0f0',
                  minWidth: '220px', overflow: 'hidden',
                  zIndex: 9999, animation: 'fadeDown 0.18s ease',
                }}>
                  <div style={{ padding: '10px 18px 8px', fontSize: '10.5px', fontWeight: '700', letterSpacing: '0.08em', color: '#9ca3af', fontFamily: 'Poppins, sans-serif', textTransform: 'uppercase', borderBottom: '1px solid #f3f4f6' }}>
                    Our Solutions
                  </div>
                  {loading ? (
                    <div style={{ padding: '16px 18px', fontSize: '13px', color: '#9ca3af' }}>Loading...</div>
                  ) : (
                    SERVICES.map(service => (
                      <div key={service.slug} onClick={() => handleServiceClick(service)} style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '11px 18px', fontSize: '13.5px', fontWeight: '500',
                        fontFamily: 'Poppins, sans-serif', color: '#374151',
                        cursor: isPK ? 'pointer' : 'default',
                        transition: 'all 0.15s', borderBottom: '1px solid #f9fafb',
                      }}
                        onMouseEnter={e => { if (isPK) { e.currentTarget.style.background = '#fef2f2'; e.currentTarget.style.color = '#E8312A'; } }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#374151'; }}
                      >
                        <span>{service.label}</span>
                        {showComingSoon && (
                          <span style={{ fontSize: '9px', fontWeight: '700', letterSpacing: '0.05em', background: '#fef3c7', color: '#d97706', padding: '2px 7px', borderRadius: '20px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                            Coming Soon
                          </span>
                        )}
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right CTA + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a href="#contact" style={{
              background: '#E8312A', color: '#fff', padding: '9px 20px', borderRadius: '8px',
              fontSize: '13.5px', fontWeight: '700', fontFamily: 'Poppins, sans-serif',
              textDecoration: 'none', transition: 'all 0.2s', whiteSpace: 'nowrap',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#c72a23'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#E8312A'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Talk to Expert
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="mob-btn" style={{
              display: 'none', background: 'none', border: 'none',
              cursor: 'pointer', color: '#374151',
            }}>
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{ background: '#fff', borderTop: '1px solid #f3f4f6', padding: '12px 24px 20px' }}>
            {NAV_LINKS.map(link => (
              <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)} style={{
                display: 'block', padding: '11px 0', fontSize: '15px', fontWeight: '600',
                fontFamily: 'Poppins, sans-serif', color: '#374151',
                borderBottom: '1px solid #f3f4f6', textDecoration: 'none',
              }}>{link.label}</a>
            ))}

            {/* Mobile Devices */}
            <div>
              <button onClick={() => setMobileDevicesOpen(!mobileDevicesOpen)} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                width: '100%', padding: '11px 0', fontSize: '15px', fontWeight: '600',
                fontFamily: 'Poppins, sans-serif', color: '#374151',
                background: 'none', border: 'none', borderBottom: '1px solid #f3f4f6', cursor: 'pointer',
              }}>
                Devices <ChevronDown />
              </button>
              {mobileDevicesOpen && (
                <div style={{ paddingLeft: '12px' }}>
                  {DEVICES.map(cat => (
                    <div key={cat.category} style={{ marginBottom: 10 }}>
                      <div style={{ fontSize: '11px', fontWeight: '700', color: '#E8312A', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '8px 0 4px' }}>
                        {cat.category}
                      </div>
                      {cat.items.map(item => (
                        <div key={item.label} onClick={handleDeviceClick} style={{
                          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          padding: '8px 0', borderBottom: '1px solid #f9fafb',
                          cursor: isPK ? 'pointer' : 'default',
                        }}>
                          <div>
                            <div style={{ fontSize: '12.5px', fontWeight: '600', color: isPK ? '#111827' : '#9ca3af' }}>{item.label}</div>
                            <div style={{ fontSize: '11px', color: '#9ca3af' }}>{item.desc}</div>
                          </div>
                          {showComingSoon && (
                            <span style={{ fontSize: '9px', fontWeight: '700', background: '#fef3c7', color: '#d97706', padding: '2px 7px', borderRadius: '20px', textTransform: 'uppercase' }}>
                              Coming Soon
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Solutions */}
            <div>
              <button onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                width: '100%', padding: '11px 0', fontSize: '15px', fontWeight: '600',
                fontFamily: 'Poppins, sans-serif', color: '#374151',
                background: 'none', border: 'none', borderBottom: '1px solid #f3f4f6', cursor: 'pointer',
              }}>
                Solutions <ChevronDown />
              </button>
              {mobileSolutionsOpen && (
                <div style={{ paddingLeft: '12px' }}>
                  {loading ? (
                    <div style={{ padding: '10px 0', fontSize: '13px', color: '#9ca3af' }}>Loading...</div>
                  ) : (
                    SERVICES.map(service => (
                      <div key={service.slug} onClick={() => handleServiceClick(service)} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '10px 0', fontSize: '14px', fontWeight: '500',
                        fontFamily: 'Poppins, sans-serif', color: '#374151',
                        borderBottom: '1px solid #f9fafb',
                        cursor: isPK ? 'pointer' : 'default',
                      }}>
                        <span>{service.label}</span>
                        {showComingSoon && (
                          <span style={{ fontSize: '9px', fontWeight: '700', background: '#fef3c7', color: '#d97706', padding: '2px 7px', borderRadius: '20px', textTransform: 'uppercase' }}>
                            Coming Soon
                          </span>
                        )}
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        <style>{`
          @media(max-width:900px){
            .desktop-nav{display:none!important}
            .mob-btn{display:flex!important}
          }
          @keyframes fadeDown {
            from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
            to   { opacity: 1; transform: translateX(-50%) translateY(0); }
          }
        `}</style>
      </nav>
    </>
  );
};

export default Navbar;
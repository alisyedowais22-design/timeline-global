import React, { useEffect, useRef, useState } from 'react';
import { Quote, Award, Users, Globe, TrendingUp, Shield, Zap, Heart } from 'lucide-react';

const TIMELINE = [
  { year: '2012', title: 'Founded', desc: 'Timeline Telematics was established in Karachi with a vision to modernize fleet management across Pakistan.' },
  { year: '2015', title: 'First 1,000 Fleets', desc: 'Reached a major milestone of 1,000 active fleet customers across Pakistan\'s key industrial sectors.' },
  { year: '2018', title: 'Gulf Expansion', desc: 'Launched operations in UAE and Gulf region, serving logistics and transport operators across the Middle East.' },
  { year: '2021', title: 'Europe Entry', desc: 'Expanded into European markets, bringing our platform to cross-border logistics operators across 12 countries.' },
  { year: '2023', title: '25,000+ Fleets', desc: 'Crossed the milestone of 25,000+ active fleet operators globally with 50M+ data points processed daily.' },
  { year: '2024', title: 'AI Platform Launch', desc: 'Launched next-generation AI-powered predictive analytics and intelligent routing for enterprise fleets.' },
];

const VALUES = [
  { icon: Shield, title: 'Reliability', desc: '99.9% uptime guarantee. Your fleet never sleeps, and neither does our platform.' },
  { icon: Zap, title: 'Innovation', desc: 'We push the boundaries of telematics — from AI routing to predictive maintenance.' },
  { icon: Users, title: 'Customer First', desc: 'Every feature we build starts with a real customer problem. Your success is our success.' },
  { icon: Heart, title: 'Integrity', desc: 'Transparent pricing, honest reporting, and data privacy you can trust.' },
];

const STATS = [
  { value: '12+', label: 'Years in Business', sub: 'Established 2012' },
  { value: '25K+', label: 'Active Fleets', sub: 'Globally managed' },
  { value: '3', label: 'Global Regions', sub: 'PK · UAE · Europe' },
  { value: '200+', label: 'Team Members', sub: 'Across 3 continents' },
];

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

const FadeIn = ({ children, delay = 0, style = {} }) => {
  const [ref, visible] = useVisible();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(28px)',
      transition: `all 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
};

const About = () => {
  return (
    <section id="about" style={{ background: '#fff', fontFamily: 'Poppins, sans-serif' }}>

      {/* ── HERO SPLIT (2 columns) ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}>
        {/* LEFT — Dark brand panel */}
        <div style={{
          background: '#0a0a0a',
          padding: '80px 64px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '460px',
        }}>
          {/* Decorative rings */}
          <div style={{
            position: 'absolute', top: '-70px', right: '-70px',
            width: '260px', height: '260px', borderRadius: '50%',
            border: '1px solid rgba(232,49,42,0.18)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', top: '-30px', right: '-30px',
            width: '160px', height: '160px', borderRadius: '50%',
            border: '1px solid rgba(232,49,42,0.1)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '-50px', left: '-50px',
            width: '180px', height: '180px', borderRadius: '50%',
            border: '1px solid rgba(232,49,42,0.12)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(232,49,42,0.18)',
              color: '#E8312A',
              fontSize: '10px', fontWeight: '700',
              padding: '5px 16px', borderRadius: '999px',
              letterSpacing: '2.5px', textTransform: 'uppercase',
              marginBottom: '28px',
            }}>About Us</div>

            <h1 style={{
              fontWeight: '900',
              fontSize: 'clamp(30px, 3.5vw, 48px)',
              color: '#ffffff',
              lineHeight: 1.08,
              margin: '0 0 24px',
            }}>
              Moving the World.<br />
              <span style={{ color: '#E8312A' }}>Smarter Every Day.</span>
            </h1>

            <p style={{
              fontSize: '14.5px',
              color: '#94a3b8',
              lineHeight: '1.85',
              margin: '0 0 40px',
              maxWidth: '400px',
            }}>
              Since 2012, Timeline Telematics has been the trusted partner for fleet operators
              who demand visibility, safety, and control — from Karachi to Dubai to Frankfurt.
            </p>

            {/* Red accent bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '3px', background: '#E8312A', borderRadius: '2px' }} />
              <span style={{ fontSize: '12px', color: '#4b5563', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '600' }}>Est. 2012 · Karachi, Pakistan</span>
            </div>
          </div>
        </div>

        {/* RIGHT — Stats panel */}
        <div style={{
          background: '#f8f8f8',
          padding: '80px 64px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderLeft: '1px solid #f0f0f0',
        }}>
          <p style={{
            fontSize: '10px', fontWeight: '700',
            color: '#9ca3af', letterSpacing: '2.5px',
            textTransform: 'uppercase', marginBottom: '28px',
          }}>By the Numbers</p>

          {/* Stats grid with dividing lines */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1px',
            background: '#e5e7eb',
            border: '1px solid #e5e7eb',
            borderRadius: '20px',
            overflow: 'hidden',
          }}>
            {STATS.map((s, i) => (
              <div key={i} style={{
                background: '#ffffff',
                padding: '32px 28px',
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#fef9f9'}
                onMouseLeave={e => e.currentTarget.style.background = '#ffffff'}
              >
                <div style={{
                  fontSize: 'clamp(32px, 3.5vw, 46px)',
                  fontWeight: '900',
                  color: '#E8312A',
                  lineHeight: 1,
                }}>{s.value}</div>
                <div style={{
                  fontSize: '10px', fontWeight: '700',
                  color: '#9ca3af', letterSpacing: '1.5px',
                  textTransform: 'uppercase', marginTop: '8px',
                }}>{s.label}</div>
                <div style={{
                  fontSize: '12px', color: '#6b7280', marginTop: '4px',
                }}>{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Live indicator */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            marginTop: '20px', paddingTop: '20px',
            borderTop: '1px solid #e5e7eb',
          }}>
            <div style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: '#22c55e', flexShrink: 0,
              boxShadow: '0 0 0 3px rgba(34,197,94,0.2)',
            }} />
            <span style={{ fontSize: '12px', color: '#6b7280' }}>
              99.9% uptime · 50M+ data points processed daily
            </span>
          </div>
        </div>
      </div>

      {/* ── CEO MESSAGE ── */}
      <div style={{ padding: '100px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '64px',
              alignItems: 'start',
            }}>

              {/* CEO Photo */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                <div style={{ position: 'relative' }}>
                  <div style={{
                    width: '220px', height: '260px', borderRadius: '20px',
                    overflow: 'hidden', position: 'relative',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                  }}>
                    <img
                      src="/M,AhsanNaeem.jpg"
                      alt="CEO"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                    />
                    <div style={{
                      display: 'none', width: '100%', height: '100%',
                      background: 'linear-gradient(135deg, #E8312A, #c72a23)',
                      alignItems: 'center', justifyContent: 'center',
                      fontSize: '56px', fontWeight: '800', color: '#fff',
                    }}>AN</div>
                  </div>
                  <div style={{
                    position: 'absolute', bottom: '-12px', right: '-12px',
                    width: '56px', height: '56px', borderRadius: '14px',
                    background: '#E8312A',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 8px 24px rgba(232,49,42,0.3)',
                  }}>
                    <Award size={26} color="#fff" />
                  </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: '800', fontSize: '18px', color: '#111' }}>
                    Muhammad Ahsan Naeem
                  </div>
                  <div style={{ fontSize: '13px', color: '#E8312A', fontWeight: '600', marginTop: '4px' }}>
                    Founder & Chief Executive Officer
                  </div>
                  <div style={{ fontSize: '12px', color: '#9ca3af', marginTop: '4px' }}>
                    Timeline Telematics
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <div style={{
                  display: 'inline-block', background: '#fef2f2', color: '#E8312A',
                  fontSize: '10px', fontWeight: '700', padding: '5px 14px',
                  borderRadius: '999px', letterSpacing: '2px', textTransform: 'uppercase',
                  marginBottom: '20px',
                }}>Message from the CEO</div>

                <h2 style={{
                  fontWeight: '800',
                  fontSize: 'clamp(22px, 3vw, 34px)',
                  color: '#111',
                  lineHeight: 1.2,
                  marginBottom: '32px',
                }}>
                  "We started with a simple belief:<br />
                  <span style={{ color: '#E8312A' }}>every fleet deserves to be smarter."</span>
                </h2>

                <div style={{
                  paddingLeft: '24px',
                  borderLeft: '3px solid #E8312A',
                  marginBottom: '28px',
                  position: 'relative',
                }}>
                  <Quote size={18} color="#fca5a5" style={{ position: 'absolute', top: 0, left: '-10px', background: '#fff' }} />
                </div>

                {[
                  "When I founded Timeline Telematics in 2012, the fleet management industry in Pakistan was still operating on paper logs and phone calls. Drivers were invisible once they left the depot. Fuel was leaking out of every operation. Safety was an afterthought.",
                  "I knew technology could change this — not just in Pakistan, but across the entire region. Our mission was to build a platform that was powerful enough for enterprise fleets, yet simple enough for a small business owner in Lahore or a logistics operator in Dubai.",
                  "Today, with 25,000+ fleets trusting us globally and teams across Pakistan, UAE, and Europe, I'm proud of what we've built. But this is just the beginning. The future of fleet management is intelligent, predictive, and connected — and we're going to lead it.",
                  "Thank you to every customer, partner, and team member who made this journey possible.",
                ].map((para, i) => (
                  <p key={i} style={{
                    fontSize: '15.5px', color: '#4b5563',
                    lineHeight: '1.85', marginBottom: '18px',
                  }}>{para}</p>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ── TIMELINE ── */}
      <div style={{ background: '#f9fafb', padding: '100px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{
              display: 'inline-block', background: '#fef2f2', color: '#E8312A',
              fontSize: '10px', fontWeight: '700', padding: '5px 14px',
              borderRadius: '999px', letterSpacing: '2px', textTransform: 'uppercase',
              marginBottom: '16px',
            }}>Our Journey</div>
            <h2 style={{
              fontWeight: '800',
              fontSize: 'clamp(28px, 4vw, 44px)',
              color: '#111', lineHeight: 1.15,
            }}>
              12 Years of <span style={{ color: '#E8312A' }}>Building Trust</span>
            </h2>
          </FadeIn>

          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', left: '50%', top: 0, bottom: 0,
              width: '2px', background: '#e5e7eb', transform: 'translateX(-50%)',
            }} />

            {TIMELINE.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{
                  display: 'flex',
                  justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                  marginBottom: '40px',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute', left: '50%', top: '24px',
                    width: '14px', height: '14px', borderRadius: '50%',
                    background: '#E8312A', border: '3px solid #fff',
                    transform: 'translateX(-50%)',
                    boxShadow: '0 0 0 4px rgba(232,49,42,0.15)',
                    zIndex: 1,
                  }} />

                  <div style={{
                    width: '44%',
                    background: '#fff', borderRadius: '16px',
                    padding: '24px 28px',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                  }}>
                    <div style={{
                      display: 'inline-block',
                      background: '#E8312A', color: '#fff',
                      fontWeight: '800', fontSize: '12px',
                      padding: '3px 12px', borderRadius: '999px',
                      marginBottom: '10px',
                    }}>{item.year}</div>
                    <h3 style={{
                      fontWeight: '700', fontSize: '17px',
                      color: '#111', marginBottom: '8px',
                    }}>{item.title}</h3>
                    <p style={{
                      fontSize: '14px', color: '#6b7280', lineHeight: '1.65',
                    }}>{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* ── VALUES ── */}
      <div style={{ background: '#fff', padding: '100px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{
              display: 'inline-block', background: '#fef2f2', color: '#E8312A',
              fontSize: '10px', fontWeight: '700', padding: '5px 14px',
              borderRadius: '999px', letterSpacing: '2px', textTransform: 'uppercase',
              marginBottom: '16px',
            }}>Our Values</div>
            <h2 style={{
              fontWeight: '800',
              fontSize: 'clamp(28px, 4vw, 44px)',
              color: '#111',
            }}>
              What Drives <span style={{ color: '#E8312A' }}>Us</span>
            </h2>
          </FadeIn>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
          }}>
            {VALUES.map((v, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{
                  padding: '32px',
                  borderRadius: '16px',
                  border: '1px solid #e5e7eb',
                  background: '#fff',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#fca5a5';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(232,49,42,0.08)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#e5e7eb';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: '#fef2f2',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '20px',
                  }}>
                    <v.icon size={22} color="#E8312A" />
                  </div>
                  <h3 style={{
                    fontWeight: '700', fontSize: '17px',
                    color: '#111', marginBottom: '10px',
                  }}>{v.title}</h3>
                  <p style={{
                    fontSize: '14px', color: '#6b7280', lineHeight: '1.65',
                  }}>{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
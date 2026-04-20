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
  { value: '12+', label: 'Years in Business' },
  { value: '25K+', label: 'Active Fleets' },
  { value: '3', label: 'Global Regions' },
  { value: '200+', label: 'Team Members' },
];

// Simple intersection observer hook for scroll animations
const useVisible = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
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
      transform: visible ? 'translateY(0)' : 'translateY(24px)',
      transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
};

const About = () => {
  return (
    <section id="about" style={{ background: '#fff' }}>

      {/* ── HERO BANNER ── */}
      <div style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        padding: '80px 24px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(232,49,42,0.12) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-block', background: 'rgba(232,49,42,0.15)',
            color: '#fca5a5', fontSize: '11px', fontWeight: '700',
            padding: '4px 14px', borderRadius: '999px',
            letterSpacing: '1.5px', textTransform: 'uppercase',
            marginBottom: '20px', fontFamily: 'Poppins, sans-serif',
          }}>About Us</div>
          <h1 style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: '800',
            fontSize: 'clamp(32px, 5vw, 56px)', color: '#fff',
            lineHeight: 1.1, marginBottom: '20px',
          }}>
            Moving the World.<br />
            <span style={{ color: '#E8312A' }}>Smarter Every Day.</span>
          </h1>
          <p style={{
            color: '#94a3b8', fontSize: '17px', lineHeight: '1.75',
            fontFamily: 'Poppins, sans-serif',
          }}>
            Since 2012, Timeline Telematics has been the trusted partner for fleet operators who demand visibility, safety, and control — from Karachi to Dubai to Frankfurt.
          </p>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div style={{ background: '#fafafa', borderBottom: '1px solid #f3f4f6', padding: '32px 24px' }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px',
        }}>
          {STATS.map((s, i) => (
            <FadeIn key={i} delay={i * 0.08} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: '900', color: '#E8312A', fontFamily: 'Poppins, sans-serif', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: '12px', fontWeight: '600', color: '#9ca3af', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: '6px', fontFamily: 'Poppins, sans-serif' }}>{s.label}</div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* ── CEO MESSAGE ── */}
      <div style={{ padding: '100px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '64px', alignItems: 'start',
            }} className="ceo-grid">

              {/* CEO Photo */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                <div style={{ position: 'relative' }}>
                  <div style={{
                    width: '220px', height: '260px', borderRadius: '20px',
                    overflow: 'hidden', position: 'relative',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                  }}>
                    <img
                      src="/M,AhsanNaeem.jpg"
                      alt="CEO"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                    />
                    {/* Fallback */}
                    <div style={{
                      display: 'none', width: '100%', height: '100%',
                      background: 'linear-gradient(135deg, #E8312A, #c72a23)',
                      alignItems: 'center', justifyContent: 'center',
                      fontSize: '56px', fontWeight: '800', color: '#fff',
                      fontFamily: 'Poppins, sans-serif',
                    }}>CEO</div>
                  </div>
                  {/* Red accent */}
                  <div style={{
                    position: 'absolute', bottom: '-10px', right: '-10px',
                    width: '60px', height: '60px', borderRadius: '14px',
                    background: '#E8312A',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Award size={28} color="#fff" />
                  </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '800', fontSize: '18px', color: '#111' }}>
                    {/* Replace with actual CEO name */}
                    Muhammad Ahsan Naeem
                  </div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: '#E8312A', fontWeight: '600', marginTop: '4px' }}>
                    Founder & Chief Executive Officer
                  </div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', color: '#9ca3af', marginTop: '4px' }}>
                    Timeline Telematics
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <div style={{
                  display: 'inline-block', background: '#fef2f2', color: '#E8312A',
                  fontSize: '11px', fontWeight: '700', padding: '4px 14px',
                  borderRadius: '999px', letterSpacing: '1.5px', textTransform: 'uppercase',
                  marginBottom: '20px', fontFamily: 'Poppins, sans-serif',
                }}>Message from the CEO</div>

                <h2 style={{
                  fontFamily: 'Poppins, sans-serif', fontWeight: '800',
                  fontSize: 'clamp(24px, 3vw, 36px)', color: '#111',
                  lineHeight: 1.2, marginBottom: '28px',
                }}>
                  "We started with a simple belief:<br />
                  <span style={{ color: '#E8312A' }}>every fleet deserves to be smarter."</span>
                </h2>

                <div style={{ position: 'relative', paddingLeft: '24px', borderLeft: '3px solid #E8312A', marginBottom: '24px' }}>
                  <Quote size={20} color="#fca5a5" style={{ position: 'absolute', top: 0, left: '-11px', background: '#fff' }} />
                </div>

                {[
                  "When I founded Timeline Telematics in 2012, the fleet management industry in Pakistan was still operating on paper logs and phone calls. Drivers were invisible once they left the depot. Fuel was leaking out of every operation. Safety was an afterthought.",
                  "I knew technology could change this — not just in Pakistan, but across the entire region. Our mission was to build a platform that was powerful enough for enterprise fleets, yet simple enough for a small business owner in Lahore or a logistics operator in Dubai.",
                  "Today, with 25,000+ fleets trusting us globally and teams across Pakistan, UAE, and Europe, I'm proud of what we've built. But this is just the beginning. The future of fleet management is intelligent, predictive, and connected — and we're going to lead it.",
                  "Thank you to every customer, partner, and team member who made this journey possible.",
                ].map((para, i) => (
                  <p key={i} style={{
                    fontFamily: 'Poppins, sans-serif', fontSize: '15.5px', color: '#4b5563',
                    lineHeight: '1.8', marginBottom: '16px',
                  }}>{para}</p>
                ))}

              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ── COMPANY STORY / TIMELINE ── */}
      <div style={{ background: '#f9fafb', padding: '100px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{
              display: 'inline-block', background: '#fef2f2', color: '#E8312A',
              fontSize: '11px', fontWeight: '700', padding: '4px 14px',
              borderRadius: '999px', letterSpacing: '1.5px', textTransform: 'uppercase',
              marginBottom: '16px', fontFamily: 'Poppins, sans-serif',
            }}>Our Journey</div>
            <h2 style={{
              fontFamily: 'Poppins, sans-serif', fontWeight: '800',
              fontSize: 'clamp(28px, 4vw, 44px)', color: '#111', lineHeight: 1.15,
            }}>
              12 Years of <span style={{ color: '#E8312A' }}>Building Trust</span>
            </h2>
          </FadeIn>

          {/* Timeline */}
          <div style={{ position: 'relative' }}>
            {/* Center line */}
            <div style={{
              position: 'absolute', left: '50%', top: 0, bottom: 0,
              width: '2px', background: '#e5e7eb', transform: 'translateX(-50%)',
            }} />

            {TIMELINE.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{
                  display: 'flex',
                  justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                  marginBottom: '40px', position: 'relative',
                }} className="timeline-item">
                  {/* Dot */}
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
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    marginLeft: i % 2 === 0 ? 0 : 'auto',
                    marginRight: i % 2 === 0 ? 'auto' : 0,
                  }}>
                    <div style={{
                      display: 'inline-block',
                      background: '#E8312A', color: '#fff',
                      fontFamily: 'Poppins, sans-serif', fontWeight: '800',
                      fontSize: '13px', padding: '3px 12px', borderRadius: '999px',
                      marginBottom: '10px',
                    }}>{item.year}</div>
                    <h3 style={{
                      fontFamily: 'Poppins, sans-serif', fontWeight: '700',
                      fontSize: '17px', color: '#111', marginBottom: '8px',
                    }}>{item.title}</h3>
                    <p style={{
                      fontFamily: 'Poppins, sans-serif', fontSize: '14px',
                      color: '#6b7280', lineHeight: '1.65',
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
              fontSize: '11px', fontWeight: '700', padding: '4px 14px',
              borderRadius: '999px', letterSpacing: '1.5px', textTransform: 'uppercase',
              marginBottom: '16px', fontFamily: 'Poppins, sans-serif',
            }}>Our Values</div>
            <h2 style={{
              fontFamily: 'Poppins, sans-serif', fontWeight: '800',
              fontSize: 'clamp(28px, 4vw, 44px)', color: '#111',
            }}>
              What Drives <span style={{ color: '#E8312A' }}>Us</span>
            </h2>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {VALUES.map((v, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{
                  padding: '32px', borderRadius: '16px',
                  border: '1px solid #e5e7eb', background: '#fff',
                  transition: 'all 0.3s ease', cursor: 'default',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#fca5a5'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(232,49,42,0.1)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: '#fef2f2', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', marginBottom: '20px',
                  }}>
                    <v.icon size={22} color="#E8312A" />
                  </div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', fontSize: '17px', color: '#111', marginBottom: '10px' }}>{v.title}</h3>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: '#6b7280', lineHeight: '1.65' }}>{v.desc}</p>
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
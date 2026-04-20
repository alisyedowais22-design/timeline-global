import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle, ArrowRight, MapPin, Clock } from 'lucide-react';
import { getCaseStudyById } from '../data/caseStudiesData';

const CaseStudyPage = ({ id, onBack }) => {
  const cs = getCaseStudyById(id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!cs) return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ color: '#6b7280', fontSize: 16 }}>Case study not found.</p>
    </div>
  );

  // Coming Soon page
  if (cs.status === 'coming-soon') {
    return (
      <div style={{ background: '#ffffff', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 24px' }}>
          <BackButton onBack={onBack} color={cs.color} />
        </div>
        <div style={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          minHeight: '60vh', textAlign: 'center', padding: '40px 24px',
        }}>
          <div style={{
            width: 80, height: 80, borderRadius: '50%',
            background: '#f3f4f6',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: 24,
          }}>
            <Clock size={36} color="#9ca3af" />
          </div>
          <span style={{
            display: 'inline-block',
            background: '#f3f4f6', color: '#6b7280',
            fontSize: 12, fontWeight: 700,
            padding: '4px 14px', borderRadius: 999,
            letterSpacing: '1.5px', textTransform: 'uppercase',
            marginBottom: 16,
          }}>
            Coming Soon
          </span>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(24px, 3vw, 36px)',
            fontWeight: 800, color: '#111827', marginBottom: 16,
          }}>
            Europe — Expanding Soon
          </h2>
          <p style={{ fontSize: 16, color: '#6b7280', maxWidth: 480, lineHeight: 1.7, marginBottom: 32 }}>
            Timeline Telematics is actively expanding into European markets. Our EU-compliant fleet management and telematics solutions will be available soon. Stay tuned for updates.
          </p>
          <button
            onClick={onBack}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#E8312A', color: '#fff',
              border: 'none', borderRadius: 10,
              padding: '13px 28px', fontSize: 15, fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            <ArrowLeft size={16} /> Back to Case Studies
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* Back button */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 24px 0' }}>
        <BackButton onBack={onBack} color={cs.color} />
      </div>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)',
        borderBottom: '1px solid #e5e7eb',
        padding: '56px 24px 60px',
        marginTop: 24,
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, flexWrap: 'wrap' }}>

            {/* Logo circle */}
            <div style={{
              width: 72, height: 72, borderRadius: 16,
              background: '#fff',
              border: `2px solid ${cs.color}25`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
              boxShadow: `0 4px 20px ${cs.color}18`,
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 800, fontSize: 18,
              color: cs.color,
            }}>
              {cs.company.slice(0, 2).toUpperCase()}
            </div>

            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 14 }}>
                <span style={{
                  background: `${cs.color}15`, color: cs.color,
                  fontSize: 12, fontWeight: 700,
                  padding: '4px 12px', borderRadius: 999,
                  letterSpacing: '1.5px', textTransform: 'uppercase',
                }}>
                  {cs.tag}
                </span>
                <span style={{
                  display: 'flex', alignItems: 'center', gap: 5,
                  color: '#9ca3af', fontSize: 13, fontWeight: 500,
                }}>
                  <MapPin size={12} /> {cs.flag} {cs.region}
                </span>
              </div>
              <h1 style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(26px, 3.5vw, 42px)',
                fontWeight: 800, color: '#111827',
                lineHeight: 1.15, marginBottom: 12,
              }}>
                {cs.industry}
              </h1>
              <p style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.75, maxWidth: 660 }}>
                {cs.overview}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px' }}>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 16, marginBottom: 72,
        }}>
          {cs.stats.map((s, i) => (
            <div key={i} style={{
              background: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: 12, padding: '24px 20px', textAlign: 'center',
            }}>
              <div style={{
                fontSize: 34, fontWeight: 800,
                color: s.color, fontFamily: 'Poppins, sans-serif',
                lineHeight: 1.1, marginBottom: 8,
              }}>{s.value}</div>
              <div style={{ fontSize: 13, color: '#6b7280', fontWeight: 600, lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Challenge */}
        <div style={{ marginBottom: 64 }}>
          <SectionLabel color="#E8312A" bg="#fef2f2">Challenge</SectionLabel>
          <h2 style={sectionHeading}>The Problem</h2>
          <div style={{
            background: '#fff',
            border: '1px solid #e5e7eb',
            borderLeft: `4px solid #E8312A`,
            borderRadius: '0 12px 12px 0',
            padding: '24px 28px',
          }}>
            <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.85 }}>{cs.challenge}</p>
          </div>
        </div>

        {/* Solution features */}
        <div style={{ marginBottom: 64 }}>
          <SectionLabel color={cs.color} bg={`${cs.color}15`}>Solution</SectionLabel>
          <h2 style={sectionHeading}>What We Delivered</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 16,
          }}>
            {cs.features.map((f, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: 12, padding: '22px',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = cs.color + '50';
                  e.currentTarget.style.boxShadow = `0 8px 24px ${cs.color}12`;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: '#111827', marginBottom: 8 }}>{f.title}</h4>
                <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div style={{ marginBottom: 64 }}>
          <SectionLabel color="#16a34a" bg="#f0fdf4">Results</SectionLabel>
          <h2 style={sectionHeading}>The Outcome</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {cs.results.map((r, i) => (
              <div key={i} style={{
                display: 'flex', gap: 14, alignItems: 'flex-start',
                background: '#f9fafb',
                border: '1px solid #e5e7eb',
                borderRadius: 10, padding: '16px 20px',
              }}>
                <CheckCircle size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: 0 }}>{r}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        {cs.quote && (
          <div style={{
            borderLeft: `4px solid ${cs.color}`,
            padding: '20px 24px',
            background: `${cs.color}08`,
            borderRadius: '0 12px 12px 0',
            marginBottom: 64,
          }}>
            <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, fontStyle: 'italic', margin: 0 }}>
              "{cs.quote}"
            </p>
            <p style={{ fontSize: 13, color: '#9ca3af', marginTop: 10, fontWeight: 600, margin: '10px 0 0' }}>
              — {cs.quoteRole}
            </p>
          </div>
        )}

        {/* Tech */}
        <div style={{ marginBottom: 72 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#9ca3af', marginBottom: 14 }}>
            Technology Used
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {cs.tech.map((t, i) => (
              <span key={i} style={{
                fontSize: 13, padding: '6px 14px',
                borderRadius: 999, background: '#f3f4f6',
                color: '#374151', fontWeight: 600,
                border: '1px solid #e5e7eb',
              }}>{t}</span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          background: `linear-gradient(135deg, ${cs.color} 0%, ${cs.color}cc 100%)`,
          borderRadius: 20, padding: '48px 40px', textAlign: 'center',
        }}>
          <h3 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            fontWeight: 800, color: '#fff', marginBottom: 12,
          }}>
            Want Similar Results for Your Business?
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, marginBottom: 28 }}>
            Get a free consultation and live demo tailored to your fleet.
          </p>
          <a href="#contact" onClick={onBack} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', color: cs.color,
            padding: '14px 32px', borderRadius: 10,
            fontSize: 15, fontWeight: 700,
            textDecoration: 'none',
            transition: 'transform 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            Talk to an Expert <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </div>
  );
};

// ── Small reusable helpers ──────────────────────────────────

const BackButton = ({ onBack, color }) => (
  <button
    onClick={onBack}
    style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      background: 'none', border: '1.5px solid #e5e7eb',
      borderRadius: 8, padding: '8px 16px',
      fontSize: 14, fontWeight: 600, color: '#374151',
      cursor: 'pointer', transition: 'all 0.2s',
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.color = color; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#374151'; }}
  >
    <ArrowLeft size={16} /> Back to Case Studies
  </button>
);

const SectionLabel = ({ children, color, bg }) => (
  <span style={{
    display: 'inline-block',
    background: bg, color,
    fontSize: 12, fontWeight: 700,
    padding: '4px 14px', borderRadius: 999,
    letterSpacing: '1.5px', textTransform: 'uppercase',
    marginBottom: 12,
  }}>
    {children}
  </span>
);

const sectionHeading = {
  fontFamily: 'Poppins, sans-serif',
  fontSize: 'clamp(20px, 2.5vw, 30px)',
  fontWeight: 800, color: '#111827',
  marginBottom: 24,
};

export default CaseStudyPage;
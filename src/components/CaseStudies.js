import React, { useState } from 'react';
import { ArrowRight, MapPin, TrendingUp, Clock } from 'lucide-react';
import { CASE_STUDIES_LIST } from '../data/caseStudiesData';

const FILTERS = ['All', 'Europe', 'Middle East', 'Pakistan'];

const CaseStudies = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? CASE_STUDIES_LIST
    : CASE_STUDIES_LIST.filter(c => c.region === activeFilter);

  return (
    <section id="case-studies" style={{ background: '#ffffff', padding: '100px 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', marginBottom: '48px',
          flexWrap: 'wrap', gap: '24px',
        }}>
          <div>
            <div style={{
              display: 'inline-block', background: '#fef2f2',
              color: '#E8312A', fontSize: '12px', fontWeight: '700',
              padding: '4px 14px', borderRadius: '999px',
              letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px',
            }}>
              Case Studies
            </div>
            <h2 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(30px, 4vw, 50px)',
              fontWeight: '800', color: '#111827', lineHeight: '1.1',
            }}>
              Real Results,<br />
              <span style={{ color: '#E8312A' }}>Real Customers</span>
            </h2>
          </div>
          <p style={{ color: '#6b7280', fontSize: '16px', maxWidth: '360px', lineHeight: '1.6' }}>
            See how fleet operators across the globe are transforming their operations with Timeline Telematics.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {FILTERS.map(f => (
            <button key={f} onClick={() => setActiveFilter(f)} style={{
              padding: '8px 20px', borderRadius: '999px',
              fontSize: '13.5px', fontWeight: '700',
              cursor: 'pointer', transition: 'all 0.2s',
              border: activeFilter === f ? 'none' : '1.5px solid #e5e7eb',
              background: activeFilter === f ? '#E8312A' : '#ffffff',
              color: activeFilter === f ? '#ffffff' : '#374151',
              boxShadow: activeFilter === f ? '0 4px 15px rgba(232,49,42,0.3)' : 'none',
            }}>
              {f}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '28px',
        }}>
          {filtered.map((cs) => (
            cs.status === 'coming-soon'
              ? <ComingSoonCard key={cs.id} cs={cs} onNavigate={onNavigate} />
              : <CaseStudyCard key={cs.id} cs={cs} onNavigate={onNavigate} />
          ))}
        </div>

        {/* View All CTA */}
        <div style={{ textAlign: 'center', marginTop: '56px' }}>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            border: '2px solid #E8312A', color: '#E8312A',
            padding: '13px 32px', borderRadius: '8px',
            fontSize: '15px', fontWeight: '700', textDecoration: 'none',
            transition: 'all 0.25s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#E8312A'; e.currentTarget.style.color = '#ffffff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#E8312A'; }}
          >
            Discuss Your Project <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};

// ── Live case study card ─────────────────────────────────────
const CaseStudyCard = ({ cs, onNavigate }) => (
  <div
    onClick={() => onNavigate && onNavigate(cs.id)}
    style={{
      borderRadius: '16px', overflow: 'hidden',
      border: '1px solid #e5e7eb', background: '#ffffff',
      transition: 'all 0.3s ease', cursor: 'pointer',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = '0 15px 45px rgba(0,0,0,0.1)';
      e.currentTarget.style.borderColor = cs.color + '50';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.borderColor = '#e5e7eb';
    }}
  >
    <div style={{ height: '4px', background: cs.color }} />
    <div style={{ padding: '28px' }}>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <span style={{
          background: '#f3f4f6', color: '#374151',
          fontSize: '11px', fontWeight: '700',
          padding: '3px 10px', borderRadius: '999px', letterSpacing: '0.5px',
        }}>{cs.tag}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#9ca3af', fontSize: '12px', fontWeight: '500' }}>
          <MapPin size={11} />
          {cs.flag} {cs.region}
        </div>
      </div>

      <h3 style={{
        fontFamily: 'Poppins, sans-serif', fontWeight: '800',
        fontSize: '18px', color: '#111827', marginBottom: '6px', lineHeight: 1.3,
      }}>{cs.industry}</h3>
      <p style={{ color: '#9ca3af', fontSize: '13px', fontWeight: '500', marginBottom: '16px' }}>{cs.company}</p>
      <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.65', marginBottom: '24px' }}>{cs.desc}</p>

      <div style={{
        background: '#f9fafb', borderRadius: '10px',
        padding: '16px', display: 'flex', gap: '16px', marginBottom: '20px',
      }}>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '4px', color: cs.color, fontWeight: '900',
            fontSize: '20px', fontFamily: 'Poppins, sans-serif',
          }}>
            <TrendingUp size={16} />
            {cs.result}
          </div>
          <div style={{ color: '#9ca3af', fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', marginTop: '3px' }}>
            {cs.resultLabel.toUpperCase()}
          </div>
        </div>
        <div style={{ width: '1px', background: '#e5e7eb' }} />
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ color: '#374151', fontWeight: '800', fontSize: '14px' }}>{cs.metric}</div>
          <div style={{ color: '#9ca3af', fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', marginTop: '3px' }}>
            SCALE
          </div>
        </div>
      </div>

      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        color: cs.color, fontWeight: '700', fontSize: '13.5px',
      }}>
        Read Full Case Study <ArrowRight size={14} />
      </div>
    </div>
  </div>
);

// ── Coming Soon card ─────────────────────────────────────────
const ComingSoonCard = ({ cs, onNavigate }) => (
  <div
    onClick={() => onNavigate && onNavigate(cs.id)}
    style={{
      borderRadius: '16px', overflow: 'hidden',
      border: '1.5px dashed #d1d5db', background: '#fafafa',
      transition: 'all 0.3s ease', cursor: 'pointer',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      minHeight: 280,
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = '#9ca3af';
      e.currentTarget.style.background = '#f3f4f6';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = '#d1d5db';
      e.currentTarget.style.background = '#fafafa';
    }}
  >
    <div style={{ padding: '40px 28px', textAlign: 'center' }}>
      <div style={{
        width: 48, height: 48, borderRadius: '50%',
        background: '#e5e7eb',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 16px',
      }}>
        <Clock size={22} color="#9ca3af" />
      </div>
      <div style={{ fontSize: '20px', marginBottom: 8 }}>{cs.flag}</div>
      <h3 style={{
        fontFamily: 'Poppins, sans-serif', fontWeight: '800',
        fontSize: '18px', color: '#374151', marginBottom: 8,
      }}>
        Europe
      </h3>
      <span style={{
        display: 'inline-block',
        background: '#e5e7eb', color: '#6b7280',
        fontSize: '12px', fontWeight: '700',
        padding: '4px 14px', borderRadius: '999px',
        letterSpacing: '1.5px', textTransform: 'uppercase',
        marginBottom: 12,
      }}>
        Coming Soon
      </span>
      <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.6 }}>
        Timeline Telematics is expanding into European markets. Stay tuned.
      </p>
    </div>
  </div>
);

export default CaseStudies;
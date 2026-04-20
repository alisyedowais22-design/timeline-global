import React from 'react';
import { ArrowRight } from 'lucide-react';
import { INDUSTRY_ICONS } from './IndustryIcons';

const INDUSTRIES = [
  { name: 'Logistics & Courier', slug: 'logistics-courier', color: '#E8312A' },
  { name: 'Public Transport',    slug: 'public-transport',  color: '#1d4ed8' },
  { name: 'Oil & Gas',           slug: 'oil-gas',           color: '#b45309' },
  { name: 'Construction',        slug: 'construction',      color: '#b45309' },
  { name: 'Healthcare',          slug: 'healthcare',        color: '#0f766e' },
  { name: 'Government',          slug: 'government',        color: '#1e40af' },
  { name: 'Agriculture',         slug: 'agriculture',       color: '#15803d' },
];

const Industries = ({ onNavigate }) => (
  <section id="industries" style={{
    background: '#f9fafb',
    padding: '80px 24px',
    borderTop: '1px solid #e5e7eb',
  }}>
    <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div style={{
          display: 'inline-block',
          background: '#fef2f2',
          color: '#E8312A',
          fontSize: '12px', fontWeight: '700',
          padding: '4px 14px', borderRadius: '999px',
          letterSpacing: '1.5px', textTransform: 'uppercase',
          marginBottom: '16px',
        }}>
          Industries
        </div>
        <h2 style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: 'clamp(28px, 3.5vw, 44px)',
          fontWeight: '800',
          color: '#111827',
          marginBottom: '12px',
        }}>
          Industries We Serve
        </h2>
        <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: 1.6 }}>
          From oil tankers to school buses — if it moves, we track it.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
        gap: '16px',
      }}>
        {INDUSTRIES.map((ind, i) => {
          const IconComponent = INDUSTRY_ICONS[ind.name];
          return (
            <div
              key={i}
              onClick={() => onNavigate && onNavigate(ind.slug)}
              style={{
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '14px',
                padding: '28px 16px 22px',
                textAlign: 'center',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = ind.color + '60';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 12px 32px ${ind.color}18`;
                e.currentTarget.querySelector('.ind-arrow').style.opacity = '1';
                e.currentTarget.querySelector('.ind-arrow').style.transform = 'translateX(0)';
                e.currentTarget.querySelector('.ind-icon-wrap').style.background = ind.color + '12';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.querySelector('.ind-arrow').style.opacity = '0';
                e.currentTarget.querySelector('.ind-arrow').style.transform = 'translateX(-4px)';
                e.currentTarget.querySelector('.ind-icon-wrap').style.background = '#f9fafb';
              }}
            >
              {/* Icon wrapper */}
              <div
                className="ind-icon-wrap"
                style={{
                  width: 64, height: 64, borderRadius: 12,
                  background: '#f9fafb',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 14,
                  transition: 'background 0.25s',
                }}
              >
                {IconComponent && <IconComponent size={36} color={ind.color} />}
              </div>

              {/* Label */}
              <div style={{
                fontSize: '13px',
                fontWeight: '700',
                color: '#111827',
                lineHeight: '1.35',
                marginBottom: 10,
              }}>
                {ind.name}
              </div>

              {/* Arrow hint */}
              <div
                className="ind-arrow"
                style={{
                  display: 'flex', alignItems: 'center', gap: 4,
                  fontSize: 11, fontWeight: 600, color: ind.color,
                  opacity: 0,
                  transform: 'translateX(-4px)',
                  transition: 'all 0.2s ease',
                }}
              >
                Explore <ArrowRight size={11} />
              </div>
            </div>
          );
        })}
      </div>

    </div>
  </section>
);

export default Industries;
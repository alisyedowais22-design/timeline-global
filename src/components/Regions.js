import React from 'react';
import { BRANCH_REGIONS } from '../hooks/useGeoRedirect';

const Regions = () => {
  // Safety check: agar BRANCH_REGIONS undefined ya empty ho
  if (!BRANCH_REGIONS || BRANCH_REGIONS.length === 0) {
    return null;
  }

  return (
    <section id="regions" style={{ padding: '60px 20px', background: '#f9fafb' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '12px', fontFamily: 'Poppins, sans-serif' }}>
          Our Global Presence
        </h2>
        <p style={{ color: '#6b7280', marginBottom: '48px', fontFamily: 'Poppins, sans-serif' }}>
          Regional sites tailored to your needs
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
        }}>
          {BRANCH_REGIONS.map((region, idx) => (
            <div
              key={region.code || idx}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                transition: 'transform 0.2s',
                cursor: 'pointer',
                borderTop: `4px solid ${region.color || '#E8312A'}`,
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              onClick={() => window.location.href = region.href}
            >
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>{region.flag || '🌍'}</div>
              <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '8px', fontFamily: 'Poppins, sans-serif' }}>
                {region.name || 'Region'}
              </h3>
              <p style={{ color: '#6b7280', fontSize: '14px', fontFamily: 'Poppins, sans-serif', marginBottom: '16px' }}>
                {region.description || 'Explore our solutions in this region'}
              </p>
              <a
                href={region.href}
                style={{ color: region.color || '#E8312A', textDecoration: 'none', fontWeight: '500' }}
                onClick={(e) => e.stopPropagation()}
              >
                Visit Site →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Regions;
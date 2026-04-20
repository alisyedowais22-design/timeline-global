import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SOLUTIONS } from '../data/content';

const Solutions = () => (
  <section id="solutions" style={{
    background: '#f9fafb',
    padding: '100px 24px',
  }}>
    <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <div style={{
          display: 'inline-block',
          background: '#fef2f2',
          color: '#E8312A',
          fontSize: '12px',
          fontWeight: '700',
          padding: '4px 14px',
          borderRadius: '999px',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}>
          What We Offer
        </div>
        <h2 style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: 'clamp(32px, 4vw, 52px)',
          fontWeight: '800',
          color: '#111827',
          marginBottom: '16px',
        }}>
          Complete Fleet Intelligence<br />
          <span style={{ color: '#E8312A' }}>Platform</span>
        </h2>
        <p style={{
          color: '#6b7280',
          fontSize: '17px',
          maxWidth: '540px',
          margin: '0 auto',
          lineHeight: '1.7',
        }}>
          Everything you need to manage, optimize, and protect your fleet — in one powerful platform.
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
      }}>
        {SOLUTIONS.map((sol, i) => (
          <div key={i} style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '32px',
            border: '1px solid #e5e7eb',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#fca5a5';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(232,49,42,0.1)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#e5e7eb';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{
              width: '52px',
              height: '52px',
              background: '#fef2f2',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              marginBottom: '20px',
            }}>{sol.icon}</div>
            <h3 style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '700',
              fontSize: '18px',
              color: '#111827',
              marginBottom: '10px',
            }}>{sol.title}</h3>
            <p style={{
              color: '#6b7280',
              fontSize: '14.5px',
              lineHeight: '1.65',
              marginBottom: '20px',
            }}>{sol.desc}</p>
            <a href="#" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              color: '#E8312A',
              fontWeight: '700',
              fontSize: '13.5px',
              textDecoration: 'none',
              transition: 'gap 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.gap = '10px'}
              onMouseLeave={e => e.currentTarget.style.gap = '5px'}
            >
              Learn More <ArrowRight size={14} />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Solutions;
